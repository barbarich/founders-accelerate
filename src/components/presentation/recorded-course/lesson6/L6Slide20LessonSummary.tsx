import { useIsMobile } from "@/hooks/use-mobile";

const insights = [
  {
    num: "1",
    title: "Claude Code = AI cofounder, не помощник",
    body: "Помощник делает одну задачу по запросу. Cofounder читает 50 файлов, ставит интеграции, фиксит баги из Sentry, открывает PR-ы. Меняет твою роль с «писатель кода» на «дирижёр AI».",
  },
  {
    num: "2",
    title: "CLAUDE.md иерархия — основа качества",
    body: "Один файл — джун. Иерархия (global + project + per-folder + skills) — сеньор. Чем точнее правила и стандарты — тем меньше итераций до production-ready результата.",
  },
  {
    num: "3",
    title: "MCP делает Claude автономным",
    body: "Stripe + Supabase MCP подключают Claude напрямую к твоим сервисам. Один промпт → product + price + payment link + RLS + миграция + edge function. Без копирования ID, без UI кликов.",
  },
  {
    num: "4",
    title: "Plan Mode + Second-model review = production decisions",
    body: "Self-review Claude + ревью другой моделью (Codex / Antigravity) ловят до 67% потенциальных багов до того, как они попали в код. 12 минут на review = часы сэкономленных hotfix-ов.",
  },
  {
    num: "5",
    title: "Worktrees + sub-agents = параллельная работа",
    body: "Несколько фич одновременно без git stash. Несколько Claude-сессий одновременно с независимым контекстом. Один человек делает работу маленькой команды.",
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
          Саммари · 5 ключевых инсайтов
        </h2>
        <div className="space-y-[3px]">
          {insights.map((i) => (
            <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-start gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0 mt-[1px]">{i.num}</span>
                <div>
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{i.title}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{i.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[2px] border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[3px] mt-[3px]">
          <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4] italic">
            Эти 5 инсайтов — основа домашки. Следующий слайд — конкретный чеклист.
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
        Саммари · <span className="text-[hsl(var(--slide-gold))]">5 ключевых инсайтов</span>
      </h2>

      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px]">
        {insights.map((i) => (
          <div key={i.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[16px] flex flex-col">
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[10px]">{i.num}</span>
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{i.title}</p>
            <p className="text-[12.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{i.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[20px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Эти 5 инсайтов — фундамент домашки и точка опоры для следующего урока. На следующем слайде — конкретный чеклист действий с deliverable.
        </p>
      </div>
    </div>
  );
}
