import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Apollo · 50 компаний по фильтрам ICP", d: "Фильтры из 7 пунктов прошлого слайда. Сохраняем как Saved Search. Не больше 50 — иначе размазываешь внимание." },
  { n: "2", t: "Добавь triggers фильтр", d: "Apollo signals: hiring sales / recent funding / tech-stack change / new exec. Без триггера компания в листе — но не в первой очереди outreach." },
  { n: "3", t: "LinkedIn Sales Navigator · 3 stakeholder'а в каждой", d: "Champion (твой пользователь) + Decision Maker (его VP) + Economic Buyer (CFO / CRO / C-level). 50 × 3 = 150 имён." },
  { n: "4", t: "Notion CRM · одна страница на компанию", d: "Колонки: company / ICP-fit score (1-10) / trigger / stakeholders / last touch / next action / status. Шаблон 5 минут." },
  { n: "5", t: "Tier A (10) / Tier B (20) / Tier C (20)", d: "Tier A = personal touch каждую неделю. Tier B = monthly. Tier C = quarterly. Без tier — все одинаково игнорируешь." },
];

export default function M11Slide05Dream50() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Dream 50 · твой target list
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          50 счетов × 3 stakeholder'а = <span className="text-[hsl(var(--slide-gold))]">150 имён за 2 часа</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Это весь твой pipeline на ближайшие 90 дней. Каждое имя выбрано осознанно — не случайный лид из form fill.
        </p>
        <div className="space-y-[3px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Dream 50 · твой target list
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        50 счетов × 3 stakeholder'а = <span className="text-[hsl(var(--slide-gold))]">150 имён за 2 часа</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Это весь твой pipeline на ближайшие 90 дней. Каждое имя выбрано осознанно — не случайный лид из form fill, не «холодная база» из агентства.
      </p>
      <div className="space-y-[10px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[12px]">
            <div className="flex items-baseline gap-[14px] mb-[3px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[42px]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
