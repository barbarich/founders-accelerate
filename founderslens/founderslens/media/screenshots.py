"""Screenshot capture + download for Meta Ad Library pages.

Why: FB CDN refuses hotlinks for individual creative URLs (see gotcha #6 in
reference_api_access_gotchas). Workaround: take a screenshot of the public Ad
Library search page per competitor → get one image containing all visible ads
+ creative thumbnails + advertiser name. Embed as <img> in the report.

1 Firecrawl credit per screenshot. Top-5 competitors = 5 credits/run.
"""

from __future__ import annotations

import logging
import re
from pathlib import Path
from typing import Optional
from urllib.parse import quote_plus

from founderslens import config
from founderslens.tools import firecrawl
from founderslens.utils import make_session

log = logging.getLogger(__name__)


_AD_LIB_URL = (
    "https://www.facebook.com/ads/library/"
    "?active_status=active&ad_type=all&country={country}&q={q}&search_type=keyword_unordered"
)


def _sanitize(s: str) -> str:
    s = re.sub(r"[^A-Za-z0-9_.-]+", "_", s).strip("_")
    return s[:60] or "competitor"


async def capture_ad_library(
    competitor_name: str,
    *,
    run_id: str,
    agent_name: Optional[str] = None,
    country: str = "US",
) -> tuple[Optional[str], str]:
    """Screenshot the Ad Library search-results page for a competitor name.

    Returns (local_relative_path, ad_library_url).
    local_relative_path is relative to the run directory (None if failed).
    """
    url = _AD_LIB_URL.format(country=country, q=quote_plus(competitor_name))

    try:
        # Firecrawl: return screenshot URL; wait for JS ad cards to render
        res = await firecrawl.scrape(
            url, run_id=run_id, agent_name=agent_name,
            formats=["screenshot@fullPage"], wait_for_ms=5000,
        )
    except Exception as e:
        log.warning("firecrawl screenshot failed for %s: %s", competitor_name, str(e)[:120])
        return None, url

    data = (res.get("data") or res) if isinstance(res, dict) else {}
    shot_url = data.get("screenshot") or data.get("fullPageScreenshot")
    if not shot_url:
        log.warning("firecrawl returned no screenshot URL for %s (keys=%s)", competitor_name, list(data.keys()))
        return None, url

    # Download Firecrawl-hosted screenshot
    run_dir = config.RUNS_DIR / run_id / "screenshots"
    run_dir.mkdir(parents=True, exist_ok=True)
    fname = f"{_sanitize(competitor_name)}.png"
    dest = run_dir / fname

    try:
        async with make_session(timeout_s=30) as session:
            async with session.get(shot_url) as r:
                if r.status != 200:
                    log.warning("screenshot download HTTP %s for %s", r.status, competitor_name)
                    return None, url
                content = await r.read()
                if len(content) < 2048:
                    log.warning("screenshot suspiciously small (%d bytes) for %s", len(content), competitor_name)
                    return None, url
                dest.write_bytes(content)
    except Exception as e:
        log.warning("screenshot download failed for %s: %s", competitor_name, str(e)[:120])
        return None, url

    # Path relative to run root, so HTML at run root references screenshots/<file>
    return f"screenshots/{fname}", url
