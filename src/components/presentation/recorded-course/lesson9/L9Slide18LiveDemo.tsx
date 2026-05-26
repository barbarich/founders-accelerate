import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { t: "0:00", a: "Открываешь Claude Desktop → Settings → Connectors → добавляешь Mixpanel MCP" },
  { t: "0:30", a: "Авторизуешься в Mixpanel один раз. Claude получает доступ к проекту в режиме read-only" },
  { t: "1:00", a: "Пишешь Claude: «Покажи retention-кривую за последние 30 дней по когорте signup»" },
  { t: "1:30", a: "Claude сам делает запрос в Mixpanel, получает реальные данные, рисует график в чате" },
  { t: "2:15", a: "«Где именно уходят пользователи? Какое последнее событие перед оттоком?» — Claude находит паттерн" },
  { t: "3:00", a: "«Дай 3 гипотезы, почему D7 retention 12%, и предложи механики возврата под мою аудиторию»" },
  { t: "4:00", a: "Готово. У тебя на руках инсайты + план действий. Без аналитика. Без SQL. На реальных данных." },
];

const benefits = [
  "Без дашбордов и SQL",
  "Вопросы на естественном языке",
  "Ответы по реальным данным, а не догадкам",
  "Read-only — Claude ничего не сломает",
];

export default function L9Slide18LiveDemo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Live · Claude × Mixpanel через MCP
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Аналитика без аналитика.
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Claude получает доступ к Mixpanel и отвечает на твои вопросы по реальным данным.
        </p>
        <div className="space-y-[4px] mb-[8px]">
          {steps.map((s) => (
            <div key={s.t} className="flex gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] w-[30px] shrink-0">{s.t}</span>
              <span className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.a}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[4px]">
          {benefits.map((b) => (
            <div key={b} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[6px] py-[4px]">
              <span className="text-[8.5px] text-[hsl(var(--slide-text))]">✓ {b}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Live-демо · Claude × Mixpanel через MCP · 4 минуты
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[10px] tracking-[-0.02em]">
        Аналитика ретеншена. Без аналитика.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[24px] leading-[1.4]">
        Подключаешь Mixpanel к Claude через MCP — спрашиваешь по-человечески, получаешь инсайты по реальным данным.
      </p>
      <div className="grid grid-cols-[1fr_360px] gap-[28px] max-w-[1500px]">
        <div className="space-y-[8px]">
          {steps.map((s) => (
            <div key={s.t} className="flex items-baseline gap-[18px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[11px]">
              <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] w-[60px] shrink-0">{s.t}</span>
              <span className="text-[17px] text-[hsl(var(--slide-text))] leading-[1.4]">{s.a}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] p-[20px] self-start">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Что меняется</p>
          <div className="space-y-[10px]">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-[8px]">
                <span className="text-[hsl(var(--slide-gold))] text-[16px] leading-[1.2]">✓</span>
                <span className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4]">{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-[16px] pt-[14px] border-t border-[hsl(var(--slide-border)/0.3)]">
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              MCP — Model Context Protocol. Стандарт, по которому LLM подключается к внешним инструментам.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
