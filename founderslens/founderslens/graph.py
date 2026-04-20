"""LangGraph assembly — Phase 0 → Phase 1 macro → Phase 2 competitors → Compile.

Flow:
    intake → classify → macro → competitors → compile

`macro` internally runs Market Sizer + Trends + Graveyard via asyncio.gather
(3-way parallel). `competitors` could in theory run in parallel with `macro` at
the LangGraph level, but that causes last-write-wins races on shared state fields
(errors list, cost snapshot, phase_timings_ms). Sequential is safer; Tavily rate
limits also favor not firing all 40+ queries simultaneously.
"""

from __future__ import annotations

import asyncio
import logging
from typing import Any

from langgraph.graph import END, StateGraph

from founderslens import config
from founderslens.agents.classifier import ClassifierAgent
from founderslens.agents.compiler import CompilerAgent
from founderslens.agents.competitor_finder import CompetitorFinderAgent
from founderslens.agents.graveyard import GraveyardAgent
from founderslens.agents.intake import IntakeAgent
from founderslens.agents.market_sizer import MarketSizerAgent
from founderslens.agents.marketing import MarketingAgent
from founderslens.agents.self_critic import SelfCriticAgent
from founderslens.agents.strategist import StrategistAgent
from founderslens.agents.trends import TrendsAgent
from founderslens.llm.base import LLMProvider
from founderslens.state import ResearchState
from founderslens.utils.cost_tracker import CostTracker

log = logging.getLogger(__name__)


def build_graph(cost: CostTracker, provider: LLMProvider, raw_input: dict[str, Any]):
    """Build and compile the FoundersLens graph.

    `cost` is shared across all agents.
    `provider` is the user's selected LLM provider (Claude/OpenAI/Gemini).
    `raw_input` is only needed by IntakeAgent (the graph entry).
    """

    async def _intake(state: ResearchState) -> dict:
        await IntakeAgent(cost, provider, raw_input).execute(state)
        return state.model_dump()

    async def _classify(state: ResearchState) -> dict:
        await ClassifierAgent(cost, provider).execute(state)
        return state.model_dump()

    async def _macro(state: ResearchState) -> dict:
        """Phase 1 fan-out: Market Sizer + Trends + Graveyard run concurrently."""
        await asyncio.gather(
            MarketSizerAgent(cost, provider).execute(state),
            TrendsAgent(cost, provider).execute(state),
            GraveyardAgent(cost, provider).execute(state),
        )
        return state.model_dump()

    async def _competitors(state: ResearchState) -> dict:
        await CompetitorFinderAgent(cost, provider).execute(state)
        return state.model_dump()

    async def _marketing(state: ResearchState) -> dict:
        await MarketingAgent(cost, provider).execute(state)
        return state.model_dump()

    async def _strategist(state: ResearchState) -> dict:
        await StrategistAgent(cost, provider).execute(state)
        return state.model_dump()

    async def _self_critic(state: ResearchState) -> dict:
        await SelfCriticAgent(cost, provider).execute(state)
        return state.model_dump()

    async def _compile(state: ResearchState) -> dict:
        await CompilerAgent(cost, provider).execute(state)
        return state.model_dump()

    g = StateGraph(ResearchState)
    g.add_node("intake", _intake)
    g.add_node("classify", _classify)
    g.add_node("macro", _macro)
    g.add_node("competitors", _competitors)
    g.add_node("marketing", _marketing)
    g.add_node("strategist", _strategist)
    g.add_node("self_critic", _self_critic)
    g.add_node("compile", _compile)

    g.set_entry_point("intake")
    g.add_edge("intake", "classify")
    g.add_edge("classify", "macro")
    g.add_edge("macro", "competitors")
    g.add_edge("competitors", "marketing")
    g.add_edge("marketing", "strategist")
    g.add_edge("strategist", "self_critic")
    g.add_edge("self_critic", "compile")
    g.add_edge("compile", END)

    return g.compile()
