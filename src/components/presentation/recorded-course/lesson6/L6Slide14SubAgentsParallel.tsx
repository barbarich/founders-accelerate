import { useIsMobile } from "@/hooks/use-mobile";

const agents = [
  {
    name: "Explore",
    role: "Поиск в кодбейсе",
    use: "Где определена функция X? Где используется паттерн Y? Кто импортирует Z? Возвращает структуру + цитаты.",
  },
  {
    name: "Plan",
    role: "Архитектор",
    use: "Проектирует implementation план. Список шагов, файлов, зависимостей. Не пишет код — только дизайн.",
  },
  {
    name: "general-purpose",
    role: "Универсал",
    use: "Многошаговые задачи, ресерч, batch-обработка. Когда нужен агент с полным набором инструментов.",
  },
  {
    name: "engineering:debug",
    role: "Отладчик",
    use: "Reproduce → isolate → diagnose → fix. Структурированная отладка одного бага со всем контекстом.",
  },
];

const parallelExamples = [
  {
    title: "Параллельный ресерч",
    body: "3 агента Explore одновременно: один ищет auth flow, второй — биллинг, третий — analytics. Получаешь 3 ответа за время одного.",
  },
  {
    title: "Background long-running",
    body: "Запусти агента в фоне через run_in_background. Пока он гоняет 50 тестов, ты в основном чате правишь компоненты.",
  },
  {
    title: "Chain: Plan → Code",
    body: "Plan-агент проектирует, передаёшь результат в general-purpose для реализации. Контексты не путаются.",
  },
];

export default function L6Slide14SubAgentsParallel() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Sub-agents + parallel orchestration
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Один Claude → 5 параллельных рук
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          Sub-agent = специализированный исполнитель с собственным окном контекста. Главный Claude дирижирует.
        </p>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">4 типа агентов</p>
        <div className="grid grid-cols-2 gap-[3px] mb-[5px]">
          {agents.map((a) => (
            <div key={a.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[3px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] font-mono">{a.name}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{a.role}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3] mt-[1px]">{a.use}</p>
            </div>
          ))}
        </div>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Когда параллелить</p>
        <div className="space-y-[2px]">
          {parallelExamples.map((e) => (
            <div key={e.title} className="bg-[hsl(var(--slide-gold)/0.06)] border-l-[1.5px] border-[hsl(var(--slide-gold))] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[7px] font-bold text-[hsl(var(--slide-text))]">{e.title}</p>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Sub-agents + parallel orchestration
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Один Claude → <span className="text-[hsl(var(--slide-gold))]">5 параллельных рук</span>
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Sub-agent = специализированный исполнитель с собственным окном контекста. Главный Claude дирижирует. Параллельно для независимых задач, последовательно для зависимых.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">4 типа агентов</p>
          <div className="space-y-[8px]">
            {agents.map((a) => (
              <div key={a.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
                <div className="flex items-baseline justify-between mb-[3px]">
                  <p className="text-[16px] font-mono font-bold text-[hsl(var(--slide-gold))]">{a.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-text-muted))]">{a.role}</p>
                </div>
                <p className="text-[12.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{a.use}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Когда параллелить</p>
          <div className="space-y-[10px]">
            {parallelExamples.map((e) => (
              <div key={e.title} className="bg-[hsl(var(--slide-gold)/0.07)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[16px] py-[10px]">
                <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{e.title}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{e.body}</p>
              </div>
            ))}
          </div>

          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[10px] mt-[14px]">
            <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Правило</p>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Независимые задачи → параллельно (один запрос с N tool calls). Зависимые → последовательно. Не делай N синхронных вызовов когда можно один параллельный.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
