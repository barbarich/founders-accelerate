import { useIsMobile } from "@/hooks/use-mobile";

const tasks = [
  {
    n: "1",
    t: "Заведи таблицу",
    d: "Колонки: компания / человек / стадия / следующий шаг / дата / сумма. Google Sheets подойдёт. 10 минут.",
  },
  {
    n: "2",
    t: "20 имён по портрету клиента",
    d: "Из них 10 — новые, добавленные на этой неделе. Не «вообще подходящие», а по семи вопросам портрета.",
  },
  {
    n: "3",
    t: "Посчитай назад",
    d: "Цель месяца в деньгах → сколько нужно сделок → встреч → сообщений в день. Запиши три эти цифры прямо в таблицу.",
  },
  {
    n: "4",
    t: "Поставь дату пяти сделкам",
    d: "У пяти сделок — конкретная дата следующего шага. Нет даты — напиши человеку и назначь. Сегодня, не «на неделе».",
  },
  {
    n: "5",
    t: "Автоматизируй один шаг",
    d: "Что-то одно: запись звонка с заметками или черновик письма-резюме. Один шаг, не весь стек.",
  },
];

export default function L13SlideHomeworkPipeline() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Домашнее задание на неделю
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Твоя таблица сделок · <span className="text-[hsl(var(--slide-gold))]">5 шагов</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Не конспект и не план «когда-нибудь». К концу недели у тебя должен быть работающий инструмент, в который ты смотришь каждый день.
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {tasks.map((x) => (
            <div key={x.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{x.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{x.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{x.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            На следующей встрече называешь три цифры: сколько имён, сколько встреч на этой неделе, сколько сделок без даты.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Домашнее задание на неделю
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em]">
        Твоя таблица сделок · <span className="text-[hsl(var(--slide-gold))]">5 шагов</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1700px] leading-[1.45]">
        Не конспект и не план «когда-нибудь». К концу недели у тебя должен быть работающий инструмент, в который ты смотришь каждый день.
      </p>
      <div className="space-y-[10px] max-w-[1700px] mb-[18px]">
        {tasks.map((x) => (
          <div key={x.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[12px]">
            <div className="flex items-baseline gap-[14px] mb-[2px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{x.n}</span>
              <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{x.t}</span>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[42px]">{x.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          На следующей встрече называешь три цифры: сколько имён в таблице, сколько встреч провёл на этой неделе, сколько сделок без даты следующего шага.
        </p>
      </div>
    </div>
  );
}
