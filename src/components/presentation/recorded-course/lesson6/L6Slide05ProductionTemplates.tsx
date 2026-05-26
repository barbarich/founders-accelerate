import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const TEMPLATES = {
  saas: `# CLAUDE.md · SaaS B2B

## Стек
- Next.js 15 (App Router) · TypeScript strict · Tailwind · shadcn/ui
- Supabase (Postgres + Auth + Storage + Edge Functions)
- Stripe (subscriptions + customer portal) · Sentry
- Hosting: Vercel · Preview URL на каждый PR

## Архитектура
- Multi-tenant: каждый запрос фильтруется по tenant_id через RLS
- Auth: Supabase Auth · session в cookies · middleware гард на /app/*
- Платежи: Stripe Customer per tenant · webhook → активация подписки
- Email: Resend · все шаблоны в /emails (react-email)

## Правила
MUST: TypeScript strict · zod на input всех Server Actions
MUST: RLS на каждой таблице · нет SELECT без auth.uid()
MUST: error + loading + empty state на каждом экране
MUST: unit-тест на критическую логику биллинга
MUST NOT: console.log в проде · TODO в коде · хардкод секретов
MUST NOT: файлы > 500 строк (разбивай на модули)

## Что НЕ трогать
- /supabase/migrations/* — только новые миграции через CLI
- next.config.ts · stripe.config.ts — менять только с подтверждения
- public/legal/* — юридические тексты, согласованы

## При работе
1. Plan Mode для любой задачи > 3 файла или миграции
2. После плана — second-model review (Codex / Antigravity)
3. После кода — npm run typecheck && npm run test
4. PR title: feat/fix/chore + scope (auth/billing/onboarding)`,

  consumer: `# CLAUDE.md · Consumer Mobile-First

## Стек
- Next.js 15 · TS strict · Tailwind · Framer Motion
- Supabase (db + auth) · Edge Functions для AI
- Mixpanel · OneSignal (push) · i18n: next-intl
- Hosting: Vercel · target: mobile 375px → desktop 1440px

## Архитектура
- Mobile-first: каждый компонент сначала на 375px
- Auth: Supabase Auth + magic link (без паролей)
- AI features: Edge Function → Anthropic API (caching!) · streaming UI
- Push: OneSignal segment per user · D1/D7/D30 retention hooks

## Правила
MUST: responsive 375 / 768 / 1440 · touch targets ≥ 44px
MUST: streaming responses для AI · skeleton states < 200ms
MUST: i18n всего user-facing (RU + EN минимум)
MUST: события в Mixpanel: signup · first_value · paid · churn_risk
MUST NOT: фиксированные px-ширины · overflow без проверки mobile
MUST NOT: blocking spinner > 800ms (показывай skeleton)

## Aha-moment
- Onboarding ≤ 3 экрана · первая ценность ≤ 60 сек
- D1 push: триггер на 18:00 локального времени user-а

## При работе
1. Скрин-тест на Chrome DevTools 375 + 1440 перед commit
2. Lighthouse Performance ≥ 85 на mobile`,

  api: `# CLAUDE.md · Internal Tool / B2B API

## Стек
- Node 22 · TypeScript strict · Hono или Fastify
- Postgres (Supabase или RDS) · Redis для кэша
- OpenAPI 3.1 спека · Zod schemas as source of truth
- Hosting: Railway или Fly · Sentry · structured logs (pino)

## Архитектура
- Endpoint = handler + zod input + zod output + 1 test
- Auth: API keys (hashed в БД) · rate limit per key (Redis)
- Errors: ProblemDetails RFC 9457 · никаких stack trace наружу
- Migrations: drizzle или supabase migration · forward-only

## Правила
MUST: zod schema для каждого endpoint (request + response)
MUST: OpenAPI спека генерится из zod (zod-to-openapi)
MUST: rate limit на каждый publish endpoint
MUST: 1 integration test на endpoint (happy + 2 edge cases)
MUST: structured log на каждый запрос: trace_id · user · latency
MUST NOT: возвращать internal errors клиенту
MUST NOT: synchronous heavy work (используй очередь BullMQ)

## При работе
1. Меняешь endpoint → обнови zod schema + OpenAPI + tests
2. Breaking change → версионируй роут (/v1 → /v2), старый сохрани`,
};

type TemplateKey = keyof typeof TEMPLATES;

const TABS: { key: TemplateKey; label: string; tagline: string }[] = [
  { key: "saas", label: "SaaS B2B", tagline: "Подписки, multi-tenant, RLS" },
  { key: "consumer", label: "Consumer", tagline: "Mobile-first, AI, push" },
  { key: "api", label: "B2B API", tagline: "Endpoints, OpenAPI, rate limit" },
];

export default function L6Slide05ProductionTemplates() {
  const isMobile = useIsMobile();
  const [active, setActive] = useState<TemplateKey>("saas");
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(TEMPLATES[active]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Артефакт · copy + paste в свой проект
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          3 production CLAUDE.md
        </h2>
        <div className="grid grid-cols-3 gap-[3px] mb-[4px]">
          {TABS.map((t) => (
            <button
              key={t.key}
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setActive(t.key);
              }}
              className={`px-[4px] py-[3px] rounded-[4px] text-[8px] font-bold border ${
                active === t.key
                  ? "bg-[hsl(var(--slide-gold)/0.18)] border-[hsl(var(--slide-gold))] text-[hsl(var(--slide-gold))]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)] text-[hsl(var(--slide-text-muted))]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[8px] py-[6px] overflow-y-auto" style={{ maxHeight: "62%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{TEMPLATES[active]}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="mt-[5px] px-[10px] py-[5px] rounded-[5px] text-[9px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "Скопировать шаблон"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Артефакт · copy + paste в свой проект
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        3 production <span className="text-[hsl(var(--slide-gold))]">CLAUDE.md</span> шаблона
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[18px] max-w-[1300px] leading-[1.45]">
        Выбери по типу проекта, скопируй, замени значения в скобках под свой стек. Эти шаблоны написаны под мои продукты — Mikey AI (consumer), TFC bot (API), Founders Circle (SaaS).
      </p>

      <div className="grid grid-cols-[280px_1fr] gap-[20px] max-w-[1700px]">
        <div className="flex flex-col gap-[8px]">
          {TABS.map((t) => (
            <button
              key={t.key}
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                setActive(t.key);
              }}
              className={`text-left rounded-[10px] px-[18px] py-[12px] border transition-colors ${
                active === t.key
                  ? "bg-[hsl(var(--slide-gold)/0.12)] border-[hsl(var(--slide-gold))] text-[hsl(var(--slide-text))]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)] text-[hsl(var(--slide-text-muted))] hover:border-[hsl(var(--slide-gold)/0.5)]"
              }`}
            >
              <p className={`text-[18px] font-bold mb-[2px] ${active === t.key ? "text-[hsl(var(--slide-gold))]" : ""}`}>{t.label}</p>
              <p className="text-[12px] leading-[1.35]">{t.tagline}</p>
            </button>
          ))}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[6px] px-[16px] py-[12px] rounded-[10px] text-[15px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано в буфер" : "📋 Скопировать шаблон"}
          </button>
        </div>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] overflow-y-auto" style={{ maxHeight: "520px" }}>
          <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.65] whitespace-pre-wrap">{TEMPLATES[active]}</pre>
        </div>
      </div>
    </div>
  );
}
