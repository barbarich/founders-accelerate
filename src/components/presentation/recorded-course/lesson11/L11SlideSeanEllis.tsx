import { useIsMobile } from "@/hooks/use-mobile";

export default function L11SlideSeanEllis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Sean Ellis test · industry standard
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          1 вопрос пользователю. <span className="text-[hsl(var(--slide-gold))]">40%</span> — порог PMF.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px] mb-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] font-bold leading-[1.4] mb-[4px]">Вопрос:</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
            «Насколько ты расстроишься, если завтра [твой продукт] больше не будет существовать?»
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          Опции: <span className="text-[hsl(var(--slide-text))] font-medium">очень расстроюсь · немного · не расстроюсь · уже не использую</span>.
        </p>
        <div className="space-y-[6px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">40%+ «очень расстроюсь»</p>
            <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)]">PMF подтверждён. Можно масштабировать.</p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[10px] py-[6px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-text-muted))]">{`<`} 40%</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))]">PMF ещё нет. Не лей деньги в рекламу — чини продукт.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Sean Ellis test · industry standard
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        1 вопрос пользователю. <span className="text-[hsl(var(--slide-gold))]">40%</span> — порог PMF.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[24px] max-w-[1700px] mb-[24px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Вопрос</p>
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.4] italic">
          «Насколько ты расстроишься, если завтра [твой продукт] больше не будет существовать?»
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[24px]">
        Опции: <span className="text-[hsl(var(--slide-text))] font-semibold">очень расстроюсь · немного расстроюсь · не расстроюсь · уже не использую</span>.
      </p>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1700px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)] px-[28px] py-[20px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">40%+ очень расстроюсь</p>
          <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5]">PMF подтверждён. <span className="font-semibold">Можно масштабировать.</span> Лей деньги в рекламу.</p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[28px] py-[20px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">{`<`} 40%</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">PMF ещё нет. <span className="font-semibold">Не лей деньги в рекламу</span> — чини продукт.</p>
        </div>
      </div>
    </div>
  );
}
