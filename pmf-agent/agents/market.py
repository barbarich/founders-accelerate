from typing import Any

from models.dataclasses import SearchPlan, MarketData
from .base import call_agent, call_agent_deep, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a market research analyst helping a founder understand how big their opportunity really is. "
    "Conduct deep market analysis using multiple sources.\n"
    "REQUIRED data to find:\n"
    "1. TAM/SAM/SOM with SPECIFIC dollar amounts and methodology (top-down AND bottom-up)\n"
    "2. CAGR with source attribution (Statista, Grand View Research, IBISWorld, etc.)\n"
    "3. Geographic breakdown with market size per region\n"
    "4. Demographic profile of target customers\n"
    "5. Market maturity stage (emerging/growth/mature/declining) with evidence\n"
    "6. Growth drivers and inhibitors\n"
    "7. Market segments with size and relevance scoring\n"
    "8. Bottom-up SOM calculation: target_users × ARPU × conversion_rate\n\n"
    "Search strategies:\n"
    "- Use 'site:statista.com {market} market size' for authoritative sizing\n"
    "- Use 'site:grandviewresearch.com {market} report' for CAGR and forecasts\n"
    "- Search '{market} TAM SAM SOM 2025 2026' for recent estimates\n"
    "- Search '{geography} {market} market size' for regional data\n\n"
    "For each data point, note the source and confidence level.\n\n"
    "WRITING STYLE for ALL text fields (tam, sam, som, demographics, key_facts, growth_drivers, etc.):\n"
    "Write in plain, conversational language — like explaining to a smart friend over coffee.\n"
    "Short sentences. No jargon unless you explain it in parentheses.\n"
    "Lead with the insight: 'About 2M singles in Israel use dating apps — that is your starting pool' "
    "instead of 'SOM estimated at $50M via bottom-up penetration analysis'.\n"
    "Keep numbers precise — just wrap them in plain language.\n"
    "Return ONLY valid JSON."
)


class MarketAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan, rounds: int = 2) -> MarketData:
        user_prompt = (
            f"Research the market for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n"
            f"Market Context: {plan.market_context}\n\n"
            f"Use these search queries:\n"
            + "\n".join(f"- {q}" for q in plan.market_queries)
            + "\n\nSearch each query, then synthesize into a comprehensive market analysis.\n\n"
            "Return JSON with ALL these keys:\n"
            '{"tam": "$50B global online dating market", "sam": "$5B AI-driven dating segment", '
            '"som": "$50M addressable in Israel", '
            '"tam_value": 50.0, "sam_value": 5.0, "som_value": 0.05, '
            '"cagr": "12.5% (2024-2030, Grand View Research)", '
            '"geography": "Israel primary, diaspora secondary", '
            '"demographics": "25-40 year old singles, tech-savvy, Russian-speaking", '
            '"key_facts": [{"fact": "...", "source": "Statista 2025"}], '
            '"sources": ["https://..."], '
            '"market_maturity": "growth", '
            '"growth_drivers": [{"driver": "AI adoption", "impact": "high", "timeline": "2024-2027"}], '
            '"market_segments": [{"segment": "Premium dating", "size": "$2B", "growth": "15%", "relevance": "high"}], '
            '"bottom_up_som": 0.05, '
            '"som_methodology": "500K target users × 5% conversion × $15/mo × 12mo = $4.5M", '
            '"regulatory_landscape": "...", '
            '"source_credibility": [{"source": "Statista", "tier": 1, "data_point": "TAM sizing"}]}'
        )

        data = await call_agent_deep(
            self.client, self.model, SYSTEM_PROMPT, user_prompt,
            rounds=rounds, tools=[WEB_SEARCH_TOOL]
        )

        def safe_float(val, default=0.0):
            try:
                return float(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        return MarketData(
            tam=str(data.get("tam") or "N/A"),
            sam=str(data.get("sam") or "N/A"),
            som=str(data.get("som") or "N/A"),
            tam_value=safe_float(data.get("tam_value")),
            sam_value=safe_float(data.get("sam_value")),
            som_value=safe_float(data.get("som_value")),
            cagr=str(data.get("cagr") or "N/A"),
            geography=str(data.get("geography") or "N/A"),
            demographics=str(data.get("demographics") or "N/A"),
            key_facts=data.get("key_facts") or [],
            sources=data.get("sources") or [],
            market_maturity=str(data.get("market_maturity") or "growth"),
            growth_drivers=data.get("growth_drivers") or [],
            market_segments=data.get("market_segments") or [],
            bottom_up_som=safe_float(data.get("bottom_up_som")),
            som_methodology=str(data.get("som_methodology") or ""),
            regulatory_landscape=str(data.get("regulatory_landscape") or ""),
            source_credibility=data.get("source_credibility") or [],
        )
