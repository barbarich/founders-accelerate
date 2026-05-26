import { useIsMobile } from "@/hooks/use-mobile";

export default function L7Slide60SecRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Правило 60 секунд
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">
          Aha должен случиться <span className="text-[hsl(var(--slide-gold))]">в первую минуту</span>. Не в первый час.
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6] mb-[10px]">
          В 2026 пользователь даёт продукту <span className="text-[hsl(var(--slide-text))] font-medium">60 секунд внимания</span>. Не открывшая ценность за это время — потеря.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px] mb-[12px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-bold mb-[4px]">Цифра-удар</p>
          <p className="text-[11px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">77%</span> пользователей не возвращаются на 2-й день, если не нашли Aha в первой сессии.
          </p>
        </div>
        <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.6]">
          Это значит: <span className="text-[hsl(var(--slide-text))] font-medium">регистрация, длинный onboarding, пустой dashboard, «загружаем профиль...» — всё это убивает Aha</span>. Меньше friction → ближе Aha.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Правило 60 секунд
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em] max-w-[1700px]">
        Aha должен случиться <span className="text-[hsl(var(--slide-gold))]">в первую минуту</span>. Не в первый час.
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[28px]">
        В 2026 пользователь даёт продукту <span className="text-[hsl(var(--slide-text))] font-semibold">60 секунд внимания</span>. Не открывшая ценность за это время — потеря.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[22px] max-w-[1700px] mb-[28px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Цифра-удар</p>
        <p className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">77%</span> пользователей не возвращаются на 2-й день, если не нашли Aha в первой сессии.
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px]">
        Регистрация, длинный onboarding, пустой dashboard, «загружаем профиль...» — <span className="text-[hsl(var(--slide-text))] font-semibold">всё это убивает Aha</span>. Меньше friction → ближе Aha.
      </p>
    </div>
  );
}
