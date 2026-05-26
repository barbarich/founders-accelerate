import { useIsMobile } from "@/hooks/use-mobile";

export default function L4Slide06AIStack() {
  const roles = [
    {
      emoji: "🧠",
      role: "Продакт-менеджер",
      tools: "Claude / GPT / Gemini",
      tasks: ["Анализ конкурентов и аудитории", "Стратегия и приоритизация фич", "Тексты, офферы, позиционирование"],
    },
    {
      emoji: "🎨",
      role: "Дизайнер + Фронтенд",
      tools: "Lovable",
      tasks: ["UI с нуля по описанию или скриншоту", "Быстрые итерации интерфейса", "Лендинги, дашборды, формы"],
    },
    {
      emoji: "⚙️",
      role: "Fullstack-разработчик",
      tools: "Claude Code",
      tasks: ["Доработка существующего кода", "Интеграции: API, базы, оплата", "Баги, рефакторинг, деплой"],
    },
  ];

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Ваш AI-стек</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Не один инструмент, а конвейер
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[16px]">AI не заменяет вас — AI умножает вас</p>
        <div className="space-y-[10px]">
          {roles.map((r, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px]">
              <div className="flex items-center gap-[8px] mb-[6px]">
                <span className="text-[18px]">{r.emoji}</span>
                <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{r.role}</span>
                <span className="text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[6px] py-[2px] rounded ml-auto">{r.tools}</span>
              </div>
              <div className="space-y-[2px]">
                {r.tasks.map((t, j) => (
                  <div key={j} className="flex items-start gap-[6px]">
                    <span className="w-[3px] h-[3px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0 mt-[5px]" />
                    <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{t}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Ваш AI-стек</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Не один инструмент, а конвейер
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[48px]">
        AI не заменяет вас — AI умножает вас. Вы думаете, AI исполняет.
      </p>
      <div className="flex gap-[32px]">
        {roles.map((r, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[32px]">
            <div className="flex items-center gap-[12px] mb-[24px]">
              <span className="text-[40px]">{r.emoji}</span>
              <div>
                <h3 className="text-[24px] font-semibold text-[hsl(var(--slide-text))]">{r.role}</h3>
                <span className="text-[16px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[10px] py-[4px] rounded inline-block mt-[6px]">{r.tools}</span>
              </div>
            </div>
            <div className="space-y-[12px]">
              {r.tasks.map((t, j) => (
                <div key={j} className="flex items-start gap-[10px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0 mt-[8px]" />
                  <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{t}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
