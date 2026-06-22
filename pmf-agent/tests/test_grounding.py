"""Regression tests for Phase-2 web-search grounding (OpenAI + Anthropic).

Verifies, with mocked SDK clients (no network):
  - real cited source URLs are extracted and merged into the report's `sources`
  - the grounded path falls back to an ungrounded call when the model/org does
    NOT support web search (BadRequestError) — so BYOK never breaks

Runnable with pytest OR directly: `python tests/test_grounding.py`.
"""

import os
import sys
import asyncio

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import agents.base as b
import anthropic
from openai import BadRequestError as OpenAIBadRequest


def _run(coro):
    return asyncio.new_event_loop().run_until_complete(coro)


class _Obj:
    def __init__(self, **k):
        self.__dict__.update(k)


# ---------------------------------------------------------------------------
# _merge_sources
# ---------------------------------------------------------------------------
def test_merge_sources_dedupes_and_appends():
    assert b._merge_sources({"a": 1}, ["http://x", "http://x", "http://y"])["sources"] == ["http://x", "http://y"]
    assert b._merge_sources({"sources": ["http://a"]}, ["http://a", "http://b"])["sources"] == ["http://a", "http://b"]
    assert b._merge_sources({"k": 1}, []) == {"k": 1}


# ---------------------------------------------------------------------------
# Anthropic native web search
# ---------------------------------------------------------------------------
class _AntMsgs:
    def __init__(self, resp, err=None):
        self._resp, self._err, self.calls = resp, err, 0

    async def create(self, **k):
        self.calls += 1
        if self._err and self.calls == 1:
            raise self._err
        return self._resp


class _AntClient:
    def __init__(self, resp, err=None):
        self.messages = _AntMsgs(resp, err)


def test_anthropic_grounded_extracts_text_and_citations():
    content = [
        _Obj(type="text", text="I'll search."),
        _Obj(type="web_search_tool_result", content=[_Obj(url="https://statista.com/x", title="S")]),
        _Obj(type="text", text='{"tam":"$5B","sources":[]}',
             citations=[_Obj(url="https://gartner.com/y", title="G")]),
    ]
    cli = _AntClient(_Obj(content=content, stop_reason="end_turn"))
    out = _run(b._call_anthropic(cli, "claude-opus-4-7", "sys", "research market",
                                 tools=[b.WEB_SEARCH_TOOL], use_search=True))
    assert out["tam"] == "$5B"
    assert "https://statista.com/x" in out["sources"]
    assert "https://gartner.com/y" in out["sources"]
    assert cli.messages.calls == 1


def test_anthropic_falls_back_when_search_unsupported():
    err = anthropic.BadRequestError.__new__(anthropic.BadRequestError)
    Exception.__init__(err, "web_search not enabled for this org")
    cli = _AntClient(_Obj(content=[_Obj(type="text", text='{"tam":"$3B"}')], stop_reason="end_turn"), err=err)
    out = _run(b._call_anthropic(cli, "claude-opus-4-7", "sys", "x",
                                 tools=[b.WEB_SEARCH_TOOL], use_search=True))
    assert out["tam"] == "$3B"
    assert cli.messages.calls == 2  # grounded attempt + ungrounded fallback


# ---------------------------------------------------------------------------
# OpenAI native web search (Responses API)
# ---------------------------------------------------------------------------
class _Responses:
    def __init__(self, resp, err=None):
        self._resp, self._err, self.calls = resp, err, 0

    async def create(self, **k):
        self.calls += 1
        if self._err:
            raise self._err
        return self._resp


def test_openai_grounded_extracts_citation():
    resp = _Obj(
        output_text='{"tam":"$9B","sources":[]}',
        output=[_Obj(type="message", content=[_Obj(annotations=[_Obj(type="url_citation", url="https://idc.com/z")])])],
    )

    class _Chat:
        class completions:
            @staticmethod
            async def create(**k):
                raise AssertionError("ungrounded path must not run when grounding succeeds")

    cli = _Obj(responses=_Responses(resp), chat=_Chat())
    out = _run(b._call_openai(cli, "gpt-5.5", "sys", "research", use_search=True))
    assert out["tam"] == "$9B"
    assert "https://idc.com/z" in out["sources"]


def test_openai_falls_back_when_search_unsupported():
    err = OpenAIBadRequest.__new__(OpenAIBadRequest)
    Exception.__init__(err, "model does not support web_search")
    hits = {"n": 0}

    class _Chat:
        class completions:
            @staticmethod
            async def create(**k):
                hits["n"] += 1
                return _Obj(choices=[_Obj(message=_Obj(content='{"tam":"$1B"}'))])

    cli = _Obj(responses=_Responses(None, err=err), chat=_Chat())
    out = _run(b._call_openai(cli, "gpt-5", "sys", "x", use_search=True))
    assert out["tam"] == "$1B"
    assert hits["n"] == 1


if __name__ == "__main__":
    failures = 0
    for name, fn in sorted(globals().items()):
        if name.startswith("test_") and callable(fn):
            try:
                fn()
                print(f"PASS {name}")
            except Exception as e:  # noqa: BLE001
                failures += 1
                print(f"FAIL {name}: {type(e).__name__}: {e}")
    print(f"\n{'ALL PASSED' if not failures else f'{failures} FAILED'}")
    sys.exit(1 if failures else 0)
