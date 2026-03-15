export default function M1Slide14WhoWillPay() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Целевая аудитория</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[64px]">
        Кто заплатит vs. кому полезно
      </h2>
      <div className="flex gap-[48px] mb-[56px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[44px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[hsl(var(--slide-text-muted)/0.3)]" />
          <span className="text-[40px]">🌍</span>
          <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text-muted))] mt-[20px] mb-[16px]">"Кому полезно"</h3>
          <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">= весь мир. Это не аудитория, это фантазия.</p>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[44px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[hsl(var(--slide-gold))]" />
          <span className="text-[40px]">💰</span>
          <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mt-[20px] mb-[16px]">"Кто заплатит"</h3>
          <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">= конкретный человек с конкретной болью, который уже тратит деньги/время на решение.</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[22px] text-[hsl(var(--slide-gold))] font-medium">
          Вопрос не "кому это нужно?", а "кто прямо сейчас страдает от этой проблемы и готов платить за решение?"
        </p>
      </div>
    </div>
  );
}
