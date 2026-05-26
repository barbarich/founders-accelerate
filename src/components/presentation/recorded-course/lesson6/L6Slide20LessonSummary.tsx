import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Claude — твоя команда, а не помощник",
    body: "Помощник делает по запросу. Команда понимает контекст и работает сама. Разница — в файле CLAUDE.md, в скиллах и в MCP.",
  },
  {
    num: "2",
    title: "Файл CLAUDE.md — основа всего",
    body: "Один текстовый файл, который Claude читает каждый раз. В нём твои правила, твой стек, твои запреты. Без него — каждая сессия с нуля.",
  },
  {
    num: "3",
    title: "MCP подключает Claude к твоим сервисам",
    body: "Stripe, Supabase, GitHub, Sentry. Claude перестаёт быть «программой в окне» и становится частью твоего рабочего процесса.",
  },
  {
    num: "4",
    title: "Сначала план, потом код",
    body: "Plan Mode + вторая модель для ревью = ловишь баги до того, как они появились. 12 минут на проверку = часы сэкономленных переделок.",
  },
  {
    num: "5",
    title: "Прод нужно видеть, не только запустить",
    body: "Sentry + чек-лист перед запуском. Юзеры не пишут «у меня белый экран» — они просто уходят. Чтобы их удержать, нужно видеть что у них происходит.",
  },
];

export default function L6Slide20LessonSummary() {
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
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[3px] mt-[3px]">
          <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4] italic">
            На следующем слайде — 5 простых действий чтобы освоить навыки.
          </p>
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
          Эти 5 мыслей — фундамент работы с Claude. На следующем слайде — конкретный чек-лист из 5 действий, чтобы освоить каждый из 6 навыков.
        </p>
      </div>
    </div>
  );
}
