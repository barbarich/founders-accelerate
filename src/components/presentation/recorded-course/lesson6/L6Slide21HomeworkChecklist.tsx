import { useIsMobile } from "@/hooks/use-mobile";

const actions = [
  {
    num: "1",
    title: "Создай свой CLAUDE.md",
    body: "Возьми промпт со слайда 7, замени всё в скобках под себя и дай его Claude. Он сам создаст CLAUDE.md и положит в корень проекта.",
    result: "Файл CLAUDE.md ~50 строк, под твой продукт",
    skill: "Навык 1",
  },
  {
    num: "2",
    title: "Включи 10 скиллов в настройках",
    body: "Зайди в claude.ai → Settings → Skills. Включи все 10. Это занимает 2 минуты.",
    result: "Скриншот включённых скиллов",
    skill: "Навык 1",
  },
  {
    num: "3",
    title: "Попробуй Plan Mode на реальной задаче",
    body: "Возьми любую задачу из бэклога. Нажми Shift+Tab. Дай Claude задачу. Прочитай план. Поправь если нужно.",
    result: "Скриншот плана + список того, что поправил",
    skill: "Навык 2",
  },
  {
    num: "4",
    title: "Подключи Stripe или Supabase через MCP",
    body: "Выбери один из двух — что тебе нужнее. Используй промпт из слайда 12 или 13. Подключи и сделай первую задачу.",
    result: "Готовая ссылка на оплату ИЛИ работающая база с защитой данных",
    skill: "Навыки 3-4",
  },
  {
    num: "5",
    title: "Прогон по чек-листу перед запуском",
    body: "Скопируй чек-лист из слайда 21. Отдай Claude. Получи отчёт «что готово, что забыл». Почини самое критичное.",
    result: "Список с галочками + закрытые критические пункты",
    skill: "Навык 6",
  },
];

export default function L6Slide21HomeworkChecklist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Домашка · 5 действий
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Что сделать прямо сейчас
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          5 действий по 10-30 минут каждое. Каждое = один из 6 навыков урока.
        </p>
        <div className="space-y-[2px] overflow-y-auto" style={{ maxHeight: "70%" }}>
          {actions.map((a) => (
            <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[2px]">
              <div className="flex items-center gap-[3px] mb-[1px]">
                <span className="font-mono text-[6.5px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[11px] h-[11px] flex items-center justify-center rounded-full font-bold">{a.num}</span>
                <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{a.title}</p>
                <span className="text-[5.5px] text-[hsl(var(--slide-gold)/0.7)] ml-auto">· {a.skill}</span>
              </div>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{a.body}</p>
              <p className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.3]">→ {a.result}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[4px] px-[7px] py-[4px] mt-[5px]">
          <p className="text-[6.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">Результат:</span> ~2 часа работы → 6 новых навыков, готовый production-stack для следующих фич.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Домашка · 5 действий
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Что сделать <span className="text-[hsl(var(--slide-gold))]">прямо сейчас</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[14px] max-w-[1500px] leading-[1.45]">
        5 действий по 10-30 минут каждое. Каждое = один из 6 навыков урока.
      </p>

      <div className="max-w-[1200px]">
        <div className="grid grid-cols-1 gap-[8px]">
          {actions.map((a) => (
            <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[8px]">
              <div className="flex items-baseline gap-[8px] mb-[3px]">
                <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[22px] h-[22px] flex items-center justify-center rounded-full font-bold shrink-0">{a.num}</span>
                <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] flex-1">{a.title}</p>
                <span className="text-[11px] text-[hsl(var(--slide-gold)/0.7)] italic">{a.skill}</span>
              </div>
              <p className="text-[12.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] pl-[30px] mb-[3px]">{a.body}</p>
              <p className="text-[11px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] pl-[30px]">→ {a.result}</p>
            </div>
          ))}
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[12px] mt-[12px]">
          <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.5]">
            <span className="text-[hsl(var(--slide-gold))] font-bold">Результат:</span> ~2 часа работы → 6 новых навыков, готовый production-stack для следующих фич.
          </p>
        </div>
      </div>
    </div>
  );
}
