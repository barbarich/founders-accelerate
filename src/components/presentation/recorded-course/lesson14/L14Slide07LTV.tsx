import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  { title: "Средняя жизнь = 1 / churn", text: "Churn 8% в месяц - клиент живёт в среднем 12.5 месяца. Churn 15% - всего 6.7 месяца." },
  { title: "Продукт новый - churn ещё не известен", text: "Это норма, а не проблема. Следующий слайд - что считать вместо LTV, пока данных о жизни клиента нет." },
  { title: "Проверяй по когорте, а не по среднему", text: "Возьми всех, кто заплатил в январе, и посмотри, сколько из них платят в июле. Это твой настоящий retention, без прогнозов." },
  { title: "Retention из урока 8 - это множитель LTV", text: "Каждая механика удержания, которую ты внедрил, напрямую увеличивает это число." },
];

export default function L14Slide07LTV() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Число 3 · LTV</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          LTV: сколько принесёт клиент - <span className="text-[hsl(var(--slide-gold))]">без самообмана</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[7px] px-[11px] py-[7px] mb-[8px]">
          <p className="text-[10px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
            LTV = маржа с клиента в месяц × средняя жизнь в месяцах<br />
            $22 × 12.5 мес = <span className="text-[hsl(var(--slide-gold))] font-bold">$275</span>
          </p>
        </div>
        <div className="space-y-[5px] mb-[8px]">
          {rules.map((r, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">{r.title}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{r.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          LTV - самое легко завышаемое число в стартапе. Инвесторы это знают, поэтому проверяют его первым.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Число 3 · LTV</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        LTV: сколько принесёт клиент - <span className="text-[hsl(var(--slide-gold))]">без самообмана</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[28px] py-[14px] mb-[18px] max-w-[1650px]">
        <p className="text-[22px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
          LTV = маржа с клиента в месяц × средняя жизнь в месяцах · $22 × 12.5 мес = <span className="text-[hsl(var(--slide-gold))] font-bold">$275</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[14px] mb-[18px] max-w-[1650px]">
        {rules.map((r, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[22px] py-[14px]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">{r.title}</p>
            <p className="text-[16.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{r.text}</p>
          </div>
        ))}
      </div>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        LTV - самое легко завышаемое число в стартапе. Инвесторы это знают, поэтому проверяют его первым.
      </p>
    </div>
  );
}
