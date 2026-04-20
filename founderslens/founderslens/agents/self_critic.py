"""Agent 13 — Self-Critic.

Scores research quality 0-100 overall + per section. Flags weak sections and
manual verification points. Output surfaces at the TOP of the report so the
founder sees confidence level before reading findings.
"""

from __future__ import annotations

import logging

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import QualityScore, ResearchState

log = logging.getLogger(__name__)


def _state_audit(state: ResearchState) -> str:
    """Compact audit summary for the critic — counts, fills, confidence distribution."""
    lines = []
    ms = state.market_size
    if ms:
        conf_counts = {"HIGH": 0, "MEDIUM": 0, "LOW": 0, "UNAVAILABLE": 0}
        for c in ms.why_now + ms.claims:
            conf_counts[c.confidence.value] = conf_counts.get(c.confidence.value, 0) + 1
        lines.append(
            f"market: tam={bool(ms.tam_usd)}, sam={bool(ms.sam_usd)}, som={bool(ms.som_usd)}, "
            f"cagr={ms.cagr_pct}, why_now={len(ms.why_now)}, total_claims_conf={conf_counts}"
        )
    tr = state.trends
    if tr:
        lines.append(
            f"trends: points={len(tr.google_trends)} "
            f"directions={[t.direction for t in tr.google_trends]} · "
            f"cultural={len(tr.cultural_signals)}, academic={len(tr.academic_signals)}"
        )
    gy = state.graveyard
    if gy:
        pestel_filled = sum(1 for v in gy.pestel.values() if v)
        lines.append(
            f"graveyard: failed={len(gy.failed_startups)}, pestel_filled={pestel_filled}/6, "
            f"adjacent={'yes' if gy.adjacent_evolution else 'no'}"
        )
    if state.competitors:
        cu = state.competitors
        segs = {}
        for c in cu.all_competitors:
            segs[c.segment or "?"] = segs.get(c.segment or "?", 0) + 1
        lines.append(f"competitors: total={len(cu.all_competitors)}, segments={segs}, top_deep={len(cu.top_deep_dive)}")
    if state.deep_competitors:
        m_filled = sum(1 for dc in state.deep_competitors if dc.marketing)
        has_creatives = sum(1 for dc in state.deep_competitors if dc.marketing and dc.marketing.top_creatives)
        has_vp = sum(1 for dc in state.deep_competitors if dc.marketing and dc.marketing.value_props)
        lines.append(
            f"marketing: profiles={m_filled}/{len(state.deep_competitors)}, "
            f"with_creatives={has_creatives}, with_value_props={has_vp}"
        )
    if state.strategy:
        s = state.strategy
        lines.append(
            f"strategy: niches={len(s.niches)}, porters={len(s.porters)}, moats={len(s.moats)}, "
            f"tech_feasibility={'yes' if s.tech_feasibility else 'no'}"
        )
    if state.verdict:
        v = state.verdict
        lines.append(
            f"verdict: decision={v.decision}, risks={len(v.top_3_risks)}, "
            f"opps={len(v.top_3_opportunities)}, actions={len(v.action_items)}"
        )
    return "\n".join(lines)


class SelfCriticAgent(Agent[QualityScore]):
    name = "self_critic"
    phase = "synthesis"

    async def run(self, state: ResearchState) -> QualityScore:
        prompt_path = config.PROMPTS_DIR / f"self_critic.{state.language}.md"
        if not prompt_path.exists():
            prompt_path = config.PROMPTS_DIR / "self_critic.ru.md"
        prompt = prompt_path.read_text(encoding="utf-8")

        audit = _state_audit(state)
        user = (
            f"## Audit резюме\n{audit}\n\n"
            f"## Strategy (excerpt)\n{state.strategy.model_dump_json()[:4000] if state.strategy else 'n/a'}\n\n"
            f"## Verdict (excerpt)\n{state.verdict.model_dump_json()[:3000] if state.verdict else 'n/a'}\n\n"
            f"Оцени качество по секциям и выдай QualityScore."
        )
        try:
            qs = await self.llm_extract(
                schema=QualityScore, system=prompt, user=user, max_tokens=2000,
            )
        except Exception as e:
            raise AgentError(f"self-critic failed: {e}") from e

        state.quality_score = qs
        self.emit(
            "finding",
            f"Self-Critic: {qs.overall}/100 · weak: {qs.weak_sections or '[]'}",
            payload={"overall": qs.overall},
        )
        return qs
