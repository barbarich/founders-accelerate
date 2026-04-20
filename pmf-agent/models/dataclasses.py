from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IdeaInput:
    id: str
    title: str
    description: str
    market: str
    stage: str
    founder: str


@dataclass
class SearchPlan:
    core_problem: str
    target_segment: str
    proposed_solution: str
    market_context: str
    key_hypotheses: list[str]
    market_queries: list[str]
    competitor_queries: list[str]
    pain_queries: list[str]
    trend_queries: list[str]
    demand_queries: list[str] = field(default_factory=list)
    unit_economics_queries: list[str] = field(default_factory=list)
    regulatory_queries: list[str] = field(default_factory=list)
    source_priorities: dict = field(default_factory=dict)


@dataclass
class MarketData:
    tam: str
    sam: str
    som: str
    tam_value: float
    sam_value: float
    som_value: float
    cagr: str
    geography: str
    demographics: str
    key_facts: list[dict]
    sources: list[str]
    market_maturity: str = "growth"
    growth_drivers: list[dict] = field(default_factory=list)
    market_segments: list[dict] = field(default_factory=list)
    bottom_up_som: float = 0.0
    som_methodology: str = ""
    regulatory_landscape: str = ""
    source_credibility: list[dict] = field(default_factory=list)


@dataclass
class CompetitorInfo:
    name: str
    founded_year: Optional[int]
    funding_total: str
    latest_round: str
    target_segment: str
    pricing_model: str
    key_differentiator: str
    top_3_weaknesses: list[str]
    threat_level: str
    threat_reasoning: str
    value_score: float = 50.0
    reach_score: float = 50.0
    estimated_revenue: str = ""
    employee_count: str = ""
    web_traffic_estimate: str = ""
    growth_trajectory: str = ""
    social_presence: dict = field(default_factory=dict)


@dataclass
class CompetitorMatrix:
    competitors: list[CompetitorInfo]
    errc: dict
    overall_threat: str
    whitespace_opportunities: list[str]
    blue_ocean_canvas: list[dict] = field(default_factory=list)
    strategic_groups: list[dict] = field(default_factory=list)
    funding_landscape: dict = field(default_factory=dict)


@dataclass
class PainSignal:
    quote: str
    source: str
    frequency_signal: str
    current_workaround: str
    wtp_signal: str
    journey_stage: str = "usage"
    sentiment_intensity: int = 5


@dataclass
class PainProfile:
    pain_signals: list[PainSignal]
    pain_severity_score: int
    pain_frequency_score: int
    top_workarounds: list[str]
    wtp_summary: str
    journey_pain_map: list[dict] = field(default_factory=list)
    demand_signals: list[dict] = field(default_factory=list)
    social_buzz_score: int = 5


@dataclass
class TimingAnalysis:
    tailwinds: list[dict]
    headwinds: list[dict]
    why_now: str
    adjacent_analogies: list[dict]
    timing_score: int
    google_trends_signals: list[dict] = field(default_factory=list)
    technology_readiness: str = "growing"
    s_curve_position: str = "early_adoption"
    regulatory_catalysts: list[dict] = field(default_factory=list)
    market_events_timeline: list[dict] = field(default_factory=list)


@dataclass
class DemandAnalysis:
    search_queries: list[dict] = field(default_factory=list)
    google_trends_summary: str = ""
    social_media_signals: list[dict] = field(default_factory=list)
    community_sizes: list[dict] = field(default_factory=list)
    content_demand: list[dict] = field(default_factory=list)
    demand_score: int = 50
    demand_trajectory: str = "steady"


@dataclass
class UnitEconomicsAnalysis:
    pricing_benchmarks: list[dict] = field(default_factory=list)
    estimated_arpu: str = ""
    estimated_cac_range: str = ""
    estimated_ltv_range: str = ""
    ltv_cac_ratio: str = ""
    monetization_models: list[dict] = field(default_factory=list)
    revenue_projection: dict = field(default_factory=dict)
    unit_economics_score: int = 50


@dataclass
class RegulatoryAnalysis:
    regulations: list[dict] = field(default_factory=list)
    compliance_requirements: list[str] = field(default_factory=list)
    legal_risks: list[dict] = field(default_factory=list)
    data_privacy_requirements: list[str] = field(default_factory=list)
    industry_licenses: list[str] = field(default_factory=list)
    regulatory_score: int = 70


@dataclass
class PMFAxisScore:
    axis: str
    score: int
    weight: float
    reasoning: str


@dataclass
class PMFScore:
    axes: list[PMFAxisScore]
    weighted_total: float
    verdict: str
    summary: str


@dataclass
class PivotScenario:
    pivot_type: str
    hypothesis: str
    validation_experiment: str
    success_metric: str
    timeline_days: int
    risk: str
    company_inspiration: str
    confidence_score: int


@dataclass
class PivotPlan:
    scenarios: list[PivotScenario]
    recommended_pivot: str
    reasoning: str


@dataclass
class IdeaReport:
    idea: IdeaInput
    search_plan: SearchPlan
    market: MarketData
    competitors: CompetitorMatrix
    pain: PainProfile
    timing: TimingAnalysis
    pmf_score: PMFScore
    pivot_plan: Optional[PivotPlan] = None
    demand: Optional[DemandAnalysis] = None
    unit_economics: Optional[UnitEconomicsAnalysis] = None
    regulatory: Optional[RegulatoryAnalysis] = None
