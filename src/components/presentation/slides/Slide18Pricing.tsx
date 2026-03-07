export default function Slide18Pricing() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Участие</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[80px]">
        Форматы участия
      </h2>

      <div className="flex gap-[48px] max-w-[1400px]">
        {/* Accelerator */}
        <div className="flex-1 border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] p-[56px] bg-[hsl(var(--slide-gold)/0.03)] relative">
          <div className="absolute top-[24px] right-[24px] px-[16px] py-[6px] bg-[hsl(var(--slide-gold))] rounded-full">
            <span className="text-[14px] font-semibold text-[hsl(var(--slide-bg))]">Рекомендую</span>
          </div>
          <h3 className="text-[36px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">Акселератор</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[40px]">Полная программа на 3 месяца</p>
          
          <div className="space-y-[16px] mb-[48px]">
            {[
              "12 еженедельных встреч (онлайн)",
              "Экспертные сессии каждый месяц",
              "Telegram-группа и доступ ко мне",
              "Мои контакты и связи",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <span className="text-[hsl(var(--slide-gold))]">✓</span>
                <span className="text-[20px] text-[hsl(var(--slide-text)/0.9)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[hsl(var(--slide-border))] pt-[32px]">
            <span className="text-[42px] font-bold text-[hsl(var(--slide-gold))]">₪2,000</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]"> / мес</span>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mt-[4px]">или ₪4,500 за 3 месяца</p>
          </div>
        </div>

        {/* Consultation */}
        <div className="flex-1 border border-[hsl(var(--slide-border))] rounded-[12px] p-[56px] bg-[hsl(var(--slide-bg-alt))]">
          <h3 className="text-[36px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">Консультация</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[40px]">Для точечного совета или разбора</p>
          
          <div className="space-y-[16px] mb-[48px]">
            {[
              "60 минут, онлайн",
              "Разбор вашего проекта",
              "Стратегия и конкретные шаги",
              "Нетворк и комьюнити",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <span className="text-[hsl(var(--slide-text-muted))]">✓</span>
                <span className="text-[20px] text-[hsl(var(--slide-text)/0.9)]">{item}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-[hsl(var(--slide-border))] pt-[32px]">
            <span className="text-[42px] font-bold text-[hsl(var(--slide-text))]">₪500</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]"> / сессия</span>
          </div>
        </div>
      </div>
    </div>
  );
}
