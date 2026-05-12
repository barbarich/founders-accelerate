import asyncio
import json
import os
import tempfile
import time
import uuid
from datetime import date
from pathlib import Path

import streamlit as st
import yaml
from google import genai
from google.genai import types as genai_types

st.set_page_config(page_title="PMF Agent", page_icon="🎯", layout="wide", initial_sidebar_state="collapsed")

# ---------------------------------------------------------------------------
# CSS
# ---------------------------------------------------------------------------
st.markdown("""
<style>
    .block-container { padding-top: 1.5rem; max-width: 860px; }
    .stChatMessage { border-radius: 12px; }

    /* Thinking steps */
    .thinking-block {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 0.88rem;
        line-height: 1.7;
        background: #f8f9fb;
        border: 1px solid #e8ecf1;
        border-radius: 12px;
        padding: 1rem 1.2rem;
        margin: 0.5rem 0;
    }
    .thinking-block .step {
        padding: 0.35rem 0;
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }
    .thinking-block .step-icon {
        flex-shrink: 0;
        width: 22px;
        text-align: center;
    }
    .thinking-block .step-done { color: #16a34a; }
    .thinking-block .step-working { color: #d97706; }
    .thinking-block .step-label {
        font-weight: 600;
        color: #374151;
        min-width: 100px;
    }
    .thinking-block .step-text { color: #6b7280; }
    .thinking-block .step-detail {
        color: #9ca3af;
        font-size: 0.8rem;
        padding-left: 1.7rem;
    }
    .thinking-block .step-finding {
        color: #374151;
        font-size: 0.82rem;
        padding-left: 1.7rem;
        border-left: 2px solid #e5e7eb;
        margin-left: 0.6rem;
        padding: 0.15rem 0 0.15rem 0.8rem;
    }
    .thinking-block .divider {
        border-top: 1px solid #e8ecf1;
        margin: 0.4rem 0;
    }

    /* Score hero */
    .score-box {
        text-align: center; padding: 1.5rem; border-radius: 16px; margin: 0.8rem 0;
    }
    .score-box .num { font-size: 4rem; font-weight: 800; line-height: 1; }
    .score-box .vrd { font-size: 1.4rem; font-weight: 700; margin-top: 0.3rem; letter-spacing: 0.05em; }
    .sb-go       { background: linear-gradient(135deg,#dcfce7,#bbf7d0); }
    .sb-go .num, .sb-go .vrd { color: #15803d; }
    .sb-validate { background: linear-gradient(135deg,#fef9c3,#fde68a); }
    .sb-validate .num, .sb-validate .vrd { color: #a16207; }
    .sb-pivot    { background: linear-gradient(135deg,#fee2e2,#fecaca); }
    .sb-pivot .num, .sb-pivot .vrd { color: #b91c1c; }

    /* Pain quote */
    .pq { border-left: 3px solid #6366f1; padding: 0.4rem 0.8rem; margin: 0.4rem 0;
          background: #f8f7ff; border-radius: 0 8px 8px 0; font-style: italic; }
    .ps { font-size: 0.75rem; color: #6b7280; }

    /* ERRC grid */
    .errc { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
    .errc > div { border-radius: 10px; padding: 0.6rem 0.8rem; }
    .e-el { background:#fef2f2; border:1px solid #fecaca; }
    .e-re { background:#fff7ed; border:1px solid #fed7aa; }
    .e-ra { background:#eff6ff; border:1px solid #bfdbfe; }
    .e-cr { background:#f0fdf4; border:1px solid #bbf7d0; }

    /* Pivot card */
    .pvt { background:#fff7ed; border:1px solid #fed7aa; border-radius:10px; padding:0.8rem; margin-bottom:0.6rem; }

    /* Hide branding */
    #MainMenu, footer, .stDeployButton { display: none !important; }

    /* Model selector */
    .model-badge {
        display: inline-block;
        font-size: 0.7rem;
        padding: 0.15rem 0.5rem;
        border-radius: 10px;
        font-weight: 600;
        margin-left: 0.3rem;
    }
    .badge-recommended { background: #dbeafe; color: #1d4ed8; }
    .badge-premium { background: #f3e8ff; color: #7c3aed; }
    .badge-budget { background: #f0fdf4; color: #15803d; }
</style>
""", unsafe_allow_html=True)

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

def load_config() -> dict:
    config_path = Path(__file__).parent / "config.yaml"
    if config_path.exists():
        with open(config_path) as f:
            cfg = yaml.safe_load(f)
    else:
        cfg = {
            "provider": "gemini",
            "models": {"gemini": {"orchestrator": "gemini-2.0-flash", "research": "gemini-2.0-flash", "pivot": "gemini-2.0-flash"}},
            "thresholds": {"go": 70, "validate_min": 45, "pivot_trigger": 50},
            "output": {"dir": "./reports"},
        }
    provider = cfg.get("provider", "gemini")
    cfg["active_models"] = cfg.get("models", {}).get(provider, {})
    cfg["provider"] = provider
    return cfg


CONFIG = load_config()

