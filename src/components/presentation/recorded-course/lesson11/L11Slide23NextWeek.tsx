import { useIsMobile } from "@/hooks/use-mobile";

const b2b = [
  "B2B-продажи: цикл сделки от первого касания до закрытия",
  "CRM с нуля — как вести воронку и не терять лиды",
  "Холодные письма и LinkedIn, которые реально открывают",
];

const b2c = [
  "Оптимизация рекламных кампаний для B2C",
  "Что читать в метриках и когда выключать креатив",
  "Использование Claude для генерации креативов и текстов",
];

export default function L11Slide23NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Дальше · L12</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Что разбираем на следующему уроку
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">B2B · продажи и CRM</p>
            <div className="space-y-[2px]">
              {b2b.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">B2C · оптимизация и Claude</p>
            <div className="space-y-[2px]">
              {b2c.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Без подготовки к запуску на этой неделе — разбирать в L12 обсудить будет нечего.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Дальше · L12</p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[28px] tracking-[-0.02em]">
        Что разбираем <span className="text-[hsl(var(--slide-gold))]">на следующему уроку</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[24px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">B2B · продажи, цикл сделки, CRM</p>
          <div className="space-y-[8px]">
            {b2b.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">B2C · оптимизация рекламы + Claude для креативов</p>
          <div className="space-y-[8px]">
            {b2c.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Подготовь запуск на этой неделе — в L12 будем оптимизировать и разбирать твои реальные кампании.
      </p>
    </div>
  );
}
