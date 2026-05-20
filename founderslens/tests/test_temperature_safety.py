"""Tests for the temperature_compat layer + provider self-heal behaviour.

These tests don't make any network calls — providers are exercised against
in-memory fakes that mimic the relevant SDK surface.
"""

from __future__ import annotations

import asyncio
from dataclasses import dataclass
from typing import Any
from unittest.mock import AsyncMock

import pytest
from pydantic import BaseModel

from founderslens.llm import temperature_compat as tc
from founderslens.llm.anthropic_provider import AnthropicProvider
from founderslens.llm.openai_provider import OpenAIProvider


# ---------------------------------------------------------------------------
# Static detection
# ---------------------------------------------------------------------------


@pytest.mark.parametrize(
    "model,expected",
    [
        # OpenAI reasoning families — must NOT receive temperature
        ("o1", False),
        ("o1-mini", False),
        ("o3", False),
        ("o3-mini", False),
        ("o4-mini", False),
        ("gpt-5", False),
        ("gpt-5-mini", False),
        ("gpt-5.4", False),
        ("gpt-5.4-mini", False),
        ("gpt-5.1-chat-latest", False),
        # Non-reasoning OpenAI models — must receive temperature
        ("gpt-4o", True),
        ("gpt-4o-mini", True),
        ("gpt-4.1", True),
        ("gpt-4.1-nano", True),
        ("chatgpt-4o-latest", True),
        ("codex-mini-latest", True),
        # Case insensitivity sanity
        ("GPT-5", False),
        ("O3-Mini", False),
    ],
)
def test_static_detection_openai(model: str, expected: bool) -> None:
    tc._reset_runtime_cache_for_tests()
    assert tc.supports_custom_temperature("openai", model) is expected


@pytest.mark.parametrize(
    "model,expected",
    [
        # Opus 4.7+ deprecated `temperature`
        ("claude-opus-4-7", False),
        ("claude-opus-4-7-20251015", False),
        # Older Opus snapshots still accept it
        ("claude-opus-4-6", True),
        ("claude-opus-4-5", True),
        ("claude-opus-4-1", True),
        # Sonnet / Haiku always accept it
        ("claude-sonnet-4-6", True),
        ("claude-sonnet-4-5", True),
        ("claude-haiku-4-5", True),
    ],
)
def test_static_detection_anthropic(model: str, expected: bool) -> None:
    tc._reset_runtime_cache_for_tests()
    assert tc.supports_custom_temperature("anthropic", model) is expected


def test_static_detection_gemini_baseline() -> None:
    tc._reset_runtime_cache_for_tests()
    # No Gemini models currently reject temperature.
    assert tc.supports_custom_temperature("gemini", "gemini-2.5-pro") is True
    assert tc.supports_custom_temperature("gemini", "gemini-3.1-pro-preview") is True


# ---------------------------------------------------------------------------
# Runtime cache
# ---------------------------------------------------------------------------


def test_runtime_cache_blocks_future_calls() -> None:
    tc._reset_runtime_cache_for_tests()
    assert tc.supports_custom_temperature("openai", "future-model-7") is True
    tc.register_no_temperature("openai", "future-model-7")
    assert tc.supports_custom_temperature("openai", "future-model-7") is False
    # different provider / model still allowed
    assert tc.supports_custom_temperature("openai", "gpt-4o") is True


def test_runtime_cache_is_case_insensitive() -> None:
    tc._reset_runtime_cache_for_tests()
    tc.register_no_temperature("OpenAI", "Future-Model-7")
    assert tc.supports_custom_temperature("openai", "future-model-7") is False


def test_runtime_cache_ignores_empty_model() -> None:
    tc._reset_runtime_cache_for_tests()
    tc.register_no_temperature("openai", "")  # no-op
    assert tc.supports_custom_temperature("openai", "gpt-4o") is True


# ---------------------------------------------------------------------------
# Exception rejection detection
# ---------------------------------------------------------------------------


