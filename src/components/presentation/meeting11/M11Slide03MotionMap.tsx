import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", name: "Кому продаём", goal: "портрет клиента", out: "описываем одного конкретного клиента, а не «всех подряд»" },
  { n: "2", name: "Список 50", goal: "150 живых имён", out: "берём 50 компаний и по 3 человека в каждой — это наш список на охоту" },
  { n: "3", name: "Как заходим", goal: "через повод", out: "пишем не «в холодную», а когда у клиента случилось что-то важное" },
  { n: "4", name: "Первый звонок", goal: "5 вопросов", out: "не продаём — слушаем. Узнаём, что у человека реально болит" },
  { n: "5", name: "Показ продукта", goal: "под его боль", out: "показываем не всё подряд, а решение именно той проблемы, что услышали" },
  { n: "6", name: "Закрытие", goal: "договор + дата", out: "уходим со встречи с конкретным следующим шагом, а не «я подумаю»" },
  { n: "7", name: "Рост через клиента", goal: "3 рекомендации", out: "из одной сделки получаем ещё 3 — клиент сам приводит новых" },
];

export default function M11Slide03MotionMap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Карта motion
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          7 шагов · <span className="text-[hsl(var(--slide-gold))]">от «никто не знает» до сделки</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Это путь, по которому клиент идёт от первого касания до покупки. Пропустить шаг нельзя — дальше всё посыпется.
        </p>
        <div className="space-y-[3px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{s.n}</span>
                <span className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{s.name}</span>
                <span className="text-[7.5px] text-[hsl(var(--slide-gold))]">· {s.goal}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{s.out}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Карта motion
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
        7 шагов · <span className="text-[hsl(var(--slide-gold))]">от «нас никто не знает» до первой сделки</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1700px] leading-[1.45]">
        Это путь, по которому клиент идёт от первого знакомства до покупки. Пропустить шаг нельзя: если плохо описали клиента — некому писать; если не услышали боль на звонке — нечего показывать; если не договорились о дате — сделка зависнет.
      </p>
      <div className="grid grid-cols-4 gap-[20px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <p className="font-display text-[48px] font-bold text-[hsl(var(--slide-gold))] leading-none mb-[8px]">{s.n}</p>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{s.name}</p>
            <p className="text-[16px] text-[hsl(var(--slide-gold))] mb-[10px]">{s.goal}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.out}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
