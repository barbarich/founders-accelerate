import { useIsMobile } from "@/hooks/use-mobile";

const m11 = [
  "Холодный B2B-outreach: Apollo + Instantly + LinkedIn — настройка с нуля",
  "Структура продающего демо-звонка (15 минут)",
  "Работа с возражениями: «дорого», «не сейчас», «у конкурентов»",
  "Ценообразование и как не бояться просить деньги",
];

const m12 = [
  "Финальный демо-день — питч 5 минут перед экспертами и инвесторами",
  "Pitch deck и storytelling — как рассказать историю за 5 слайдов",
  "90-дневный план роста с OKR",
  "Bootstrapping vs fundraising — нужны ли тебе инвестиции",
];

export default function L13Slide15NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Дальше · M11 → M12</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Что закрываем в финале программы
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">M11 · B2B продажи и оптимизация</p>
            <div className="space-y-[2px]">
              {m11.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">M12 · Демо-день + 90 дней</p>
            <div className="space-y-[2px]">
              {m12.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Без запущенной кампании на этой неделе — на M11 разбирать в твоих данных будет нечего.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Дальше · M11 → M12</p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Что закрываем <span className="text-[hsl(var(--slide-gold))]">в финале программы</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[24px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">M11 · B2B продажи + оптимизация трафика</p>
          <div className="space-y-[8px]">
            {m11.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">M12 · Финальный демо-день + 90 дней</p>
          <div className="space-y-[8px]">
            {m12.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Запусти кампанию сегодня — на M11 будем разбирать твои реальные цифры, не теорию.
      </p>
    </div>
  );
}
