"""Connectivity test harness — pings every external API with a trivial request.

Run:
    python -m tests.test_connectivity

Exits 0 if all REQUIRED sources pass. Exits 1 otherwise.
OPTIONAL sources that are missing keys print [SKIP] and do not fail the run.

Each check:
- runs async with a 15s hard timeout
- reports latency
- reports first-line reason on failure so you can debug without re-running
- never raises — failures are captured and rendered as [FAIL]

This is the Hour 1-3 deliverable. Run it before any other code.
"""

from __future__ import annotations

import asyncio
import base64
import os
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Awaitable, Callable, Optional

# Load .env sitting next to this file's parent
try:
    from dotenv import load_dotenv
    # override=True so .env wins over empty shell vars
    load_dotenv(Path(__file__).resolve().parent.parent / ".env", override=True)
except ImportError:
    print("[warn] python-dotenv not installed — set env vars manually or `pip install -r requirements.txt`")

try:
    import aiohttp
    import certifi
    import ssl
except ImportError:
    print("[fatal] aiohttp/certifi not installed. Run: pip install -r requirements.txt")
    sys.exit(2)


TIMEOUT_SECONDS = 15
# certifi CA bundle — Python 3.11 on macOS ships without system CA roots
_SSL_CONTEXT = ssl.create_default_context(cafile=certifi.where())


# ---------------------------------------------------------------------------
# Result model + runner
# ---------------------------------------------------------------------------

@dataclass
class Result:
    name: str
    required: bool
    status: str  # "PASS" | "FAIL" | "SKIP"
    latency_ms: Optional[int]
    detail: str


def _skip(name: str, required: bool, reason: str) -> Result:
    return Result(name=name, required=required, status="SKIP", latency_ms=None, detail=reason)


async def _run_check(
    name: str,
    required: bool,
    env_keys: list[str],
    check: Callable[[aiohttp.ClientSession], Awaitable[str]],
    session: aiohttp.ClientSession,
) -> Result:
    missing = [k for k in env_keys if not os.getenv(k)]
    if missing:
        return _skip(name, required, f"missing env: {', '.join(missing)}")
    t0 = time.perf_counter()
    try:
        detail = await asyncio.wait_for(check(session), timeout=TIMEOUT_SECONDS)
        ms = int((time.perf_counter() - t0) * 1000)
        return Result(name=name, required=required, status="PASS", latency_ms=ms, detail=detail)
    except asyncio.TimeoutError:
        ms = int((time.perf_counter() - t0) * 1000)
        return Result(name=name, required=required, status="FAIL", latency_ms=ms, detail=f"timeout after {TIMEOUT_SECONDS}s")
    except Exception as e:  # noqa: BLE001
        ms = int((time.perf_counter() - t0) * 1000)
        first = str(e).splitlines()[0][:180] if str(e) else type(e).__name__
        return Result(name=name, required=required, status="FAIL", latency_ms=ms, detail=first)


# ---------------------------------------------------------------------------
# Individual checks — one per source
# ---------------------------------------------------------------------------

async def check_anthropic(session: aiohttp.ClientSession) -> str:
    headers = {
        "x-api-key": os.environ["ANTHROPIC_API_KEY"],
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
    }
    body = {
        "model": "claude-sonnet-4-5",
        "max_tokens": 8,
        "messages": [{"role": "user", "content": "ping"}],
    }
    async with session.post("https://api.anthropic.com/v1/messages", headers=headers, json=body) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"model={data.get('model', '?')}, stop={data.get('stop_reason', '?')}"


async def check_openai(session: aiohttp.ClientSession) -> str:
    headers = {
        "Authorization": f"Bearer {os.environ['OPENAI_API_KEY']}",
        "Content-Type": "application/json",
    }
    body = {
        "model": "gpt-4o-mini",
        "max_tokens": 8,
        "messages": [{"role": "user", "content": "ping"}],
    }
    async with session.post("https://api.openai.com/v1/chat/completions", headers=headers, json=body) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"model={data.get('model', '?')}"


