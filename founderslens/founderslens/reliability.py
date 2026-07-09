"""Shared reliability core: classify LLM/provider failures into an actionable taxonomy.

VENDORED BYTE-IDENTICAL in both services:
  - founderslens/founderslens/reliability.py
  - pmf-agent/reliability.py
Pure stdlib, NO SDK imports, so the two copies stay hash-equal (a drift-guard test
diffs them). SDK-touching helpers (validate_key, grounded_json) live PER-SERVICE —
this module is only the classification logic, which every call site shares so the
UI can show ONE honest message: "your key / your model" vs "our side" vs "retrying".

To regenerate the sibling copy after editing, copy this file verbatim across; the
hash-guard test fails the build if they drift.
"""
from __future__ import annotations

from enum import Enum


class ErrorClass(str, Enum):
    """What went wrong, from the STUDENT's point of view."""
    AUTH = "auth"                                    # bad / revoked API key
    NO_CREDITS = "no_credits"                        # valid key, no balance / quota left
    NO_MODEL_ACCESS = "no_model_access"              # unknown model id or key lacks access
    RATE_LIMIT = "rate_limit"                        # temporary 429 — retryable
    GROUNDING_UNAVAILABLE = "grounding_unavailable"  # key/model can't do web search
    TRANSIENT = "transient"                          # 5xx / network / parse — retryable
    OUR_BUG = "our_bug"                              # unexpected, our side


# Whose fault it is — drives the UI (your-key vs our-infra vs auto-retry).
_YOUR_SIDE = {ErrorClass.AUTH, ErrorClass.NO_CREDITS, ErrorClass.NO_MODEL_ACCESS,
              ErrorClass.GROUNDING_UNAVAILABLE}
_RETRYABLE = {ErrorClass.RATE_LIMIT, ErrorClass.TRANSIENT}

# HTTP statuses meaning "the request itself is wrong" — never worth retrying.
NON_RETRYABLE_STATUS = {400, 401, 403, 404, 422}

# Substring cues (checked against str(exc).lower()). Classifying on the message,
# not the SDK exception class, survives SDK version churn across all 3 providers.
_CREDITS_CUES = ("insufficient_quota", "insufficient quota", "billing", "credit balance",
                 "credit_balance", "out of credits", "exceeded your current quota",
                 "quota exceeded", "payment required", "plan and billing")
_AUTH_CUES = ("invalid x-api-key", "invalid api key", "invalid_api_key", "incorrect api key",
              "authentication", "unauthorized", "no auth credentials", "permission denied")
_MODEL_CUES = ("model not found", "does not exist", "unknown model", "model_not_found",
               "invalid model", "not have access to model", "no such model",
               "unsupported model")
_GROUNDING_CUES = ("web_search", "web search", "search tool is not", "search is not enabled",
                   "does not support web")


def http_status(exc: Exception) -> int | None:
    """Best-effort HTTP status across anthropic / openai / google-genai exception
    shapes. Status-based classification survives SDK version bumps."""
    for attr in ("status_code", "status", "code"):
        v = getattr(exc, attr, None)
        if isinstance(v, int):
            return v
    resp = getattr(exc, "response", None)
    if resp is not None:
        v = getattr(resp, "status_code", None)
        if isinstance(v, int):
            return v
    return None


def classify(exc: Exception) -> tuple[ErrorClass, str]:
    """Map a provider/LLM exception to (ErrorClass, user_message_ru).

    Order matters: specific cues (grounding, credits) are checked before the broad
    status buckets. The credits-vs-ratelimit split (both can be 429) is decided by
    billing substrings.
    """
    s = str(exc).lower()
    status = http_status(exc)

    # Web-search unavailable (e.g. Anthropic org hasn't enabled it) — a 400/403
    # that specifically mentions web search. Check before the generic 400 bucket.
    if any(c in s for c in _GROUNDING_CUES) and (status in (400, 403) or status is None):
        return (ErrorClass.GROUNDING_UNAVAILABLE,
                "Выбранная модель или ключ не умеет веб-поиск. Для Claude включи Web Search в консоли "
                "(console.anthropic.com -> Settings -> Privacy), для OpenAI выбери модель с веб-поиском, "
                "или используй Gemini - он ищет в вебе сразу.")

    # No balance / quota — 402, or a billing cue on any status (often 429/400).
    if status == 402 or any(c in s for c in _CREDITS_CUES):
        return (ErrorClass.NO_CREDITS,
                "У твоего API-ключа закончились кредиты или квота. Пополни баланс у провайдера и запусти снова.")

    if status in (401, 403) or any(c in s for c in _AUTH_CUES):
        return (ErrorClass.AUTH,
                "API-ключ отклонён провайдером. Проверь, что ключ верный, активен и от выбранного провайдера.")

    if status == 404 or any(c in s for c in _MODEL_CUES):
        return (ErrorClass.NO_MODEL_ACCESS,
                "Модель не найдена или у ключа нет к ней доступа. Выбери другую модель из списка.")

    if status == 429:
        return (ErrorClass.RATE_LIMIT,
                "Слишком много запросов к провайдеру (rate limit). Подожди минуту и попробуй снова.")

    if status in (400, 422):
        return (ErrorClass.NO_MODEL_ACCESS,
                "Провайдер отклонил запрос - возможно, модель не поддерживает нужный режим. Попробуй другую модель.")

    # No HTTP status (JSON parse, connection reset, timeout) or a 5xx → transient.
    return (ErrorClass.TRANSIENT,
            "Временная ошибка на стороне провайдера. Это не твой ключ - повторяем автоматически.")


def is_retryable(cls: ErrorClass) -> bool:
    """True if the run should retry (rate-limit / transient) rather than fail fast."""
    return cls in _RETRYABLE


def is_your_side(cls: ErrorClass) -> bool:
    """True if the fix is on the user's side (key / model / credits / grounding) — the
    UI should tell them what to change, not blame the server."""
    return cls in _YOUR_SIDE
