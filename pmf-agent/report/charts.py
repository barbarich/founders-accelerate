import math
import os
import tempfile

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np


def create_gauge_chart(score: float, verdict: str, output_path: str) -> str:
    """Create a semicircle gauge chart for PMF score."""
    fig, ax = plt.subplots(figsize=(6, 3.5), subplot_kw={"projection": "polar"})

    # Semicircle from left to right
    theta_bg = np.linspace(np.pi, 0, 100)

    # Background segments: red, yellow, green
    colors_map = [
        (np.pi, np.pi * 0.6875, "#FF4444"),   # 0-45: PIVOT (red)
        (np.pi * 0.6875, np.pi * 0.3125, "#FFB800"),  # 45-69: VALIDATE (yellow)
        (np.pi * 0.3125, 0, "#00C853"),        # 70-100: GO (green)
    ]

    for start, end, color in colors_map:
        theta_seg = np.linspace(start, end, 50)
        ax.fill_between(theta_seg, 0.6, 1.0, color=color, alpha=0.3)

    # Score needle
    score_angle = np.pi * (1 - score / 100)
    ax.plot([score_angle, score_angle], [0, 0.95], color="#333333", linewidth=3)
    ax.plot(score_angle, 0.95, "o", color="#333333", markersize=8)

    # Center dot
    ax.plot(0, 0, "o", color="#333333", markersize=10, transform=ax.transData)

    ax.set_ylim(0, 1.2)
    ax.set_thetamin(0)
    ax.set_thetamax(180)
    ax.set_axis_off()

    # Score text
    verdict_colors = {"GO": "#00C853", "VALIDATE": "#FFB800", "PIVOT": "#FF4444"}
    color = verdict_colors.get(verdict, "#333333")

    fig.text(0.5, 0.15, f"{score:.0f}/100", ha="center", va="center",
             fontsize=32, fontweight="bold", color="#333333")
    fig.text(0.5, 0.02, verdict, ha="center", va="center",
             fontsize=20, fontweight="bold", color=color)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches="tight", transparent=True)
    plt.close()
    return output_path


def _num(v, default: float = 0.0) -> float:
    """Coerce a possibly-string/None LLM value to float without crashing."""
    try:
        return float(v)
    except (TypeError, ValueError):
        return default


def create_radar_chart(axes_data: list[dict], output_path: str) -> str:
    """Create radar chart with 6 PMF axes."""
    axes_data = [a for a in (axes_data or []) if isinstance(a, dict)]
    if not axes_data:
        # Nothing to plot — emit a small placeholder so the page still renders.
        fig, ax = plt.subplots(figsize=(6, 6))
        ax.text(0.5, 0.5, "Недостаточно данных для диаграммы",
                ha="center", va="center", fontsize=11, color="gray")
        ax.axis("off")
        plt.savefig(output_path, dpi=150, bbox_inches="tight")
        plt.close()
        return output_path

    labels = [str(a.get("axis", "")).replace("_", " ").title() for a in axes_data]
    values = [_num(a.get("score")) for a in axes_data]

    num_vars = len(labels)
    angles = np.linspace(0, 2 * np.pi, num_vars, endpoint=False).tolist()
    values_plot = values + [values[0]]
    angles += [angles[0]]

    fig, ax = plt.subplots(figsize=(6, 6), subplot_kw=dict(polar=True))
    ax.fill(angles, values_plot, color="#4A90D9", alpha=0.25)
    ax.plot(angles, values_plot, color="#4A90D9", linewidth=2, marker="o", markersize=6)

    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(labels, size=9, fontweight="bold")
    ax.set_ylim(0, 100)
    ax.set_yticks([20, 40, 60, 80, 100])
    ax.set_yticklabels(["20", "40", "60", "80", "100"], size=7, color="gray")
    ax.grid(color="gray", linewidth=0.5, alpha=0.5)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches="tight")
    plt.close()
    return output_path


