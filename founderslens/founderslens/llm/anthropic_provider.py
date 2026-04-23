"""Anthropic (Claude) provider. Uses tool-use for reliable JSON extraction."""

from __future__ import annotations

import copy
import json
from typing import Any, Optional, Type

from anthropic import AsyncAnthropic
from pydantic import BaseModel

from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.utils.retry import retry_async


def _inline_refs(schema: dict[str, Any]) -> dict[str, Any]:
    # Anthropic tool input_schema rejects `$defs` / `$ref`. Pydantic emits them
    # whenever a model references another model. Resolve every `$ref` against
    # `$defs`, drop the `$defs` key, return a self-contained schema.
    schema = copy.deepcopy(schema)
    defs = schema.pop("$defs", {}) or schema.pop("definitions", {})

    def resolve(node: Any) -> Any:
        if isinstance(node, dict):
            if "$ref" in node and isinstance(node["$ref"], str):
                ref = node["$ref"]
                if ref.startswith("#/$defs/") or ref.startswith("#/definitions/"):
                    key = ref.split("/")[-1]
                    if key in defs:
                        merged = resolve(defs[key])
                        # honor sibling keys (e.g. description) alongside $ref
                        extras = {k: resolve(v) for k, v in node.items() if k != "$ref"}
                        return {**merged, **extras}
            return {k: resolve(v) for k, v in node.items()}
        if isinstance(node, list):
            return [resolve(item) for item in node]
        return node

    return resolve(schema)


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
                "input_schema": _inline_refs(schema.model_json_schema()),
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
