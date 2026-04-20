"""Agent 14 — Report Compiler (MINIMAL, vertical-slice scope).

This version renders whatever is in `state` into a simple HTML file + JSON dump.
It intentionally does NOT do: Plotly charts, PDF export, Jinja templates, RU i18n strings.

Full Compiler lands in Day 2 Hour 5-7 with the real report template.
For the vertical slice the goal is: you can look at a file and see 'pipeline ran, here's what it found'.
"""

from __future__ import annotations

import html
import logging
from datetime import datetime, timezone
from pathlib import Path

from pydantic import BaseModel

from founderslens import config
from founderslens.agents.base import Agent
from founderslens.media.creatives import download_all as download_creatives
from founderslens.state import ResearchState

log = logging.getLogger(__name__)


class CompilerOutput(BaseModel):
    html_path: str
    json_path: str


_HTML_SKELETON = """<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<title>FoundersLens — {title}</title>
<style>
  body {{ font-family: -apple-system, system-ui, sans-serif; max-width: 880px; margin: 40px auto; padding: 0 24px; color: #1a1a1a; line-height: 1.55; }}
  h1 {{ font-size: 28px; margin: 0 0 8px; }}
  h2 {{ font-size: 20px; margin: 32px 0 12px; padding-top: 16px; border-top: 1px solid #eee; }}
  h3 {{ font-size: 16px; margin: 20px 0 8px; color: #444; }}
  .meta {{ color: #888; font-size: 13px; margin-bottom: 32px; }}
  .pill {{ display: inline-block; padding: 2px 8px; border-radius: 12px; background: #f0f0f0; font-size: 12px; margin-right: 6px; }}
  .pill.go {{ background: #d4f7d4; color: #0a5a0a; }}
  .pill.pivot {{ background: #fff3cd; color: #7a5a00; }}
  .pill.no_go {{ background: #fbd4d4; color: #7a0a0a; }}
  table {{ border-collapse: collapse; width: 100%; margin: 12px 0; }}
  td, th {{ border-bottom: 1px solid #eee; padding: 8px 10px; text-align: left; vertical-align: top; font-size: 14px; }}
  th {{ background: #fafafa; font-weight: 600; color: #555; }}
  .segment-direct {{ color: #c0392b; font-weight: 600; }}
  .segment-indirect {{ color: #d4820a; }}
  .segment-substitute {{ color: #555; }}
  .footer {{ margin-top: 48px; padding-top: 16px; border-top: 1px solid #eee; color: #aaa; font-size: 12px; }}
  .stub {{ background: #fff8dc; padding: 12px 16px; border-left: 3px solid #e6b800; margin: 16px 0; font-size: 14px; color: #555; }}
  .market-stats {{ display: flex; gap: 16px; margin: 16px 0 24px; flex-wrap: wrap; }}
  .stat {{ background: #f7f7f9; border-radius: 8px; padding: 16px 20px; flex: 1; min-width: 120px; }}
  .stat-val {{ font-size: 24px; font-weight: 700; color: #1a1a1a; }}
  .stat-label {{ font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 4px; }}
  .methodology {{ background: #fafafa; border-left: 3px solid #ccc; padding: 12px 16px; margin: 16px 0; font-size: 13px; color: #555; }}
  .methodology p {{ margin: 4px 0; }}
  .claims {{ padding-left: 18px; margin: 8px 0; }}
  .claims li {{ margin: 8px 0; font-size: 14px; }}
  .conf {{ display: inline-block; font-size: 10px; padding: 1px 6px; border-radius: 8px; margin-left: 4px; font-weight: 600; }}
  .conf-high {{ background: #d4f7d4; color: #0a5a0a; }}
  .conf-med {{ background: #fff3cd; color: #7a5a00; }}
  .conf-low {{ background: #fbd4d4; color: #7a0a0a; }}
  .conf-na {{ background: #eee; color: #888; }}
  table.trends {{ margin: 12px 0; }}
  .arrow-up {{ color: #0a5a0a; font-weight: 700; font-size: 18px; }}
  .arrow-down {{ color: #c0392b; font-weight: 700; font-size: 18px; }}
  .arrow-flat {{ color: #888; font-weight: 700; font-size: 18px; }}
  .pestel-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin: 16px 0; }}
  .pestel-item {{ background: #fafafa; padding: 12px 16px; border-radius: 6px; }}
  .pestel-key {{ font-weight: 600; color: #555; font-size: 13px; text-transform: uppercase; margin-bottom: 8px; }}
  .muted {{ color: #888; font-size: 12px; }}
  table.positioning td {{ vertical-align: top; }}
  table.positioning .vp {{ font-size: 13px; line-height: 1.6; }}
  .cta-pill {{ background: #1a1a1a; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px; white-space: nowrap; }}
  .maturity {{ font-weight: 700; text-align: center; }}
  .comp-block {{ margin: 24px 0 32px; padding: 16px 20px; background: #fafafa; border-radius: 8px; }}
  .comp-block h3 {{ margin-top: 0; }}
  .ad-count {{ color: #888; font-size: 14px; font-weight: normal; }}
  .channel-hyp {{ color: #555; font-style: italic; font-size: 14px; }}
  .hooks {{ margin: 8px 0 12px; }}
  .hooks-label {{ font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }}
  .hooks ul {{ margin: 4px 0; padding-left: 18px; font-size: 13px; }}
  .creatives-grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-top: 12px; }}
  .creative {{ background: white; border: 1px solid #eee; border-radius: 6px; overflow: hidden; }}
  .creative img {{ width: 100%; height: 180px; object-fit: cover; display: block; background: #f0f0f0; }}
  .creative .ad-copy {{ padding: 8px 10px; font-size: 12px; color: #333; line-height: 1.4; max-height: 80px; overflow: hidden; }}
  .creative.no-img {{ background: #fafafa; }}
  .creative.no-img .ad-copy {{ max-height: none; padding: 12px 14px; font-size: 13px; line-height: 1.5; }}
  .ad-lib-link {{ display: inline-block; margin-top: 12px; padding: 6px 12px; background: #1a1a1a; color: white; text-decoration: none; font-size: 13px; border-radius: 6px; }}
  .ad-lib-link:hover {{ background: #3a3a3a; }}
  .ad-lib-screenshot {{ margin: 14px 0; }}
  .ad-lib-screenshot .ad-lib-label {{ font-size: 12px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }}
  .ad-lib-screenshot img {{ max-width: 100%; height: auto; max-height: 600px; object-fit: cover; object-position: top; border: 1px solid #e6e6e6; border-radius: 6px; display: block; }}
  .ad-lib-screenshot a {{ display: block; }}
  .verdict-strip {{ padding: 24px 28px; margin: 16px 0 28px; border-radius: 10px; border-left: 6px solid; }}
  .verdict-go {{ background: #e8f7ec; border-left-color: #0a7a2e; }}
  .verdict-pivot {{ background: #fff3cd; border-left-color: #c58900; }}
  .verdict-no-go {{ background: #fbe6e6; border-left-color: #a82020; }}
  .verdict-decision {{ font-size: 22px; font-weight: 800; margin-bottom: 10px; }}
  .verdict-just {{ font-size: 14px; line-height: 1.6; margin-bottom: 16px; color: #333; }}
  .verdict-cols {{ display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }}
  .verdict-col ul {{ margin: 4px 0 0; padding-left: 18px; font-size: 13px; line-height: 1.55; }}
  .verdict-col .col-label {{ font-size: 12px; color: #555; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }}
  .quality-score {{ padding: 16px 20px; margin: 16px 0; border-radius: 8px; background: #fafafa; border-left: 5px solid; }}
  .qs-high {{ border-left-color: #0a7a2e; }}
  .qs-med {{ border-left-color: #c58900; }}
  .qs-low {{ border-left-color: #a82020; }}
  .qs-header {{ font-size: 14px; font-weight: 600; color: #555; text-transform: uppercase; letter-spacing: 0.5px; }}
  .qs-num {{ font-size: 20px; font-weight: 800; color: #1a1a1a; margin-left: 6px; }}
  .qs-sections {{ display: flex; flex-wrap: wrap; gap: 10px; margin: 10px 0; }}
  .qs-section {{ background: white; padding: 3px 10px; border-radius: 12px; font-size: 12px; border: 1px solid #eee; }}
  .qs-section-name {{ color: #666; }}
  .qs-section-score {{ font-weight: 700; margin-left: 6px; color: #1a1a1a; }}
  .qs-weak {{ font-size: 13px; color: #7a5a00; margin-top: 8px; }}
  .niches-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; margin: 16px 0; }}
  .niche-card {{ background: #f7f7f9; padding: 18px 20px; border-radius: 8px; border-top: 4px solid #1a1a1a; }}
  .niche-title {{ font-size: 16px; font-weight: 700; margin-bottom: 4px; }}
  .niche-position {{ font-size: 13px; color: #555; font-style: italic; margin-bottom: 10px; }}
  .niche-scores {{ display: flex; gap: 12px; margin: 10px 0; font-size: 12px; color: #555; }}
  .niche-scores .risk strong {{ color: #a82020; }}
  .niche-scores .opp strong {{ color: #0a7a2e; }}
  .niche-target, .niche-just, .niche-gtm {{ font-size: 13px; line-height: 1.55; margin: 6px 0; }}
  ul.tech li {{ font-size: 14px; margin: 4px 0; }}
  .tf-block {{ margin: 16px 0; }}
  .action-grid {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }}
  .action-card {{ background: white; border: 1px solid #e6e6e6; border-radius: 8px; padding: 14px 16px; }}
  .action-cat {{ font-size: 10px; font-weight: 700; color: #888; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }}
  .action-text {{ font-size: 14px; font-weight: 600; line-height: 1.4; margin-bottom: 6px; }}
  .artifacts {{ margin: 6px 0 0; padding-left: 18px; font-size: 12px; color: #555; line-height: 1.5; }}
</style>
</head>
<body>
{body}
</body>
</html>
"""


