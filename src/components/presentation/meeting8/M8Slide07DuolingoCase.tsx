import { useIsMobile } from "@/hooks/use-mobile";

const loop = [
  { label: "Триггер", v: "Push в 19:00: «Сова грустит»" },
  { label: "Действие", v: "Один урок 3 минуты — в один тап" },
  { label: "Награда", v: "+1 streak, новые слова, музыка" },
  { label: "Инвестиция", v: "Прогресс растёт. Завтра жалко терять streak в 47 дней." },
];

export default function M8Slide07DuolingoCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кейс · Duolingo
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Идеальная петля. И почему она работает.
        </h2>
        <div className="space-y-[6px] mb-[10px]">
          {loop.map((l) => (
            <div key={l.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">{l.label}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.4]">{l.v}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Урок 3 минуты. Streak — это не геймификация, это страх потери.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Кейс · Duolingo · DAU 35M+ · D30 ≈ 55%
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        Идеальная петля. И почему она работает.
      </h2>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1500px] mb-[28px]">
        {loop.map((l) => (
          <div key={l.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[22px] py-[20px]">
            <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">{l.label}</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">{l.v}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Урок — 3 минуты. Streak — это не геймификация, это страх потери. Самый сильный триггер из существующих.
      </p>
    </div>
  );
}