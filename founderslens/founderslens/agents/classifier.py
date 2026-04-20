"""Agent 1 — Idea Classifier.

Takes IdeaInput → emits Classification tags that every downstream agent uses
to pick sources and weighting.
"""

from __future__ import annotations

import logging

from founderslens import config
from founderslens.agents.base import Agent, AgentError
from founderslens.state import Classification, ResearchState

log = logging.getLogger(__name__)


class ClassifierAgent(Agent[Classification]):
    name = "classifier"
    phase = "classify"

    async def run(self, state: ResearchState) -> Classification:
        if not state.idea_input:
            raise AgentError("classifier: idea_input missing — intake must run first")

        prompt = self.load_prompt(state.language)
        user = (
            "Вот структурированная идея фаундера:\n```json\n"
            + state.idea_input.model_dump_json(indent=2)
            + "\n```\n\nВыдай Classification."
        )

        try:
            cls = await self.llm_extract(
                schema=Classification,
                system=prompt,
                user=user,
                max_tokens=1024,
            )
        except Exception as e:
            raise AgentError(f"classification failed: {e}") from e

        if not cls.primary_geography and state.idea_input.geography:
            cls.primary_geography = state.idea_input.geography

        state.classification = cls
        self.emit(
            "finding",
            f"Classifier: {cls.segment} · {cls.industry}"
            + (f" · {cls.sub_industry}" if cls.sub_industry else "")
            + f" · flags=[{', '.join(cls.domain_flags)}]",
            payload=cls.model_dump(),
        )
        if cls.rejected:
            raise AgentError(f"idea rejected by classifier: {cls.rejected_reason}")
        return cls
