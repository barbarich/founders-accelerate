import asyncio
import os
import sys
from datetime import date
from pathlib import Path
from typing import Optional

import typer
import yaml
from dotenv import load_dotenv
from rich.console import Console
from rich.live import Live
from rich.panel import Panel
from rich.table import Table as RichTable
from rich.text import Text
import anthropic
from google import genai

from models.dataclasses import IdeaInput, IdeaReport
from agents.orchestrator import OrchestratorAgent
from agents.market import MarketAgent
from agents.competitors import CompetitorAgent
from agents.customer_pain import CustomerPainAgent
from agents.trends import TrendsAgent
from agents.scorer import ScorerAgent
from agents.pivot_advisor import PivotAdvisorAgent
from report.pdf_generator import PDFReportGenerator

load_dotenv()

app = typer.Typer(name="pmf-agent", help="PMF Research Agent — analyze startup ideas for product-market fit")
console = Console()


def load_config() -> dict:
    config_path = Path(__file__).parent / "config.yaml"
    if config_path.exists():
        with open(config_path) as f:
            cfg = yaml.safe_load(f)
    else:
        cfg = {
            "provider": "gemini",
            "models": {
                "gemini": {
                    "orchestrator": "gemini-2.0-flash",
                    "research": "gemini-2.0-flash",
                    "pivot": "gemini-2.0-flash",
                },
                "anthropic": {
                    "orchestrator": "claude-opus-4-5-20250514",
                    "research": "claude-sonnet-4-6-20250514",
                    "pivot": "claude-opus-4-5-20250514",
                },
            },
            "thresholds": {"go": 70, "validate_min": 45, "pivot_trigger": 50},
            "output": {"dir": "./reports"},
        }

    # Resolve models for the active provider
    provider = cfg.get("provider", "gemini")
    resolved_models = cfg.get("models", {}).get(provider, cfg.get("models", {}).get("gemini", {}))
    cfg["active_models"] = resolved_models
    cfg["provider"] = provider
    return cfg


def create_client(provider: str):
    """Create the appropriate API client based on provider."""
    if provider == "gemini":
        api_key = os.environ.get("GEMINI_API_KEY")
        if not api_key:
            console.print("[red]Error: GEMINI_API_KEY not set. Add it to .env file.[/red]")
            raise typer.Exit(1)
        return genai.Client(api_key=api_key)
    else:
        api_key = os.environ.get("ANTHROPIC_API_KEY")
        if not api_key:
            console.print("[red]Error: ANTHROPIC_API_KEY not set. Add it to .env file.[/red]")
            raise typer.Exit(1)
        return anthropic.AsyncAnthropic()


def load_ideas(input_path: str) -> list[IdeaInput]:
    with open(input_path) as f:
        data = yaml.safe_load(f)

    ideas = []
    for item in data.get("ideas", []):
        ideas.append(IdeaInput(
            id=item["id"],
            title=item["title"],
            description=item["description"],
            market=item.get("market", "Global"),
            stage=item.get("stage", "idea"),
            founder=item.get("founder", "Unknown"),
        ))
    return ideas


async def analyze_idea(
    idea: IdeaInput,
    client,
    config: dict,
    verbose: bool = False,
) -> IdeaReport:
    models = config["active_models"]
    thresholds = config["thresholds"]

    verdict_colors = {"GO": "green", "VALIDATE": "yellow", "PIVOT": "red"}

    def status(agent: str, msg: str, done: bool = False):
        mark = "[green]✓[/green]" if done else "[cyan]…[/cyan]"
        console.print(f"  → [bold][{agent}][/bold]  {msg} {mark}")

    console.print(f"\n[bold cyan]▶ {idea.title}[/bold cyan]")

    # 1. Orchestrator
    status("Orchestrator", "Decomposing idea...")
    orchestrator = OrchestratorAgent(client, models["orchestrator"])
    plan = await orchestrator.run(idea)
    status("Orchestrator", "Decomposing idea...", done=True)

    # 2-5. Research agents in parallel
    market_agent = MarketAgent(client, models["research"])
    competitor_agent = CompetitorAgent(client, models["research"])
    pain_agent = CustomerPainAgent(client, models["research"])
    trends_agent = TrendsAgent(client, models["research"])

    status("Research", "Running market, competitor, pain, trends agents in parallel...")

    market_data, competitor_data, pain_data, timing_data = await asyncio.gather(
        market_agent.run(plan),
        competitor_agent.run(plan),
        pain_agent.run(plan),
        trends_agent.run(plan),
    )

    status("Market", f"TAM: {market_data.tam}", done=True)
    status("Competitors", f"Found {len(competitor_data.competitors)} competitors", done=True)
    status("Pain", f"Found {len(pain_data.pain_signals)} pain signals", done=True)
    status("Trends", f"Timing score: {timing_data.timing_score}/100", done=True)

    # 6. Scorer
    status("Scorer", "Calculating PMF score...")
    scorer = ScorerAgent(client, models["research"])
    pmf_score = await scorer.run(plan, market_data, competitor_data, pain_data, timing_data)
    verdict_color = verdict_colors.get(pmf_score.verdict, "white")
    status("Scorer", f"PMF Score: {pmf_score.weighted_total:.0f}/100 — [{verdict_color}]{pmf_score.verdict}[/{verdict_color}]", done=True)

    # 7. Pivot advisor (conditional)
    pivot_plan = None
    if pmf_score.weighted_total < thresholds.get("pivot_trigger", 50):
        status("Pivot", "Generating pivot scenarios...")
        pivot_agent = PivotAdvisorAgent(client, models["pivot"])
        pivot_plan = await pivot_agent.run(plan, pmf_score, market_data, competitor_data, pain_data)
        status("Pivot", f"Generated {len(pivot_plan.scenarios)} pivot scenarios", done=True)

    return IdeaReport(
        idea=idea,
        search_plan=plan,
        market=market_data,
        competitors=competitor_data,
        pain=pain_data,
        timing=timing_data,
        pmf_score=pmf_score,
        pivot_plan=pivot_plan,
    )


