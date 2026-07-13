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
          Если лид не в CRM — <span className="text-[hsl(var(--slide-gold))]">вы его потеряете.</span>
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
              <span className="text-[hsl(var(--slide-text))] font-medium">Заводить CRM надо с первых дней,</span> даже когда кажется, что «пока рано».
            </p>
          </div>
          <div className="flex items-start gap-[8px]">
            <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))] shrink-0">02</span>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              <span className="text-[hsl(var(--slide-text))] font-medium">CRM — это не «база контактов».</span> Это память команды: кто, когда, о чём говорили и что следующее.
            </p>
          </div>
          <div className="flex items-start gap-[8px]">
            <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))] shrink-0">03</span>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
              <span className="text-[hsl(var(--slide-text))] font-medium">Без CRM нет пайплайна.</span> А без пайплайна — нет прогноза выручки и нет понимания, где сделка застряла.
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
        Если лид не в CRM — <span className="text-[hsl(var(--slide-gold))]">вы его потеряете.</span>
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
          <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">Заводить CRM надо с первых дней</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Даже когда кажется, что «пока рано». Привычка вести записи формируется только тогда, когда их ещё мало.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[24px]">
          <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[12px]">02</p>
          <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">CRM — это память команды</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Не «база контактов». А история: кто, когда, о чём говорили и какое следующее действие. Без этого каждый раз начинаете с нуля.</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[24px]">
          <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[12px]">03</p>
          <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">Без CRM нет пайплайна</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">А без пайплайна — нет прогноза выручки. Не видно, сколько сделок на какой стадии и где они застряли.</p>
        </div>
      </div>
    </div>
  );
}
