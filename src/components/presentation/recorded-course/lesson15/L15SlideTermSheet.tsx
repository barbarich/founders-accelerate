import { useIsMobile } from "@/hooks/use-mobile";

const instruments = [
  {
    t: "SAFE (Simple Agreement for Future Equity)",
    when: "Pre-seed, friends&family, angel rounds. До $1M",
    pros: "Простой документ от Y Combinator (5 страниц). Без оценки сейчас — оценка отложена до следующего раунда. Cap $5-10M типично для соло-фаундера.",
  },
  {
    t: "Convertible Note",
    when: "Раньше был основой, сейчас SAFE замещает в US. В RU/EU всё ещё актуален",
    pros: "Долг, который конвертится в equity на следующем раунде. Имеет процент (5-8%) и срок. Сложнее SAFE но привычнее EU/RU инвесторам.",
  },
  {
    t: "Priced round (Series Seed / A)",
    when: "$1M+, есть traction. Lead investor оценивает компанию",
    pros: "Полноценный раунд: оценка фиксируется, equity конкретный %, term sheet 20-30 страниц. Нужен юрист и больше времени.",
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
        <div className="space-y-[8px]">
          {instruments.map((i) => (
            <div key={i.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{i.t}</p>
              <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">{i.when}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{i.pros}</p>
            </div>
          ))}
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
      <div className="grid grid-cols-3 gap-[24px] max-w-[1900px]">
        {instruments.map((i) => (
          <div key={i.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[10px] leading-[1.2]">{i.t}</p>
            <p className="text-[14px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">{i.when}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{i.pros}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
