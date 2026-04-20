/**
 * LLM model catalog — kept in one place so Lens.tsx and PmfAgent.tsx share it.
 * Updated to 2026-04. Models not listed here can still be used via the "Custom" option.
 *
 * Model IDs must match what the respective SDK accepts (Anthropic/OpenAI/Google).
 */

export type Provider = "anthropic" | "openai" | "gemini";

export interface ModelChoice {
  id: string;                  // exact model ID sent to provider SDK
  label: string;               // display name in UI
  note: string;                // one-line description (speed / cost / capability)
  tier?: "fast" | "balanced" | "premium";
}

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
  anthropic: [
    { id: "claude-sonnet-4-5",  label: "Claude Sonnet 4.5",  note: "баланс скорости и качества",        tier: "balanced" },
    { id: "claude-opus-4-7",    label: "Claude Opus 4.7",    note: "топ-качество рассуждений (дороже)", tier: "premium"  },
    { id: "claude-haiku-4-5",   label: "Claude Haiku 4.5",   note: "быстро и дёшево",                   tier: "fast"     },
  ],
  openai: [
    { id: "gpt-4o",             label: "GPT-4o",             note: "баланс (по умолчанию)",             tier: "balanced" },
    { id: "gpt-4o-mini",        label: "GPT-4o mini",        note: "быстро и дёшево",                   tier: "fast"     },
    { id: "o3",                 label: "o3",                 note: "reasoning, премиум",                tier: "premium"  },
    { id: "o3-mini",            label: "o3-mini",            note: "reasoning + дешевле o3",            tier: "balanced" },
    { id: "gpt-4.1",            label: "GPT-4.1",            note: "большой контекст, код",             tier: "balanced" },
  ],
  gemini: [
    { id: "gemini-2.5-pro",           label: "Gemini 2.5 Pro",           note: "флагман, длинный контекст",     tier: "premium"  },
    { id: "gemini-2.5-flash",         label: "Gemini 2.5 Flash",         note: "быстрый вариант 2.5",           tier: "balanced" },
    { id: "gemini-2.0-flash-exp",     label: "Gemini 2.0 Flash",         note: "быстро и дёшево",               tier: "fast"     },
    { id: "gemini-2.0-flash-thinking-exp", label: "Gemini 2.0 Flash Thinking", note: "с reasoning",            tier: "balanced" },
    { id: "gemini-1.5-pro",           label: "Gemini 1.5 Pro",           note: "стабильная версия (fallback)",  tier: "balanced" },
  ],
};

/** Default model per provider when the user hasn't picked one yet. */
export const DEFAULT_MODEL: Record<Provider, string> = {
  anthropic: "claude-sonnet-4-5",
  openai: "gpt-4o",
  gemini: "gemini-2.5-pro",
};
