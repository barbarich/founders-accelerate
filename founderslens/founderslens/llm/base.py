"""Provider-agnostic LLM interface.

All providers (Anthropic, OpenAI, Gemini) implement `LLMProvider` with two
operations:
- `complete(system, user) -> LLMResponse`
- `extract_json(schema, system, user) -> (parsed, LLMResponse)`

User-provided API keys: each provider INSTANCE holds its own key, so a single
process can serve multiple users with different keys concurrently without
mutating global state.
"""

from __future__ import annotations

import abc
from dataclasses import dataclass
from typing import Any, Optional, Type, TypeVar

from pydantic import BaseModel


T = TypeVar("T", bound=BaseModel)


@dataclass
class LLMResponse:
    text: str
    tokens_in: int
    tokens_out: int
    model: str
    provider: str
    stop_reason: Optional[str] = None
    raw_tool_input: Optional[dict[str, Any]] = None  # when extract_json used


class LLMProvider(abc.ABC):
    """Abstract provider. Each concrete provider implements both methods."""

    provider_name: str = "unknown"

    #: True if this provider implements grounded_extract (web-search grounding on
    #: the user's key). Agents use it as PRIMARY with Tavily as fallback. Default
    #: False so a provider without it (e.g. Gemini here) safely keeps the Tavily path.
    supports_grounding: bool = False

    #: Which model the provider picks by default for each agent tier.
    #: Tier "main" = agents like intake/classifier/marketing/trends.
    #: Tier "premium" = Strategist (higher-quality reasoning model).
    default_models: dict[str, str] = {}

    def __init__(self, api_key: str):
        if not api_key:
            raise ValueError(f"{self.provider_name}: api_key required")
        self.api_key = api_key
        # CRITICAL for multi-user safety: copy class-level default_models into
        # an instance-level dict. Any subsequent per-run mutation (e.g. user's
        # chosen model override in server.py::_run_pipeline) stays isolated to
        # this instance and never leaks to concurrent runs or future requests.
        self.default_models = dict(type(self).default_models)

    @abc.abstractmethod
    async def complete(
        self,
        *,
        system: str,
        user: str,
        model: Optional[str] = None,
        max_tokens: int = 2048,
        temperature: float = 0.3,
    ) -> LLMResponse:
        ...

    @abc.abstractmethod
    async def extract_json(
        self,
        *,
        schema: Type[T],
        system: str,
        user: str,
        model: Optional[str] = None,
        max_tokens: int = 4096,
        temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        ...

    def resolve_model(self, tier: str, override: Optional[str] = None) -> str:
        """Pick a model for the given tier (main / premium) unless overridden explicitly."""
        if override:
            return override
        return self.default_models.get(tier, self.default_models.get("main", ""))


# Registered providers — populated by registry.get_provider()
__all__ = ["LLMProvider", "LLMResponse", "T"]
