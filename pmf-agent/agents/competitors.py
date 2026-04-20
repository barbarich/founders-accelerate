from typing import Any

from models.dataclasses import SearchPlan, CompetitorInfo, CompetitorMatrix
from .base import call_agent, call_agent_deep, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a competitive intelligence analyst helping a founder understand who they are up against.\n"
    "REQUIRED for EACH competitor (find at least 5-8):\n"
    "- name, founded_year, funding_total, latest_round (search Crunchbase/TechCrunch)\n"
    "- target_segment, pricing_model (search competitor websites)\n"
    "- key_differentiator, top_3_weaknesses (search G2/Trustpilot reviews)\n"
    "- threat_level (High/Medium/Low) with detailed reasoning\n"
    "- value_score (0-100), reach_score (0-100)\n"
    "- estimated_revenue, employee_count, web_traffic_estimate, growth_trajectory\n"
    "- social_presence: estimated followers per platform\n\n"
    "ALSO provide:\n"
    "- ERRC matrix (eliminate/reduce/raise/create)\n"
    "- blue_ocean_canvas: [{factor, our_score, competitor_avg, leader_name, leader_score}] — 6+ value factors\n"
    "- strategic_groups: [{group_name, members, positioning}]\n"
    "- funding_landscape: {total_in_space, avg_round_size, recent_rounds_count}\n"
    "- whitespace_opportunities\n\n"
    "WRITING STYLE for ALL text fields (threat_reasoning, key_differentiator, weaknesses, whitespace, etc.):\n"
    "Write in plain, conversational language — like explaining to a smart friend.\n"
    "Short sentences. No consulting jargon. Say 'they are growing fast' not 'exhibiting strong growth trajectory'.\n"
    "Use concrete comparisons: 'Tinder makes $1.9B/year — they are the Goliath here' beats 'dominant market incumbent'.\n"
    "Return ONLY valid JSON."
)


class CompetitorAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan, rounds: int = 2) -> CompetitorMatrix:
        user_prompt = (
            f"Find and deeply analyze competitors for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n"
            f"Market Context: {plan.market_context}\n\n"
            f"Use these search queries:\n"
            + "\n".join(f"- {q}" for q in plan.competitor_queries)
            + "\n\nReturn JSON with:\n"
            '{"competitors": [{"name": "...", "founded_year": 2020, "funding_total": "$10M", '
            '"latest_round": "Series A", "target_segment": "...", "pricing_model": "freemium", '
            '"key_differentiator": "...", "top_3_weaknesses": ["w1","w2","w3"], '
            '"threat_level": "High", "threat_reasoning": "...", "value_score": 70, "reach_score": 60, '
            '"estimated_revenue": "$5M ARR", "employee_count": "50", '
            '"web_traffic_estimate": "1M/mo", "growth_trajectory": "accelerating", '
            '"social_presence": {"instagram": "50K", "linkedin": "10K"}}], '
            '"errc": {"eliminate": [], "reduce": [], "raise": [], "create": []}, '
            '"blue_ocean_canvas": [{"factor": "AI matching", "our_score": 90, "competitor_avg": 40, "leader_name": "Hinge", "leader_score": 60}], '
            '"strategic_groups": [{"group_name": "Mass market", "members": ["Tinder"], "positioning": "volume"}], '
            '"funding_landscape": {"total_in_space": "$5B", "avg_round_size": "$20M", "recent_rounds_count": 15}, '
            '"overall_threat": "Medium", "whitespace_opportunities": ["..."]}'
        )

        data = await call_agent_deep(
            self.client, self.model, SYSTEM_PROMPT, user_prompt,
            rounds=rounds, tools=[WEB_SEARCH_TOOL]
        )

        def safe_float(val, default=50.0):
            try:
                return float(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        competitors = []
        for c in data.get("competitors") or []:
            competitors.append(
                CompetitorInfo(
                    name=c.get("name") or "Unknown",
                    founded_year=c.get("founded_year"),
                    funding_total=str(c.get("funding_total") or "N/A"),
                    latest_round=str(c.get("latest_round") or "N/A"),
                    target_segment=str(c.get("target_segment") or "N/A"),
                    pricing_model=str(c.get("pricing_model") or "N/A"),
                    key_differentiator=str(c.get("key_differentiator") or "N/A"),
                    top_3_weaknesses=c.get("top_3_weaknesses") or [],
                    threat_level=str(c.get("threat_level") or "Medium"),
                    threat_reasoning=str(c.get("threat_reasoning") or ""),
                    value_score=safe_float(c.get("value_score")),
                    reach_score=safe_float(c.get("reach_score")),
                    estimated_revenue=str(c.get("estimated_revenue") or ""),
                    employee_count=str(c.get("employee_count") or ""),
                    web_traffic_estimate=str(c.get("web_traffic_estimate") or ""),
                    growth_trajectory=str(c.get("growth_trajectory") or ""),
                    social_presence=c.get("social_presence") or {},
                )
            )

        errc = data.get("errc") or {"eliminate": [], "reduce": [], "raise": [], "create": []}

        return CompetitorMatrix(
            competitors=competitors,
            errc=errc,
            overall_threat=str(data.get("overall_threat") or "Medium"),
            whitespace_opportunities=data.get("whitespace_opportunities") or [],
            blue_ocean_canvas=data.get("blue_ocean_canvas") or [],
            strategic_groups=data.get("strategic_groups") or [],
            funding_landscape=data.get("funding_landscape") or {},
        )
