#!/usr/bin/env python3
"""FoundersLens CLI.

Usage:
    python run.py "idea text here"
    python run.py --fixture data/fixtures/baby_tracker_idea.json
    python run.py --use-cached-run <run_id>          # replay from SQLite (TODO)
    python run.py --dry-run                          # skip external calls (offline)

Each run gets a UUID, a `data/runs/<run_id>/` directory, SQLite row, and
an HTML+JSON report on completion.
"""

from __future__ import annotations

import argparse
import asyncio
import json
import logging
import sys
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from founderslens import config
from founderslens.graph import build_graph
from founderslens.llm.registry import default_provider_from_env, get_provider
from founderslens.state import ResearchState
from founderslens.storage.db import get_conn, init_schema
from founderslens.utils.cost_tracker import CostTracker
from founderslens.utils.logging import setup_logging

log = logging.getLogger(__name__)


def _parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(prog="founderslens")
    p.add_argument("idea", nargs="?", help="Raw idea text (skip if using --fixture)")
    p.add_argument("--fixture", type=Path, help="JSON fixture describing the idea")
    p.add_argument("--lang", choices=["ru", "en"], default=None, help="Override report language")
    p.add_argument("--provider", choices=["anthropic", "claude", "openai", "gpt", "gemini", "google"],
                   default=None, help="LLM provider (default: auto-pick from env)")
    p.add_argument("--api-key", default=None, help="LLM API key (default: use env for chosen provider)")
    p.add_argument("--dry-run", action="store_true", help="Offline mode — only cached tool results")
    p.add_argument("-v", "--verbose", action="store_true", help="Debug logging")
    return p.parse_args()


def _load_raw_input(args: argparse.Namespace) -> dict[str, Any]:
    if args.fixture:
        data = json.loads(args.fixture.read_text(encoding="utf-8"))
        # Fixtures use `idea` + `context{...}` + `language`
        raw = {
            "idea": data.get("idea", ""),
            "language": data.get("language") or args.lang or config.DEFAULT_LANG,
        }
        ctx = data.get("context") or {}
        for k in ("target_user", "geography", "monetization_hypothesis",
                  "reference_products", "already_tried"):
            if ctx.get(k) is not None:
                raw[k] = ctx[k]
        return raw

    if not args.idea:
        raise SystemExit("error: pass either an idea or --fixture <path>")
    return {"idea": args.idea, "language": args.lang or config.DEFAULT_LANG}


def _record_run_start(run_id: str, raw_input: dict[str, Any]) -> None:
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO runs (run_id, created_at, language, idea, idea_input_json, status) VALUES (?, ?, ?, ?, ?, 'running')",
            (
                run_id,
                datetime.now(timezone.utc).isoformat(),
                raw_input.get("language", "ru"),
                raw_input.get("idea", "")[:2000],
                json.dumps(raw_input, ensure_ascii=False),
            ),
        )


def _record_run_end(run_id: str, final_state: ResearchState, duration_ms: int, status: str) -> None:
    with get_conn() as conn:
        conn.execute(
            """UPDATE runs
               SET completed_at = ?, status = ?, total_cost_usd = ?, duration_ms = ?,
                   final_state_json = ?, quality_score = ?, verdict = ?
               WHERE run_id = ?""",
            (
                datetime.now(timezone.utc).isoformat(),
                status,
                final_state.cost.total_usd,
                duration_ms,
                final_state.model_dump_json(),
                final_state.quality_score.overall if final_state.quality_score else None,
                final_state.verdict.decision if final_state.verdict else None,
                run_id,
            ),
        )


async def _main_async(args: argparse.Namespace) -> int:
    setup_logging("DEBUG" if args.verbose else "INFO")
    init_schema()

    if args.dry_run:
        import os
        os.environ["FOUNDERSLENS_OFFLINE"] = "1"

    # Non-LLM keys still required from env (Tavily, Exa, Firecrawl)
    missing_tools = [k for k in ("TAVILY_API_KEY", "EXA_API_KEY", "FIRECRAWL_API_KEY")
                     if not getattr(config, k)]
    if missing_tools and not args.dry_run:
        log.error("Missing required tool env vars: %s", ", ".join(missing_tools))
        log.error("Fill .env or run with --dry-run for offline replay.")
        return 2

    # Resolve LLM provider — explicit CLI, else default from env
    if args.provider:
        api_key = args.api_key or (
            config.ANTHROPIC_API_KEY if args.provider in ("anthropic", "claude")
            else config.OPENAI_API_KEY if args.provider in ("openai", "gpt")
            else None
        )
        if not api_key:
            log.error("--provider %s requires --api-key (or matching env var)", args.provider)
            return 2
        provider = get_provider(args.provider, api_key)
    else:
        provider = default_provider_from_env()
        if provider is None:
            log.error("No LLM provider configured. Set ANTHROPIC_API_KEY or OPENAI_API_KEY, "
                      "or pass --provider + --api-key.")
            return 2

    raw = _load_raw_input(args)
    run_id = f"run_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S')}_{uuid.uuid4().hex[:6]}"
    _record_run_start(run_id, raw)

    log.info("Starting run %s — provider=%s idea=%r",
             run_id, provider.provider_name, raw.get("idea", "")[:100])
    cost = CostTracker(run_id=run_id)
    initial_state = ResearchState(run_id=run_id, language=raw.get("language", "ru"))

    started = datetime.now(timezone.utc)
    graph = build_graph(cost, provider, raw)

    status = "completed"
    final_state: ResearchState
    try:
        result = await graph.ainvoke(initial_state.model_dump())
        # LangGraph returns dict; validate back into ResearchState for consistent access
        final_state = ResearchState.model_validate(result)
    except Exception:
        log.exception("pipeline crashed")
        status = "failed"
        final_state = initial_state
    finally:
        final_state.cost = cost.snapshot()
        duration_ms = int((datetime.now(timezone.utc) - started).total_seconds() * 1000)
        _record_run_end(run_id, final_state, duration_ms, status)

    print()
    print(f"  run_id     : {run_id}")
    print(f"  status     : {status}")
    print(f"  duration   : {duration_ms / 1000:.1f}s")
    print(f"  cost       : ${final_state.cost.total_usd:.4f}")
    print(f"  tokens     : {final_state.cost.tokens_in:,} in / {final_state.cost.tokens_out:,} out")
    if final_state.report_html_path:
        print(f"  report     : {final_state.report_html_path}")
    if final_state.errors:
        print("  errors     :")
        for e in final_state.errors:
            print(f"    - {e}")
    print()
    return 0 if status == "completed" else 1


def main() -> None:
    args = _parse_args()
    sys.exit(asyncio.run(_main_async(args)))


if __name__ == "__main__":
    main()
