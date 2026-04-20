"""Agent 0 — Intake.

Non-interactive mode (v1): takes a dict of pre-collected answers (from Streamlit
form or CLI fixture file) and normalizes them into an `IdeaInput`.
Interactive/chat mode is deferred to v2.

For the live demo, we collect: raw idea + target_user + geography + monetization
+ reference_products + already_tried via a short Streamlit form, then Intake
just structures+validates+infers-missing-fields.
"""

from __future__ import annotations

import json
import logging
from typing import Any

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import IdeaInput, ResearchState

log = logging.getLogger(__name__)


class IntakeAgent(Agent[IdeaInput]):
    name = "intake"
    phase = "intake"

    def __init__(self, cost, provider, raw_input: dict[str, Any]):
        super().__init__(cost, provider)
        self.raw_input = raw_input

    async def run(self, state: ResearchState) -> IdeaInput:
        language = self.raw_input.get("language") or state.language or config.DEFAULT_LANG
        prompt = self.load_prompt(language)

        # Give the LLM the raw input as JSON so it can extract/infer missing fields.
        user = (
            "Вот сырой ввод фаундера:\n```json\n"
            + json.dumps(self.raw_input, ensure_ascii=False, indent=2)
            + "\n```\n\nНормализуй в структуру IdeaInput. "
              "Если поле отсутствует — выведи из контекста идеи или оставь разумный дефолт. "
              "raw_idea всегда = поле 'idea' из ввода."
        )

        try:
            idea = await self.llm_extract(
                schema=IdeaInput,
                system=prompt,
                user=user,
                max_tokens=1024,
            )
        except Exception as e:
            raise AgentError(f"intake extraction failed: {e}") from e

        # Sanity checks
        if not idea.raw_idea or len(idea.raw_idea.strip()) < 10:
            raise AgentError("raw_idea is empty or too short — need at least 10 chars")
        if not idea.geography:
            idea.geography = ["US", "EU"]
        # Force language from user/fixture preference — idea language ≠ report language.
        # E.g. idea text in English, founder wants RU report.
        idea.language = language

        state.idea_input = idea
        state.language = idea.language
        self.emit("finding", f"Intake: {idea.raw_idea[:80]}...", payload=idea.model_dump())
        return idea
