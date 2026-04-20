"""FoundersLens — Streamlit UI.

Tabs:
- Run Research: idea input form + live progress feed while pipeline runs
- Report Viewer: list of past runs + embedded HTML report

Spawns `run.py` as subprocess (with --json-input from a temp fixture) and polls
the SQLite `events` table for live findings.

Launch:
    streamlit run streamlit_app.py
"""

from __future__ import annotations

import json
import subprocess
import sys
import time
import uuid
from datetime import datetime
from pathlib import Path

import streamlit as st

from founderslens import config
from founderslens.storage.db import get_conn, init_schema

# -------------------------------------------------------------------------
# Bootstrap
# -------------------------------------------------------------------------
st.set_page_config(
    page_title="FoundersLens — Market Research Agent",
    page_icon="🔍",
    layout="wide",
)

init_schema()

# -------------------------------------------------------------------------
# Sidebar — run status + cost
# -------------------------------------------------------------------------
st.sidebar.title("🔍 FoundersLens")
st.sidebar.caption("AI-агент рыночного исследования для фаундеров")

active_run_id: str | None = st.session_state.get("active_run_id")

if active_run_id:
    st.sidebar.markdown("---")
    st.sidebar.markdown(f"**Активный прогон:**\n`{active_run_id}`")


# -------------------------------------------------------------------------
# Helpers
# -------------------------------------------------------------------------
def list_runs(limit: int = 50) -> list[dict]:
    with get_conn() as conn:
        rows = conn.execute(
            """SELECT run_id, created_at, completed_at, status, idea, language,
                      total_cost_usd, duration_ms, quality_score, verdict
               FROM runs ORDER BY created_at DESC LIMIT ?""",
            (limit,),
        ).fetchall()
    return [dict(r) for r in rows]


def fetch_events(run_id: str, since_id: int = 0) -> list[dict]:
    with get_conn() as conn:
        rows = conn.execute(
            "SELECT id, ts, phase, kind, message FROM events WHERE run_id = ? AND id > ? ORDER BY id",
            (run_id, since_id),
        ).fetchall()
    return [dict(r) for r in rows]


def fetch_run(run_id: str) -> dict | None:
    with get_conn() as conn:
        row = conn.execute("SELECT * FROM runs WHERE run_id = ?", (run_id,)).fetchone()
    return dict(row) if row else None


def kind_icon(kind: str) -> str:
    return {
        "phase_start": "▶️",
        "phase_end": "✅",
        "finding": "💡",
        "warning": "⚠️",
        "error": "❌",
    }.get(kind, "•")


def spawn_pipeline(fixture_path: Path) -> subprocess.Popen:
    """Launch run.py in background, return the Popen. Logs stream to stdout."""
    proc = subprocess.Popen(
        [sys.executable, "run.py", "--fixture", str(fixture_path)],
        cwd=str(config.REPO_ROOT),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )
    return proc


# -------------------------------------------------------------------------
# Tabs
# -------------------------------------------------------------------------
tab_run, tab_view = st.tabs(["🚀 Запустить исследование", "📄 Отчёты"])


