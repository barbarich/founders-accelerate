"""Base Agent abstraction.

Every concrete agent subclasses `Agent` and implements `async run(state) -> output`.
The base handles:
- Loading prompt text from `founderslens/prompts/<name>.<lang>.md`
- Wall-clock timing
- Writing an `agent_calls` row at start + end
- Feeding token usage into the shared CostTracker
- Graceful-fail: exceptions become a "failed" row and an error appended to state,
  they do NOT crash the pipeline.

Concrete agents call `self.llm_complete(...)` / `self.llm_extract(...)` rather
than the raw client modules, so cost accounting + agent attribution is automatic.
"""

from __future__ import annotations

import json
import logging
import time
from abc import ABC, abstractmethod
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Generic, Optional, Type, TypeVar

from pydantic import BaseModel

from founderslens import config
from founderslens.llm.base import LLMProvider
from founderslens.state import ResearchState
from founderslens.storage.db import get_conn
from founderslens.utils.cost_tracker import CostTracker, emit_event

log = logging.getLogger(__name__)

TOut = TypeVar("TOut", bound=BaseModel)
TSchema = TypeVar("TSchema", bound=BaseModel)


class AgentError(Exception):
    """Raised by an agent to signal its output is unusable. Pipeline continues."""


class Agent(ABC, Generic[TOut]):
    name: str = "unnamed"
    phase: str = "unphased"
    #: Tier hint for provider.resolve_model() — "main" by default, "premium" for Strategist etc.
    model_tier: str = "main"

    def __init__(self, cost: CostTracker, provider: LLMProvider):
        self.cost = cost
        self.run_id = cost.run_id
        self.provider = provider

    # ---------- prompt loading ----------

    def prompt_path(self, language: str) -> Path:
        p = config.PROMPTS_DIR / f"{self.name}.{language}.md"
        if p.exists():
            return p
        # Fallback 1: language-agnostic
        generic = config.PROMPTS_DIR / f"{self.name}.md"
        if generic.exists():
            return generic
        # Fallback 2: default to RU (we're RU-first; EN prompts are added incrementally)
        ru = config.PROMPTS_DIR / f"{self.name}.ru.md"
        if ru.exists():
            log.warning("prompt for agent '%s' lang=%s not found — falling back to ru", self.name, language)
            return ru
        raise FileNotFoundError(f"prompt for agent '{self.name}' (lang={language}) not found at {p}")

    def load_prompt(self, language: str) -> str:
        return self.prompt_path(language).read_text(encoding="utf-8")

    # ---------- LLM helpers — route cost to this agent ----------

    async def llm_complete(
        self,
        *,
        system: str,
        user: str,
        model: Optional[str] = None,
        max_tokens: int = 2048,
        temperature: float = 0.3,
    ) -> str:
        resolved = self.provider.resolve_model(self.model_tier, model)
        resp = await self.provider.complete(
            system=system, user=user, model=resolved,
            max_tokens=max_tokens, temperature=temperature,
        )
        await self.cost.record_llm(self.name, resp.model, resp.tokens_in, resp.tokens_out)
        return resp.text

    async def llm_extract(
        self,
        *,
        schema: Type[TSchema],
        system: str,
        user: str,
        model: Optional[str] = None,
        max_tokens: int = 4096,
        temperature: float = 0.0,
    ) -> TSchema:
        resolved = self.provider.resolve_model(self.model_tier, model)
        parsed, resp = await self.provider.extract_json(
            schema=schema, system=system, user=user, model=resolved,
            max_tokens=max_tokens, temperature=temperature,
        )
        await self.cost.record_llm(self.name, resp.model, resp.tokens_in, resp.tokens_out)
        return parsed

    async def try_grounded(
        self,
        *,
        schema: Type[TSchema],
        system: str,
        user: str,
        max_tokens: int = 8192,
    ) -> tuple[TSchema, list[str]] | None:
        """Best-effort web-grounded structured extraction on the USER's key.

        Returns (parsed, source_urls) when the provider supports grounding AND real
        cited sources came back; returns None otherwise so the caller falls back to
        its Tavily path. NEVER raises — grounding is PRIMARY, Tavily is the safety
        net, so a grounding miss can only degrade to the current working behavior
        (nothing breaks).
        """
        if not getattr(self.provider, "supports_grounding", False):
            return None  # e.g. Gemini — keep the Tavily path
        resolved = self.provider.resolve_model(self.model_tier)
        try:
            parsed, sources, resp = await self.provider.grounded_extract(
                schema=schema, system=system, user=user, model=resolved, max_tokens=max_tokens,
            )
        except Exception as e:  # noqa: BLE001
            log.warning("%s: grounded_extract failed (%s) — falling back to Tavily", self.name, type(e).__name__)
            return None
        try:
            await self.cost.record_llm(self.name, resp.model, resp.tokens_in, resp.tokens_out)
        except Exception:  # noqa: BLE001
            pass
        if not sources:
            # No real sources means the model answered from memory, not the web —
            # don't trust it; fall back to the Tavily path.
            log.warning("%s: grounded answer had no sources — falling back to Tavily", self.name)
            return None
        log.warning("%s: GROUNDED on the user's key — %d sources (no shared Tavily)", self.name, len(sources))
        return parsed, sources

    # ---------- Events ----------

    def emit(self, kind: str, message: str, payload: Optional[dict] = None) -> None:
        emit_event(self.run_id, kind, message, phase=self.phase, payload=payload)

    # ---------- Main entry — called by LangGraph node ----------

    async def execute(self, state: ResearchState) -> TOut | None:
        """Wraps `run` with logging + timing + failure capture."""
        started_at = datetime.now(timezone.utc)
        t0 = time.perf_counter()

        default_model_label = self.provider.resolve_model(self.model_tier)
        with get_conn() as conn:
            cur = conn.execute(
                """INSERT INTO agent_calls (run_id, agent_name, started_at, model, status)
                   VALUES (?, ?, ?, ?, 'running')""",
                (self.run_id, self.name, started_at.isoformat(), default_model_label),
            )
            call_id = cur.lastrowid

        self.emit("phase_start", f"[{self.name}] started")
        output: TOut | None = None
        status = "completed"
        error: str | None = None
        try:
            output = await self.run(state)
        except AgentError as e:
            status = "failed"
            error = str(e)
            state.errors.append(f"{self.name}: {error}")
            log.warning("agent %s failed softly: %s", self.name, error)
        except Exception as e:  # noqa: BLE001
            status = "failed"
            error = f"{type(e).__name__}: {e}"
            state.errors.append(f"{self.name}: {error}")
            log.exception("agent %s crashed — continuing pipeline", self.name)

        duration_ms = int((time.perf_counter() - t0) * 1000)
        completed_at = datetime.now(timezone.utc)
        output_json = None
        if output is not None:
            try:
                output_json = output.model_dump_json()
            except Exception:  # noqa: BLE001
                output_json = json.dumps({"_repr": repr(output)}, ensure_ascii=False)

        with get_conn() as conn:
            conn.execute(
                """UPDATE agent_calls
                   SET completed_at = ?, duration_ms = ?, status = ?, output_json = ?, error = ?,
                       tokens_in = ?, tokens_out = ?, cost_usd = ?
                   WHERE id = ?""",
                (
                    completed_at.isoformat(),
                    duration_ms,
                    status,
                    output_json,
                    error,
                    self.cost.tokens_in,
                    self.cost.tokens_out,
                    self.cost.by_agent.get(self.name, 0.0),
                    call_id,
                ),
            )

        state.phase_timings_ms[self.name] = duration_ms
        self.emit(
            "phase_end" if status == "completed" else "error",
            f"[{self.name}] {status} in {duration_ms}ms",
            payload={"status": status, "error": error},
        )
        return output

    @abstractmethod
    async def run(self, state: ResearchState) -> TOut:
        """Concrete agents implement this. Return a pydantic output model or raise AgentError."""
