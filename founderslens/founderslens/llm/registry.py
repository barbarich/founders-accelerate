"""LLM provider registry + factory.

Usage:
    provider = get_provider("anthropic", api_key="sk-ant-...")
    resp = await provider.complete(system="...", user="...")

To add a new provider:
1. Implement LLMProvider in a new module (e.g. `cohere_provider.py`)
2. Register it below in `PROVIDERS`
"""

from __future__ import annotations

from typing import Optional

from founderslens import config
from founderslens.llm.anthropic_provider import AnthropicProvider
from founderslens.llm.base import LLMProvider
from founderslens.llm.gemini_provider import GeminiProvider
from founderslens.llm.openai_provider import OpenAIProvider

#: Canonical provider names the UI/API expose.
PROVIDERS: dict[str, type[LLMProvider]] = {
    "anthropic": AnthropicProvider,
    "claude": AnthropicProvider,       # alias
    "openai": OpenAIProvider,
    "gpt": OpenAIProvider,             # alias
    "gemini": GeminiProvider,
    "google": GeminiProvider,          # alias
}


def get_provider(name: str, api_key: str) -> LLMProvider:
    """Factory. Raises ValueError if provider name is unknown."""
    key = (name or "").lower().strip()
    if key not in PROVIDERS:
        raise ValueError(f"unknown LLM provider: {name!r}. Supported: {sorted(set(v.provider_name for v in PROVIDERS.values()))}")
    return PROVIDERS[key](api_key=api_key)


def default_provider_from_env() -> Optional[LLMProvider]:
    """Dev fallback: build a provider from whichever env key is set.
    Priority: Anthropic > OpenAI > Gemini. Returns None if no key configured.
    """
    if config.ANTHROPIC_API_KEY:
        return AnthropicProvider(api_key=config.ANTHROPIC_API_KEY)
    if config.OPENAI_API_KEY:
        return OpenAIProvider(api_key=config.OPENAI_API_KEY)
    return None
