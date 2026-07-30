import { useIsMobile } from "@/hooks/use-mobile";

const roles = [
  {
    name: "Пользователь",
    who: "Тот, кому больно каждый день. Ему твой продукт нужен по-настоящему.",
    todo: "Подружись. Дай ему выглядеть героем внутри его компании: цифры, слайд, запись демо — всё, чем он будет продавать тебя без тебя.",
  },
  {
    name: "Руководитель",
    who: "Его начальник. Ему нужен результат отдела, а не удобная кнопка.",
    todo: "Подключай к показу. Говори про результат в часах и деньгах, не про функции. Лучше, если тебя представит пользователь, а не ты сам.",
  },
  {
    name: "Тот, кто платит",
    who: "Финансы или собственник. Смотрит только на деньги и риск.",
    todo: "Подключаешь ближе к решению. Готовь одну фразу: за сколько месяцев это окупится и из какого бюджета берётся.",
  },
  {
    name: "Тот, кто может заблокировать",
    who: "Юристы, безопасность, закупки. Они не покупают — но могут остановить.",
    todo: "Узнай о них на первом звонке. Заранее пришли договор, ответ про данные, реквизиты. Не дай им появиться сюрпризом на четвёртой неделе.",
  },
];

const stats = [
  { n: "3+", l: "человека влияют на решение в обычной сделке между компаниями" },
  { n: "≈ 50%", l: "сделок умирают из-за того, кто появился в конце и сказал «нет»" },
  { n: "1", l: "контакт в компании = одна точка отказа: отпуск, увольнение, смена приоритетов" },
];

export default function L13SlideRoles() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Кто участвует в решении
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          4 человека, без которых <span className="text-[hsl(var(--slide-gold))]">сделка не подпишется</span>
        </h2>
        <div className="grid grid-cols-3 gap-[3px] mb-[6px]">
          {stats.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[3px]">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[2px]">{s.n}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[3px] mb-[6px]">
          {roles.map((r) => (
            <div key={r.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{r.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.35]">{r.who}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">→ {r.todo}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Вопрос на первом же звонке: «Кто ещё, кроме вас, будет участвовать в решении?» Не в конце. В начале.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Кто участвует в решении
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        4 человека, без которых <span className="text-[hsl(var(--slide-gold))]">сделка не подпишется</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px] mb-[20px]">
        {stats.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[14px]">
            <p className="font-display text-[38px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[6px]">{s.n}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.l}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] max-w-[1700px] mb-[18px]">
        {roles.map((r) => (
          <div key={r.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[14px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{r.name}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[4px]">{r.who}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">→ {r.todo}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Вопрос на первом же звонке: «Кто ещё, кроме вас, будет участвовать в решении?» Не в конце сделки. В начале.
        </p>
      </div>
    </div>
  );
}
