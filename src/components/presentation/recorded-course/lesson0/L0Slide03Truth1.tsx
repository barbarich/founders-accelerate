import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide03Truth1() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правда 1 из 5
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px] tracking-[-0.01em]">
          Сначала ты строишь — потом теряешь 6 месяцев
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[14px]">
          <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            42% стартапов сгорают по одной причине: <span className="text-[hsl(var(--slide-gold))]">«no market need»</span>
          </p>
          <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[4px]">Источник: CB Insights, top reasons startups fail</p>
        </div>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          Ты открываешь Lovable, строишь продукт за выходные. Запускаешь. <span className="text-[hsl(var(--slide-text))] font-medium">Никого.</span> Ещё месяц допиливаешь. Никого.
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[14px]">
          Через 6 месяцев и $5–15K из кошелька ты понимаешь — этого никому не было нужно.
        </p>
        <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[12px]">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Что делать</p>
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            10 интервью + 100 опросов <span className="text-[hsl(var(--slide-gold))]">ДО</span> первой строчки кода. PASS/FAIL перед стройкой. Уроки 1–2 этого курса.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правда 1 из 5
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1500px]">
        Сначала ты строишь —<br />потом теряешь 6 месяцев
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px] mb-[32px]">
        <p className="text-[32px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          42% стартапов сгорают по одной причине:<br /><span className="text-[hsl(var(--slide-gold))]">«no market need»</span>
        </p>
        <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mt-[10px]">Источник: CB Insights, top reasons startups fail</p>
      </div>
      <div className="max-w-[1500px] space-y-[20px] mb-[32px]">
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Ты открываешь Lovable, строишь продукт за выходные. Запускаешь. <span className="text-[hsl(var(--slide-text))] font-semibold">Никого.</span> Ещё месяц допиливаешь. Никого. Через 6 месяцев и $5–15K из кошелька ты понимаешь — этого никому не было нужно.
        </p>
      </div>
      <div className="border-t border-[hsl(var(--slide-gold)/0.2)] pt-[20px] max-w-[1500px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Что делать</p>
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.5]">
          10 интервью + 100 опросов <span className="text-[hsl(var(--slide-gold))] font-semibold">ДО</span> первой строчки кода. PASS/FAIL перед стройкой. Уроки 1–2 этого курса.
        </p>
      </div>
    </div>
  );
}