def create_tam_sam_som_chart(tam: float, sam: float, som: float, output_path: str) -> str:
    """Create nested circles for TAM/SAM/SOM."""
    fig, ax = plt.subplots(figsize=(5, 5))

    max_r = 1.0
    if tam > 0:
        sam_r = max_r * (sam / tam) ** 0.5
        som_r = max_r * (som / tam) ** 0.5
    else:
        sam_r, som_r = 0.6, 0.3

    circles = [
        (max_r, "#E3F2FD", "#1565C0", f"TAM\n${tam:.1f}B"),
        (sam_r, "#BBDEFB", "#1565C0", f"SAM\n${sam:.1f}B"),
        (som_r, "#64B5F6", "#1565C0", f"SOM\n${som:.1f}B"),
    ]

    for r, facecolor, edgecolor, label in circles:
        circle = plt.Circle((0.5, 0.5), r * 0.45, facecolor=facecolor,
                           edgecolor=edgecolor, linewidth=2)
        ax.add_patch(circle)

    # Labels
    ax.text(0.5, 0.92, f"TAM ${tam:.1f}B", ha="center", fontsize=11, fontweight="bold", color="#1565C0")
    ax.text(0.5, 0.5 + sam_r * 0.42, f"SAM ${sam:.1f}B", ha="center", fontsize=10, color="#1565C0")
    ax.text(0.5, 0.5, f"SOM\n${som:.1f}B", ha="center", fontsize=9, fontweight="bold", color="#0D47A1")

    ax.set_xlim(-0.05, 1.05)
    ax.set_ylim(-0.05, 1.05)
    ax.set_aspect("equal")
    ax.axis("off")

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches="tight")
    plt.close()
    return output_path


def create_competitor_scatter(competitors: list[dict], output_path: str) -> str:
    """Create 2x2 scatter: Value vs Market Reach."""
    fig, ax = plt.subplots(figsize=(6, 5))

    threat_colors = {"High": "#FF4444", "Medium": "#FFB800", "Low": "#00C853"}

    for c in competitors:
        if not isinstance(c, dict):
            continue
        color = threat_colors.get(c.get("threat_level", "Medium"), "#999999")
        reach = _num(c.get("reach_score"), 50)
        value = _num(c.get("value_score"), 50)
        name = str(c.get("name", ""))
        ax.scatter(reach, value, s=200, c=color, alpha=0.7,
                  edgecolors="white", linewidth=2, zorder=5)
        ax.annotate(name, (reach, value),
                   textcoords="offset points", xytext=(8, 8), fontsize=8)

    # Quadrant lines
    ax.axhline(y=50, color="gray", linestyle="--", alpha=0.3)
    ax.axvline(x=50, color="gray", linestyle="--", alpha=0.3)

    # Labels
    ax.set_xlabel("Market Reach", fontsize=10, fontweight="bold")
    ax.set_ylabel("Value Delivered", fontsize=10, fontweight="bold")
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.set_title("Competitive Landscape", fontsize=12, fontweight="bold")

    # Quadrant labels
    ax.text(25, 95, "Niche\nLeaders", ha="center", fontsize=8, color="gray", alpha=0.5)
    ax.text(75, 95, "Market\nLeaders", ha="center", fontsize=8, color="gray", alpha=0.5)
    ax.text(25, 5, "Weak\nPlayers", ha="center", fontsize=8, color="gray", alpha=0.5)
    ax.text(75, 5, "Over-\nDistributed", ha="center", fontsize=8, color="gray", alpha=0.5)

    legend_patches = [mpatches.Patch(color=c, label=l) for l, c in threat_colors.items()]
    ax.legend(handles=legend_patches, title="Threat Level", loc="lower right", fontsize=8)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches="tight")
    plt.close()
    return output_path


def create_pain_scatter(pain_signals: list[dict], severity: int, frequency: int, output_path: str) -> str:
    """Create pain scatter plot."""
    fig, ax = plt.subplots(figsize=(6, 5))

    # Main point
    ax.scatter(severity, frequency, s=len(pain_signals) * 50 + 100,
              c="#E53935", alpha=0.6, edgecolors="white", linewidth=2, zorder=5)
    ax.annotate(f"{len(pain_signals)} signals", (severity, frequency),
               textcoords="offset points", xytext=(10, 10), fontsize=10, fontweight="bold")

    # Reference zones
    ax.axhspan(7, 10, alpha=0.05, color="red")
    ax.axvspan(7, 10, alpha=0.05, color="red")

    ax.set_xlabel("Pain Severity", fontsize=10, fontweight="bold")
    ax.set_ylabel("Pain Frequency", fontsize=10, fontweight="bold")
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)
    ax.set_title("Customer Pain Map", fontsize=12, fontweight="bold")

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches="tight")
    plt.close()
    return output_path