@pytest.mark.parametrize(
    "msg,expected",
    [
        # The exact message from the live production incident
        (
            "Error code: 400 - {'error': {'message': \"Unsupported value: 'temperature' "
            "does not support 0.0 with this model. Only the default (1) value is "
            "supported.\", 'type': 'invalid_request_error'}}",
            True,
        ),
        # Anthropic Opus 4.7 deprecation
        ("temperature is deprecated for this model", True),
        # Generic phrasing
        ("`temperature` is not supported with this model", True),
        ("unsupported_value: temperature", True),
        # Negative cases — different errors
        ("Connection refused", False),
        ("Rate limit exceeded", False),
        ("Invalid API key", False),
        # Mentions temperature but not a rejection (no rejection cue)
        ("temperature was 0.3", False),
    ],
)
def test_is_temperature_rejection(msg: str, expected: bool) -> None:
    exc = RuntimeError(msg)
    assert tc.is_temperature_rejection(exc) is expected


# ---------------------------------------------------------------------------
# OpenAI provider self-heal
# ---------------------------------------------------------------------------


@dataclass
class _FakeUsage:
    prompt_tokens: int = 11
    completion_tokens: int = 7


@dataclass
class _FakeMessage:
    content: str = "ok"


@dataclass
class _FakeChoice:
    message: _FakeMessage
    finish_reason: str = "stop"


@dataclass
class _FakeOpenAIResp:
    choices: list
    usage: _FakeUsage
    model: str


def _fake_openai_response(text: str = "ok", model: str = "gpt-5") -> _FakeOpenAIResp:
    return _FakeOpenAIResp(
        choices=[_FakeChoice(message=_FakeMessage(content=text))],
        usage=_FakeUsage(),
        model=model,
    )


def _temperature_400(model: str) -> RuntimeError:
    # Mirror the exact wording from the production incident.
    return RuntimeError(
        f"Error code: 400 - {{'error': {{'message': \"Unsupported value: "
        f"'temperature' does not support 0.0 with this model. Only the default "
        f"(1) value is supported.\", 'type': 'invalid_request_error', "
        f"'param': 'temperature', 'code': 'unsupported_value'}}}}"
    )


@pytest.mark.asyncio
async def test_openai_complete_self_heals_on_temperature_rejection() -> None:
    tc._reset_runtime_cache_for_tests()
    provider = OpenAIProvider(api_key="sk-test")

    call_log: list[dict] = []
    create_mock = AsyncMock()

    async def fake_create(**kwargs: Any):
        call_log.append(dict(kwargs))
        if "temperature" in kwargs:
            raise _temperature_400(kwargs["model"])
        return _fake_openai_response(model=kwargs["model"])

    create_mock.side_effect = fake_create
    provider._client.chat.completions.create = create_mock

    resp = await provider.complete(
        system="sys", user="usr", model="future-reasoning-model-99",
        max_tokens=128, temperature=0.3,
    )

    assert resp.text == "ok"
    # First attempt sends temperature, second drops it.
    assert len(call_log) == 2
    assert "temperature" in call_log[0]
    assert "temperature" not in call_log[1]
    # And the model gets added to the runtime cache so future calls skip temp.
    assert tc.supports_custom_temperature("openai", "future-reasoning-model-99") is False


@pytest.mark.asyncio
async def test_openai_complete_skips_temperature_for_known_reasoning_models() -> None:
    tc._reset_runtime_cache_for_tests()
    provider = OpenAIProvider(api_key="sk-test")

    call_log: list[dict] = []
    create_mock = AsyncMock()

    async def fake_create(**kwargs: Any):
        call_log.append(dict(kwargs))
        return _fake_openai_response(model=kwargs["model"])

    create_mock.side_effect = fake_create
    provider._client.chat.completions.create = create_mock

    await provider.complete(
        system="sys", user="usr", model="gpt-5",
        max_tokens=128, temperature=0.3,
    )
    # Static detection kicks in: no temperature sent on first (and only) try.
    assert len(call_log) == 1
    assert "temperature" not in call_log[0]


@pytest.mark.asyncio
async def test_openai_complete_passes_temperature_for_standard_models() -> None:
    tc._reset_runtime_cache_for_tests()
    provider = OpenAIProvider(api_key="sk-test")

    call_log: list[dict] = []
    create_mock = AsyncMock()

    async def fake_create(**kwargs: Any):
        call_log.append(dict(kwargs))
        return _fake_openai_response(model=kwargs["model"])

    create_mock.side_effect = fake_create
    provider._client.chat.completions.create = create_mock

    await provider.complete(
        system="sys", user="usr", model="gpt-4o",
        max_tokens=128, temperature=0.7,
    )
    assert len(call_log) == 1
    assert call_log[0].get("temperature") == 0.7


