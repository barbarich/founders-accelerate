/**
 * LLM model catalog — kept in one place so Lens.tsx and PmfAgent.tsx share it.
 * Last synced 2026-05-12 from:
 *   - docs.anthropic.com/en/docs/about-claude/models/overview
 *   - openai-python SDK ChatModel literal type (main branch)
 *   - ai.google.dev/gemini-api/docs/models
 *
 * Model IDs are sent verbatim to provider SDKs. Adding a model = one line.
 * Anything not listed can still be used via the "Другая модель" (CUSTOM_MODEL_ID) option.
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
  // Anthropic — current + legacy. Source: docs.anthropic.com (2026-04-20)
  // =========================================================================
  anthropic: [
    // Current / latest (all support the web_search tool — must be enabled once in
    // the Anthropic Console: Settings → Privacy → Web Search)
    { id: "claude-fable-5",               label: "Claude Fable 5",         note: "новейший флагман (2026-06), 1M контекст",      tier: "premium",  search: true },
    { id: "claude-opus-4-8",              label: "Claude Opus 4.8",        note: "топ Opus, сложные рассуждения, 1M",            tier: "premium",  search: true },
    { id: "claude-sonnet-4-6",            label: "Claude Sonnet 4.6",      note: "баланс скорость/качество (дефолт), 1M",        tier: "balanced", search: true },
    { id: "claude-haiku-4-5",             label: "Claude Haiku 4.5",       note: "быстро и дёшево, 200k контекст",               tier: "fast",     search: true },
    // Legacy (still accessible, lower price or stability)
    { id: "claude-opus-4-7",              label: "Claude Opus 4.7",        note: "предыдущий флагман, 1M",                       tier: "legacy",   search: true },
    { id: "claude-opus-4-6",              label: "Claude Opus 4.6",        note: "предыдущий Opus, 1M контекст",                 tier: "legacy",   search: true },
    { id: "claude-sonnet-4-5",            label: "Claude Sonnet 4.5",      note: "предыдущий Sonnet, 200k контекст",             tier: "legacy",   search: true },
    { id: "claude-opus-4-5",              label: "Claude Opus 4.5",        note: "legacy Opus, 200k",                            tier: "legacy",   search: true },
    { id: CUSTOM_MODEL_ID,                label: "Другая модель",          note: "введи ID вручную",                             tier: "balanced" },
  ],

  // =========================================================================
  // OpenAI — source: openai-python SDK ChatModel type (2026-05-12)
  // Skipped audio/search/tts/vision preview variants (не нужны для research flow).
  // =========================================================================
  openai: [
    // GPT-5.5 / 5.4 — newest generation; these support the Responses web_search tool
    { id: "gpt-5.5",                      label: "GPT-5.5",                note: "новейший флагман (2026), веб-поиск",           tier: "premium",  search: true },
    { id: "gpt-5.4",                      label: "GPT-5.4",                note: "баланс цены + веб-поиск (дефолт)",              tier: "premium",  search: true },
    { id: "gpt-5.4-mini",                 label: "GPT-5.4 mini",           note: "дешевле, с веб-поиском",                       tier: "balanced", search: true },
    { id: "gpt-5.4-nano",                 label: "GPT-5.4 nano",           note: "самый быстрый и дешёвый 5.4",                  tier: "fast"     },
    // GPT-5.3 / 5.2
    { id: "gpt-5.3-chat-latest",          label: "GPT-5.3 chat (latest)",  note: "всегда-свежий 5.3 для чата",                   tier: "balanced" },
    { id: "gpt-5.2-pro",                  label: "GPT-5.2 pro",            note: "премиум 5.2",                                  tier: "premium"  },
    { id: "gpt-5.2",                      label: "GPT-5.2",                note: "стабильный 5.2",                               tier: "balanced" },
    { id: "gpt-5.2-chat-latest",          label: "GPT-5.2 chat (latest)",  note: "всегда-свежий 5.2 для чата",                   tier: "balanced" },
    // GPT-5.1
    { id: "gpt-5.1",                      label: "GPT-5.1",                note: "улучшенный 5.0, 2025-11",                      tier: "balanced" },
    { id: "gpt-5.1-codex",                label: "GPT-5.1 codex",          note: "специализирован для кода",                     tier: "balanced" },
    { id: "gpt-5.1-mini",                 label: "GPT-5.1 mini",           note: "младший 5.1",                                  tier: "balanced" },
    { id: "gpt-5.1-chat-latest",          label: "GPT-5.1 chat (latest)",  note: "всегда-свежий 5.1 для чата",                   tier: "balanced" },
    // GPT-5 (original)
    { id: "gpt-5",                        label: "GPT-5",                  note: "оригинальный 5.0, 2025-08 (дефолт)",           tier: "balanced" },
    { id: "gpt-5-mini",                   label: "GPT-5 mini",             note: "младший GPT-5",                                tier: "fast"     },
    { id: "gpt-5-nano",                   label: "GPT-5 nano",             note: "самый дешёвый GPT-5",                          tier: "fast"     },
    { id: "gpt-5-chat-latest",            label: "GPT-5 chat (latest)",    note: "всегда-свежий GPT-5 для чата",                 tier: "balanced" },
    // GPT-4.1 family — long context, supports web search
    { id: "gpt-4.1",                      label: "GPT-4.1",                note: "1M контекст + веб-поиск",                      tier: "balanced", search: true },
    { id: "gpt-4.1-mini",                 label: "GPT-4.1 mini",           note: "длинный контекст + веб-поиск, дешевле",        tier: "fast",     search: true },
    { id: "gpt-4.1-nano",                 label: "GPT-4.1 nano",           note: "минимальный 4.1",                              tier: "fast"     },
    // o-series reasoning models
    { id: "o4-mini",                      label: "o4-mini",                note: "reasoning, следующее поколение",               tier: "balanced" },
    { id: "o3",                           label: "o3",                     note: "reasoning, high quality",                      tier: "premium"  },
    { id: "o3-mini",                      label: "o3-mini",                note: "reasoning + дешевле o3",                       tier: "balanced" },
    { id: "o1",                           label: "o1",                     note: "первое поколение reasoning",                   tier: "legacy"   },
    { id: "o1-mini",                      label: "o1-mini",                note: "legacy reasoning, дешевле",                    tier: "legacy"   },
    // GPT-4o — legacy but still widely used
    { id: "gpt-4o",                       label: "GPT-4o",                 note: "legacy балансовый, стабилен",                  tier: "legacy"   },
    { id: "gpt-4o-mini",                  label: "GPT-4o mini",            note: "legacy дешёвый",                               tier: "legacy"   },
    { id: "chatgpt-4o-latest",            label: "ChatGPT-4o (latest)",    note: "всегда-свежий ChatGPT-4o",                     tier: "legacy"   },
    { id: "codex-mini-latest",            label: "Codex mini (latest)",    note: "специализирован для кода",                     tier: "legacy"   },
    { id: CUSTOM_MODEL_ID,                label: "Другая модель",          note: "введи ID вручную",                             tier: "balanced" },
  ],

  // =========================================================================
  // Google Gemini — source: ai.google.dev/gemini-api/docs/models (2026-05-12)
  // Skipped realtime-voice + TTS + native-audio variants.
  // =========================================================================
  // Every Gemini model grounds via Google Search automatically → best for research.
  gemini: [
    // Gemini 3.x family — current frontier
    { id: "gemini-3.5-flash",             label: "Gemini 3.5 Flash",       note: "новейший stable, самый умный, веб-поиск",      tier: "premium",  search: true },
    { id: "gemini-3.1-pro-preview",       label: "Gemini 3.1 Pro",         note: "глубокие рассуждения (preview), веб-поиск",    tier: "premium",  search: true },
    { id: "gemini-3-flash-preview",       label: "Gemini 3 Flash",         note: "скорость 3.x (preview), веб-поиск",            tier: "balanced", search: true },
    { id: "gemini-3.1-flash-lite",        label: "Gemini 3.1 Flash Lite",  note: "самый дешёвый 3.x (stable), веб-поиск",        tier: "fast",     search: true },
    // Gemini 2.5 family — production-stable
    { id: "gemini-2.5-pro",               label: "Gemini 2.5 Pro",         note: "стабильный флагман (дефолт), веб-поиск",       tier: "premium",  search: true },
    { id: "gemini-2.5-flash",             label: "Gemini 2.5 Flash",       note: "баланс цены / качества, веб-поиск",            tier: "balanced", search: true },
    { id: "gemini-2.5-flash-lite",        label: "Gemini 2.5 Flash Lite",  note: "самый дешёвый, веб-поиск",                     tier: "fast",     search: true },
    { id: CUSTOM_MODEL_ID,                label: "Другая модель",          note: "введи ID вручную",                             tier: "balanced" },
  ],
};

/** Default model per provider when the user hasn't picked one yet.
 *  All three defaults support real web-search grounding (research with sources). */