def create_comparison_bar(ideas: list[dict], output_path: str) -> str:
    """Create comparison bar chart of PMF scores for multiple ideas."""
    fig, ax = plt.subplots(figsize=(8, max(4, len(ideas) * 0.8)))

    names = [i["title"][:30] for i in ideas]
    scores = [i["score"] for i in ideas]
    colors = []
    for s in scores:
        if s >= 70:
            colors.append("#00C853")
        elif s >= 45:
            colors.append("#FFB800")
        else:
            colors.append("#FF4444")

    y_pos = range(len(names))
    bars = ax.barh(y_pos, scores, color=colors, height=0.6, edgecolor="white", linewidth=2)

    ax.set_yticks(y_pos)
    ax.set_yticklabels(names, fontsize=9)
    ax.set_xlim(0, 100)
    ax.set_xlabel("PMF Score", fontsize=10, fontweight="bold")
    ax.set_title("Idea Comparison", fontsize=12, fontweight="bold")

    for bar, score in zip(bars, scores):
        ax.text(bar.get_width() + 2, bar.get_y() + bar.get_height() / 2,
               f"{score:.0f}", va="center", fontsize=10, fontweight="bold")

    ax.axvline(x=70, color="green", linestyle="--", alpha=0.3, label="GO threshold")
    ax.axvline(x=45, color="orange", linestyle="--", alpha=0.3, label="VALIDATE threshold")
    ax.legend(fontsize=8)

    plt.tight_layout()
    plt.savefig(output_path, dpi=150, bbox_inches="tight")
    plt.close()
    return output_path


# ---------------------------------------------------------------------------
# McKinsey-quality charts
# ---------------------------------------------------------------------------

