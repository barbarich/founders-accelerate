import json
from typing import Any

from models.dataclasses import (
    SearchPlan, PMFScore, MarketData, CompetitorMatrix,
    PainProfile, PivotScenario, PivotPlan,
)
from .base import call_agent, WEB_SEARCH_TOOL


def _safe_int(v: Any, default: int = 0) -> int:
    """Coerce a possibly-string/float/None LLM value to int without crashing."""
    if isinstance(v, bool):
        return default
    if isinstance(v, (int, float)):
        return int(v)
    try:
        import re as _re
        m = _re.search(r"-?\d+", str(v))
        return int(m.group()) if m else default
    except Exception:
        return default


SYSTEM_PROMPT = (
    "You are a startup pivot advisor helping a founder find a better path forward. The idea scored below 50 on PMF. "
    "Generate 3-5 pivot scenarios. Types: P1=customer_segment_pivot, P2=problem_pivot, "
    "P3=solution_pivot, P4=business_model_pivot, P5=channel_pivot. "
    "For each: pivot_type, hypothesis (one sentence: 'We believe X will pay for Y because Z'), "
    "validation_experiment (how to test in 2 weeks under $500), success_metric, "
    "timeline_days (int), risk (main thing that could go wrong), "
    "company_inspiration (real company that made similar pivot), confidence_score (0-100). "
    "Sort by confidence_score descending. "
    "Also provide recommended_pivot (str) and reasoning (str).\n\n"
    "WRITING STYLE: Write like a mentor giving frank advice.\n"
    "'Instead of trying to compete with Tinder head-on, what if you focused just on Jewish professionals in Tel Aviv?' "
    "beats 'consider a customer segment pivot targeting a vertical niche'.\n"
    "Be specific, practical, and encouraging.\n"
    "Return ONLY valid JSON."
)


class PivotAdvisorAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(
        self,
        plan: SearchPlan,
        score: PMFScore,
        market: MarketData,
        competitors: CompetitorMatrix,
        pain: PainProfile,
    ) -> PivotPlan:
        context = json.dumps(
            {
                "idea": {
                    "core_problem": plan.core_problem,
                    "target_segment": plan.target_segment,
                    "proposed_solution": plan.proposed_solution,
                },
                "pmf_score": {
                    "total": score.weighted_total,
                    "verdict": score.verdict,
                    "axes": {a.axis: {"score": a.score, "reasoning": a.reasoning} for a in score.axes},
                },
                "whitespace": competitors.whitespace_opportunities,
                "pain_signals": [s.quote for s in pain.pain_signals[:5]],
                "wtp_summary": pain.wtp_summary,
            },
            indent=2,
        )

        user_prompt = (
            f"This startup idea scored {score.weighted_total}/100 (verdict: {score.verdict}). "
            f"Generate pivot scenarios based on this research:\n\n{context}\n\n"
            f"Use web_search to find real company pivot examples for inspiration."
        )

        data = await call_agent(
            self.client, self.model, SYSTEM_PROMPT, user_prompt, tools=[WEB_SEARCH_TOOL]
        )

        scenarios = []
        for s in data.get("scenarios", []):
            if not isinstance(s, dict):
                continue
            scenarios.append(
                PivotScenario(
                    pivot_type=s.get("pivot_type", ""),
                    hypothesis=s.get("hypothesis", ""),
                    validation_experiment=s.get("validation_experiment", ""),
                    success_metric=s.get("success_metric", ""),
                    timeline_days=_safe_int(s.get("timeline_days"), 14),
                    risk=s.get("risk", ""),
                    company_inspiration=s.get("company_inspiration", ""),
                    confidence_score=_safe_int(s.get("confidence_score"), 50),
                )
            )

        scenarios.sort(key=lambda x: x.confidence_score, reverse=True)

        return PivotPlan(
            scenarios=scenarios,
            recommended_pivot=data.get("recommended_pivot", scenarios[0].pivot_type if scenarios else ""),
            reasoning=data.get("reasoning", ""),
        )