# =========================================================================
# TAB 1 — Run Research
# =========================================================================
with tab_run:
    st.header("Опиши идею — я за ~10 минут соберу полное рыночное исследование")

    col_left, col_right = st.columns([2, 1])
    with col_left:
        idea = st.text_area(
            "Твоя идея (1-3 предложения)",
            placeholder="Например: Мобильное приложение для родителей младенцев — трекинг кормления, сна, подгузников с общим экраном для обоих родителей.",
            height=100,
            key="idea",
        )
        target_user = st.text_input(
            "Кто целевой пользователь? (опционально)",
            placeholder="Например: первородящие мамы 25-35 в США и ЕС",
            key="target_user",
        )
    with col_right:
        language = st.selectbox("Язык отчёта", ["ru", "en"], index=0, key="language")
        geography = st.multiselect(
            "География рынков",
            ["US", "EU", "UK", "GLOBAL", "RU", "APAC", "LATAM"],
            default=["US", "EU"],
            key="geography",
        )

    with st.expander("Дополнительно (монетизация, конкуренты, что пробовали)"):
        monetization = st.text_input(
            "Модель монетизации",
            placeholder="Например: freemium subscription $4.99/mo",
            key="monetization",
        )
        references = st.text_input(
            "Референсные продукты (через запятую)",
            placeholder="Huckleberry, BabyTracker, Glow Baby",
            key="references",
        )
        already_tried = st.text_input(
            "Что уже пробовали?",
            placeholder="Провели 3 интервью, есть черновик лендинга",
            key="already_tried",
        )

    run_clicked = st.button(
        "🚀 Запустить исследование",
        type="primary",
        disabled=not idea.strip(),
        use_container_width=True,
    )

    if run_clicked:
        # Build a temp fixture from the form
        tmp_id = uuid.uuid4().hex[:8]
        fixture = config.FIXTURES_DIR / f"_ui_{tmp_id}.json"
        fixture.parent.mkdir(parents=True, exist_ok=True)
        payload = {
            "idea": idea.strip(),
            "language": language,
            "context": {
                "target_user": target_user.strip() or None,
                "geography": geography or ["US", "EU"],
                "monetization_hypothesis": monetization.strip() or None,
                "reference_products": [r.strip() for r in references.split(",") if r.strip()] or None,
                "already_tried": already_tried.strip() or None,
            },
        }
        fixture.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

        # Spawn pipeline
        proc = spawn_pipeline(fixture)
        st.session_state["pipeline_proc"] = proc
        st.session_state["pipeline_fixture"] = str(fixture)
        st.session_state["pipeline_started_at"] = time.time()
        # active_run_id will be picked up from DB once run.py inserts the row
        st.rerun()

    # -----------------------------------------------------------------
    # Live progress while pipeline is running
    # -----------------------------------------------------------------
    proc: subprocess.Popen | None = st.session_state.get("pipeline_proc")
    if proc is not None:
        st.markdown("---")

        # Find the run_id this proc created (latest running run)
        if not st.session_state.get("active_run_id"):
            with get_conn() as conn:
                row = conn.execute(
                    "SELECT run_id FROM runs WHERE status = 'running' ORDER BY created_at DESC LIMIT 1"
                ).fetchone()
            if row:
                st.session_state["active_run_id"] = row["run_id"]

        run_id = st.session_state.get("active_run_id")
        status_placeholder = st.empty()
        progress_placeholder = st.empty()
        events_placeholder = st.empty()

        # Live loop — polls events table, updates UI, exits when proc finishes
        last_event_id = 0
        events_log: list[str] = []
        poll_interval_s = 2.0
        elapsed = 0.0

        if run_id:
            while True:
                elapsed = time.time() - st.session_state["pipeline_started_at"]
                proc_alive = proc.poll() is None

                # Fetch new events
                new_events = fetch_events(run_id, since_id=last_event_id)
                for ev in new_events:
                    last_event_id = max(last_event_id, ev["id"])
                    icon = kind_icon(ev["kind"])
                    phase = f"[{ev['phase']}] " if ev["phase"] else ""
                    events_log.append(f"{icon} {phase}{ev['message']}")

                status_placeholder.markdown(
                    f"**Идёт исследование…** `{run_id}` · прошло {int(elapsed)} сек"
                )
                progress_placeholder.progress(
                    min(int(elapsed / 600 * 100), 95),
                    text=f"Ожидаемое время: 8-12 минут",
                )
                with events_placeholder.container():
                    st.markdown("### Живой фид находок")
                    for line in events_log[-40:]:
                        st.markdown(f"- {line}")

                if not proc_alive:
                    break

                time.sleep(poll_interval_s)

            # Pipeline ended — load final run and show summary
            run_row = fetch_run(run_id)
            if run_row and run_row.get("status") == "completed":
                st.success(
                    f"✅ Готово за {run_row['duration_ms']/1000:.0f} сек · "
                    f"${run_row.get('total_cost_usd', 0):.2f} · "
                    f"Verdict: **{run_row.get('verdict')}** · "
                    f"Quality {run_row.get('quality_score')}/100"
                )
                report_path = config.RUNS_DIR / run_id / "report.html"
                if report_path.exists():
                    st.markdown(f"**[Открыть полный отчёт]({report_path.as_uri()})**")
                    with st.expander("📄 Превью отчёта (встроенный)", expanded=True):
                        st.components.v1.html(report_path.read_text(encoding="utf-8"), height=900, scrolling=True)
            elif run_row:
                st.error(f"Прогон завершился со статусом: {run_row['status']}")

            # Clear state so the form becomes fresh again
            st.session_state.pop("pipeline_proc", None)
            st.session_state.pop("active_run_id", None)
        else:
            st.warning("Инициализация прогона… жди 5-10 секунд, затем обнови страницу.")


# =========================================================================
# TAB 2 — Report Viewer
# =========================================================================
with tab_view:
    st.header("История прогонов")
    runs = list_runs(limit=30)
    if not runs:
        st.info("Пока ни одного прогона нет. Запусти исследование на вкладке слева.")
    else:
        labels = [
            f"{r['run_id']}  ·  {(r.get('verdict') or r.get('status') or '?'):>8}  ·  "
            f"${(r.get('total_cost_usd') or 0):.2f}  ·  "
            f"{(r.get('idea') or '')[:60]}"
            for r in runs
        ]
        selected_idx = st.selectbox("Выбери прогон", range(len(runs)), format_func=lambda i: labels[i])
        selected = runs[selected_idx]

        col_meta, col_stats = st.columns([3, 2])
        with col_meta:
            st.markdown(f"**Идея:** {selected.get('idea') or '—'}")
            st.markdown(f"**Создан:** {selected['created_at']}")
            st.markdown(f"**Статус:** `{selected['status']}`")
        with col_stats:
            st.metric("Verdict", selected.get("verdict") or "—")
            st.metric("Quality Score", f"{selected.get('quality_score') or '—'}/100")
            dur = (selected.get("duration_ms") or 0) / 1000
            st.metric("Длительность", f"{dur:.0f} сек")
            st.metric("Стоимость", f"${selected.get('total_cost_usd') or 0:.2f}")

        report_path = config.RUNS_DIR / selected["run_id"] / "report.html"
        if report_path.exists():
            st.markdown(f"**[Открыть отчёт в браузере]({report_path.as_uri()})**")
            st.components.v1.html(report_path.read_text(encoding="utf-8"), height=1000, scrolling=True)
        else:
            st.warning(f"Файл report.html не найден для {selected['run_id']}")