async def check_tavily(session: aiohttp.ClientSession) -> str:
    body = {"api_key": os.environ["TAVILY_API_KEY"], "query": "AI research tools", "max_results": 3}
    async with session.post("https://api.tavily.com/search", json=body) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"{len(data.get('results', []))} hits"


async def check_exa(session: aiohttp.ClientSession) -> str:
    headers = {"x-api-key": os.environ["EXA_API_KEY"], "Content-Type": "application/json"}
    body = {"query": "baby tracking mobile app", "numResults": 3, "type": "auto"}
    async with session.post("https://api.exa.ai/search", headers=headers, json=body) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"{len(data.get('results', []))} hits"


async def check_firecrawl(session: aiohttp.ClientSession) -> str:
    headers = {"Authorization": f"Bearer {os.environ['FIRECRAWL_API_KEY']}", "Content-Type": "application/json"}
    body = {"url": "https://example.com", "formats": ["markdown"]}
    async with session.post("https://api.firecrawl.dev/v1/scrape", headers=headers, json=body) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        success = data.get("success", False)
        return f"success={success}"


async def check_reddit(session: aiohttp.ClientSession) -> str:
    # OAuth client-credentials flow
    cid = os.environ["REDDIT_CLIENT_ID"]
    sec = os.environ["REDDIT_CLIENT_SECRET"]
    ua = os.getenv("REDDIT_USER_AGENT", "founderslens:v0.1")
    auth = base64.b64encode(f"{cid}:{sec}".encode()).decode()
    headers = {"Authorization": f"Basic {auth}", "User-Agent": ua}
    async with session.post(
        "https://www.reddit.com/api/v1/access_token",
        headers=headers,
        data={"grant_type": "client_credentials"},
    ) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        if "access_token" not in data:
            raise RuntimeError(f"no access_token in response: {data}")
        return f"token_type={data.get('token_type', '?')}, expires_in={data.get('expires_in', '?')}"


async def check_youtube(session: aiohttp.ClientSession) -> str:
    params = {
        "key": os.environ["YOUTUBE_API_KEY"],
        "part": "snippet",
        "q": "baby tracker app",
        "maxResults": 1,
        "type": "video",
    }
    async with session.get("https://www.googleapis.com/youtube/v3/search", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"{len(data.get('items', []))} items"


async def check_hackernews(session: aiohttp.ClientSession) -> str:
    async with session.get("https://hacker-news.firebaseio.com/v0/topstories.json") as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}")
        data = await r.json()
        return f"{len(data)} top stories"


