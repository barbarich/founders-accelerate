"""LangGraph state schema. All agent outputs flow through this single structure.

Design notes:
- Every field is Optional so partial runs are valid (fail-gracefully philosophy).
- Every material claim is a `Claim` carrying confidence + sources — not a bare string.
- Agent outputs are separate pydantic models so each agent can be tested in isolation.
- The root `ResearchState` is what LangGraph passes between nodes.
"""

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, Literal, Optional

from pydantic import BaseModel, Field


# ---------------------------------------------------------------------------
# Confidence + source primitives — every material claim uses these
# ---------------------------------------------------------------------------

class Confidence(str, Enum):
    HIGH = "HIGH"           # 3+ corroborating sources
    MEDIUM = "MEDIUM"       # 1-2 sources
    LOW = "LOW"             # LLM inference, no direct source
    UNAVAILABLE = "UNAVAILABLE"  # data couldn't be fetched


class Source(BaseModel):
    url: str
    title: Optional[str] = None
    accessed_at: Optional[datetime] = None
    excerpt: Optional[str] = None           # short quote used for the claim
    tool: Optional[str] = None              # which tool/adapter fetched it


class Claim(BaseModel):
    """A single material claim — every report assertion should be one of these."""
    text: str
    confidence: Confidence = Confidence.MEDIUM
    sources: list[Source] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Phase 0 — Intake + Classification
# ---------------------------------------------------------------------------

class IdeaInput(BaseModel):
    raw_idea: str
    target_user: Optional[str] = None
    geography: list[str] = Field(default_factory=list)   # e.g. ["US", "EU"]
    monetization_hypothesis: Optional[str] = None
    reference_products: list[str] = Field(default_factory=list)
    already_tried: Optional[str] = None
    language: Literal["ru", "en"] = "ru"


class Classification(BaseModel):
    industry: str
    sub_industry: Optional[str] = None
    business_model: str                              # freemium, subscription, marketplace, etc.
    segment: Literal["B2C", "B2B", "B2B2C"]
    domain_flags: list[str] = Field(default_factory=list)  # ["mobile", "health_adjacent", ...]
    primary_geography: list[str] = Field(default_factory=list)
    rejected: bool = False                           # True if guardrail triggered
    rejected_reason: Optional[str] = None


# ---------------------------------------------------------------------------
# Phase 1 — Macro (parallel)
# ---------------------------------------------------------------------------

class MarketSize(BaseModel):
    tam_usd: Optional[float] = None
    sam_usd: Optional[float] = None
    som_usd: Optional[float] = None
    cagr_pct: Optional[float] = None
    forecast_years: int = 5
    methodology_top_down: Optional[str] = None
    methodology_bottom_up: Optional[str] = None
    why_now: list[Claim] = Field(default_factory=list)  # tech/regulatory/behavioral enablers
    claims: list[Claim] = Field(default_factory=list)


class TrendPoint(BaseModel):
    label: str                          # e.g. "baby tracker"
    direction: Literal["up", "flat", "down"]
    yoy_pct: Optional[float] = None
    series: list[tuple[str, float]] = Field(default_factory=list)  # [(YYYY-MM, value), ...]
    commentary: Optional[str] = None    # "market in year 3 of S-curve, roll-out phase"


class Trends(BaseModel):
    google_trends: list[TrendPoint] = Field(default_factory=list)
    cultural_signals: list[Claim] = Field(default_factory=list)   # Reddit, TikTok, YouTube, HN
    academic_signals: list[Claim] = Field(default_factory=list)   # Semantic Scholar


class Graveyard(BaseModel):
    failed_startups: list[Claim] = Field(default_factory=list)    # "X shut down because Y"
    pestel: dict[str, list[Claim]] = Field(default_factory=dict)  # political/economic/social/tech/env/legal
    adjacent_evolution: Optional[str] = None


# ---------------------------------------------------------------------------
# Phase 2 — Competitors
# ---------------------------------------------------------------------------

class Competitor(BaseModel):
    name: str
    url: Optional[str] = None
    segment: Optional[str] = None       # direct / indirect / substitute
    category: Optional[str] = None
    geography: list[str] = Field(default_factory=list)
    stage: Optional[str] = None         # seed, series_a, public, bootstrapped, etc.
    one_line_pitch: Optional[str] = None
    source: Optional[str] = None        # where we found them (tavily/exa/app_store/producthunt)


class CompetitorUniverse(BaseModel):
    all_competitors: list[Competitor] = Field(default_factory=list)   # 15-30
    top_deep_dive: list[str] = Field(default_factory=list)            # names subset — 5-7 for Phase 3


# ---------------------------------------------------------------------------
# Phase 3 — Deep Dive per competitor
# ---------------------------------------------------------------------------

