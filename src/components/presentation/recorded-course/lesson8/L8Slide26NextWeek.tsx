import { useIsMobile } from "@/hooks/use-mobile";

const topics = [
  "Email и push в правильный момент",
  "Реактивация: тех, кто ушёл — как вернуть",
  "D1 / D7 / D30 — простыми словами, без жаргона",
  "Когда писать, что писать, как не превратиться в спам",
];

export default function L8Slide26NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Следующая встреча
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Неделя 8:<br />Что заставляет вернуться через 3 / 7 / 30 дней.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[10px] mb-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[6px]">
            Сегодня починили первую сессию. На L9 — что делать после, чтобы человек вернулся не один раз, а регулярно.
          </p>
          <div className="space-y-[3px]">
            {topics.map((t, i) => (
              <p key={i} className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
            ))}
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Без онбординга L8 retention на L9 не построить. Сегодня — фундамент. Не пропусти.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Следующая встреча
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Неделя 8: что заставляет вернуться через 3 / 7 / 30 дней.
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[40px] py-[28px] max-w-[1400px] mb-[24px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[18px]">
          Сегодня починили первую сессию. На L9 — что делать после, чтобы человек вернулся не один раз, а регулярно.
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
        Без онбординга L8 retention на L9 не построить. Сегодня — фундамент. Не пропусти.
      </p>
    </div>
  );
}
