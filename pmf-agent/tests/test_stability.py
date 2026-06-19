"""Regression tests for the agent-stability fixes.

Covers the three failure modes that made "PMF-agent never works" for users:
  1. call_agent must FAIL FAST on non-retryable provider errors (bad key /
     unknown model) instead of burning ~8s of backoff, and must still RETRY
     transient ones (429 / 529 / 5xx).
  2. The PDF must survive raw LLM text containing &, <, > (ReportLab parses
     Paragraph text as XML) and a fully-empty/defaulted report.
  3. The OpenAI caller must never branch on model name for max_tokens.

Runnable with pytest OR directly: `python tests/test_stability.py`.
"""

import os
import sys
import asyncio
import tempfile

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import agents.base as base
from agents.base import _as_config_error, LLMConfigError, is_openai
from report.pdf_generator import _safe_markup, PDFReportGenerator
from models.dataclasses import (
    IdeaInput, SearchPlan, MarketData, CompetitorMatrix, CompetitorInfo,
    PainProfile, PainSignal, TimingAnalysis, DemandAnalysis,
    UnitEconomicsAnalysis, RegulatoryAnalysis, PMFAxisScore, PMFScore, IdeaReport,
)


class _HttpErr(Exception):
    def __init__(self, status):
        super().__init__(f"http {status}")
        self.status_code = status


# ---------------------------------------------------------------------------
# 1. Error classification
# ---------------------------------------------------------------------------
def test_non_retryable_statuses_become_config_errors():
    for status in (400, 401, 403, 404, 422):
        err = _as_config_error(_HttpErr(status))
        assert isinstance(err, LLMConfigError)
        assert err.status == status


def test_transient_statuses_are_retryable():
    # 529 = Anthropic overloaded — must be retried, not treated as fatal.
    for status in (429, 529, 500, 502, 503, 504):
        assert _as_config_error(_HttpErr(status)) is None


def test_json_parse_errors_are_retryable():
    assert _as_config_error(ValueError("No valid JSON found")) is None


def test_call_agent_fast_fails_on_bad_key():
    sleeps = []

    async def fake_sleep(s):
        sleeps.append(s)

    async def boom(*a, **k):
        raise _HttpErr(401)

    orig_sleep, orig_openai = base.asyncio.sleep, base._call_openai
    base.asyncio.sleep, base._call_openai = fake_sleep, boom
    try:
        raised = None
        try:
            asyncio.new_event_loop().run_until_complete(
                base.call_agent("client", "gpt-5", "sys", "usr")
            )
        except Exception as e:  # noqa: BLE001
            raised = e
        assert isinstance(raised, LLMConfigError), raised
        assert sleeps == [], f"should not sleep on a bad key, slept {sleeps}"
    finally:
        base.asyncio.sleep, base._call_openai = orig_sleep, orig_openai


def test_call_agent_retries_transient():
    sleeps = []

    async def fake_sleep(s):
        sleeps.append(s)

    async def boom(*a, **k):
        raise _HttpErr(503)

    orig_sleep, orig_openai = base.asyncio.sleep, base._call_openai
    base.asyncio.sleep, base._call_openai = fake_sleep, boom
    try:
        try:
            asyncio.new_event_loop().run_until_complete(
                base.call_agent("client", "gpt-5", "sys", "usr", max_retries=3, base_delay=0.01)
            )
        except LLMConfigError:  # pragma: no cover
            raise AssertionError("transient 503 misclassified as config error")
        except Exception:
            pass
        assert len(sleeps) == 2, f"expected 2 backoff sleeps, got {sleeps}"
    finally:
        base.asyncio.sleep, base._call_openai = orig_sleep, orig_openai


def test_openai_model_routing():
    assert is_openai("gpt-5.4") and is_openai("o3-mini") and is_openai("codex-mini-latest")
    assert not is_openai("claude-opus-4-7") and not is_openai("gemini-2.5-flash")


# ---------------------------------------------------------------------------
# 2. PDF sanitization + generation
# ---------------------------------------------------------------------------
def test_safe_markup_escapes_raw_but_keeps_tags():
    assert _safe_markup("AT&T < 30 > 5") == "AT&amp;T &lt; 30 &gt; 5"
    assert _safe_markup("<b>x</b> & <script>") == "<b>x</b> &amp; &lt;script&gt;"
    # font tag with attributes is preserved verbatim
    assert _safe_markup('<font color="#fff"><b>GO</b></font>') == '<font color="#fff"><b>GO</b></font>'


