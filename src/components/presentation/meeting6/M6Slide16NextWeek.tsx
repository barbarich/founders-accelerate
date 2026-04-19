import { useIsMobile } from "@/hooks/use-mobile";

export default function M6Slide16NextWeek() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Следующая встреча
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Неделя 7:<br />Онбординг, UI/UX, путь к Aha
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[12px] py-[10px] mb-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5]">
            На M6 собрали каркас + первый флоу. На M7 — делаем его лёгким и доводим до Aha. Весь путь продукта от входа до результата.
          </p>
          <div className="space-y-[4px] mt-[6px]">
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Онбординг и UI/UX в деталях</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Что превращает первый результат в Aha</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Friction audit по всему флоу юзера</p>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))]">→ Полный путь: вход → onboarding → Aha → возврат</p>
          </div>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Приходишь с данными от живых юзеров. Без данных — работаем на теории.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Следующая встреча
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Неделя 7: Онбординг, UI/UX, путь к Aha
      </h2>

      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[16px] px-[36px] py-[28px] max-w-[1300px] mb-[24px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] leading-[1.5] mb-[18px]">
          На M6 собрали каркас + первый флоу. На M7 делаем его лёгким и доводим до Aha — работаем с полным путём продукта от входа к результату.
        </p>
        <div className="space-y-[10px]">
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Онбординг и UI/UX в деталях — micro-interactions, progressive disclosure, empty states</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Что превращает первый результат в Aha — признание ценности, связь с целью</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Friction audit на всём флоу — 5 типов трения, как находить и убирать</p>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ Полный путь юзера: вход → onboarding → Aha → возврат</p>
        </div>
      </div>

      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1300px]">
        Приходишь с данными от живых юзеров. Без данных — работаем на теории.
      </p>
    </div>
  );
}
