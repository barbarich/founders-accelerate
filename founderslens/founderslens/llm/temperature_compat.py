"""Cross-provider compatibility shim for the `temperature` parameter.

Why this exists
---------------
Some LLM models reject any non-default `temperature`. Examples we know about:
- OpenAI reasoning families: `o1`, `o3`, `o4`, and the `gpt-5` line (they emit
  400 "Unsupported value: 'temperature' does not support 0.0 with this model.
  Only the default (1) value is supported.").
- Anthropic Opus 4.7+ (extended thinking — `temperature` is deprecated for them).

A static name list is fast but brittle (new model IDs appear constantly, users
can paste arbitrary IDs via the "CUSTOM_MODEL_ID" picker). So this module
combines two strategies:

1. `supports_custom_temperature(provider, model)` checks a static prefix list
   first, then a per-process runtime cache.
2. When a provider call surfaces a temperature-rejection error, callers invoke
   `register_no_temperature(provider, model)` and retry without temperature.
   The model is remembered for the rest of the process, so subsequent calls
   skip the parameter without re-tripping the 400.

The result: callers get correct behaviour today AND self-heal on the first
encounter with any future model that adopts the same restriction.
"""

from __future__ import annotations

import threading


# Static prefixes — extend when a new family ships.
# Keep entries lowercase; matching is case-insensitive.
KNOWN_NO_TEMPERATURE_PREFIXES: dict[str, tuple[str, ...]] = {
    "openai": ("o1", "o3", "o4", "gpt-5"),
    # Anthropic Opus 4.7+ deprecated `temperature`. Older Opus snapshots
    # (4.5 / 4.6 / 4.1) still accept it, so we don't blanket-match "opus".
    "anthropic": ("claude-opus-4-7", "claude-opus-5"),
    "gemini": (),
}


# Per-process runtime cache of models that have explicitly rejected
# `temperature` during this run. Populated by `register_no_temperature`.
_RUNTIME_NO_TEMPERATURE: dict[str, set[str]] = {
    "openai": set(),
    "anthropic": set(),
    "gemini": set(),
}

_LOCK = threading.Lock()


def supports_custom_temperature(provider: str, model: str) -> bool:
    """Return True if the (provider, model) pair accepts a custom `temperature`.

    False means callers must omit the param entirely (sending the default
    explicitly may also trip the 400 — safer to not send it at all).
    """
    if not model:
        return True
    key = provider.lower()
    m = model.lower()
    for prefix in KNOWN_NO_TEMPERATURE_PREFIXES.get(key, ()):
        if m.startswith(prefix):
            return False
    with _LOCK:
        if m in _RUNTIME_NO_TEMPERATURE.get(key, set()):
            return False
    return True


def register_no_temperature(provider: str, model: str) -> None:
    """Mark this (provider, model) as temperature-rejecting for the rest of the process."""
    if not model:
        return
    key = provider.lower()
    with _LOCK:
        _RUNTIME_NO_TEMPERATURE.setdefault(key, set()).add(model.lower())


# Substrings we look for in exception text. Lowercased before compare.
# OpenAI:    "Unsupported value: 'temperature' does not support 0.0 with this model."
# Anthropic: "temperature is deprecated for this model"
# Generic:   any variation involving the word "temperature" and a rejection cue
_REJECTION_CUES: tuple[str, ...] = (
    "does not support",
    "only the default",
    "unsupported_value",
    "is not supported with this model",
    "is deprecated for this model",
    "deprecated for this model",
    "does not accept",
)


def is_temperature_rejection(exc: BaseException) -> bool:
    """Heuristic: does this exception look like a 'temperature not allowed' rejection?

    We don't pin to a specific SDK exception class — OpenAI / Anthropic / Gemini
    each raise different types, and they sometimes wrap them. Substring match on
    the str() form is robust to all of that.
    """
    text = str(exc).lower()
    if "temperature" not in text:
        return False
    return any(cue in text for cue in _REJECTION_CUES)


# Test-only helper — lets unit tests start from a clean slate.
def _reset_runtime_cache_for_tests() -> None:
    with _LOCK:
        for v in _RUNTIME_NO_TEMPERATURE.values():
            v.clear()
