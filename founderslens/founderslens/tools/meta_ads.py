"""Meta Ad Library adapter.

Two paths:
- `search_via_api`: official ads_archive endpoint. Requires META_ACCESS_TOKEN and
  Ad Library API product approval (identity verification). Best quality data.
- `search_via_firecrawl`: scrapes the PUBLIC Ad Library web page via Firecrawl.
  Works without approval — the Ad Library web UI is intentionally public.
  Quality is lower (no structured fields) but creatives, ad copy, and advertiser
  names are all extractable.

`search()` is the smart entry — tries API first if token set, falls back to
Firecrawl on any error.

For this sprint (Michael's Ad Library approval pending), Firecrawl path is the
primary route.
"""

from __future__ import annotations

import logging
import re
from typing import Optional
from urllib.parse import quote_plus

import aiohttp

from founderslens import config
from founderslens.tools import firecrawl

log = logging.getLogger(__name__)


# Ad Library web URL — scraped via Firecrawl
_LIB_URL = (
    "https://www.facebook.com/ads/library/"
    "?active_status=active&ad_type=all&country={country}&q={q}&search_type=keyword_unordered"
)


async def search_via_api(
    query: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    countries: Optional[list[str]] = None,
    limit: int = 20,
    session: Optional[aiohttp.ClientSession] = None,
) -> dict:
    """Official Ad Library API. Returns raw JSON. Raises RuntimeError on failure."""
    if not config.META_ACCESS_TOKEN:
        raise RuntimeError("META_ACCESS_TOKEN not set")
    countries = countries or ["US", "GB", "DE", "FR"]
    countries_str = '[' + ",".join(f'"{c}"' for c in countries) + ']'
    params = {
        "access_token": config.META_ACCESS_TOKEN,
        "search_terms": query,
        "ad_reached_countries": countries_str,
        "ad_active_status": "ACTIVE",
        "limit": str(limit),
        "fields": "id,ad_creative_bodies,ad_creative_link_titles,ad_creative_link_descriptions,ad_delivery_start_time,page_name,publisher_platforms",
    }
    from founderslens.utils import make_session
    own = session is None
    if own:
        session = make_session(timeout_s=30)
    try:
        async with session.get("https://graph.facebook.com/v20.0/ads_archive", params=params) as r:
            data = await r.json()
            if r.status != 200 or "error" in data:
                raise RuntimeError(f"meta API error: {data.get('error', {}).get('message', r.status)}")
            return data
    finally:
        if own:
            await session.close()


# Regex patterns to extract from Firecrawl markdown/HTML output of the ads library page.
# These are deliberately loose — the page structure changes often.
_IMG_RE = re.compile(r'https://scontent[^"\s\)]+\.(?:jpg|jpeg|png|webp)', re.I)
_AD_COPY_BLOCK_RE = re.compile(r'"([^"]{30,400})"')


async def search_via_firecrawl(
    query: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    country: str = "US",
) -> dict:
    """Scrape the public Ad Library page via Firecrawl. Always works — no approval needed.

    Returns a dict shaped similarly to the official API:
        {"data": [{"page_name": ..., "ad_copy": ..., "creative_url": ..., ...}, ...],
         "source": "firecrawl", "country": "US"}
    """
    url = _LIB_URL.format(country=country, q=quote_plus(query))
    # Ad Library is JS-rendered — wait 5s for ads to render
    res = await firecrawl.scrape(
        url, run_id=run_id, agent_name=agent_name,
        formats=["markdown", "html"], wait_for_ms=5000,
    )
    data = (res.get("data") or res) if isinstance(res, dict) else {}
    md = data.get("markdown", "") or ""
    html_raw = data.get("html", "") or ""

    # Extract images from HTML
    image_urls = list(dict.fromkeys(_IMG_RE.findall(html_raw)))[:15]

    # Extract ad copy candidates from markdown (quoted strings >30 chars)
    ad_copies = list(dict.fromkeys(m.group(1) for m in _AD_COPY_BLOCK_RE.finditer(md)))[:30]

    # Rough pairing — each ad card typically has 1 image + 1 copy, but order may not match.
    # For v1 we return unpaired arrays; Marketing agent's LLM step pairs them.
    return {
        "source": "firecrawl",
        "country": country,
        "query": query,
        "url_scraped": url,
        "raw_markdown_preview": md[:8000],
        "image_urls": image_urls,
        "ad_copy_candidates": ad_copies,
    }


async def search(
    query: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    country: str = "US",
    **kwargs,
) -> dict:
    """Smart entry. Try API first if token configured, fall back to Firecrawl on any error."""
    if config.META_ACCESS_TOKEN:
        try:
            data = await search_via_api(
                query, run_id=run_id, agent_name=agent_name,
                countries=[country], limit=kwargs.get("limit", 20),
            )
            data["source"] = "api"
            return data
        except Exception as e:
            log.warning("meta API failed (%s) — falling back to Firecrawl", str(e)[:120])
    return await search_via_firecrawl(query, run_id=run_id, agent_name=agent_name, country=country)