# Multi-provider model catalog. Each user picks a provider, pastes their key,
# then the model dropdown is filtered by provider.
PROVIDERS = {
    "gemini": {
        "label": "Google Gemini",
        "key_url": "https://aistudio.google.com/apikey",
        "key_placeholder": "AIza...",
        "models": [
            {"id": "gemini-3-flash-preview", "name": "Gemini 3 Flash (preview)", "description": "New — frontier at Flash price", "tier": "recommended"},
            {"id": "gemini-3.1-pro-preview", "name": "Gemini 3.1 Pro (preview)", "description": "Newest flagship, deepest reasoning", "tier": "premium"},
            {"id": "gemini-3.1-flash-lite-preview", "name": "Gemini 3.1 Flash-Lite (preview)", "description": "New — fastest & cheapest", "tier": "budget"},
            {"id": "gemini-2.5-pro", "name": "Gemini 2.5 Pro (stable)", "description": "Stable premium fallback", "tier": "premium"},
            {"id": "gemini-2.5-flash", "name": "Gemini 2.5 Flash (stable)", "description": "Stable recommended fallback", "tier": "recommended"},
            {"id": "gemini-2.5-flash-lite", "name": "Gemini 2.5 Flash-Lite (stable)", "description": "Stable budget fallback", "tier": "budget"},
        ],
    },
    "anthropic": {
        "label": "Anthropic Claude",
        "key_url": "https://console.anthropic.com/settings/keys",
        "key_placeholder": "sk-ant-...",
        "models": [
            {"id": "claude-sonnet-4-6", "name": "Claude Sonnet 4.6", "description": "Best speed × intelligence balance", "tier": "recommended"},
            {"id": "claude-opus-4-7", "name": "Claude Opus 4.7", "description": "Most capable — complex reasoning", "tier": "premium"},
            {"id": "claude-haiku-4-5", "name": "Claude Haiku 4.5", "description": "Fastest, near-frontier", "tier": "budget"},
        ],
    },
    "openai": {
        "label": "OpenAI",
        "key_url": "https://platform.openai.com/api-keys",
        "key_placeholder": "sk-...",
        "models": [
            {"id": "gpt-5.4-mini", "name": "GPT-5.4 mini", "description": "Strong mini — best default", "tier": "recommended"},
            {"id": "gpt-5.4", "name": "GPT-5.4", "description": "Frontier for agentic & coding", "tier": "premium"},
            {"id": "gpt-5.4-nano", "name": "GPT-5.4 nano", "description": "Cheapest GPT-5.4-class", "tier": "budget"},
            {"id": "o3", "name": "o3", "description": "Reasoning model", "tier": "premium"},
            {"id": "o4-mini", "name": "o4-mini", "description": "Cost-efficient reasoning", "tier": "budget"},
        ],
    },
}

DEFAULT_PROVIDER = "gemini"
DEFAULT_MODEL = "gemini-3-flash-preview"

# ---------------------------------------------------------------------------
# Session state
# ---------------------------------------------------------------------------

if "messages" not in st.session_state:
    st.session_state.messages = []
if "idea_data" not in st.session_state:
    st.session_state.idea_data = None
if "report" not in st.session_state:
    st.session_state.report = None
if "phase" not in st.session_state:
    st.session_state.phase = "chat"
if "provider" not in st.session_state:
    st.session_state.provider = DEFAULT_PROVIDER
if "selected_model" not in st.session_state:
    st.session_state.selected_model = DEFAULT_MODEL
if "api_key" not in st.session_state:
    # Key is held ONLY in session_state. Never written to os.environ or disk.
    st.session_state.api_key = ""
if "key_validated" not in st.session_state:
    st.session_state.key_validated = False

# ---------------------------------------------------------------------------
# Conversation agent
# ---------------------------------------------------------------------------

INTAKE_SYSTEM = """You are a PMF (Product-Market Fit) research assistant. You help founders describe their startup idea clearly before running a deep analysis.

Your job in this conversation:
1. Understand the founder's idea from their free-text description
2. Ask 2-4 SHORT clarifying questions (one message, numbered) if critical details are missing
3. When you have enough information, extract a structured summary and tell the user you're ready to analyze

REQUIRED fields you need (ask if missing):
- title: Short name for the idea (5-8 words)
- description: What the product does, how it works (2-3 sentences)
- market: Target geography and/or demographic
- stage: One of: idea, waitlist, mvp, growth
- founder: Their name

RULES:
- Be brief and conversational. No walls of text.
- Ask questions naturally, like a smart co-founder would.
- Don't ask about things you can infer from context.
- If the user gives a vague one-liner, ask for specifics.
- If the user gives a detailed description, you can skip most questions.
- When you have enough, output the EXACT marker line below, followed by JSON:

READY_TO_ANALYZE
{"title": "...", "description": "...", "market": "...", "stage": "...", "founder": "..."}

The marker must be on its own line. Put the JSON immediately after it. Include your confirmation message BEFORE the marker.

IMPORTANT: Always respond in the SAME language the user writes in. If they write in Russian, respond in Russian. If English, respond in English."""


def chat_with_intake(messages: list[dict], provider: str, api_key: str, model: str) -> str:
    """Run the intake chat via whichever provider the user selected.
    Key is passed in explicitly — never read from os.environ or a module-level global.
    """
    if provider == "gemini":
        client = genai.Client(api_key=api_key)
        contents = []
        for m in messages:
            role = "user" if m["role"] == "user" else "model"
            contents.append(genai_types.Content(role=role, parts=[genai_types.Part(text=m["content"])]))
        response = client.models.generate_content(
            model=model,
            contents=contents,
            config=genai_types.GenerateContentConfig(system_instruction=INTAKE_SYSTEM),
        )
        return response.text or ""

    if provider == "anthropic":
        import anthropic
        client = anthropic.Anthropic(api_key=api_key)
        conv = [{"role": ("user" if m["role"] == "user" else "assistant"), "content": m["content"]} for m in messages]
        response = client.messages.create(
            model=model,
            max_tokens=2048,
            system=INTAKE_SYSTEM,
            messages=conv,
        )
        for block in response.content:
            if getattr(block, "type", None) == "text":
                return block.text
        return ""

    if provider == "openai":
        from openai import OpenAI
        client = OpenAI(api_key=api_key)
        conv = [{"role": "system", "content": INTAKE_SYSTEM}]
        for m in messages:
            conv.append({"role": ("user" if m["role"] == "user" else "assistant"), "content": m["content"]})
        response = client.chat.completions.create(model=model, messages=conv, max_completion_tokens=2048)
        return response.choices[0].message.content or ""

    raise ValueError(f"Unknown provider: {provider}")


def validate_api_key(provider: str, api_key: str) -> tuple[bool, str]:
    """Cheap call to confirm the key is valid for the provider.
    Returns (ok, message). Does NOT consume significant tokens."""
    if not api_key or not api_key.strip():
        return False, "Введи ключ"
    try:
        if provider == "gemini":
            client = genai.Client(api_key=api_key)
            # list_models is free and auth-checked
            _ = list(client.models.list())
            return True, "Ключ валиден"
        if provider == "anthropic":
            import anthropic
            client = anthropic.Anthropic(api_key=api_key)
            # Tiny 1-token generation to auth
            client.messages.create(
                model="claude-haiku-4-5",
                max_tokens=1,
                messages=[{"role": "user", "content": "hi"}],
            )
            return True, "Ключ валиден"
        if provider == "openai":
            from openai import OpenAI
            client = OpenAI(api_key=api_key)
            _ = client.models.list()
            return True, "Ключ валиден"
        return False, f"Неизвестный провайдер: {provider}"
    except Exception as e:
        msg = str(e)
        if len(msg) > 200:
            msg = msg[:200] + "..."
        return False, f"Ключ не подошёл: {msg}"


