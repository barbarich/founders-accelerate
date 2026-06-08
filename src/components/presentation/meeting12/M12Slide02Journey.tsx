import { useIsMobile } from "@/hooks/use-mobile";

const phases = [
  {
    m: "Месяц 1",
    name: "Валидация",
    from: "Идея, которая «кому-то может зайти»",
    to: "Понятный клиент · позиционирование · цена · лендинг",
  },
  {
    m: "Месяц 2",
    name: "Продукт",
    from: "Сырой прототип, из которого уходят",
    to: "Рабочий MVP · onboarding · упаковка · первый контент",
  },
  {
    m: "Месяц 3",
    name: "Запуск и продажи",
    from: "О продукте не знает никто",
    to: "Реклама · холодные продажи · первые платящие",
  },
];

export default function M12Slide02Journey() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Путь · 12 недель за 2 минуты
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[10px]">
          12 недель назад у многих была <span className="text-[hsl(var(--slide-gold))]">только идея</span>
        </h2>
        <div className="space-y-[6px]">
          {phases.map((p) => (
            <div key={p.m} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">{p.m} · {p.name}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] line-through opacity-70">{p.from}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.4]">→ {p.to}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] mt-[8px]">
          Сегодня ты не «человек с идеей». Ты фаундер с продуктом, клиентами и навыком его продавать.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Путь · 12 недель за 2 минуты
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px] tracking-[-0.02em] max-w-[1600px]">
        12 недель назад у многих была <span className="text-[hsl(var(--slide-gold))]">только идея</span>
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1700px] mb-[28px]">
        {phases.map((p) => (
          <div key={p.m} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[16px]">{p.m} · {p.name}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4] line-through opacity-60 mb-[10px]">{p.from}</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4] font-medium">
              <span className="text-[hsl(var(--slide-gold))] mr-[8px]">→</span>{p.to}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[26px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1600px]">
        Сегодня ты не «человек с идеей». Ты фаундер с продуктом, клиентами и навыком его продавать. Это и празднуем.
      </p>
    </div>
  );
}