def _pill(text: str, cls: str = "") -> str:
    return f'<span class="pill {cls}">{html.escape(text)}</span>'


def _render_header(state: ResearchState) -> str:
    idea = state.idea_input
    cls = state.classification
    started = state.started_at.strftime("%Y-%m-%d %H:%M UTC")
    idea_preview = html.escape(idea.raw_idea if idea else "(no idea)")

    cls_pills = ""
    if cls:
        cls_pills = " ".join([
            _pill(cls.segment),
            _pill(cls.industry),
            *(_pill(cls.sub_industry) for _ in [None] if cls.sub_industry),
            *[_pill(f) for f in cls.domain_flags[:6]],
        ])

    return (
        f'<h1>FoundersLens — черновой ресерч</h1>'
        f'<div class="meta">Run {html.escape(state.run_id)} · {started}</div>'
        f'<p><strong>Идея:</strong> {idea_preview}</p>'
        f'<div>{cls_pills}</div>'
    )


def _render_verdict_strip(state: ResearchState) -> str:
    """Page-1 scannable summary: decision + quality score + top 3 risks/opportunities."""
    v = state.verdict
    qs = state.quality_score
    if not v and not qs:
        return ""

    verdict_html = ""
    if v:
        decision_label = {
            "GO": "GO — идея жизнеспособна",
            "PIVOT": "PIVOT — нужна корректировка",
            "NO_GO": "NO-GO — не рекомендуется",
        }.get(v.decision, v.decision)
        decision_class = v.decision.lower().replace("_", "-")

        risks = "".join(f"<li>{html.escape(r)}</li>" for r in (v.top_3_risks or []))
        opps = "".join(f"<li>{html.escape(o)}</li>" for o in (v.top_3_opportunities or []))

        verdict_html = (
            f'<div class="verdict-strip verdict-{decision_class}">'
            f'<div class="verdict-decision">{html.escape(decision_label)}</div>'
            f'<div class="verdict-just">{html.escape(v.justification or "")}</div>'
            f'<div class="verdict-cols">'
            f'  <div class="verdict-col"><div class="col-label">⚠️ Главные риски</div><ul>{risks or "<li>—</li>"}</ul></div>'
            f'  <div class="verdict-col"><div class="col-label">✨ Главные возможности</div><ul>{opps or "<li>—</li>"}</ul></div>'
            f'</div>'
            f'</div>'
        )

    qs_html = ""
    if qs:
        score = qs.overall
        score_class = "high" if score >= 75 else "med" if score >= 50 else "low"
        per_section_items = ""
        if qs.per_section:
            per_section_items = '<div class="qs-sections">' + "".join(
                f'<div class="qs-section"><span class="qs-section-name">{html.escape(k)}</span>'
                f'<span class="qs-section-score">{v}</span></div>'
                for k, v in qs.per_section.items()
            ) + '</div>'
        weak = ""
        if qs.weak_sections:
            weak = f'<div class="qs-weak">Слабые секции: <strong>{html.escape(", ".join(qs.weak_sections))}</strong> — проверь вручную.</div>'

        qs_html = (
            f'<div class="quality-score qs-{score_class}">'
            f'<div class="qs-header">Качество исследования <span class="qs-num">{score}/100</span></div>'
            f'{per_section_items}'
            f'{weak}'
            f'</div>'
        )

    return qs_html + verdict_html


