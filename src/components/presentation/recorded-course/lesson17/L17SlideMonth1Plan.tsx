import { useIsMobile } from "@/hooks/use-mobile";

const weeks = [
  {
    n: "1",
    t: "Закрыть дыры",
    items: [
      "Пройди список «что на руках» и отметь, чего нет",
      "Почини одно самое дорогое: цену, кнопку оплаты или первый экран",
      "Выбери один канал из урока 16 и собери список на 10 имён",
    ],
  },
  {
    n: "2",
    t: "Выйти к людям",
    items: [
      "10 адресных касаний: письма, комментарии, разговоры",
      "3 живых разговора с людьми из твоей аудитории",
      "Записывай ответы в одну таблицу, а не в голову",
    ],
  },
  {
    n: "3",
    t: "Повторить и усилить",
    items: [
      "Ещё 10 касаний тем же способом, без переделок",
      "Поменяй одну переменную: тему письма или первый экран",
      "Доведи до конца одну сделку: попроси решение с датой",
    ],
  },
  {
    n: "4",
    t: "Посчитать и решить",
    items: [
      "Посчитай цепочку: касания - ответы - разговоры - оплаты",
      "Реши по цифрам: канал остаётся или меняется",
      "Запиши план на следующий месяц на одну страницу",
    ],
  },
];

export default function L17SlideMonth1Plan() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Пошаговый план
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          30 дней по неделям
        </h2>
        <div className="space-y-[4px]">
          {weeks.map((w) => (
            <div key={w.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">Неделя {w.n} · </span>{w.t}
              </p>
              <ul className="mt-[1px] space-y-[1px]">
                {w.items.map((it) => (
                  <li key={it} className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] pl-[7px] relative">
                    <span className="absolute left-0 text-[hsl(var(--slide-gold))]">·</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Пошаговый план
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        30 дней <span className="text-[hsl(var(--slide-gold))]">по неделям</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1500px]">
        Один и тот же каркас для всех трёх точек. Меняется только то, кому ты пишешь и что просишь.
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1550px]">
        {weeks.map((w) => (
          <div key={w.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">
              <span className="text-[hsl(var(--slide-gold))]">Неделя {w.n} · </span>{w.t}
            </p>
            <ul className="space-y-[5px]">
              {w.items.map((it) => (
                <li key={it} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] pl-[16px] relative">
                  <span className="absolute left-0 text-[hsl(var(--slide-gold))]">·</span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
