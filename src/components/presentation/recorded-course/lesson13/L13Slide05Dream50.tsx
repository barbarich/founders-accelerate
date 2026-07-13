import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "1",
    t: "Найди 50 компаний, которые идеально подходят",
    d: "Возьми 7 фильтров из прошлого слайда (размер, бюджет, боль и т.д.). Не больше 50 — иначе потеряешь фокус и не дойдёшь ни до одной."
  },
  {
    n: "2",
    t: "Найди «горячий» повод для разговора",
    d: "Компания нанимает людей, получила инвестиции, сменила руководителя или технологию. С таким поводом писать в 3 раза легче — есть что сказать."
  },
  {
    n: "3",
    t: "Найди 3 нужных человека в каждой компании",
    d: "Кто будет пользоваться твоим продуктом, кто принимает решение и кто платит. 50 компаний × 3 человека = 150 имён — это твой стартовый список."
  },
  {
    n: "4",
    t: "Заведи простую таблицу — одна строка на компанию",
    d: "Колонки: компания / насколько подходит (от 1 до 10) / повод / контакты / когда писал / что делать дальше / статус. 5 минут на настройку."
  },
  {
    n: "5",
    t: "Раздели список на 3 группы по приоритету",
    d: "Топ-10 — пишешь лично каждую неделю. Средние 20 — раз в месяц. Остальные 20 — раз в квартал. Без приоритетов все записи забудутся."
  }
];

export default function L13Slide05Dream50() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Dream 50 · твой список целей
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          50 компаний × 3 человека = <span className="text-[hsl(var(--slide-gold))]">150 имён за 2 часа</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Это весь твой план продаж на 90 дней. Каждое имя выбрано осознанно — не случайная заявка с сайта и не купленная «холодная база».
        </p>
        <div className="space-y-[3px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
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
        Dream 50 · твой список целей
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        50 компаний × 3 человека = <span className="text-[hsl(var(--slide-gold))]">150 имён за 2 часа</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Это весь твой план продаж на 90 дней. Каждое имя выбрано осознанно — не случайная заявка с сайта и не купленная «холодная база».
      </p>
      <div className="space-y-[10px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[12px]">
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

