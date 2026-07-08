import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const supabasePrompt = `Сделай базу данных для моего продукта.

О продукте:
- Что: [ВСТАВЬ: например, SaaS с подписками]
- Каждый юзер должен видеть только свои данные (никогда чужие)

Через Supabase MCP сделай:

1. Таблицы:
   - profiles — данные юзера (email, имя)
   - subscriptions — статус подписки юзера (active/canceled)
   - projects — что юзер создаёт внутри продукта (твоё основное)

2. Защита данных:
   - На каждой таблице — Row Level Security (RLS), правило: «юзер видит только свои строки»
   - Проверка должна быть на уровне базы данных, не только в коде фронта
   - Никаких чужих данных, даже случайно

3. Автоматика:
   - Когда юзер регистрируется → автоматически создаётся его profile
   - Когда приходит оплата Stripe → автоматически обновляется его подписка
     (это отдельный шаг — понадобится webhook между Stripe и Supabase;
     объясни мне простыми словами, что это и зачем, перед тем как делать)

4. Готовые типы для фронта:
   - Сгенери TypeScript-типы для всех таблиц
   - Чтобы я мог писать код с автоподсказками

5. Сохрани изменения как migration-файл, а не только применяй их напрямую — чтобы я мог хранить историю схемы в git

Что НЕ делай:
- Не создавай админские права для юзеров
- Не отключай защиту «вижу только своё»
- Если не уверен — спроси меня`;

const artifacts = [
  { label: "Таблицы", value: "3 связанные таблицы готовы" },
  { label: "Защита данных", value: "Юзер видит только своё, ничего лишнего" },
  { label: "Автоматика", value: "Регистрация — сразу. Обновление подписки от Stripe — отдельным шагом (webhook)" },
  { label: "Время", value: "~30 минут вместо нескольких дней работы инженера по базам данных" },
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
          Кейс · Supabase через MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          База данных за один промпт
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Раньше: несколько дней работы инженера по базам данных. Сейчас: 30 минут с Claude на таблицы и защиту. Автообновление подписки от Stripe — отдельный шаг после.
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
        <div className="space-y-[2px]">
          {artifacts.map((a) => (
            <div key={a.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[6.5px] font-bold text-[hsl(var(--slide-gold))]">
                {a.label}: <span className="text-[hsl(var(--slide-text-muted))] font-normal">{a.value}</span>
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
        Кейс · Supabase через MCP
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        База данных <span className="text-[hsl(var(--slide-gold))]">за один промпт</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Раньше: несколько дней работы инженера по базам данных. Сейчас: 30 минут с Claude на таблицы и защиту данных. Автообновление подписки от Stripe требует ещё один шаг (webhook) — это отдельная, более сложная задача. Главное — сразу прописать «юзер видит только свои данные» — это самая частая дыра у соло-фаундеров.
      </p>

      <div className="grid grid-cols-[1.5fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Промпт · адаптируй под свой проект</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[14px] overflow-y-auto" style={{ maxHeight: "440px" }}>
            <pre className="text-[12.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.7] whitespace-pre-wrap">{supabasePrompt}</pre>
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
            {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
          </button>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div>
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Что получишь на выходе</p>
            <div className="space-y-[8px]">
              {artifacts.map((a) => (
                <div key={a.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
                  <p className="text-[12px] uppercase text-[hsl(var(--slide-text-muted))] tracking-[0.14em] font-bold mb-[3px]">{a.label}</p>
                  <p className="text-[15px] text-[hsl(var(--slide-gold))] leading-[1.4] font-semibold">{a.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">Без этого — катастрофа</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5]">
              Если забыть про защиту «вижу только своё», любой залогиненный юзер увидит данные других. Самая частая дыра у соло-фаундеров. Всегда требуй защиту явно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
