import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide14HowToChoose() {
  const questions = [
    { q: "Как часто используют ваш продукт?", a: "Каждый день → подписка (Slack, Notion). Периодически → usage-based (Twilio, OpenAI). Один раз → разовая (Udemy, Envato)" },
    { q: "Кто ваш клиент?", a: "B2C массовый → freemium (Canva, Duolingo). B2B малый → подписка (Mailchimp, Calendly). B2B крупный → enterprise (Salesforce, HubSpot)" },
    { q: "Что делают конкуренты?", a: "Начните с той же модели — клиенты привыкли. Не изобретайте модель, изобретайте продукт" },
    { q: "Можно ли показать ценность бесплатно?", a: "Да → freemium (Figma, Miro). Нужно попробовать → trial 7-14 дней (Netflix, Adobe). Сложный продукт → демо-звонок (Intercom)" },
    { q: "Можно ли измерить результат в деньгах?", a: "Да → оплата за результат (Devin, AI SDR-боты). Нет или косвенно → подписка или usage-based" },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Монетизация</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Как выбрать модель
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] px-[12px] py-[8px] mb-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[3px]">Главная мысль</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.45]">
            Модель цены — это <span className="font-semibold">не про деньги, а про привычку клиента</span>. Платят так, как им удобно покупать: каждый день, время от времени или один раз.
          </p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text)/0.65)] leading-[1.5] mb-[8px]">Ответьте на 5 вопросов — и модель выберется сама:</p>
        <div className="space-y-[6px]">
          {questions.map((q, i) => (
            <div key={i} className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[8px] px-[10px] py-[7px] ${i === questions.length - 1 ? "border-[hsl(var(--slide-gold)/0.4)]" : "border-[hsl(var(--slide-border)/0.3)]"}`}>
              <p className="text-[11px] font-semibold text-[hsl(var(--slide-gold))] mb-[3px]">{q.q}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{q.a}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Монетизация</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Как выбрать модель</h2>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[32px] py-[20px] mb-[24px] max-w-[1100px]">
        <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-semibold mb-[8px]">Главная мысль</p>
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Модель цены — это <span className="font-semibold">не про деньги, а про привычку клиента</span>. Люди платят так, как им удобно покупать: каждый день, время от времени или один раз.
        </p>
      </div>
      <p className="text-[18px] text-[hsl(var(--slide-text)/0.7)] leading-[1.5] mb-[16px] max-w-[1100px]">Ответьте на 5 вопросов — и модель выберется сама:</p>
      <div className="space-y-[16px] max-w-[1100px]">
        {questions.map((q, i) => (
          <div key={i} className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[12px] px-[28px] py-[18px] ${i === questions.length - 1 ? "border-[hsl(var(--slide-gold)/0.4)] bg-[hsl(var(--slide-gold)/0.04)]" : "border-[hsl(var(--slide-border)/0.3)]"}`}>
            <p className="text-[20px] font-semibold text-[hsl(var(--slide-gold))] mb-[6px]">{q.q}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{q.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
