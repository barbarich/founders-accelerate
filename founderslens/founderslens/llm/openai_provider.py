"""OpenAI (GPT) provider. Uses response_format=json_schema for structured extraction.

Temperature handling: reasoning models (o-series, gpt-5 line) reject any
non-default `temperature`. We skip the param for known reasoning families and
self-heal on the first 400 from anything else — see `temperature_compat`.
"""

from __future__ import annotations

import logging
from typing import Any, Optional, Type

from openai import AsyncOpenAI

from founderslens import config
from founderslens.llm.base import LLMProvider, LLMResponse, T
from founderslens.llm.temperature_compat import (
    is_temperature_rejection,
    register_no_temperature,
    supports_custom_temperature,
)
from founderslens.utils.json_extract import loads_lenient
from founderslens.utils.retry import retry_async

log = logging.getLogger(__name__)


class OpenAIProvider(LLMProvider):
    provider_name = "openai"
    default_models = {
        "main": "gpt-4o",
        "premium": "gpt-4o",         # GPT-4o is our top tier; o1 too slow for pipeline
    }

    def __init__(self, api_key: str):
        super().__init__(api_key)
        self._client = AsyncOpenAI(api_key=api_key)

    async def _create(self, *, model: str, temperature: float, **kwargs: Any):
        """Wrap chat.completions.create with temperature self-heal.

        If we know the model rejects custom temperature, we never send it.
        Otherwise we send it and, on a temperature-rejection 400, retry once
        without it (and remember the model so future calls skip the param).
        """
        if supports_custom_temperature(self.provider_name, model):
            try:
                return await self._client.chat.completions.create(
                    model=model, temperature=temperature, **kwargs,
                )
            except Exception as e:
                if not is_temperature_rejection(e):
                    raise
                log.warning(
                    "openai model %r rejected temperature=%s — retrying without; "
                    "future calls will skip the param.",
                    model, temperature,
                )
                register_no_temperature(self.provider_name, model)
        return await self._client.chat.completions.create(model=model, **kwargs)

    @retry_async(exceptions=(Exception,))
    async def complete(
        self, *, system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 2048, temperature: float = 0.3,
    ) -> LLMResponse:
        model = model or self.default_models["main"]
        resp = await self._create(
            model=model, temperature=temperature,
            max_completion_tokens=max_tokens,
            messages=[
                {"role": "system", "content": system},
                {"role": "user", "content": user},
            ],
        )
        choice = resp.choices[0]
        return LLMResponse(
            text=choice.message.content or "",
            tokens_in=resp.usage.prompt_tokens if resp.usage else 0,
            tokens_out=resp.usage.completion_tokens if resp.usage else 0,
            model=resp.model, provider=self.provider_name, stop_reason=choice.finish_reason,
        )

    def _mk_response(self, raw: str, resp: Any) -> LLMResponse:
        usage = getattr(resp, "usage", None) if resp is not None else None
        try:
            finish = resp.choices[0].finish_reason if resp is not None else None
        except Exception:
            finish = None
        return LLMResponse(
            text=raw,
            tokens_in=usage.prompt_tokens if usage else 0,
            tokens_out=usage.completion_tokens if usage else 0,
            model=getattr(resp, "model", "") if resp is not None else "",
            provider=self.provider_name, stop_reason=finish,
        )

    @retry_async(exceptions=(Exception,))
    async def extract_json(
        self, *, schema: Type[T], system: str, user: str,
        model: Optional[str] = None, max_tokens: int = 4096, temperature: float = 0.0,
    ) -> tuple[T, LLMResponse]:
        model = model or self.default_models["main"]
        messages = [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ]
        response_format = {
            "type": "json_schema",
            "json_schema": {
                "name": schema.__name__,
                "schema": schema.model_json_schema(),
                "strict": False,
            },
        }

        # Reasoning models (o-series, gpt-5 line) spend completion-token budget on
        # hidden reasoning before the JSON, so a small cap truncates the answer
        # (finish_reason == "length"). Floor the budget, escalate on truncation,
        # then salvage. Same defence as the Gemini provider.
        budget = max(max_tokens, config.LLM_JSON_MIN_TOKENS)
        ceiling = config.LLM_JSON_MAX_TOKENS_CEILING
        last_raw, last_resp = "", None

        while True:
            resp = await self._create(
                model=model, temperature=temperature,
                max_completion_tokens=budget,
                response_format=response_format,
                messages=messages,
            )
            choice = resp.choices[0]
            raw = choice.message.content or ""
            if raw:
                last_raw, last_resp = raw, resp

            if getattr(choice, "finish_reason", None) != "length":
                try:
                    parsed = schema.model_validate(loads_lenient(raw))
                    return parsed, self._mk_response(raw, resp)
                except Exception as e:
                    log.warning("openai extract_json finished but unparseable (%s) — escalating budget", e)

            if budget >= ceiling:
                break
            budget = min(budget * 2, ceiling)
            log.warning(
                "openai extract_json truncated (model=%s, schema=%s) — retrying with max_completion_tokens=%d",
                model, schema.__name__, budget,
            )

        try:
            parsed = schema.model_validate(loads_lenient(last_raw))
            log.warning("openai extract_json: salvaged %s from truncated output", schema.__name__)
            return parsed, self._mk_response(last_raw, last_resp)
        except Exception as e:
            raise RuntimeError(
                f"openai extract_json: no valid {schema.__name__} after escalating to "
                f"{budget} tokens — {e}; raw[:120]={last_raw[:120]!r}"
            ) from e
