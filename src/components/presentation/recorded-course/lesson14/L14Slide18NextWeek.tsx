import { useIsMobile } from "@/hooks/use-mobile";

const m12 = [
  "Финальный демо-день — питч 5 минут перед экспертами и приглашёнными",
  "Pitch deck и storytelling — как рассказать историю за 5 слайдов",
  "90-дневный план роста с OKR — что делаем после акселератора",
  "Bootstrapping vs fundraising — нужны ли тебе инвестиции и когда",
];

const after = [
  "Alumni-сообщество — закрытая группа, продолжаем встречи раз в месяц",
  "Доступ ко всем 12 встречам в записи · промпты · шаблоны · кейсы",
  "Networking с предыдущими когортами — мост между cohorts",
  "Возможность стать speaker'ом на следующих когортах + кейс на сайте",
];

export default function L14Slide18NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Финал · L15 + что после</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Последняя встреча — <span className="text-[hsl(var(--slide-gold))]">демо-день и план на 90 дней</span>
        </h2>
        <div className="space-y-[6px] mb-[5px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">L15 · финальный демо-день</p>
            <div className="space-y-[2px]">
              {m12.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">После сегодняшней встречи</p>
            <div className="space-y-[2px]">
              {after.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Переходи к L15 с подписанным MAP или первой сделкой и готовым 5-мин питчем — финал должен быть victory lap, не обучение.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Финал · L15 + что после</p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Последняя встреча — <span className="text-[hsl(var(--slide-gold))]">демо-день и план на 90 дней</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[24px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">L15 · финальный демо-день</p>
          <div className="space-y-[8px]">
            {m12.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">После сегодняшней встречи · alumni</p>
          <div className="space-y-[8px]">
            {after.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Переходи к L15 с подписанным MAP или первой сделкой и готовым 5-мин питчем — финал должен быть victory lap, не ещё одно обучение.
      </p>
    </div>
  );
}