def _render_niches(state: ResearchState) -> str:
    s = state.strategy
    if not s or not s.niches:
        return ""

    rows = []
    for n in s.niches:
        rows.append(
            f'<div class="niche-card">'
            f'<div class="niche-title">{html.escape(n.name)}</div>'
            f'<div class="niche-position">{html.escape(n.positioning)}</div>'
            f'<div class="niche-scores">'
            f'  <span class="risk">Risk <strong>{n.risk_score}/10</strong></span>'
            f'  <span class="opp">Opportunity <strong>{n.opportunity_score}/10</strong></span>'
            f'</div>'
            f'<div class="niche-target"><strong>Аудитория:</strong> {html.escape(n.target_segment)}</div>'
            f'<div class="niche-just">{html.escape(n.justification)}</div>'
            + (f'<div class="niche-gtm"><strong>GTM:</strong> {html.escape(n.gtm_hypothesis)}</div>' if n.gtm_hypothesis else "")
            + f'</div>'
        )
    return f'<h2>Рекомендуемые ниши</h2><div class="niches-grid">{"".join(rows)}</div>'


def _render_tech_feasibility(state: ResearchState) -> str:
    s = state.strategy
    if not s or not s.tech_feasibility:
        return ""
    tf = s.tech_feasibility
    rows = []
    if tf.integrations_required:
        rows.append(f"<li><strong>Интеграции:</strong> {html.escape(', '.join(tf.integrations_required))}</li>")
    if tf.regulatory:
        rows.append(f"<li><strong>Регулятор:</strong> {html.escape(', '.join(tf.regulatory))}</li>")
    if tf.scaling_risks:
        rows.append(f"<li><strong>Риски масштабирования:</strong> {html.escape(', '.join(tf.scaling_risks))}</li>")
    if tf.mvp_effort_weeks:
        rows.append(f"<li><strong>Оценка MVP:</strong> {html.escape(tf.mvp_effort_weeks)}</li>")
    return f'<h3>Техническая выполнимость</h3><ul class="tech">{"".join(rows)}</ul>'


