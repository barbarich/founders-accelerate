import { useIsMobile } from "@/hooks/use-mobile";

export default function L3Slide21MVPChecklist() {
  const product = [
    "Решает одну конкретную проблему от начала до конца",
    "Пользователь получает результат за первые 5 минут",
    "Можно объяснить что делает за одно предложение",
  ];
  const business = [
    "Есть способ оплаты (или регистрации — если freemium)",
    "Клиент может пройти путь от начала до результата",
    "Можно показать живому человеку прямо сейчас",
    "Вы можете назвать 3 человека, которые это купят",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">MVP</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Чеклист готовности MVP
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px]">Остались ли в твоём MVP только MUST HAVE?</p>

        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">Продукт</p>
        <div className="space-y-[4px] mb-[8px]">
          {product.map((item, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <div className="w-[16px] h-[16px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">Бизнес</p>
        <div className="space-y-[4px] mb-[8px]">
          {business.map((item, i) => (
            <div key={i} className="flex items-start gap-[8px]">
              <div className="w-[16px] h-[16px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[1px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))]">{i + 4}</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
            </div>
          ))}
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))]">4+ из 7 ✅ — можно запускать. Меньше — доработай к следующей неделе.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">MVP</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">Чеклист готовности MVP</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[36px]">Остались ли в твоём MVP только MUST HAVE?</p>

      <div className="flex gap-[32px] max-w-[1100px] mb-[28px]">
        <div className="flex-1">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[16px]">Продукт</p>
          <div className="space-y-[14px]">
            {product.map((item, i) => (
              <div key={i} className="flex items-start gap-[14px]">
                <div className="w-[34px] h-[34px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
                </div>
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[1px] bg-[hsl(var(--slide-border)/0.3)]" />
        <div className="flex-1">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-semibold mb-[16px]">Бизнес</p>
          <div className="space-y-[14px]">
            {business.map((item, i) => (
              <div key={i} className="flex items-start gap-[14px]">
                <div className="w-[34px] h-[34px] rounded border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center shrink-0 mt-[2px]">
                  <span className="font-mono text-[16px] text-[hsl(var(--slide-gold))]">{i + 4}</span>
                </div>
                <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[16px] max-w-[1100px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))]">4+ из 7 ✅ — можно запускать. Меньше — доработай к следующей неделе.</p>
      </div>
    </div>
  );
}
