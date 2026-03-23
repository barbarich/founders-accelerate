import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide09GoodVsBad() {
  const examples = [
    {
      bad: '"Инновационная платформа для повышения эффективности команд"',
      good: '"Прорабы получают все фото, чаты и задачи по объекту в одном месте — без WhatsApp-хаоса"',
      why: "Результат: порядок. Без: хаос",
    },
    {
      bad: '"AI-решение для бизнес-аналитики нового поколения"',
      good: '"Владелец магазина получает отчёт по продажам за 30 секунд — без аналитика и Excel"',
      why: "Результат: отчёт за 30 сек. Без: аналитик",
    },
    {
      bad: '"Комплексная EdTech-платформа для корпоративного обучения"',
      good: '"Обученные сотрудники с первого рабочего дня — обучение за 5 минут вместо месяцев, результат на следующий день"',
      why: "Результат: обученный сотрудник. Без: месяцев ожидания",
    },
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Позиционирование</p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Процесс vs Результат
        </h2>
        <div className="space-y-[10px]">
          {examples.map((e, i) => (
            <div key={i} className="space-y-[4px]">
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[10px]">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium">❌ Плохо</span>
                <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mt-[4px] leading-[1.5]">{e.bad}</p>
              </div>
              <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] p-[10px]">
                <span className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">✅ Хорошо</span>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.9)] mt-[4px] leading-[1.5]">{e.good}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Позиционирование</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Процесс vs Результат</h2>
      <div className="space-y-[28px] max-w-[1100px]">
        {examples.map((e, i) => (
          <div key={i} className="flex gap-[24px]">
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px]">
              <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-medium">❌ Процесс</span>
              <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mt-[10px] leading-[1.5]">{e.bad}</p>
            </div>
            <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[24px]">
              <span className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium">✅ Результат</span>
              <p className="text-[19px] text-[hsl(var(--slide-text)/0.9)] mt-[10px] leading-[1.5]">{e.good}</p>
              <p className="text-[15px] text-[hsl(var(--slide-gold)/0.7)] mt-[8px] font-mono">{e.why}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
