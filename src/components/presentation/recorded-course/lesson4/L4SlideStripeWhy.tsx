import { useIsMobile } from "@/hooks/use-mobile";

export default function L4SlideStripeWhy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Зачем Stripe и почему именно он
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Без приёма денег <span className="text-[hsl(var(--slide-gold))]">продукт = хобби</span>.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          <span className="text-[hsl(var(--slide-text))] font-medium">Stripe</span> — глобальный платёжный процессор #1. 47 стран. Apple Pay / Google Pay из коробки. Recurring-подписки. Refund одним кликом.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold)/0.5)] px-[12px] py-[8px] mb-[12px]">
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Альтернативы (PayPal, Paddle, LemonSqueezy) — для нишевых кейсов. <span className="text-[hsl(var(--slide-text))] font-medium">Stripe — стандарт.</span>
          </p>
        </div>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          <span className="text-[hsl(var(--slide-text))] font-medium">Restricted-key архитектура:</span> для приёма платежей не нужен бэкенд. Никаких серверов, никакого кода — только настройка в дашборде.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Payment Link = <span className="text-[hsl(var(--slide-gold))]">3 клика</span> и у тебя ссылка на оплату. Ставишь её на кнопку лендинга — готово.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Зачем Stripe и почему именно он
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Без приёма денег <span className="text-[hsl(var(--slide-gold))]">продукт = хобби</span>.
      </h2>
      <div className="max-w-[1700px] space-y-[20px] mb-[28px]">
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          <span className="text-[hsl(var(--slide-text))] font-semibold">Stripe</span> — глобальный платёжный процессор #1. 47 стран. Apple Pay / Google Pay из коробки. Recurring-подписки. Refund одним кликом.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold)/0.5)] px-[28px] py-[18px]">
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Альтернативы (PayPal, Paddle, LemonSqueezy) — для нишевых кейсов. <span className="text-[hsl(var(--slide-text))] font-semibold">Stripe — стандарт.</span>
          </p>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          <span className="text-[hsl(var(--slide-text))] font-semibold">Restricted-key архитектура:</span> для приёма платежей не нужен бэкенд. Никаких серверов, никакого кода — только настройка в дашборде.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1700px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Payment Link = <span className="text-[hsl(var(--slide-gold))] font-bold">3 клика</span> и у тебя ссылка на оплату. Ставишь её на кнопку лендинга — продукт принимает деньги.
        </p>
      </div>
    </div>
  );
}
