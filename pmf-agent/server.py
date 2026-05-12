"""PMF Agent — FastAPI server.

Wraps the EXISTING pmf-agent pipeline (app.py::run_analysis) with HTTP endpoints
compatible with the FoundersLens /lens frontend pattern. ZERO changes to
agents/, models/, report/ — pure adapter layer.

Endpoints:
    GET  /api/health
    POST /api/intake/evaluate          — conversational intake w/ clarifying questions
    POST /api/research/start           — launch pipeline with user's LLM key
    GET  /api/research/events/{id}     — SSE stream of live findings
    GET  /api/research/status/{id}     — poll metrics
    GET  /api/research/report/{id}     — rendered HTML report

Streamlit app.py keeps running unchanged on pmf.founders-circle.space.
Deploy this new FastAPI as a separate Railway service at pmf-api.founders-circle.space.

Run locally:
    uvicorn server:app --host 0.0.0.0 --port 8001 --reload
"""

from __future__ import annotations

import asyncio
import json
import logging
import os
import threading
import time
import uuid
from dataclasses import asdict, is_dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Literal, Optional

import yaml
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, Field
from sse_starlette.sse import EventSourceResponse

# Load .env for tool keys (but LLM keys come per-request from user)
load_dotenv(Path(__file__).parent / ".env")

# Pipeline imports — use existing PMF agents untouched
from agents.base import build_client
from agents.competitors import CompetitorAgent
from agents.customer_pain import CustomerPainAgent
from agents.demand_signals import DemandSignalAgent
from agents.market import MarketAgent
from agents.orchestrator import OrchestratorAgent
from agents.pivot_advisor import PivotAdvisorAgent
from agents.regulatory import RegulatoryAgent
from agents.scorer import ScorerAgent
from agents.trends import TrendsAgent
from agents.unit_economics import UnitEconomicsAgent
from models.dataclasses import (
    CompetitorInfo,
    CompetitorMatrix,
    DemandAnalysis,
    IdeaInput,
    IdeaReport,
    MarketData,
    PainProfile,
    PainSignal,
    PMFAxisScore,
    PMFScore,
    RegulatoryAnalysis,
    TimingAnalysis,
    UnitEconomicsAnalysis,
)

log = logging.getLogger("pmf-server")
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s — %(message)s")


# ---------------------------------------------------------------------------
# Config loader (mirrors main.py::load_config — no modification to main.py)
# ---------------------------------------------------------------------------
def load_config() -> dict:
    config_path = Path(__file__).parent / "config.yaml"
    if config_path.exists():
        with open(config_path) as f:
            cfg = yaml.safe_load(f)
    else:
        cfg = {
            "provider": "anthropic",
            "models": {
                "anthropic": {
                    "orchestrator": "claude-sonnet-4-5",
                    "research": "claude-sonnet-4-5",
                    "pivot": "claude-sonnet-4-5",
                },
                "openai": {
                    "orchestrator": "gpt-4o",
                    "research": "gpt-4o",
                    "pivot": "gpt-4o",
                },
                "gemini": {
                    "orchestrator": "gemini-2.0-flash-exp",
                    "research": "gemini-2.0-flash-exp",
                    "pivot": "gemini-1.5-pro",
                },
            },
            "thresholds": {"go": 70, "validate_min": 45, "pivot_trigger": 50},
            "research_depth": {"market_rounds": 2, "competitor_rounds": 2, "pain_rounds": 2, "trends_rounds": 2},
        }
    return cfg


CONFIG = load_config()


# ---------------------------------------------------------------------------
# EventEmitter — duck-typed replacement for ThinkingLog
# Logic inside run_analysis is identical; only sink changes from Streamlit HTML
# to in-memory buffer + FastAPI SSE consumers read it.
# ---------------------------------------------------------------------------
class EventEmitter:
    """Collects run progress events. Thread-safe.

    Methods match app.py::ThinkingLog exactly so run_analysis logic is unchanged.
    """

    def __init__(self, run_id: str):
        self.run_id = run_id
        self._events: list[dict] = []
        self._lock = threading.Lock()
        self._seq = 0

    def _push(self, kind: str, agent: str | None, message: str, payload: dict | None = None) -> None:
        with self._lock:
            self._seq += 1
            self._events.append({
                "id": self._seq,
                "ts": datetime.now(timezone.utc).isoformat(),
                "kind": kind,
                "phase": agent,
                "message": message,
                "payload": payload,
            })

    def agent_start(self, agent: str, action: str) -> None:
        self._push("phase_start", agent, action)

    def agent_done(self, agent: str, result: str) -> None:
        self._push("phase_end", agent, result)

    def finding(self, text: str) -> None:
        self._push("finding", None, text)

    def divider(self) -> None:
        # Not user-facing; no-op for SSE stream
        pass

    def big_result(self, score: int, verdict: str) -> None:
        self._push("finding", "Scorer", f"PMF Score: {score}/100 — {verdict}", payload={"score": score, "verdict": verdict})

    def error(self, agent: str, message: str) -> None:
        self._push("error", agent, message)

    def events_since(self, since_id: int) -> list[dict]:
        with self._lock:
            return [e for e in self._events if e["id"] > since_id]


