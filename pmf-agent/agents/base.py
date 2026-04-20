import json
import asyncio
from typing import Any

import anthropic
from google import genai
from google.genai import types as genai_types
from openai import AsyncOpenAI


def is_gemini(model: str) -> bool:
    return model.startswith("gemini")


def is_openai(model: str) -> bool:
    return model.startswith(("gpt-", "o1", "o3", "o4", "chatgpt"))


def is_anthropic(model: str) -> bool:
    return model.startswith("claude")


def build_client(provider: str, api_key: str):
    """Create a provider-specific client from an api_key. No caching — callers
    are responsible for scoping. Never reads env vars."""
    if not api_key:
        raise ValueError("api_key is required")
    if provider == "gemini":
        return genai.Client(api_key=api_key)
    if provider == "anthropic":
        return anthropic.AsyncAnthropic(api_key=api_key)
    if provider == "openai":
        return AsyncOpenAI(api_key=api_key)
    raise ValueError(f"Unknown provider: {provider}")


def _extract_json(text: str) -> dict:
    """Extract JSON from text, handling markdown code blocks."""
    text = text.strip()
    if text.startswith("{") or text.startswith("["):
        return json.loads(text)
    if "```json" in text:
        json_str = text.split("```json")[1].split("```")[0].strip()
        return json.loads(json_str)
    if "```" in text:
        json_str = text.split("```")[1].split("```")[0].strip()
        return json.loads(json_str)
    start = text.find("{")
    end = text.rfind("}") + 1
    if start != -1 and end > start:
        return json.loads(text[start:end])
    raise ValueError("No valid JSON found in response")


async def _call_anthropic(
    client: anthropic.AsyncAnthropic,
    model: str,
    system_prompt: str,
    user_prompt: str,
    tools: list[dict] | None = None,
) -> dict[str, Any]:
    """Call Claude API and return parsed JSON."""
    messages = [{"role": "user", "content": user_prompt}]

    kwargs: dict[str, Any] = {
        "model": model,
        "max_tokens": 16384,
        "system": system_prompt,
        "messages": messages,
    }
    if tools:
        kwargs["tools"] = tools

    response = await client.messages.create(**kwargs)

    while response.stop_reason == "tool_use":
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": "Search completed. Use the results provided in context to continue your analysis.",
                })
        messages.append({"role": "assistant", "content": response.content})
        messages.append({"role": "user", "content": tool_results})
        response = await client.messages.create(**kwargs)

    for block in response.content:
        if block.type == "text":
            return _extract_json(block.text)

    raise ValueError("No text in Anthropic response")


async def _call_gemini(
    client: genai.Client,
    model: str,
    system_prompt: str,
    user_prompt: str,
    use_search: bool = False,
) -> dict[str, Any]:
    """Call Gemini API and return parsed JSON."""
    tools = []
    if use_search:
        tools.append(genai_types.Tool(google_search=genai_types.GoogleSearch()))

    config = genai_types.GenerateContentConfig(
        system_instruction=system_prompt,
    )
    # Gemini doesn't support response_mime_type with Search tool
    if not use_search:
        config.response_mime_type = "application/json"
    if tools:
        config.tools = tools

    response = await client.aio.models.generate_content(
        model=model,
        contents=user_prompt,
        config=config,
    )

    # response.text can throw in google-genai SDK, not just return None
    try:
        text = response.text
    except Exception:
        text = None

    if text:
        return _extract_json(text)

    # Fallback: try to get text from parts
    if response.candidates:
        for candidate in response.candidates:
            if candidate.content and candidate.content.parts:
                for part in candidate.content.parts:
                    try:
                        if part.text:
                            return _extract_json(part.text)
                    except Exception:
                        continue

    # Last resort: try grounding metadata
    if response.candidates:
        candidate = response.candidates[0]
        gm = getattr(candidate, "grounding_metadata", None)
        if gm:
            chunks = getattr(gm, "grounding_chunks", None) or getattr(gm, "search_entry_point", None)
            if chunks and isinstance(chunks, list):
                combined = " ".join(getattr(c, "text", str(c)) for c in chunks if c)
                if combined.strip():
                    return _extract_json(combined)

    finish = "unknown"
    try:
        finish = getattr(response.candidates[0], "finish_reason", "unknown") if response.candidates else "no candidates"
    except Exception:
        pass
    raise ValueError(f"No text in Gemini response. Finish reason: {finish}")


async def _call_openai(
    client: AsyncOpenAI,
    model: str,
    system_prompt: str,
    user_prompt: str,
) -> dict[str, Any]:
    """Call OpenAI Chat Completions API and return parsed JSON.

    No web-search grounding — GoogleSearch and Anthropic web_search don't have
    direct equivalents here; for OpenAI we rely on the model's own knowledge.
    """
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt},
    ]
    kwargs: dict[str, Any] = {
        "model": model,
        "messages": messages,
    }
    # Reasoning models (o1/o3/o4) have different param requirements.
    is_reasoning = model.startswith(("o1", "o3", "o4"))
    if is_reasoning:
        kwargs["max_completion_tokens"] = 16384
    else:
        kwargs["max_tokens"] = 16384
        kwargs["response_format"] = {"type": "json_object"}

    response = await client.chat.completions.create(**kwargs)
    text = response.choices[0].message.content or ""
    if not text.strip():
        raise ValueError("Empty response from OpenAI")
    return _extract_json(text)