def create_blue_ocean_canvas(canvas_data: list[dict], output_path: str) -> str:
    """Blue Ocean strategy canvas — value curves."""
    fig, ax = plt.subplots(figsize=(8, 4.5))

    if not canvas_data:
        canvas_data = [{"factor": "N/A", "our_score": 50, "competitor_avg": 50, "leader_name": "", "leader_score": 50}]

    factors = [d.get("factor", "")[:15] for d in canvas_data]
    our_scores = [d.get("our_score", 50) for d in canvas_data]
    comp_avg = [d.get("competitor_avg", 50) for d in canvas_data]
    leader_scores = [d.get("leader_score", 50) for d in canvas_data]

    x = range(len(factors))

    ax.plot(x, comp_avg, 'o--', color='#9ca3af', linewidth=1.5, markersize=6, label='Competitor avg', alpha=0.7)
    ax.plot(x, leader_scores, 's--', color='#2f4b7c', linewidth=1.5, markersize=6, label='Market leader', alpha=0.7)
    ax.plot(x, our_scores, 'D-', color='#d45087', linewidth=2.5, markersize=8, label='Your strategy', zorder=5)

    ax.fill_between(x, comp_avg, our_scores, alpha=0.08, color='#d45087')

    ax.set_xticks(list(x))
    ax.set_xticklabels(factors, rotation=30, ha='right', fontsize=8)
    ax.set_ylim(0, 100)
    ax.set_ylabel('Offering Level', fontsize=9, color='#374151')
    ax.set_title('Blue Ocean Strategy Canvas', fontsize=12, fontweight='bold', color='#374151', pad=12)
    ax.legend(fontsize=8, loc='upper right')
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.grid(axis='y', alpha=0.2, color='#e5e7eb')

    plt.tight_layout()
    plt.savefig(output_path, dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path


def create_pain_journey(journey_data: list[dict], output_path: str) -> str:
    """Pain journey heatmap across customer stages."""
    from matplotlib.colors import LinearSegmentedColormap

    stages = ["Awareness", "Consideration", "Purchase", "Onboarding", "Usage", "Renewal"]

    severity_map = {}
    count_map = {}
    for d in journey_data:
        stage = str(d.get("stage", ""))
        for s in stages:
            if s.lower() in stage.lower():
                severity_map[s] = d.get("severity", 3)
                count_map[s] = d.get("pain_count", len(d.get("pains", [])))

    severities = [severity_map.get(s, 2) for s in stages]
    counts = [count_map.get(s, 0) for s in stages]

    fig, ax = plt.subplots(figsize=(8, 2.8))

    cmap = LinearSegmentedColormap.from_list('pain', ['#dcfce7', '#fef9c3', '#fee2e2', '#dc2626'])
    norm_sev = [s / 10 for s in severities]
    colors = [cmap(v) for v in norm_sev]

    bars = ax.barh(range(len(stages)), [1] * len(stages), height=0.7, color=colors, edgecolor='white', linewidth=2)

    for i, (stage, sev, cnt) in enumerate(zip(stages, severities, counts)):
        ax.text(0.5, i, f"{stage}  |  {sev}/10 severity  |  {cnt} signals",
                ha='center', va='center', fontsize=8, fontweight='bold', color='#374151')

    ax.set_xlim(0, 1)
    ax.set_yticks([])
    ax.set_xticks([])
    for spine in ax.spines.values():
        spine.set_visible(False)
    ax.set_title('Customer Pain Journey', fontsize=12, fontweight='bold', color='#374151', pad=10)

    plt.tight_layout()
    plt.savefig(output_path, dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path


def create_demand_heatmap(signals: list[dict], output_path: str) -> str:
    """Demand signals by platform — horizontal bars."""
    if not signals:
        signals = [{"platform": "No data", "metric": "", "value": "0", "trend": "stable"}]

    fig, ax = plt.subplots(figsize=(7, max(2, len(signals[:8]) * 0.5)))

    platforms = []
    values = []
    trends = []
    for s in signals[:8]:
        platforms.append(f"{s.get('platform','')} — {s.get('metric','')}"[:30])
        val_str = str(s.get('value', '0'))
        try:
            val = float(''.join(c for c in val_str if c.isdigit() or c == '.') or '0')
        except ValueError:
            val = 50
        values.append(min(val, 100))
        trend = str(s.get('trend', 'stable')).lower()
        trends.append('\u2191' if 'ris' in trend else '\u2193' if 'dec' in trend else '\u2192')

    y = range(len(platforms))
    bar_colors = ['#15803d' if v > 70 else '#a16207' if v > 40 else '#9ca3af' for v in values]

    ax.barh(y, values, color=bar_colors, height=0.6, alpha=0.8, edgecolor='white')

    for i, (p, v, t) in enumerate(zip(platforms, values, trends)):
        ax.text(max(v + 2, 5), i, f"{t} {v:.0f}", va='center', fontsize=8, fontweight='bold', color='#374151')

    ax.set_yticks(list(y))
    ax.set_yticklabels(platforms, fontsize=8)
    ax.set_xlim(0, 110)
    ax.set_xlabel('Signal Strength', fontsize=9, color='#374151')
    ax.set_title('Demand Signals by Platform', fontsize=12, fontweight='bold', color='#374151', pad=10)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.grid(axis='x', alpha=0.15)
    ax.invert_yaxis()

    plt.tight_layout()
    plt.savefig(output_path, dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path


def create_monetization_chart(models_data: list[dict], output_path: str) -> str:
    """Monetization model fit comparison."""
    if not models_data:
        models_data = [{"model": "N/A", "fit_score": 0}]

    fig, ax = plt.subplots(figsize=(7, 3.5))

    models = [d.get("model", "")[:20] for d in models_data]
    scores = [d.get("fit_score", 0) for d in models_data]

    colors = ['#15803d' if s >= 70 else '#a16207' if s >= 45 else '#dc2626' for s in scores]
    bars = ax.bar(range(len(models)), scores, color=colors, width=0.6, alpha=0.85, edgecolor='white', linewidth=2)

    for bar, score in zip(bars, scores):
        ax.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 2,
                f'{score}', ha='center', fontsize=10, fontweight='bold', color='#374151')

    ax.set_xticks(range(len(models)))
    ax.set_xticklabels(models, fontsize=9, rotation=15, ha='right')
    ax.set_ylim(0, 110)
    ax.set_ylabel('Fit Score', fontsize=9, color='#374151')
    ax.set_title('Monetization Model Fit', fontsize=12, fontweight='bold', color='#374151', pad=10)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.grid(axis='y', alpha=0.15)
    ax.axhline(y=70, color='#15803d', linestyle='--', alpha=0.3, label='Good fit')
    ax.axhline(y=45, color='#a16207', linestyle='--', alpha=0.3, label='Moderate')
    ax.legend(fontsize=7)

    plt.tight_layout()
    plt.savefig(output_path, dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path


def create_risk_matrix(hypotheses: list[str], output_path: str) -> str:
    """Hypothesis risk matrix — 2x2 scatter."""
    fig, ax = plt.subplots(figsize=(6, 5))

    if not hypotheses:
        hypotheses = ["No hypotheses"]
    n = len(hypotheses)

    np.random.seed(42)
    impacts = np.linspace(30, 90, n) + np.random.normal(0, 8, n)
    uncertainties = np.linspace(30, 85, n)[::-1] + np.random.normal(0, 8, n)
    impacts = np.clip(impacts, 10, 95)
    uncertainties = np.clip(uncertainties, 10, 95)

    ax.axhspan(50, 100, xmin=0, xmax=0.5, alpha=0.04, color='#a16207')
    ax.axhspan(50, 100, xmin=0.5, xmax=1.0, alpha=0.06, color='#dc2626')
    ax.axhspan(0, 50, xmin=0, xmax=0.5, alpha=0.03, color='#15803d')
    ax.axhspan(0, 50, xmin=0.5, xmax=1.0, alpha=0.04, color='#2563eb')

    ax.scatter(impacts[:8], uncertainties[:8], s=250, c='#2f4b7c', alpha=0.7, edgecolors='white', linewidth=2, zorder=5)

    for i in range(min(n, 8)):
        ax.annotate(f'H{i+1}', (impacts[i], uncertainties[i]), ha='center', va='center',
                   fontsize=7, fontweight='bold', color='white', zorder=6)

    ax.axhline(y=50, color='#9ca3af', linestyle='-', alpha=0.3)
    ax.axvline(x=50, color='#9ca3af', linestyle='-', alpha=0.3)

    ax.text(25, 90, 'MONITOR', ha='center', fontsize=9, color='#a16207', alpha=0.5, fontweight='bold')
    ax.text(75, 90, 'VALIDATE\nNOW', ha='center', fontsize=9, color='#dc2626', alpha=0.5, fontweight='bold')
    ax.text(25, 15, 'LOW\nPRIORITY', ha='center', fontsize=9, color='#15803d', alpha=0.5, fontweight='bold')
    ax.text(75, 15, 'RESEARCH', ha='center', fontsize=9, color='#2563eb', alpha=0.5, fontweight='bold')

    ax.set_xlabel('Impact if Wrong', fontsize=9, fontweight='bold', color='#374151')
    ax.set_ylabel('Uncertainty Level', fontsize=9, fontweight='bold', color='#374151')
    ax.set_xlim(0, 100)
    ax.set_ylim(0, 100)
    ax.set_title('Hypothesis Risk Matrix', fontsize=12, fontweight='bold', color='#374151', pad=10)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)

    plt.tight_layout()
    plt.savefig(output_path, dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path


def create_readiness_scorecard(scores: dict, output_path: str) -> str:
    """Market readiness scorecard — horizontal progress bars."""
    if not scores:
        scores = {"No data": 0}

    fig, ax = plt.subplots(figsize=(7, max(2.5, len(scores) * 0.45)))

    criteria = list(scores.keys())
    values = list(scores.values())
    y = range(len(criteria))

    ax.barh(y, [100] * len(criteria), height=0.5, color='#f3f4f6', edgecolor='none')

    bar_colors = ['#15803d' if v >= 70 else '#a16207' if v >= 45 else '#dc2626' for v in values]
    ax.barh(y, values, height=0.5, color=bar_colors, alpha=0.85)

    for i, (c, v) in enumerate(zip(criteria, values)):
        ax.text(v + 2, i, f'{v}', va='center', fontsize=9, fontweight='bold', color='#374151')

    ax.set_yticks(list(y))
    ax.set_yticklabels([c.replace('_', ' ').title()[:25] for c in criteria], fontsize=8)
    ax.set_xlim(0, 110)
    ax.set_title('Market Readiness Scorecard', fontsize=12, fontweight='bold', color='#374151', pad=10)
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.set_xticks([])
    ax.invert_yaxis()

    plt.tight_layout()
    plt.savefig(output_path, dpi=200, bbox_inches='tight', facecolor='white')
    plt.close()
    return output_path