# ---------------------------------------------------------------------------
# run_analysis_api — VERBATIM port of app.py::run_analysis
# ONLY differences vs app.py:
#   - `log` parameter is EventEmitter instead of ThinkingLog (duck-typed)
#   - no Streamlit / st.* references (none are used inside run_analysis in app.py
#     — it's already UI-agnostic — so nothing else changes)
# ---------------------------------------------------------------------------
async def run_analysis_api(
    idea: IdeaInput,
    config: dict,
    emitter: EventEmitter,
    provider: str,
    api_key: str,
    model: str,
) -> IdeaReport:
    client = build_client(provider, api_key)
    models = {"orchestrator": model, "research": model, "pivot": model}
    thresholds = config["thresholds"]
    depth = config.get("research_depth", {})

    # 1 — Orchestrator
    emitter.agent_start("Orchestrator", "Breaking down idea into comprehensive research plan...")
    orchestrator = OrchestratorAgent(client, models["orchestrator"])
    plan = await orchestrator.run(idea)
    emitter.agent_done("Orchestrator", "Research plan ready — 35+ queries generated")
    emitter.finding(f"Core problem: {plan.core_problem[:120]}")
    emitter.finding(f"Target: {plan.target_segment[:120]}")
    for h in plan.key_hypotheses[:4]:
        emitter.finding(f"Hypothesis: {h[:120]}")
    emitter.divider()

    # 2-8 — ALL research agents in parallel (7 agents)
    emitter.agent_start("Market", "Deep market sizing (multi-round)...")
    emitter.agent_start("Competitors", "Competitor deep-dive...")
    emitter.agent_start("Pain", "User pain research (Reddit, G2, App Store, HN)...")
    emitter.agent_start("Trends", "Trends & timing (Google Trends, S-curve, regulatory)...")
    emitter.agent_start("Demand", "Demand validation (search volume, communities)...")
    emitter.agent_start("Regulatory", "Regulatory scan (compliance, legal risks)...")

    results = await asyncio.gather(
        MarketAgent(client, models["research"]).run(plan, rounds=depth.get("market_rounds", 2)),
        CompetitorAgent(client, models["research"]).run(plan, rounds=depth.get("competitor_rounds", 2)),
        CustomerPainAgent(client, models["research"]).run(plan, rounds=depth.get("pain_rounds", 2)),
        TrendsAgent(client, models["research"]).run(plan, rounds=depth.get("trends_rounds", 2)),
        DemandSignalAgent(client, models["research"]).run(plan),
        RegulatoryAgent(client, models["research"]).run(plan),
        return_exceptions=True,
    )

    def _safe(idx, default):
        r = results[idx]
        if isinstance(r, BaseException):
            emitter.finding(f"⚠️ Agent error (using defaults): {r}")
            return default
        return r

    market_data = _safe(0, MarketData(
        tam="N/A", sam="N/A", som="N/A", tam_value=0, sam_value=0, som_value=0,
        cagr="N/A", geography="N/A", demographics="N/A", key_facts=[], sources=[],
    ))
    competitor_data = _safe(1, CompetitorMatrix(
        competitors=[], errc={"eliminate": [], "reduce": [], "raise": [], "create": []},
        overall_threat="Unknown", whitespace_opportunities=[],
    ))
    pain_data = _safe(2, PainProfile(
        pain_signals=[], pain_severity_score=5, pain_frequency_score=5,
        top_workarounds=[], wtp_summary="No data available",
    ))
    timing_data = _safe(3, TimingAnalysis(
        tailwinds=[], headwinds=[], why_now="No data available",
        adjacent_analogies=[], timing_score=50,
    ))
    demand_data = _safe(4, DemandAnalysis())
    regulatory_data = _safe(5, RegulatoryAnalysis())

    emitter.agent_done("Market", f"TAM: {market_data.tam[:80]}")
    emitter.finding(f"SAM: {market_data.sam[:80]} · CAGR: {market_data.cagr}")
    if market_data.market_maturity:
        emitter.finding(f"Market maturity: {market_data.market_maturity}")

    emitter.agent_done("Competitors", f"Found {len(competitor_data.competitors)} competitors")
    for c in competitor_data.competitors[:4]:
        icon = {"High": "🔴", "Medium": "🟡", "Low": "🟢"}.get(c.threat_level, "⚪")
        extra = f", {c.estimated_revenue}" if c.estimated_revenue else ""
        emitter.finding(f"{icon} {c.name} — {c.threat_level} threat, {c.funding_total}{extra}")

    emitter.agent_done("Pain", f"{len(pain_data.pain_signals)} pain signals found")
    for s in pain_data.pain_signals[:3]:
        emitter.finding(f'"{s.quote}" — {s.source} [{s.journey_stage}]')
    emitter.finding(f"Severity: {pain_data.pain_severity_score}/10 · Frequency: {pain_data.pain_frequency_score}/10")

    emitter.agent_done("Trends", f"Timing score: {timing_data.timing_score}/100 · S-curve: {timing_data.s_curve_position}")
    for tw in timing_data.tailwinds[:2]:
        emitter.finding(f"Tailwind: {tw.get('trend', str(tw))[:100]}")

    emitter.agent_done("Demand", f"Demand score: {demand_data.demand_score}/100 — {demand_data.demand_trajectory}")
    for cs in demand_data.community_sizes[:2]:
        emitter.finding(f"Community: {cs.get('community','')} ({cs.get('platform','')}) — {cs.get('size','')}")

    emitter.agent_done("Regulatory", f"Regulatory score: {regulatory_data.regulatory_score}/100")
    if regulatory_data.legal_risks:
        emitter.finding(f"{len(regulatory_data.legal_risks)} legal risks identified")

    # Unit economics (needs competitor data)
    emitter.agent_start("Unit Economics", "Pricing & economics (CAC, LTV, monetization)...")
    try:
        unit_econ_data = await UnitEconomicsAgent(client, models["research"]).run(plan, competitor_data)
    except Exception as e:
        emitter.finding(f"⚠️ Unit Economics error (using defaults): {e}")
        unit_econ_data = UnitEconomicsAnalysis()
    emitter.agent_done("Unit Economics", f"Economics score: {unit_econ_data.unit_economics_score}/100")
    if unit_econ_data.estimated_arpu:
        emitter.finding(f"ARPU: {unit_econ_data.estimated_arpu} · LTV/CAC: {unit_econ_data.ltv_cac_ratio}")

    emitter.divider()

    # 9 — Scorer (9 axes) — with fallback
    emitter.agent_start("Scorer", "Calculating PMF score across 9 axes...")
    try:
        scorer = ScorerAgent(client, models["research"])
        pmf_score = await scorer.run(
            plan, market_data, competitor_data, pain_data, timing_data,
            demand=demand_data, unit_economics=unit_econ_data, regulatory=regulatory_data,
        )
    except Exception as e:
        emitter.finding(f"⚠️ Scorer error (using default scores): {e}")
        default_axes = [
            PMFAxisScore(axis=ax, score=50, weight=w, reasoning="Scoring unavailable — using default")
            for ax, w in [
                ("problem_severity", 0.20), ("market_size", 0.15), ("competitive_whitespace", 0.15),
                ("timing", 0.10), ("demand_validation", 0.10), ("monetization_readiness", 0.10),
                ("unit_economics", 0.08), ("regulatory_risk", 0.05), ("execution_feasibility", 0.07),
            ]
        ]
        pmf_score = PMFScore(axes=default_axes, weighted_total=50.0, verdict="VALIDATE",
                             summary="Scoring failed — showing default values. Please retry.")

    for a in pmf_score.axes:
        name = a.axis.replace("_", " ").title()
        emitter.finding(f"{name}: {a.score}/100 (weight {a.weight:.0%})")

    emitter.agent_done("Scorer", "PMF Score calculated")
    emitter.big_result(int(pmf_score.weighted_total), pmf_score.verdict)

    # 10 — Pivot (conditional)
    pivot_plan = None
    if pmf_score.weighted_total < thresholds.get("pivot_trigger", 50):
        emitter.divider()
        emitter.agent_start("Pivot Advisor", "Score below 50 — generating pivot scenarios...")
        try:
            pivot_agent = PivotAdvisorAgent(client, models["pivot"])
            pivot_plan = await pivot_agent.run(plan, pmf_score, market_data, competitor_data, pain_data)
            emitter.agent_done("Pivot Advisor", f"{len(pivot_plan.scenarios)} pivot scenarios ready")
            for p in pivot_plan.scenarios[:3]:
                emitter.finding(f"{p.pivot_type}: {p.hypothesis[:100]}")
        except Exception as e:
            emitter.finding(f"⚠️ Pivot Advisor error: {e}")
            emitter.agent_done("Pivot Advisor", "Skipped due to error")

    return IdeaReport(
        idea=idea, search_plan=plan, market=market_data,
        competitors=competitor_data, pain=pain_data, timing=timing_data,
        pmf_score=pmf_score, pivot_plan=pivot_plan,
        demand=demand_data, unit_economics=unit_econ_data, regulatory=regulatory_data,
    )


