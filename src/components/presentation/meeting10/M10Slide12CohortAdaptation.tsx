import { useIsMobile } from "@/hooks/use-mobile";

const founders = [
  {
    name: "Mila · Hobbix",
    track: "B2C · Sales / Leads",
    body: "Objective = Leads (signup на первую сессию) или Sales, если уже монетизация. Креативы — скриншоты first session + hook про результат, который человек получит за один заход.",
  },
  {
    name: "Lea · Default She",
    track: "B2C · Leads",
    body: "Objective = Leads с email collection через лендинг. Креативы — скриншоты first result (empty state → результат). Hook: «за 5 минут вместо часов».",
  },
  {
    name: "Vlad",
    track: "Валидация спроса",
    body: "Цель — собрать вейтлист. Objective = Leads с минимальной формой (email + 1 вопрос). Бюджет $10–15/день для валидации, не для роста.",
  },
  {
    name: "Inna + Aleksandra · Dira.click",
    track: "B2C · Messages / Housing",
    body: "Special Ad Category = Housing — обязательно. Conversion location = Messenger. CTA = Send Message → click-to-WhatsApp. Креатив: «найди квартиру через WhatsApp за 5 минут».",
  },
  {
    name: "Laura · QA / RA",
    track: "B2B · смотришь, переносишь",
    body: "Meta — не твой канал. Сегодня смотришь логику воронки и креативных тестов. На M11 берём LinkedIn Ads + Apollo + Instantly — твой стек разбираем под продукт.",
  },
];

export default function M10Slide12CohortAdaptation() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Адаптация под когорту
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Что меняется <span className="text-[hsl(var(--slide-gold))]">для каждого продукта</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Схема одна. Objective, креативы и CTA — разные. Берёшь свой блок и применяешь на своём кабинете.
        </p>
        <div className="space-y-[3px]">
          {founders.map((f) => (
            <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{f.track}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Адаптация под когорту · твой блок воркшопа
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Что меняется <span className="text-[hsl(var(--slide-gold))]">для каждого продукта</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1700px]">
        Схема настройки одна. Objective, креативы и CTA — разные. Берёшь свою карточку и применяешь шаги 1–5 на своём кабинете.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1700px]">
        {founders.map((f) => (
          <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <div className="flex items-baseline justify-between gap-[8px] mb-[6px]">
              <p className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[8px]">{f.track}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
