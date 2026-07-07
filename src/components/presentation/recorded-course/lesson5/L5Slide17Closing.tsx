import { useIsMobile } from "@/hooks/use-mobile";

export default function L5Slide17Closing() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[28px]">
          <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[12px]">
            Месяц 1 пройден.
          </h2>
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[16px]">
            У вас есть продукт, лендинг и первые пользователи.<br />
            Теперь — масштабируем.
          </p>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[16px] py-[10px] mb-[12px] text-left">
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-text))] font-semibold">На этой неделе:</span> первые продажи через 3F, пост-история, показать продукт 10 людям, список 50 мест.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.15)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[16px] py-[10px] mb-[14px]">
            <p className="text-[13px] text-[hsl(var(--slide-text))] font-bold">
              Месяц 2 = Построение продукта
            </p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[4px]">
              UX, onboarding, упаковка, контент, личный бренд
            </p>
          </div>
          <p className="text-[12px] text-[hsl(var(--slide-gold))] font-medium">
            Вы уже не те, кто пришёл 4 недели назад.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center max-w-[1000px]">
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
          Месяц 1 пройден.
        </h2>
        <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.6] mb-[48px]">
          У вас есть продукт, лендинг и первые пользователи.<br />
          Теперь — масштабируем.
        </p>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[48px] py-[28px] mb-[32px] inline-block text-left">
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            <span className="text-[hsl(var(--slide-text))] font-semibold">На этой неделе:</span> продажи через 3F + окружение, пост-история,<br />
            показать продукт 10 новым людям, список 50 мест.
          </p>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[48px] py-[28px] mb-[40px] inline-block">
          <p className="text-[32px] text-[hsl(var(--slide-text))] font-bold leading-[1.3]">
            Месяц 2 = Построение продукта
          </p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mt-[8px]">
            UX, onboarding, упаковка, контент, личный бренд
          </p>
        </div>

        <p className="text-[26px] text-[hsl(var(--slide-gold))] font-semibold">
          Вы уже не те, кто пришёл 4 недели назад.
        </p>
      </div>
    </div>
  );
}
