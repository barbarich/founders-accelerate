import { useIsMobile } from "@/hooks/use-mobile";

const instruments = [
  {
    t: "SAFE",
    when: "Первые деньги — друзья, ангелы, pre-seed",
    pros: "Самый простой вариант: подписал за неделю, оценку компании отложили на потом. Стандарт от Y Combinator — им закрывается большинство ранних раундов у соло-фаундеров.",
  },
  {
    t: "Convertible Note",
    when: "Та же ранняя стадия, но инвестор просит договор с процентом",
    pros: "Похож на SAFE, только формально это долг — есть процент и срок, которые превращаются в долю на следующем раунде. В Европе и России инвесторы просят его чаще, чем SAFE.",
  },
  {
    t: "Priced round",
    when: "Есть traction и сумма от $1M",
    pros: "Полноценный раунд: сейчас же фиксируете, сколько стоит компания и какая доля уходит инвестору. Нужны юрист и несколько месяцев на переговоры.",
  },
];

export default function L15SlideTermSheet() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Term sheet basics
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          3 инструмента инвестирования
        </h2>
        <div className="space-y-[8px] mb-[8px]">
          {instruments.map((i) => (
            <div key={i.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{i.t}</p>
              <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">{i.when}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{i.pros}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Цифры по cap, проценту и срокам для каждого инструмента — в дополнительных материалах урока.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Term sheet basics
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        3 инструмента инвестирования
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1900px] mb-[24px]">
        {instruments.map((i) => (
          <div key={i.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[10px] leading-[1.2]">{i.t}</p>
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">{i.when}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{i.pros}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[16px] max-w-[1900px]">
        <p className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
          Цифры по cap, проценту и срокам для каждого инструмента — в дополнительных материалах урока.
        </p>
      </div>
    </div>
  );
}