def parse_ready_marker(text: str) -> dict | None:
    if "READY_TO_ANALYZE" not in text:
        return None
    parts = text.split("READY_TO_ANALYZE", 1)
    json_part = parts[1].strip()
    start = json_part.find("{")
    end = json_part.rfind("}") + 1
    if start != -1 and end > start:
        try:
            return json.loads(json_part[start:end])
        except json.JSONDecodeError:
            return None
    return None


def get_display_text(text: str) -> str:
    if "READY_TO_ANALYZE" not in text:
        return text
    return text.split("READY_TO_ANALYZE")[0].strip()


# ---------------------------------------------------------------------------
# Clean thinking log
# ---------------------------------------------------------------------------

class ThinkingLog:
    """Shows agent progress as clean human-readable thinking steps."""

    def __init__(self, container):
        self._steps: list[str] = []
        self._container = container

    def _render(self):
        html = '<div class="thinking-block">' + "\n".join(self._steps) + "</div>"
        self._container.markdown(html, unsafe_allow_html=True)

    def agent_start(self, agent: str, action: str):
        self._steps.append(
            f'<div class="step">'
            f'<span class="step-icon step-working">&#9679;</span>'
            f'<span class="step-label">{agent}</span>'
            f'<span class="step-text">{action}</span>'
            f'</div>'
        )
        self._render()

    def agent_done(self, agent: str, result: str):
        # Replace the last working step for this agent with done
        for i in range(len(self._steps) - 1, -1, -1):
            if f"step-working" in self._steps[i] and agent in self._steps[i]:
                self._steps[i] = (
                    f'<div class="step">'
                    f'<span class="step-icon step-done">&#10003;</span>'
                    f'<span class="step-label">{agent}</span>'
                    f'<span class="step-text">{result}</span>'
                    f'</div>'
                )
                break
        self._render()

    def finding(self, text: str):
        self._steps.append(f'<div class="step-finding">{text}</div>')
        self._render()

    def divider(self):
        self._steps.append('<div class="divider"></div>')
        self._render()

    def big_result(self, score: int, verdict: str):
        color = {"GO": "#15803d", "VALIDATE": "#a16207", "PIVOT": "#b91c1c"}.get(verdict, "#374151")
        self._steps.append(
            f'<div style="text-align:center;padding:0.6rem 0;">'
            f'<span style="font-size:2rem;font-weight:800;color:{color};">{score}/100</span> '
            f'<span style="font-size:1.2rem;font-weight:700;color:{color};">{verdict}</span>'
            f'</div>'
        )
        self._render()


# ---------------------------------------------------------------------------
# Analysis pipeline
# ---------------------------------------------------------------------------

from models.dataclasses import IdeaInput, IdeaReport
from agents.orchestrator import OrchestratorAgent
from agents.market import MarketAgent
from agents.competitors import CompetitorAgent
from agents.customer_pain import CustomerPainAgent
from agents.trends import TrendsAgent
from agents.demand_signals import DemandSignalAgent
from agents.unit_economics import UnitEconomicsAgent
from agents.regulatory import RegulatoryAgent
from agents.scorer import ScorerAgent
from agents.pivot_advisor import PivotAdvisorAgent
from report.pdf_generator import PDFReportGenerator


