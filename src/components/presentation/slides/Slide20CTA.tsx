export default function Slide20CTA() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38_45%_58%/0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 flex gap-[100px] items-center max-w-[1500px]">
        {/* Left — text */}
        <div className="flex-1">
          <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
            Следующий шаг
          </p>

          <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
            Как присоединиться
          </h2>

          <p className="text-[26px] text-[hsl(var(--slide-text-muted))] mb-[48px] leading-[1.5]">
            Старт программы — <span className="text-[hsl(var(--slide-gold))] font-semibold">16 марта 2026</span>
          </p>

          {/* Steps */}
          <div className="space-y-[24px] mb-[48px]">
            <div className="flex items-start gap-[20px]">
              <span className="text-[28px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono mt-[-2px]">01</span>
              <div>
                <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Заполните анкету</p>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.5)]">Это займёт 3 минуты. Я лично прочитаю каждую.</p>
              </div>
            </div>
            <div className="flex items-start gap-[20px]">
              <span className="text-[28px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono mt-[-2px]">02</span>
              <div>
                <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Оплатите участие</p>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.5)]">Bit · перевод на счёт в Израиле · оплата картой</p>
              </div>
            </div>
            <div className="flex items-start gap-[20px]">
              <span className="text-[28px] font-bold text-[hsl(var(--slide-gold)/0.3)] font-mono mt-[-2px]">03</span>
              <div>
                <p className="text-[24px] text-[hsl(var(--slide-text))] font-medium">Начинаем работать</p>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.5)]">Добро пожаловать в The Founders Circle</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] text-[hsl(var(--slide-gold)/0.7)] italic">
            Количество мест ограничено — 5–7 человек в группе
          </p>
        </div>

        {/* Right — QR code */}
        <div className="flex flex-col items-center">
          <div className="w-[320px] h-[320px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[16px] flex items-center justify-center mb-[24px]">
            <div className="text-center">
              <div className="w-[240px] h-[240px] bg-[hsl(var(--slide-border)/0.15)] rounded-[8px] flex items-center justify-center">
                <span className="text-[64px] text-[hsl(var(--slide-text)/0.15)]">QR</span>
              </div>
            </div>
          </div>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] text-center">
            Отсканируйте для<br />заполнения анкеты
          </p>
        </div>
      </div>
    </div>
  );
}
