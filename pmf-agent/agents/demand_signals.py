from typing import Any

from models.dataclasses import SearchPlan, DemandAnalysis
from .base import call_agent, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a demand detective — finding hard evidence that people actually want this.\n"
    "Search for:\n"
    "- 'Google Trends {keyword} 2024 2025 2026' for interest signals\n"
    "- 'site:reddit.com {keyword} subreddit' for community sizes\n"
    "- '{keyword} facebook group members' for social communities\n"
    "- '{keyword} app downloads search volume' for app demand\n"
    "- '{keyword} ProductHunt launch' for tech community interest\n\n"
    "For each signal provide: platform, metric, value (specific number), trend (rising/stable/declining).\n"
    "Estimate overall demand_score (0-100) and demand_trajectory (accelerating/steady/declining/emerging).\n\n"
    "WRITING STYLE for text fields (google_trends_summary, etc.):\n"
    "Write simply. 'There are 6.3M people in r/dating_advice — clearly a lot of folks need help' "
    "beats 'substantial community engagement metrics observed on Reddit'.\n"
    "Return ONLY valid JSON."
)


class DemandSignalAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan) -> DemandAnalysis:
        queries = plan.demand_queries if plan.demand_queries else [
            f"Google Trends {plan.proposed_solution} interest over time 2024 2025",
            f"site:reddit.com {plan.core_problem} subreddit community",
            f"{plan.target_segment} social media community size",
            f"{plan.proposed_solution} app downloads search volume demand",
        ]

        user_prompt = (
            f"Research demand signals for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n"
            f"Market Context: {plan.market_context}\n\n"
            f"Search these queries:\n"
            + "\n".join(f"- {q}" for q in queries)
            + "\n\nReturn JSON with:\n"
            '{"search_queries": [{"query": "...", "estimated_volume": "10K-50K monthly", "trend": "rising"}], '
            '"google_trends_summary": "Interest in AI dating has grown 3x since 2023...", '
            '"social_media_signals": [{"platform": "Reddit", "metric": "subreddit_members", "value": "45000", "trend": "rising"}], '
            '"community_sizes": [{"community": "r/dating", "platform": "Reddit", "size": "2M", "activity_level": "high"}], '
            '"content_demand": [{"topic": "AI dating", "volume": "high", "engagement": "growing"}], '
            '"demand_score": 65, "demand_trajectory": "accelerating"}'
        )

        data = await call_agent(
            self.client, self.model, SYSTEM_PROMPT, user_prompt, tools=[WEB_SEARCH_TOOL]
        )

        def safe_int(val, default=50):
            try:
                return int(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        return DemandAnalysis(
            search_queries=data.get("search_queries") or [],
            google_trends_summary=str(data.get("google_trends_summary") or ""),
            social_media_signals=data.get("social_media_signals") or [],
            community_sizes=data.get("community_sizes") or [],
            content_demand=data.get("content_demand") or [],
            demand_score=safe_int(data.get("demand_score")),
            demand_trajectory=str(data.get("demand_trajectory") or "steady"),
        )