def _render_action_plan(state: ResearchState) -> str:
    v = state.verdict
    if not v or not v.action_items:
        return ""
    by_timeframe = {"this_week": [], "this_month": [], "this_quarter": []}
    for a in v.action_items:
        by_timeframe.setdefault(a.timeframe, []).append(a)

    timeframe_labels = {"this_week": "На этой неделе", "this_month": "В этом месяце", "this_quarter": "В этом квартале"}

    blocks = []
    for tf, items in by_timeframe.items():
        if not items:
            continue
        cards = []
        for a in items:
            artifacts = "".join(f"<li>{html.escape(x)}</li>" for x in a.artifacts) if a.artifacts else ""
            cards.append(
                f'<div class="action-card">'
                f'<div class="action-cat">{html.escape(a.category)}</div>'
                f'<div class="action-text">{html.escape(a.text)}</div>'
                f'{f"<ul class=artifacts>{artifacts}</ul>" if artifacts else ""}'
                f'</div>'
            )
        blocks.append(
            f'<div class="tf-block">'
            f'<h3>{html.escape(timeframe_labels.get(tf, tf))}</h3>'
            f'<div class="action-grid">{"".join(cards)}</div>'
            f'</div>'
        )
    return f'<h2>План действий — что делать завтра</h2>{"".join(blocks)}'


