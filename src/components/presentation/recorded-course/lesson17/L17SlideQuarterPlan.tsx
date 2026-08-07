import { useIsMobile } from "@/hooks/use-mobile";

const months = [
  {
    n: "Месяц 1",
    t: "Доказать, что покупают",
    task: "Получить платящего. Или, если продукт ещё не готов, предоплату за то, чего пока нет.",
    gate: "Готов дальше: 40 касаний сделано, 10 разговоров записаны, есть 1 оплата или 3 предоплаты.",
    fail: "Если нет - ещё месяц на том же канале, но с переписанным сообщением.",
  },
  {
    n: "Месяц 2",
    t: "Повторить то же самое",
    task: "Повторить путь первого платящего 5-10 раз. Тот же канал, то же сообщение, больше объёма.",
    gate: "Готов дальше: 5 и больше оплат, по каждой понятно, откуда пришла. Второй канал ещё не трогал.",
    fail: "Если нет - канал слабый. Меняешь канал, продукт не трогаешь.",
  },
  {
    n: "Месяц 3",
    t: "Посчитать и решить, куда лить",
    task: "Посчитать CAC, LTV и payback по каждому каналу и оставить один - тот, где деньги.",
    gate: "Итог квартала: один канал оставлен, CAC и payback посчитаны, план на следующий квартал на одну страницу.",
    fail: "Если цифры не сходятся - возвращаешься к цене и аудитории, к урокам 3 и 10.",
  },
];

export default function L17SlideQuarterPlan() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Следующие 90 дней
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Три месяца - три разные задачи
        </h2>
        <div className="space-y-[5px]">
          {months.map((m) => (
            <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
                <span className="text-[hsl(var(--slide-gold))]">{m.n} · </span>{m.t}
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{m.task}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-gold))] leading-[1.35] mt-[1px]">{m.gate}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{m.fail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Следующие 90 дней
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Три месяца - <span className="text-[hsl(var(--slide-gold))]">три разные задачи</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1500px]">
        Не переходи к следующему месяцу, пока не выполнено условие перехода. Иначе разгонишь то, что не работает.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1600px]">
        {months.map((m) => (
          <div key={m.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[18px] flex flex-col">
            <p className="text-[14px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">{m.n}</p>
            <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">{m.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]">{m.task}</p>
            <p className="text-[16px] text-[hsl(var(--slide-gold))] leading-[1.45] mb-[8px]">{m.gate}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-auto">{m.fail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
