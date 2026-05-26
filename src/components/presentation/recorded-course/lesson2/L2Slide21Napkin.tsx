export default function L2Slide21Napkin() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        Napkin.ai
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[48px]">Визуализация позиционирования</p>
      <div className="flex gap-[32px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Как работает</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Вводишь текстовое описание → получаешь схему: проблема → решение → для кого → отличие.
          </p>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Зачем</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Не картинка для красоты — инструмент для структурирования мышления. Когда видишь визуально, сразу понятно где дыры.
          </p>
        </div>
      </div>
    </div>
  );
}