def _fmt_usd(x: float | None) -> str:
    if not x:
        return "—"
    if x >= 1e9:
        return f"${x / 1e9:.1f}B"
    if x >= 1e6:
        return f"${x / 1e6:.1f}M"
    if x >= 1e3:
        return f"${x / 1e3:.0f}K"
    return f"${x:.0f}"


def _claim_list(claims, max_n: int = 5) -> str:
    if not claims:
        return '<div class="stub">Нет данных.</div>'
    items = []
    for c in claims[:max_n]:
        conf_class = {"HIGH": "high", "MEDIUM": "med", "LOW": "low", "UNAVAILABLE": "na"}.get(c.confidence.value, "")
        conf_label = {"HIGH": "HIGH", "MEDIUM": "MED", "LOW": "LOW", "UNAVAILABLE": "—"}.get(c.confidence.value, "")
        src = ""
        if c.sources:
            urls = [f'<a href="{html.escape(s.url)}" target="_blank">{html.escape((s.url.split("//")[-1].split("/")[0]) or "link")}</a>' for s in c.sources[:3]]
            src = ' · ' + ", ".join(urls)
        items.append(f'<li>{html.escape(c.text)} <span class="conf conf-{conf_class}">{conf_label}</span>{src}</li>')
    return f'<ul class="claims">{"".join(items)}</ul>'


def _render_market(state: ResearchState) -> str:
    ms = state.market_size
    if not ms:
        return '<h2>Рынок и тайминг</h2><div class="stub">Рыночный анализ не выполнен.</div>'

    tam, sam, som = _fmt_usd(ms.tam_usd), _fmt_usd(ms.sam_usd), _fmt_usd(ms.som_usd)
    cagr = f"{ms.cagr_pct:.0f}%/год" if ms.cagr_pct else "—"
    methodology = ""
    if ms.methodology_top_down or ms.methodology_bottom_up:
        parts = []
        if ms.methodology_top_down:
            parts.append(f'<p><strong>Top-down:</strong> {html.escape(ms.methodology_top_down)}</p>')
        if ms.methodology_bottom_up:
            parts.append(f'<p><strong>Bottom-up:</strong> {html.escape(ms.methodology_bottom_up)}</p>')
        methodology = '<div class="methodology">' + "".join(parts) + '</div>'

    why_now = ""
    if ms.why_now:
        why_now = f'<h3>Почему именно сейчас</h3>{_claim_list(ms.why_now, 5)}'

    return (
        f'<h2>Рынок и тайминг</h2>'
        f'<div class="market-stats">'
        f'  <div class="stat"><div class="stat-val">{tam}</div><div class="stat-label">TAM</div></div>'
        f'  <div class="stat"><div class="stat-val">{sam}</div><div class="stat-label">SAM</div></div>'
        f'  <div class="stat"><div class="stat-val">{som}</div><div class="stat-label">SOM (3–5 лет)</div></div>'
        f'  <div class="stat"><div class="stat-val">{cagr}</div><div class="stat-label">CAGR</div></div>'
        f'</div>'
        f'{methodology}'
        f'{why_now}'
    )


