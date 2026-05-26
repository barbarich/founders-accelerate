import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Stripe Dashboard → Products", d: "Create product. Название + описание. Это то, что увидит клиент на чекауте" },
  { n: "2", t: "Add price", d: "One-time (разовый платёж) или Recurring (подписка). Цена + валюта. Можно несколько вариантов" },
  { n: "3", t: "Create Payment Link", d: "Stripe сгенерирует ссылку buy.stripe.com/... Это твой работающий чекаут" },
  { n: "4", t: "Apple Pay + Google Pay", d: "Включены автоматически. Конверсия выше на 15-25% по сравнению с card-only" },
  { n: "5", t: "Redirect URL после оплаты", d: "Куда отправить клиента: /thank-you, активация бота, открытие документа. Настраивается одной строкой" },
  { n: "6", t: "Restricted Key + Webhooks (опционально)", d: "Когда захочешь автоматизировать активацию доступа. Не делай сразу — сначала ручная активация, потом автоматизация" },
];

export default function L4SlidePaymentLink() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Stripe Payment Link · без бэкенда
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          От 0 до приёма платежей <span className="text-[hsl(var(--slide-gold))]">за 10 минут</span>
        </h2>
        <div className="space-y-[8px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{s.n}</span>
              <div className="flex-1">
                <p className="text-[11.5px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{s.t}</p>
                <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[14px] bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Не пиши код для оплаты. Payment Link на лендинге — на старте этого достаточно. Когда трафик пойдёт — добавишь Checkout API.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[50px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Stripe Payment Link · без бэкенда
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px] tracking-[-0.01em]">
        От 0 до приёма платежей <span className="text-[hsl(var(--slide-gold))]">за 10 минут</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[16px] max-w-[1800px] mb-[24px]">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[44px] h-[44px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{s.n}</span>
            <div className="flex-1">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{s.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Не пиши код для оплаты. <span className="text-[hsl(var(--slide-gold))]">Payment Link на лендинге</span> — на старте этого достаточно. Когда трафик пойдёт — добавишь Checkout API.
        </p>
      </div>
    </div>
  );
}