# ---------------------------------------------------------------------------
# In-memory run registry (no SQLite — ephemeral by design; restart = re-run)
# ---------------------------------------------------------------------------
class RunState:
    def __init__(self, run_id: str, idea: IdeaInput):
        self.run_id = run_id
        self.idea = idea
        self.status: Literal["running", "completed", "failed"] = "running"
        self.emitter = EventEmitter(run_id)
        self.report: Optional[IdeaReport] = None
        self.error: Optional[str] = None
        self.started_at = datetime.now(timezone.utc)
        self.completed_at: Optional[datetime] = None


_RUNS: dict[str, RunState] = {}
_RUNS_LOCK = threading.Lock()


def _put_run(state: RunState) -> None:
    with _RUNS_LOCK:
        _RUNS[state.run_id] = state


def _get_run(run_id: str) -> Optional[RunState]:
    with _RUNS_LOCK:
        return _RUNS.get(run_id)


# ---------------------------------------------------------------------------
# FastAPI app
# ---------------------------------------------------------------------------
app = FastAPI(title="PMF Agent API", version="0.1.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev: open. Tighten to founders-circle.space in prod.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Request / response models
# ---------------------------------------------------------------------------
Provider = Literal["anthropic", "claude", "openai", "gpt", "gemini", "google"]


def _canon_provider(p: str) -> str:
    p = p.lower().strip()
    return {"claude": "anthropic", "gpt": "openai", "google": "gemini"}.get(p, p)


def _pick_model(provider: str, cfg: dict) -> str:
    models = cfg.get("models", {}).get(provider, {})
    return models.get("research") or models.get("orchestrator") or ""


class IntakeEvaluateRequest(BaseModel):
    idea: str
    language: Literal["ru", "en"] = "ru"
    market: str = "Global"
    stage: str = "idea"
    provider: Provider = "anthropic"
    api_key: str
    model: Optional[str] = None  # user-chosen model id; falls back to provider default
    prior_questions: list[str] = Field(default_factory=list)
    prior_answers: list[str] = Field(default_factory=list)


class IdeaInputPayload(BaseModel):
    id: str
    title: str
    description: str
    market: str = "Global"
    stage: str = "idea"
    founder: str = "User"


class IntakeEvaluateResponse(BaseModel):
    ready: bool
    completeness_score: int = 0
    questions: list[str] = Field(default_factory=list)
    idea_input: Optional[IdeaInputPayload] = None


class ResearchStartRequest(BaseModel):
    idea_input: IdeaInputPayload
    provider: Provider
    api_key: str
    model: Optional[str] = None  # user-chosen model id; falls back to provider default


class ResearchStartResponse(BaseModel):
    run_id: str


class ResearchStatusResponse(BaseModel):
    run_id: str
    status: str
    verdict: Optional[str] = None
    quality_score: Optional[int] = None
    total_cost_usd: float = 0.0  # not tracked for PMF — placeholder for UI compat
    duration_ms: Optional[int] = None
    created_at: str
    completed_at: Optional[str] = None
    report_ready: bool = False


# ---------------------------------------------------------------------------
# Conversational intake
# ---------------------------------------------------------------------------
EVALUATOR_SYSTEM = """Ты — дружелюбный интервьюер стартап-идей. Оцени готовность описания к глубокому PMF-анализу.

Минимум для запуска:
1. Что делает продукт (один-два глагола + объект) — "помогает X делать Y"
2. Кто целевой пользователь (хотя бы роль или сегмент)
3. Хотя бы намёк на формат (app / web / messenger / B2B SaaS / др.)

Если минимум заполнен — completeness_score >= 70, ready=true, idea_input заполни.
Если нет — ready=false, questions=2-3 конкретных вопроса которые закроют пробелы.

Prior_questions + prior_answers учитывай, не повторяй.

Верни через tool call `emit_intake_eval`:
{
  "ready": bool,
  "completeness_score": int (0-100),
  "questions": [string, ...],
  "idea_input": {id, title, description, market, stage, founder} | null
}
"""


async def _evaluate_intake(req: IntakeEvaluateRequest) -> IntakeEvaluateResponse:
    """Uses user's LLM key to judge idea completeness + generate clarifying Qs."""
    provider = _canon_provider(req.provider)
    try:
        client = build_client(provider, req.api_key)
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"provider init: {e}")

    # Build user prompt including prior QA if any
    qa_block = ""
    if req.prior_questions:
        qa_block = "\n\nПредыдущий диалог:\n" + "\n".join(
            f"Q: {q}\nA: {a}" for q, a in zip(req.prior_questions, req.prior_answers or [])
        )
    user_text = (
        f"Идея фаундера: {req.idea}\n"
        f"Рынок: {req.market}\nStage: {req.stage}\nLang: {req.language}"
        + qa_block
    )

    # Simple JSON-mode call per provider. Keeping implementation tight — not as
    # robust as founderslens (tool-calling); good enough for intake.
    # Resolve model: user's choice or sensible default per provider
    model_id = req.model or {
        "anthropic": "claude-sonnet-4-5",
        "openai": "gpt-4o",
        "gemini": "gemini-2.0-flash-exp",
    }.get(provider, "claude-sonnet-4-5")

    raw_text = ""
    try:
        if provider == "anthropic":
            import anthropic
            msg = await client.messages.create(
                model=model_id,
                max_tokens=1500,
                system=EVALUATOR_SYSTEM + '\n\nВыведи JSON между ```json и ```.',
                messages=[{"role": "user", "content": user_text}],
            )
            raw_text = "".join(b.text for b in msg.content if getattr(b, "type", "") == "text")
        elif provider == "openai":
            from openai import AsyncOpenAI
            is_reasoning = model_id.startswith(("o1", "o3", "o4"))
            kwargs = {
                "model": model_id,
                "max_completion_tokens": 1500,
                "messages": [
                    {"role": "system", "content": EVALUATOR_SYSTEM + "\nReturn JSON only."},
                    {"role": "user", "content": user_text},
                ],
            }
            if not is_reasoning:
                kwargs["response_format"] = {"type": "json_object"}
            resp = await client.chat.completions.create(**kwargs)
            raw_text = resp.choices[0].message.content or "{}"
        elif provider == "gemini":
            mdl = client.models
            resp = mdl.generate_content(
                model=model_id,
                contents=EVALUATOR_SYSTEM + "\n\n" + user_text + "\n\nReturn JSON only.",
                config={"response_mime_type": "application/json"},
            )
            raw_text = resp.text or "{}"
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"LLM intake call failed: {e}")

    # Extract JSON
    def _extract(t: str) -> dict:
        t = t.strip()
        if "```json" in t:
            t = t.split("```json")[1].split("```")[0].strip()
        elif "```" in t:
            t = t.split("```")[1].split("```")[0].strip()
        start, end = t.find("{"), t.rfind("}") + 1
        if start == -1 or end <= start:
            return {}
        return json.loads(t[start:end])

    try:
        parsed = _extract(raw_text)
    except Exception as e:
        log.warning("intake JSON parse failed: %s — raw: %s", e, raw_text[:200])
        parsed = {}

    ready = bool(parsed.get("ready"))
    score = int(parsed.get("completeness_score", 0))
    questions = parsed.get("questions", []) or []
    idea_input_raw = parsed.get("idea_input")

    idea_input_payload: Optional[IdeaInputPayload] = None
    if ready and idea_input_raw:
        try:
            idea_input_payload = IdeaInputPayload(
                id=idea_input_raw.get("id") or f"idea_{uuid.uuid4().hex[:6]}",
                title=idea_input_raw.get("title") or req.idea[:80],
                description=idea_input_raw.get("description") or req.idea,
                market=idea_input_raw.get("market") or req.market,
                stage=idea_input_raw.get("stage") or req.stage,
                founder=idea_input_raw.get("founder") or "User",
            )
        except Exception as e:
            log.warning("idea_input normalization failed: %s", e)
            ready = False

    if not ready and not questions:
        # Safety net: if LLM said not ready but gave no questions, synthesize basics
        questions = [
            "Что именно будет делать твой продукт?",
            "Кто твой целевой пользователь?",
            "Это мобильное приложение, веб-сервис, бот или что-то другое?",
        ]

    return IntakeEvaluateResponse(
        ready=ready,
        completeness_score=score,
        questions=questions[:3] if not ready else [],
        idea_input=idea_input_payload,
    )


