import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Продаётся результат, а не продукт",
    body: "Формула: [Кто] получает [измеримый результат] через [твой продукт], в отличие от [старого способа]. Клиент не покупает функционал — он покупает то, что ты ему доставляешь.",
  },
  {
    num: "2",
    title: "Цена — это ощущение, а не себестоимость",
    body: "Якорь (дорогой план делает средний выгодным), правило трёх (good/better/best), магия девятки ($29 ≠ $30). Это работа с восприятием, не с математикой.",
  },
  {
    num: "3",
    title: "B2B и B2C — разные правила цены",
    body: "B2B: 1-10% от результата, который ты доставляешь. Сэкономил $1М в год → бери $50-100К. B2C: 20-50× дешевле альтернативы. Если боль решается за $500 → твоя цена $10-25.",
  },
  {
    num: "4",
    title: "MVP — одна проблема для одного клиента",
    body: "3-4 фичи максимум. Если не можешь убрать — MVP слишком большой. Маленький MVP быстро показывает ошибки и экономит деньги.",
  },
  {
    num: "5",
    title: "Клиент «нанимает» твой продукт сделать работу (JTBD)",
    body: "Спроси не «какие фичи нужны?», а «что ты хочешь чтобы продукт за тебя сделал?». Ответ покажет реальную ценность, а не список функционала.",
  },
];

export default function L3SlideLessonSummary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Что унести из этого урока
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
        </h2>
        <div className="space-y-[3px]">
          {insights.map((i) => (
            <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-start gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{i.num}</span>
                <div>
                  <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{i.title}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{i.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Что унести из этого урока
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px]">
        Саммари · <span className="text-[hsl(var(--slide-gold))]">5 главных мыслей</span>
      </h2>

      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px]">
        {insights.map((i) => (
          <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[16px] flex flex-col">
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[10px]">{i.num}</span>
            <p className="text-[16.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{i.title}</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{i.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[20px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Дальше — конкретные действия чтобы упаковать позиционирование, цену и MVP до следующего урока.
        </p>
      </div>
    </div>
  );
}
