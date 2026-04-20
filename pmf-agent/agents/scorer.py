import json
from typing import Any

from models.dataclasses import (
    SearchPlan, MarketData, CompetitorMatrix,
    PainProfile, TimingAnalysis, PMFAxisScore, PMFScore,
    DemandAnalysis, UnitEconomicsAnalysis, RegulatoryAnalysis,
)
from .base import call_agent

SYSTEM_PROMPT = (
    "You are a PMF analyst giving a founder an honest, clear-eyed assessment of their idea. "
    "Score this startup on 9 axes (0-100 each). "
    "For each axis provide: score (int), reasoning (2-3 sentences with SPECIFIC evidence from the research data). "
    "Axes and weights:\n"
    "- problem_severity (w:0.20): How painful is the problem? Evidence from pain signals, user quotes.\n"
    "- market_size (w:0.15): Is the market large enough? Evidence from TAM/SAM/SOM.\n"
    "- competitive_whitespace (w:0.15): Is there room? Evidence from competitor gaps, ERRC.\n"
    "- timing (w:0.10): Is now the right time? Evidence from trends, Google Trends, S-curve.\n"
    "- demand_validation (w:0.10): Is there proven demand? Evidence from search volumes, communities, social signals.\n"
    "- monetization_readiness (w:0.10): Will people pay? Evidence from WTP signals, pricing benchmarks.\n"
    "- unit_economics (w:0.08): Are the economics viable? Evidence from CAC/LTV, pricing.\n"
    "- regulatory_risk (w:0.05): Regulatory barriers? Higher score = fewer barriers.\n"
    "- execution_feasibility (w:0.07): Can it be built and scaled? Consider team stage, technical complexity.\n\n"
    "Verdict: GO if weighted_total>=70, VALIDATE if 45-69, PIVOT if <45.\n\n"
    "WRITING STYLE: The summary and recommendation should read like advice from a mentor, not a consulting report.\n"
    "'The dating market is huge but brutally competitive — your AI angle gives you a real shot, "
    "but you need to prove people will pay before building anything big' "
    "beats 'market opportunity validated with moderate competitive barriers; recommend further validation'.\n"
    "Be direct, specific, and honest. Use plain language in all reasoning fields.\n"
    "Return ONLY valid JSON."
)

WEIGHTS = {
    "problem_severity": 0.20,
    "market_size": 0.15,
    "competitive_whitespace": 0.15,
    "timing": 0.10,
    "demand_validation": 0.10,
    "monetization_readiness": 0.10,
    "unit_economics": 0.08,
    "regulatory_risk": 0.05,
    "execution_feasibility": 0.07,
}


class ScorerAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(
        self,
        plan: SearchPlan,
        market: MarketData,
        competitors: CompetitorMatrix,
        pain: PainProfile,
        timing: TimingAnalysis,
        demand: DemandAnalysis | None = None,
        unit_economics: UnitEconomicsAnalysis | None = None,
        regulatory: RegulatoryAnalysis | None = None,
    ) -> PMFScore:
        # Build compact context to avoid oversized prompts
        context_data = {
            "plan": {
                "problem": plan.core_problem[:200],
                "segment": plan.target_segment[:150],
                "solution": plan.proposed_solution[:200],
                "hypotheses": plan.key_hypotheses[:4],
            },
            "market": {
                "tam": market.tam[:80], "sam": market.sam[:80], "som": market.som[:80],
                "cagr": market.cagr, "maturity": market.market_maturity,
                "drivers": [d[:60] if isinstance(d, str) else str(d)[:60] for d in market.growth_drivers[:3]],
            },
            "competitors": {
                "count": len(competitors.competitors),
                "top": [{"name": c.name, "threat": c.threat_level} for c in competitors.competitors[:5]],
                "threat": competitors.overall_threat,
                "whitespace": competitors.whitespace_opportunities[:3],
            },
            "pain": {
                "severity": pain.pain_severity_score,
                "frequency": pain.pain_frequency_score,
                "quotes": [s.quote[:100] for s in pain.pain_signals[:3]],
                "wtp": pain.wtp_summary[:150],
                "buzz": pain.social_buzz_score,
            },
            "timing": {
                "score": timing.timing_score,
                "why_now": timing.why_now[:150],
                "tailwinds": len(timing.tailwinds),
                "headwinds": len(timing.headwinds),
                "s_curve": timing.s_curve_position,
            },
            "demand": {
                "score": demand.demand_score if demand else 50,
                "trajectory": demand.demand_trajectory if demand else "unknown",
            },
            "economics": {
                "score": unit_economics.unit_economics_score if unit_economics else 50,
                "arpu": (unit_economics.estimated_arpu if unit_economics else "unknown"),
                "ltv_cac": (unit_economics.ltv_cac_ratio if unit_economics else "unknown"),
            },
            "regulatory": {
                "score": regulatory.regulatory_score if regulatory else 70,
                "risks": len(regulatory.legal_risks) if regulatory else 0,
            },
        }
        research_context = json.dumps(context_data, indent=1, default=str)
        # Hard cap to prevent oversized prompts
        if len(research_context) > 5000:
            research_context = research_context[:5000] + "\n..."

        user_prompt = (
            f"Score this startup idea based on comprehensive research:\n\n{research_context}\n\n"
            f"Score ALL 9 axes: problem_severity, market_size, competitive_whitespace, timing, "
            f"demand_validation, monetization_readiness, unit_economics, regulatory_risk, execution_feasibility.\n\n"
            f"Return JSON with: axes (list of {{axis, score, reasoning}}), "
            f"weighted_total (float), verdict (GO/VALIDATE/PIVOT), summary (str)."
        )

        data = await call_agent(self.client, self.model, SYSTEM_PROMPT, user_prompt)

        axes = []
        for a in data.get("axes", []):
            axis_name = a["axis"]
            axes.append(
                PMFAxisScore(
                    axis=axis_name,
                    score=int(a["score"]),
                    weight=WEIGHTS.get(axis_name, 0.0),
                    reasoning=a.get("reasoning", ""),
                )
            )

        # Ensure all axes present
        existing_axes = {a.axis for a in axes}
        for axis_name, weight in WEIGHTS.items():
            if axis_name not in existing_axes:
                axes.append(PMFAxisScore(axis=axis_name, score=50, weight=weight, reasoning="Not scored"))

        weighted_total = sum(a.score * a.weight for a in axes)
        if weighted_total >= 70:
            verdict = "GO"
        elif weighted_total >= 45:
            verdict = "VALIDATE"
        else:
            verdict = "PIVOT"

        return PMFScore(
            axes=axes,
            weighted_total=round(weighted_total, 1),
            verdict=verdict,
            summary=data.get("summary", ""),
        )
