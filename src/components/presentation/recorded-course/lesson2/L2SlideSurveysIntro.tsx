import { useIsMobile } from "@/hooks/use-mobile";

export default function L2SlideSurveysIntro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          После 10 интервью — 100 опросов
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Качественно ты услышал боль. Количественно — её размер.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          10 интервью говорят: «вот моя боль, я бы купил». <span className="text-[hsl(var(--slide-text))] font-medium">Это качество.</span>
        </p>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          100 опросов говорят: <span className="text-[hsl(var(--slide-text))] font-medium">сколько таких людей</span>, <span className="text-[hsl(var(--slide-text))] font-medium">сколько готовы платить</span>, <span className="text-[hsl(var(--slide-text))] font-medium">какие сегменты болят сильнее</span>. Это размер рынка.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">Без количества</span> ты строишь продукт для болтливого меньшинства. Они не платят — платит молчаливое большинство.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        После 10 интервью — 100 опросов
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] tracking-[-0.01em] max-w-[1600px]">
        Качественно ты услышал боль.<br /><span className="text-[hsl(var(--slide-gold))]">Количественно — её размер.</span>
      </h2>
      <div className="max-w-[1500px] space-y-[20px] mb-[28px]">
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          10 интервью говорят: «вот моя боль, я бы купил». <span className="text-[hsl(var(--slide-text))] font-semibold">Это качество.</span>
        </p>
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          100 опросов говорят: <span className="text-[hsl(var(--slide-text))] font-semibold">сколько таких людей</span>, <span className="text-[hsl(var(--slide-text))] font-semibold">сколько готовы платить</span>, <span className="text-[hsl(var(--slide-text))] font-semibold">какие сегменты болят сильнее</span>. Это размер рынка.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px]">
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">Без количества</span> ты строишь продукт для болтливого меньшинства. Они не платят — платит молчаливое большинство.
        </p>
      </div>
    </div>
  );
}
