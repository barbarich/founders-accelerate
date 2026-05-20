"""OpenAI (GPT) provider. Uses response_format=json_schema for structured extraction.

Temperature handling: reasoning models (o-series, gpt-5 line) reject any
non-default `temperature`. We skip the param for known reasoning families and
self-heal on the first 400 from anything else — see `temperature_compat`.
"""

from __future__ import annotations

import json
import logging
from typing import Any, Optional, Type

from openai import AsyncOpenAI

from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.llm.temperature_compat import (
    is_temperature_rejection,
    register_no_temperature,
    supports_custom_temperature,
)
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)


class OpenAIProvider(LLMProvider):
    provider_name = "openai"
    default_models = {
        "main": "gpt-4o",
        "premium": "gpt-4o",         # GPT-4o is our top tier; o1 too slow for pipeline
    }

    def __init__(self, api_key: str):
        super().__init__(api_key)
        self._client = AsyncOpenAI(api_key=api_key)

    async def _create(self, *, model: str, temperature: float, **kwargs: Any):
        """Wrap chat.completions.create with temperature self-heal.

        If we know the model rejects custom temperature, we never send it.
        Otherwise we send it and, on a temperature-rejection 400, retry once
        without it (and remember the model so future calls skip the param).
        """
        if supports_custom_temperature(self.provider_name, model):
            try:
                return await self._client.chat.completions.create(
                    model=model, temperature=temperature, **kwargs,
                )
            except Exception as e:
                if not is_temperature_rejection(e):
                    raise
                log.warning(
                    "openai model %r rejected temperature=%s — retrying without; "
                    "future calls will skip the param.",
                    model, temperature,
                )
                register_no_temperature(self.provider_name, model)
        return await self._client.chat.completions.create(model=model, **kwargs)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model = model or self.default_models["main"]
        resp = await self._create(
            model=model, temperature=temperature,
            max_completion_tokens=max_tokens,
            messages=[
                {"role": "system", "content": system},
                {"role": "user", "content": user},
            ],
        )
        choice = resp.choices[0]
        return LLMResponse(
            text=choice.message.content or "",
            tokens_in=resp.usage.prompt_tokens if resp.usage else 0,
            tokens_out=resp.usage.completion_tokens if resp.usage else 0,
            model=resp.model, provider=self.provider_name, stop_reason=choice.finish_reason,
        )

    @retry_async(exceptions=(Exception,))
    async def extract_json(
        self, *, schema: Type[T], system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 4096, temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        model = model or self.default_models["main"]
        resp = await self._create(
            model=model, temperature=temperature,
            max_completion_tokens=max_tokens,
            response_format={
                "type": "json_schema",
                "json_schema": {
                    "name": schema.__name__,
                    "schema": schema.model_json_schema(),
                    "strict": False,
                },
            },
            messages=[
                {"role": "system", "content": system},
                {"role": "user", "content": user},
            ],
        )
        choice = resp.choices[0]
        raw = choice.message.content or "{}"
        parsed = schema.model_validate(json.loads(raw))
        return parsed, LLMResponse(
            text=raw,
            tokens_in=resp.usage.prompt_tokens if resp.usage else 0,
            tokens_out=resp.usage.completion_tokens if resp.usage else 0,
            model=resp.model, provider=self.provider_name, stop_reason=choice.finish_reason,
        )
