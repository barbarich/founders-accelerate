"""Tests for lenient JSON salvage + provider truncation-escalation.

Regression cover for the 2026-06-01 production incident: a "thinking" Gemini
model (gemini-2.5-pro / 3.x) spent its `max_output_tokens` budget on hidden
reasoning, so the JSON answer came back truncated mid-string and the intake
endpoint died with `502 LLM call failed: Unterminated string starting at:
line 1 column 64 (char 63)`.

No network calls — providers are exercised against in-memory fakes that mimic
the relevant SDK surface (same convention as test_temperature_safety.py).
"""

from __future__ import annotations

from dataclasses import dataclass, field
from types import SimpleNamespace
from typing import Any
from unittest.mock import AsyncMock

import pytest
from pydantic import BaseModel

from founderslens.utils.json_extract import JSONSalvageError, loads_lenient


class _Eval(BaseModel):
    ready: bool
    score: int
    questions: list[str] = []


# ---------------------------------------------------------------------------
# loads_lenient — unit
# ---------------------------------------------------------------------------


def test_clean_json() -> None:
    assert loads_lenient('{"ready": true, "score": 80, "questions": []}') == {
        "ready": True, "score": 80, "questions": [],
    }


def test_fenced_json() -> None:
    raw = '```json\n{"ready": true, "score": 80}\n```'
    assert loads_lenient(raw) == {"ready": True, "score": 80}


def test_prose_wrapped_json() -> None:
    raw = 'Sure, here is the result:\n{"ready": false, "score": 10}\nHope that helps!'
    assert loads_lenient(raw) == {"ready": False, "score": 10}


def test_the_exact_incident_truncation() -> None:
    """The literal shape that produced 'Unterminated string ... (char 63)'."""
    truncated = '{"ready": false, "completeness_score": 30, "questions": ["Что'
    with pytest.raises(Exception):
        import json
        json.loads(truncated)  # strict parse is what blew up in prod
    out = loads_lenient(truncated)
    assert out["ready"] is False
    assert out["completeness_score"] == 30
    assert isinstance(out["questions"], list)  # recovered, not crashed


def test_truncated_mid_array() -> None:
    out = loads_lenient('{"ready": true, "score": 50, "questions": ["a", "b", "c')
    assert out["ready"] is True
    assert out["questions"][:2] == ["a", "b"]


def test_truncated_dangling_key() -> None:
    # cut off right after a key, before its value
    out = loads_lenient('{"ready": true, "score": 50, "questions"')
    assert out["ready"] is True
    assert out["score"] == 50


def test_truncated_after_comma() -> None:
    out = loads_lenient('{"ready": true, "score": 50, ')
    assert out == {"ready": True, "score": 50}


def test_empty_raises() -> None:
    for bad in ("", "   ", None, "```json\n```"):
        with pytest.raises(JSONSalvageError):
            loads_lenient(bad)


def test_non_string_passthrough() -> None:
    d = {"already": "parsed"}
    assert loads_lenient(d) is d


def test_salvaged_validates_against_pydantic() -> None:
    out = loads_lenient('{"ready": false, "score": 30, "questions": ["Что име')
    model = _Eval.model_validate(out)
    assert model.ready is False and model.score == 30


# ---------------------------------------------------------------------------
# Gemini provider — truncation escalation + salvage
# ---------------------------------------------------------------------------


@dataclass
class _GUsage:
    prompt_token_count: int = 10
    candidates_token_count: int = 5


class _GResp:
    def __init__(self, text: str, finish: str = "STOP"):
        self._text = text
        self.candidates = [SimpleNamespace(
            finish_reason=SimpleNamespace(name=finish),
            content=SimpleNamespace(parts=[]),
        )]
        self.usage_metadata = _GUsage()

    @property
    def text(self) -> str:
        return self._text


class _FakeGeminiModel:
    def __init__(self, responses: list[_GResp]):
        self._responses = list(responses)
        self.configs: list[dict] = []

    async def generate_content_async(self, prompt: str, generation_config: dict | None = None):
        self.configs.append(generation_config or {})
        return self._responses.pop(0)


def _gemini_provider():
    from founderslens.llm.gemini_provider import GeminiProvider
    return GeminiProvider(api_key="AIza-test")


@pytest.mark.asyncio
async def test_gemini_escalates_budget_on_truncation_then_succeeds() -> None:
    provider = _gemini_provider()
    fake = _FakeGeminiModel([
        # 1st: thinking ate the budget → truncated mid-string (the incident)
        _GResp('{"ready": false, "score": 30, "questions": ["Что', finish="MAX_TOKENS"),
        # 2nd: with a bigger budget the answer completes
        _GResp('{"ready": true, "score": 80, "questions": []}', finish="STOP"),
    ])
    provider._model = lambda model_id: fake

    parsed, resp = await provider.extract_json(
        schema=_Eval, system="s", user="u", model="gemini-2.5-pro", max_tokens=1500,
    )
    assert parsed.ready is True and parsed.score == 80
    # First call floored to the min budget, second call doubled it.
    assert fake.configs[0]["max_output_tokens"] == 8192
    assert fake.configs[1]["max_output_tokens"] == 16384


