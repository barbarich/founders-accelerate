/**
 * LLM model catalog — kept in one place so Lens.tsx and PmfAgent.tsx share it.
 * Updated to 2026-04. Model IDs must match what the respective SDK accepts.
 *
 * Adding a new model: drop a line in the provider's array. No other code changes.
 * If the ID isn't in this list, user can pick "Другая модель" and paste any ID —
 * sent verbatim to the provider SDK.
 */

export type Provider = "anthropic" | "openai" | "gemini";

export interface ModelChoice {
  id: string;                  // exact model ID sent to provider SDK
  label: string;               // display name in UI
  note: string;                // one-line description (speed / cost / capability)
  tier?: "fast" | "balanced" | "premium";
}

/** Special sentinel — user picks this, UI shows a text input to type any ID. */
export const CUSTOM_MODEL_ID = "__custom__";

export const PROVIDER_LABELS: Record<Provider, { title: string; subtitle: string; keyHint: string }> = {
  anthropic: {
    title: "Claude",
    subtitle: "Anthropic",
    keyHint: "sk-ant-api03-...",
  },
  openai: {
    title: "GPT",
    subtitle: "OpenAI",
    keyHint: "sk-proj-...",
  },
  gemini: {
    title: "Gemini",
    subtitle: "Google",
    keyHint: "AIza...",
  },
};

export const MODELS: Record<Provider, ModelChoice[]> = {
  // -------------------------------------------------------------------------
  // Anthropic — as of 2026-04
  // -------------------------------------------------------------------------
  anthropic: [
    { id: "claude-opus-4-7",      label: "Claude Opus 4.7",     note: "топ-качество рассуждений (дороже всех)", tier: "premium"  },
    { id: "claude-sonnet-4-5",    label: "Claude Sonnet 4.5",   note: "баланс скорости и качества (дефолт)",     tier: "balanced" },
    { id: "claude-haiku-4-5",     label: "Claude Haiku 4.5",    note: "быстро и дёшево",                         tier: "fast"     },
    { id: CUSTOM_MODEL_ID,        label: "Другая модель",       note: "введи ID вручную",                        tier: "balanced" },
  ],

  // -------------------------------------------------------------------------
  // OpenAI — as of 2026-04 (GPT-5 family + o-series reasoning models available)
  // -------------------------------------------------------------------------
  openai: [
    { id: "gpt-5",                label: "GPT-5",               note: "новый флагман, 2025+",                    tier: "premium"  },
    { id: "gpt-5-mini",           label: "GPT-5 mini",          note: "младший GPT-5, быстро",                   tier: "balanced" },
    { id: "gpt-4.5",              label: "GPT-4.5",             note: "Orion, stable production",                tier: "premium"  },
    { id: "gpt-4.1",              label: "GPT-4.1",             note: "длинный контекст, код",                   tier: "balanced" },
    { id: "gpt-4o",               label: "GPT-4o",              note: "стабильный балансовый (дефолт)",          tier: "balanced" },
    { id: "gpt-4o-mini",          label: "GPT-4o mini",         note: "быстро и дёшево",                         tier: "fast"     },
    { id: "o3",                   label: "o3",                  note: "reasoning, high quality",                 tier: "premium"  },
    { id: "o3-pro",               label: "o3-pro",              note: "reasoning премиум, дороже",               tier: "premium"  },
    { id: "o3-mini",              label: "o3-mini",             note: "reasoning + дешевле",                     tier: "balanced" },
    { id: "o4-mini",              label: "o4-mini",             note: "reasoning, следующее поколение",          tier: "balanced" },
    { id: CUSTOM_MODEL_ID,        label: "Другая модель",       note: "введи ID вручную",                        tier: "balanced" },
  ],

  // -------------------------------------------------------------------------
  // Google Gemini — as of 2026-04 (3.x family released, 2.5 still available)
  // -------------------------------------------------------------------------
  gemini: [
    { id: "gemini-3-pro",                    label: "Gemini 3 Pro",              note: "флагман 3.x, 2025+",                 tier: "premium"  },
    { id: "gemini-3-pro-latest",             label: "Gemini 3 Pro (latest)",     note: "всегда на последней точке 3 Pro",    tier: "premium"  },
    { id: "gemini-3-flash",                  label: "Gemini 3 Flash",            note: "быстрый вариант 3.x",                tier: "balanced" },
    { id: "gemini-3-deep-think",             label: "Gemini 3 Deep Think",       note: "глубокое reasoning",                 tier: "premium"  },
    { id: "gemini-2.5-pro",                  label: "Gemini 2.5 Pro",            note: "предыдущий флагман (дефолт)",        tier: "balanced" },
    { id: "gemini-2.5-flash",                label: "Gemini 2.5 Flash",          note: "быстрый 2.5",                        tier: "balanced" },
    { id: "gemini-2.5-flash-lite",           label: "Gemini 2.5 Flash Lite",     note: "самый дешёвый 2.5",                  tier: "fast"     },
    { id: "gemini-2.0-flash-exp",            label: "Gemini 2.0 Flash",          note: "легаси 2.0 Flash",                   tier: "fast"     },
    { id: "gemini-2.0-flash-thinking-exp",   label: "Gemini 2.0 Flash Thinking", note: "легаси reasoning",                   tier: "balanced" },
    { id: "gemini-1.5-pro",                  label: "Gemini 1.5 Pro",            note: "стабильный fallback",                tier: "balanced" },
    { id: CUSTOM_MODEL_ID,                   label: "Другая модель",             note: "введи ID вручную",                   tier: "balanced" },
  ],
};

/** Default model per provider when the user hasn't picked one yet. */
export const DEFAULT_MODEL: Record<Provider, string> = {
  anthropic: "claude-sonnet-4-5",
  openai: "gpt-4o",
  gemini: "gemini-2.5-pro",
};
