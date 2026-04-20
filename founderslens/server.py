"""FoundersLens FastAPI server.

Endpoints:
  POST /api/intake/evaluate         — evaluate idea completeness, return questions if unclear
  POST /api/research/start          — launch pipeline with user-provided LLM provider + key
  GET  /api/research/events/{id}    — Server-Sent Events stream of live findings
  GET  /api/research/status/{id}    — poll run status / final metrics
  GET  /api/research/report/{id}    — HTML report (full report.html)
  GET  /api/research/assets/{id}/screenshots/{file}  — static assets (screenshots, creatives)

Run:
    uvicorn server:app --reload --port 8000
"""

from __future__ import annotations

import asyncio
import json
import logging
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Literal, Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse
from pydantic import BaseModel, Field
from sse_starlette.sse import EventSourceResponse

from founderslens import config
from founderslens.graph import build_graph
from founderslens.llm.registry import get_provider
from founderslens.state import IdeaInput, ResearchState
from founderslens.storage.db import get_conn, init_schema
from founderslens.utils.cost_tracker import CostTracker
from founderslens.utils.logging import setup_logging

log = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Bootstrap
# ---------------------------------------------------------------------------
setup_logging()
init_schema()

app = FastAPI(
    title="FoundersLens API",
    version="0.1.0",
    description="Multi-agent market research pipeline.",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev: open. Tighten in prod (e.g. https://founderscircle.io).
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------------------------------------------------------------------------
# Request / response models
# ---------------------------------------------------------------------------
class IntakeEvaluateRequest(BaseModel):
    idea: str
    language: Literal["ru", "en"] = "ru"
    target_user: Optional[str] = None
    geography: list[str] = Field(default_factory=list)
    monetization_hypothesis: Optional[str] = None
    reference_products: list[str] = Field(default_factory=list)
    already_tried: Optional[str] = None
    # provider/key used for clarifying-question LLM call
    provider: Literal["anthropic", "claude", "openai", "gpt", "gemini", "google"] = "anthropic"
    api_key: str
    model: Optional[str] = None  # user-chosen model id; falls back to provider default
    prior_questions: list[str] = Field(default_factory=list)
    prior_answers: list[str] = Field(default_factory=list)


class IntakeEvaluateResponse(BaseModel):
    ready: bool
    questions: list[str] = Field(default_factory=list)
    idea_input: Optional[IdeaInput] = None
    completeness_score: int = 0


class ResearchStartRequest(BaseModel):
    idea_input: IdeaInput
    provider: Literal["anthropic", "claude", "openai", "gpt", "gemini", "google"]
    api_key: str
    model: Optional[str] = None  # user-chosen model id; falls back to provider default


class ResearchStartResponse(BaseModel):
    run_id: str


class ResearchStatusResponse(BaseModel):
    run_id: str
    status: str
    verdict: Optional[str] = None
    quality_score: Optional[int] = None
    total_cost_usd: float = 0
    duration_ms: Optional[int] = None
    created_at: str
    completed_at: Optional[str] = None
    report_ready: bool = False


# ---------------------------------------------------------------------------
# Intake evaluator — conversational clarifying questions
# ---------------------------------------------------------------------------
EVALUATOR_SYSTEM = """Ты — дружелюбный интервьюер стартап-идей. Оцени готовность описания к глубокому рыночному исследованию.

Минимум для запуска research:
1. Что делает продукт (один-два глагола + объект) — "помогает X делать Y"
2. Кто целевой пользователь (хотя бы роль или сегмент)
3. Хотя бы намёк на формат (app / web / messenger / B2B SaaS / др.)

Если минимум заполнен — completeness_score >= 70, ready=true, idea_input заполни.
Если нет — ready=false, questions=2-3 конкретных вопроса которые закроют пробелы. Вопросы короткие, на "ты", без клише.

Уже отвечал на вопросы? Учитывай prior_questions + prior_answers, не повторяй.

Выход — строго JSON через tool call `emit_intake_eval`:
{
  "ready": bool,
  "completeness_score": int (0-100),
  "questions": [string, ...],  // если ready=false
  "idea_input": IdeaInput | null   // если ready=true
}
"""


class IntakeEval(BaseModel):
    ready: bool
    completeness_score: int = Field(ge=0, le=100)
    questions: list[str] = Field(default_factory=list)
    idea_input: Optional[IdeaInput] = None


@app.post("/api/intake/evaluate", response_model=IntakeEvaluateResponse)
async def intake_evaluate(req: IntakeEvaluateRequest) -> IntakeEvaluateResponse:
    try:
        provider = get_provider(req.provider, req.api_key)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"provider init failed: {e}")

    qa_history = ""
    if req.prior_questions:
        qa_history = "\n\nПредыдущий диалог:\n" + "\n".join(
            f"Q: {q}\nA: {a}" for q, a in zip(req.prior_questions, req.prior_answers or [])
        )

    user_payload = {
        "idea": req.idea,
        "language": req.language,
        "target_user": req.target_user,
        "geography": req.geography,
        "monetization_hypothesis": req.monetization_hypothesis,
        "reference_products": req.reference_products,
        "already_tried": req.already_tried,
    }
    user = (
        f"Текущий ввод фаундера:\n```json\n"
        + json.dumps(user_payload, ensure_ascii=False, indent=2)
        + f"\n```{qa_history}\n\nОцени готовность."
    )

    try:
        result, _resp = await provider.extract_json(
            schema=IntakeEval,
            system=EVALUATOR_SYSTEM,
            user=user,
            model=req.model,  # user-chosen model (None → provider default)
            max_tokens=1500,
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"LLM call failed: {e}")

    return IntakeEvaluateResponse(
        ready=result.ready,
        questions=result.questions,
        idea_input=result.idea_input,
        completeness_score=result.completeness_score,
    )


# ---------------------------------------------------------------------------
# Research — start pipeline + stream events
# ---------------------------------------------------------------------------
# In-memory registry of active pipeline tasks so we can track them
_ACTIVE_RUNS: dict[str, asyncio.Task] = {}


async def _run_pipeline(run_id: str, idea_input: IdeaInput, provider_name: str, api_key: str, model: Optional[str] = None) -> None:
    """Execute the graph in background for a given run_id.

    `model` — user-chosen LLM model id. None → provider picks its default per tier.
    """
    try:
        provider = get_provider(provider_name, api_key)
    except Exception as e:
        log.error("run %s: provider init failed: %s", run_id, e)
        _mark_run_failed(run_id, f"provider init: {e}")
        return

    # If user specified a model, override provider's tier defaults so every
    # agent in the pipeline uses that exact model (simpler than per-tier routing).
    if model:
        for tier in list(provider.default_models.keys()):
            provider.default_models[tier] = model

    # Persist run start row
    with get_conn() as conn:
        conn.execute(
            "INSERT INTO runs (run_id, created_at, language, idea, idea_input_json, status) VALUES (?, ?, ?, ?, ?, 'running')",
            (
                run_id,
                datetime.now(timezone.utc).isoformat(),
                idea_input.language,
                idea_input.raw_idea[:2000],
                idea_input.model_dump_json(),
            ),
        )

    cost = CostTracker(run_id=run_id)
    initial_state = ResearchState(run_id=run_id, language=idea_input.language, idea_input=idea_input)

    # Pass idea_input as raw input to Intake so it normalizes cleanly (idempotent)
    raw_input_for_intake = {
        "idea": idea_input.raw_idea,
        "language": idea_input.language,
        "target_user": idea_input.target_user,
        "geography": idea_input.geography,
        "monetization_hypothesis": idea_input.monetization_hypothesis,
        "reference_products": idea_input.reference_products,
        "already_tried": idea_input.already_tried,
    }

    started = datetime.now(timezone.utc)
    graph = build_graph(cost, provider, raw_input_for_intake)
    status = "completed"
    try:
        result = await graph.ainvoke(initial_state.model_dump())
        final_state = ResearchState.model_validate(result)
    except Exception as e:
        log.exception("run %s: pipeline crashed", run_id)
        status = "failed"
        final_state = initial_state

    final_state.cost = cost.snapshot()
    duration_ms = int((datetime.now(timezone.utc) - started).total_seconds() * 1000)

    with get_conn() as conn:
        conn.execute(
            """UPDATE runs SET completed_at = ?, status = ?, total_cost_usd = ?, duration_ms = ?,
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
    log.info("run %s done — status=%s cost=$%.4f duration=%ds", run_id, status, final_state.cost.total_usd, duration_ms // 1000)


def _mark_run_failed(run_id: str, err: str) -> None:
    with get_conn() as conn:
        conn.execute(
            "UPDATE runs SET status = 'failed', completed_at = ? WHERE run_id = ?",
            (datetime.now(timezone.utc).isoformat(), run_id),
        )
        conn.execute(
            "INSERT INTO events (run_id, ts, phase, kind, message) VALUES (?, ?, 'startup', 'error', ?)",
            (run_id, datetime.now(timezone.utc).isoformat(), err[:400]),
        )


@app.post("/api/research/start", response_model=ResearchStartResponse)
async def research_start(req: ResearchStartRequest) -> ResearchStartResponse:
    # Validate provider + key work BEFORE kicking off 10-min pipeline
    try:
        get_provider(req.provider, req.api_key)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=401, detail=f"LLM provider init failed: {e}")

    run_id = f"run_{datetime.now(timezone.utc).strftime('%Y%m%d_%H%M%S')}_{uuid.uuid4().hex[:6]}"
    task = asyncio.create_task(_run_pipeline(run_id, req.idea_input, req.provider, req.api_key, req.model))
    _ACTIVE_RUNS[run_id] = task
    return ResearchStartResponse(run_id=run_id)


@app.get("/api/research/events/{run_id}")
async def research_events(run_id: str):
    """SSE stream of events. Each event is one row from the `events` table.
    Closes when status transitions to 'completed' or 'failed' AND all events drained."""

    async def event_stream():
        last_event_id = 0
        run_finished = False

        while True:
            with get_conn() as conn:
                new_events = conn.execute(
                    "SELECT id, ts, phase, kind, message, payload_json FROM events WHERE run_id = ? AND id > ? ORDER BY id",
                    (run_id, last_event_id),
                ).fetchall()
                run_row = conn.execute(
                    "SELECT status, total_cost_usd, quality_score, verdict FROM runs WHERE run_id = ?",
                    (run_id,),
                ).fetchone()

            for ev in new_events:
                last_event_id = max(last_event_id, ev["id"])
                payload = {
                    "id": ev["id"],
                    "ts": ev["ts"],
                    "phase": ev["phase"],
                    "kind": ev["kind"],
                    "message": ev["message"],
                }
                if ev["payload_json"]:
                    try:
                        payload["payload"] = json.loads(ev["payload_json"])
                    except Exception:
                        pass
                yield {"event": "finding", "data": json.dumps(payload, ensure_ascii=False)}

            if run_row and run_row["status"] in ("completed", "failed", "aborted"):
                if run_finished:
                    # Stream the summary event and close
                    yield {
                        "event": "done",
                        "data": json.dumps({
                            "status": run_row["status"],
                            "verdict": run_row["verdict"],
                            "quality_score": run_row["quality_score"],
                            "total_cost_usd": run_row["total_cost_usd"],
                        }),
                    }
                    break
                run_finished = True

            await asyncio.sleep(1.5)

    return EventSourceResponse(event_stream())


@app.get("/api/research/status/{run_id}", response_model=ResearchStatusResponse)
async def research_status(run_id: str) -> ResearchStatusResponse:
    with get_conn() as conn:
        row = conn.execute(
            """SELECT run_id, status, verdict, quality_score, total_cost_usd,
                      duration_ms, created_at, completed_at FROM runs WHERE run_id = ?""",
            (run_id,),
        ).fetchone()
    if row is None:
        raise HTTPException(status_code=404, detail="run not found")
    report_path = config.RUNS_DIR / run_id / "report.html"
    return ResearchStatusResponse(
        run_id=row["run_id"],
        status=row["status"],
        verdict=row["verdict"],
        quality_score=row["quality_score"],
        total_cost_usd=row["total_cost_usd"] or 0.0,
        duration_ms=row["duration_ms"],
        created_at=row["created_at"],
        completed_at=row["completed_at"],
        report_ready=report_path.exists(),
    )


@app.get("/api/research/report/{run_id}", response_class=HTMLResponse)
async def research_report(run_id: str) -> HTMLResponse:
    path = config.RUNS_DIR / run_id / "report.html"
    if not path.exists():
        raise HTTPException(status_code=404, detail="report not found (run may still be running or failed)")
    html_content = path.read_text(encoding="utf-8")
    # Inject <base> tag so relative asset paths (screenshots/foo.png, creatives/bar.png)
    # in the HTML resolve to our /api/research/assets/{run_id}/ endpoint.
    base_tag = f'<base href="/api/research/assets/{run_id}/">'
    if "<head>" in html_content:
        html_content = html_content.replace("<head>", f"<head>\n{base_tag}", 1)
    return HTMLResponse(content=html_content)


@app.get("/api/research/assets/{run_id}/screenshots/{filename}")
async def research_screenshot(run_id: str, filename: str):
    # Basic path-traversal guard
    if "/" in filename or ".." in filename:
        raise HTTPException(status_code=400, detail="bad filename")
    path = config.RUNS_DIR / run_id / "screenshots" / filename
    if not path.exists():
        raise HTTPException(status_code=404, detail="asset not found")
    return FileResponse(path)


@app.get("/api/research/assets/{run_id}/creatives/{filename}")
async def research_creative(run_id: str, filename: str):
    if "/" in filename or ".." in filename:
        raise HTTPException(status_code=400, detail="bad filename")
    path = config.RUNS_DIR / run_id / "creatives" / filename
    if not path.exists():
        raise HTTPException(status_code=404, detail="asset not found")
    return FileResponse(path)


# ---------------------------------------------------------------------------
# Healthcheck
# ---------------------------------------------------------------------------
@app.get("/api/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "service": "founderslens", "version": "0.1.0"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