@app.post("/api/intake/evaluate", response_model=IntakeEvaluateResponse)
async def intake_evaluate(req: IntakeEvaluateRequest) -> IntakeEvaluateResponse:
    return await _evaluate_intake(req)


# ---------------------------------------------------------------------------
# Research endpoints
# ---------------------------------------------------------------------------
async def _run_pipeline(run_id: str, idea_input: IdeaInput, provider: str, api_key: str, model: Optional[str] = None) -> None:
    state = _get_run(run_id)
    if state is None:
        return
    # User-chosen model takes precedence; fall back to config default
    model = model or _pick_model(provider, CONFIG) or "claude-sonnet-4-5"
    try:
        report = await run_analysis_api(
            idea=idea_input, config=CONFIG, emitter=state.emitter,
            provider=provider, api_key=api_key, model=model,
        )
        state.report = report
        state.status = "completed"
    except Exception as e:
        log.exception("pipeline crashed for run %s", run_id)
        state.error = f"{type(e).__name__}: {e}"
        state.status = "failed"
        state.emitter.error("Pipeline", state.error[:300])
    finally:
        state.completed_at = datetime.now(timezone.utc)


@app.post("/api/research/start", response_model=ResearchStartResponse)
async def research_start(req: ResearchStartRequest) -> ResearchStartResponse:
    provider = _canon_provider(req.provider)
    # Validate key early so we don't fire off an 8-min pipeline with bad credentials
    try:
        build_client(provider, req.api_key)
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"provider init: {e}")

    idea_input = IdeaInput(**req.idea_input.model_dump())
    run_id = f"pmfrun_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S')}_{uuid.uuid4().hex[:6]}"
    state = RunState(run_id, idea_input)
    _put_run(state)

    asyncio.create_task(_run_pipeline(run_id, idea_input, provider, req.api_key, req.model))
    return ResearchStartResponse(run_id=run_id)


@app.get("/api/research/status/{run_id}", response_model=ResearchStatusResponse)
async def research_status(run_id: str) -> ResearchStatusResponse:
    state = _get_run(run_id)
    if state is None:
        raise HTTPException(status_code=404, detail="run not found")
    duration_ms = None
    if state.completed_at:
        duration_ms = int((state.completed_at - state.started_at).total_seconds() * 1000)
    return ResearchStatusResponse(
        run_id=state.run_id,
        status=state.status,
        verdict=state.report.pmf_score.verdict if state.report else None,
        quality_score=int(state.report.pmf_score.weighted_total) if state.report else None,
        total_cost_usd=0.0,
        duration_ms=duration_ms,
        created_at=state.started_at.isoformat(),
        completed_at=state.completed_at.isoformat() if state.completed_at else None,
        report_ready=state.report is not None,
    )


