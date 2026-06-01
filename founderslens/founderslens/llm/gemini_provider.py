"""Google Gemini provider. Uses response_schema for structured extraction.

Requires google-generativeai>=0.8 in requirements.
"""

from __future__ import annotations

import json
import logging
from typing import Any, Optional, Type

from founderslens import config
from founderslens.llm.anthropic_provider import _inline_refs
from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.llm.temperature_compat import (
    is_temperature_rejection,
    register_no_temperature,
    supports_custom_temperature,
)
from founderslens.utils.json_extract import loads_lenient
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)


def _finish_reason_truncated(resp: Any) -> bool:
    """True if Gemini stopped because it hit max_output_tokens.

    On thinking models the hidden reasoning can exhaust the budget before the
    JSON answer is complete — finish_reason == MAX_TOKENS is the signal to
    regenerate with more headroom. Defensive against the enum/int/str shapes the
    SDK has used across versions.
    """
    try:
        cands = getattr(resp, "candidates", None)
        if not cands:
            return False
        fr = getattr(cands[0], "finish_reason", None)
        if fr is None:
            return False
        name = getattr(fr, "name", None) or str(fr)
        return "MAX_TOKEN" in name.upper()
    except Exception:
        return False

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

    def _gen_config(self, model_id: str, *, max_tokens: int, temperature: float, **extra: Any) -> dict:
        """Build generation_config, omitting temperature for models that reject it."""
        cfg: dict[str, Any] = {"max_output_tokens": max_tokens, **extra}
        if supports_custom_temperature(self.provider_name, model_id):
            cfg["temperature"] = temperature
        return cfg

    async def _generate(self, mdl, prompt: str, model_id: str, *, max_tokens: int, temperature: float, **extra: Any):
        """Wrap generate_content_async with the same temperature self-heal as the other providers."""
        cfg = self._gen_config(model_id, max_tokens=max_tokens, temperature=temperature, **extra)
        had_temp = "temperature" in cfg
        try:
            return await mdl.generate_content_async(prompt, generation_config=cfg)
        except Exception as e:
            if not had_temp or not is_temperature_rejection(e):
                raise
            log.warning(
                "gemini model %r rejected temperature=%s — retrying without; "
                "future calls will skip the param.",
                model_id, temperature,
            )
            register_no_temperature(self.provider_name, model_id)
            cfg.pop("temperature", None)
            return await mdl.generate_content_async(prompt, generation_config=cfg)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model_id = model or self.default_models["main"]
        mdl = self._model(model_id)
        # Gemini uses system instruction on the model itself; combine into one prompt
        prompt = f"{system}\n\n---\n\n{user}"
        resp = await self._generate(
            mdl, prompt, model_id, max_tokens=max_tokens, temperature=temperature,
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

    async def _generate_structured(
        self, mdl, prompt: str, model_id: str, gemini_schema: dict,
        *, max_tokens: int, temperature: float,
    ):
        """Generate JSON: strict response_schema first, prompt-only on schema rejection.

        `_generate` handles temperature self-heal under the hood.
        """
        try:
            return await self._generate(
                mdl, prompt, model_id,
                max_tokens=max_tokens, temperature=temperature,
                response_mime_type="application/json",
                response_schema=gemini_schema,
            )
        except Exception as schema_err:
            # Don't swallow temperature rejections — _generate already handled them.
            if is_temperature_rejection(schema_err):
                raise
            log.warning("gemini response_schema rejected (%s) — falling back to prompt-only JSON", schema_err)
            schema_hint = json.dumps(gemini_schema, ensure_ascii=False)
            fallback_prompt = (
                f"{prompt}\n\n---\n\n"
                f"Верни ТОЛЬКО валидный JSON-объект по этой схеме:\n```json\n{schema_hint}\n```\n"
                "Без пояснений и без markdown-ограждений."
            )
            return await self._generate(
                mdl, fallback_prompt, model_id,
                max_tokens=max_tokens, temperature=temperature,
                response_mime_type="application/json",
            )

    @staticmethod
    def _response_text(resp: Any) -> str:
        """Robustly pull text out of a Gemini response (handles blocked / no-parts)."""
        try:
            t = resp.text
            if t:
                return t
        except Exception:
            pass
        try:
            if getattr(resp, "candidates", None):
                parts = getattr(resp.candidates[0].content, "parts", [])
                return "".join(getattr(p, "text", "") for p in parts)
        except Exception:
            pass
        return ""

    def _llm_response(self, raw: str, resp: Any, model_id: str) -> LLMResponse:
        usage = getattr(resp, "usage_metadata", None) if resp is not None else None
        stop = None
        if resp is not None:
            try:
                stop = str(getattr(resp.candidates[0], "finish_reason", "")) if resp.candidates else None
            except Exception:
                stop = None
        return LLMResponse(
            text=raw,
            tokens_in=getattr(usage, "prompt_token_count", 0) if usage else 0,
            tokens_out=getattr(usage, "candidates_token_count", 0) if usage else 0,
            model=model_id, provider=self.provider_name, stop_reason=stop,
        )

    @retry_async(exceptions=(Exception,))
    async def extract_json(
        self, *, schema: Type[T], system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 4096, temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        model_id = model or self.default_models["main"]
        mdl = self._model(model_id)
        prompt = f"{system}\n\n---\n\n{user}"
        gemini_schema = _prepare_gemini_schema(schema)

        # Floor the budget so a thinking model has room for hidden reasoning AND
        # the JSON answer. If it still truncates (finish_reason == MAX_TOKENS),
        # regenerate with double the budget up to the ceiling. Only after that do
        # we fall back to salvaging whatever partial JSON we got.
        budget = max(max_tokens, config.LLM_JSON_MIN_TOKENS)
        ceiling = config.LLM_JSON_MAX_TOKENS_CEILING
        last_raw, last_resp = "", None

        while True:
            resp = await self._generate_structured(
                mdl, prompt, model_id, gemini_schema,
                max_tokens=budget, temperature=temperature,
            )
            raw = self._response_text(resp)
            if raw:
                last_raw, last_resp = raw, resp

            if not _finish_reason_truncated(resp):
                # Model reports it finished — parse should work. If it somehow
                # doesn't, escalating the budget won't hurt and may help.
                try:
                    parsed = schema.model_validate(loads_lenient(raw))
                    return parsed, self._llm_response(raw, resp, model_id)
                except Exception as e:
                    log.warning("gemini extract_json finished but unparseable (%s) — escalating budget", e)

            if budget >= ceiling:
                break
            budget = min(budget * 2, ceiling)
            log.warning(
                "gemini extract_json truncated (model=%s, schema=%s) — retrying with max_output_tokens=%d",
                model_id, schema.__name__, budget,
            )

        # Budgets exhausted — salvage the best (partial) response we received.
        try:
            parsed = schema.model_validate(loads_lenient(last_raw))
            log.warning("gemini extract_json: salvaged %s from truncated/dirty output", schema.__name__)
            return parsed, self._llm_response(last_raw, last_resp, model_id)
        except Exception as e:
            raise RuntimeError(
                f"gemini extract_json: no valid {schema.__name__} after escalating to "
                f"{budget} output tokens — {e}; raw[:120]={last_raw[:120]!r}"
            ) from e
