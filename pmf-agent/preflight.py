"""Grounded pre-flight for PMF: validate the user's key + model BEFORE a 5-30 min
run, with ONE cheap real call that exercises web search.

Fail-OPEN: raises PreflightError only for DEFINITIVE, user-fixable problems
(bad key / no credits / unknown model / web search not enabled). Rate-limit /
transient errors -> return quietly (the pipeline has its own retries + the
never-silent gate). This converts the dominant failure ("worked once, then a
20-minute hollow report") into an instant, actionable message.

Per-service (SDK-touching, NOT vendored) — shares the pure taxonomy in
reliability.py. Validated live 2026-07-09: OpenAI + Anthropic web_search return
citations; a bad key -> AUTH; a bad model -> NO_MODEL_ACCESS.
"""
from __future__ import annotations

from google.genai import types as genai_types

from reliability import ErrorClass, classify
from agents.base import build_client, _ANTHROPIC_WEB_SEARCH

# A tiny prompt that forces a real web lookup so the probe exercises grounding.
_PROBE = ("Use web search to find one current fact about a well-known consumer "
          "software market and reply with the source URL.")

# Classes worth stopping the run for — everything the student can fix themselves.
_BLOCKING = (ErrorClass.AUTH, ErrorClass.NO_CREDITS,
             ErrorClass.NO_MODEL_ACCESS, ErrorClass.GROUNDING_UNAVAILABLE)


class PreflightError(Exception):
    """A definitive, user-fixable problem detected before the run. Carries the
    ErrorClass + a short RU message for the UI to show verbatim."""

    def __init__(self, error_class: ErrorClass, message: str):
        super().__init__(message)
        self.error_class = error_class
        self.message = message


async def _probe_anthropic(client, model: str) -> None:
    await client.messages.create(
        model=model, max_tokens=512,
        tools=[_ANTHROPIC_WEB_SEARCH],
        messages=[{"role": "user", "content": _PROBE}],
    )


async def _probe_openai(client, model: str) -> None:
    await client.responses.create(
        model=model, input=_PROBE, tools=[{"type": "web_search"}],
    )


async def _probe_gemini(client, model: str) -> None:
    # Gemini grounds via Google Search automatically for every text model (no
    # org-level toggle like Anthropic), so a cheap auth/model check is enough — no
    # need to exercise the search tool. This also removes false-block risk on the
    # default provider (most students), which we can't live-test without a key.
    await client.aio.models.generate_content(
        model=model, contents="ping",
        config=genai_types.GenerateContentConfig(max_output_tokens=8),
    )


async def validate_key(provider: str, api_key: str, model: str) -> None:
    """Raise PreflightError for a definitive user-fixable problem; return quietly
    otherwise. `provider` is the canonical name ("anthropic" | "openai" | "gemini").

    One cheap grounded call proves the key authenticates, the model exists, there's
    balance, and web search runs — before we commit to a long pipeline.
    """
    if not api_key or not api_key.strip():
        raise PreflightError(ErrorClass.AUTH, "Не указан API-ключ.")
    try:
        client = build_client(provider, api_key)
    except ValueError as e:
        raise PreflightError(ErrorClass.NO_MODEL_ACCESS, str(e))

    try:
        if provider == "gemini":
            await _probe_gemini(client, model)
        elif provider == "openai":
            await _probe_openai(client, model)
        else:  # anthropic
            await _probe_anthropic(client, model)
    except Exception as e:
        # classify() maps the exception to the taxonomy. Anthropic surfaces
        # "web search not enabled" as a BadRequestError whose message trips the
        # grounding cue -> GROUNDING_UNAVAILABLE. A bad param 400 -> NO_MODEL_ACCESS.
        cls, msg = classify(e)
        if cls in _BLOCKING:
            raise PreflightError(cls, msg)
        # RATE_LIMIT / TRANSIENT / OUR_BUG on the probe itself -> fail-open so a
        # transient blip never blocks a working key.
        return
