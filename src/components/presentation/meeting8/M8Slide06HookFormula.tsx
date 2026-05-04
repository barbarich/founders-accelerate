import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", title: "Триггер", body: "Что напомнило о продукте? Внешний (push, письмо) или внутренний (скука, тревога, желание)." },
  { n: "2", title: "Действие", body: "Самое простое — в один тап. Открыл, свайпнул, отметил." },
  { n: "3", title: "Награда", body: "Переменная. Не «спасибо» — а сюрприз: новый матч, новая лента, +1 streak." },
  { n: "4", title: "Инвестиция", body: "Пользователь оставляет след: данные, контент, прогресс. Завтра возвращаться будет легче." },
];

export default function M8Slide06HookFormula() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Формула возврата · Hook Model
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Петля из 4 шагов. На пальцах.
        </h2>
        <p className="font-mono text-[10px] text-[hsl(var(--slide-gold))] mb-[12px] leading-[1.5]">
          Триггер → Действие → Награда → Инвестиция → ↺
        </p>
        <div className="space-y-[6px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{s.title}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Формула возврата · Hook Model (Nir Eyal, на пальцах)
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Любая привычка к продукту — петля из 4 шагов.
      </h2>
      <p className="font-mono text-[24px] text-[hsl(var(--slide-gold))] mb-[28px] tracking-[0.02em]">
        Триггер → Действие → Награда → Инвестиция → ↺
      </p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1500px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[22px] py-[20px]">
            <div className="flex items-baseline gap-[10px] mb-[8px]">
              <span className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{s.title}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}