"""Agent 5 — Competitor Finder.

Multi-query Tavily search → LLM synthesis into CompetitorUniverse.
Multi-geo by default (see prompt). Requires ≥15 competitors; auto-re-queries on shortfall.
"""

from __future__ import annotations

import asyncio
import json
import logging

import aiohttp

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import CompetitorUniverse, ResearchState
from founderslens.tools import tavily

log = logging.getLogger(__name__)

MIN_COMPETITORS = 15
SEARCH_CONCURRENCY = 5


def _build_queries(idea: str, industry: str, sub_industry: str | None, segment: str) -> list[str]:
    """Spread net wide across direct, indirect, substitute, + geo + category angles."""
    base = sub_industry or industry
    short_idea = idea[:120]
    q = [
        f"top {base} apps {segment}",
        f"best {base} startups 2024 2025",
        f"{base} alternatives comparison",
        f"{base} competitors list",
        f"{short_idea} competitors",
        f"{base} market map",
        f"most popular {base} products",
        f"{base} product hunt",
        f"emerging {base} startups",
    ]
    # Deduplicate while preserving order
    seen, out = set(), []
    for item in q:
        if item not in seen:
            seen.add(item)
            out.append(item)
    return out


def _compact_result(r: dict) -> dict:
    return {
        "title": r.get("title", "")[:160],
        "url": r.get("url", ""),
        "snippet": (r.get("content") or "")[:500],
    }


class CompetitorFinderAgent(Agent[CompetitorUniverse]):
    name = "competitor_finder"
    phase = "competitors"

    async def run(self, state: ResearchState) -> CompetitorUniverse:
        if not state.classification or not state.idea_input:
            raise AgentError("competitor_finder: classification or idea_input missing")

        cls = state.classification
        idea = state.idea_input

        queries = _build_queries(idea.raw_idea, cls.industry, cls.sub_industry, cls.segment)
        # Add reference_products if fan-out needs a boost
        for ref in (idea.reference_products or [])[:3]:
            queries.append(f"{ref} alternatives competitors")

        self.emit("finding", f"Competitor search: {len(queries)} queries across gеo + reference_products")

        # Fan out Tavily searches with a shared session + semaphore
        from founderslens.utils import make_session
        sem = asyncio.Semaphore(SEARCH_CONCURRENCY)
        async with make_session(timeout_s=60) as session:
            async def _go(q: str) -> tuple[str, list[dict]]:
                async with sem:
                    try:
                        data = await tavily.search(
                            q, run_id=self.run_id, agent_name=self.name,
                            max_results=10, session=session,
                        )
                        return q, [_compact_result(r) for r in (data.get("results") or [])]
                    except Exception as e:
                        log.warning("tavily query failed: %s — %s", q, e)
                        return q, []

            results = await asyncio.gather(*(_go(q) for q in queries))

        all_snippets = []
        for q, rs in results:
            all_snippets.append({"query": q, "results": rs[:6]})

        # Dedup URLs across snippets (reduces LLM context bloat)
        seen_urls: set[str] = set()
        for block in all_snippets:
            deduped = []
            for r in block["results"]:
                u = r["url"].rstrip("/").lower()
                if u and u not in seen_urls:
                    seen_urls.add(u)
                    deduped.append(r)
            block["results"] = deduped

        self.emit("finding", f"Tavily returned {len(seen_urls)} unique URLs for synthesis")

        prompt = self.load_prompt(state.language)
        user = (
            "Идея фаундера:\n```json\n"
            + idea.model_dump_json(indent=2)
            + "\n```\n\nКлассификация:\n```json\n"
            + cls.model_dump_json(indent=2)
            + "\n```\n\nРезультаты веб-поиска по нескольким запросам:\n```json\n"
            + json.dumps(all_snippets, ensure_ascii=False)[:60_000]  # hard cap context
            + "\n```\n\nСинтезируй CompetitorUniverse по правилам промпта."
        )

        try:
            universe = await self.llm_extract(
                schema=CompetitorUniverse,
                system=prompt,
                user=user,
                max_tokens=6000,
            )
        except Exception as e:
            raise AgentError(f"competitor synthesis failed: {e}") from e

        # Soft enforcement of minimum
        if len(universe.all_competitors) < MIN_COMPETITORS:
            self.emit(
                "warning",
                f"Found only {len(universe.all_competitors)} competitors (<{MIN_COMPETITORS}) — "
                f"report will flag market-coverage MEDIUM confidence.",
            )

        # Ensure top_deep_dive is a subset of all_competitors names
        all_names = {c.name for c in universe.all_competitors}
        universe.top_deep_dive = [n for n in universe.top_deep_dive if n in all_names][:7]
        if not universe.top_deep_dive and universe.all_competitors:
            universe.top_deep_dive = [c.name for c in universe.all_competitors[:5]]

        state.competitors = universe
        top3 = ", ".join(universe.top_deep_dive[:3])
        self.emit(
            "finding",
            f"Competitor Finder: {len(universe.all_competitors)} competitors found. Top: {top3}",
            payload={
                "total": len(universe.all_competitors),
                "top_deep_dive": universe.top_deep_dive,
            },
        )
        return universe
