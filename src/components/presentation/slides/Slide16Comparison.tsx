const rows = [
  { course: "Теория и лекции", fc: "Вы строите свой продукт" },
  { course: "Сотни участников", fc: "5–7 человек в группе" },
  { course: "Записанный контент", fc: "Живые сессии каждую неделю" },
  { course: "Без персональной обратной связи", fc: "Ментор на расстоянии сообщения" },
  { course: "Одинаковый путь для всех", fc: "Адаптируется под ваш проект" },
  { course: "Закончился — и всё", fc: "Комьюнити 170+ фаундеров навсегда" },
];

export default function Slide16Comparison() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Сравнение
      </p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[72px]">
        Это не курс. Это акселератор.
      </h2>

      <div className="max-w-[1400px]">
        {/* Header */}
        <div className="flex mb-[4px]">
          <div className="w-[620px] px-[36px] py-[20px]">
            <span className="text-[18px] font-medium text-[hsl(var(--slide-text)/0.4)] uppercase tracking-[0.1em]">Типичный курс</span>
          </div>
          <div className="flex-1 px-[36px] py-[20px]">
            <span className="text-[18px] font-medium text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em]">The Founders Circle</span>
          </div>
        </div>

        {rows.map((r, i) => (
          <div key={i} className="flex border-t border-[hsl(var(--slide-border)/0.3)]">
            <div className="w-[620px] px-[36px] py-[26px] flex items-center gap-[14px]">
              <span className="text-[20px] text-[hsl(var(--slide-text)/0.3)]">✕</span>
              <span className="text-[22px] text-[hsl(var(--slide-text)/0.45)]">{r.course}</span>
            </div>
            <div className="flex-1 px-[36px] py-[26px] bg-[hsl(var(--slide-gold)/0.03)] flex items-center gap-[14px]">
              <span className="text-[20px] text-[hsl(var(--slide-gold))]">✓</span>
              <span className="text-[22px] text-[hsl(var(--slide-text))] font-medium">{r.fc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
