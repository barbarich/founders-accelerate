import { useIsMobile } from "@/hooks/use-mobile";

const points = [
  {
    d: "День 30",
    items: [
      "Список «что на руках» закрыт",
      "40 касаний сделано",
      "10 разговоров записаны в таблицу",
      "1 оплата или 3 подтверждения «заплатил бы»",
    ],
  },
  {
    d: "День 60",
    items: [
      "5 и больше оплат",
      "Понятно, откуда пришла каждая",
      "Сообщение переписано минимум один раз - по реальным ответам",
      "Второй канал ещё не трогал",
    ],
  },
  {
    d: "День 90",
    items: [
      "Один канал оставлен, остальные закрыты",
      "CAC и payback посчитаны",
      "Есть план на следующий квартал на одну страницу",
      "Ты знаешь, что повторять на автомате",
    ],
  },
];

export default function L17SlideMilestones() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Чек-точки
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Что должно быть правдой на 30, 60 и 90 день
        </h2>
        <div className="space-y-[5px]">
          {points.map((p) => (
            <div key={p.d} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{p.d}</p>
              <ul className="mt-[1px] space-y-[1px]">
                {p.items.map((it) => (
                  <li key={it} className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] pl-[7px] relative">
                    <span className="absolute left-0 text-[hsl(var(--slide-gold))]">·</span>{it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] mt-[7px]">
          Это не обещание результата. Это планка, по которой ты сам поймёшь: идёшь ты или стоишь.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Чек-точки
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.01em]">
        Что должно быть правдой <span className="text-[hsl(var(--slide-gold))]">на 30, 60 и 90 день</span>
      </h2>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1550px]">
        {points.map((p) => (
          <div key={p.d} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1] mb-[12px]">{p.d}</p>
            <ul className="space-y-[8px]">
              {p.items.map((it) => (
                <li key={it} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4] pl-[16px] relative">
                  <span className="absolute left-0 text-[hsl(var(--slide-gold))]">·</span>{it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.45] mt-[22px] max-w-[1550px]">
        Это не обещание результата. Это планка, по которой ты сам поймёшь: идёшь ты или стоишь.
      </p>
    </div>
  );
}
