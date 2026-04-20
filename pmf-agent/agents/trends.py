from typing import Any

from models.dataclasses import SearchPlan, TimingAnalysis
from .base import call_agent, call_agent_deep, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a trend analyst helping a founder figure out if now is the right moment to build this.\n"
    "Research:\n"
    "1. Tailwinds: macro trends supporting this idea (AI adoption, demographic shifts, etc.)\n"
    "2. Headwinds: obstacles and risks (regulation, market saturation, etc.)\n"
    "3. Google Trends data: search 'Google Trends {keyword} 2024 2025 2026' for interest signals\n"
    "4. Technology readiness: where is the underlying tech on the adoption curve?\n"
    "5. S-curve position: innovation/early_adoption/early_majority/late_majority/laggards\n"
    "6. Regulatory catalysts: upcoming regulations that could help or hurt\n"
    "7. Market events timeline: key events, launches, funding rounds in this space\n\n"
    "For each tailwind/headwind provide specific evidence and impact assessment.\n"
    "For Google Trends, report actual trend direction (rising/stable/declining) with peak periods.\n\n"
    "WRITING STYLE for text fields (why_now, evidence, impact, etc.):\n"
    "Write in plain language. 'Dating app fatigue is real — people want something different' "
    "beats 'market saturation drives demand for differentiated value propositions'.\n"
    "Use concrete examples and analogies. Keep it punchy.\n"
    "Return ONLY valid JSON."
)


class TrendsAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan, rounds: int = 2) -> TimingAnalysis:
        user_prompt = (
            f"Analyze trends and timing for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n"
            f"Market Context: {plan.market_context}\n\n"
            f"Use these search queries:\n"
            + "\n".join(f"- {q}" for q in plan.trend_queries)
            + "\n\nReturn JSON with:\n"
            '{"tailwinds": [{"trend": "...", "impact": "high", "evidence": "..."}], '
            '"headwinds": [{"trend": "...", "impact": "medium", "severity": "..."}], '
            '"why_now": "Compelling argument...", '
            '"adjacent_analogies": [{"company": "...", "analogy": "...", "lesson": "..."}], '
            '"timing_score": 72, '
            '"google_trends_signals": [{"keyword": "AI dating", "direction": "rising", "peak_period": "Q1 2026"}], '
            '"technology_readiness": "growing", '
            '"s_curve_position": "early_adoption", '
            '"regulatory_catalysts": [{"regulation": "...", "impact": "positive", "timeline": "2026"}], '
            '"market_events_timeline": [{"event": "...", "date": "2025", "impact": "Major competitor IPO"}]}'
        )

        data = await call_agent_deep(
            self.client, self.model, SYSTEM_PROMPT, user_prompt,
            rounds=rounds, tools=[WEB_SEARCH_TOOL]
        )

        def safe_int(val, default=50):
            try:
                return int(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        return TimingAnalysis(
            tailwinds=data.get("tailwinds") or [],
            headwinds=data.get("headwinds") or [],
            why_now=str(data.get("why_now") or ""),
            adjacent_analogies=data.get("adjacent_analogies") or [],
            timing_score=safe_int(data.get("timing_score")),
            google_trends_signals=data.get("google_trends_signals") or [],
            technology_readiness=str(data.get("technology_readiness") or "growing"),
            s_curve_position=str(data.get("s_curve_position") or "early_adoption"),
            regulatory_catalysts=data.get("regulatory_catalysts") or [],
            market_events_timeline=data.get("market_events_timeline") or [],
        )
