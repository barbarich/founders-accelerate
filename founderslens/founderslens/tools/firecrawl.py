"""Firecrawl adapter — async, cached, logged.

Two primary ops:
- `scrape(url)`  → returns markdown + HTML + metadata of a single page
- `screenshot(url)` → returns screenshot URL (Firecrawl hosts it)

Firecrawl pricing: 1 scrape = 1 credit. Free tier 500 credits/month.
Aggressive caching (24h TTL) makes repeat queries on same URL free.
"""

from __future__ import annotations

import logging
import time
from datetime import datetime, timezone
from typing import Any, Optional

import aiohttp

from founderslens import config
from founderslens.storage import cache
from founderslens.storage.db import get_conn
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)

_SCRAPE_TOOL = "firecrawl.scrape"
_SCREENSHOT_TOOL = "firecrawl.screenshot"

_ENDPOINT = "https://api.firecrawl.dev/v1/scrape"


def _auth_headers() -> dict[str, str]:
    if not config.FIRECRAWL_API_KEY:
        raise RuntimeError("FIRECRAWL_API_KEY not set")
    return {
        "Authorization": f"Bearer {config.FIRECRAWL_API_KEY}",
        "Content-Type": "application/json",
    }


@retry_async(exceptions=(aiohttp.ClientError, RuntimeError))
async def _raw(session: aiohttp.ClientSession, body: dict) -> dict:
    async with session.post(
        _ENDPOINT, headers=_auth_headers(), json=body,
        timeout=aiohttp.ClientTimeout(total=60),
    ) as r:
        text = await r.text()
        if r.status != 200:
            raise RuntimeError(f"firecrawl HTTP {r.status}: {text[:250]}")
        return await r.json() if r.content_type == "application/json" else __import__("json").loads(text)


async def _call(
    *,
    tool_name: str,
    cache_key: dict[str, Any],
    body: dict,
    run_id: str,
    agent_name: Optional[str],
    session: Optional[aiohttp.ClientSession],
) -> dict:
    hashed = cache.hash_input(cache_key)
    started = datetime.now(timezone.utc)
    t0 = time.perf_counter()

    cached = cache.get(tool_name, cache_key)
    if cached is not None:
        with get_conn() as conn:
            conn.execute(
                """INSERT INTO tool_calls (run_id, agent_name, tool_name, input_hash, started_at, completed_at, duration_ms, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, 'cache_hit')""",
                (run_id, agent_name, tool_name, hashed, started.isoformat(), started.isoformat(), 0),
            )
        return cached

    if config.OFFLINE_MODE:
        raise RuntimeError(f"offline mode + no cache for {tool_name} {cache_key.get('url')}")

    owns_session = session is None
    if owns_session:
        from founderslens.utils import make_session
        session = make_session(timeout_s=90)
    try:
        data = await _raw(session, body)
        cache.set(tool_name, cache_key, data)
        duration_ms = int((time.perf_counter() - t0) * 1000)
        with get_conn() as conn:
            conn.execute(
                """INSERT INTO tool_calls (run_id, agent_name, tool_name, input_hash, started_at, completed_at, duration_ms, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, 'completed')""",
                (run_id, agent_name, tool_name, hashed, started.isoformat(),
                 datetime.now(timezone.utc).isoformat(), duration_ms),
            )
        return data
    except Exception as e:
        duration_ms = int((time.perf_counter() - t0) * 1000)
        with get_conn() as conn:
            conn.execute(
                """INSERT INTO tool_calls (run_id, agent_name, tool_name, input_hash, started_at, completed_at, duration_ms, status, error)
                   VALUES (?, ?, ?, ?, ?, ?, ?, 'failed', ?)""",
                (run_id, agent_name, tool_name, hashed, started.isoformat(),
                 datetime.now(timezone.utc).isoformat(), duration_ms, str(e)[:500]),
            )
        raise
    finally:
        if owns_session:
            await session.close()


async def scrape(
    url: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    formats: list[str] | None = None,
    wait_for_ms: int = 0,
    session: Optional[aiohttp.ClientSession] = None,
) -> dict:
    """Scrape one URL. Returns dict with `data.markdown`, `data.html`, `data.metadata`.

    formats: default ['markdown']. Add 'html' for raw DOM, 'screenshot' for inline image URL.
    wait_for_ms: useful for JS-heavy pages (Meta Ad Library needs ~3000ms).
    """
    formats = formats or ["markdown"]
    cache_key = {"url": url, "formats": formats, "wait_for_ms": wait_for_ms}
    body: dict[str, Any] = {"url": url, "formats": formats}
    if wait_for_ms:
        body["waitFor"] = wait_for_ms
    return await _call(
        tool_name=_SCRAPE_TOOL, cache_key=cache_key, body=body,
        run_id=run_id, agent_name=agent_name, session=session,
    )


async def screenshot(
    url: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    full_page: bool = False,
    session: Optional[aiohttp.ClientSession] = None,
) -> dict:
    """Capture a screenshot of the page. Returns dict with `data.screenshot` URL."""
    formats = ["screenshot@fullPage" if full_page else "screenshot"]
    cache_key = {"url": url, "screenshot": True, "full_page": full_page}
    body = {"url": url, "formats": formats}
    return await _call(
        tool_name=_SCREENSHOT_TOOL, cache_key=cache_key, body=body,
        run_id=run_id, agent_name=agent_name, session=session,
    )