def _render_trends(state: ResearchState) -> str:
    tr = state.trends
    if not tr:
        return '<h2>Тренды</h2><div class="stub">Анализ трендов не выполнен.</div>'

    trend_rows = []
    arrow_map = {"up": "↑", "flat": "→", "down": "↓"}
    for t in tr.google_trends[:6]:
        arrow = arrow_map.get(t.direction, "?")
        arrow_class = f"arrow-{t.direction}"
        yoy = f"{t.yoy_pct:+.0f}% YoY" if t.yoy_pct is not None else ""
        trend_rows.append(
            f'<tr>'
            f'<td><strong>{html.escape(t.label)}</strong></td>'
            f'<td class="{arrow_class}">{arrow}</td>'
            f'<td>{yoy}</td>'
            f'<td>{html.escape(t.commentary or "")}</td>'
            f'</tr>'
        )
    trends_table = (
        '<table class="trends"><thead><tr><th>Запрос</th><th>Направление</th><th>YoY</th><th>Комментарий</th></tr></thead>'
        '<tbody>' + "".join(trend_rows) + '</tbody></table>'
    ) if trend_rows else '<div class="stub">Нет данных по трендам.</div>'

    cultural = ""
    if tr.cultural_signals:
        cultural = f'<h3>Культурные сигналы</h3>{_claim_list(tr.cultural_signals, 6)}'

    return f'<h2>Тренды</h2>{trends_table}{cultural}'


def _render_graveyard(state: ResearchState) -> str:
    gy = state.graveyard
    if not gy:
        return '<h2>Кладбище и регуляторика</h2><div class="stub">Анализ не выполнен.</div>'

    failed = f'<h3>Кто пытался и не вышло</h3>{_claim_list(gy.failed_startups, 6)}' if gy.failed_startups else ""

    pestel = ""
    if gy.pestel:
        pestel_items = []
        labels = {
            "political": "Политика", "economic": "Экономика", "social": "Социум",
            "technological": "Технологии", "environmental": "Экология", "legal": "Право",
        }
        for key, claims in gy.pestel.items():
            if claims:
                pestel_items.append(f'<div class="pestel-item"><div class="pestel-key">{labels.get(key, key)}</div>{_claim_list(claims, 3)}</div>')
        if pestel_items:
            pestel = f'<h3>PESTEL</h3><div class="pestel-grid">{"".join(pestel_items)}</div>'

    adjacent = ""
    if gy.adjacent_evolution:
        adjacent = f'<h3>Эволюция соседнего рынка</h3><p>{html.escape(gy.adjacent_evolution)}</p>'

    return f'<h2>Кладбище и регуляторика</h2>{failed}{pestel}{adjacent}'


def _render_positioning_grid(state: ResearchState) -> str:
    dcs = [dc for dc in (state.deep_competitors or []) if dc.marketing]
    if not dcs:
        return ""

    rows = ["<tr><th>Конкурент</th><th>Headline</th><th>Value props</th><th>CTA</th><th>Аудитория</th><th>Зрелость</th></tr>"]
    for dc in dcs:
        m = dc.marketing
        vp = "<br>".join(f"• {html.escape(v)}" for v in (m.value_props or [])[:4])
        maturity = f"{m.marketing_maturity_score}/100" if m.marketing_maturity_score is not None else "—"
        rows.append(
            "<tr>"
            f"<td><strong>{html.escape(dc.name)}</strong><br><a href='{html.escape(dc.url or '')}' target='_blank' class='muted'>{html.escape((dc.url or '').split('//')[-1][:40])}</a></td>"
            f"<td>{html.escape(m.headline or '—')}<div class='muted'>{html.escape(m.subheadline or '')}</div></td>"
            f"<td class='vp'>{vp or '—'}</td>"
            f"<td><span class='cta-pill'>{html.escape(m.primary_cta or '—')}</span></td>"
            f"<td>{html.escape(m.target_audience_inferred or '—')}</td>"
            f"<td class='maturity'>{maturity}</td>"
            "</tr>"
        )
    return (
        '<h2>Positioning grid — как конкуренты продаются</h2>'
        f'<table class="positioning">{"".join(rows)}</table>'
    )


