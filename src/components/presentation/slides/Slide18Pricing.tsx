import { useIsMobile } from "@/hooks/use-mobile";

export default function Slide18Pricing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Участие</p>
        <h2 className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">Форматы участия</h2>
        <div className="space-y-[10px]">
          {/* Accelerator */}
          <div className="border border-[hsl(var(--slide-gold)/0.4)] rounded-[8px] p-[16px] bg-[hsl(var(--slide-gold)/0.03)]">
            <h3 className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">Акселератор</h3>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Полная программа · 3 месяца</p>
            <div className="space-y-[6px] mb-[14px]">
              {["12 еженедельных групповых встреч (2 часа)", "6 личных консультаций со мной", "3 сессии с приглашёнными экспертами", "Доступ ко мне между встречами", "Нетворк и комьюнити 170+ фаундеров", "Мои контакты и связи"].map((item, i) => (
                <div key={i} className="flex items-start gap-[6px]">
                  <span className="text-[hsl(var(--slide-gold))] text-[10px] mt-[1px]">✓</span>
                  <span className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[hsl(var(--slide-border)/0.4)] pt-[10px]">
              <div className="flex items-baseline gap-[8px] mb-[2px]">
                <span className="text-[24px] font-bold text-[hsl(var(--slide-gold))]">₪4,500</span>
                <span className="text-[11px] text-[hsl(var(--slide-text-muted))]">за программу</span>
              </div>
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[18px] font-bold text-[hsl(var(--slide-gold)/0.8)]">₪2,000</span>
                <span className="text-[11px] text-[hsl(var(--slide-text-muted))]">/ мес × 3</span>
              </div>
            </div>
          </div>
          {/* Consultation */}
          <div className="border border-[hsl(var(--slide-border))] rounded-[8px] p-[16px] bg-[hsl(var(--slide-bg-alt))]">
            <h3 className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">Консультация</h3>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Разовая сессия · 2 часа</p>
            <div className="space-y-[6px] mb-[14px]">
              {["Глубокое погружение в ваш вопрос", "Ответы на основе моего опыта", "Конкретные рекомендации", "Разбор бизнес-модели или продукта"].map((item, i) => (
                <div key={i} className="flex items-start gap-[6px]">
                  <span className="text-[hsl(var(--slide-text-muted))] text-[10px] mt-[1px]">✓</span>
                  <span className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[hsl(var(--slide-border)/0.4)] pt-[10px]">
              <span className="text-[24px] font-bold text-[hsl(var(--slide-text))]">₪1,200</span>
              <span className="text-[11px] text-[hsl(var(--slide-text-muted))]"> / сессия</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Участие</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[72px]">Форматы участия</h2>
      <div className="flex gap-[48px] max-w-[1500px]">
        <div className="flex-[1.15] border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] p-[52px] bg-[hsl(var(--slide-gold)/0.03)]">
          <h3 className="text-[36px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">Акселератор</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[36px]">Полная программа · 3 месяца</p>
          <div className="space-y-[14px] mb-[40px]">
            {["12 еженедельных групповых встреч (2 часа)", "6 личных консультаций со мной (раз в 2 недели)", "3 сессии с приглашёнными экспертами", "Доступ ко мне между встречами (Telegram)", "Нетворк и комьюнити 170+ фаундеров", "Мои контакты и связи"].map((item, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="text-[hsl(var(--slide-gold))] mt-[2px]">✓</span>
                <span className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[hsl(var(--slide-border)/0.4)] pt-[28px]">
            <div className="flex items-baseline gap-[16px] mb-[8px]">
              <span className="text-[44px] font-bold text-[hsl(var(--slide-gold))]">₪4,500</span>
              <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">за программу</span>
            </div>
            <div className="flex items-baseline gap-[16px]">
              <span className="text-[36px] font-bold text-[hsl(var(--slide-gold)/0.8)]">₪2,000</span>
              <span className="text-[20px] text-[hsl(var(--slide-text-muted))]">/ мес × 3</span>
            </div>
          </div>
        </div>
        <div className="flex-1 border border-[hsl(var(--slide-border))] rounded-[12px] p-[52px] bg-[hsl(var(--slide-bg-alt))]">
          <h3 className="text-[36px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">Консультация</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[36px]">Разовая сессия · 2 часа</p>
          <div className="space-y-[14px] mb-[40px]">
            {["Глубокое погружение в ваш вопрос или проект", "Ответы на основе моего опыта и экспертизы", "Конкретные рекомендации и следующие шаги", "Разбор бизнес-модели, стратегии или продукта"].map((item, i) => (
              <div key={i} className="flex items-start gap-[12px]">
                <span className="text-[hsl(var(--slide-text-muted))] mt-[2px]">✓</span>
                <span className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{item}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-[hsl(var(--slide-border)/0.4)] pt-[28px]">
            <span className="text-[44px] font-bold text-[hsl(var(--slide-text))]">₪1,200</span>
            <span className="text-[20px] text-[hsl(var(--slide-text-muted))]"> / сессия</span>
          </div>
        </div>
      </div>
    </div>
  );
}
