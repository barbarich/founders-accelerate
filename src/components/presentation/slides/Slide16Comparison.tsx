const rows = [
  { course: "Лекции и теория", fc: "Вы строите свой продукт" },
  { course: "Сотни участников", fc: "5–7 человек в группе" },
  { course: "Без обратной связи", fc: "Фидбек каждую неделю" },
  { course: "Контент одинаковый для всех", fc: "Максимум внимания каждому" },
  { course: "Закончился — забыли", fc: "Комьюнити остаётся" },
];

export default function Slide16Comparison() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Сравнение</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[72px]">
        Чем это отличается от курсов
      </h2>

      <div className="max-w-[1400px]">
        {/* Header */}
        <div className="flex mb-[8px]">
          <div className="w-[600px] px-[32px] py-[20px]">
            <span className="text-[18px] font-medium text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.1em]">Курсы</span>
          </div>
          <div className="flex-1 px-[32px] py-[20px]">
            <span className="text-[18px] font-medium text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">The Founders Circle</span>
          </div>
        </div>

        {rows.map((r, i) => (
          <div key={i} className="flex border-t border-[hsl(var(--slide-border)/0.5)]">
            <div className="w-[600px] px-[32px] py-[28px]">
              <span className="text-[22px] text-[hsl(var(--slide-text-muted))]">{r.course}</span>
            </div>
            <div className="flex-1 px-[32px] py-[28px] bg-[hsl(var(--slide-gold)/0.03)]">
              <span className="text-[22px] text-[hsl(var(--slide-text))] font-medium">{r.fc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
