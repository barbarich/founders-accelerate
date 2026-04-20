"""Download competitor ad creatives to local disk.

Facebook CDN URLs (`scontent-*.fbcdn.net`) have hotlink protection — they refuse
to serve images to the `file://` or unknown origins the report is viewed from.
Fix: download each creative to `data/runs/<run_id>/creatives/` and rewrite
`AdCreative.local_path` to a path the report can reference directly.
"""

from __future__ import annotations

import asyncio
import logging
import re
from pathlib import Path
from typing import Optional

from founderslens import config
from founderslens.state import ResearchState
from founderslens.utils import make_session

log = logging.getLogger(__name__)


def _sanitize(s: str) -> str:
    s = re.sub(r"[^A-Za-z0-9_.-]+", "_", s).strip("_")
    return s[:60] or "creative"


def _ext_from_url(url: str) -> str:
    m = re.search(r"\.(jpe?g|png|webp|gif)(?:\?|$)", url, re.I)
    return m.group(1).lower() if m else "jpg"


async def _download_one(session, url: str, dest: Path) -> bool:
    try:
        headers = {
            # Facebook CDN checks Referer and User-Agent. These look reasonable.
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15",
            "Referer": "https://www.facebook.com/ads/library/",
            "Accept": "image/webp,image/avif,image/jpeg,image/png,*/*",
        }
        async with session.get(url, headers=headers, allow_redirects=True) as r:
            if r.status != 200:
                log.warning("creative download HTTP %s for %s", r.status, url[:80])
                return False
            content = await r.read()
            if len(content) < 1024:
                log.warning("creative too small (%d bytes) — likely error page: %s", len(content), url[:80])
                return False
            dest.write_bytes(content)
            return True
    except Exception as e:
        log.warning("creative download failed: %s — %s", url[:80], str(e)[:100])
        return False


async def download_all(state: ResearchState, run_id: str) -> int:
    """Iterate over state.deep_competitors and download each top_creative image.
    Mutates AdCreative.local_path on success. Returns count successfully downloaded."""
    if not state.deep_competitors:
        return 0

    run_dir = config.RUNS_DIR / run_id / "creatives"
    run_dir.mkdir(parents=True, exist_ok=True)

    tasks = []
    async with make_session(timeout_s=30) as session:
        async def _go(dc_name: str, cr_idx: int, cr):
            if not cr.media_url or cr.local_path:
                return False
            fname = f"{_sanitize(dc_name)}_{cr_idx}.{_ext_from_url(cr.media_url)}"
            dest = run_dir / fname
            ok = await _download_one(session, cr.media_url, dest)
            if ok:
                # store relative to run_dir's parent (the run folder),
                # so HTML at run folder root can reference `creatives/<file>`
                cr.local_path = f"creatives/{fname}"
            return ok

        for dc in state.deep_competitors:
            if not dc.marketing:
                continue
            for idx, cr in enumerate(dc.marketing.top_creatives or []):
                tasks.append(_go(dc.name, idx, cr))

        results = await asyncio.gather(*tasks, return_exceptions=False)

    success = sum(1 for r in results if r)
    log.info("creatives downloaded: %d / %d", success, len(results))
    return success
