"""Agent 3 — Trends Analyst.

Combines: Tavily trend queries + site:reddit.com for Reddit signals + HN top stories
+ LLM synthesis. Emits Trends with google_trends TrendPoints (direction arrows) +
cultural signals + academic signals.

pytrends is currently broken (urllib3 incompat) — we use Tavily+reddit+LLM inference instead.
If pytrends gets fixed later, direction can be grounded in actual series data.
"""

from __future__ import annotations

import asyncio
import json
import logging

import aiohttp

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import ResearchState, Trends
from founderslens.tools import tavily
from founderslens.utils import make_session

log = logging.getLogger(__name__)

SEARCH_CONCURRENCY = 5


def _build_queries(industry: str, sub_industry: str | None, idea: str) -> list[str]:
    base = sub_industry or industry
    return [
        f"{base} trends 2025",
        f"{base} market direction growth decline",
        f"{base} emerging subcategories",
        f"site:reddit.com {base} discussion",
        f"site:reddit.com {idea[:60]}",
        f"{base} tiktok trend viral",
        f"{base} substack newsletter community",
    ]


async def _fetch_hn_top(session: aiohttp.ClientSession, limit: int = 30) -> list[dict]:
    """Fetch top HN story IDs then full stories. Free, unlimited."""
    try:
        async with session.get("https://hacker-news.firebaseio.com/v0/topstories.json") as r:
            if r.status != 200:
                return []
            ids = await r.json()
        ids = ids[:limit]
        async def _one(sid: int):
            try:
                async with session.get(f"https://hacker-news.firebaseio.com/v0/item/{sid}.json") as r:
                    if r.status == 200:
                        return await r.json()
            except Exception:
                return None
            return None
        items = await asyncio.gather(*(_one(sid) for sid in ids))
        return [i for i in items if i and i.get("title")]
    except Exception as e:
        log.warning("HN fetch failed: %s", e)
        return []


def _compact(r: dict) -> dict:
    return {
        "title": r.get("title", "")[:160],
        "url": r.get("url", ""),
        "snippet": (r.get("content") or "")[:400],
    }


class TrendsAgent(Agent[Trends]):
    name = "trends"
    phase = "macro"

    async def run(self, state: ResearchState) -> Trends:
        if not state.classification or not state.idea_input:
            raise AgentError("trends: classification or idea_input missing")

        cls = state.classification
        idea = state.idea_input
        prompt = self.load_prompt(state.language)

        # Provider-native grounding first (OpenAI/Anthropic) — real trend data on the
        # user's OWN key. Falls through to the Tavily+HN path below on any miss.
        grounded = await self.try_grounded(
            schema=Trends, system=prompt,
            user=(
                "Идея:\n```json\n" + idea.model_dump_json(indent=2)
                + "\n```\n\nКлассификация:\n```json\n" + cls.model_dump_json(indent=2)
                + "\n```\n\nНайди в вебе актуальные тренды рынка (направление роста/спада, "
                "субкатегории, культурные сигналы), затем синтезируй Trends с реальными "
                "источниками в полях sources."
            ),
        )
        if grounded is not None:
            tr, _sources = grounded
            state.trends = tr
            arrows = "".join({"up": "↑", "flat": "→", "down": "↓"}.get(t.direction, "?") for t in tr.google_trends[:5])
            self.emit(
                "finding",
                f"Trends (grounded): {len(tr.google_trends)} точек [{arrows}], {len(tr.cultural_signals)} сигналов",
                payload={"trend_directions": [t.direction for t in tr.google_trends]},
            )
            return tr

        queries = _build_queries(cls.industry, cls.sub_industry, idea.raw_idea)

        self.emit("finding", f"Trends: {len(queries)} queries + HN top-30")

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
                        log.warning("trends query failed: %s — %s", q, e)
                        return q, []

            search_task = asyncio.gather(*(_go(q) for q in queries))
            hn_task = _fetch_hn_top(session, limit=30)
            search_results, hn_items = await asyncio.gather(search_task, hn_task)

        # Filter HN to those matching our topic
        topic_tokens = set((cls.sub_industry or cls.industry).lower().split())
        topic_tokens |= set(idea.raw_idea.lower().split()[:10])
        hn_matches = []
        for i in hn_items:
            title = (i.get("title") or "").lower()
            if any(tok in title for tok in topic_tokens if len(tok) > 3):
                hn_matches.append({
                    "title": i.get("title", "")[:200],
                    "url": i.get("url", "") or f"https://news.ycombinator.com/item?id={i.get('id')}",
                    "score": i.get("score", 0),
                    "descendants": i.get("descendants", 0),
                })

        # Dedup search URLs
        seen, blocks = set(), []
        for q, rs in search_results:
            deduped = []
            for r in rs:
                u = r["url"].rstrip("/").lower()
                if u and u not in seen:
                    seen.add(u)
                    deduped.append(r)
            blocks.append({"query": q, "results": deduped[:5]})

        self.emit("finding", f"Trends: {len(seen)} unique URLs + {len(hn_matches)} HN matches")

        user = (
            "Идея:\n```json\n" + idea.model_dump_json(indent=2)
            + "\n```\n\nКлассификация:\n```json\n" + cls.model_dump_json(indent=2)
            + "\n```\n\nВеб-поиск (включая site:reddit.com):\n```json\n"
            + json.dumps(blocks, ensure_ascii=False)[:45_000]
            + "\n```\n\nТоп HN истории совпадающие по теме:\n```json\n"
            + json.dumps(hn_matches, ensure_ascii=False)[:5_000]
            + "\n```\n\nСинтезируй Trends."
        )

        try:
            tr = await self.llm_extract(
                schema=Trends, system=prompt, user=user, max_tokens=4096,
            )
        except Exception as e:
            raise AgentError(f"trends synthesis failed: {e}") from e

        state.trends = tr
        arrows = "".join({"up": "↑", "flat": "→", "down": "↓"}.get(t.direction, "?") for t in tr.google_trends[:5])
        self.emit(
            "finding",
            f"Trends: {len(tr.google_trends)} trend points [{arrows}], {len(tr.cultural_signals)} cultural signals",
            payload={"trend_directions": [t.direction for t in tr.google_trends]},
        )
        return tr
