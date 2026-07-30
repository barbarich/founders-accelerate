import { useIsMobile } from "@/hooks/use-mobile";

export default function L13Slide03bCRM() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Инфраструктура
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Если сделка не записана — <span className="text-[hsl(var(--slide-gold))]">вы её потеряете.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[5px]">
            До 10 лидов ещё можно держать в голове.
          </p>
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Больше — начинается хаос: кто кому что обещал, кто на каком этапе, кого забыли.
          </p>
        </div>
        <div className="space-y-[8px]">
          <div className="flex items-start gap-[8px]">
            <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))] shrink-0">01</span>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              <span className="text-[hsl(var(--slide-text))] font-medium">Заводи с первых дней,</span> даже когда кажется, что «пока рано». Google-таблицы достаточно.
            </p>
          </div>
          <div className="flex items-start gap-[8px]">
            <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))] shrink-0">02</span>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              <span className="text-[hsl(var(--slide-text))] font-medium">Это не «база контактов».</span> Это твоя память: кто, когда, о чём говорили и что следующее.
            </p>
          </div>
          <div className="flex items-start gap-[8px]">
            <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))] shrink-0">03</span>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              <span className="text-[hsl(var(--slide-text))] font-medium">Без записей нет прогноза.</span> Не видно, сколько денег реально придёт в этом месяце и где сделка застряла.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Инфраструктура
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] max-w-[1700px] tracking-[-0.01em]">
        Если сделка не записана — <span className="text-[hsl(var(--slide-gold))]">вы её потеряете.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[28px] max-w-[1700px] mb-[32px]">
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">
          До 10 лидов ещё можно держать в голове.
        </p>
        <p className="text-[34px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Больше — начинается хаос: кто кому что обещал, кто на каком этапе, кого забыли.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[28px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[24px]">
          <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[12px]">01</p>
          <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">Заводи с первых дней</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Google-таблицы достаточно, отдельная система (CRM) подождёт. Привычка вести записи формируется только тогда, когда их ещё мало.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[24px]">
          <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[12px]">02</p>
          <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">Это твоя память, а не список контактов</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Не «база контактов». А история: кто, когда, о чём говорили и какое следующее действие. Без этого каждый раз начинаете с нуля.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[24px]">
          <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[12px]">03</p>
          <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">Без записей нет прогноза</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Не видно, сколько сделок на какой стадии, где они застряли и сколько денег реально придёт в этом месяце. А значит, и планировать нечего.</p>
        </div>
      </div>
    </div>
  );
}
