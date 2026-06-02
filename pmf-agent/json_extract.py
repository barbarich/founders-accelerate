"""Lenient JSON extraction for LLM outputs (PMF agent copy).

Mirrors founderslens/founderslens/utils/json_extract.py. Kept as a standalone
module because pmf-agent deploys as its own service and can't import from the
FoundersLens package.

Why this exists
---------------
"Thinking" models (gpt-5.x, o-series, Gemini 2.5+/3.x) spend part of their
output-token budget on hidden reasoning. When the budget is too small the
visible JSON answer is cut off mid-value, so a strict `json.loads` raises
`Unterminated string ...` — or the content comes back empty entirely. In PMF's
intake that turned into an infinite clarifying-question loop (the empty parse
fell through to the hardcoded safety-net questions every round).

`loads_lenient(text)` recovers a Python object from fenced / prose-wrapped /
truncated JSON. Raises `JSONSalvageError` only when nothing usable remains.
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
        s = re.sub(r"^```[a-zA-Z0-9_-]*[ \t]*\r?\n?", "", s)
        s = re.sub(r"\r?\n?```\s*$", "", s)
    return s.strip()


def _first_json_span(s: str) -> str:
    """Substring from the first ``{`` to its matching ``}`` (or to end if truncated)."""
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
    return s[start:]


def _repair(s: str) -> str:
    """Best-effort close of a truncated JSON object/array."""
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
    out = re.sub(r"[,:]\s*$", "", out)
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
        return text

    raw = _strip_fences(text)
    if not raw:
        raise JSONSalvageError("empty LLM output")

    try:
        return json.loads(raw)
    except Exception:
        pass

    span = _first_json_span(raw)
    if span and span != raw:
        try:
            return json.loads(span)
        except Exception:
            pass

    try:
        return json.loads(_repair(span))
    except Exception:
        pass

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

    raise JSONSalvageError(
        f"could not recover JSON from LLM output (len={len(text)}): {text.strip()[:160]!r}…"
    )