async def call_agent(
    client: Any,
    model: str,
    system_prompt: str,
    user_prompt: str,
    tools: list[dict] | None = None,
    max_retries: int = 3,
    base_delay: float = 2.0,
) -> dict[str, Any]:
    """Universal agent caller — routes by model name to Gemini / Anthropic / OpenAI."""
    last_error = None
    for attempt in range(max_retries):
        # On retries, truncate long prompts to reduce load
        current_prompt = user_prompt
        if attempt > 0 and is_gemini(model) and len(current_prompt) > 4000:
            current_prompt = current_prompt[:4000] + (
                "\n\n[Context truncated due to response issues. "
                "Provide your best analysis with the available data above. "
                "Return ONLY valid JSON.]"
            )

        try:
            if is_gemini(model):
                use_search = tools is not None and len(tools) > 0
                return await _call_gemini(client, model, system_prompt, current_prompt, use_search)
            elif is_openai(model):
                return await _call_openai(client, model, system_prompt, current_prompt)
            else:
                return await _call_anthropic(client, model, system_prompt, current_prompt, tools)

        except (json.JSONDecodeError, ValueError) as e:
            last_error = e
            if attempt < max_retries - 1:
                await asyncio.sleep(base_delay * (3 ** attempt))  # 2s, 6s, 18s
                continue
            raise RuntimeError(f"Failed to parse JSON after {max_retries} attempts: {e}")
        except Exception as e:
            last_error = e
            if attempt < max_retries - 1:
                await asyncio.sleep(base_delay * (3 ** attempt))
                continue
            raise


WEB_SEARCH_TOOL = {
    "name": "web_search",
    "description": "Search the web for information",
    "input_schema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "The search query",
            }
        },
        "required": ["query"],
    },
}


# ---------------------------------------------------------------------------
# Multi-round deep research
# ---------------------------------------------------------------------------

GAP_ANALYSIS_PROMPT = """Based on the research results so far, identify what critical data is still MISSING or UNCERTAIN.
Generate 3-5 new, highly specific search queries to fill the gaps. Focus on:
- Specific numbers/statistics that are missing
- Sources that haven't been checked (industry reports, specific platforms)
- Contradictions that need resolution
- Recent data (2024-2026) that may be more accurate

Return ONLY valid JSON with keys:
- gaps: list of strings describing what's missing
- follow_up_queries: list of 3-5 specific search query strings
- confidence_so_far: int (0-100)"""

SOURCE_QUERY_TEMPLATES = {
    "reddit": "site:reddit.com {query}",
    "crunchbase": "site:crunchbase.com {query} funding startup",
    "google_trends": "Google Trends {query} interest over time 2024 2025 2026",
    "similarweb": "site:similarweb.com {query} traffic analytics",
    "g2": "site:g2.com {query} reviews rating",
    "trustpilot": "site:trustpilot.com {query} reviews",
    "linkedin": "site:linkedin.com {query} industry trends",
    "producthunt": "site:producthunt.com {query}",
    "hackernews": "site:news.ycombinator.com {query}",
    "statista": "site:statista.com {query} market size statistics",
    "grandview": "site:grandviewresearch.com {query} market report",
    "app_store": "{query} app store reviews complaints",
    "pitchbook": "site:pitchbook.com {query} funding valuation",
}


async def call_agent_deep(
    client: Any,
    model: str,
    system_prompt: str,
    user_prompt: str,
    rounds: int = 2,
    tools: list[dict] | None = None,
    max_retries: int = 3,
    base_delay: float = 1.0,
) -> dict[str, Any]:
    """Multi-round research: initial search → gap analysis → deep dive → synthesis."""

    # Round 1: Initial research
    round1 = await call_agent(client, model, system_prompt, user_prompt, tools, max_retries, base_delay)

    if rounds <= 1:
        return round1

    # Round 2: Gap analysis + follow-up queries
    gap_prompt = (
        f"You previously researched and found this data:\n\n"
        f"{json.dumps(round1, indent=2, default=str)[:4000]}\n\n"
        f"{GAP_ANALYSIS_PROMPT}"
    )

    try:
        gap_result = await call_agent(client, model, system_prompt, gap_prompt, tools, max_retries, base_delay)
        follow_up_queries = gap_result.get("follow_up_queries", [])
    except Exception:
        follow_up_queries = []

    if not follow_up_queries:
        return round1

    # Deep dive with follow-up queries
    deep_prompt = (
        f"You are doing deep research. Here are your initial findings:\n\n"
        f"{json.dumps(round1, indent=2, default=str)[:3000]}\n\n"
        f"Now search for these specific follow-up queries to fill gaps:\n"
        + "\n".join(f"- {q}" for q in follow_up_queries[:5])
        + f"\n\nMerge ALL findings (initial + new) into a single comprehensive response. "
        f"For each data point, note the source and confidence. "
        f"Return ONLY valid JSON in the SAME format as before, but with richer, more specific data."
    )

    try:
        round2 = await call_agent(client, model, system_prompt, deep_prompt, tools, max_retries, base_delay)
    except Exception:
        return round1

    if rounds <= 2:
        return round2

    # Round 3: Final synthesis with credibility scoring
    synth_prompt = (
        f"Synthesize two rounds of research into a final authoritative response.\n\n"
        f"Round 1:\n{json.dumps(round1, indent=2, default=str)[:2500]}\n\n"
        f"Round 2:\n{json.dumps(round2, indent=2, default=str)[:2500]}\n\n"
        f"Rules:\n"
        f"- Use the most specific, recent data\n"
        f"- When data conflicts, prefer: industry reports > news > forums\n"
        f"- Include source_credibility: [{{source, tier (1=reports, 2=press, 3=forums, 4=unverified), data_point}}]\n"
        f"Return ONLY valid JSON in the SAME format, enriched with all findings."
    )

    try:
        return await call_agent(client, model, system_prompt, synth_prompt, tools, max_retries, base_delay)
    except Exception:
        return round2