async def run_analysis(
    idea: IdeaInput,
    config: dict,
    log: ThinkingLog,
    provider: str,
    api_key: str,
    model: str,
) -> IdeaReport:
    from agents.base import build_client

    client = build_client(provider, api_key)
    models = {"orchestrator": model, "research": model, "pivot": model}
    thresholds = config["thresholds"]
    depth = config.get("research_depth", {})

    # 1 — Orchestrator
    log.agent_start("Orchestrator", "Breaking down idea into comprehensive research plan...")
    orchestrator = OrchestratorAgent(client, models["orchestrator"])
    plan = await orchestrator.run(idea)
    log.agent_done("Orchestrator", "Research plan ready — 35+ queries generated")
    log.finding(f"Core problem: {plan.core_problem[:120]}")
    log.finding(f"Target: {plan.target_segment[:120]}")
    for h in plan.key_hypotheses[:4]:
        log.finding(f"Hypothesis: {h[:120]}")

    log.divider()

    # 2-8 — ALL research agents in parallel (7 agents)
    log.agent_start("Market", "Deep market sizing (multi-round, Statista, industry reports)...")
    log.agent_start("Competitors", "Competitor deep-dive (Crunchbase, G2, reviews)...")
    log.agent_start("Pain", "User pain research (Reddit, G2, App Store, HN)...")
    log.agent_start("Trends", "Trends & timing (Google Trends, S-curve, regulatory)...")
    log.agent_start("Demand", "Demand validation (search volume, communities, social)...")
    log.agent_start("Unit Economics", "Pricing & economics (CAC, LTV, monetization)...")
    log.agent_start("Regulatory", "Regulatory scan (compliance, legal risks)...")

    # Run all research agents in parallel with graceful degradation
    from models.dataclasses import (
        MarketData, CompetitorMatrix, CompetitorInfo, PainProfile, PainSignal,
        TimingAnalysis, DemandAnalysis, UnitEconomicsAnalysis, RegulatoryAnalysis,
        PMFScore, PMFAxisScore,
    )

    results = await asyncio.gather(
        MarketAgent(client, models["research"]).run(plan, rounds=depth.get("market_rounds", 2)),
        CompetitorAgent(client, models["research"]).run(plan, rounds=depth.get("competitor_rounds", 2)),
        CustomerPainAgent(client, models["research"]).run(plan, rounds=depth.get("pain_rounds", 2)),
        TrendsAgent(client, models["research"]).run(plan, rounds=depth.get("trends_rounds", 2)),
        DemandSignalAgent(client, models["research"]).run(plan),
        RegulatoryAgent(client, models["research"]).run(plan),
        return_exceptions=True,
    )

    # Unpack with fallback defaults for any failed agent
    def _safe(idx, default):
        r = results[idx]
        if isinstance(r, BaseException):
            log.finding(f"⚠️ Agent error (using defaults): {r}")
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

    # Log results
    log.agent_done("Market", f"TAM: {market_data.tam[:80]}")
    log.finding(f"SAM: {market_data.sam[:80]} · CAGR: {market_data.cagr}")
    if market_data.market_maturity:
        log.finding(f"Market maturity: {market_data.market_maturity}")

    log.agent_done("Competitors", f"Found {len(competitor_data.competitors)} competitors")
    for c in competitor_data.competitors[:4]:
        icon = {"High": "🔴", "Medium": "🟡", "Low": "🟢"}.get(c.threat_level, "⚪")
        extra = f", {c.estimated_revenue}" if c.estimated_revenue else ""
        log.finding(f"{icon} {c.name} — {c.threat_level} threat, {c.funding_total}{extra}")

    log.agent_done("Pain", f"{len(pain_data.pain_signals)} pain signals found")
    for s in pain_data.pain_signals[:3]:
        log.finding(f'"{s.quote}" — {s.source} [{s.journey_stage}]')
    log.finding(f"Severity: {pain_data.pain_severity_score}/10 · Frequency: {pain_data.pain_frequency_score}/10")

    log.agent_done("Trends", f"Timing score: {timing_data.timing_score}/100 · S-curve: {timing_data.s_curve_position}")
    for tw in timing_data.tailwinds[:2]:
        log.finding(f"Tailwind: {tw.get('trend', str(tw))[:100]}")

    log.agent_done("Demand", f"Demand score: {demand_data.demand_score}/100 — {demand_data.demand_trajectory}")
    for cs in demand_data.community_sizes[:2]:
        log.finding(f"Community: {cs.get('community','')} ({cs.get('platform','')}) — {cs.get('size','')}")

    log.agent_done("Regulatory", f"Regulatory score: {regulatory_data.regulatory_score}/100")
    if regulatory_data.legal_risks:
        log.finding(f"{len(regulatory_data.legal_risks)} legal risks identified")

    # Unit economics (needs competitor data)
    try:
        unit_econ_data = await UnitEconomicsAgent(client, models["research"]).run(plan, competitor_data)
    except Exception as e:
        log.finding(f"⚠️ Unit Economics error (using defaults): {e}")
        unit_econ_data = UnitEconomicsAnalysis()
    log.agent_done("Unit Economics", f"Economics score: {unit_econ_data.unit_economics_score}/100")
    if unit_econ_data.estimated_arpu:
        log.finding(f"ARPU: {unit_econ_data.estimated_arpu} · LTV/CAC: {unit_econ_data.ltv_cac_ratio}")

    log.divider()

    # 9 — Scorer (9 axes) — with fallback
    log.agent_start("Scorer", "Calculating PMF score across 9 axes...")
    try:
        scorer = ScorerAgent(client, models["research"])
        pmf_score = await scorer.run(
            plan, market_data, competitor_data, pain_data, timing_data,
            demand=demand_data, unit_economics=unit_econ_data, regulatory=regulatory_data,
        )
    except Exception as e:
        log.finding(f"⚠️ Scorer error (using default scores): {e}")
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
        log.finding(f"{name}: {a.score}/100 (weight {a.weight:.0%})")

    log.agent_done("Scorer", "PMF Score calculated")
    log.big_result(int(pmf_score.weighted_total), pmf_score.verdict)

    # 10 — Pivot (conditional)
    pivot_plan = None
    if pmf_score.weighted_total < thresholds.get("pivot_trigger", 50):
        log.divider()
        log.agent_start("Pivot Advisor", "Score below 50 — generating pivot scenarios...")
        try:
            pivot_agent = PivotAdvisorAgent(client, models["pivot"])
            pivot_plan = await pivot_agent.run(plan, pmf_score, market_data, competitor_data, pain_data)
            log.agent_done("Pivot Advisor", f"{len(pivot_plan.scenarios)} pivot scenarios ready")
            for p in pivot_plan.scenarios[:3]:
                log.finding(f"{p.pivot_type}: {p.hypothesis[:100]}")
        except Exception as e:
            log.finding(f"⚠️ Pivot Advisor error: {e}")
            log.agent_done("Pivot Advisor", "Skipped due to error")

    return IdeaReport(
        idea=idea, search_plan=plan, market=market_data,
        competitors=competitor_data, pain=pain_data, timing=timing_data,
        pmf_score=pmf_score, pivot_plan=pivot_plan,
        demand=demand_data, unit_economics=unit_econ_data, regulatory=regulatory_data,
    )


# ---------------------------------------------------------------------------
# Result rendering
# ---------------------------------------------------------------------------

