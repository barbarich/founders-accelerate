import os
import tempfile
from datetime import date

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle,
    PageBreak, KeepTogether,
)
from reportlab.lib.colors import HexColor

from models.dataclasses import IdeaReport
from . import charts
from .templates import *


def _page_footer(canvas, doc):
    """Add page number to every page."""
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(HexColor("#757575"))
    canvas.drawCentredString(doc.pagesize[0] / 2, 30, f"Page {canvas.getPageNumber()}")
    canvas.restoreState()


class PDFReportGenerator:
    def __init__(self, output_dir: str = "./reports"):
        self.output_dir = output_dir
        os.makedirs(output_dir, exist_ok=True)
        self.tmp_dir = tempfile.mkdtemp()
        self.styles = getSampleStyleSheet()
        self._register_styles()

    def _register_styles(self):
        self.styles.add(ParagraphStyle(
            "Title2", parent=self.styles["Title"],
            fontSize=TITLE_SIZE, textColor=PRIMARY, spaceAfter=6,
        ))
        self.styles.add(ParagraphStyle(
            "Subtitle2", parent=self.styles["Normal"],
            fontSize=SUBTITLE_SIZE, textColor=TEXT_LIGHT, alignment=TA_CENTER, spaceAfter=12,
        ))
        self.styles.add(ParagraphStyle(
            "Heading2Custom", parent=self.styles["Heading2"],
            fontSize=HEADING_SIZE, textColor=PRIMARY, spaceBefore=10, spaceAfter=4,
        ))
        self.styles.add(ParagraphStyle(
            "BodyCustom", parent=self.styles["Normal"],
            fontSize=BODY_SIZE, textColor=TEXT_DARK, spaceAfter=4, leading=14,
        ))
        self.styles.add(ParagraphStyle(
            "SmallText", parent=self.styles["Normal"],
            fontSize=SMALL_SIZE, textColor=TEXT_LIGHT, spaceAfter=2,
        ))
        self.styles.add(ParagraphStyle(
            "Quote", parent=self.styles["Normal"],
            fontSize=BODY_SIZE, textColor=TEXT_DARK, leftIndent=20,
            borderColor=SECONDARY, borderWidth=2, borderPadding=8,
            spaceAfter=6, leading=14, fontName="Helvetica-Oblique",
        ))

    def _table_style(self, has_header: bool = True):
        style = [
            ("BACKGROUND", (0, 0), (-1, 0), PRIMARY if has_header else BG_LIGHT),
            ("TEXTCOLOR", (0, 0), (-1, 0), BG_WHITE if has_header else TEXT_DARK),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 8),
            ("ALIGN", (0, 0), (-1, -1), "LEFT"),
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("GRID", (0, 0), (-1, -1), 0.5, BORDER),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [BG_WHITE, BG_LIGHT]),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("LEFTPADDING", (0, 0), (-1, -1), 6),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ]
        return TableStyle(style)

    def _p(self, text, style_name="BodyCustom"):
        """Shortcut for creating a Paragraph."""
        return Paragraph(str(text), self.styles[style_name])

    def generate(self, report: IdeaReport) -> str:
        filename = f"{report.idea.id}_pmf_{date.today().strftime('%Y%m%d')}.pdf"
        filepath = os.path.join(self.output_dir, filename)

        doc = SimpleDocTemplate(
            filepath, pagesize=letter,
            leftMargin=PAGE_MARGIN, rightMargin=PAGE_MARGIN,
            topMargin=PAGE_MARGIN, bottomMargin=PAGE_MARGIN,
        )

        story = []
        self._page_cover(story, report)
        story.append(PageBreak())
        self._page_radar(story, report)
        story.append(PageBreak())
        self._page_market(story, report)
        story.append(PageBreak())
        if report.demand:
            self._page_demand(story, report)
            story.append(PageBreak())
        self._page_competitors(story, report)
        story.append(PageBreak())
        self._page_competitors_strategy(story, report)
        story.append(PageBreak())
        self._page_pain(story, report)
        story.append(PageBreak())
        self._page_pain_quotes(story, report)
        story.append(PageBreak())
        self._page_trends(story, report)
        story.append(PageBreak())
        if report.unit_economics:
            self._page_unit_economics(story, report)
            story.append(PageBreak())
        if report.regulatory:
            self._page_regulatory(story, report)
            story.append(PageBreak())
        self._page_risk_matrix(story, report)
        story.append(PageBreak())
        self._page_recommendations(story, report)
        if report.pivot_plan and report.pmf_score.verdict == "PIVOT":
            story.append(PageBreak())
            self._page_pivots(story, report)
        story.append(PageBreak())
        self._page_sources(story, report)

        doc.build(story, onFirstPage=_page_footer, onLaterPages=_page_footer)
        return filepath

    def generate_comparison(self, reports: list[IdeaReport]) -> str:
        filepath = os.path.join(self.output_dir, f"comparison_{date.today().strftime('%Y%m%d')}.pdf")
        doc = SimpleDocTemplate(
            filepath, pagesize=letter,
            leftMargin=PAGE_MARGIN, rightMargin=PAGE_MARGIN,
            topMargin=PAGE_MARGIN, bottomMargin=PAGE_MARGIN,
        )

        story = []
        story.append(Paragraph("PMF Comparison Dashboard", self.styles["Title2"]))
        story.append(Paragraph(f"Generated {date.today().strftime('%B %d, %Y')}", self.styles["Subtitle2"]))
        story.append(Spacer(1, 12))

        ideas_data = [
            {"title": r.idea.title, "score": r.pmf_score.weighted_total}
            for r in reports
        ]
        chart_path = os.path.join(self.tmp_dir, "comparison_bar.png")
        charts.create_comparison_bar(ideas_data, chart_path)
        story.append(Image(chart_path, width=450, height=min(400, max(200, len(reports) * 40))))
        story.append(Spacer(1, 12))

        table_data = [["Rank", "Idea", "PMF Score", "Verdict"]]
        sorted_reports = sorted(reports, key=lambda r: r.pmf_score.weighted_total, reverse=True)
        for i, r in enumerate(sorted_reports, 1):
            table_data.append([
                str(i), r.idea.title[:40],
                f"{r.pmf_score.weighted_total:.0f}", r.pmf_score.verdict
            ])

        t = Table(table_data, colWidths=[40, 250, 80, 80])
        t.setStyle(self._table_style())
        story.append(t)

        for report in sorted_reports:
            story.append(PageBreak())
            self._page_cover(story, report)
            story.append(PageBreak())
            self._page_radar(story, report)

        doc.build(story, onFirstPage=_page_footer, onLaterPages=_page_footer)
        return filepath

    # ------------------------------------------------------------------
    # Page 1: Cover
    # ------------------------------------------------------------------
    def _page_cover(self, story, report: IdeaReport):
        story.append(Spacer(1, 30))
        story.append(Paragraph("PMF Research Report", self.styles["Title2"]))
        story.append(Paragraph(report.idea.title, self.styles["Subtitle2"]))
        story.append(Paragraph(
            f"{date.today().strftime('%B %d, %Y')} | Founder: {report.idea.founder} | Stage: {report.idea.stage}",
            self.styles["SmallText"],
        ))
        story.append(Spacer(1, 16))

        # Gauge chart
        gauge_path = os.path.join(self.tmp_dir, f"{report.idea.id}_gauge.png")
        charts.create_gauge_chart(report.pmf_score.weighted_total, report.pmf_score.verdict, gauge_path)
        story.append(Image(gauge_path, width=320, height=200))
        story.append(Spacer(1, 8))

        # Verdict badge
        verdict = report.pmf_score.verdict
        color = VERDICT_COLORS.get(verdict, TEXT_DARK)
        story.append(Paragraph(
            f'<font color="{color.hexval()}" size="18"><b>{verdict}</b></font>',
            ParagraphStyle("VerdictCenter", parent=self.styles["Normal"], alignment=TA_CENTER),
        ))
        story.append(Spacer(1, 10))

        # Executive summary
        story.append(Paragraph("Executive Summary", self.styles["Heading2Custom"]))
        story.append(Paragraph(report.pmf_score.summary, self.styles["BodyCustom"]))
        story.append(Spacer(1, 8))

        # Key metrics snapshot
        story.append(Paragraph("Key Metrics at a Glance", self.styles["Heading2Custom"]))
        metrics_data = [["Metric", "Value"]]
        metrics_data.append(["PMF Score", f"{report.pmf_score.weighted_total:.0f}/100"])
        metrics_data.append(["Verdict", verdict])
        metrics_data.append(["TAM", str(report.market.tam)[:60]])
        metrics_data.append(["Pain Severity", f"{report.pain.pain_severity_score}/10"])
        metrics_data.append(["Timing Score", f"{report.timing.timing_score}/100"])
        if report.demand:
            metrics_data.append(["Demand Score", f"{report.demand.demand_score}/100"])

        t = Table(metrics_data, colWidths=[150, 345])
        t.setStyle(self._table_style())
        story.append(t)

    # ------------------------------------------------------------------
    # Page 2: Radar / Score Breakdown
    # ------------------------------------------------------------------
    def _page_radar(self, story, report: IdeaReport):
        story.append(Paragraph("PMF Score Breakdown", self.styles["Heading2Custom"]))

        axes_data = [{"axis": a.axis, "score": a.score} for a in report.pmf_score.axes]
        radar_path = os.path.join(self.tmp_dir, f"{report.idea.id}_radar.png")
        charts.create_radar_chart(axes_data, radar_path)
        story.append(Image(radar_path, width=280, height=280))
        story.append(Spacer(1, 8))

        # Score table
        table_data = [["Axis", "Score", "Weight", "Pts", "Evidence"]]
        for a in report.pmf_score.axes:
            contribution = a.score * a.weight
            reasoning = a.reasoning[:90] + "..." if len(a.reasoning) > 90 else a.reasoning
            table_data.append([
                a.axis.replace("_", " ").title(),
                str(a.score),
                f"{a.weight:.0%}",
                f"{contribution:.1f}",
                Paragraph(reasoning, self.styles["SmallText"]),
            ])
        table_data.append([
            "TOTAL", f"{report.pmf_score.weighted_total:.0f}", "100%",
            f"{report.pmf_score.weighted_total:.1f}", ""
        ])

        t = Table(table_data, colWidths=[95, 40, 45, 40, 275])
        t.setStyle(self._table_style())
        story.append(t)

    # ------------------------------------------------------------------
    # Page 3: Market Analysis
    # ------------------------------------------------------------------
    def _page_market(self, story, report: IdeaReport):
        story.append(Paragraph("Market Analysis", self.styles["Heading2Custom"]))

        # TAM/SAM/SOM chart
        tam_path = os.path.join(self.tmp_dir, f"{report.idea.id}_tam.png")
        charts.create_tam_sam_som_chart(
            report.market.tam_value, report.market.sam_value,
            report.market.som_value, tam_path,
        )
        story.append(Image(tam_path, width=230, height=230))
        story.append(Spacer(1, 6))

        # Market facts table
        table_data = [["Metric", "Value"]]
        table_data.append(["TAM", Paragraph(str(report.market.tam)[:100], self.styles["SmallText"])])
        table_data.append(["SAM", Paragraph(str(report.market.sam)[:100], self.styles["SmallText"])])
        table_data.append(["SOM", Paragraph(str(report.market.som)[:100], self.styles["SmallText"])])
        table_data.append(["CAGR", str(report.market.cagr)])
        table_data.append(["Geography", str(report.market.geography)[:60]])
        table_data.append(["Maturity", report.market.market_maturity.replace("_", " ").title()])

        t = Table(table_data, colWidths=[100, 395])
        t.setStyle(self._table_style())
        story.append(KeepTogether([
            Paragraph("Key Market Data", self.styles["Heading2Custom"]),
            t,
        ]))
        story.append(Spacer(1, 6))

        # Growth drivers
        if report.market.growth_drivers:
            gd_data = [["Driver", "Impact"]]
            for gd in report.market.growth_drivers[:4]:
                gd_data.append([
                    Paragraph(str(gd.get("driver", ""))[:80], self.styles["SmallText"]),
                    Paragraph(str(gd.get("impact", ""))[:80], self.styles["SmallText"]),
                ])
            t = Table(gd_data, colWidths=[250, 245])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Growth Drivers", self.styles["Heading2Custom"]),
                t,
            ]))
            story.append(Spacer(1, 6))

        # Key facts (limited to 4)
        if report.market.key_facts:
            block = [Paragraph("Key Facts", self.styles["Heading2Custom"])]
            for fact in report.market.key_facts[:4]:
                fact_text = fact.get("fact", str(fact))[:120]
                source = fact.get("source", "")
                block.append(Paragraph(
                    f"\u2022 {fact_text}" + (f" <i>({source})</i>" if source else ""),
                    self.styles["BodyCustom"],
                ))
            story.append(KeepTogether(block))

    # ------------------------------------------------------------------
    # Page 4: Demand Analysis
    # ------------------------------------------------------------------
    def _page_demand(self, story, report: IdeaReport):
        demand = report.demand
        if not demand:
            return

        story.append(Paragraph("Demand Analysis", self.styles["Heading2Custom"]))
        story.append(Paragraph(
            f"Demand Score: {demand.demand_score}/100 | Trajectory: {demand.demand_trajectory}",
            self.styles["BodyCustom"],
        ))
        story.append(Spacer(1, 6))

        # Demand heatmap chart
        all_signals = []
        for s in (demand.search_queries or []):
            all_signals.append({"platform": "Search", "metric": s.get("query", ""), "value": s.get("volume", "0"), "trend": s.get("trend", "stable")})
        for s in (demand.social_media_signals or []):
            all_signals.append({"platform": s.get("platform", "Social"), "metric": s.get("metric", ""), "value": s.get("value", "0"), "trend": s.get("trend", "stable")})
        for s in (demand.content_demand or []):
            all_signals.append({"platform": s.get("platform", "Content"), "metric": s.get("metric", ""), "value": s.get("value", "0"), "trend": s.get("trend", "stable")})

        if all_signals:
            demand_chart_path = os.path.join(self.tmp_dir, f"{report.idea.id}_demand.png")
            charts.create_demand_heatmap(all_signals[:8], demand_chart_path)
            chart_height = min(240, max(120, len(all_signals[:8]) * 30))
            story.append(Image(demand_chart_path, width=420, height=chart_height))
            story.append(Spacer(1, 6))

        # Google Trends summary
        if demand.google_trends_summary:
            story.append(KeepTogether([
                Paragraph("Google Trends Summary", self.styles["Heading2Custom"]),
                Paragraph(demand.google_trends_summary[:300], self.styles["BodyCustom"]),
            ]))
            story.append(Spacer(1, 6))

        # Community sizes
        if demand.community_sizes:
            comm_data = [["Community", "Platform", "Size"]]
            for c in demand.community_sizes[:6]:
                comm_data.append([
                    Paragraph(str(c.get("community", c.get("name", "")))[:50], self.styles["SmallText"]),
                    str(c.get("platform", "")),
                    str(c.get("size", "")),
                ])
            t = Table(comm_data, colWidths=[200, 130, 165])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Community Sizes", self.styles["Heading2Custom"]),
                t,
            ]))

    # ------------------------------------------------------------------
    # Page 5: Competitive Landscape (charts + table)
    # ------------------------------------------------------------------
    def _page_competitors(self, story, report: IdeaReport):
        story.append(Paragraph("Competitive Landscape", self.styles["Heading2Custom"]))

        # Scatter plot
        comp_data = [
            {
                "name": c.name, "value_score": c.value_score,
                "reach_score": c.reach_score, "threat_level": c.threat_level,
            }
            for c in report.competitors.competitors
        ]
        if comp_data:
            scatter_path = os.path.join(self.tmp_dir, f"{report.idea.id}_comp_scatter.png")
            charts.create_competitor_scatter(comp_data, scatter_path)
            story.append(Image(scatter_path, width=340, height=270))
            story.append(Spacer(1, 8))

        # Competitor details table
        table_data = [["Competitor", "Funding", "Threat", "Key Weaknesses"]]
        for c in report.competitors.competitors[:5]:
            weaknesses = "; ".join(c.top_3_weaknesses[:2]) if c.top_3_weaknesses else "N/A"
            table_data.append([
                c.name, c.funding_total[:30], c.threat_level,
                Paragraph(weaknesses[:100], self.styles["SmallText"]),
            ])
        t = Table(table_data, colWidths=[100, 80, 55, 260])
        t.setStyle(self._table_style())
        story.append(KeepTogether([
            Paragraph("Competitor Details", self.styles["Heading2Custom"]),
            t,
        ]))

    # ------------------------------------------------------------------
    # Page 6: Competitive Strategy (Blue Ocean + ERRC)
    # ------------------------------------------------------------------
    def _page_competitors_strategy(self, story, report: IdeaReport):
        # Blue Ocean canvas chart
        if report.competitors.blue_ocean_canvas:
            canvas_path = os.path.join(self.tmp_dir, f"{report.idea.id}_blue_ocean.png")
            charts.create_blue_ocean_canvas(report.competitors.blue_ocean_canvas, canvas_path)
            story.append(KeepTogether([
                Paragraph("Blue Ocean Strategy Canvas", self.styles["Heading2Custom"]),
                Image(canvas_path, width=440, height=250),
                Spacer(1, 8),
            ]))

        # ERRC
        errc = report.competitors.errc
        errc_data = [["Eliminate", "Reduce", "Raise", "Create"]]
        max_len = max(
            len(errc.get("eliminate", [])), len(errc.get("reduce", [])),
            len(errc.get("raise", [])), len(errc.get("create", [])), 1
        )
        for i in range(min(max_len, 5)):  # cap rows
            row = []
            for key in ["eliminate", "reduce", "raise", "create"]:
                items = errc.get(key, [])
                cell_text = items[i][:40] if i < len(items) else ""
                row.append(Paragraph(cell_text, self.styles["SmallText"]))
            errc_data.append(row)
        t = Table(errc_data, colWidths=[123, 123, 123, 123])
        t.setStyle(self._table_style())
        story.append(KeepTogether([
            Paragraph("ERRC Strategy Canvas", self.styles["Heading2Custom"]),
            t,
        ]))

        # Strategic Groups
        if report.competitors.strategic_groups:
            story.append(Spacer(1, 8))
            block = [Paragraph("Strategic Groups", self.styles["Heading2Custom"])]
            for sg in report.competitors.strategic_groups[:4]:
                members = ", ".join(sg.get("members", []))[:80]
                block.append(Paragraph(
                    f"<b>{sg.get('group_name', '')}</b>: {members} -- <i>{sg.get('positioning', '')[:60]}</i>",
                    self.styles["BodyCustom"],
                ))
            story.append(KeepTogether(block))

        # Funding Landscape
        if report.competitors.funding_landscape:
            fl = report.competitors.funding_landscape
            story.append(Spacer(1, 8))
            fl_data = [["Metric", "Value"]]
            fl_data.append(["Total Funded in Space", str(fl.get("total_in_space", "---"))])
            fl_data.append(["Avg Round Size", str(fl.get("avg_round_size", "---"))])
            fl_data.append(["Recent Rounds", str(fl.get("recent_rounds_count", "---"))])
            t = Table(fl_data, colWidths=[200, 295])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Funding Landscape", self.styles["Heading2Custom"]),
                t,
            ]))

    # ------------------------------------------------------------------
    # Page 7: Customer Pain Map (charts)
    # ------------------------------------------------------------------
    def _page_pain(self, story, report: IdeaReport):
        story.append(Paragraph("Customer Pain Map", self.styles["Heading2Custom"]))

        # Pain scatter
        pain_path = os.path.join(self.tmp_dir, f"{report.idea.id}_pain.png")
        signals_data = [{"quote": s.quote, "source": s.source} for s in report.pain.pain_signals]
        charts.create_pain_scatter(
            signals_data, report.pain.pain_severity_score,
            report.pain.pain_frequency_score, pain_path,
        )
        story.append(Image(pain_path, width=300, height=240))
        story.append(Spacer(1, 6))

        # Pain journey chart
        if report.pain.journey_pain_map:
            journey_path = os.path.join(self.tmp_dir, f"{report.idea.id}_pain_journey.png")
            charts.create_pain_journey(report.pain.journey_pain_map, journey_path)
            story.append(KeepTogether([
                Paragraph("Customer Pain Journey", self.styles["Heading2Custom"]),
                Image(journey_path, width=440, height=160),
            ]))
            story.append(Spacer(1, 6))

        story.append(Paragraph(
            f"Pain Severity: {report.pain.pain_severity_score}/10 | "
            f"Pain Frequency: {report.pain.pain_frequency_score}/10 | "
            f"Social Buzz: {report.pain.social_buzz_score}/10 | "
            f"Signals: {len(report.pain.pain_signals)}",
            self.styles["BodyCustom"],
        ))

    # ------------------------------------------------------------------
    # Page 8: Pain Quotes & Workarounds
    # ------------------------------------------------------------------
    def _page_pain_quotes(self, story, report: IdeaReport):
        story.append(Paragraph("Top Pain Quotes", self.styles["Heading2Custom"]))
        for s in report.pain.pain_signals[:4]:
            quote_text = s.quote[:120]
            story.append(Paragraph(f'"{quote_text}"', self.styles["Quote"]))
            story.append(Paragraph(f"-- {s.source} | {s.frequency_signal}", self.styles["SmallText"]))
            story.append(Spacer(1, 4))

        # Workarounds
        if report.pain.top_workarounds:
            block = [Paragraph("Current Workarounds", self.styles["Heading2Custom"])]
            for w in report.pain.top_workarounds[:4]:
                block.append(Paragraph(f"\u2022 {w[:100]}", self.styles["BodyCustom"]))
            story.append(KeepTogether(block))

        # WTP
        story.append(Spacer(1, 6))
        story.append(KeepTogether([
            Paragraph("Willingness to Pay", self.styles["Heading2Custom"]),
            Paragraph(report.pain.wtp_summary[:300], self.styles["BodyCustom"]),
        ]))

        # Demand signals
        if report.pain.demand_signals:
            story.append(Spacer(1, 6))
            block = [Paragraph("Demand Signals from Pain Research", self.styles["Heading2Custom"])]
            for ds in report.pain.demand_signals[:4]:
                block.append(Paragraph(
                    f"\u2022 <b>{ds.get('signal', '')[:60]}</b> ({ds.get('source', '')}) -- {ds.get('volume_indicator', '')}",
                    self.styles["BodyCustom"],
                ))
            story.append(KeepTogether(block))

    # ------------------------------------------------------------------
    # Page 9: Trends & Timing
    # ------------------------------------------------------------------
    def _page_trends(self, story, report: IdeaReport):
        story.append(Paragraph("Trends & Timing", self.styles["Heading2Custom"]))
        story.append(Paragraph(
            f"Timing Score: {report.timing.timing_score}/100 | "
            f"S-Curve: {report.timing.s_curve_position.replace('_', ' ').title()} | "
            f"Tech Readiness: {report.timing.technology_readiness.replace('_', ' ').title()}",
            self.styles["BodyCustom"],
        ))
        story.append(Spacer(1, 6))

        # Why now
        story.append(KeepTogether([
            Paragraph("Why Now?", self.styles["Heading2Custom"]),
            Paragraph(report.timing.why_now[:300], self.styles["BodyCustom"]),
        ]))
        story.append(Spacer(1, 6))

        # Google Trends signals
        if report.timing.google_trends_signals:
            gt_data = [["Query", "Trend", "Interest"]]
            for gt in report.timing.google_trends_signals[:4]:
                gt_data.append([
                    Paragraph(str(gt.get("query", gt.get("keyword", "")))[:50], self.styles["SmallText"]),
                    str(gt.get("trend", gt.get("direction", ""))),
                    str(gt.get("interest_level", gt.get("value", gt.get("peak_period", "")))),
                ])
            t = Table(gt_data, colWidths=[200, 120, 175])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Google Trends Signals", self.styles["Heading2Custom"]),
                t,
                Spacer(1, 6),
            ]))

        # Tailwinds
        if report.timing.tailwinds:
            tw_data = [["Trend", "Impact"]]
            for tw in report.timing.tailwinds[:4]:
                tw_data.append([
                    Paragraph(str(tw.get("trend", ""))[:60], self.styles["SmallText"]),
                    Paragraph(str(tw.get("impact", tw.get("evidence", "")))[:80], self.styles["SmallText"]),
                ])
            t = Table(tw_data, colWidths=[220, 275])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Tailwinds", self.styles["Heading2Custom"]),
                t,
                Spacer(1, 6),
            ]))

        # Headwinds
        if report.timing.headwinds:
            hw_data = [["Trend", "Impact"]]
            for hw in report.timing.headwinds[:4]:
                hw_data.append([
                    Paragraph(str(hw.get("trend", ""))[:60], self.styles["SmallText"]),
                    Paragraph(str(hw.get("impact", hw.get("severity", "")))[:80], self.styles["SmallText"]),
                ])
            t = Table(hw_data, colWidths=[220, 275])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Headwinds", self.styles["Heading2Custom"]),
                t,
            ]))

    # ------------------------------------------------------------------
    # Page 10: Unit Economics
    # ------------------------------------------------------------------
    def _page_unit_economics(self, story, report: IdeaReport):
        ue = report.unit_economics
        if not ue:
            return

        story.append(Paragraph("Unit Economics & Monetization", self.styles["Heading2Custom"]))
        story.append(Paragraph(
            f"Unit Economics Score: {ue.unit_economics_score}/100",
            self.styles["BodyCustom"],
        ))
        story.append(Spacer(1, 6))

        # Monetization chart
        if ue.monetization_models:
            monet_path = os.path.join(self.tmp_dir, f"{report.idea.id}_monetization.png")
            charts.create_monetization_chart(ue.monetization_models, monet_path)
            story.append(Image(monet_path, width=400, height=200))
            story.append(Spacer(1, 6))

        # Key unit economics table
        ue_data = [["Metric", "Value"]]
        if ue.estimated_arpu:
            ue_data.append(["Estimated ARPU", str(ue.estimated_arpu)])
        if ue.estimated_cac_range:
            ue_data.append(["CAC Range", str(ue.estimated_cac_range)])
        if ue.estimated_ltv_range:
            ue_data.append(["LTV Range", str(ue.estimated_ltv_range)])
        if ue.ltv_cac_ratio:
            ue_data.append(["LTV/CAC Ratio", str(ue.ltv_cac_ratio)])

        if len(ue_data) > 1:
            t = Table(ue_data, colWidths=[180, 315])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Key Metrics", self.styles["Heading2Custom"]),
                t,
            ]))
            story.append(Spacer(1, 6))

        # Pricing benchmarks
        if ue.pricing_benchmarks:
            pb_data = [["Competitor", "Model", "Price"]]
            for pb in ue.pricing_benchmarks[:5]:
                pb_data.append([
                    str(pb.get("competitor", pb.get("name", "")))[:30],
                    Paragraph(str(pb.get("model", ""))[:50], self.styles["SmallText"]),
                    str(pb.get("price", pb.get("range", pb.get("price_range", ""))))[:30],
                ])
            t = Table(pb_data, colWidths=[130, 210, 155])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Pricing Benchmarks", self.styles["Heading2Custom"]),
                t,
            ]))
            story.append(Spacer(1, 6))

        # Revenue projection
        if ue.revenue_projection:
            rp_data = [["Period", "Projection"]]
            for k, v in list(ue.revenue_projection.items())[:5]:
                rp_data.append([str(k), Paragraph(str(v)[:80], self.styles["SmallText"])])
            t = Table(rp_data, colWidths=[120, 375])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Revenue Projection", self.styles["Heading2Custom"]),
                t,
            ]))

    # ------------------------------------------------------------------
    # Page 11: Regulatory
    # ------------------------------------------------------------------
    def _page_regulatory(self, story, report: IdeaReport):
        reg = report.regulatory
        if not reg:
            return

        story.append(Paragraph("Regulatory & Legal Landscape", self.styles["Heading2Custom"]))
        story.append(Paragraph(
            f"Regulatory Score: {reg.regulatory_score}/100 (100 = no barriers)",
            self.styles["BodyCustom"],
        ))
        story.append(Spacer(1, 6))

        # Regulations table
        if reg.regulations:
            reg_data = [["Regulation", "Impact", "Status"]]
            for r in reg.regulations[:5]:
                reg_data.append([
                    Paragraph(str(r.get("name", r.get("regulation", "")))[:60], self.styles["SmallText"]),
                    str(r.get("impact", "")),
                    str(r.get("status", r.get("compliance_status", ""))),
                ])
            t = Table(reg_data, colWidths=[220, 120, 155])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Key Regulations", self.styles["Heading2Custom"]),
                t,
                Spacer(1, 6),
            ]))

        # Legal risks
        if reg.legal_risks:
            lr_data = [["Risk", "Sev.", "Mitigation"]]
            for lr in reg.legal_risks[:4]:
                lr_data.append([
                    Paragraph(str(lr.get("risk", ""))[:60], self.styles["SmallText"]),
                    str(lr.get("severity", "")),
                    Paragraph(str(lr.get("mitigation", ""))[:80], self.styles["SmallText"]),
                ])
            t = Table(lr_data, colWidths=[160, 40, 295])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Legal Risks", self.styles["Heading2Custom"]),
                t,
                Spacer(1, 6),
            ]))

        # Compliance requirements
        if reg.compliance_requirements:
            block = [Paragraph("Compliance Requirements", self.styles["Heading2Custom"])]
            for req in reg.compliance_requirements[:4]:
                block.append(Paragraph(f"\u2022 {req[:100]}", self.styles["BodyCustom"]))
            story.append(KeepTogether(block))
            story.append(Spacer(1, 6))

        # Data privacy
        if reg.data_privacy_requirements:
            block = [Paragraph("Data Privacy", self.styles["Heading2Custom"])]
            for dp in reg.data_privacy_requirements[:4]:
                block.append(Paragraph(f"\u2022 {dp[:100]}", self.styles["BodyCustom"]))
            story.append(KeepTogether(block))

        # Industry licenses
        if reg.industry_licenses:
            story.append(Spacer(1, 4))
            block = [Paragraph("Required Licenses", self.styles["Heading2Custom"])]
            for lic in reg.industry_licenses[:4]:
                block.append(Paragraph(f"\u2022 {lic[:100]}", self.styles["BodyCustom"]))
            story.append(KeepTogether(block))

    # ------------------------------------------------------------------
    # Page 12: Risk Matrix
    # ------------------------------------------------------------------
    def _page_risk_matrix(self, story, report: IdeaReport):
        story.append(Paragraph("Hypothesis Risk Matrix", self.styles["Heading2Custom"]))
        story.append(Spacer(1, 6))

        hypotheses = report.search_plan.key_hypotheses or []

        risk_path = os.path.join(self.tmp_dir, f"{report.idea.id}_risk_matrix.png")
        charts.create_risk_matrix(hypotheses, risk_path)
        story.append(Image(risk_path, width=340, height=280))
        story.append(Spacer(1, 8))

        # Hypotheses legend
        if hypotheses:
            legend_data = [["ID", "Hypothesis"]]
            for i, h in enumerate(hypotheses[:7], 1):
                legend_data.append([f"H{i}", Paragraph(h[:120], self.styles["SmallText"])])

            t = Table(legend_data, colWidths=[35, 460])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Hypotheses Legend", self.styles["Heading2Custom"]),
                t,
            ]))

    # ------------------------------------------------------------------
    # Page 13: Recommendations
    # ------------------------------------------------------------------
    def _page_recommendations(self, story, report: IdeaReport):
        story.append(Paragraph("Recommendations & Next Steps", self.styles["Heading2Custom"]))
        story.append(Spacer(1, 6))

        # Readiness scorecard
        readiness_scores = {}
        for a in report.pmf_score.axes:
            readiness_scores[a.axis] = a.score
        if readiness_scores:
            scorecard_path = os.path.join(self.tmp_dir, f"{report.idea.id}_readiness.png")
            charts.create_readiness_scorecard(readiness_scores, scorecard_path)
            chart_height = min(270, max(150, len(readiness_scores) * 27))
            story.append(Image(scorecard_path, width=420, height=chart_height))
            story.append(Spacer(1, 10))

        # 30/60/90 day plan
        plan_data = [["Timeline", "Actions"]]
        plan_data.append(["Days 1-30", Paragraph(
            "\u2022 Validate core assumptions with 20+ customer interviews<br/>"
            "\u2022 Build landing page and measure conversion<br/>"
            "\u2022 Define MVP scope based on top pain points",
            self.styles["SmallText"],
        )])
        plan_data.append(["Days 31-60", Paragraph(
            "\u2022 Launch MVP to early adopters<br/>"
            "\u2022 Set up analytics and track key metrics<br/>"
            "\u2022 Iterate based on user feedback",
            self.styles["SmallText"],
        )])
        plan_data.append(["Days 61-90", Paragraph(
            "\u2022 Measure retention and engagement<br/>"
            "\u2022 Test monetization model<br/>"
            "\u2022 Decide: scale, iterate, or pivot",
            self.styles["SmallText"],
        )])
        t = Table(plan_data, colWidths=[70, 425])
        t.setStyle(self._table_style())
        story.append(KeepTogether([
            Paragraph("30/60/90 Day Action Plan", self.styles["Heading2Custom"]),
            t,
        ]))
        story.append(Spacer(1, 8))

        # Key hypotheses to validate
        block = [Paragraph("Critical Assumptions to Validate", self.styles["Heading2Custom"])]
        for i, h in enumerate(report.search_plan.key_hypotheses[:5], 1):
            block.append(Paragraph(f"{i}. {h[:120]}", self.styles["BodyCustom"]))
        story.append(KeepTogether(block))

        # Whitespace opportunities
        if report.competitors.whitespace_opportunities:
            story.append(Spacer(1, 6))
            block = [Paragraph("Whitespace Opportunities", self.styles["Heading2Custom"])]
            for opp in report.competitors.whitespace_opportunities[:4]:
                block.append(Paragraph(f"\u2022 {opp[:120]}", self.styles["BodyCustom"]))
            story.append(KeepTogether(block))

    # ------------------------------------------------------------------
    # Pivot Scenarios (conditional)
    # ------------------------------------------------------------------
    def _page_pivots(self, story, report: IdeaReport):
        if not report.pivot_plan:
            return

        story.append(Paragraph("Pivot Scenarios", self.styles["Heading2Custom"]))
        story.append(Paragraph(report.pivot_plan.reasoning[:300], self.styles["BodyCustom"]))
        story.append(Spacer(1, 8))

        for i, p in enumerate(report.pivot_plan.scenarios[:3], 1):
            type_label = p.pivot_type.replace("_", " ").title()
            card_data = [
                ["Hypothesis", Paragraph(p.hypothesis[:150], self.styles["SmallText"])],
                ["Experiment", Paragraph(p.validation_experiment[:150], self.styles["SmallText"])],
                ["Success Metric", p.success_metric[:60]],
                ["Timeline", f"{p.timeline_days} days"],
                ["Risk", Paragraph(p.risk[:100], self.styles["SmallText"])],
                ["Inspiration", p.company_inspiration[:60]],
            ]
            t = Table(card_data, colWidths=[90, 405])
            t.setStyle(self._table_style(has_header=False))
            story.append(KeepTogether([
                Paragraph(
                    f"<b>#{i} -- {type_label}</b> (Confidence: {p.confidence_score}/100)",
                    self.styles["Heading2Custom"],
                ),
                t,
                Spacer(1, 6),
            ]))

    # ------------------------------------------------------------------
    # Sources Appendix
    # ------------------------------------------------------------------
    def _page_sources(self, story, report: IdeaReport):
        story.append(Paragraph("Sources & Research Appendix", self.styles["Heading2Custom"]))
        story.append(Spacer(1, 6))

        # Source credibility table
        if report.market.source_credibility:
            sc_data = [["Source", "Type", "Credibility"]]
            for sc in report.market.source_credibility[:8]:
                sc_data.append([
                    Paragraph(str(sc.get("source", sc.get("name", "")))[:50], self.styles["SmallText"]),
                    str(sc.get("type", "")),
                    str(sc.get("credibility", sc.get("score", ""))),
                ])
            t = Table(sc_data, colWidths=[220, 130, 145])
            t.setStyle(self._table_style())
            story.append(KeepTogether([
                Paragraph("Source Credibility", self.styles["Heading2Custom"]),
                t,
                Spacer(1, 8),
            ]))

        # Market sources
        if report.market.sources:
            block = [Paragraph("Market Research Sources", self.styles["Heading2Custom"])]
            for i, src in enumerate(report.market.sources[:10], 1):
                block.append(Paragraph(f"{i}. {src[:100]}", self.styles["SmallText"]))
            story.append(KeepTogether(block))
            story.append(Spacer(1, 6))

        # Search plan queries used
        story.append(Paragraph("Research Queries Used", self.styles["Heading2Custom"]))
        query_categories = [
            ("Market", report.search_plan.market_queries),
            ("Competitors", report.search_plan.competitor_queries),
            ("Pain", report.search_plan.pain_queries),
            ("Trends", report.search_plan.trend_queries),
        ]
        if report.search_plan.demand_queries:
            query_categories.append(("Demand", report.search_plan.demand_queries))
        if report.search_plan.unit_economics_queries:
            query_categories.append(("Unit Economics", report.search_plan.unit_economics_queries))
        if report.search_plan.regulatory_queries:
            query_categories.append(("Regulatory", report.search_plan.regulatory_queries))

        for category_name, queries in query_categories:
            if queries:
                block = [Paragraph(f"<b>{category_name}</b>", self.styles["SmallText"])]
                for q in queries[:4]:
                    block.append(Paragraph(f"  \u2022 {q[:80]}", self.styles["SmallText"]))
                block.append(Spacer(1, 3))
                story.append(KeepTogether(block))