class TrafficProfile(BaseModel):
    web_visits_monthly_est: Optional[int] = None
    mobile_rank: Optional[int] = None
    downloads_tier: Optional[str] = None       # "100K-500K", "1M+", etc.
    rating_current: Optional[float] = None
    rating_count: Optional[int] = None
    seo_notes: Optional[str] = None
    claims: list[Claim] = Field(default_factory=list)


class FundingRound(BaseModel):
    date: Optional[str] = None
    round_type: Optional[str] = None           # seed, series_a, etc.
    amount_usd: Optional[float] = None
    investors: list[str] = Field(default_factory=list)


class PricingSnapshot(BaseModel):
    date: str                                  # YYYY-MM
    tier: str
    price_usd: Optional[float] = None
    interval: Optional[str] = None             # monthly, yearly, lifetime


class BusinessModelProfile(BaseModel):
    funding_rounds: list[FundingRound] = Field(default_factory=list)
    team_size_est: Optional[int] = None
    hiring_signals: Optional[str] = None
    current_pricing: list[PricingSnapshot] = Field(default_factory=list)
    pricing_history: list[PricingSnapshot] = Field(default_factory=list)   # from Wayback
    business_model_classification: Optional[str] = None
    claims: list[Claim] = Field(default_factory=list)


class AdCreative(BaseModel):
    ad_id: str
    platform: Literal["meta", "google", "tiktok"]
    first_seen: Optional[str] = None           # YYYY-MM-DD
    last_seen: Optional[str] = None
    days_active: Optional[int] = None
    countries: list[str] = Field(default_factory=list)
    creative_type: Optional[str] = None        # image, video, carousel
    media_url: Optional[str] = None            # original
    local_path: Optional[str] = None           # downloaded into data/runs/<run_id>/creatives/
    ad_copy: Optional[str] = None
    cluster_id: Optional[int] = None           # dedup cluster


class MarketingProfile(BaseModel):
    total_active_ads: int = 0
    active_ads_by_platform: dict[str, int] = Field(default_factory=dict)
    top_creatives: list[AdCreative] = Field(default_factory=list)       # top 3-5 unique
    ad_library_screenshot_path: Optional[str] = None                     # relative to run dir: "screenshots/<name>.png"
    ad_library_url: Optional[str] = None                                  # deep link to search results
    headline: Optional[str] = None                                       # from landing
    subheadline: Optional[str] = None
    value_props: list[str] = Field(default_factory=list)
    primary_cta: Optional[str] = None
    top_ad_hooks: list[str] = Field(default_factory=list)                # from Meta copy
    target_audience_inferred: Optional[str] = None
    marketing_maturity_score: Optional[int] = None                       # 0-100 from ad-effectiveness proxies
    channel_hypothesis: Optional[str] = None
    claims: list[Claim] = Field(default_factory=list)


class PainTheme(BaseModel):
    theme: str
    frequency_pct: float                     # % of negative reviews mentioning
    representative_quotes: list[str] = Field(default_factory=list)


class CustomerVoiceProfile(BaseModel):
    review_count_analyzed: int = 0
    pain_themes: list[PainTheme] = Field(default_factory=list)
    praise_themes: list[PainTheme] = Field(default_factory=list)
    feature_requests: list[PainTheme] = Field(default_factory=list)
    overall_sentiment: Optional[float] = None   # -1..1
    reddit_signals: list[Claim] = Field(default_factory=list)
    claims: list[Claim] = Field(default_factory=list)


class DeepCompetitor(BaseModel):
    name: str
    url: Optional[str] = None
    traffic: Optional[TrafficProfile] = None
    business: Optional[BusinessModelProfile] = None
    marketing: Optional[MarketingProfile] = None
    customer_voice: Optional[CustomerVoiceProfile] = None

    # Teaching layer (populated by Compiler using synthesis)
    copy_this: list[str] = Field(default_factory=list)     # 3 things they do well
    avoid_this: list[str] = Field(default_factory=list)    # 3 recurring complaints
    gap_they_leave: Optional[str] = None                   # 1 positioning wedge


# ---------------------------------------------------------------------------
# Phase 4 — Customer & Economics
# ---------------------------------------------------------------------------

class JTBDJob(BaseModel):
    job_statement: str                          # "When I'm X, I want to Y, so I can Z"
    frequency: Optional[str] = None             # daily, weekly, one-time
    evidence: list[Claim] = Field(default_factory=list)


class Segment(BaseModel):
    name: str
    description: str
    size_est_pct_of_market: Optional[float] = None
    underserved: bool = False


class CustomerIntel(BaseModel):
    jobs: list[JTBDJob] = Field(default_factory=list)
    primary_segments: list[Segment] = Field(default_factory=list)
    underserved_wedges: list[str] = Field(default_factory=list)


