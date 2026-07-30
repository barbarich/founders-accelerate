import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "1",
    t: "50 компаний под портрет",
    d: "Не больше 50 — иначе потеряешь фокус и не дойдёшь ни до одной. Меньше — не хватит на месяц работы."
  },
  {
    n: "2",
    t: "По 3 человека в каждой",
    d: "Кто будет пользоваться, кто решает и кто платит. 50 × 3 = 150 имён. Один контакт в компании — это не контакт."
  },
  {
    n: "3",
    t: "Одна строка на компанию",
    d: "Колонки: компания / человек / насколько подходит от 1 до 10 / повод / стадия / следующий шаг / дата / сумма. Настройка — 5 минут."
  },
  {
    n: "4",
    t: "Три группы по приоритету",
    d: "Топ-10 — пишешь лично каждую неделю. Средние 20 — раз в месяц. Остальные 20 — раз в квартал. Без приоритетов список забудется целиком."
  },
  {
    n: "5",
    t: "+10 новых имён каждую неделю",
    d: "Вот это главное. Список составляют не один раз — его пополняют. Через месяц без пополнения половина ответила «нет», половина молчит, и работать не с кем."
  }
];

export default function L13Slide05Dream50() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Список целей
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Список не составляют один раз — <span className="text-[hsl(var(--slide-gold))]">его пополняют</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          150 имён — это твой план на 90 дней. Каждое выбрано осознанно: не случайная заявка и не купленная база.
        </p>
        <div className="space-y-[3px]">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`rounded-[4px] px-[6px] py-[3px] border ${s.n === "5" ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold)/0.4)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}
            >
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Список целей
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Список не составляют один раз — <span className="text-[hsl(var(--slide-gold))]">его пополняют</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        150 имён — это твой план продаж на 90 дней. Каждое выбрано осознанно: не случайная заявка с сайта и не купленная «холодная база».
      </p>
      <div className="space-y-[10px] max-w-[1700px]">
        {steps.map((s) => (
          <div
            key={s.n}
            className={`rounded-[10px] px-[24px] py-[12px] border ${s.n === "5" ? "bg-[hsl(var(--slide-gold)/0.1)] border-[hsl(var(--slide-gold)/0.4)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}
          >
            <div className="flex items-baseline gap-[14px] mb-[3px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] ml-[42px]">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
