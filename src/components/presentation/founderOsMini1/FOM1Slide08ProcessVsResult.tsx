import FOM1SlideBase from "./FOM1SlideBase";

const pairs = [
  {
    bad: "«Инновационная платформа для повышения эффективности команд»",
    good: "«Прорабы получают все фото, чаты и задачи по объекту в одном месте — без WhatsApp-хаоса»",
    res: "порядок",
    no: "хаоса",
  },
  {
    bad: "«AI-решение для бизнес-аналитики нового поколения»",
    good: "«Владелец магазина получает отчёт по продажам за 30 секунд — без аналитика и Excel»",
    res: "отчёт за 30 сек",
    no: "аналитика",
  },
  {
    bad: "«Комплексная EdTech-платформа для корпоративного обучения»",
    good: "«Обученные сотрудники с первого рабочего дня — обучение за 5 минут вместо месяцев»",
    res: "обученный сотрудник",
    no: "месяцев ожидания",
  },
];

export default function FOM1Slide08ProcessVsResult() {
  return (
    <FOM1SlideBase
      slide={8}
      eyebrow="Процесс vs Результат"
      title="Процесс vs Результат"
      subtitle="Три примера — плохо / хорошо"
    >
      <div className="space-y-[10px] md:space-y-[16px] max-w-[1700px]">
        {pairs.map((p, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]"
          >
            <p className="text-[11px] md:text-[22px] leading-[1.5]">
              <span style={{ color: "hsl(0 70% 60%)" }}>❌ </span>
              <span className="text-[hsl(var(--slide-text-muted))]">Процесс: </span>
              <span className="text-[hsl(var(--slide-text))]">{p.bad}</span>
            </p>
            <p className="mt-[4px] md:mt-[8px] text-[11px] md:text-[22px] leading-[1.5]">
              <span style={{ color: "hsl(140 50% 55%)" }}>✅ </span>
              <span className="text-[hsl(var(--slide-text-muted))]">Результат: </span>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{p.good}</span>
            </p>
            <p className="mt-[4px] md:mt-[8px] text-[10px] md:text-[18px] text-[hsl(var(--slide-gold))]">
              Результат: {p.res}. Без: {p.no}
            </p>
          </div>
        ))}
      </div>
    </FOM1SlideBase>
  );
}
