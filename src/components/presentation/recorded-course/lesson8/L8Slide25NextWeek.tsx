import { useIsMobile } from "@/hooks/use-mobile";

const topics = [
  "Сторителлинг: как рассказывать истории, которые продают",
  "Контент-система: 1 идея → 5 форматов за вечер",
  "AI-стек контента: 5 инструментов для текста и визуала",
  "Building in public: публикуешь путь — и он приводит первых",
];

export default function L8Slide25NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Следующая встреча</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Неделя 9:<br />Сторителлинг и контент. Первая аудитория.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px] mb-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[6px]">
            Сегодня встроили причину возвращаться. На M9 — соберём первую аудиторию через контент: истории, форматы, публичный путь.
          </p>
          <div className="space-y-[3px]">
            {topics.map((t, i) => (
              <p key={i} className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
            ))}
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Продукт удерживает — контент приводит. Сегодня фундамент, дальше аудитория. Не пропусти.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Следующая встреча</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Неделя 9: сторителлинг и контент. Первая аудитория.
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[40px] py-[28px] max-w-[1400px] mb-[24px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[18px]">
          Сегодня встроили причину возвращаться. На M9 — соберём первую аудиторию через контент: истории, форматы, публичный путь.
        </p>
        <div className="space-y-[10px]">
          {topics.map((t, i) => (
            <p key={i} className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
            </p>
          ))}
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Продукт удерживает — контент приводит. Сегодня — фундамент. Не пропусти.
      </p>
    </div>
  );
}