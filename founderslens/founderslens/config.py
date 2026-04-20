"""Central runtime configuration. Loads .env once at import time."""

from __future__ import annotations

import os
from pathlib import Path

from dotenv import load_dotenv

# Load .env from repo root (two levels up from this file).
# override=True so .env wins over any empty shell vars left over from previous sessions.
REPO_ROOT = Path(__file__).resolve().parent.parent
load_dotenv(REPO_ROOT / ".env", override=True)


# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
DATA_DIR = REPO_ROOT / "data"
RUNS_DIR = DATA_DIR / "runs"
CACHED_RUNS_DIR = DATA_DIR / "cached_runs"
FIXTURES_DIR = DATA_DIR / "fixtures"
DB_PATH = Path(os.getenv("FOUNDERSLENS_DB_PATH", str(DATA_DIR / "runs.db")))
PROMPTS_DIR = REPO_ROOT / "founderslens" / "prompts"
I18N_DIR = REPO_ROOT / "founderslens" / "i18n"
REPORT_TEMPLATES_DIR = REPO_ROOT / "founderslens" / "report" / "templates"
REPORT_ASSETS_DIR = REPO_ROOT / "founderslens" / "report" / "assets"
SCRAPERS_DIR = REPO_ROOT / "scrapers"

# Ensure runtime dirs exist
for _d in (DATA_DIR, RUNS_DIR, CACHED_RUNS_DIR):
    _d.mkdir(parents=True, exist_ok=True)


# ---------------------------------------------------------------------------
# Language
# ---------------------------------------------------------------------------
DEFAULT_LANG = os.getenv("FOUNDERSLENS_LANG", "ru").lower()
if DEFAULT_LANG not in ("ru", "en"):
    DEFAULT_LANG = "ru"


# ---------------------------------------------------------------------------
# Cache
# ---------------------------------------------------------------------------
CACHE_TTL_HOURS = int(os.getenv("FOUNDERSLENS_CACHE_TTL_HOURS", "24"))
OFFLINE_MODE = os.getenv("FOUNDERSLENS_OFFLINE", "0") == "1"


# ---------------------------------------------------------------------------
# LLM models + pricing (USD per 1M tokens, as of 2026-04)
# Single source of truth — cost_tracker reads this.
# ---------------------------------------------------------------------------
MODEL_SONNET = "claude-sonnet-4-5"
MODEL_OPUS = "claude-opus-4-7"
MODEL_GPT_4O = "gpt-4o"
MODEL_GPT_4O_MINI = "gpt-4o-mini"
MODEL_GEMINI_FLASH = "gemini-2.0-flash-exp"
MODEL_GEMINI_PRO = "gemini-1.5-pro"

# (input_per_1m_usd, output_per_1m_usd)
MODEL_PRICING: dict[str, tuple[float, float]] = {
    # Anthropic
    MODEL_SONNET: (3.00, 15.00),
    MODEL_OPUS: (15.00, 75.00),
    # OpenAI
    MODEL_GPT_4O: (2.50, 10.00),
    MODEL_GPT_4O_MINI: (0.15, 0.60),
    # Google Gemini (free tier exists, but these are paid tier prices as of 2024-12)
    MODEL_GEMINI_FLASH: (0.075, 0.30),   # gemini-2.0-flash experimental: free for dev, ~$0.10/$0.40 when GA
    MODEL_GEMINI_PRO: (1.25, 5.00),
}


# ---------------------------------------------------------------------------
# Runtime tuning
# ---------------------------------------------------------------------------
# Per-competitor deep-dive concurrency cap (Phase 3 semaphore)
DEEP_DIVE_CONCURRENCY = 5

# Per-phase soft time ceiling (seconds). On timeout, phase short-circuits.
PHASE_TIME_CEILINGS: dict[str, int] = {
    "intake": 120,
    "classify": 60,
    "macro": 240,
    "competitors": 180,
    "deep_dive": 360,
    "customer_econ": 240,
    "synthesis": 300,
}

# Retry config for tool calls
TOOL_RETRY_ATTEMPTS = 3
TOOL_RETRY_BASE_DELAY = 1.0  # seconds, exponential backoff base


# ---------------------------------------------------------------------------
# API keys (resolved here so agents don't re-read os.environ everywhere)
# ---------------------------------------------------------------------------
def _key(name: str) -> str | None:
    val = os.getenv(name)
    return val if val else None


ANTHROPIC_API_KEY = _key("ANTHROPIC_API_KEY")
OPENAI_API_KEY = _key("OPENAI_API_KEY")
TAVILY_API_KEY = _key("TAVILY_API_KEY")
EXA_API_KEY = _key("EXA_API_KEY")
FIRECRAWL_API_KEY = _key("FIRECRAWL_API_KEY")
REDDIT_CLIENT_ID = _key("REDDIT_CLIENT_ID")
REDDIT_CLIENT_SECRET = _key("REDDIT_CLIENT_SECRET")
REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT", "founderslens:v0.1")
YOUTUBE_API_KEY = _key("YOUTUBE_API_KEY")
CRUNCHBASE_API_KEY = _key("CRUNCHBASE_API_KEY")
META_ACCESS_TOKEN = _key("META_ACCESS_TOKEN")
NEWSAPI_KEY = _key("NEWSAPI_KEY")
GNEWS_API_KEY = _key("GNEWS_API_KEY")
PRODUCTHUNT_TOKEN = _key("PRODUCTHUNT_TOKEN")
BUILTWITH_API_KEY = _key("BUILTWITH_API_KEY")


def required_keys_missing() -> list[str]:
    """Return REQUIRED env vars that aren't set. Used by run.py for fail-fast."""
    required = {
        "ANTHROPIC_API_KEY": ANTHROPIC_API_KEY,
        "OPENAI_API_KEY": OPENAI_API_KEY,
        "TAVILY_API_KEY": TAVILY_API_KEY,
        "EXA_API_KEY": EXA_API_KEY,
        "FIRECRAWL_API_KEY": FIRECRAWL_API_KEY,
    }
    return [k for k, v in required.items() if not v]