def _render_creatives_gallery(state: ResearchState) -> str:
    dcs = [dc for dc in (state.deep_competitors or []) if dc.marketing and dc.marketing.top_creatives]
    if not dcs:
        return ""

    blocks = []
    for dc in dcs:
        m = dc.marketing
        creatives = []
        for cr in (m.top_creatives or [])[:5]:
            # Only render <img> if we have a local_path (download succeeded).
            # FB CDN refuses hotlinks — showing raw media_url leaves broken images.
            img = ""
            if cr.local_path:
                img = f'<img src="{html.escape(cr.local_path)}" loading="lazy" alt="" />'
            copy = html.escape((cr.ad_copy or "")[:300])
            if not img and not copy:
                continue
            creatives.append(
                f'<div class="creative {"no-img" if not img else ""}">{img}<div class="ad-copy">{copy or "(без текста)"}</div></div>'
            )

        # Deep-link to Ad Library search for this brand
        from urllib.parse import quote_plus
        ad_lib_link = (
            f'<a class="ad-lib-link" target="_blank" '
            f'href="https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&q={quote_plus(dc.name)}&search_type=keyword_unordered">'
            f'Смотреть все {m.total_active_ads or "активные"} реклам в Meta Ad Library →</a>'
        )

        hooks = ""
        if m.top_ad_hooks:
            hooks_list = "".join(f"<li>{html.escape(h)}</li>" for h in m.top_ad_hooks[:4])
            hooks = f'<div class="hooks"><div class="hooks-label">Топ хуки:</div><ul>{hooks_list}</ul></div>'

        channel = f'<p class="channel-hyp">{html.escape(m.channel_hypothesis or "")}</p>' if m.channel_hypothesis else ""
        # Screenshot of the Ad Library page for this competitor (visual creatives)
        screenshot_html = ""
        if m.ad_library_screenshot_path:
            screenshot_html = (
                f'<div class="ad-lib-screenshot">'
                f'<div class="ad-lib-label">Активные рекламы {html.escape(dc.name)} в Meta Ad Library:</div>'
                f'<a href="{html.escape(m.ad_library_url or "")}" target="_blank">'
                f'<img src="{html.escape(m.ad_library_screenshot_path)}" loading="lazy" alt="Ad Library: {html.escape(dc.name)}" /></a>'
                f'</div>'
            )

        blocks.append(
            f'<div class="comp-block">'
            f'<h3>{html.escape(dc.name)} <span class="ad-count">({m.total_active_ads} активных реклам)</span></h3>'
            f'{channel}'
            f'{hooks}'
            f'{screenshot_html}'
            f'<div class="creatives-grid">{"".join(creatives) or ""}</div>'
            f'{ad_lib_link}'
            f'</div>'
        )
    return (
        '<h2>Креативы и реклама конкурентов</h2>'
        '<p class="muted">Реальная активная реклама из Meta Ad Library. Смотри что работает и повторяй / отталкивайся.</p>'
        + "".join(blocks)
    )