def render_results(report: IdeaReport):
    sc = report.pmf_score
    v = sc.verdict.lower()

    # Hero score
    st.markdown(
        f'<div class="score-box sb-{v}">'
        f'<div class="num">{sc.weighted_total:.0f}</div>'
        f'<div class="vrd">{sc.verdict}</div></div>',
        unsafe_allow_html=True,
    )
    st.markdown(f"**{sc.summary}**")

    # PDF download
    output_dir = CONFIG.get("output", {}).get("dir", "./reports")
    gen = PDFReportGenerator(output_dir)
    pdf_path = gen.generate(report)
    with open(pdf_path, "rb") as f:
        st.download_button("Download full PDF report", f.read(),
                           file_name=os.path.basename(pdf_path), mime="application/pdf",
                           use_container_width=True)

    # Tabs
    tab_names = ["Score", "Market", "Demand", "Competitors", "Pain", "Trends", "Economics", "Regulatory", "Plan"]
    if report.pivot_plan:
        tab_names.append("Pivots")
    tabs = st.tabs(tab_names)

    # --- Score ---
    with tabs[0]:
        import matplotlib; matplotlib.use("Agg")
        from report.charts import create_radar_chart
        axes_data = [{"axis": a.axis, "score": a.score} for a in sc.axes]
        tmp = os.path.join(tempfile.mkdtemp(), "r.png")
        create_radar_chart(axes_data, tmp)
        c1, c2 = st.columns([1, 1])
        with c1:
            st.image(tmp, use_container_width=True)
        with c2:
            for a in sc.axes:
                st.markdown(f"**{a.axis.replace('_',' ').title()}** — `{a.score}` (w:{a.weight:.0%})")
                st.progress(a.score / 100)
                st.caption(a.reasoning[:160])

    # --- Market ---
    with tabs[1]:
        from report.charts import create_tam_sam_som_chart
        tmp2 = os.path.join(tempfile.mkdtemp(), "t.png")
        create_tam_sam_som_chart(report.market.tam_value, report.market.sam_value, report.market.som_value, tmp2)
        c1, c2 = st.columns([1, 1])
        with c1:
            st.image(tmp2, use_container_width=True)
        with c2:
            st.metric("TAM", report.market.tam[:70])
            st.metric("SAM", report.market.sam[:70])
            st.metric("SOM", report.market.som[:70])
            st.metric("CAGR", report.market.cagr)
        st.markdown(f"**Geography:** {report.market.geography}")
        st.markdown(f"**Demographics:** {report.market.demographics}")
        if report.market.key_facts:
            st.markdown("#### Key Facts")
            for fact in report.market.key_facts[:6]:
                st.markdown(f"- {fact.get('fact', str(fact))}")

    # --- Demand ---
    with tabs[2]:
        if report.demand:
            from report.charts import create_demand_heatmap
            c1, c2, c3 = st.columns(3)
            c1.metric("Demand Score", f"{report.demand.demand_score}/100")
            c2.metric("Trajectory", report.demand.demand_trajectory)
            c3.metric("Social Buzz", f"{report.demand.social_buzz_score}/10" if hasattr(report.demand, 'social_buzz_score') else "—")

            if report.demand.social_media_signals:
                st.markdown("#### Search & Social Signals")
                tmp_d = os.path.join(tempfile.mkdtemp(), "demand.png")
                create_demand_heatmap(report.demand.social_media_signals, tmp_d)
                st.image(tmp_d, use_container_width=True)

            if report.demand.community_sizes:
                st.markdown("#### Communities")
                for cs in report.demand.community_sizes[:6]:
                    st.markdown(f"**{cs.get('community','')}** ({cs.get('platform','')}) — {cs.get('size','')}")

            if report.demand.google_trends_summary:
                st.markdown("#### Google Trends Summary")
                st.info(report.demand.google_trends_summary)
        else:
            st.info("Demand analysis not available for this report.")

    # --- Competitors ---
    with tabs[3]:
        if report.competitors.competitors:
            from report.charts import create_competitor_scatter, create_blue_ocean_canvas
            cd = [{"name": c.name, "value_score": c.value_score, "reach_score": c.reach_score, "threat_level": c.threat_level} for c in report.competitors.competitors]
            tmp3 = os.path.join(tempfile.mkdtemp(), "c.png")
            create_competitor_scatter(cd, tmp3)
            st.image(tmp3, use_container_width=True)
            for c in report.competitors.competitors:
                ti = {"High": "🔴", "Medium": "🟡", "Low": "🟢"}.get(c.threat_level, "⚪")
                extra_info = ""
                if c.estimated_revenue:
                    extra_info += f" | Rev: {c.estimated_revenue}"
                if c.employee_count:
                    extra_info += f" | Team: {c.employee_count}"
                with st.expander(f"{ti} **{c.name}** — {c.threat_level} | {c.funding_total}{extra_info}"):
                    st.markdown(f"**Segment:** {c.target_segment}  \n**Pricing:** {c.pricing_model}  \n**Differentiator:** {c.key_differentiator}")
                    if c.web_traffic_estimate:
                        st.markdown(f"**Traffic:** {c.web_traffic_estimate} · **Growth:** {c.growth_trajectory}")
                    if c.top_3_weaknesses:
                        st.markdown("**Weaknesses:**")
                        for w in c.top_3_weaknesses:
                            st.markdown(f"- {w}")

            # Blue Ocean Canvas
            if report.competitors.blue_ocean_canvas:
                st.markdown("#### Blue Ocean Strategy Canvas")
                tmp_bo = os.path.join(tempfile.mkdtemp(), "bo.png")
                create_blue_ocean_canvas(report.competitors.blue_ocean_canvas, tmp_bo)
                st.image(tmp_bo, use_container_width=True)

            # Strategic Groups
            if report.competitors.strategic_groups:
                st.markdown("#### Strategic Groups")
                for sg in report.competitors.strategic_groups:
                    members = ", ".join(sg.get("members", []))
                    st.markdown(f"**{sg.get('group_name', '')}:** {members} — *{sg.get('positioning', '')}*")

            # Funding Landscape
            if report.competitors.funding_landscape:
                fl = report.competitors.funding_landscape
                st.markdown("#### Funding Landscape")
                fc1, fc2, fc3 = st.columns(3)
                fc1.metric("Total in Space", str(fl.get("total_in_space", "—")))
                fc2.metric("Avg Round", str(fl.get("avg_round_size", "—")))
                fc3.metric("Recent Rounds", str(fl.get("recent_rounds_count", "—")))

        errc = report.competitors.errc
        st.markdown("#### ERRC Strategy Canvas")
        html = '<div class="errc">'
        for k, lbl, cls in [("eliminate","Eliminate","e-el"),("reduce","Reduce","e-re"),("raise","Raise","e-ra"),("create","Create","e-cr")]:
            items = errc.get(k, [])
            ih = "".join(f"<div>• {i}</div>" for i in items) if items else "<div style='color:#999'>—</div>"
            html += f'<div class="{cls}"><strong>{lbl}</strong>{ih}</div>'
        html += "</div>"
        st.markdown(html, unsafe_allow_html=True)

    # --- Pain ---
    with tabs[4]:
        c1, c2, c3 = st.columns(3)
        c1.metric("Severity", f"{report.pain.pain_severity_score}/10")
        c2.metric("Frequency", f"{report.pain.pain_frequency_score}/10")
        c3.metric("Social Buzz", f"{report.pain.social_buzz_score}/10")

        # Pain Journey Map
        if report.pain.journey_pain_map:
            from report.charts import create_pain_journey
            st.markdown("#### Customer Pain Journey")
            tmp_pj = os.path.join(tempfile.mkdtemp(), "pj.png")
            create_pain_journey(report.pain.journey_pain_map, tmp_pj)
            st.image(tmp_pj, use_container_width=True)

        st.markdown("#### Pain Quotes")
        for s in report.pain.pain_signals[:8]:
            stage_badge = f" `{s.journey_stage}`" if s.journey_stage else ""
            intensity = f" ({s.sentiment_intensity}/10)" if s.sentiment_intensity else ""
            st.markdown(f'<div class="pq">"{s.quote}"</div><div class="ps">{s.source} · {s.frequency_signal}{stage_badge}{intensity}</div>', unsafe_allow_html=True)

        if report.pain.demand_signals:
            st.markdown("#### Demand Signals")
            for ds in report.pain.demand_signals[:5]:
                st.markdown(f"- **{ds.get('signal','')}** ({ds.get('source','')}) — {ds.get('volume_indicator','')}")

        if report.pain.top_workarounds:
            st.markdown("#### Workarounds")
            for w in report.pain.top_workarounds:
                st.markdown(f"- {w}")
        st.markdown("#### Willingness to Pay")
        st.info(report.pain.wtp_summary)

    # --- Trends ---
    with tabs[5]:
        c1, c2, c3 = st.columns(3)
        c1.metric("Timing Score", f"{report.timing.timing_score}/100")
        c2.metric("S-Curve", report.timing.s_curve_position)
        c3.metric("Tech Readiness", report.timing.technology_readiness)
        st.success(f"**Why now?** {report.timing.why_now}")

        c1, c2 = st.columns(2)
        with c1:
            st.markdown("#### Tailwinds")
            for tw in report.timing.tailwinds:
                st.markdown(f"**{tw.get('trend','—')}**"); st.caption(tw.get("impact", tw.get("evidence","")))
        with c2:
            st.markdown("#### Headwinds")
            for hw in report.timing.headwinds:
                st.markdown(f"**{hw.get('trend','—')}**"); st.caption(hw.get("impact", hw.get("severity","")))

        if report.timing.google_trends_signals:
            st.markdown("#### Google Trends Signals")
            for gt in report.timing.google_trends_signals:
                direction_icon = {"rising": "📈", "stable": "➡️", "declining": "📉"}.get(str(gt.get("direction", "")).lower(), "➡️")
                st.markdown(f"{direction_icon} **{gt.get('keyword','')}** — {gt.get('direction','')} (peak: {gt.get('peak_period','')})")

        if report.timing.regulatory_catalysts:
            st.markdown("#### Regulatory Catalysts")
            for rc in report.timing.regulatory_catalysts:
                impact_icon = "✅" if str(rc.get("impact", "")).lower() == "positive" else "⚠️"
                st.markdown(f"{impact_icon} **{rc.get('regulation','')}** — {rc.get('impact','')} ({rc.get('timeline','')})")

        if report.timing.market_events_timeline:
            st.markdown("#### Market Events Timeline")
            for me in report.timing.market_events_timeline:
                st.markdown(f"📅 **{me.get('date','')}** — {me.get('event','')} ({me.get('impact','')})")

        if report.timing.adjacent_analogies:
            st.markdown("#### Analogies")
            for a in report.timing.adjacent_analogies:
                st.markdown(f"**{a.get('company','—')}:** {a.get('analogy','')} — *{a.get('lesson','')}*")

    # --- Economics ---
    with tabs[6]:
        if report.unit_economics:
            from report.charts import create_monetization_chart
            c1, c2, c3 = st.columns(3)
            c1.metric("Economics Score", f"{report.unit_economics.unit_economics_score}/100")
            c2.metric("ARPU", report.unit_economics.estimated_arpu or "—")
            c3.metric("LTV/CAC", report.unit_economics.ltv_cac_ratio or "—")

            c1, c2 = st.columns(2)
            c1.metric("CAC Range", report.unit_economics.estimated_cac_range or "—")
            c2.metric("LTV Range", report.unit_economics.estimated_ltv_range or "—")

            if report.unit_economics.monetization_models:
                st.markdown("#### Monetization Model Fit")
                tmp_mon = os.path.join(tempfile.mkdtemp(), "mon.png")
                create_monetization_chart(report.unit_economics.monetization_models, tmp_mon)
                st.image(tmp_mon, use_container_width=True)

            if report.unit_economics.pricing_benchmarks:
                st.markdown("#### Pricing Benchmarks")
                for pb in report.unit_economics.pricing_benchmarks[:6]:
                    st.markdown(f"- **{pb.get('competitor','')}:** {pb.get('model','')} — {pb.get('price_range','')}")

            if report.unit_economics.revenue_projection:
                rp = report.unit_economics.revenue_projection
                st.markdown("#### Revenue Projection")
                rc1, rc2, rc3 = st.columns(3)
                rc1.metric("Year 1", str(rp.get("year1", "—")))
                rc2.metric("Year 2", str(rp.get("year2", "—")))
                rc3.metric("Year 3", str(rp.get("year3", "—")))
                if rp.get("assumptions"):
                    st.caption(f"Assumptions: {rp['assumptions']}")
        else:
            st.info("Unit economics analysis not available for this report.")

    # --- Regulatory ---
    with tabs[7]:
        if report.regulatory:
            c1, c2 = st.columns(2)
            c1.metric("Regulatory Score", f"{report.regulatory.regulatory_score}/100")
            c2.metric("Legal Risks", str(len(report.regulatory.legal_risks)))

            if report.regulatory.regulations:
                st.markdown("#### Key Regulations")
                for reg in report.regulatory.regulations[:8]:
                    impact_color = {"high": "🔴", "medium": "🟡", "low": "🟢"}.get(str(reg.get("impact", "")).lower(), "⚪")
                    st.markdown(f"{impact_color} **{reg.get('name','')}** ({reg.get('jurisdiction','')}) — {reg.get('impact','')} impact · {reg.get('status','')}")

            if report.regulatory.compliance_requirements:
                st.markdown("#### Compliance Requirements")
                for cr in report.regulatory.compliance_requirements[:8]:
                    st.markdown(f"- {cr}")

            if report.regulatory.legal_risks:
                st.markdown("#### Legal Risks")
                for lr in report.regulatory.legal_risks[:6]:
                    sev = lr.get("severity", 5)
                    sev_icon = "🔴" if sev >= 7 else "🟡" if sev >= 4 else "🟢"
                    st.markdown(f"{sev_icon} **{lr.get('risk','')}** (severity: {sev}/10)")
                    st.caption(f"Mitigation: {lr.get('mitigation','')}")

            if report.regulatory.data_privacy_requirements:
                st.markdown("#### Data Privacy")
                for dp in report.regulatory.data_privacy_requirements[:6]:
                    st.markdown(f"- {dp}")

            if report.regulatory.industry_licenses:
                st.markdown("#### Industry Licenses")
                for il in report.regulatory.industry_licenses[:6]:
                    st.markdown(f"- {il}")
        else:
            st.info("Regulatory analysis not available for this report.")

    # --- Plan ---
    with tabs[8]:
        from report.charts import create_risk_matrix, create_readiness_scorecard
        st.markdown("#### Hypotheses to Validate")
        for i, h in enumerate(report.search_plan.key_hypotheses, 1):
            st.markdown(f"{i}. {h}")

        # Risk matrix
        if report.search_plan.key_hypotheses:
            st.markdown("#### Hypothesis Risk Matrix")
            tmp_rm = os.path.join(tempfile.mkdtemp(), "rm.png")
            create_risk_matrix(report.search_plan.key_hypotheses, tmp_rm)
            st.image(tmp_rm, use_container_width=True)

        # Readiness scorecard
        scorecard = {}
        for a in report.pmf_score.axes:
            scorecard[a.axis] = a.score
        if scorecard:
            st.markdown("#### Market Readiness Scorecard")
            tmp_sc = os.path.join(tempfile.mkdtemp(), "sc.png")
            create_readiness_scorecard(scorecard, tmp_sc)
            st.image(tmp_sc, use_container_width=True)

        if report.competitors.whitespace_opportunities:
            st.markdown("#### Whitespace Opportunities")
            for o in report.competitors.whitespace_opportunities:
                st.markdown(f"- {o}")

    # --- Pivots ---
    if report.pivot_plan:
        with tabs[9]:
            st.markdown(f"**{report.pivot_plan.reasoning}**")
            for i, p in enumerate(report.pivot_plan.scenarios, 1):
                st.markdown(
                    f'<div class="pvt"><h4>#{i} {p.pivot_type.replace("_"," ").title()} '
                    f'(confidence: {p.confidence_score}/100)</h4>'
                    f'<p><b>Hypothesis:</b> {p.hypothesis}</p>'
                    f'<p><b>Experiment:</b> {p.validation_experiment}</p>'
                    f'<p><b>Success:</b> {p.success_metric} · <b>Timeline:</b> {p.timeline_days}d · <b>Risk:</b> {p.risk}</p>'
                    f'<p><b>Inspiration:</b> {p.company_inspiration}</p></div>',
                    unsafe_allow_html=True)


