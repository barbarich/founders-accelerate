export default function Slide20CTA() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_45%_58%/0.06)_0%,transparent_70%)]" />
      
      <div className="relative z-10 text-center max-w-[1000px]">
        <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[32px]">
          Присоединяйтесь
        </p>
        
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
          The Founders Circle
        </h2>

        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[16px]">
          Регистрация на программу
        </p>

        <p className="text-[22px] text-[hsl(var(--slide-text)/0.7)] mb-[64px] max-w-[600px] mx-auto">
          Заполните анкету — это займёт 3 минуты.<br />
          Я лично прочитаю каждую и свяжусь с вами.
        </p>

        {/* CTA Button */}
        <div className="inline-flex items-center gap-[16px] px-[48px] py-[24px] bg-[hsl(var(--slide-gold))] rounded-[8px] mb-[48px]">
          <span className="text-[24px] font-semibold text-[hsl(var(--slide-bg))]">Заполнить анкету →</span>
        </div>

        <div className="flex items-center justify-center gap-[32px] text-[18px] text-[hsl(var(--slide-text-muted))]">
          <span>Старт — через 2 недели</span>
          <span className="w-[4px] h-[4px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
          <span>Количество мест ограничено</span>
        </div>
      </div>
    </div>
  );
}