export const DEFAULT_MODEL: Record<Provider, string> = {
  anthropic: "claude-sonnet-4-6",  // grounded (needs Web Search enabled in console)
  openai:    "gpt-5.4",            // grounded via Responses web_search (plain gpt-5 is NOT)
  gemini:    "gemini-2.5-pro",     // grounded out of the box
};

/** Provider we recommend for the best out-of-the-box research quality. */
export const RECOMMENDED_PROVIDER: Provider = "gemini";

/** Badge shown next to models that do real web search (grounded research). */
export const SEARCH_BADGE = "🔍";

/** One-line cross-provider recommendation shown above the model picker. */
export const RESEARCH_TIP =
  "💡 Для самого качественного ресерча с реальными источниками рекомендуем Gemini — " +
  "веб-поиск включён сразу. На OpenAI выбирай модели с 🔍, на Claude — включи веб-поиск в консоли.";

/** Per-provider guidance shown under the model picker (depends on chosen provider). */
export const MODEL_GUIDANCE: Record<Provider, string> = {
  gemini:
    "Gemini ищет в интернете автоматически — лучший выбор для качественного ресерча с " +
    "реальными источниками «из коробки». Подойдёт любая модель Gemini.",
  openai:
    "Веб-поиск работает только на моделях с пометкой 🔍 (GPT-5.5 / 5.4 / 4.1). Обычный GPT-5 " +
    "отвечает без поиска — для ресерча с источниками выбери модель с 🔍.",
  anthropic:
    "Claude умеет искать в вебе (🔍), но это нужно один раз включить: console.anthropic.com → " +
    "Settings → Privacy → Web Search. Без этого ответит без источников.",
};

/** True if the picked model id does real web-search grounding. */
export function modelSupportsSearch(provider: Provider, id: string): boolean {
  return Boolean(MODELS[provider]?.find((m) => m.id === id)?.search);
}
