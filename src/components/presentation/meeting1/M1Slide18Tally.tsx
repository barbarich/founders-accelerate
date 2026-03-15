export default function M1Slide18Tally() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Tally.so
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Custdev-форма за 3 минуты. Бесплатно.</p>
      <div className="flex gap-[32px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Для кого</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Для тех кто хочет начать с письменного опроса перед звонками.
          </p>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Живое демо</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Создаю форму из 7 вопросов на экране за 3 минуты.
          </p>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-gold))] mb-[16px]">Шаблон</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">
            Даю участникам готовый шаблон — клонируете, адаптируете под свой продукт.
          </p>
        </div>
      </div>
    </div>
  );
}
