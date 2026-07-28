import { useIsMobile } from "@/hooks/use-mobile";

const why = [
  "CAC, LTV, payback и маржа - первые вопросы любого инвестора. Теперь у тебя есть ответы с расчётом.",
  "Решение bootstrap vs raise опирается на payback: если каналы окупаются за 4 месяца, тебе, возможно, вообще не нужны инвестиции.",
  "Слайд с юнит-экономикой - сердце pitch deck. Без него презентация - это истории; с ним - бизнес.",
];

export default function L14Slide19NextLesson() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Следующий урок</p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Урок 15: <span className="text-[hsl(var(--slide-gold))]">привлечение средств</span>
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          Bootstrap vs raise, pitch deck, term sheet - и почему сегодняшняя таблица делает тебя сильнее в каждом из этих разговоров.
        </p>
        <div className="space-y-[6px]">
          {why.map((w, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[10px] py-[6px]">
              <span className="text-[hsl(var(--slide-gold))] text-[9px] shrink-0">→</span>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{w}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Следующий урок</p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Урок 15: <span className="text-[hsl(var(--slide-gold))]">привлечение средств</span>
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[28px] max-w-[1600px]">
        Bootstrap vs raise, pitch deck, term sheet - и почему сегодняшняя таблица делает тебя сильнее в каждом из этих разговоров.
      </p>
      <div className="space-y-[12px] max-w-[1600px]">
        {why.map((w, i) => (
          <div key={i} className="flex items-start gap-[18px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[26px] py-[16px]">
            <span className="text-[hsl(var(--slide-gold))] text-[20px] shrink-0">→</span>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{w}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
