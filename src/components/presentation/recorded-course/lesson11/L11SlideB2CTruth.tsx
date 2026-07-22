import { useIsMobile } from "@/hooks/use-mobile";

const signals = [
  { s: "Первая активность", body: "Люди кликают, регистрируются, пробуют. Ты видишь живую реакцию, а не догадки." },
  { s: "Подтверждение готовности", body: "Если после клика доходят до ценности и возвращаются - продукт готов к трафику." },
  { s: "Воронка работает", body: "Виден весь путь: клик → регистрация → активация. Ясно, где именно теряешь людей." },
];

export default function L11SlideB2CTruth() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          B2C · что даёт сторителлинг и маркетинг
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Первая активность = <span className="text-[hsl(var(--slide-gold))]">проверка боем</span>
        </h2>
        <div className="space-y-[6px] mb-[9px]">
          {signals.map((x) => (
            <div key={x.s} className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[10px] py-[6px]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{x.s}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{x.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            В B2C маркетинг - это не «продать побольше». Это <span className="text-[hsl(var(--slide-gold))]">способ проверить</span>, что продукт и воронка вообще живые.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        B2C · что даёт сторителлинг и маркетинг
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        Первая активность = <span className="text-[hsl(var(--slide-gold))]">проверка боем</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px] mb-[24px]">
        {signals.map((x) => (
          <div key={x.s} className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[24px] py-[18px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{x.s}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{x.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          В B2C маркетинг - это не «продать побольше». Это <span className="text-[hsl(var(--slide-gold))]">способ проверить</span>, что продукт и воронка вообще живые.
        </p>
      </div>
    </div>
  );
}
