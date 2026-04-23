"""Anthropic SDK wrapper.

Returns `LLMResponse` with text + token counts so callers can feed the cost tracker.
Structured JSON: agents should pass a pydantic model class; we use tool-calling
for reliable JSON (Claude's JSON mode is less strict than tool-calling).
"""

from __future__ import annotations

import json
import logging
from dataclasses import dataclass
from typing import Any, Optional, Type, TypeVar

from anthropic import AsyncAnthropic
from pydantic import BaseModel

from founderslens import config
from founderslens.llm.anthropic_provider import _inline_refs
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)

_client: Optional[AsyncAnthropic] = None


def _get_client() -> AsyncAnthropic:
    global _client
    if _client is None:
        if not config.ANTHROPIC_API_KEY:
            raise RuntimeError("ANTHROPIC_API_KEY not set")
        _client = AsyncAnthropic(api_key=config.ANTHROPIC_API_KEY)
    return _client


@dataclass
class LLMResponse:
    text: str
    tokens_in: int
    tokens_out: int
    model: str
    stop_reason: Optional[str] = None
    tool_use: Optional[dict[str, Any]] = None  # populated when JSON-via-tool was used


T = TypeVar("T", bound=BaseModel)


@retry_async(exceptions=(Exception,))
async def complete(
    *,
    model: str = config.MODEL_SONNET,
    system: str,
    user: str,
    max_tokens: int = 2048,
    temperature: float = 0.3,
) -> LLMResponse:
    """Plain-text completion."""
    client = _get_client()
    msg = await client.messages.create(
        model=model,
        system=system,
        max_tokens=max_tokens,
        temperature=temperature,
        messages=[{"role": "user", "content": user}],
    )
    text = "".join(block.text for block in msg.content if getattr(block, "type", "") == "text")
    return LLMResponse(
        text=text,
        tokens_in=msg.usage.input_tokens,
        tokens_out=msg.usage.output_tokens,
        model=msg.model,
        stop_reason=msg.stop_reason,
    )


@retry_async(exceptions=(Exception,))
async def extract_json(
    *,
    schema: Type[T],
    system: str,
    user: str,
    model: str = config.MODEL_SONNET,
    max_tokens: int = 4096,
    temperature: float = 0.0,
) -> tuple[T, LLMResponse]:
    """Structured extraction via tool-calling. Returns a validated pydantic instance.

    We define one tool whose input schema = the pydantic model's JSON schema, and
    force the model to call it. More reliable than prompting for raw JSON.
    """
    client = _get_client()
    tool_name = f"emit_{schema.__name__.lower()}"
    tool_schema = _inline_refs(schema.model_json_schema())
    msg = await client.messages.create(
        model=model,
        system=system,
        max_tokens=max_tokens,
        temperature=temperature,
        tools=[{
            "name": tool_name,
            "description": f"Emit a {schema.__name__} result.",
            "input_schema": tool_schema,
        }],
        tool_choice={"type": "tool", "name": tool_name},
        messages=[{"role": "user", "content": user}],
    )
    tool_input = None
    for block in msg.content:
        if getattr(block, "type", "") == "tool_use" and block.name == tool_name:
            tool_input = block.input
            break
    if tool_input is None:
        raise RuntimeError(f"anthropic extract_json: no tool_use block returned (stop={msg.stop_reason})")

    parsed = schema.model_validate(tool_input)
    resp = LLMResponse(
        text=json.dumps(tool_input, ensure_ascii=False),
        tokens_in=msg.usage.input_tokens,
        tokens_out=msg.usage.output_tokens,
        model=msg.model,
        stop_reason=msg.stop_reason,
        tool_use={"name": tool_name, "input": tool_input},
    )
    return parsed, resp