# ---------------------------------------------------------------------------
# SIDEBAR
# ---------------------------------------------------------------------------

with st.sidebar:
    st.markdown("### Settings")

    # 1. Provider selector
    provider_ids = list(PROVIDERS.keys())
    provider_labels = [PROVIDERS[p]["label"] for p in provider_ids]
    current_provider_idx = provider_ids.index(st.session_state.provider) if st.session_state.provider in provider_ids else 0

    new_provider_idx = st.radio(
        "Provider",
        range(len(provider_ids)),
        index=current_provider_idx,
        format_func=lambda i: provider_labels[i],
    )
    new_provider = provider_ids[new_provider_idx]

    # Reset key and model when switching provider — a key is useless across providers
    if new_provider != st.session_state.provider:
        st.session_state.provider = new_provider
        st.session_state.api_key = ""
        st.session_state.key_validated = False
        st.session_state.selected_model = PROVIDERS[new_provider]["models"][0]["id"]
        st.rerun()

    provider_cfg = PROVIDERS[st.session_state.provider]

    # 2. API key input
    st.markdown(f"[Where to get a key]({provider_cfg['key_url']})", unsafe_allow_html=False)
    key_input = st.text_input(
        "API Key",
        value=st.session_state.api_key,
        type="password",
        placeholder=provider_cfg["key_placeholder"],
        help="Ключ не сохраняется на сервере. Живёт только в твоей сессии браузера.",
    )
    if key_input != st.session_state.api_key:
        st.session_state.api_key = key_input
        st.session_state.key_validated = False

    # 3. Validate key button
    if st.session_state.api_key:
        if st.button("Проверить ключ", use_container_width=True):
            with st.spinner("Проверяю..."):
                ok, msg = validate_api_key(st.session_state.provider, st.session_state.api_key)
            if ok:
                st.session_state.key_validated = True
                st.success(msg)
            else:
                st.session_state.key_validated = False
                st.error(msg)
        elif st.session_state.key_validated:
            st.success("Ключ валиден")

    # 4. Model selector (filtered by provider)
    models_for_provider = provider_cfg["models"]
    model_labels = []
    for m in models_for_provider:
        tier_badge = {"recommended": "⭐", "premium": "💎", "budget": "💚", "deprecated": "⚠️"}.get(m["tier"], "")
        model_labels.append(f"{tier_badge} {m['name']} — {m['description']}")

    current_idx = 0
    for i, m in enumerate(models_for_provider):
        if m["id"] == st.session_state.selected_model:
            current_idx = i
            break

    selected_idx = st.selectbox(
        "Research model",
        range(len(models_for_provider)),
        index=current_idx,
        format_func=lambda i: model_labels[i],
    )
    st.session_state.selected_model = models_for_provider[selected_idx]["id"]

    st.caption(f"Using: `{st.session_state.selected_model}`")

    st.divider()

    if st.button("New conversation", use_container_width=True):
        st.session_state.messages = []
        st.session_state.idea_data = None
        st.session_state.report = None
        st.session_state.phase = "chat"
        st.rerun()


