"""Anthropic (Claude) provider. Uses tool-use for reliable JSON extraction.

Temperature handling: Anthropic Opus 4.7+ deprecated `temperature` (extended
thinking requires the default). For maximum forward-compatibility we route
every call through `temperature_compat` — same self-heal pattern as the OpenAI
provider, so if a future Claude model adopts the same restriction we don't
need a code change to keep working.
"""

from __future__ import annotations

import copy
import json
import logging
from typing import Any, Optional, Type

from anthropic import AsyncAnthropic
from pydantic import BaseModel

from founderslens import config
from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.llm.temperature_compat import (
    is_temperature_rejection,
    register_no_temperature,
    supports_custom_temperature,
)
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)


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

    async def _create(self, *, model: str, temperature: float, **kwargs: Any):
        """Wrap messages.create with temperature self-heal (mirrors OpenAI provider)."""
        if supports_custom_temperature(self.provider_name, model):
            try:
                return await self._client.messages.create(
                    model=model, temperature=temperature, **kwargs,
                )
            except Exception as e:
                if not is_temperature_rejection(e):
                    raise
                log.warning(
                    "anthropic model %r rejected temperature=%s — retrying without; "
                    "future calls will skip the param.",
                    model, temperature,
                )
                register_no_temperature(self.provider_name, model)
        return await self._client.messages.create(model=model, **kwargs)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model = model or self.default_models["main"]
        msg = await self._create(
            model=model, temperature=temperature,
            system=system, max_tokens=max_tokens,
            messages=[{"role": "user", "content": user}],
        )
        text = "".join(b.text for b in msg.content if getattr(b, "type", "") == "text")
        return LLMResponse(
            text=text, tokens_in=msg.usage.input_tokens, tokens_out=msg.usage.output_tokens,
            model=msg.model, provider=self.provider_name, stop_reason=msg.stop_reason,
        )

    def _mk_response(self, tool_input: dict[str, Any], msg: Any, model_id: str) -> LLMResponse:
        return LLMResponse(
            text=json.dumps(tool_input, ensure_ascii=False),
            tokens_in=msg.usage.input_tokens, tokens_out=msg.usage.output_tokens,
            model=getattr(msg, "model", model_id), provider=self.provider_name,
            stop_reason=getattr(msg, "stop_reason", None), raw_tool_input=tool_input,
        )

    @retry_async(exceptions=(Exception,))
    async def extract_json(
        self, *, schema: Type[T], system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 4096, temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        model = model or self.default_models["main"]
        tool_name = f"emit_{schema.__name__.lower()}"
        tools = [{
            "name": tool_name,
            "description": f"Emit a {schema.__name__} result.",
            "input_schema": _inline_refs(schema.model_json_schema()),
        }]

        # tool_use returns a structured dict (no string parsing), so the only way
        # it fails is a budget truncation: stop_reason == "max_tokens" with the
        # tool call cut off (partial/absent input). Floor the budget and escalate
        # on truncation — mirrors the Gemini/OpenAI providers.
        budget = max(max_tokens, config.LLM_JSON_MIN_TOKENS)
        ceiling = config.LLM_JSON_MAX_TOKENS_CEILING
        last_input: Optional[dict[str, Any]] = None
        last_msg: Any = None

        while True:
            msg = await self._create(
                model=model, temperature=temperature,
                system=system, max_tokens=budget,
                tools=tools,
                tool_choice={"type": "tool", "name": tool_name},
                messages=[{"role": "user", "content": user}],
            )
            tool_input: Optional[dict[str, Any]] = None
            for b in msg.content:
                if getattr(b, "type", "") == "tool_use" and b.name == tool_name:
                    tool_input = b.input
                    break
            if tool_input is not None:
                last_input, last_msg = tool_input, msg
            truncated = getattr(msg, "stop_reason", None) == "max_tokens"

            if tool_input is not None and not truncated:
                try:
                    return schema.model_validate(tool_input), self._mk_response(tool_input, msg, model)
                except Exception as e:
                    log.warning("anthropic extract_json tool input invalid (%s) — escalating budget", e)

            if budget >= ceiling:
                break
            budget = min(budget * 2, ceiling)
            log.warning(
                "anthropic extract_json truncated (model=%s, schema=%s) — retrying with max_tokens=%d",
                model, schema.__name__, budget,
            )

        if last_input is not None:
            try:
                return schema.model_validate(last_input), self._mk_response(last_input, last_msg, model)
            except Exception as e:
                raise RuntimeError(
                    f"anthropic extract_json: tool input for {schema.__name__} invalid after "
                    f"escalating to {budget} tokens — {e}"
                ) from e
        raise RuntimeError(
            f"anthropic extract_json: no tool_use block for {schema.__name__} "
            f"(stop={getattr(last_msg, 'stop_reason', None)}, budget={budget})"
        )
