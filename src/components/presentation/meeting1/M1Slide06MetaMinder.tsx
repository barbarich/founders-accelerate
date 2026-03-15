export default function M1Slide06MetaMinder() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Мой пример</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Как я анализировал конкурентов
      </h2>
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[48px] max-w-[1200px]">
        <div className="flex items-center gap-[16px] mb-[32px]">
          <div className="w-[48px] h-[48px] rounded-full bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center">
            <span className="text-[hsl(var(--slide-gold))] text-[20px] font-semibold">MM</span>
          </div>
          <span className="text-[24px] font-semibold text-[hsl(var(--slide-text))]">MetaMinder</span>
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.7] italic">
          "Когда я валидировал идею МетаМайндера, первый месяц я не выходил из гугла и поиска всего, что только можно было найти по теме: рисерчи, конкуренты, аналитика, рынок, отзывы, комьюнити. Я зарегистрировался в топ-5 платформах конкурентов, пришёл к каждому на звонок под видом клиента и выяснял всё, что только мог узнать. А после — копировал, улучшая под свой продукт."
        </p>
      </div>
    </div>
  );
}
