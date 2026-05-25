import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "20:00 сегодня", action: "Скопируй Pre-call research промпт в notes на телефоне — будет под рукой перед любым звонком" },
  { time: "21:00 сегодня", action: "Открой Notion → создай CRM (4 колонки: Контакт · Источник · Status · Next touch). 5 минут. Шаблон уже видел." },
  { time: "9:00 завтра", action: "Открой Calendar → забронируй 2 слота под demo на эту пятницу. Calendly link обнови — 30-мин слотов на следующие 7 дней." },
  { time: "10:00 завтра", action: "Открой LinkedIn → 5 warm intros по Pocket prompt #1. Лучше 5 правильно, чем 50 как-нибудь." },
  { time: "11:00 завтра", action: "Открой свой ICP-источник (Apollo / Reddit / podcast list) → выпиши 20 целевых имён в CRM. Это твой sprint на неделю." },
];

export default function M11Slide22First24Hours() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Первые 24 часа после встречи
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          5 действий ДО <span className="text-[hsl(var(--slide-gold))]">домашки на неделю</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.45]">
          Не «к следующей встрече». Сегодня вечером и завтра утром. Без этих 5 шагов остальной материал не работает.
        </p>
        <div className="space-y-[4px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[1px]">{s.time}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.95)] leading-[1.45]">{s.action}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Первые 24 часа после встречи
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        5 действий ДО <span className="text-[hsl(var(--slide-gold))]">домашки на неделю</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Не «к следующей встрече». Сегодня вечером и завтра утром. Без этих 5 шагов весь остальной материал встречи не работает.
      </p>
      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px]">
        {steps.map((s, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[16px]">
            <div className="flex items-baseline gap-[8px] mb-[8px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{i + 1}</span>
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">{s.time}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.95)] leading-[1.5]">{s.action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