# ---------------------------------------------------------------------------
# MAIN CHAT
# ---------------------------------------------------------------------------

st.markdown("# 🎯 PMF Agent")
st.caption("Describe your startup idea — I'll ask a few questions, then run deep PMF analysis")
st.divider()

# Welcome
if not st.session_state.messages:
    welcome = {
        "role": "assistant",
        "content": "Hey! 👋 Tell me about your startup idea — what are you building and for whom?\n\nJust describe it however you want, like you'd tell a friend. I'll ask a few quick questions if I need more context, and then run a full PMF analysis with real market data."
    }
    st.session_state.messages.append(welcome)

# Render history
for msg in st.session_state.messages:
    with st.chat_message(msg["role"]):
        if msg.get("type") == "thinking":
            st.markdown(msg["content"], unsafe_allow_html=True)
        elif msg.get("type") == "results":
            if st.session_state.report:
                render_results(st.session_state.report)
        else:
            st.markdown(msg["content"])

# Block chat input until an API key is entered
if not st.session_state.api_key:
    st.info("Введи API-ключ в сайдбаре слева, чтобы начать. Ключ не сохраняется на сервере — живёт только в твоей сессии.")

# Chat input
if prompt := st.chat_input(
    "Describe your idea..." if st.session_state.phase == "chat" else "Ask a follow-up question...",
    disabled=not st.session_state.api_key,
):

    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)

    provider = st.session_state.provider
    api_key = st.session_state.api_key
    model = st.session_state.selected_model

    if st.session_state.phase == "chat":
        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                convo = [m for m in st.session_state.messages if m["role"] in ("user", "assistant") and m.get("type") is None]
                try:
                    response_text = chat_with_intake(convo, provider, api_key, model)
                except Exception as e:
                    st.error(f"Не удалось получить ответ от {provider}: {e}")
                    st.session_state.messages.pop()  # roll back user msg to let retry
                    st.stop()

            idea_data = parse_ready_marker(response_text)
            display_text = get_display_text(response_text)

            st.markdown(display_text)
            st.session_state.messages.append({"role": "assistant", "content": display_text})

            if idea_data:
                st.session_state.idea_data = idea_data
                st.session_state.phase = "analyzing"
                st.rerun()

    elif st.session_state.phase == "done":
        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                report = st.session_state.report
                report_context = ""
                if report:
                    report_context = f"""
PMF analysis results:
- Idea: {report.idea.title}
- PMF Score: {report.pmf_score.weighted_total:.0f}/100 ({report.pmf_score.verdict})
- Summary: {report.pmf_score.summary}
- Market: TAM={report.market.tam}, SAM={report.market.sam}, CAGR={report.market.cagr}
- Competitors: {', '.join(c.name for c in report.competitors.competitors[:5])}
- Pain severity: {report.pain.pain_severity_score}/10, frequency: {report.pain.pain_frequency_score}/10
- Timing: {report.timing.timing_score}/100 — {report.timing.why_now[:200]}
"""
                followup_system = (
                    "You are a PMF research assistant. Answer follow-up questions about the results. "
                    "Be concise and actionable. Respond in the same language as the user.\n\n"
                    + report_context
                )
                convo = [m for m in st.session_state.messages if m["role"] in ("user", "assistant") and m.get("type") is None]
                # Reuse chat_with_intake path by temporarily prepending a system-style message.
                # Simpler: inline per-provider follow-up.
                try:
                    if provider == "gemini":
                        client = genai.Client(api_key=api_key)
                        contents = [genai_types.Content(role="user" if m["role"] == "user" else "model", parts=[genai_types.Part(text=m["content"])]) for m in convo]
                        resp = client.models.generate_content(
                            model=model,
                            contents=contents,
                            config=genai_types.GenerateContentConfig(system_instruction=followup_system),
                        )
                        answer = resp.text or "Could you rephrase?"
                    elif provider == "anthropic":
                        import anthropic
                        client = anthropic.Anthropic(api_key=api_key)
                        conv = [{"role": ("user" if m["role"] == "user" else "assistant"), "content": m["content"]} for m in convo]
                        resp = client.messages.create(model=model, max_tokens=2048, system=followup_system, messages=conv)
                        answer = ""
                        for block in resp.content:
                            if getattr(block, "type", None) == "text":
                                answer = block.text
                                break
                        answer = answer or "Could you rephrase?"
                    elif provider == "openai":
                        from openai import OpenAI
                        client = OpenAI(api_key=api_key)
                        conv = [{"role": "system", "content": followup_system}]
                        for m in convo:
                            conv.append({"role": ("user" if m["role"] == "user" else "assistant"), "content": m["content"]})
                        resp = client.chat.completions.create(model=model, messages=conv, max_completion_tokens=2048)
                        answer = resp.choices[0].message.content or "Could you rephrase?"
                    else:
                        answer = f"Unknown provider: {provider}"
                except Exception as e:
                    answer = f"Ошибка: {e}"
            st.markdown(answer)
            st.session_state.messages.append({"role": "assistant", "content": answer})


