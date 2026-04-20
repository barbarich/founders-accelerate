"""Anthropic (Claude) provider. Uses tool-use for reliable JSON extraction."""

from __future__ import annotations

import json
from typing import Any, Optional, Type

from anthropic import AsyncAnthropic
from pydantic import BaseModel

from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.utils.retry import retry_async


class AnthropicProvider(LLMProvider):
    provider_name = "anthropic"
    default_models = {
        "main": "claude-sonnet-4-5",
        "premium": "claude-opus-4-7",
    }

    def __init__(self, api_key: str):
        super().__init__(api_key)
        self._client = AsyncAnthropic(api_key=api_key)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model = model or self.default_models["main"]
        kwargs: dict[str, Any] = {
            "model": model, "system": system, "max_tokens": max_tokens,
            "messages": [{"role": "user", "content": user}],
        }
        # Opus 4.7 deprecated `temperature` (extended thinking mode requires default).
        if "opus" not in model.lower():
            kwargs["temperature"] = temperature
        msg = await self._client.messages.create(**kwargs)
        text = "".join(b.text for b in msg.content if getattr(b, "type", "") == "text")
        return LLMResponse(
            text=text, tokens_in=msg.usage.input_tokens, tokens_out=msg.usage.output_tokens,
            model=msg.model, provider=self.provider_name, stop_reason=msg.stop_reason,
        )

    @retry_async(exceptions=(Exception,))
    async def extract_json(
        self, *, schema: Type[T], system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 4096, temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        model = model or self.default_models["main"]
        tool_name = f"emit_{schema.__name__.lower()}"
        kwargs: dict[str, Any] = {
            "model": model, "system": system, "max_tokens": max_tokens,
            "tools": [{
                "name": tool_name,
                "description": f"Emit a {schema.__name__} result.",
                "input_schema": schema.model_json_schema(),
            }],
            "tool_choice": {"type": "tool", "name": tool_name},
            "messages": [{"role": "user", "content": user}],
        }
        if "opus" not in model.lower():
            kwargs["temperature"] = temperature
        msg = await self._client.messages.create(**kwargs)
        tool_input: Optional[dict[str, Any]] = None
        for b in msg.content:
            if getattr(b, "type", "") == "tool_use" and b.name == tool_name:
                tool_input = b.input
                break
        if tool_input is None:
            raise RuntimeError(f"anthropic: no tool_use block returned (stop={msg.stop_reason})")
        parsed = schema.model_validate(tool_input)
        return parsed, LLMResponse(
            text=json.dumps(tool_input, ensure_ascii=False),
            tokens_in=msg.usage.input_tokens, tokens_out=msg.usage.output_tokens,
            model=msg.model, provider=self.provider_name, stop_reason=msg.stop_reason,
            raw_tool_input=tool_input,
        )
