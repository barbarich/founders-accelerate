"""Tool-output cache keyed on (tool_name, sha256(input_json)).

TTL enforced at read time — expired rows are ignored (not deleted; a cleanup
routine can prune periodically, but a stale row costs nothing if never read).

Offline mode (config.OFFLINE_MODE): `get` returns even expired entries;
`set` becomes a no-op to avoid polluting cache during dress rehearsal.
"""

from __future__ import annotations

import hashlib
import json
from datetime import datetime, timedelta, timezone
from typing import Any, Optional

from founderslens import config
from founderslens.storage.db import get_conn


def _canon_input(inp: Any) -> str:
    """Canonical JSON for stable hashing."""
    return json.dumps(inp, sort_keys=True, ensure_ascii=False, default=str)


def hash_input(inp: Any) -> str:
    return hashlib.sha256(_canon_input(inp).encode("utf-8")).hexdigest()


def _now() -> datetime:
    return datetime.now(timezone.utc)


def _parse_ts(ts: str) -> datetime:
    # Permissive parser for ISO strings written with or without tz
    dt = datetime.fromisoformat(ts.replace("Z", "+00:00"))
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


def get(tool_name: str, inp: Any) -> Optional[Any]:
    """Return cached output if present and not expired. Else None.

    In offline mode, TTL is ignored.
    """
    h = hash_input(inp)
    with get_conn() as conn:
        row = conn.execute(
            "SELECT output_json, created_at FROM cache WHERE tool_name = ? AND input_hash = ?",
            (tool_name, h),
        ).fetchone()
    if row is None:
        return None
    created = _parse_ts(row["created_at"])
    if not config.OFFLINE_MODE:
        age = _now() - created
        if age > timedelta(hours=config.CACHE_TTL_HOURS):
            return None
    return json.loads(row["output_json"])


def set(tool_name: str, inp: Any, output: Any) -> None:  # noqa: A001 (shadowing builtin is fine here)
    """Upsert cache entry. No-op in offline mode."""
    if config.OFFLINE_MODE:
        return
    h = hash_input(inp)
    payload = json.dumps(output, ensure_ascii=False, default=str)
    ts = _now().isoformat()
    with get_conn() as conn:
        conn.execute(
            "INSERT OR REPLACE INTO cache (tool_name, input_hash, output_json, created_at) VALUES (?, ?, ?, ?)",
            (tool_name, h, payload, ts),
        )


def invalidate(tool_name: Optional[str] = None) -> int:
    """Drop cache entries. Returns rows deleted."""
    with get_conn() as conn:
        if tool_name:
            cur = conn.execute("DELETE FROM cache WHERE tool_name = ?", (tool_name,))
        else:
            cur = conn.execute("DELETE FROM cache")
        return cur.rowcount or 0
