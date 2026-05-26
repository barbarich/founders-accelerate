import { useIsMobile } from "@/hooks/use-mobile";

export default function L0Slide08CourseMap() {
  const isMobile = useIsMobile();

  const months = [
    {
      label: "Месяц 1",
      title: "Валидация и фундамент",
      range: "Уроки 1–5",
      desc: "Тебе кажется идея гениальной. К концу месяца ты будешь знать наверняка.",
    },
    {
      label: "Месяц 2",
      title: "Построение продукта",
      range: "Уроки 6–10",
      desc: "Соберёшь рабочий продукт за вечер с Claude Code. Сделаешь так, чтобы пользователь не уходил.",
    },
    {
      label: "Месяц 3",
      title: "Запуск, продажи, рост",
      range: "Уроки 11–16",
      desc: "Метрики, маркетинг, Meta-реклама, B2B-продажи, fundraising, партнёрства. Путь к первым $10K MRR.",
    },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[40px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Что дальше
        </p>
        <h2 className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px] tracking-[-0.01em]">
          17 уроков
        </h2>
        <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[20px]">
          От идеи до первого платящего клиента.
        </p>
        <div className="space-y-[14px]">
          {months.map((m) => (
            <div key={m.label} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-md p-[14px]">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
                {m.label} · {m.range}
              </p>
              <p className="text-[14px] font-bold text-[hsl(var(--slide-text))] mb-[6px] leading-[1.2]">
                {m.title}
              </p>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Что дальше
      </p>
      <h2 className="font-display text-[68px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em]">
        17 уроков
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[48px] max-w-[1200px]">
        От идеи до первого платящего клиента.
      </p>
      <div className="grid grid-cols-3 gap-[28px] max-w-[1800px]">
        {months.map((m) => (
          <div
            key={m.label}
            className="border border-[hsl(var(--slide-gold)/0.25)] rounded-lg p-[32px] bg-[hsl(var(--slide-gold)/0.04)]"
          >
            <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
              {m.label} · {m.range}
            </p>
            <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] mb-[14px] leading-[1.2]">
              {m.title}
            </p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
