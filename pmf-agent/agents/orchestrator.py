from typing import Any

from models.dataclasses import IdeaInput, SearchPlan
from .base import call_agent

SYSTEM_PROMPT = (
    "You are a startup research planner. Think like a founder preparing to deeply understand their market. "
    "Decompose the startup idea into a comprehensive research plan. "
    "Extract: core_problem, target_segment, proposed_solution, market_context, key_hypotheses (list of 5-7 critical assumptions to validate). "
    "Generate SPECIFIC, data-driven search queries for each research agent:\n"
    "- market_queries (6): TAM/SAM/SOM sizing, CAGR, industry reports, geographic breakdown, segment analysis\n"
    "- competitor_queries (8): direct/indirect competitors, funding rounds, pricing, reviews, market share\n"
    "- pain_queries (6): Reddit complaints, App Store reviews, G2 reviews, forum discussions, support issues\n"
    "- trend_queries (5): Google Trends, technology adoption, regulatory changes, macro shifts\n"
    "- demand_queries (4): search volume, social media community sizes, content demand, app download trends\n"
    "- unit_economics_queries (3): competitor pricing, CAC/LTV benchmarks, monetization models\n"
    "- regulatory_queries (3): compliance requirements, data privacy, industry regulations\n"
    "- source_priorities: dict mapping each category to recommended sources (e.g. {\"market\": [\"statista\", \"grandview\"], \"pain\": [\"reddit\", \"g2\"]})\n"
    "Make queries SPECIFIC — include company names, market names, geographic regions, year ranges (2024-2026).\n\n"
    "Write ALL text fields (core_problem, market_context, hypotheses) in plain, conversational language — "
    "like explaining to a smart friend over coffee. Short sentences. No jargon. Lead with the insight, not the methodology. "
    "Return ONLY valid JSON."
)


class OrchestratorAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, idea: IdeaInput) -> SearchPlan:
        user_prompt = (
            f"Decompose this startup idea into a comprehensive research plan:\n\n"
            f"Title: {idea.title}\n"
            f"Description: {idea.description}\n"
            f"Target Market: {idea.market}\n"
            f"Stage: {idea.stage}\n"
            f"Founder: {idea.founder}\n\n"
            f"Return JSON with ALL these keys:\n"
            f"- core_problem (str)\n"
            f"- target_segment (str)\n"
            f"- proposed_solution (str)\n"
            f"- market_context (str)\n"
            f"- key_hypotheses (list of 5-7 critical assumptions)\n"
            f"- market_queries (list of 6 specific queries targeting Statista, industry reports, market sizing)\n"
            f"- competitor_queries (list of 8 queries targeting Crunchbase, G2, ProductHunt, competitor websites)\n"
            f"- pain_queries (list of 6 queries targeting Reddit, App Store reviews, G2, Trustpilot, HackerNews)\n"
            f"- trend_queries (list of 5 queries targeting Google Trends, LinkedIn, technology adoption data)\n"
            f"- demand_queries (list of 4 queries for search volume, social media community sizes, content demand)\n"
            f"- unit_economics_queries (list of 3 queries for competitor pricing, CAC/LTV benchmarks)\n"
            f"- regulatory_queries (list of 3 queries for compliance, data privacy, legal requirements)\n"
            f"- source_priorities (dict mapping category to list of source names)"
        )

        data = await call_agent(self.client, self.model, SYSTEM_PROMPT, user_prompt)

        return SearchPlan(
            core_problem=data.get("core_problem", ""),
            target_segment=data.get("target_segment", ""),
            proposed_solution=data.get("proposed_solution", ""),
            market_context=data.get("market_context", ""),
            key_hypotheses=data.get("key_hypotheses", []),
            market_queries=data.get("market_queries", []),
            competitor_queries=data.get("competitor_queries", []),
            pain_queries=data.get("pain_queries", []),
            trend_queries=data.get("trend_queries", []),
            demand_queries=data.get("demand_queries", []),
            unit_economics_queries=data.get("unit_economics_queries", []),
            regulatory_queries=data.get("regulatory_queries", []),
            source_priorities=data.get("source_priorities", {}),
        )
