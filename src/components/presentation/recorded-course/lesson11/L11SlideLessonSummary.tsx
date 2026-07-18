import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Упаковка решает — не продукт",
    body: "Хороший продукт без упаковки проигрывает слабому в красивой коробке. Notion, Calendly, Liquid Death выиграли упаковкой, а не технологией.",
  },
  {
    num: "2",
    title: "Пять шагов упаковки — одна линия",
    body: "Позиционирование → история → визуал → креативы → воронка. Все пять готовишь ДО первого рубля на рекламу. Слабое звено рушит остальные.",
  },
  {
    num: "3",
    title: "Визуал и креативы на AI — за вечер",
    body: "Canva, Higgsfield, HeyGen, Memes = маленький отдел маркетинга. Не один «идеальный» креатив, а 20-30 вариантов — объём выбирает алгоритм.",
  },
  {
    num: "4",
    title: "Воронки бывают разные — выбери свою",
    body: "Вейтлист, лид-магнит, free trial, VSL, вебинар, заявка-звонок. Тип воронки зависит от продукта и чека. Собери путь клик → оплата и пройди его сам.",
  },
  {
    num: "5",
    title: "Не сжигай деньги — реклама усиливает готовое",
    body: "Реклама не чинит сырое, она множит то, что есть. Шесть галочек готовности закрыты — только тогда тратишь бюджет. Сам запуск — в уроке 12.",
  },
];

export default function L11SlideLessonSummary() {
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
          Дальше — выбрать B2B или B2C путь и сделать первую креатив-матрицу.
        </p>
      </div>
    </div>
  );
}
