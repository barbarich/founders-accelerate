"""Per-run cost tracker. One instance per research run.

Pass-around (not singleton) so multiple concurrent runs are independent.
Stream events into the `events` table for live UI feed.
"""

from __future__ import annotations

import asyncio
import json
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Optional

from founderslens import config
from founderslens.state import CostSnapshot
from founderslens.storage.db import get_conn


def _price_per_1m(model: str) -> tuple[float, float]:
    # Exact match first
    if model in config.MODEL_PRICING:
        return config.MODEL_PRICING[model]
    # Prefix match — Anthropic returns e.g. "claude-sonnet-4-5-20250929",
    # our keys are "claude-sonnet-4-5". Find the longest prefix that matches.
    candidates = [k for k in config.MODEL_PRICING if model.startswith(k)]
    if candidates:
        best = max(candidates, key=len)
        return config.MODEL_PRICING[best]
    return (0.0, 0.0)


def llm_cost_usd(model: str, tokens_in: int, tokens_out: int) -> float:
    in_price, out_price = _price_per_1m(model)
    return (tokens_in / 1_000_000) * in_price + (tokens_out / 1_000_000) * out_price


@dataclass
class CostTracker:
    run_id: str
    tokens_in: int = 0
    tokens_out: int = 0
    llm_usd: float = 0.0
    tool_usd: float = 0.0
    by_agent: dict[str, float] = field(default_factory=dict)
    _lock: asyncio.Lock = field(default_factory=asyncio.Lock)

    async def record_llm(
        self,
        agent: str,
        model: str,
        tokens_in: int,
        tokens_out: int,
    ) -> float:
        cost = llm_cost_usd(model, tokens_in, tokens_out)
        async with self._lock:
            self.tokens_in += tokens_in
            self.tokens_out += tokens_out
            self.llm_usd += cost
            self.by_agent[agent] = self.by_agent.get(agent, 0.0) + cost
        return cost

    async def record_tool(self, agent: str, tool: str, cost_usd: float = 0.0) -> None:
        async with self._lock:
            self.tool_usd += cost_usd
            if cost_usd:
                self.by_agent[agent] = self.by_agent.get(agent, 0.0) + cost_usd

    def snapshot(self) -> CostSnapshot:
        return CostSnapshot(
            total_usd=round(self.llm_usd + self.tool_usd, 4),
            llm_usd=round(self.llm_usd, 4),
            tool_usd=round(self.tool_usd, 4),
            by_agent={k: round(v, 4) for k, v in self.by_agent.items()},
            tokens_in=self.tokens_in,
            tokens_out=self.tokens_out,
        )


def emit_event(
    run_id: str,
    kind: str,
    message: str,
    phase: Optional[str] = None,
    payload: Optional[dict] = None,
) -> None:
    """Append a live-progress event. Reads are by Streamlit to animate the feed."""
    ts = datetime.now(timezone.utc).isoformat()
    payload_json = json.dumps(payload, ensure_ascii=False, default=str) if payload else None
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO events (run_id, ts, phase, kind, message, payload_json) VALUES (?, ?, ?, ?, ?, ?)",
            (run_id, ts, phase, kind, message, payload_json),
        )
