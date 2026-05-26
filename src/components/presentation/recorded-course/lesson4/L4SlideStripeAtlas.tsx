import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { t: "Delaware C-corp", d: "Юр-лицо в США. Поднимаешь онлайн, никуда не летать." },
  { t: "Банковский счёт (Mercury)", d: "US-банк. Принимаешь USD от клиентов и партнёров." },
  { t: "Stripe-аккаунт", d: "Полноценный доступ к Stripe для приёма платежей с любого рынка." },
  { t: "EIN (Employer ID)", d: "Налоговый номер. Нужен для банка, Stripe, любых US-сервисов." },
  { t: "Шаблоны юридики", d: "Privacy Policy, Terms, ToS, founder agreement, vesting." },
  { t: "Поддержка 1 год", d: "Юристы и бухгалтеры Stripe Atlas отвечают на вопросы первый год." },
];

export default function L4SlideStripeAtlas() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Для нерезидентов США (RU · UA · BY · KZ · AM ...)
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Stripe Atlas: <span className="text-[hsl(var(--slide-gold))]">$500</span> → US-компания + Stripe за 2 недели
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          Stripe не работает у тебя в стране? Stripe Atlas открывает тебе US-LLC + банк + Stripe. <span className="text-[hsl(var(--slide-text))] font-medium">Не нужно ни летать в США, ни иметь там адрес.</span>
        </p>
        <div className="grid grid-cols-2 gap-[6px] mb-[12px]">
          {items.map((i) => (
            <div key={i.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{i.t}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{i.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Подписываешь онлайн → через 2 недели принимаешь платежи от <span className="text-[hsl(var(--slide-gold))]">мирового рынка</span>. stripe.com/atlas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Для нерезидентов США (RU · UA · BY · KZ · AM ...)
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.01em] max-w-[1800px]">
        Stripe Atlas: <span className="text-[hsl(var(--slide-gold))]">$500</span> → US-компания + Stripe за 2 недели
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[24px]">
        Stripe не работает у тебя в стране? Stripe Atlas открывает тебе US-LLC + банковский счёт + Stripe-аккаунт. <span className="text-[hsl(var(--slide-text))] font-semibold">Не нужно ни летать в США, ни иметь там адрес.</span>
      </p>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1800px] mb-[24px]">
        {items.map((i) => (
          <div key={i.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[6px] leading-[1.2]">{i.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Подписываешь онлайн → через 2 недели принимаешь платежи от <span className="text-[hsl(var(--slide-gold))]">мирового рынка</span>. <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))]">stripe.com/atlas</span>
        </p>
      </div>
    </div>
  );
}