# ---------------------------------------------------------------------------
# Auto-trigger analysis
# ---------------------------------------------------------------------------

if st.session_state.phase == "analyzing" and st.session_state.idea_data:
    data = st.session_state.idea_data
    idea = IdeaInput(
        id=f"idea_{uuid.uuid4().hex[:6]}",
        title=data.get("title", "Untitled"),
        description=data.get("description", data.get("title", "")),
        market=data.get("market", "Global"),
        stage=data.get("stage", "idea"),
        founder=data.get("founder", "Founder"),
    )

    with st.chat_message("assistant"):
        provider = st.session_state.provider
        api_key = st.session_state.api_key
        model_name = st.session_state.selected_model
        st.markdown(
            f"**Starting PMF analysis for:** *{idea.title}*\n\n"
            f"🌍 {idea.market} · 📍 {idea.stage} · 👤 {idea.founder} · "
            f"🤖 `{PROVIDERS[provider]['label']} / {model_name}`"
        )

        log_container = st.empty()
        log = ThinkingLog(log_container)

        try:
            report = asyncio.run(run_analysis(idea, CONFIG, log, provider, api_key, model_name))
            st.session_state.report = report

            # Save thinking HTML
            thinking_html = '<div class="thinking-block">' + "\n".join(log._steps) + "</div>"
            st.session_state.messages.append({"role": "assistant", "content": thinking_html, "type": "thinking"})

        except Exception as e:
            st.error("Analysis encountered an error. Please try again or select a different model.")
            with st.expander("Technical details"):
                import traceback
                st.code(traceback.format_exc())
            st.session_state.phase = "chat"
            st.stop()

    with st.chat_message("assistant"):
        render_results(report)
        st.session_state.messages.append({"role": "assistant", "content": "", "type": "results"})

    st.session_state.phase = "done"
    st.session_state.messages.append({
        "role": "assistant",
        "content": "Analysis complete! Ask me anything — about competitors, market data, next steps, pivot ideas, or strategy."
    })
    st.rerun()
