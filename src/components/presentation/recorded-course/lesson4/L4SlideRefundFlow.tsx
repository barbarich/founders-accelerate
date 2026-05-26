import { useIsMobile } from "@/hooks/use-mobile";

export default function L4SlideRefundFlow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Money mindset
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Не бойся возвратов. <span className="text-[hsl(var(--slide-gold))]">Бойся chargeback'ов</span>.
        </h2>
        <div className="space-y-[10px] mb-[12px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[12px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Refund · нормально</p>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Клиент попросил → Stripe Dashboard → клик «Refund». <span className="text-[hsl(var(--slide-text))] font-semibold">Бесплатно для тебя</span>. Деньги возвращаются за 5-10 дней.
            </p>
          </div>
          <div className="border-l-2 border-red-400/40 bg-red-400/5 px-[12px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-red-400 font-bold mb-[4px]">Chargeback · опасно</p>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              Клиент пожаловался в банк → банк забирает деньги + <span className="text-red-400 font-semibold">штраф $15-25</span>. После 1% chargeback rate Stripe замораживает аккаунт.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Правило #1: клиент пишет «верни деньги» — возвращай <span className="text-[hsl(var(--slide-gold))]">в течение 24 часов</span>. Не аргументируй. Лучший refund — refund в первый час. Худший — chargeback на 30-й день.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Money mindset
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Не бойся возвратов. <span className="text-[hsl(var(--slide-gold))]">Бойся chargeback'ов</span>.
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1700px] mb-[28px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[22px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[12px]">Refund · нормально</p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Клиент попросил → Stripe Dashboard → клик «Refund». <span className="text-[hsl(var(--slide-text))] font-semibold">Бесплатно для тебя</span>. Деньги возвращаются клиенту за 5-10 дней.
          </p>
        </div>
        <div className="border-l-[4px] border-red-400/50 bg-red-400/5 px-[28px] py-[22px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-red-400 font-bold mb-[12px]">Chargeback · опасно</p>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Клиент пожаловался в банк → банк забирает деньги + <span className="text-red-400 font-semibold">штраф $15-25</span>. После 1% chargeback rate Stripe замораживает аккаунт навсегда.
          </p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1700px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Правило #1: клиент пишет «верни деньги» — возвращай <span className="text-[hsl(var(--slide-gold))]">в течение 24 часов</span>. Не аргументируй, не оправдывайся. Лучший refund — refund в первый час. Худший — chargeback на 30-й день.
        </p>
      </div>
    </div>
  );
}
