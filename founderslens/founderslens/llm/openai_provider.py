"""OpenAI (GPT) provider. Uses response_format=json_schema for structured extraction."""

from __future__ import annotations

import json
from typing import Optional, Type

from openai import AsyncOpenAI

from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.utils.retry import retry_async


class OpenAIProvider(LLMProvider):
    provider_name = "openai"
    default_models = {
        "main": "gpt-4o",
        "premium": "gpt-4o",         # GPT-4o is our top tier; o1 too slow for pipeline
    }

    def __init__(self, api_key: str):
        super().__init__(api_key)
        self._client = AsyncOpenAI(api_key=api_key)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model = model or self.default_models["main"]
        resp = await self._client.chat.completions.create(
            model=model, max_tokens=max_tokens, temperature=temperature,
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
        resp = await self._client.chat.completions.create(
            model=model, max_tokens=max_tokens, temperature=temperature,
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
