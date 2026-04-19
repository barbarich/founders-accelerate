import { useIsMobile } from "@/hooks/use-mobile";

export default function M6Slide03Theme() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Тема встречи
        </p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px]">
          Первая сессия<br />в продукте.
        </h2>
        <p className="text-[11.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">
          От «вошёл» до «понял что делать и есть ли смысл возвращаться».<br />
          Сегодня делаем эту сессию проходимой.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] leading-[1.45]">
            <span className="text-[hsl(var(--slide-gold))] font-semibold">Первые 60 секунд</span> = ориентация, а не Aha.
            Aha приходит позже — для B2B и tools часто не в первой сессии вообще. Наша задача — <span className="text-[hsl(var(--slide-gold))] font-semibold">не сломать путь к нему</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Тема встречи
      </p>
      <h2 className="font-display text-[100px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[32px] tracking-[-0.02em]">
        Первая сессия в продукте.
      </h2>
      <p className="text-[26px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[36px] max-w-[1300px]">
        От «вошёл» до «понял что делать и есть ли смысл возвращаться».<br />
        Сегодня делаем эту сессию проходимой.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1400px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="text-[hsl(var(--slide-gold))] font-semibold">Первые 60 секунд</span> — это ориентация, а не Aha.
          Aha приходит позже: для B2B и tools — часто не в первой сессии вообще.
          Наша задача — <span className="text-[hsl(var(--slide-gold))] font-semibold">не сломать путь к нему</span>.
        </p>
      </div>
    </div>
  );
}
