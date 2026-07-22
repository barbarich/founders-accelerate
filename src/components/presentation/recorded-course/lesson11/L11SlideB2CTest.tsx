import { useIsMobile } from "@/hooks/use-mobile";

const checks = [
  { q: "Кликают на объявление?", a: "Проверяешь оффер и историю - цепляет ли вообще." },
  { q: "Регистрируются после клика?", a: "Проверяешь, что обещание на объявлении совпадает с первым экраном." },
  { q: "Доходят до ценности?", a: "Проверяешь, что продукт удерживает, а не только привлекает." },
];

export default function L11SlideB2CTest() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          B2C · тестируй сразу, с малого бюджета
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          <span className="text-[hsl(var(--slide-gold))]">$30-50 в день</span> - этого хватит на сигнал.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[9px]">
          Малый бюджет не про масштаб. Он отвечает на три вопроса - и каждый показывает, где рвётся:
        </p>
        <div className="space-y-[6px] mb-[9px]">
          {checks.map((c, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{c.q}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{c.a}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Но бюджет <span className="text-[hsl(var(--slide-gold))]">не отменяет твою личную работу</span>. Реклама только доставляет историю. Если истории нет - платный клик приведёт равнодушного человека.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        B2C · тестируй сразу, с малого бюджета
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.01em]">
        <span className="text-[hsl(var(--slide-gold))]">$30-50 в день</span> - этого хватит на сигнал.
      </h2>
      <p className="text-[23px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1800px] mb-[24px]">
        Малый бюджет не про масштаб. Он отвечает на три вопроса - и каждый показывает, где рвётся:
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px] mb-[24px]">
        {checks.map((c, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[8px]">{c.q}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{c.a}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Но бюджет <span className="text-[hsl(var(--slide-gold))]">не отменяет твою личную работу</span>. Реклама только доставляет историю. Нет истории - платный клик приведёт равнодушного человека.
        </p>
      </div>
    </div>
  );
}