@app.get("/api/research/events/{run_id}")
async def research_events(run_id: str):
    state = _get_run(run_id)
    if state is None:
        raise HTTPException(status_code=404, detail="run not found")

    async def stream():
        last_id = 0
        done_emitted = False
        while True:
            new_events = state.emitter.events_since(last_id)
            for ev in new_events:
                last_id = ev["id"]
                yield {"event": "finding", "data": json.dumps(ev, ensure_ascii=False, default=str)}

            if state.status in ("completed", "failed"):
                # Drain remaining, then emit done + close
                tail = state.emitter.events_since(last_id)
                for ev in tail:
                    last_id = ev["id"]
                    yield {"event": "finding", "data": json.dumps(ev, ensure_ascii=False, default=str)}
                yield {
                    "event": "done",
                    "data": json.dumps({
                        "status": state.status,
                        "verdict": state.report.pmf_score.verdict if state.report else None,
                        "quality_score": int(state.report.pmf_score.weighted_total) if state.report else None,
                        "total_cost_usd": 0.0,
                    }),
                }
                break
            await asyncio.sleep(1.2)

    return EventSourceResponse(stream())


# ---------------------------------------------------------------------------
# HTML report renderer (matches Founders Circle palette)
# Minimal but information-dense. Could be upgraded later.
# ---------------------------------------------------------------------------
def _render_html_report(report: IdeaReport, run_id: str = "") -> str:
    import html as _html

    score = report.pmf_score
    verdict = score.verdict
    verdict_color = {"GO": "#0a7a2e", "VALIDATE": "#c58900", "PIVOT": "#a82020"}.get(verdict, "#555")
    verdict_bg = {"GO": "#e8f7ec", "VALIDATE": "#fff3cd", "PIVOT": "#fbe6e6"}.get(verdict, "#fafafa")

    def esc(s: Any) -> str:
        return _html.escape(str(s)) if s is not None else ""

    axes_rows = "".join(
        f'<tr><td>{esc(a.axis.replace("_"," ").title())}</td>'
        f'<td style="font-weight:700;">{a.score}/100</td>'
        f'<td>{int(a.weight*100)}%</td>'
        f'<td style="color:#555;font-size:13px;">{esc(a.reasoning)[:200]}</td></tr>'
        for a in score.axes
    )

    competitors_rows = ""
    if report.competitors and report.competitors.competitors:
        competitors_rows = "".join(
            f'<tr><td><strong>{esc(c.name)}</strong></td>'
            f'<td>{esc(c.funding_total)}</td>'
            f'<td>{esc(c.threat_level)}</td>'
            f'<td style="font-size:13px;color:#555;">{esc(c.key_differentiator)[:180]}</td></tr>'
            for c in report.competitors.competitors[:8]
        )

    pain_items = ""
    if report.pain and report.pain.pain_signals:
        pain_items = "".join(
            f'<li><em>"{esc(s.quote)[:240]}"</em> — <span class="muted">{esc(s.source)}</span> '
            f'<span class="muted">· severity {s.sentiment_intensity}/10 · workaround: {esc(s.current_workaround)[:120]}</span></li>'
            for s in report.pain.pain_signals[:8]
        )
    workarounds_block = ""
    if report.pain and report.pain.top_workarounds:
        workarounds_block = (
            "<p><strong>Текущие workarounds:</strong> "
            + ", ".join(esc(w) for w in report.pain.top_workarounds[:6])
            + "</p>"
        )
    wtp_block = (
        f"<p><strong>Готовность платить:</strong> {esc(report.pain.wtp_summary)}</p>"
        if report.pain and report.pain.wtp_summary else ""
    )

    pivot_block = ""
    if report.pivot_plan and getattr(report.pivot_plan, "scenarios", None):
        pivot_rows = "".join(
            f'<div class="pivot-card">'
            f'<div class="pivot-type">{esc(p.pivot_type)}</div>'
            f'<div class="pivot-hyp"><strong>Гипотеза:</strong> {esc(p.hypothesis)}</div>'
            f'<div class="pivot-hyp"><strong>Эксперимент:</strong> {esc(p.validation_experiment)}</div>'
            f'<div class="pivot-hyp"><strong>Метрика успеха:</strong> {esc(p.success_metric)} · {p.timeline_days} дней</div>'
            f'<div class="pivot-hyp"><strong>Аналог:</strong> {esc(p.company_inspiration)}</div>'
            f'</div>'
            for p in report.pivot_plan.scenarios[:3]
        )
        pivot_recommend = (
            f'<p style="margin-top:12px;"><strong>Рекомендуемый pivot:</strong> {esc(report.pivot_plan.recommended_pivot)} — '
            f'<span class="muted">{esc(report.pivot_plan.reasoning)[:300]}</span></p>'
            if report.pivot_plan.recommended_pivot else ""
        )
        pivot_block = f'<h2>Pivot сценарии</h2><div class="pivot-grid">{pivot_rows}</div>{pivot_recommend}'

    # Timing — tailwinds, headwinds, technology readiness, S-curve
    timing_block = ""
    if report.timing:
        t = report.timing
        def _kv_list(items, key="title", desc="description"):
            if not items:
                return '<p class="muted">—</p>'
            rows = []
            for it in items[:5]:
                if isinstance(it, dict):
                    title = it.get(key) or it.get("name") or it.get("driver") or it.get("signal") or ""
                    body = it.get(desc) or it.get("rationale") or it.get("evidence") or it.get("impact") or ""
                    rows.append(f'<li><strong>{esc(title)}</strong>'
                                + (f' — <span class="muted">{esc(body)[:240]}</span>' if body else "")
                                + '</li>')
                else:
                    rows.append(f'<li>{esc(it)}</li>')
            return f"<ul>{''.join(rows)}</ul>"
        timing_block = f"""
<h2>Тренды и timing</h2>
<div class="two-col">
  <div>
    <h3 class="sub">Попутный ветер ({len(t.tailwinds)})</h3>
    {_kv_list(t.tailwinds)}
  </div>
  <div>
    <h3 class="sub">Встречный ветер ({len(t.headwinds)})</h3>
    {_kv_list(t.headwinds)}
  </div>
</div>
<div class="stats">
  <div class="stat"><div class="stat-val">{esc(t.technology_readiness)}</div><div class="stat-label">Tech readiness</div></div>
  <div class="stat"><div class="stat-val">{esc(t.s_curve_position)}</div><div class="stat-label">S-curve</div></div>
  <div class="stat"><div class="stat-val">{t.timing_score}/100</div><div class="stat-label">Timing score</div></div>
</div>
"""

    # Unit economics
    econ_block = ""
    if report.unit_economics:
        e = report.unit_economics
        models_rows = "".join(
            f'<tr><td><strong>{esc(m.get("model") or m.get("type") or "—")}</strong></td>'
            f'<td>{esc(m.get("description") or m.get("rationale") or "")[:240]}</td></tr>'
            for m in (e.monetization_models or [])[:5]
        )
        econ_block = f"""
<h2>Юнит-экономика</h2>
<div class="stats">
  <div class="stat"><div class="stat-val">{esc(e.estimated_arpu) or "—"}</div><div class="stat-label">ARPU</div></div>
  <div class="stat"><div class="stat-val">{esc(e.estimated_cac_range) or "—"}</div><div class="stat-label">CAC</div></div>
  <div class="stat"><div class="stat-val">{esc(e.estimated_ltv_range) or "—"}</div><div class="stat-label">LTV</div></div>
  <div class="stat"><div class="stat-val">{esc(e.ltv_cac_ratio) or "—"}</div><div class="stat-label">LTV / CAC</div></div>
  <div class="stat"><div class="stat-val">{e.unit_economics_score}/100</div><div class="stat-label">Score</div></div>
</div>
{f'<table><thead><tr><th>Модель монетизации</th><th>Описание</th></tr></thead><tbody>{models_rows}</tbody></table>' if models_rows else ''}
"""

    # Regulatory + legal risks
    reg_block = ""
    if report.regulatory:
        r = report.regulatory
        regs_rows = "".join(
            f'<tr><td><strong>{esc(reg.get("name") or reg.get("regulation") or "—")}</strong></td>'
            f'<td>{esc(reg.get("jurisdiction") or reg.get("region") or "—")}</td>'
            f'<td>{esc(reg.get("impact") or reg.get("description") or "")[:240]}</td></tr>'
            for reg in (r.regulations or [])[:6]
        )
        risks_rows = "".join(
            f'<tr><td><strong>{esc(rk.get("risk") or rk.get("name") or "—")}</strong></td>'
            f'<td><span class="badge badge-{esc(str(rk.get("severity","")).lower()) or "med"}">{esc(rk.get("severity") or "—")}</span></td>'
            f'<td>{esc(rk.get("mitigation") or rk.get("description") or "")[:240]}</td></tr>'
            for rk in (r.legal_risks or [])[:6]
        )
        comp = ", ".join(esc(c) for c in (r.compliance_requirements or [])[:8]) or "—"
        privacy = ", ".join(esc(p) for p in (r.data_privacy_requirements or [])[:6]) or "—"
        reg_block = f"""
<h2>Регуляторика и юридические риски</h2>
<div class="stats">
  <div class="stat"><div class="stat-val">{r.regulatory_score}/100</div><div class="stat-label">Regulatory score</div></div>
  <div class="stat" style="flex:2;"><div class="stat-val" style="font-size:14px;font-weight:600;line-height:1.4;">{comp}</div><div class="stat-label">Compliance</div></div>
</div>
<p><strong>Data privacy:</strong> {privacy}</p>
{f'<h3 class="sub">Применимые регуляции</h3><table><thead><tr><th>Регуляция</th><th>Юрисдикция</th><th>Влияние</th></tr></thead><tbody>{regs_rows}</tbody></table>' if regs_rows else ''}
{f'<h3 class="sub">Юридические риски</h3><table><thead><tr><th>Риск</th><th>Severity</th><th>Mitigation</th></tr></thead><tbody>{risks_rows}</tbody></table>' if risks_rows else ''}
"""

    # Hypothesis risk matrix (from search_plan.key_hypotheses) — what to validate first
    risk_matrix_block = ""
    if report.search_plan and report.search_plan.key_hypotheses:
        hyp_rows = "".join(
            f'<tr><td>H{i+1}</td><td>{esc(h)}</td></tr>'
            for i, h in enumerate(report.search_plan.key_hypotheses[:8])
        )
        risk_matrix_block = f"""
<h2>Ключевые гипотезы для валидации</h2>
<p class="muted" style="font-size:13px;">Это утверждения, на которых держится твоя идея. Каждое нужно подтвердить или опровергнуть до серьёзных вложений.</p>
<table><thead><tr><th style="width:50px;">#</th><th>Гипотеза</th></tr></thead><tbody>{hyp_rows}</tbody></table>
"""

    # Blue Ocean / ERRC — what competitors do badly that you can flip
    bluocean_block = ""
    if report.competitors and report.competitors.errc:
        errc = report.competitors.errc
        def _errc(key, label, color):
            items = errc.get(key) or []
            if not items:
                return ""
            return (f'<div class="errc-card" style="border-top:3px solid {color};">'
                    f'<div class="errc-label">{label}</div>'
                    f'<ul>{"".join(f"<li>{esc(it)}</li>" for it in items[:5])}</ul>'
                    f'</div>')
        cards = (_errc("eliminate", "Устранить", "#a82020")
                 + _errc("reduce",   "Снизить",   "#c58900")
                 + _errc("raise",    "Поднять",   "#0a7a2e")
                 + _errc("create",   "Создать",   "#1a4ec0"))
        whitespace = report.competitors.whitespace_opportunities or []
        ws_block = (
            f'<h3 class="sub">Незанятые ниши</h3><ul>'
            + "".join(f"<li>{esc(w)}</li>" for w in whitespace[:6])
            + "</ul>"
        ) if whitespace else ""
        bluocean_block = f"""
<h2>Стратегический канвас (ERRC)</h2>
<p class="muted" style="font-size:13px;">Что в этой категории все делают одинаково, и где можно сломать паттерн.</p>
<div class="errc-grid">{cards}</div>
{ws_block}
"""

    market = report.market
    demand = report.demand
    # Demand details — search queries, communities, social signals
    demand_block = ""
    if demand:
        comm_rows = "".join(
            f'<tr><td><strong>{esc(c.get("name") or c.get("community") or "—")}</strong></td>'
            f'<td>{esc(c.get("size") or c.get("members") or "—")}</td>'
            f'<td>{esc(c.get("platform") or c.get("source") or "—")}</td></tr>'
            for c in (demand.community_sizes or [])[:6]
        )
        social_rows = "".join(
            f'<li><strong>{esc(s.get("platform") or "—")}:</strong> {esc(s.get("signal") or s.get("description") or "")[:200]}</li>'
            for s in (demand.social_media_signals or [])[:5]
        )
        demand_block = f"""
<h2>Спрос: подробнее</h2>
<div class="stats">
  <div class="stat"><div class="stat-val">{demand.demand_score}/100</div><div class="stat-label">Demand score</div></div>
  <div class="stat"><div class="stat-val">{esc(demand.demand_trajectory)}</div><div class="stat-label">Тренд</div></div>
</div>
{f'<p><strong>Google Trends:</strong> {esc(demand.google_trends_summary)}</p>' if demand.google_trends_summary else ''}
{f'<h3 class="sub">Где живёт твоя аудитория</h3><table><thead><tr><th>Сообщество</th><th>Размер</th><th>Платформа</th></tr></thead><tbody>{comm_rows}</tbody></table>' if comm_rows else ''}
{f'<h3 class="sub">Сигналы из соцсетей</h3><ul>{social_rows}</ul>' if social_rows else ''}
"""

    # Market: deeper — growth drivers, segments, methodology
    market_extra_block = ""
    if market:
        drivers = market.growth_drivers or []
        segs = market.market_segments or []
        drivers_block = (
            "<h3 class='sub'>Драйверы роста</h3><ul>"
            + "".join(f"<li><strong>{esc(d.get('driver') or d.get('name') or '—')}:</strong> "
                      f"<span class='muted'>{esc(d.get('description') or d.get('impact') or '')[:200]}</span></li>"
                      for d in drivers[:5])
            + "</ul>"
        ) if drivers else ""
        segs_block = (
            "<h3 class='sub'>Сегменты рынка</h3><ul>"
            + "".join(f"<li><strong>{esc(s.get('name') or s.get('segment') or '—')}:</strong> "
                      f"<span class='muted'>{esc(s.get('size') or s.get('description') or '')[:200]}</span></li>"
                      for s in segs[:5])
            + "</ul>"
        ) if segs else ""
        meth_block = (
            f"<p style='font-size:13px;color:#555;'><strong>SOM methodology:</strong> {esc(market.som_methodology)}</p>"
            if market.som_methodology else ""
        )
        market_extra_block = drivers_block + segs_block + meth_block
    return f"""<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>PMF Agent — {esc(report.idea.title)}</title>
<style>
  body {{ font-family:-apple-system,system-ui,sans-serif; max-width:880px; margin:40px auto; padding:0 24px; color:#1a1a1a; line-height:1.55; background:#f8f8f4; }}
  h1 {{ font-size:28px; margin:0 0 8px; }}
  h2 {{ font-size:20px; margin:32px 0 12px; padding-top:16px; border-top:1px solid #eee; }}
  .verdict-strip {{ background:{verdict_bg}; border-left:6px solid {verdict_color}; padding:20px 24px; border-radius:10px; margin:16px 0 24px; display:flex; align-items:center; gap:24px; }}
  .score-num {{ font-size:44px; font-weight:900; color:{verdict_color}; }}
  .verdict-label {{ font-size:20px; font-weight:800; color:{verdict_color}; }}
  .summary {{ font-size:15px; line-height:1.6; color:#333; margin:0; flex:1; }}
  table {{ width:100%; border-collapse:collapse; margin:12px 0; }}
  td, th {{ border-bottom:1px solid #eee; padding:8px 10px; text-align:left; vertical-align:top; font-size:14px; }}
  th {{ background:#fafafa; font-weight:600; color:#555; }}
  .stats {{ display:flex; gap:16px; margin:16px 0 24px; flex-wrap:wrap; }}
  .stat {{ background:#fff; border-radius:8px; padding:16px 20px; flex:1; min-width:140px; border:1px solid #e4e4dc; }}
  .stat-val {{ font-size:22px; font-weight:700; }}
  .stat-label {{ font-size:12px; color:#888; text-transform:uppercase; letter-spacing:0.5px; margin-top:4px; }}
  .muted {{ color:#888; }}
  ul {{ padding-left:18px; }}
  ul li {{ margin:8px 0; font-size:14px; }}
  .pivot-grid {{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:14px; }}
  .pivot-card {{ background:#fff; border:1px solid #e4e4dc; border-radius:8px; padding:14px 18px; }}
  .pivot-type {{ font-weight:700; margin-bottom:6px; font-size:14px; color:#1a2e14; background:#eef4e8; display:inline-block; padding:2px 10px; border-radius:12px; }}
  .pivot-hyp {{ font-size:13px; color:#333; line-height:1.5; margin-top:6px; }}
  .two-col {{ display:grid; grid-template-columns:1fr 1fr; gap:24px; margin:12px 0; }}
  .sub {{ font-size:15px; font-weight:700; margin:14px 0 6px; color:#333; }}
  .errc-grid {{ display:grid; grid-template-columns:repeat(2,1fr); gap:12px; margin:12px 0; }}
  .errc-card {{ background:#fff; border:1px solid #e4e4dc; border-radius:8px; padding:12px 16px; }}
  .errc-label {{ font-weight:700; font-size:13px; text-transform:uppercase; letter-spacing:0.5px; color:#1a1a1a; margin-bottom:6px; }}
  .errc-card ul {{ margin:0; padding-left:18px; font-size:13px; }}
  .errc-card li {{ margin:4px 0; }}
  .badge {{ display:inline-block; padding:2px 10px; border-radius:10px; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; }}
  .badge-high, .badge-critical {{ background:#fbe6e6; color:#a82020; }}
  .badge-medium, .badge-med {{ background:#fff3cd; color:#7a5500; }}
  .badge-low {{ background:#e8f7ec; color:#0a7a2e; }}
  .download-strip {{ background:#fff; border:1px solid #e4e4dc; border-left:4px solid #1a1a1a; padding:14px 20px; border-radius:8px; margin:24px 0; display:flex; align-items:center; justify-content:space-between; gap:14px; }}
  .download-strip a {{ background:#CAFF00; color:#0d0d0d; text-decoration:none; padding:10px 18px; border-radius:8px; font-weight:700; font-size:14px; }}
  .footer {{ margin-top:48px; padding-top:16px; border-top:1px solid #eee; color:#aaa; font-size:12px; text-align:center; }}
  @media (max-width:640px) {{
    .two-col, .errc-grid {{ grid-template-columns:1fr; }}
  }}
</style>
</head>
<body>
<h1>PMF Agent · {esc(report.idea.title)}</h1>
<p class="muted">{esc(report.idea.description)}</p>

<div class="verdict-strip">
  <div>
    <div class="score-num">{int(score.weighted_total)}/100</div>
    <div class="verdict-label">{esc(verdict)}</div>
  </div>
  <p class="summary">{esc(score.summary)}</p>
</div>

<div class="download-strip">
  <div>
    <strong>Полный отчёт в PDF</strong> · 12+ страниц с графиками, картой болей, ERRC-матрицей, дорожной картой 30/60/90
  </div>
  <a href="/api/research/report/{esc(run_id or report.idea.id)}/pdf" target="_blank" rel="noopener">↓ Скачать PDF</a>
</div>

<h2>Рынок</h2>
<div class="stats">
  <div class="stat"><div class="stat-val">{esc(market.tam)}</div><div class="stat-label">TAM</div></div>
  <div class="stat"><div class="stat-val">{esc(market.sam)}</div><div class="stat-label">SAM</div></div>
  <div class="stat"><div class="stat-val">{esc(market.som)}</div><div class="stat-label">SOM</div></div>
  <div class="stat"><div class="stat-val">{esc(market.cagr)}</div><div class="stat-label">CAGR</div></div>
</div>
<p><strong>География:</strong> {esc(market.geography)} · <strong>Зрелость:</strong> {esc(market.market_maturity)}</p>
<p><strong>Демография:</strong> {esc(market.demographics)}</p>
<p><strong>Why now:</strong> {esc(report.timing.why_now if report.timing else "—")}</p>
{market_extra_block}

<h2>PMF Score по 9 осям</h2>
<table><thead><tr><th>Ось</th><th>Балл</th><th>Вес</th><th>Обоснование</th></tr></thead><tbody>{axes_rows}</tbody></table>

{risk_matrix_block}

<h2>Конкуренты</h2>
{f'<table><thead><tr><th>Имя</th><th>Финансирование</th><th>Угроза</th><th>Дифференциация</th></tr></thead><tbody>{competitors_rows}</tbody></table>' if competitors_rows else '<p class="muted">Конкуренты не найдены.</p>'}

{bluocean_block}

<h2>Боль пользователей</h2>
{wtp_block}
{workarounds_block}
{f'<ul>{pain_items}</ul>' if pain_items else '<p class="muted">Сигналов не найдено.</p>'}

{demand_block}

{timing_block}

{econ_block}

{reg_block}

{pivot_block}

<div class="footer">PMF Agent · Founders Circle · {datetime.now(timezone.utc).strftime("%Y-%m-%d")} · run {esc(report.idea.id)}</div>
</body>
</html>"""


