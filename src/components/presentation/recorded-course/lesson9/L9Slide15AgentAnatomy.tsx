import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  {
    num: "1",
    name: "Характер",
    q: "Как себя ведёт",
    body: "Спорит или соглашается? Дотошный или быстрый? От этого зависит, будет он тебе поддакивать или защищать твой продукт от тебя же.",
  },
  {
    num: "2",
    name: "Опыт",
    q: "Кем он был",
    body: "«15 лет строил программы лояльности в ритейле и маркетплейсах». Это задаёт, какие решения он вообще считает нормальными, а какие - дилетантскими.",
  },
  {
    num: "3",
    name: "Правила",
    q: "Чего нельзя",
    body: "«Не предлагай механику без расчёта экономики». Правила ценнее задач: задача - это один раз, правило работает всегда.",
  },
  {
    num: "4",
    name: "Требования",
    q: "Что на выходе",
    body: "Документ? Презентация? Какие разделы обязательны? Без этого получишь текст вместо результата.",
  },
  {
    num: "5",
    name: "Коммуникация",
    q: "Как говорит с тобой",
    body: "Задаёт вопросы до начала работы или приносит готовое? Первое почти всегда лучше - как и с живым сотрудником.",
  },
];

export default function L9Slide15AgentAnatomy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Из чего собирается агент
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Пять элементов. <span className="text-[hsl(var(--slide-gold))]">Ровно те, что ты и так знаешь</span>.
        </h2>
        <div className="space-y-[6px] mb-[9px]">
          {parts.map((p) => (
            <div key={p.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">
                {p.num}. {p.name} <span className="text-[hsl(var(--slide-text-muted))] font-normal">· {p.q}</span>
              </p>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45] mt-[1px]">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Ты не пишешь задачу. Ты описываешь <span className="text-[hsl(var(--slide-gold))]">сотрудника, которого хотел бы нанять</span>. Задачи будешь давать потом.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Из чего собирается агент
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em] max-w-[1800px]">
        Пять элементов. <span className="text-[hsl(var(--slide-gold))]">Ровно те, что ты и так знаешь</span>.
      </h2>
      <div className="space-y-[11px] max-w-[1800px] mb-[22px]">
        {parts.map((p) => (
          <div key={p.num} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[24px] py-[12px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[20px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[36px] h-[36px] flex items-center justify-center rounded-full font-bold shrink-0">{p.num}</span>
            <div className="w-[300px] shrink-0">
              <p className="text-[23px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.name}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">{p.q}</p>
            </div>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45] flex-1">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Ты не пишешь задачу. Ты описываешь <span className="text-[hsl(var(--slide-gold))]">сотрудника, которого хотел бы нанять</span>. Задачи будешь давать потом.
        </p>
      </div>
    </div>
  );
}