async def check_semantic_scholar(session: aiohttp.ClientSession) -> str:
    params = {"query": "parenting mobile application", "limit": 3, "fields": "title"}
    async with session.get("https://api.semanticscholar.org/graph/v1/paper/search", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"{data.get('total', 0)} total, {len(data.get('data', []))} returned"


async def check_crunchbase(session: aiohttp.ClientSession) -> str:
    headers = {"X-cb-user-key": os.environ["CRUNCHBASE_API_KEY"]}
    params = {"query": "huckleberry", "limit": 1}
    async with session.get("https://api.crunchbase.com/api/v4/autocompletes", headers=headers, params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"{len(data.get('entities', []))} entities"


async def check_sec_edgar(session: aiohttp.ClientSession) -> str:
    # EDGAR requires a descriptive User-Agent
    headers = {"User-Agent": "FoundersLens connectivity-check (barbarych@gmail.com)"}
    async with session.get("https://data.sec.gov/submissions/CIK0000320193.json", headers=headers) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"example entity={data.get('name', '?')}"


async def check_wayback(session: aiohttp.ClientSession) -> str:
    params = {"url": "stripe.com/pricing", "timestamp": "2020"}
    async with session.get("https://archive.org/wayback/available", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        snap = data.get("archived_snapshots", {}).get("closest", {})
        return f"closest_ts={snap.get('timestamp', 'none')}"


async def check_meta_ads(session: aiohttp.ClientSession) -> str:
    params = {
        "access_token": os.environ["META_ACCESS_TOKEN"],
        "search_terms": "baby tracker",
        "ad_reached_countries": "['US']",
        "ad_active_status": "ACTIVE",
        "limit": 1,
        "fields": "id",
    }
    async with session.get("https://graph.facebook.com/v20.0/ads_archive", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        if "error" in data:
            raise RuntimeError(f"api_error: {data['error'].get('message', '?')}")
        return f"{len(data.get('data', []))} ads"


async def check_producthunt(session: aiohttp.ClientSession) -> str:
    headers = {"Authorization": f"Bearer {os.environ['PRODUCTHUNT_TOKEN']}"}
    query = '{ posts(first: 1) { edges { node { name } } } }'
    async with session.post("https://api.producthunt.com/v2/api/graphql", headers=headers, json={"query": query}) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        if "errors" in data:
            raise RuntimeError(f"graphql_error: {data['errors']}")
        return "graphql ok"


async def check_newsapi(session: aiohttp.ClientSession) -> str:
    params = {"q": "startup", "pageSize": 1, "apiKey": os.environ["NEWSAPI_KEY"]}
    async with session.get("https://newsapi.org/v2/everything", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"totalResults={data.get('totalResults', '?')}"


async def check_gnews(session: aiohttp.ClientSession) -> str:
    params = {"q": "startup", "max": 1, "token": os.environ["GNEWS_API_KEY"]}
    async with session.get("https://gnews.io/api/v4/search", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        return f"totalArticles={data.get('totalArticles', '?')}"


async def check_world_bank(session: aiohttp.ClientSession) -> str:
    params = {"format": "json", "per_page": 1}
    async with session.get("https://api.worldbank.org/v2/country/USA/indicator/NY.GDP.MKTP.CD", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        pages = data[0].get("pages") if isinstance(data, list) and data else "?"
        return f"pages={pages}"


async def check_oecd(session: aiohttp.ClientSession) -> str:
    # OECD SDMX-JSON — hit a light metadata endpoint
    async with session.get("https://sdmx.oecd.org/public/rest/dataflow/OECD.SDD.NAD/all", headers={"Accept": "application/vnd.sdmx.structure+json;version=1.0"}) as r:
        if r.status not in (200, 304):
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        return f"HTTP {r.status}"


async def check_eurostat(session: aiohttp.ClientSession) -> str:
    # Eurostat catalogue ping
    async with session.get("https://ec.europa.eu/eurostat/api/dissemination/catalogue/toc/json") as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}")
        return "toc ok"


async def check_us_census(session: aiohttp.ClientSession) -> str:
    # Anonymous is allowed for light use
    async with session.get("https://api.census.gov/data/2021/acs/acs1?get=NAME&for=state:06") as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        return "acs1 ok"


async def check_pytrends(session: aiohttp.ClientSession) -> str:
    # pytrends is sync — run in executor
    def _do() -> str:
        from pytrends.request import TrendReq
        pt = TrendReq(hl="en-US", tz=0, retries=1, timeout=(5, 10))
        pt.build_payload(kw_list=["baby tracker"], timeframe="today 12-m")
        df = pt.interest_over_time()
        return f"rows={len(df)}"
    try:
        return await asyncio.get_event_loop().run_in_executor(None, _do)
    except ImportError:
        raise RuntimeError("pytrends not installed")


async def check_builtwith(session: aiohttp.ClientSession) -> str:
    params = {"KEY": os.environ["BUILTWITH_API_KEY"], "LOOKUP": "stripe.com"}
    async with session.get("https://api.builtwith.com/free1/api.json", params=params) as r:
        if r.status != 200:
            raise RuntimeError(f"HTTP {r.status}: {(await r.text())[:160]}")
        data = await r.json()
        groups = data.get("groups", [])
        return f"{len(groups)} groups"


# ---------------------------------------------------------------------------
# Registry — source of truth for which checks run
# ---------------------------------------------------------------------------

CHECKS: list[tuple[str, bool, list[str], Callable]] = [
    # (name, required, env_keys, check)
    ("Anthropic",         True,  ["ANTHROPIC_API_KEY"],                                  check_anthropic),
    ("OpenAI",            True,  ["OPENAI_API_KEY"],                                     check_openai),
    ("Tavily",            True,  ["TAVILY_API_KEY"],                                     check_tavily),
    ("Exa",               True,  ["EXA_API_KEY"],                                        check_exa),
    ("Firecrawl",         True,  ["FIRECRAWL_API_KEY"],                                  check_firecrawl),
    ("Reddit",            True,  ["REDDIT_CLIENT_ID", "REDDIT_CLIENT_SECRET"],           check_reddit),
    ("Meta Ad Library",   True,  ["META_ACCESS_TOKEN"],                                  check_meta_ads),
    ("YouTube",           False, ["YOUTUBE_API_KEY"],                                    check_youtube),
    ("Hacker News",       True,  [],                                                     check_hackernews),
    ("Semantic Scholar",  False, [],                                                     check_semantic_scholar),
    ("Crunchbase",        False, ["CRUNCHBASE_API_KEY"],                                 check_crunchbase),
    ("SEC EDGAR",         True,  [],                                                     check_sec_edgar),
    ("Wayback Machine",   True,  [],                                                     check_wayback),
    ("ProductHunt",       False, ["PRODUCTHUNT_TOKEN"],                                  check_producthunt),
    ("NewsAPI",           False, ["NEWSAPI_KEY"],                                        check_newsapi),
    ("GNews",             False, ["GNEWS_API_KEY"],                                      check_gnews),
    ("World Bank",        True,  [],                                                     check_world_bank),
    ("OECD",              False, [],                                                     check_oecd),
    ("Eurostat",          False, [],                                                     check_eurostat),
    ("US Census",         False, [],                                                     check_us_census),
    # pytrends library has urllib3 compatibility issue — downgraded to optional, will fix at Phase 1
    ("pytrends",          False, [],                                                     check_pytrends),
    ("BuiltWith",         False, ["BUILTWITH_API_KEY"],                                  check_builtwith),
]


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

COLORS = {
    "PASS": "\033[92m",   # green
    "FAIL": "\033[91m",   # red
    "SKIP": "\033[93m",   # yellow
    "RESET": "\033[0m",
    "DIM": "\033[90m",
}


def _format_row(r: Result) -> str:
    color = COLORS.get(r.status, "")
    reset = COLORS["RESET"]
    req = "REQ" if r.required else "opt"
    lat = f"{r.latency_ms:>5}ms" if r.latency_ms is not None else "     —"
    return f"  {color}[{r.status}]{reset} {req}  {r.name:<22} {COLORS['DIM']}{lat}{reset}  {r.detail}"


async def main() -> int:
    print(f"\n{'FoundersLens connectivity check':-^76}\n")
    timeout = aiohttp.ClientTimeout(total=TIMEOUT_SECONDS + 5)
    connector = aiohttp.TCPConnector(ssl=_SSL_CONTEXT)
    async with aiohttp.ClientSession(timeout=timeout, connector=connector) as session:
        tasks = [
            _run_check(name, required, env_keys, check, session)
            for (name, required, env_keys, check) in CHECKS
        ]
        results = await asyncio.gather(*tasks)

    # Group: FAILs first (attention), then PASSes, then SKIPs
    order = {"FAIL": 0, "PASS": 1, "SKIP": 2}
    results.sort(key=lambda r: (order[r.status], not r.required, r.name))
    for r in results:
        print(_format_row(r))

    passed = [r for r in results if r.status == "PASS"]
    failed = [r for r in results if r.status == "FAIL"]
    skipped = [r for r in results if r.status == "SKIP"]
    required_failed = [r for r in failed if r.required]

    print()
    print(f"  {len(passed)} passed · {len(failed)} failed · {len(skipped)} skipped")
    if required_failed:
        print(f"\n  {COLORS['FAIL']}✖ {len(required_failed)} REQUIRED source(s) failing — fix before proceeding.{COLORS['RESET']}")
        for r in required_failed:
            print(f"    • {r.name}: {r.detail}")
        return 1
    if skipped:
        print(f"\n  {COLORS['SKIP']}ℹ {len(skipped)} optional source(s) skipped — pipeline will mark their sections 'data unavailable'.{COLORS['RESET']}")
    print(f"\n  {COLORS['PASS']}✓ All required sources reachable.{COLORS['RESET']}\n")
    return 0


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