_BAD = 'Q&A <b>x</b> users < 30 & p > $5M <script>alert(1)</script> AT&T'


def _make_report(empty: bool) -> IdeaReport:
    idea = IdeaInput(id="t1", title=_BAD, description=_BAD, market=_BAD, stage="idea", founder=_BAD)
    plan = SearchPlan(
        core_problem=_BAD, target_segment=_BAD, proposed_solution=_BAD, market_context=_BAD,
        key_hypotheses=[_BAD], market_queries=[_BAD], competitor_queries=[_BAD],
        pain_queries=[_BAD], trend_queries=[_BAD],
    )
    if empty:
        market = MarketData(tam="N/A", sam="N/A", som="N/A", tam_value=0, sam_value=0, som_value=0,
                            cagr="N/A", geography="N/A", demographics="N/A", key_facts=[], sources=[])
        comps = CompetitorMatrix(competitors=[], errc={"eliminate": [], "reduce": [], "raise": [], "create": []},
                                 overall_threat="Unknown", whitespace_opportunities=[])
        pain = PainProfile(pain_signals=[], pain_severity_score=5, pain_frequency_score=5,
                           top_workarounds=[], wtp_summary="No data")
        timing = TimingAnalysis(tailwinds=[], headwinds=[], why_now="No data", adjacent_analogies=[], timing_score=50)
        axes = []  # empty axes must not crash the radar
    else:
        market = MarketData(tam=_BAD, sam=_BAD, som=_BAD, tam_value=10, sam_value=5, som_value=1,
                            cagr="20%", geography=_BAD, demographics=_BAD,
                            key_facts=[{"fact": _BAD, "source": _BAD}], sources=[_BAD])
        comps = CompetitorMatrix(
            competitors=[CompetitorInfo(name=_BAD, founded_year=2020, funding_total=_BAD, latest_round=_BAD,
                                        target_segment=_BAD, pricing_model=_BAD, key_differentiator=_BAD,
                                        top_3_weaknesses=[_BAD], threat_level="High", threat_reasoning=_BAD)],
            errc={"eliminate": [_BAD], "reduce": [_BAD], "raise": [_BAD], "create": [_BAD]},
            overall_threat=_BAD, whitespace_opportunities=[_BAD])
        pain = PainProfile(pain_signals=[PainSignal(quote=_BAD, source=_BAD, frequency_signal=_BAD,
                                                    current_workaround=_BAD, wtp_signal=_BAD)],
                           pain_severity_score=7, pain_frequency_score=6, top_workarounds=[_BAD], wtp_summary=_BAD)
        timing = TimingAnalysis(tailwinds=[{"trend": _BAD, "impact": _BAD}], headwinds=[],
                                why_now=_BAD, adjacent_analogies=[], timing_score=65)
        axes = [PMFAxisScore(axis="market_size", score=70, weight=1.0, reasoning=_BAD)]
    score = PMFScore(axes=axes, weighted_total=50, verdict="VALIDATE", summary=_BAD)
    return IdeaReport(idea=idea, search_plan=plan, market=market, competitors=comps,
                      pain=pain, timing=timing, pmf_score=score,
                      demand=DemandAnalysis(), unit_economics=UnitEconomicsAnalysis(),
                      regulatory=RegulatoryAnalysis())


def test_pdf_survives_adversarial_and_empty():
    out = tempfile.mkdtemp()
    gen = PDFReportGenerator(output_dir=out)
    for empty in (False, True):
        path = gen.generate(_make_report(empty))
        assert os.path.getsize(path) > 1000, f"empty={empty} produced a too-small PDF"


if __name__ == "__main__":
    failures = 0
    for name, fn in sorted(globals().items()):
        if name.startswith("test_") and callable(fn):
            try:
                fn()
                print(f"PASS {name}")
            except Exception as e:  # noqa: BLE001
                failures += 1
                print(f"FAIL {name}: {type(e).__name__}: {e}")
    print(f"\n{'ALL PASSED' if not failures else f'{failures} FAILED'}")
    sys.exit(1 if failures else 0)