class UnitEconBenchmark(BaseModel):
    metric: str                                 # CAC, LTV, retention_d30, etc.
    value_str: str                              # "$40-$90", "12-18 months"
    source: Optional[str] = None


class Economics(BaseModel):
    benchmarks: list[UnitEconBenchmark] = Field(default_factory=list)
    channel_feasibility: dict[str, str] = Field(default_factory=dict)  # {channel: "high/med/low"}
    claims: list[Claim] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Phase 5 — Strategy
# ---------------------------------------------------------------------------

class Niche(BaseModel):
    name: str
    positioning: str
    target_segment: str
    justification: str
    risk_score: int = Field(ge=1, le=10)
    opportunity_score: int = Field(ge=1, le=10)
    gtm_hypothesis: Optional[str] = None


class PortersForce(BaseModel):
    force: Literal["new_entrants", "suppliers", "buyers", "substitutes", "rivalry"]
    intensity: Literal["low", "medium", "high"]
    notes: str


class Moat(BaseModel):
    moat_type: str                              # network_effects, switching_costs, data_gravity, scale
    strength: Literal["weak", "medium", "strong"]
    how_to_build: Optional[str] = None


class TechFeasibility(BaseModel):
    integrations_required: list[str] = Field(default_factory=list)
    regulatory: list[str] = Field(default_factory=list)       # HIPAA, GDPR, COPPA, PCI...
    scaling_risks: list[str] = Field(default_factory=list)
    mvp_effort_weeks: Optional[str] = None                    # "6-10 weeks solo"


class Strategy(BaseModel):
    niches: list[Niche] = Field(default_factory=list)         # 3-5
    porters: list[PortersForce] = Field(default_factory=list)
    moats: list[Moat] = Field(default_factory=list)
    strategic_groups: list[dict[str, Any]] = Field(default_factory=list)   # {name, x, y} for scatter
    tech_feasibility: Optional[TechFeasibility] = None


# ---------------------------------------------------------------------------
# Self-Critic + Final Recommendation
# ---------------------------------------------------------------------------

class QualityScore(BaseModel):
    overall: int = Field(ge=0, le=100)
    per_section: dict[str, int] = Field(default_factory=dict)
    weak_sections: list[str] = Field(default_factory=list)
    manual_verification_points: list[str] = Field(default_factory=list)


class ActionItem(BaseModel):
    text: str
    timeframe: Literal["this_week", "this_month", "this_quarter"]
    category: Literal["interviews", "landing", "ads", "product", "research"]
    artifacts: list[str] = Field(default_factory=list)   # concrete outputs: draft text, names list, etc.


class Verdict(BaseModel):
    decision: Literal["GO", "PIVOT", "NO_GO"]
    justification: str
    top_3_risks: list[str] = Field(default_factory=list)
    top_3_opportunities: list[str] = Field(default_factory=list)
    action_items: list[ActionItem] = Field(default_factory=list)


# ---------------------------------------------------------------------------
# Cost tracking (per-run snapshot)
# ---------------------------------------------------------------------------

class CostSnapshot(BaseModel):
    total_usd: float = 0.0
    llm_usd: float = 0.0
    tool_usd: float = 0.0
    by_agent: dict[str, float] = Field(default_factory=dict)
    tokens_in: int = 0
    tokens_out: int = 0


# ---------------------------------------------------------------------------
# Root state — what LangGraph passes between nodes
# ---------------------------------------------------------------------------

class ResearchState(BaseModel):
    # Run metadata
    run_id: str
    started_at: datetime = Field(default_factory=datetime.utcnow)
    language: Literal["ru", "en"] = "ru"

    # Phase 0
    idea_input: Optional[IdeaInput] = None
    classification: Optional[Classification] = None

    # Phase 1
    market_size: Optional[MarketSize] = None
    trends: Optional[Trends] = None
    graveyard: Optional[Graveyard] = None

    # Phase 2
    competitors: Optional[CompetitorUniverse] = None

    # Phase 3
    deep_competitors: list[DeepCompetitor] = Field(default_factory=list)

    # Phase 4
    customer_intel: Optional[CustomerIntel] = None
    economics: Optional[Economics] = None

    # Phase 5
    strategy: Optional[Strategy] = None
    quality_score: Optional[QualityScore] = None
    verdict: Optional[Verdict] = None

    # Final artifacts
    report_html_path: Optional[str] = None
    report_pdf_path: Optional[str] = None
    report_json_path: Optional[str] = None

    # Telemetry
    cost: CostSnapshot = Field(default_factory=CostSnapshot)
    errors: list[str] = Field(default_factory=list)
    phase_timings_ms: dict[str, int] = Field(default_factory=dict)