@pytest.mark.asyncio
async def test_openai_non_temperature_errors_propagate() -> None:
    """If the 400 isn't about temperature, the self-heal must NOT swallow it."""
    tc._reset_runtime_cache_for_tests()
    provider = OpenAIProvider(api_key="sk-test")

    create_mock = AsyncMock()
    create_mock.side_effect = RuntimeError("Invalid API key")
    provider._client.chat.completions.create = create_mock

    with pytest.raises(RuntimeError, match="Invalid API key"):
        await provider.complete(
            system="sys", user="usr", model="gpt-4o",
            max_tokens=64, temperature=0.3,
        )


# ---------------------------------------------------------------------------
# Anthropic provider — Opus skip + self-heal
# ---------------------------------------------------------------------------


@dataclass
class _FakeAnthropicTextBlock:
    type: str = "text"
    text: str = "ok"


@dataclass
class _FakeAnthropicUsage:
    input_tokens: int = 9
    output_tokens: int = 5


@dataclass
class _FakeAnthropicMsg:
    content: list
    usage: _FakeAnthropicUsage
    model: str
    stop_reason: str = "end_turn"


def _fake_anthropic_response(model: str = "claude-opus-4-7", text: str = "ok") -> _FakeAnthropicMsg:
    return _FakeAnthropicMsg(
        content=[_FakeAnthropicTextBlock(text=text)],
        usage=_FakeAnthropicUsage(),
        model=model,
    )


@pytest.mark.asyncio
async def test_anthropic_complete_skips_temperature_for_opus_47() -> None:
    tc._reset_runtime_cache_for_tests()
    provider = AnthropicProvider(api_key="sk-ant-test")

    call_log: list[dict] = []
    create_mock = AsyncMock()

    async def fake_create(**kwargs: Any):
        call_log.append(dict(kwargs))
        return _fake_anthropic_response(model=kwargs["model"])

    create_mock.side_effect = fake_create
    provider._client.messages.create = create_mock

    await provider.complete(
        system="sys", user="usr", model="claude-opus-4-7",
        max_tokens=128, temperature=0.3,
    )
    assert len(call_log) == 1
    assert "temperature" not in call_log[0]


@pytest.mark.asyncio
async def test_anthropic_complete_keeps_temperature_for_sonnet() -> None:
    tc._reset_runtime_cache_for_tests()
    provider = AnthropicProvider(api_key="sk-ant-test")

    call_log: list[dict] = []
    create_mock = AsyncMock()

    async def fake_create(**kwargs: Any):
        call_log.append(dict(kwargs))
        return _fake_anthropic_response(model=kwargs["model"])

    create_mock.side_effect = fake_create
    provider._client.messages.create = create_mock

    await provider.complete(
        system="sys", user="usr", model="claude-sonnet-4-6",
        max_tokens=128, temperature=0.5,
    )
    assert len(call_log) == 1
    assert call_log[0].get("temperature") == 0.5


@pytest.mark.asyncio
async def test_anthropic_self_heals_on_unknown_model_rejection() -> None:
    """Proves the same self-heal works for Anthropic — covers future Claude models."""
    tc._reset_runtime_cache_for_tests()
    provider = AnthropicProvider(api_key="sk-ant-test")

    call_log: list[dict] = []
    create_mock = AsyncMock()

    async def fake_create(**kwargs: Any):
        call_log.append(dict(kwargs))
        if "temperature" in kwargs:
            raise RuntimeError("temperature is deprecated for this model")
        return _fake_anthropic_response(model=kwargs["model"])

    create_mock.side_effect = fake_create
    provider._client.messages.create = create_mock

    await provider.complete(
        system="sys", user="usr", model="claude-future-snapshot-9",
        max_tokens=128, temperature=0.5,
    )

    assert len(call_log) == 2
    assert "temperature" in call_log[0]
    assert "temperature" not in call_log[1]
    assert tc.supports_custom_temperature("anthropic", "claude-future-snapshot-9") is False
