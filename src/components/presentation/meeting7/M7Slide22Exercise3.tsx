import { useIsMobile } from "@/hooks/use-mobile";

export default function M7Slide22Exercise3() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Упражнение · 2 минуты
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
          Твоя причина вернуться. В чат.
        </h2>
        <div className="space-y-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.45]">
              <span className="font-bold text-[hsl(var(--slide-gold))]">1.</span> Какой из 5 механизмов есть в твоём продукте сегодня?
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[7px] px-[12px] py-[8px]">
            <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.45]">
              <span className="font-bold text-[hsl(var(--slide-gold))]">2.</span> Если ни одного — какой проще всего добавить за неделю?
            </p>
          </div>
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Тест: закрой свой продукт. Что ты теряешь, если не вернёшься завтра? Если «ничего» — третий экран сломан.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Упражнение · 2 минуты
      </p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[32px] tracking-[-0.02em]">
        Твоя причина вернуться. В чат.
      </h2>
      <div className="space-y-[14px] max-w-[1500px] mb-[28px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[20px] flex gap-[20px] items-center">
          <span className="font-mono text-[36px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">1</span>
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.4]">Какой из 5 механизмов есть в твоём продукте сегодня?</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[20px] flex gap-[20px] items-center">
          <span className="font-mono text-[36px] text-[hsl(var(--slide-gold))] font-bold leading-none shrink-0">2</span>
          <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.4]">Если ни одного — какой проще всего добавить за неделю?</p>
        </div>
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Тест: закрой свой продукт. Что ты теряешь, если не вернёшься завтра? Если «ничего» — третий экран сломан.
      </p>
    </div>
  );
}
