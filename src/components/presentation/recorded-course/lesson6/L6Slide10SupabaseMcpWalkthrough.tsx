import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const supabasePrompt = `Подготовь Supabase для SaaS с подписками.

Контекст:
- Multi-tenant: каждый user видит ТОЛЬКО свои данные
- Тенант = user (для простоты). Скейлится потом.
- Подписки Stripe → таблица subscriptions, статус active/canceled/past_due

Через Supabase MCP сделай:

1. Миграция: создай таблицы
   - profiles (id uuid PK = auth.uid(), email text, full_name text, created_at)
   - subscriptions (id, user_id FK → profiles.id, stripe_customer_id, stripe_sub_id,
     status text, current_period_end timestamp, created_at, updated_at)
   - projects (id, user_id FK, name, created_at) — пример tenant-данных

2. RLS политики — обязательно на каждой таблице:
   - profiles: user читает только свой profile (id = auth.uid())
   - subscriptions: user читает только свои (user_id = auth.uid()), no insert/update from client
   - projects: user читает/пишет только свои (user_id = auth.uid())

3. Триггер: при insert в auth.users → автосоздание profile

4. Edge Function stripe-webhook:
   - Принимает Stripe webhook (verify signature)
   - События: customer.subscription.created / updated / deleted
   - Апдейтит subscriptions через service_role key
   - Логи через console.error + Sentry

5. Сгенери TypeScript типы: \`supabase gen types typescript --project-id <id>\`

Верни:
- migration SQL (один файл, named timestamp_init.sql)
- edge function код (index.ts)
- команды CLI для применения
- скриншот таблиц в Studio после миграции`;

const artifacts = [
  { label: "Tables", value: "profiles · subscriptions · projects" },
  { label: "RLS policies", value: "9 (3 на таблицу: select / insert / update)" },
  { label: "Triggers", value: "on_auth_user_created → handle_new_user()" },
  { label: "Edge Function", value: "stripe-webhook · verify + dispatch + update" },
  { label: "Types", value: "Database type → frontend autocomplete" },
];

export default function L6Slide10SupabaseMcpWalkthrough() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(supabasePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Walkthrough · Supabase MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Multi-tenant SaaS с RLS за один промпт
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          Миграция + RLS + триггер + edge function + типы. Раньше = 3 дня работы DBA. Сейчас = 30 минут.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[4px]" style={{ maxHeight: "44%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{supabasePrompt}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="mb-[5px] self-start px-[8px] py-[4px] rounded-[4px] text-[8px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
        </button>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Артефакты на выходе</p>
        <div className="space-y-[2px]">
          {artifacts.map((a) => (
            <div key={a.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[2px]">
              <p className="text-[6.5px] font-bold text-[hsl(var(--slide-gold))]">
                {a.label}: <span className="text-[hsl(var(--slide-text-muted))] font-normal font-mono">{a.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Walkthrough · Supabase MCP
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Multi-tenant SaaS с <span className="text-[hsl(var(--slide-gold))]">RLS</span> · один промпт
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Миграция + RLS политики + триггер автосоздания profile + edge function для Stripe webhook + TypeScript типы. Раньше = 3 дня работы DBA + бэкендера. Сейчас = 30 минут.
      </p>

      <div className="grid grid-cols-[1.5fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Промпт · адаптируй под свой проект</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[14px] overflow-y-auto" style={{ maxHeight: "440px" }}>
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.65] whitespace-pre-wrap">{supabasePrompt}</pre>
          </div>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[10px] px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано в буфер" : "📋 Скопировать промпт"}
          </button>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div>
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Артефакты на выходе</p>
            <div className="space-y-[6px]">
              {artifacts.map((a) => (
                <div key={a.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[8px]">
                  <p className="text-[11px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.14em] font-bold">{a.label}</p>
                  <p className="text-[13px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.4] mt-[2px]">{a.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">RLS — обязательно</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Без RLS любой залогиненный user видит чужие данные. Это самый частый прокол solo-фаундеров. Всегда явно требуй «RLS на каждой таблице».
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
