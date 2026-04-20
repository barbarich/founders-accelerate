from typing import Any

from models.dataclasses import SearchPlan, PainSignal, PainProfile
from .base import call_agent, call_agent_deep, WEB_SEARCH_TOOL

SYSTEM_PROMPT = (
    "You are a customer research specialist who digs into real user frustrations. "
    "Use the Mom Test and Jobs-to-be-Done frameworks to find genuine pain.\n"
    "Search REAL sources for ACTUAL user pain signals:\n"
    "- 'site:reddit.com {problem}' for Reddit discussions\n"
    "- 'site:g2.com {competitor} reviews' for product reviews\n"
    "- 'site:trustpilot.com {competitor}' for complaints\n"
    "- '{app} App Store reviews complaints' for mobile app issues\n"
    "- 'site:news.ycombinator.com {problem}' for HackerNews discussions\n\n"
    "For each pain signal provide:\n"
    "- quote: EXACT user quote under 15 words (or realistic paraphrase)\n"
    "- source: specific platform and location (e.g. 'Reddit r/dating_advice')\n"
    "- frequency_signal: one-off/recurring/widespread\n"
    "- current_workaround: what users do instead\n"
    "- wtp_signal: willingness to pay evidence\n"
    "- journey_stage: awareness/consideration/purchase/onboarding/usage/renewal\n"
    "- sentiment_intensity: 1-10\n\n"
    "ALSO provide:\n"
    "- journey_pain_map: [{stage, pains (list), severity (1-10), pain_count}] for each customer journey stage\n"
    "- demand_signals: [{signal, source, volume_indicator}]\n"
    "- social_buzz_score: 1-10 based on volume of social discussion\n\n"
    "WRITING STYLE for text fields (wtp_summary, quotes, workarounds, etc.):\n"
    "Write like a human telling a story about real people's problems.\n"
    "'People are fed up with swiping endlessly and getting nowhere' beats 'users express frustration with existing solutions'.\n"
    "Keep it real, specific, and empathetic.\n"
    "Return ONLY valid JSON."
)


class CustomerPainAgent:
    def __init__(self, client: Any, model: str):
        self.client = client
        self.model = model

    async def run(self, plan: SearchPlan, rounds: int = 2) -> PainProfile:
        user_prompt = (
            f"Research customer pain points for this startup:\n\n"
            f"Core Problem: {plan.core_problem}\n"
            f"Target Segment: {plan.target_segment}\n"
            f"Proposed Solution: {plan.proposed_solution}\n\n"
            f"Use these search queries:\n"
            + "\n".join(f"- {q}" for q in plan.pain_queries)
            + "\n\nSearch each query on Reddit, App Store reviews, G2, Trustpilot, HackerNews. "
            "Find REAL user quotes and pain signals.\n\n"
            "Return JSON with:\n"
            '{"pain_signals": [{"quote": "under 15 words", "source": "Reddit r/dating", '
            '"frequency_signal": "recurring", "current_workaround": "...", "wtp_signal": "...", '
            '"journey_stage": "usage", "sentiment_intensity": 8}], '
            '"pain_severity_score": 7, "pain_frequency_score": 6, '
            '"top_workarounds": ["workaround1"], "wtp_summary": "...", '
            '"journey_pain_map": [{"stage": "awareness", "pains": ["..."], "severity": 5, "pain_count": 3}], '
            '"demand_signals": [{"signal": "...", "source": "Reddit", "volume_indicator": "high"}], '
            '"social_buzz_score": 7}'
        )

        data = await call_agent_deep(
            self.client, self.model, SYSTEM_PROMPT, user_prompt,
            rounds=rounds, tools=[WEB_SEARCH_TOOL]
        )

        def safe_int(val, default=5):
            try:
                return int(val) if val is not None else default
            except (ValueError, TypeError):
                return default

        signals = []
        for s in data.get("pain_signals") or []:
            signals.append(
                PainSignal(
                    quote=str(s.get("quote") or ""),
                    source=str(s.get("source") or ""),
                    frequency_signal=str(s.get("frequency_signal") or "one-off"),
                    current_workaround=str(s.get("current_workaround") or ""),
                    wtp_signal=str(s.get("wtp_signal") or ""),
                    journey_stage=str(s.get("journey_stage") or "usage"),
                    sentiment_intensity=safe_int(s.get("sentiment_intensity"), 5),
                )
            )

        return PainProfile(
            pain_signals=signals,
            pain_severity_score=safe_int(data.get("pain_severity_score")),
            pain_frequency_score=safe_int(data.get("pain_frequency_score")),
            top_workarounds=data.get("top_workarounds") or [],
            wtp_summary=str(data.get("wtp_summary") or ""),
            journey_pain_map=data.get("journey_pain_map") or [],
            demand_signals=data.get("demand_signals") or [],
            social_buzz_score=safe_int(data.get("social_buzz_score"), 5),
        )