@app.get("/api/research/report/{run_id}", response_class=HTMLResponse)
async def research_report(run_id: str):
    state = _get_run(run_id)
    if state is None:
        raise HTTPException(status_code=404, detail="run not found")
    if state.status == "failed":
        return HTMLResponse(
            content=f"<html><body style='font-family:sans-serif;padding:40px;color:#a82020;'>"
                    f"<h2>Pipeline failed</h2><pre>{state.error or 'unknown error'}</pre></body></html>",
            status_code=200,
        )
    if state.report is None:
        raise HTTPException(status_code=409, detail="report not ready — pipeline still running")
    return HTMLResponse(content=_render_html_report(state.report, run_id=run_id))


# In-process cache so repeat downloads of the same report don't regenerate the
# PDF (each run triggers ~12 charts + heavy reportlab layout — 5–15s of work).
_PDF_CACHE: dict[str, str] = {}
_PDF_LOCK = threading.Lock()


@app.get("/api/research/report/{run_id}/pdf")
async def research_report_pdf(run_id: str):
    from fastapi.responses import FileResponse

    state = _get_run(run_id)
    if state is None:
        raise HTTPException(status_code=404, detail="run not found")
    if state.status == "failed":
        raise HTTPException(status_code=409, detail=f"run failed: {state.error or 'unknown'}")
    if state.report is None:
        raise HTTPException(status_code=409, detail="report not ready — pipeline still running")

    cached = _PDF_CACHE.get(run_id)
    if cached and Path(cached).exists():
        return FileResponse(cached, media_type="application/pdf",
                            filename=f"pmf_report_{run_id}.pdf")

    try:
        from report.pdf_generator import PDFReportGenerator
    except Exception as e:
        log.exception("pdf generator import failed")
        raise HTTPException(status_code=500, detail=f"pdf generator unavailable: {e}")

    output_dir = Path(__file__).parent / "data" / "pdf_reports"
    output_dir.mkdir(parents=True, exist_ok=True)

    # Charts use matplotlib which fights with asyncio loops — run in a thread.
    def _build() -> str:
        gen = PDFReportGenerator(output_dir=str(output_dir))
        return gen.generate(state.report)

    try:
        path = await asyncio.to_thread(_build)
    except Exception as e:
        log.exception("pdf generation failed")
        raise HTTPException(status_code=500, detail=f"pdf generation failed: {e}")

    with _PDF_LOCK:
        _PDF_CACHE[run_id] = path
    return FileResponse(path, media_type="application/pdf",
                        filename=f"pmf_report_{run_id}.pdf")


# ---------------------------------------------------------------------------
# Healthcheck
# ---------------------------------------------------------------------------
@app.get("/api/health")
async def health() -> dict[str, Any]:
    return {
        "status": "ok",
        "service": "pmf-agent-api",
        "version": "0.1.0",
        "active_runs": len(_RUNS),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=int(os.environ.get("PORT", 8001)), reload=False)
