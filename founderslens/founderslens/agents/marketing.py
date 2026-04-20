"""Agent 8 — Marketing & Channels Analyst.

For each top-deep-dive competitor:
1. Scrape their landing page via Firecrawl → extract headline/subheadline/value_props/CTA
2. Scrape Meta Ad Library for their brand → extract creatives + ad copy
3. LLM synthesizes into a MarketingProfile

Runs all top-5 competitors in parallel with a semaphore cap.
Populates state.deep_competitors — each gets a DeepCompetitor stub with marketing filled.
Other deep-dive fields (traffic, business, customer_voice) are left None for future phases.
"""

from __future__ import annotations

import asyncio
import json
import logging

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.media.screenshots import capture_ad_library
from founderslens.state import DeepCompetitor, MarketingProfile, ResearchState
from founderslens.tools import firecrawl, meta_ads
from founderslens.utils import make_session

log = logging.getLogger(__name__)

DEEP_DIVE_MAX = 5          # cap — top-5 instead of top-7 to save Firecrawl credits
PER_COMP_CONCURRENCY = 3


async def _fetch_one(
    run_id: str,
    agent_name: str,
    comp_name: str,
    comp_url: str | None,
    session,
) -> dict:
    """Fetch landing + ad library for one competitor. Returns dict of raw data."""
    landing = None
    ad_lib = None

    # Landing page
    if comp_url:
        try:
            res = await firecrawl.scrape(
                comp_url, run_id=run_id, agent_name=agent_name,
                formats=["markdown"], wait_for_ms=2000, session=session,
            )
            data = (res.get("data") or res) if isinstance(res, dict) else {}
            landing = {
                "markdown": (data.get("markdown") or "")[:6000],
                "metadata": data.get("metadata") or {},
            }
        except Exception as e:
            log.warning("landing scrape failed for %s: %s", comp_name, str(e)[:100])

    # Meta Ad Library (API or Firecrawl fallback)
    try:
        ad_lib = await meta_ads.search(
            comp_name, run_id=run_id, agent_name=agent_name, country="US",
        )
    except Exception as e:
        log.warning("ad library fetch failed for %s: %s", comp_name, str(e)[:100])

    return {"name": comp_name, "url": comp_url, "landing": landing, "ad_library": ad_lib}


class MarketingAgent(Agent[MarketingProfile]):
    """Processes top-deep-dive competitors. Mutates state.deep_competitors in place."""
    name = "marketing"
    phase = "deep_dive"

    async def run(self, state: ResearchState) -> MarketingProfile:
        if not state.competitors or not state.competitors.top_deep_dive:
            raise AgentError("marketing: no top_deep_dive list")

        top_names = state.competitors.top_deep_dive[:DEEP_DIVE_MAX]
        # Resolve names to Competitor objects to get URLs
        all_map = {c.name: c for c in state.competitors.all_competitors}
        comps_to_process = [(n, all_map.get(n).url if all_map.get(n) else None) for n in top_names]

        self.emit("finding", f"Marketing: processing top-{len(comps_to_process)} competitors")

        # Fetch raw data per competitor in parallel
        sem = asyncio.Semaphore(PER_COMP_CONCURRENCY)
        async with make_session(timeout_s=120) as session:
            async def _go(name_url):
                name, url = name_url
                async with sem:
                    return await _fetch_one(self.run_id, self.name, name, url, session)
            raw_per_comp = await asyncio.gather(*(_go(nu) for nu in comps_to_process))

        self.emit("finding", f"Marketing: raw data fetched for {sum(1 for r in raw_per_comp if r.get('landing') or r.get('ad_library'))} competitors")

        # LLM synthesis per competitor (sequential — easier to trace + bounded tokens)
        prompt = self.load_prompt(state.language)
        deep_competitors: list[DeepCompetitor] = []
        last_profile: MarketingProfile | None = None

        for raw in raw_per_comp:
            user = (
                f"Конкурент: **{raw['name']}**\n"
                f"URL: {raw.get('url') or '—'}\n\n"
                f"Landing page (Firecrawl):\n```json\n"
                + json.dumps(raw.get("landing") or {}, ensure_ascii=False)[:12_000]
                + "\n```\n\nAd Library data:\n```json\n"
                + json.dumps(raw.get("ad_library") or {}, ensure_ascii=False)[:15_000]
                + "\n```\n\nСинтезируй MarketingProfile для этого конкурента."
            )
            try:
                profile = await self.llm_extract(
                    schema=MarketingProfile, system=prompt, user=user, max_tokens=3500,
                )
                last_profile = profile
            except Exception as e:
                log.warning("marketing synthesis failed for %s: %s", raw["name"], str(e)[:120])
                profile = MarketingProfile()

            # Screenshot the Ad Library results page so report can show visual creatives
            # (FB CDN hotlinks are blocked — this is the only reliable way to embed creatives).
            try:
                shot_path, lib_url = await capture_ad_library(
                    raw["name"], run_id=self.run_id, agent_name=self.name, country="US",
                )
                profile.ad_library_screenshot_path = shot_path
                profile.ad_library_url = lib_url
            except Exception as e:
                log.warning("ad library screenshot failed for %s: %s", raw["name"], str(e)[:100])

            deep_competitors.append(DeepCompetitor(
                name=raw["name"],
                url=raw.get("url"),
                marketing=profile,
            ))
            self.emit(
                "finding",
                f"Marketing [{raw['name']}]: {profile.total_active_ads} ads, "
                f"{len(profile.top_creatives)} creatives, maturity={profile.marketing_maturity_score or '?'}",
            )

        state.deep_competitors = deep_competitors
        total_ads = sum(dc.marketing.total_active_ads if dc.marketing else 0 for dc in deep_competitors)
        total_creatives = sum(len(dc.marketing.top_creatives) if dc.marketing else 0 for dc in deep_competitors)
        self.emit(
            "finding",
            f"Marketing DONE: {len(deep_competitors)} profiles · {total_ads} total ads · {total_creatives} creatives",
            payload={"deep_competitor_count": len(deep_competitors), "total_ads": total_ads},
        )
        # Return something (base class expects a pydantic output). Use last profile as convention.
        return last_profile or MarketingProfile()
