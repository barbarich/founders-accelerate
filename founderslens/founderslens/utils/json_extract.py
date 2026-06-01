"""Lenient JSON extraction for LLM outputs.

Why this exists
---------------
"Thinking" models (Gemini 2.5+/3.x, OpenAI o-series / gpt-5) spend part of their
output-token budget on hidden internal reasoning. When `max_output_tokens` is
too small the *visible* answer gets cut off mid-value, so a strict `json.loads`
raises `Unterminated string starting at: line 1 column N`. That exact failure
took the whole intake endpoint down with an HTTP 502.

Other, milder cases: the model wraps JSON in ```fences```, prefixes a stray
sentence of prose, or trails a comment.

`loads_lenient(text)` recovers a Python object from all of these:
1. strip code fences / isolate the first JSON object,
2. strict parse (fast path — the overwhelmingly common case),
3. structural repair of a truncated object (close the open string + brackets,
   drop a dangling trailing separator), then strict parse again,
4. progressive trim of trailing elements until the remainder parses.

It raises `JSONSalvageError` only when nothing usable can be recovered. Callers
should treat that as "the model genuinely returned no answer" and escalate
(retry with a bigger budget) or degrade gracefully — never crash the request.

The primary defence against truncation is giving the model enough output tokens
(see provider `extract_json` escalation). This module is the safety net for the
pathological tail where even a generous budget gets exhausted.
"""

from __future__ import annotations

import json
import re
from typing import Any

__all__ = ["loads_lenient", "JSONSalvageError"]


class JSONSalvageError(ValueError):
    """Raised when no valid JSON value can be recovered from a string."""


def _strip_fences(text: str) -> str:
    s = text.strip()
    if s.startswith("```"):
        # ```json\n...\n```  →  ...
        s = re.sub(r"^```[a-zA-Z0-9_-]*[ \t]*\r?\n?", "", s)
        s = re.sub(r"\r?\n?```\s*$", "", s)
    return s.strip()


def _first_json_span(s: str) -> str:
    """Substring from the first ``{`` to its matching ``}``.

    If the braces never balance (truncated output) we return everything from the
    first ``{`` to the end so the repair step can close it.
    """
    start = s.find("{")
    if start == -1:
        return s
    depth = 0
    in_str = False
    esc = False
    for i in range(start, len(s)):
        ch = s[i]
        if esc:
            esc = False
            continue
        if ch == "\\" and in_str:
            esc = True
            continue
        if ch == '"':
            in_str = not in_str
            continue
        if in_str:
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return s[start : i + 1]
    return s[start:]  # never balanced → truncated


def _repair(s: str) -> str:
    """Best-effort close of a truncated JSON object/array.

    Walks the string tracking string state + an open-bracket stack, then:
    - terminates an unterminated string,
    - drops a dangling trailing ``,`` or ``:`` (separator with nothing after it),
    - appends the closers for every still-open ``{`` / ``[``.
    """
    stack: list[str] = []
    in_str = False
    esc = False
    for ch in s:
        if esc:
            esc = False
            continue
        if ch == "\\" and in_str:
            esc = True
            continue
        if ch == '"':
            in_str = not in_str
            continue
        if in_str:
            continue
        if ch == "{":
            stack.append("}")
        elif ch == "[":
            stack.append("]")
        elif ch in "}]":
            if stack:
                stack.pop()
    out = s
    if in_str:
        out += '"'
    out = out.rstrip()
    out = re.sub(r"[,:]\s*$", "", out)  # dangling separator can't precede a close
    for closer in reversed(stack):
        out += closer
    return out


def loads_lenient(text: Any) -> Any:
    """Parse JSON from a possibly-dirty / possibly-truncated LLM string.

    Raises `JSONSalvageError` if no JSON value can be recovered.
    """
    if text is None:
        raise JSONSalvageError("empty LLM output (None)")
    if not isinstance(text, str):
        # Some SDKs hand back an already-parsed dict (e.g. tool inputs).
        return text

    raw = _strip_fences(text)
    if not raw:
        raise JSONSalvageError("empty LLM output")

    # 1. fast path — clean, complete JSON
    try:
        return json.loads(raw)
    except Exception:
        pass

    # 2. isolate the first object span and try again (drops surrounding prose)
    span = _first_json_span(raw)
    if span and span != raw:
        try:
            return json.loads(span)
        except Exception:
            pass

    # 3. structural repair of a truncated object
    try:
        return json.loads(_repair(span))
    except Exception:
        pass

    # 4. progressive trim — chop the last (incomplete) element, re-close, retry
    candidate = span
    for _ in range(500):
        cut = max(candidate.rfind(","), candidate.rfind("}"), candidate.rfind("]"))
        if cut <= 0:
            break
        candidate = candidate[:cut]
        try:
            return json.loads(_repair(candidate))
        except Exception:
            continue

    snippet = text.strip()[:160]
    raise JSONSalvageError(
        f"could not recover JSON from LLM output (len={len(text)}): {snippet!r}…"
    )
