import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "B2B-продажа — не один человек, а 3-5 ролей в компании",
    body: "End-user пользуется. Менеджер хочет результата. CFO смотрит на деньги. CEO утверждает. IT — на безопасность. Не понимаешь всех ролей — сделка умрёт на согласовании.",
  },
  {
    num: "2",
    title: "ICP точнее = конверсия выше",
    body: "50 идеально подобранных компаний дают больше сделок, чем 500 «вроде подходят». Сужай ICP до точки боли. Лучше отказать неподходящему, чем тратить недели на демо.",
  },
  {
    num: "3",
    title: "Multithreading — говори одновременно с несколькими ролями",
    body: "Один контакт = одна точка отказа. Если он уволится / уйдёт в отпуск — сделка стопится. Заводи знакомства с CFO + CEO параллельно с твоим основным контактом.",
  },
  {
    num: "4",
    title: "MAP (Mutual Action Plan) после демо закрывает 70% сделок",
    body: "PDF на 1 страницу: шаги, даты, ответственные. Согласовываешь с клиентом — становится контрактом обязательств. Без MAP — сделка плавает месяцами.",
  },
  {
    num: "5",
    title: "After-close важнее close — expansion = главный доход",
    body: "Новые клиенты дорогие. Существующие клиенты, которые расширяют usage — это где B2B-компании реально зарабатывают. Onboarding и QBR — твои главные инструменты.",
  },
];

export default function L14SlideLessonSummary() {
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
          Дальше — сузить ICP до 50 компаний и сделать MAP-шаблон до Урока 15.
        </p>
      </div>
    </div>
  );
}
