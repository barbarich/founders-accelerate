import { useIsMobile } from "@/hooks/use-mobile";

export default function L6Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главный тезис урока
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[10px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
            «Claude Code — не помощник. Это твой <span className="text-[hsl(var(--slide-gold))]">AI cofounder</span>. Он пишет код, читает базу, деплоит, фиксит баги в проде. Твоя работа — задавать направление и ревьюить.»
          </p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[8px]">
          В мини-курсе ты узнал, что такое Claude Code. Здесь — как из него выжать всё: production-grade CLAUDE.md, MCP под капотом, Plan Mode, sub-agents, worktrees.
        </p>
        <div className="grid grid-cols-2 gap-[6px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[1px]">Помощник</p>
            <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">«сделай мне функцию X». Один промпт — один результат.</p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[5px] px-[8px] py-[5px]">
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[1px]">Cofounder</p>
            <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">читает 50 файлов, пишет 12 миграций, ставит Stripe webhook, чинит баг через Sentry MCP.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Главный тезис урока
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1600px] mb-[28px]">
        <p className="text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
          «Claude Code — не помощник. Это твой <span className="text-[hsl(var(--slide-gold))]">AI cofounder</span>. Он пишет код, читает базу, деплоит, фиксит баги в проде. Твоя работа — задавать направление и ревьюить.»
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[4px] leading-[1.45] max-w-[1500px] mb-[28px]">
        В мини-курсе ты узнал, что такое Claude Code и 11 правил. Этот урок — про то, как из него выжать всё: production CLAUDE.md, MCP под капотом, Plan Mode, sub-agents, worktrees, отладка прода.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1600px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">Claude как помощник</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            «Сделай функцию X». Один промпт — один результат. Ты вспоминаешь контекст каждый раз. Работаешь как с джуном из второй смены.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Claude как cofounder</p>
          <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Читает 50 файлов проекта, пишет 12 миграций, ставит Stripe webhook, видит ошибку в Sentry и фиксит сам. Контекст в CLAUDE.md, инструменты — MCP.
          </p>
        </div>
      </div>
    </div>
  );
}
