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
        resp = await mdl.generate_content_async(
            prompt,
            generation_config={
                "max_output_tokens": max_tokens,
                "temperature": temperature,
                "response_mime_type": "application/json",
                "response_schema": _inline_refs(schema.model_json_schema()),
            },
        )
        raw = ""
        try:
            raw = resp.text or "{}"
        except Exception:
            if resp.candidates:
                parts = getattr(resp.candidates[0].content, "parts", [])
                raw = "".join(getattr(p, "text", "") for p in parts) or "{}"
        parsed = schema.model_validate(json.loads(raw))
        usage = getattr(resp, "usage_metadata", None)
        return parsed, LLMResponse(
            text=raw,
            tokens_in=getattr(usage, "prompt_token_count", 0) if usage else 0,
            tokens_out=getattr(usage, "candidates_token_count", 0) if usage else 0,
            model=model_id, provider=self.provider_name,
            stop_reason=str(getattr(resp.candidates[0], "finish_reason", "")) if resp.candidates else None,
        )
