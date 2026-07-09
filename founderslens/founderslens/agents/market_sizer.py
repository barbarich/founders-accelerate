"""Agent 2 — Market Sizer.

Fans out Tavily queries for industry reports + market size data, then synthesizes
TAM/SAM/SOM + CAGR + Why Now via Sonnet.
"""

from __future__ import annotations

import asyncio
import json
import logging

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import MarketSize, ResearchState
from founderslens.tools import tavily
from founderslens.utils import make_session

log = logging.getLogger(__name__)

SEARCH_CONCURRENCY = 5


def _build_queries(industry: str, sub_industry: str | None, segment: str, idea: str) -> list[str]:
    base = sub_industry or industry
    return [
        f"{base} market size 2024 2025 billion",
        f"{base} TAM SAM global",
        f"{base} industry growth CAGR forecast",
        f"{base} market report statista",
        f"{segment.lower()} {base} market trends",
        f"{idea[:100]} market opportunity",
        f"{base} why now technology shift",
        f"{base} regulatory changes 2024 2025",
    ]


def _compact(r: dict) -> dict:
    return {
        "title": r.get("title", "")[:160],
        "url": r.get("url", ""),
        "snippet": (r.get("content") or "")[:500],
    }


class MarketSizerAgent(Agent[MarketSize]):
    name = "market_sizer"
    phase = "macro"

    async def run(self, state: ResearchState) -> MarketSize:
        if not state.classification or not state.idea_input:
            raise AgentError("market_sizer: classification or idea_input missing")

        cls = state.classification
        idea = state.idea_input
        prompt = self.load_prompt(state.language)

        # Provider-native grounding first (OpenAI/Anthropic) — real market data on
        # the user's OWN key, no shared search quota. Falls through to the Tavily
        # path below on any miss (incl. Gemini), so nothing breaks.
        grounded = await self.try_grounded(
            schema=MarketSize, system=prompt,
            user=(
                "Идея:\n```json\n" + idea.model_dump_json(indent=2)
                + "\n```\n\nКлассификация:\n```json\n" + cls.model_dump_json(indent=2)
                + "\n```\n\nНайди в вебе реальные данные о размере рынка (TAM/SAM/SOM), "
                "росте (CAGR), трендах и why-now; синтезируй MarketSize с реальными "
                "источниками в полях sources."
            ),
        )
        if grounded is not None:
            ms, sources = grounded
            state.market_size = ms
            self.emit(
                "finding", f"Market Sizer (grounded): {len(sources)} источников",
                payload={"tam_usd": ms.tam_usd, "grounded": True},
            )
            return ms

        queries = _build_queries(cls.industry, cls.sub_industry, cls.segment, idea.raw_idea)

        self.emit("finding", f"Market Sizer: {len(queries)} research queries")

        sem = asyncio.Semaphore(SEARCH_CONCURRENCY)
        async with make_session(timeout_s=60) as session:
            async def _go(q: str):
                async with sem:
                    try:
                        data = await tavily.search(
                            q, run_id=self.run_id, agent_name=self.name,
                            max_results=8, session=session,
                        )
                        return q, [_compact(r) for r in (data.get("results") or [])], data.get("answer")
                    except Exception as e:
                        log.warning("market_sizer query failed: %s — %s", q, e)
                        return q, [], None
            results = await asyncio.gather(*(_go(q) for q in queries))

        # Dedup URLs across queries
        seen, blocks = set(), []
        for q, rs, ans in results:
            deduped = []
            for r in rs:
                u = r["url"].rstrip("/").lower()
                if u and u not in seen:
                    seen.add(u)
                    deduped.append(r)
            blocks.append({"query": q, "answer": ans, "results": deduped[:6]})

        user = (
            "Идея:\n```json\n" + idea.model_dump_json(indent=2)
            + "\n```\n\nКлассификация:\n```json\n" + cls.model_dump_json(indent=2)
            + "\n```\n\nРезультаты поиска:\n```json\n"
            + json.dumps(blocks, ensure_ascii=False)[:55_000]
            + "\n```\n\nСинтезируй MarketSize."
        )

        try:
            ms = await self.llm_extract(
                schema=MarketSize, system=prompt, user=user, max_tokens=4096,
            )
        except Exception as e:
            raise AgentError(f"market size synthesis failed: {e}") from e

        state.market_size = ms
        tam_str = f"${ms.tam_usd/1e9:.1f}B" if ms.tam_usd else "n/a"
        sam_str = f"${ms.sam_usd/1e9:.1f}B" if ms.sam_usd else "n/a"
        cagr_str = f"{ms.cagr_pct:.0f}%" if ms.cagr_pct else "n/a"
        self.emit(
            "finding",
            f"Market Sizer: TAM={tam_str}, SAM={sam_str}, CAGR={cagr_str}, {len(ms.why_now)} why-now signals",
            payload={"tam_usd": ms.tam_usd, "sam_usd": ms.sam_usd, "cagr_pct": ms.cagr_pct},
        )
        return ms