@pytest.mark.asyncio
async def test_gemini_salvages_when_all_attempts_truncate() -> None:
    provider = _gemini_provider()
    fake = _FakeGeminiModel([
        _GResp('{"ready": false, "score": 30, "questions": ["Что', "MAX_TOKENS"),
        _GResp('{"ready": false, "score": 30, "questions": ["Что име', "MAX_TOKENS"),
        _GResp('{"ready": false, "score": 30, "questions": ["Что именно', "MAX_TOKENS"),
    ])
    provider._model = lambda model_id: fake

    parsed, resp = await provider.extract_json(
        schema=_Eval, system="s", user="u", model="gemini-3.1-pro-preview", max_tokens=4096,
    )
    # Never crashes — salvages the partial answer instead of 502-ing.
    assert parsed.ready is False and parsed.score == 30
    assert [c["max_output_tokens"] for c in fake.configs] == [8192, 16384, 32768]


# ---------------------------------------------------------------------------
# OpenAI provider — finish_reason == "length" escalation
# ---------------------------------------------------------------------------


@dataclass
class _OAUsage:
    prompt_tokens: int = 3
    completion_tokens: int = 4


@dataclass
class _OAChoice:
    content: str
    finish_reason: str

    @property
    def message(self):
        return SimpleNamespace(content=self.content)


@dataclass
class _OAResp:
    choices: list
    usage: _OAUsage
    model: str = "gpt-5"


@pytest.mark.asyncio
async def test_openai_escalates_on_length_then_succeeds() -> None:
    from founderslens.llm import temperature_compat as tc
    from founderslens.llm.openai_provider import OpenAIProvider
    tc._reset_runtime_cache_for_tests()
    provider = OpenAIProvider(api_key="sk-test")

    calls: list[dict] = []

    async def fake_create(**kwargs: Any):
        calls.append(dict(kwargs))
        if len(calls) == 1:
            return _OAResp(choices=[_OAChoice('{"ready": false, "score": 30, "questions": ["w', "length")], usage=_OAUsage())
        return _OAResp(choices=[_OAChoice('{"ready": true, "score": 90, "questions": []}', "stop")], usage=_OAUsage())

    provider._client.chat.completions.create = AsyncMock(side_effect=fake_create)

    parsed, _ = await provider.extract_json(
        schema=_Eval, system="s", user="u", model="gpt-5", max_tokens=1000,
    )
    assert parsed.ready is True and parsed.score == 90
    assert calls[0]["max_completion_tokens"] == 8192
    assert calls[1]["max_completion_tokens"] == 16384


# ---------------------------------------------------------------------------
# Anthropic provider — stop_reason == "max_tokens" escalation
# ---------------------------------------------------------------------------


@dataclass
class _AnUsage:
    input_tokens: int = 7
    output_tokens: int = 3


@dataclass
class _AnMsg:
    content: list
    usage: _AnUsage
    model: str = "claude-sonnet-4-6"
    stop_reason: str = "tool_use"


def _tool_block(name: str, payload: dict):
    return SimpleNamespace(type="tool_use", name=name, input=payload)


@pytest.mark.asyncio
async def test_anthropic_escalates_when_tool_call_truncated() -> None:
    from founderslens.llm import temperature_compat as tc
    from founderslens.llm.anthropic_provider import AnthropicProvider
    tc._reset_runtime_cache_for_tests()
    provider = AnthropicProvider(api_key="sk-ant-test")

    calls: list[dict] = []

    async def fake_create(**kwargs: Any):
        calls.append(dict(kwargs))
        if len(calls) == 1:
            # truncated: no tool_use block emitted, hit the cap
            return _AnMsg(content=[], usage=_AnUsage(), stop_reason="max_tokens")
        return _AnMsg(
            content=[_tool_block("emit__eval", {"ready": True, "score": 75, "questions": []})],
            usage=_AnUsage(), stop_reason="tool_use",
        )

    provider._client.messages.create = AsyncMock(side_effect=fake_create)

    parsed, _ = await provider.extract_json(
        schema=_Eval, system="s", user="u", model="claude-sonnet-4-6", max_tokens=2000,
    )
    assert parsed.ready is True and parsed.score == 75
    assert calls[0]["max_tokens"] == 8192
    assert calls[1]["max_tokens"] == 16384