@app.command()
def analyze(
    input: Optional[str] = typer.Option(None, "--input", "-i", help="Path to ideas YAML file"),
    idea: Optional[str] = typer.Option(None, "--idea", help="Single idea title"),
    market: str = typer.Option("Global", "--market", "-m", help="Target market"),
    stage: str = typer.Option("idea", "--stage", "-s", help="Stage: idea/waitlist/mvp/growth"),
    output: Optional[str] = typer.Option(None, "--output", "-o", help="Output PDF path"),
    verbose: bool = typer.Option(False, "--verbose", "-v", help="Verbose output"),
):
    """Analyze startup ideas for product-market fit."""
    config = load_config()
    client = create_client(config["provider"])

    if input:
        ideas = load_ideas(input)
    elif idea:
        ideas = [IdeaInput(
            id="inline_01", title=idea, description=idea,
            market=market, stage=stage, founder="User",
        )]
    else:
        console.print("[red]Error: Provide --input file or --idea text[/red]")
        raise typer.Exit(1)

    console.print(Panel.fit(
        f"[bold]PMF Research Agent[/bold]\n"
        f"Provider: {config['provider']} | Analyzing {len(ideas)} idea(s)",
        border_style="cyan",
    ))

    async def run_all():
        # Process ideas concurrently
        if len(ideas) > 1:
            tasks = [analyze_idea(i, client, config, verbose) for i in ideas]
            return await asyncio.gather(*tasks)
        else:
            return [await analyze_idea(ideas[0], client, config, verbose)]

    reports = asyncio.run(run_all())

    # Generate PDFs
    output_dir = config.get("output", {}).get("dir", "./reports")
    generator = PDFReportGenerator(output_dir)

    for report in reports:
        pdf_path = generator.generate(report)
        console.print(f"  → [bold][PDF][/bold]  Report saved: [green]{pdf_path}[/green] [green]✓[/green]")

    console.print(f"\n[bold green]Done! {len(reports)} report(s) generated.[/bold green]")


@app.command()
def compare(
    input: str = typer.Option(..., "--input", "-i", help="Path to ideas YAML file"),
    output: Optional[str] = typer.Option(None, "--output", "-o", help="Output PDF path"),
    verbose: bool = typer.Option(False, "--verbose", "-v", help="Verbose output"),
):
    """Compare multiple ideas side by side."""
    config = load_config()
    client = create_client(config["provider"])
    ideas = load_ideas(input)

    if len(ideas) < 2:
        console.print("[red]Error: Need at least 2 ideas to compare.[/red]")
        raise typer.Exit(1)

    console.print(Panel.fit(
        f"[bold]PMF Comparison Mode[/bold]\nComparing {len(ideas)} ideas",
        border_style="cyan",
    ))

    async def run_all():
        tasks = [analyze_idea(i, client, config, verbose) for i in ideas]
        return await asyncio.gather(*tasks)

    reports = asyncio.run(run_all())

    output_dir = config.get("output", {}).get("dir", "./reports")
    generator = PDFReportGenerator(output_dir)
    pdf_path = generator.generate_comparison(reports)

    # Also generate individual reports
    for report in reports:
        individual_path = generator.generate(report)
        console.print(f"  → [green]{individual_path}[/green]")

    console.print(f"\n  → Comparison report: [bold green]{pdf_path}[/bold green]")

    # Summary table
    table = RichTable(title="PMF Comparison")
    table.add_column("Rank", style="bold")
    table.add_column("Idea")
    table.add_column("Score", justify="center")
    table.add_column("Verdict", justify="center")

    sorted_reports = sorted(reports, key=lambda r: r.pmf_score.weighted_total, reverse=True)
    for i, r in enumerate(sorted_reports, 1):
        verdict = r.pmf_score.verdict
        color = {"GO": "green", "VALIDATE": "yellow", "PIVOT": "red"}.get(verdict, "white")
        table.add_row(
            str(i), r.idea.title,
            f"{r.pmf_score.weighted_total:.0f}",
            f"[{color}]{verdict}[/{color}]",
        )

    console.print(table)
    console.print(f"\n[bold green]Done![/bold green]")


if __name__ == "__main__":
    app()
