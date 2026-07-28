import { useIsMobile } from "@/hooks/use-mobile";

const mistakes = [
  { bad: "Считать регистрации", good: "Считай только платящих. 100 регистраций и 5 оплат - дели расходы на 5, не на 100." },
  { bad: "Считать только рекламный бюджет", good: "Включай всё: инструменты (Apollo, Instantly, генерация креативов), подрядчиков, комиссии." },
  { bad: "«Контент - бесплатный канал»", good: "12 часов твоего времени в неделю - не ноль. Оцени свой час и включи в расчёт." },
  { bad: "Один общий CAC на всё", good: "Считай по каждому каналу отдельно. Blended CAC скрывает, что один канал прибыльный, а другой сжигает деньги." },
];

export default function L14Slide05CAC() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Число 1 · CAC</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          CAC: сколько стоит клиент - <span className="text-[hsl(var(--slide-gold))]">если считать честно</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[7px] px-[11px] py-[7px] mb-[8px]">
          <p className="text-[10px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
            CAC = (реклама + инструменты + подрядчики + твоё время) / новые <span className="text-[hsl(var(--slide-gold))] font-bold">платящие</span> клиенты
          </p>
        </div>
        <div className="space-y-[5px] mb-[8px]">
          {mistakes.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">✕ {m.bad}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">→ {m.good}</p>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Пример: Meta ads $600 + креативы $50 + 5 часов твоей работы ($250) = $900. Пришло 10 платящих. CAC = $90, а не $60.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Число 1 · CAC</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        CAC: сколько стоит клиент - <span className="text-[hsl(var(--slide-gold))]">если считать честно</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[28px] py-[16px] mb-[20px] max-w-[1650px]">
        <p className="text-[24px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
          CAC = (реклама + инструменты + подрядчики + твоё время) / новые <span className="text-[hsl(var(--slide-gold))] font-bold">платящие</span> клиенты
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[14px] mb-[20px] max-w-[1650px]">
        {mistakes.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[22px] py-[14px]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">✕ {m.bad}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">→ {m.good}</p>
          </div>
        ))}
      </div>
      <p className="text-[21px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1650px]">
        Пример: Meta ads $600 + креативы $50 + 5 часов твоей работы ($250) = $900. Пришло 10 платящих. CAC = $90, а не $60.
      </p>
    </div>
  );
}
