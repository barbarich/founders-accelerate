"""Agent 12 — Strategist + Verdict (single agent, two LLM calls).

Outputs:
1. `Strategy` — niches, Porter's 5 forces, moats, tech_feasibility, strategic_groups
2. `Verdict` — GO/PIVOT/NO_GO + justification + top-3 risks + top-3 opportunities + action_items

Uses Sonnet 4.5 by default (cost-effective at this tier). Swap default_model to
`config.MODEL_OPUS` for premium quality if budget allows.
"""

from __future__ import annotations

import logging

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import ResearchState, Strategy, Verdict

log = logging.getLogger(__name__)


def _compact_state(state: ResearchState) -> str:
    """Build a compact, markdown-friendly summary of state for the strategist."""
    parts = []
    if state.idea_input:
        parts.append(f"## Идея\n{state.idea_input.raw_idea}\n")
    if state.classification:
        c = state.classification
        parts.append(
            f"## Классификация\nindustry={c.industry}, sub={c.sub_industry}, segment={c.segment}, "
            f"flags={c.domain_flags}, geo={c.primary_geography}\n"
        )
    if state.market_size:
        ms = state.market_size
        parts.append(
            f"## Рынок\nTAM=${(ms.tam_usd or 0)/1e9:.1f}B, SAM=${(ms.sam_usd or 0)/1e9:.1f}B, "
            f"SOM=${(ms.som_usd or 0)/1e9:.2f}B, CAGR={ms.cagr_pct}% / {ms.forecast_years}y\n"
            f"why_now: {[c.text[:180] for c in ms.why_now[:5]]}\n"
        )
    if state.trends:
        tr = state.trends
        parts.append(
            "## Тренды\n"
            + "\n".join(
                f"- {t.label} [{t.direction}] yoy={t.yoy_pct}% — {t.commentary or ''}"
                for t in tr.google_trends[:5]
            )
            + f"\ncultural_signals: {[c.text[:150] for c in tr.cultural_signals[:5]]}\n"
        )
    if state.graveyard:
        gy = state.graveyard
        parts.append(
            "## Кладбище\n"
            + "\n".join(f"- {c.text[:220]}" for c in gy.failed_startups[:5])
            + f"\nadjacent: {gy.adjacent_evolution or ''}\n"
        )
    if state.competitors:
        cu = state.competitors
        parts.append(
            f"## Конкуренты: {len(cu.all_competitors)} всего\n"
            "Top-deep-dive: " + ", ".join(cu.top_deep_dive) + "\n"
            "Все конкуренты (name | segment | stage | pitch):\n"
            + "\n".join(
                f"- {c.name} | {c.segment} | {c.stage or '?'} | {(c.one_line_pitch or '')[:100]}"
                for c in cu.all_competitors[:20]
            )
            + "\n"
        )
    if state.deep_competitors:
        parts.append("## Deep competitors (marketing profiles):")
        for dc in state.deep_competitors:
            if not dc.marketing:
                continue
            m = dc.marketing
            parts.append(
                f"- **{dc.name}** — headline: '{m.headline or ''}' · "
                f"VP: {m.value_props[:3]} · CTA: '{m.primary_cta or ''}' · "
                f"target: {m.target_audience_inferred or ''} · "
                f"ads={m.total_active_ads}, maturity={m.marketing_maturity_score}/100"
            )
    return "\n".join(parts)


class StrategistAgent(Agent[Verdict]):
    name = "strategist"
    phase = "synthesis"
    model_tier = "premium"  # provider picks top-tier model (Opus / GPT-4o / Gemini Pro)

    async def run(self, state: ResearchState) -> Verdict:
        compact = _compact_state(state)

        # Call 1 — Strategy
        strategy_prompt = (
            self.prompt_path(state.language).read_text(encoding="utf-8")
            if (config.PROMPTS_DIR / f"strategist.{state.language}.md").exists()
            else (config.PROMPTS_DIR / "strategist.ru.md").read_text(encoding="utf-8")
        )
        user_1 = f"{compact}\n\nСоставь Strategy (niches + porters + moats + tech_feasibility + strategic_groups)."
        try:
            strategy = await self.llm_extract(
                schema=Strategy, system=strategy_prompt, user=user_1, max_tokens=6000,
            )
        except Exception as e:
            raise AgentError(f"strategy synthesis failed: {e}") from e

        state.strategy = strategy
        self.emit(
            "finding",
            f"Strategy: {len(strategy.niches)} niches · {len(strategy.porters)} Porter's forces · "
            f"{len(strategy.moats)} moats · tech feasibility={'yes' if strategy.tech_feasibility else 'n/a'}",
            payload={"niche_count": len(strategy.niches)},
        )

        # Call 2 — Verdict (given Strategy)
        verdict_prompt_path = config.PROMPTS_DIR / f"verdict.{state.language}.md"
        if not verdict_prompt_path.exists():
            verdict_prompt_path = config.PROMPTS_DIR / "verdict.ru.md"
        verdict_prompt = verdict_prompt_path.read_text(encoding="utf-8")

        user_2 = (
            f"{compact}\n\n## Strategy (только что сгенерирована)\n"
            + strategy.model_dump_json(indent=2)
            + "\n\nВыдай Verdict."
        )
        try:
            verdict = await self.llm_extract(
                schema=Verdict, system=verdict_prompt, user=user_2, max_tokens=4500,
            )
        except Exception as e:
            raise AgentError(f"verdict synthesis failed: {e}") from e

        state.verdict = verdict
        self.emit(
            "finding",
            f"Verdict: {verdict.decision} — {len(verdict.action_items)} action items · "
            f"{len(verdict.top_3_risks)} risks · {len(verdict.top_3_opportunities)} opportunities",
            payload={"decision": verdict.decision},
        )
        return verdict
