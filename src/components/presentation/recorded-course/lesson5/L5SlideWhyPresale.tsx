import { useIsMobile } from "@/hooks/use-mobile";

export default function L5SlideWhyPresale() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Pre-sale mindset
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Сначала <span className="text-[hsl(var(--slide-gold))]">продай</span>. Потом построй.
        </h2>
        <div className="space-y-[10px] mb-[14px]">
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[12px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium mb-[3px]">Old way</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Строишь 6 месяцев → выкатываешь → никто не приходит → понимаешь что не то.</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[12px] py-[8px]">
            <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">2026 way</p>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">Прототип за выходные → показываешь → берёшь предоплату или подписанный интент как «commit to be first» → строишь дальше с подтверждённым рынком.</p>
          </div>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          <span className="text-[hsl(var(--slide-text))] font-medium">Pre-sale не значит обманывать.</span> Значит: показал прототип, объяснил roadmap, попросил commit. B2B — минимум 3 подписанных контракта заранее. B2C — минимум 20 платных предрегистраций. Кто платит — твой настоящий ICP: значит, продукт востребован.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))]">1 платный клиент</span> за неделю = 6 месяцев сэкономленного билда не в ту сторону.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Pre-sale mindset
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Сначала <span className="text-[hsl(var(--slide-gold))]">продай</span>. Потом построй.
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1700px] mb-[28px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[28px] py-[22px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-medium mb-[12px]">Old way</p>
          <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Строишь 6 месяцев → выкатываешь → никто не приходит → понимаешь что не то.
          </p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[22px]">
          <p className="text-[15px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">2026 way</p>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            Прототип за выходные → показываешь → берёшь предоплату или подписанный интент как «commit to be first» → строишь дальше с подтверждённым рынком.
          </p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[28px]">
        <span className="text-[hsl(var(--slide-text))] font-semibold">Pre-sale не значит обманывать.</span> Значит: показал прототип, объяснил roadmap, попросил commit. B2B — минимум 3 подписанных контракта заранее. B2C — минимум 20 платных предрегистраций. Кто платит — твой настоящий ICP: значит, продукт востребован.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1700px]">
        <p className="text-[26px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">1 платный клиент</span> за неделю = 6 месяцев сэкономленного билда не в ту сторону.
        </p>
      </div>
    </div>
  );
}
