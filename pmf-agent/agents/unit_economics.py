from typing import Any

from models.dataclasses import SearchPlan, CompetitorMatrix, UnitEconomicsAnalysis
from .base import call_agent, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a startup financial analyst figuring out whether this business can actually make money.\n"
    "Research competitor pricing, estimate CAC/LTV, analyze monetization models.\n"
    "Search for: '{competitor} pricing plans', '{market} SaaS benchmarks CAC LTV',\n"
    "'{market} customer acquisition cost', '{competitor} revenue estimates'.\n"
    "Find REAL prices from competitor websites.\n"
    "Evaluate monetization models: freemium, subscription, marketplace, advertising, etc.\n"
    "For each model, assess fit_score (0-100) based on the target segment.\n\n"
    "WRITING STYLE: Write like you are advising a founder friend.\n"
    "'Tinder Plus costs $15-30/month, so you could probably charge $10-20 for a niche alternative' "
    "beats 'pricing benchmark analysis suggests a $10-20 ARPU target'.\n"
    "Return ONLY valid JSON."
)


class UnitEconomicsAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan, competitors: CompetitorMatrix) -> UnitEconomicsAnalysis:
        comp_names = [c.name for c in competitors.competitors[:5]]

        queries = plan.unit_economics_queries if plan.unit_economics_queries else [
            f"{comp_names[0] if comp_names else plan.proposed_solution} pricing plans cost",
            f"{plan.market_context} customer acquisition cost benchmark 2025 2026",
            f"{plan.market_context} LTV CAC ratio SaaS benchmark",
        ]

        user_prompt = (
            f"Analyze unit economics for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n"
            f"Competitors: {', '.join(comp_names)}\n\n"
            f"Search these queries:\n"
            + "\n".join(f"- {q}" for q in queries)
            + "\n\nReturn JSON with:\n"
            '{"pricing_benchmarks": [{"competitor": "...", "model": "freemium", "price_range": "$0-$29/mo"}], '
            '"estimated_arpu": "$15/mo", "estimated_cac_range": "$20-50", '
            '"estimated_ltv_range": "$150-400", "ltv_cac_ratio": "5:1 (healthy)", '
            '"monetization_models": [{"model": "freemium", "pros": ["..."], "cons": ["..."], "fit_score": 80}], '
            '"revenue_projection": {"year1": "$50K", "year2": "$300K", "year3": "$1.2M", "assumptions": "..."}, '
            '"unit_economics_score": 70}'
        )

        data = await call_agent(
            self.client, self.model, SYSTEM_PROMPT, user_prompt, tools=[WEB_SEARCH_TOOL]
        )

        def safe_int(val, default=50):
            try:
                return int(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        return UnitEconomicsAnalysis(
            pricing_benchmarks=data.get("pricing_benchmarks") or [],
            estimated_arpu=str(data.get("estimated_arpu") or ""),
            estimated_cac_range=str(data.get("estimated_cac_range") or ""),
            estimated_ltv_range=str(data.get("estimated_ltv_range") or ""),
            ltv_cac_ratio=str(data.get("ltv_cac_ratio") or ""),
            monetization_models=data.get("monetization_models") or [],
            revenue_projection=data.get("revenue_projection") or {},
            unit_economics_score=safe_int(data.get("unit_economics_score")),
        )
