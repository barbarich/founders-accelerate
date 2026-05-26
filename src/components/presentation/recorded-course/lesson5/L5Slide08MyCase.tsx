import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { num: "1", label: "пост" },
  { num: "280", label: "человек" },
  { num: "5", label: "проектов в первой группе" },
];

const breakdown = [
  { q: "Где?", a: "LinkedIn + Facebook + Telegram" },
  { q: "Что написал?", a: "Личная история + конкретный оффер + ограничение мест" },
  { q: "Почему сработало?", a: "Аутентичность + боль аудитории + social proof" },
  { q: "Воронка?", a: "Пост → Tally-форма → Zoom-звонок → Оплата" },
];

export default function L5Slide08MyCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Мой кейс
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          The Founders Circle:<br />один пост → 280 человек
        </h2>
        <div className="flex gap-[8px] mb-[14px]">
          {stats.map((s, i) => (
            <div key={i} className="flex-1 bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] py-[8px] text-center">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))]">{s.num}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[6px]">
          {breakdown.map((b, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{b.q} </span>
              <span className="text-[9px] text-[hsl(var(--slide-text-muted))]">{b.a}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Мой кейс
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        The Founders Circle:<br />один пост → 280 человек
      </h2>

      <div className="flex gap-[24px] mb-[48px] max-w-[600px]">
        {stats.map((s, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] py-[24px] text-center">
            <p className="text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.num}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mt-[8px]">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1100px]">
        {breakdown.map((b, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <span className="text-[20px] font-bold text-[hsl(var(--slide-gold))]">{b.q} </span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{b.a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
