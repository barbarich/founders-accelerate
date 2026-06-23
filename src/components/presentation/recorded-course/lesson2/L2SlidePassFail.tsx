import { useIsMobile } from "@/hooks/use-mobile";

export default function L2SlidePassFail() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          PASS / FAIL критерий
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Когда хватит данных, чтобы начинать строить
        </h2>
        <div className="space-y-[10px] mb-[14px]">
          <div className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[10px]">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">✓ PASS — строй</p>
            <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
              {`>=`}60% из 100 опрошенных назвали ту же боль в топ-3 <span className="font-bold">+</span> 7 из 10 интервью подтвердили её живьём <span className="font-bold">+</span> {`>=`}30% готовы платить указанную тобой цену
            </p>
          </div>
          <div className="border-l-2 border-[hsl(var(--slide-text-muted)/0.4)] px-[14px] py-[10px]">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[4px]">✗ FAIL — пивот гипотезы</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              {`<`}7 из 10 интервью или {`<`}60% опросов или {`<`}30% готовы платить — гипотеза не подтверждена. Не строй. Переформулируй и проходи L1-L2 заново.
            </p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold">
            Action gate перед Уроком 3: без PASS — не переходи к строительству.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        PASS / FAIL критерий
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1700px]">
        Когда хватит данных, чтобы начинать строить
      </h2>
      <div className="space-y-[20px] mb-[28px] max-w-[1700px]">
        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[32px] py-[22px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">✓ PASS — строй</p>
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <span className="font-bold">{`>=`}60%</span> из 100 опрошенных назвали ту же боль в топ-3 · <span className="font-bold">7 из 10</span> интервью подтвердили её живьём · <span className="font-bold">{`>=`}30%</span> готовы платить указанную тобой цену
          </p>
        </div>
        <div className="border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)] px-[32px] py-[22px]">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">✗ FAIL — пивот гипотезы</p>
          <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Меньше любого из 3 порогов — гипотеза не подтверждена. <span className="font-semibold">Не строй.</span> Переформулируй гипотезу и проходи Уроки 1-2 заново.
          </p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px] max-w-[1700px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Action gate перед Уроком 3: <span className="text-[hsl(var(--slide-gold))]">без PASS — не переходи к строительству.</span>
        </p>
      </div>
    </div>
  );
}
