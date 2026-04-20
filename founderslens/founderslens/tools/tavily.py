"""Tavily search adapter. Async, cached, logged.

Each call writes a `tool_calls` row and caches results keyed on (tool, query).
"""

from __future__ import annotations

import logging
import time
from datetime import datetime, timezone
from typing import Optional

import aiohttp

from founderslens import config
from founderslens.storage import cache
from founderslens.storage.db import get_conn
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)

_TOOL = "tavily.search"
_ENDPOINT = "https://api.tavily.com/search"


@retry_async(exceptions=(aiohttp.ClientError, RuntimeError))
async def _raw_search(
    session: aiohttp.ClientSession,
    query: str,
    max_results: int,
    search_depth: str,
    include_domains: Optional[list[str]],
    exclude_domains: Optional[list[str]],
) -> dict:
    body = {
        "api_key": config.TAVILY_API_KEY,
        "query": query,
        "max_results": max_results,
        "search_depth": search_depth,
    }
    if include_domains:
        body["include_domains"] = include_domains
    if exclude_domains:
        body["exclude_domains"] = exclude_domains

    async with session.post(_ENDPOINT, json=body, timeout=aiohttp.ClientTimeout(total=30)) as r:
        text = await r.text()
        if r.status != 200:
            raise RuntimeError(f"tavily HTTP {r.status}: {text[:200]}")
        return await r.json() if r.content_type == "application/json" else __import__("json").loads(text)


async def search(
    query: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    max_results: int = 10,
    search_depth: str = "basic",   # "basic" or "advanced"
    include_domains: Optional[list[str]] = None,
    exclude_domains: Optional[list[str]] = None,
    session: Optional[aiohttp.ClientSession] = None,
) -> dict:
    """Return Tavily search response. Uses cache if fresh.

    Response shape: {query, answer, results: [{title, url, content, score}, ...]}
    """
    if not config.TAVILY_API_KEY:
        raise RuntimeError("TAVILY_API_KEY not set")

    cache_key = {
        "query": query,
        "max_results": max_results,
        "search_depth": search_depth,
        "include_domains": include_domains,
        "exclude_domains": exclude_domains,
    }
    hashed = cache.hash_input(cache_key)
    started = datetime.now(timezone.utc)
    t0 = time.perf_counter()

    cached = cache.get(_TOOL, cache_key)
    if cached is not None:
        with get_conn() as conn:
            conn.execute(
                """INSERT INTO tool_calls (run_id, agent_name, tool_name, input_hash, started_at, completed_at, duration_ms, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, 'cache_hit')""",
                (run_id, agent_name, _TOOL, hashed, started.isoformat(), started.isoformat(), 0),
            )
        log.debug("tavily cache hit: %s", query)
        return cached

    if config.OFFLINE_MODE:
        raise RuntimeError(f"offline mode + no cache for query: {query!r}")

    owns_session = session is None
    if owns_session:
        from founderslens.utils import make_session
        session = make_session(timeout_s=60)
    try:
        data = await _raw_search(
            session, query, max_results, search_depth, include_domains, exclude_domains,
        )
        cache.set(_TOOL, cache_key, data)
        duration_ms = int((time.perf_counter() - t0) * 1000)
        with get_conn() as conn:
            conn.execute(
                """INSERT INTO tool_calls (run_id, agent_name, tool_name, input_hash, started_at, completed_at, duration_ms, status)
                   VALUES (?, ?, ?, ?, ?, ?, ?, 'completed')""",
                (run_id, agent_name, _TOOL, hashed, started.isoformat(),
                 datetime.now(timezone.utc).isoformat(), duration_ms),
            )
        return data
    except Exception as e:
        duration_ms = int((time.perf_counter() - t0) * 1000)
        with get_conn() as conn:
            conn.execute(
                """INSERT INTO tool_calls (run_id, agent_name, tool_name, input_hash, started_at, completed_at, duration_ms, status, error)
                   VALUES (?, ?, ?, ?, ?, ?, ?, 'failed', ?)""",
                (run_id, agent_name, _TOOL, hashed, started.isoformat(),
                 datetime.now(timezone.utc).isoformat(), duration_ms, str(e)[:500]),
            )
        raise
    finally:
        if owns_session:
            await session.close()
