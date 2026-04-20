"""Agent 4 — Graveyard & Regulatory Watcher.

Finds failed startups in the category + builds PESTEL analysis + adjacent market
evolution commentary. Helps founder learn from others' mistakes before making them.
"""

from __future__ import annotations

import asyncio
import json
import logging

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import Graveyard, ResearchState
from founderslens.tools import tavily
from founderslens.utils import make_session

log = logging.getLogger(__name__)

SEARCH_CONCURRENCY = 5


def _build_queries(industry: str, sub_industry: str | None, idea: str) -> list[str]:
    base = sub_industry or industry
    return [
        f"{base} startup shut down",
        f"{base} company closed acquired",
        f"why {base} startups fail",
        f"{base} failory",
        f"{base} regulation GDPR HIPAA",
        f"{base} legal compliance 2024",
        f"{base} market consolidation acquisitions",
        f"adjacent market {base} similar evolution",
    ]


def _compact(r: dict) -> dict:
    return {
        "title": r.get("title", "")[:160],
        "url": r.get("url", ""),
        "snippet": (r.get("content") or "")[:500],
    }


class GraveyardAgent(Agent[Graveyard]):
    name = "graveyard"
    phase = "macro"

    async def run(self, state: ResearchState) -> Graveyard:
        if not state.classification or not state.idea_input:
            raise AgentError("graveyard: classification or idea_input missing")

        cls = state.classification
        idea = state.idea_input
        queries = _build_queries(cls.industry, cls.sub_industry, idea.raw_idea)

        self.emit("finding", f"Graveyard: {len(queries)} post-mortem queries")

        sem = asyncio.Semaphore(SEARCH_CONCURRENCY)
        async with make_session(timeout_s=60) as session:
            async def _go(q: str):
                async with sem:
                    try:
                        data = await tavily.search(
                            q, run_id=self.run_id, agent_name=self.name,
                            max_results=6, session=session,
                        )
                        return q, [_compact(r) for r in (data.get("results") or [])]
                    except Exception as e:
                        log.warning("graveyard query failed: %s — %s", q, e)
                        return q, []
            results = await asyncio.gather(*(_go(q) for q in queries))

        seen, blocks = set(), []
        for q, rs in results:
            deduped = []
            for r in rs:
                u = r["url"].rstrip("/").lower()
                if u and u not in seen:
                    seen.add(u)
                    deduped.append(r)
            blocks.append({"query": q, "results": deduped[:5]})

        prompt = self.load_prompt(state.language)
        user = (
            "Идея:\n```json\n" + idea.model_dump_json(indent=2)
            + "\n```\n\nКлассификация:\n```json\n" + cls.model_dump_json(indent=2)
            + "\n```\n\nРезультаты поиска по закрытиям, регуляторике и смежным рынкам:\n```json\n"
            + json.dumps(blocks, ensure_ascii=False)[:55_000]
            + "\n```\n\nСинтезируй Graveyard."
        )

        try:
            gy = await self.llm_extract(
                schema=Graveyard, system=prompt, user=user, max_tokens=4096,
            )
        except Exception as e:
            raise AgentError(f"graveyard synthesis failed: {e}") from e

        state.graveyard = gy
        pestel_filled = sum(1 for v in gy.pestel.values() if v)
        self.emit(
            "finding",
            f"Graveyard: {len(gy.failed_startups)} failed startups · {pestel_filled}/6 PESTEL categories",
            payload={"failed_count": len(gy.failed_startups), "pestel_filled": pestel_filled},
        )
        return gy
