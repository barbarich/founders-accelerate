/**
 * LLM model catalog — kept in one place so Lens.tsx and PmfAgent.tsx share it.
 * Last synced 2026-07-09 from authoritative sources:
 *   - platform.claude.com/docs/en/docs/about-claude/models/overview
 *   - openai-python SDK ChatModel literal + developers.openai.com/tools-web-search
 *   - ai.google.dev/gemini-api/docs/models
 *
 * HARD REQUIREMENT: only models that do real web-search grounding are listed —
 * research needs live, cited sources, so a "blind" model must never be selectable.
 * Model IDs are sent verbatim to provider SDKs. Anything not listed can still be
 * used via the "Другая модель" (CUSTOM_MODEL_ID) option, which the backend's
 * grounded pre-flight validates (real sources must come back) before a run.
 */

export type Provider = "anthropic" | "openai" | "gemini";

export interface ModelChoice {
  id: string;                  // exact model ID sent to provider SDK
  label: string;               // display name in UI
  note: string;                // one-line description (speed / cost / capability)
  tier?: "fast" | "balanced" | "premium" | "legacy";
  search?: boolean;            // supports real web-search grounding (→ research with sources)
}

/** Special sentinel — user picks this, UI shows a text input to type any ID. */
export const CUSTOM_MODEL_ID = "__custom__";

export const PROVIDER_LABELS: Record<Provider, { title: string; subtitle: string; keyHint: string }> = {
  anthropic: { title: "Claude",  subtitle: "Anthropic", keyHint: "sk-ant-api03-..." },
  openai:    { title: "GPT",     subtitle: "OpenAI",    keyHint: "sk-proj-..."      },
  gemini:    { title: "Gemini",  subtitle: "Google",    keyHint: "AIza..."          },
};

export const MODELS: Record<Provider, ModelChoice[]> = {
  // =========================================================================
  // Anthropic — current lineup. Source: platform.claude.com (verified 2026-07-09).
  // All Claude models CAN web_search, but it's an ORG-level toggle
  // (console.anthropic.com → Settings → Privacy → Web Search). The backend
  // grounded pre-flight verifies it per key and guides the user if it's off.
  // =========================================================================
  anthropic: [
    // Current
    { id: "claude-fable-5",               label: "Claude Fable 5",         note: "новейший флагман (2026-06), 1M контекст",      tier: "premium",  search: true },
    { id: "claude-opus-4-8",              label: "Claude Opus 4.8",        note: "топ для сложных задач, 1M контекст",           tier: "premium",  search: true },
    { id: "claude-sonnet-5",              label: "Claude Sonnet 5",        note: "лучший баланс скорость/качество (дефолт), 1M", tier: "balanced", search: true },
    { id: "claude-haiku-4-5",             label: "Claude Haiku 4.5",       note: "быстро и дёшево, 200k контекст",               tier: "fast",     search: true },
    // Legacy (still accessible — older / sometimes cheaper)
    { id: "claude-opus-4-7",              label: "Claude Opus 4.7",        note: "предыдущий флагман, 1M",                       tier: "legacy",   search: true },
    { id: "claude-opus-4-6",              label: "Claude Opus 4.6",        note: "предыдущий Opus, 1M контекст",                 tier: "legacy",   search: true },
    { id: "claude-sonnet-4-6",            label: "Claude Sonnet 4.6",      note: "предыдущий Sonnet, 1M контекст",               tier: "legacy",   search: true },
    { id: "claude-sonnet-4-5",            label: "Claude Sonnet 4.5",      note: "старый Sonnet, 200k контекст",                 tier: "legacy",   search: true },
    { id: CUSTOM_MODEL_ID,                label: "Другая модель",          note: "введи ID вручную",                             tier: "balanced" },
  ],

  // =========================================================================
  // OpenAI — ONLY models that support the Responses web_search tool.
  // Source: developers.openai.com/tools-web-search + SDK ChatModel (2026-07-09).
  // o-series / gpt-4o / older DON'T web_search for research → excluded on purpose.
  // =========================================================================
  openai: [
    { id: "gpt-5.5",                      label: "GPT-5.5",                note: "максимум охвата и точности + веб-поиск",       tier: "premium",  search: true },
    { id: "gpt-5.4",                      label: "GPT-5.4",                note: "баланс цены/скорости + веб-поиск (дефолт)",    tier: "balanced", search: true },
    { id: "gpt-5.4-mini",                 label: "GPT-5.4 mini",           note: "дешевле, с веб-поиском",                       tier: "fast",     search: true },
    { id: "gpt-4.1",                      label: "GPT-4.1",                note: "1M контекст + веб-поиск",                      tier: "balanced", search: true },
    { id: "gpt-4.1-mini",                 label: "GPT-4.1 mini",           note: "длинный контекст + веб-поиск, дешевле",        tier: "fast",     search: true },
    { id: CUSTOM_MODEL_ID,                label: "Другая модель",          note: "введи ID вручную (должна уметь веб-поиск)",    tier: "balanced" },
  ],

  // =========================================================================
  // Google Gemini — every text 2.5/3.x model grounds via Google Search
  // automatically. Source: ai.google.dev/models (verified 2026-07-09).
  // (image / TTS / audio / embedding / veo / lyria variants excluded — not research.)
  // =========================================================================
  gemini: [
    { id: "gemini-3.5-flash",             label: "Gemini 3.5 Flash",       note: "новейший stable, умный + быстрый, веб-поиск",  tier: "premium",  search: true },
    { id: "gemini-3.1-pro-preview",       label: "Gemini 3.1 Pro",         note: "глубокие рассуждения (preview), веб-поиск",    tier: "premium",  search: true },
    { id: "gemini-3-flash-preview",       label: "Gemini 3 Flash",         note: "скорость 3.x (preview), веб-поиск",            tier: "balanced", search: true },
    { id: "gemini-3.1-flash-lite",        label: "Gemini 3.1 Flash Lite",  note: "самый дешёвый 3.x (stable), веб-поиск",        tier: "fast",     search: true },
    { id: "gemini-2.5-pro",               label: "Gemini 2.5 Pro",         note: "стабильный флагман (дефолт), веб-поиск",       tier: "premium",  search: true },
    { id: "gemini-2.5-flash",             label: "Gemini 2.5 Flash",       note: "баланс цены / качества, веб-поиск",            tier: "balanced", search: true },
    { id: "gemini-2.5-flash-lite",        label: "Gemini 2.5 Flash Lite",  note: "самый дешёвый, веб-поиск",                     tier: "fast",     search: true },
    { id: CUSTOM_MODEL_ID,                label: "Другая модель",          note: "введи ID вручную",                             tier: "balanced" },
  ],
};

