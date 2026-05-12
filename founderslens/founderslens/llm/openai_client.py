"""OpenAI SDK wrapper. Used as fallback for structured JSON extraction when
Anthropic tool-calling is unreliable for a specific schema, and for cheap
housekeeping calls via gpt-4o-mini.

API mirrors anthropic_client where possible so callers can swap providers.
"""

from __future__ import annotations

import json
import logging
from dataclasses import dataclass
from typing import Optional, Type, TypeVar

from openai import AsyncOpenAI
from pydantic import BaseModel

from founderslens import config
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)

_client: Optional[AsyncOpenAI] = None


def _get_client() -> AsyncOpenAI:
    global _client
    if _client is None:
        if not config.OPENAI_API_KEY:
            raise RuntimeError("OPENAI_API_KEY not set")
        _client = AsyncOpenAI(api_key=config.OPENAI_API_KEY)
    return _client


@dataclass
class LLMResponse:
    text: str
    tokens_in: int
    tokens_out: int
    model: str
    stop_reason: Optional[str] = None


T = TypeVar("T", bound=BaseModel)


@retry_async(exceptions=(Exception,))
async def complete(
    *,
    model: str = config.MODEL_GPT_4O_MINI,
    system: str,
    user: str,
    max_tokens: int = 2048,
    temperature: float = 0.3,
) -> LLMResponse:
    client = _get_client()
    resp = await client.chat.completions.create(
        model=model,
        max_completion_tokens=max_tokens,
        temperature=temperature,
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
        model=resp.model,
        stop_reason=choice.finish_reason,
    )


@retry_async(exceptions=(Exception,))
async def extract_json(
    *,
    schema: Type[T],
    system: str,
    user: str,
    model: str = config.MODEL_GPT_4O,
    max_tokens: int = 4096,
    temperature: float = 0.0,
) -> tuple[T, LLMResponse]:
    """Structured extraction via `response_format=json_schema`."""
    client = _get_client()
    json_schema = schema.model_json_schema()
    resp = await client.chat.completions.create(
        model=model,
        max_completion_tokens=max_tokens,
        temperature=temperature,
        response_format={
            "type": "json_schema",
            "json_schema": {
                "name": schema.__name__,
                "schema": json_schema,
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
        model=resp.model,
        stop_reason=choice.finish_reason,
    )