def _render_competitors(state: ResearchState) -> str:
    u = state.competitors
    if not u or not u.all_competitors:
        return '<h2>Конкуренты</h2><div class="stub">Конкуренты не найдены.</div>'

    top_set = set(u.top_deep_dive)
    rows = []
    for c in u.all_competitors:
        seg_cls = f"segment-{c.segment}" if c.segment else ""
        is_top = "⭐️ " if c.name in top_set else ""
        url_cell = f'<a href="{html.escape(c.url or "")}" target="_blank">{html.escape(c.url or "")}</a>' if c.url else ""
        rows.append(
            "<tr>"
            f"<td>{is_top}<strong>{html.escape(c.name)}</strong></td>"
            f'<td class="{seg_cls}">{html.escape(c.segment or "")}</td>'
            f"<td>{html.escape(', '.join(c.geography))}</td>"
            f"<td>{html.escape(c.stage or '')}</td>"
            f"<td>{html.escape(c.one_line_pitch or '')}</td>"
            f"<td>{url_cell}</td>"
            "</tr>"
        )

    return (
        f'<h2>Конкуренты — вся вселенная ({len(u.all_competitors)})</h2>'
        f'<p>В deep dive попадают: {html.escape(", ".join(u.top_deep_dive))}</p>'
        '<table>'
        '<thead><tr><th>Название</th><th>Тип</th><th>Гео</th><th>Стадия</th><th>Pitch</th><th>URL</th></tr></thead>'
        '<tbody>' + "".join(rows) + '</tbody>'
        '</table>'
    )


def _render_errors(state: ResearchState) -> str:
    if not state.errors:
        return ""
    items = "".join(f"<li>{html.escape(e)}</li>" for e in state.errors)
    return f'<h2>Ошибки пайплайна</h2><ul>{items}</ul>'


def _render_cost(state: ResearchState) -> str:
    c = state.cost
    return (
        '<h2>Стоимость и телеметрия</h2>'
        f'<p>Всего: <strong>${c.total_usd:.4f}</strong> '
        f'(LLM: ${c.llm_usd:.4f}, инструменты: ${c.tool_usd:.4f}) · '
        f'tokens in: {c.tokens_in:,} · tokens out: {c.tokens_out:,}</p>'
        f'<p>По агентам: {", ".join(f"{k}=${v:.4f}" for k, v in c.by_agent.items()) or "—"}</p>'
    )


class CompilerAgent(Agent[CompilerOutput]):
    name = "compiler"
    phase = "synthesis"

    async def run(self, state: ResearchState) -> CompilerOutput:
        run_dir = config.RUNS_DIR / state.run_id
        run_dir.mkdir(parents=True, exist_ok=True)

        # Download creatives locally so FB CDN hotlink protection doesn't block rendering
        try:
            n = await download_creatives(state, state.run_id)
            self.emit("finding", f"Compiler: downloaded {n} creatives locally")
        except Exception as e:
            log.warning("creative download phase failed: %s", e)

        body_parts = [
            _render_header(state),
            _render_verdict_strip(state),           # TOP: decision + quality score + risks/opps
            _render_market(state),
            _render_trends(state),
            _render_graveyard(state),
            _render_competitors(state),
            _render_positioning_grid(state),
            _render_creatives_gallery(state),
            _render_niches(state),                  # Strategy: 3-5 niches with risk/opp
            _render_tech_feasibility(state),        # Tech feasibility sub-section
            _render_action_plan(state),             # Action items grouped by timeframe
            _render_errors(state),
            _render_cost(state),
            f'<div class="footer">FoundersLens · {datetime.now(timezone.utc).strftime("%Y-%m-%d")}</div>',
        ]
        html_out = _HTML_SKELETON.format(
            lang=state.language,
            title=html.escape((state.idea_input.raw_idea if state.idea_input else "run")[:60]),
            body="\n".join(body_parts),
        )

        html_path = run_dir / "report.html"
        json_path = run_dir / "state.json"
        html_path.write_text(html_out, encoding="utf-8")

        # Refresh cost snapshot into state before dumping
        state.cost = self.cost.snapshot()
        json_path.write_text(state.model_dump_json(indent=2), encoding="utf-8")

        state.report_html_path = str(html_path)
        state.report_json_path = str(json_path)

        self.emit(
            "finding",
            f"Compiler: wrote {html_path.name} + {json_path.name}",
            payload={"html": str(html_path), "json": str(json_path)},
        )
        return CompilerOutput(html_path=str(html_path), json_path=str(json_path))
