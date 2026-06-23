import { useIsMobile } from "@/hooks/use-mobile";

export default function L2SlideSurveysIntro() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Начинаем с количества
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Сначала цифры — понять суть и масштаб проблемы.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[12px]">
          100 опросов показывают: <span className="text-[hsl(var(--slide-text))] font-medium">какая боль массовая</span>, <span className="text-[hsl(var(--slide-text))] font-medium">какие сегменты болят сильнее</span>, <span className="text-[hsl(var(--slide-text))] font-medium">сколько готовы платить</span>. Отсюда рождаются гипотезы для кастдева.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] px-[12px] py-[10px] mb-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Уже есть юзеры?</span> Опросы бьют точнее всего: что осталось больным, на что жалуются, что любят, где новые точки роста.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[12px]">
          <p className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Без количества легко построить продукт под несколько громких голосов. <span className="text-[hsl(var(--slide-gold))] font-semibold">Цифры показывают, чего хочет большинство</span> — то самое, которое потом платит.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        Начинаем с количества
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1600px]">
        Сначала цифры — <span className="text-[hsl(var(--slide-gold))]">понять суть и масштаб проблемы.</span>
      </h2>
      <div className="max-w-[1500px] space-y-[18px] mb-[24px]">
        <p className="text-[26px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          100 опросов показывают: <span className="text-[hsl(var(--slide-text))] font-semibold">какая боль массовая</span>, <span className="text-[hsl(var(--slide-text))] font-semibold">какие сегменты болят сильнее</span>, <span className="text-[hsl(var(--slide-text))] font-semibold">сколько готовы платить</span>. Из ответов рождаются гипотезы, которые дальше валидируешь в кастдеве лично.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] px-[32px] py-[22px] max-w-[1500px] mb-[24px]">
        <p className="text-[24px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Уже есть пользователи?</span> Тогда опросы бьют точнее всего: видишь, что осталось больным, на что жалуются, что любят, и где новые потенциальные точки роста.
        </p>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1500px]">
        <p className="text-[28px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Без количества легко построить продукт под несколько громких голосов. <span className="text-[hsl(var(--slide-gold))] font-bold">Цифры показывают, чего хочет большинство</span> — то самое, которое в итоге платит.
        </p>
      </div>
    </div>
  );
}
