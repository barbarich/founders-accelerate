import { useIsMobile } from "@/hooks/use-mobile";

const pipeline = [
  "Killer ICP - 7 фильтров: кому продаёшь и кому не продаёшь",
  "Dream 50 - список компаний, с которыми работаешь руками",
  "Multithreading - 4 роли в компании вместо одного контакта",
  "CRM и пайплайн сделок с первого дня: этапы, а не «база контактов»",
];

const deals = [
  "Trigger-based outreach - повод написать вместо «здравствуйте»",
  "Discovery-звонок и промпт для pre-call research",
  "Демо, которое закрывает - 6 правил + 3 возражения с готовым ответом",
  "Closing, Mutual Action Plan и expansion: одна сделка - четыре",
];

export default function L12Slide15NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Дальше · Урок 13</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          B2B-продажи и пайплайн сделок
        </h2>
        <div className="space-y-[6px] mb-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Кому продаём · пайплайн</p>
            <div className="space-y-[2px]">
              {pipeline.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
            <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Звонок · сделка</p>
            <div className="space-y-[2px]">
              {deals.map((t, i) => (
                <p key={i} className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {t}</p>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Запусти кампанию сегодня: пока она обучается, на уроке 13 берём канал, который работает без бюджета.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Дальше · урок 13</p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        B2B-продажи <span className="text-[hsl(var(--slide-gold))]">и пайплайн сделок</span>
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[24px] max-w-[1700px]">
        Реклама - не единственный канал. На уроке 13 собираем личные продажи в один motion: от ICP до закрытой сделки.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[24px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Кому продаём · пайплайн</p>
          <div className="space-y-[8px]">
            {pipeline.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[24px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[14px]">Звонок · сделка</p>
          <div className="space-y-[8px]">
            {deals.map((t, i) => (
              <p key={i} className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] mr-[10px]">→</span>{t}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Запусти кампанию сегодня: пока она обучается на своих данных, на уроке 13 берём канал, который работает без бюджета.
      </p>
    </div>
  );
}