/** Default model per provider when the user hasn't picked one yet.
 *  All three defaults do real web-search grounding (research with sources). */
export const DEFAULT_MODEL: Record<Provider, string> = {
  anthropic: "claude-sonnet-5",    // grounded (needs Web Search enabled in console)
  openai:    "gpt-5.4",            // grounded via Responses web_search
  gemini:    "gemini-2.5-pro",     // grounded out of the box — zero setup
};

/** Provider we recommend for the best out-of-the-box research quality. */
export const RECOMMENDED_PROVIDER: Provider = "gemini";

/** Badge shown next to models that do real web search (grounded research). */
export const SEARCH_BADGE = "🔍";

/** One-line cross-provider recommendation shown above the model picker. */
export const RESEARCH_TIP =
  "💡 Для качественного ресерча с реальными источниками рекомендуем Gemini — " +
  "веб-поиск включён сразу, без настройки. Все модели в списке умеют веб-поиск.";

/** Per-provider guidance shown under the model picker (depends on chosen provider). */
export const MODEL_GUIDANCE: Record<Provider, string> = {
  gemini:
    "Gemini ищет в интернете автоматически — лучший выбор для качественного ресерча с " +
    "реальными источниками «из коробки». Подойдёт любая модель Gemini.",
  openai:
    "Все показанные модели OpenAI умеют веб-поиск (🔍). GPT-5.5 — максимум охвата, " +
    "GPT-5.4 / 4.1 — дешевле и быстрее.",
  anthropic:
    "Claude умеет искать в вебе (🔍), но это нужно один раз включить: console.anthropic.com → " +
    "Settings → Privacy → Web Search. Мы проверим это перед запуском и подскажем, если выключено.",
};

/** True if the picked model id does real web-search grounding. */
export function modelSupportsSearch(provider: Provider, id: string): boolean {
  return Boolean(MODELS[provider]?.find((m) => m.id === id)?.search);
}
