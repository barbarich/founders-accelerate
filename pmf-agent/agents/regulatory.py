from typing import Any

from models.dataclasses import SearchPlan, RegulatoryAnalysis
from .base import call_agent, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a regulatory analyst helping a founder understand what legal hoops they need to jump through.\n"
    "Research regulations, legal requirements, data privacy laws, and industry licenses.\n"
    "For each regulation: name, jurisdiction, impact (high/medium/low), status.\n"
    "For legal risks: describe risk, severity (1-10), mitigation.\n"
    "Calculate regulatory_score (0-100): 100 = no barriers, 0 = heavily regulated.\n\n"
    "WRITING STYLE: Explain legal stuff in plain language.\n"
    "'You will need to comply with GDPR — basically, you must let users delete their data and be transparent about what you collect' "
    "beats 'GDPR compliance mandates data subject rights implementation'.\n"
    "Return ONLY valid JSON."
)


class RegulatoryAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan) -> RegulatoryAnalysis:
        queries = plan.regulatory_queries if plan.regulatory_queries else [
            f"{plan.market_context} regulations compliance startup requirements",
            f"{plan.market_context} data privacy laws GDPR",
            f"{plan.proposed_solution} legal requirements licensing",
        ]

        user_prompt = (
            f"Analyze regulatory landscape for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n"
            f"Market Context: {plan.market_context}\n\n"
            f"Search these queries:\n"
            + "\n".join(f"- {q}" for q in queries)
            + "\n\nReturn JSON with:\n"
            '{"regulations": [{"name": "...", "jurisdiction": "...", "impact": "medium", "status": "active"}], '
            '"compliance_requirements": ["GDPR compliance", "..."], '
            '"legal_risks": [{"risk": "...", "severity": 5, "mitigation": "..."}], '
            '"data_privacy_requirements": ["..."], '
            '"industry_licenses": ["..."], '
            '"regulatory_score": 70}'
        )

        data = await call_agent(
            self.client, self.model, SYSTEM_PROMPT, user_prompt, tools=[WEB_SEARCH_TOOL]
        )

        def safe_int(val, default=70):
            try:
                return int(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        return RegulatoryAnalysis(
            regulations=data.get("regulations") or [],
            compliance_requirements=data.get("compliance_requirements") or [],
            legal_risks=data.get("legal_risks") or [],
            data_privacy_requirements=data.get("data_privacy_requirements") or [],
            industry_licenses=data.get("industry_licenses") or [],
            regulatory_score=safe_int(data.get("regulatory_score")),
        )
