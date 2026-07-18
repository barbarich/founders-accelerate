import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    brand: "Spanx",
    who: "Сара Блейкли",
    story: "Отрезала ступни у колготок, чтобы носить под белые брюки. Без рекламного бюджета рассказывала свою историю отказов и упорства везде, где могла. Личная история стала брендом на миллиарды.",
  },
  {
    brand: "Dollar Shave Club",
    who: "Майкл Дубин",
    story: "Один честный смешной ролик, где основатель сам в кадре говорит прямо (2012). Почти без бюджета - миллионы просмотров. Через 4 года продан Unilever за ~$1 млрд.",
  },
  {
    brand: "Airbnb",
    who: "Брайан Чески",
    story: "Чтобы выжить, продавали коробки хлопьев «Obama O's». История про матрасы на полу во время конференции стала лицом бренда - и её пересказывают до сих пор.",
  },
  {
    brand: "Basecamp",
    who: "Джейсон Фрайд и DHH",
    story: "Книга «Rework» и резкие честные посты собрали огромную аудиторию задолго до продаж. Доказали: B2B тоже покупают за историю и позицию, а не за список функций.",
  },
];

export default function L10SlideCases() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Истории, которые построили компании
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Не реклама сделала их. <span className="text-[hsl(var(--slide-gold))]">История</span>.
        </h2>
        <div className="grid grid-cols-2 gap-[7px]">
          {cases.map((c) => (
            <div key={c.brand} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{c.brand}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-gold))] mb-[3px]">{c.who}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{c.story}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Истории, которые построили компании
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.01em]">
        Не реклама сделала их. <span className="text-[hsl(var(--slide-gold))]">История</span>.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1800px]">
        {cases.map((c) => (
          <div key={c.brand} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{c.brand}</p>
              <p className="text-[17px] text-[hsl(var(--slide-gold))]">{c.who}</p>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.82)] leading-[1.45]">{c.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
