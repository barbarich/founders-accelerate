"""Google Gemini provider. Uses response_schema for structured extraction.

Requires google-generativeai>=0.8 in requirements.
"""

from __future__ import annotations

import json
import logging
from typing import Any, Optional, Type

from founderslens.llm.anthropic_provider import _inline_refs
from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)

# Gemini's response_schema accepts a subset of OpenAPI 3.0. Keys it tolerates:
# type, format, description, nullable, enum, items, properties, required, anyOf.
# Everything else (title, default, additionalProperties, examples, allOf, oneOf,
# const, $ref, $defs, minLength/maxLength, minimum/maximum, pattern) trips
# "Unknown field for Schema". We strip them recursively. Also fold pydantic's
# `anyOf: [T, {type:null}]` into `nullable: true` since that's how Gemini
# expresses optionality.
_GEMINI_ALLOWED_KEYS = {
    "type", "format", "description", "nullable",
    "enum", "items", "properties", "required", "anyOf",
}


def _gemini_clean(schema: Any) -> Any:
    if isinstance(schema, dict):
        # Detect Optional[T] pattern: anyOf: [T, {type:'null'}] → T + nullable=True
        if "anyOf" in schema and isinstance(schema["anyOf"], list):
            non_null = [s for s in schema["anyOf"] if not (isinstance(s, dict) and s.get("type") == "null")]
            has_null = len(non_null) < len(schema["anyOf"])
            if has_null and len(non_null) == 1:
                merged = _gemini_clean(non_null[0])
                if isinstance(merged, dict):
                    merged = {**merged, "nullable": True}
                for k in ("description",):
                    if k in schema and k not in merged:
                        merged[k] = schema[k]
                return merged
        out = {}
        for k, v in schema.items():
            if k not in _GEMINI_ALLOWED_KEYS:
                continue
            # `properties` and `$defs`-like maps hold schemas keyed by arbitrary
            # property names — recurse into the VALUES but don't filter the keys.
            if k == "properties" and isinstance(v, dict):
                out[k] = {prop_name: _gemini_clean(prop_schema) for prop_name, prop_schema in v.items()}
            else:
                out[k] = _gemini_clean(v)
        return out
    if isinstance(schema, list):
        return [_gemini_clean(item) for item in schema]
    return schema


def _prepare_gemini_schema(schema_cls: Type) -> dict:
    return _gemini_clean(_inline_refs(schema_cls.model_json_schema()))


class GeminiProvider(LLMProvider):
    provider_name = "gemini"
    default_models = {
        "main": "gemini-2.0-flash-exp",
        "premium": "gemini-1.5-pro",
    }

    def __init__(self, api_key: str):
        super().__init__(api_key)
        try:
            import google.generativeai as genai
        except ImportError as e:
            raise RuntimeError(
                "gemini provider requires `google-generativeai` — add to requirements.txt and `pip install`."
            ) from e
        self._genai = genai
        genai.configure(api_key=api_key)

    def _model(self, model_id: str):
        return self._genai.GenerativeModel(model_id)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model_id = model or self.default_models["main"]
        mdl = self._model(model_id)
        # Gemini uses system instruction on the model itself; combine into one prompt
        prompt = f"{system}\n\n---\n\n{user}"
        resp = await mdl.generate_content_async(
            prompt,
            generation_config={
                "max_output_tokens": max_tokens,
                "temperature": temperature,
            },
        )
        text = ""
        try:
            text = resp.text or ""
        except Exception:
            # candidates[0].content.parts may not include text if blocked
            if resp.candidates:
                parts = getattr(resp.candidates[0].content, "parts", [])
                text = "".join(getattr(p, "text", "") for p in parts)
        usage = getattr(resp, "usage_metadata", None)
        return LLMResponse(
            text=text,
            tokens_in=getattr(usage, "prompt_token_count", 0) if usage else 0,
            tokens_out=getattr(usage, "candidates_token_count", 0) if usage else 0,
            model=model_id, provider=self.provider_name,
            stop_reason=str(getattr(resp.candidates[0], "finish_reason", "")) if resp.candidates else None,
        )

    @retry_async(exceptions=(Exception,))
    async def extract_json(
        self, *, schema: Type[T], system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 4096, temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        model_id = model or self.default_models["main"]
        mdl = self._model(model_id)
        prompt = f"{system}\n\n---\n\n{user}"

        # Try strict response_schema first; if Gemini rejects the schema, fall
        # back to prompt-driven JSON extraction so the user's request still
        # completes instead of failing the whole pipeline on a schema quirk.
        resp = None
        try:
            resp = await mdl.generate_content_async(
                prompt,
                generation_config={
                    "max_output_tokens": max_tokens,
                    "temperature": temperature,
                    "response_mime_type": "application/json",
                    "response_schema": _prepare_gemini_schema(schema),
                },
            )
        except Exception as schema_err:
            log.warning("gemini response_schema rejected (%s) — falling back to prompt-only JSON", schema_err)
            schema_hint = json.dumps(_prepare_gemini_schema(schema), ensure_ascii=False)
            fallback_prompt = (
                f"{prompt}\n\n---\n\n"
                f"Return ONLY a valid JSON object matching this shape:\n```json\n{schema_hint}\n```\n"
                "No prose, no markdown fences in your output."
            )
            resp = await mdl.generate_content_async(
                fallback_prompt,
                generation_config={
                    "max_output_tokens": max_tokens,
                    "temperature": temperature,
                    "response_mime_type": "application/json",
                },
            )

        raw = ""
        try:
            raw = resp.text or "{}"
        except Exception:
            if resp.candidates:
                parts = getattr(resp.candidates[0].content, "parts", [])
                raw = "".join(getattr(p, "text", "") for p in parts) or "{}"
        # Models occasionally wrap JSON in ```json fences despite instructions
        raw_stripped = raw.strip()
        if raw_stripped.startswith("```"):
            raw_stripped = raw_stripped.strip("`")
            if raw_stripped.lower().startswith("json"):
                raw_stripped = raw_stripped[4:]
            raw_stripped = raw_stripped.strip()
        parsed = schema.model_validate(json.loads(raw_stripped))
        usage = getattr(resp, "usage_metadata", None)
        return parsed, LLMResponse(
            text=raw,
            tokens_in=getattr(usage, "prompt_token_count", 0) if usage else 0,
            tokens_out=getattr(usage, "candidates_token_count", 0) if usage else 0,
            model=model_id, provider=self.provider_name,
            stop_reason=str(getattr(resp.candidates[0], "finish_reason", "")) if resp.candidates else None,
        )
