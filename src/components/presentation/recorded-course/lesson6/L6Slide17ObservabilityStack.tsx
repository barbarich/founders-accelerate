import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  {
    name: "Sentry MCP",
    purpose: "Claude видит реальные ошибки из прода",
    setup: "Sentry → Settings → API → Auth tokens (project:read + event:read).",
    prompt: "«Прочти последние 10 errors из Sentry за 24 часа. Сгруппируй по причине. Начни фиксить с самой частой — 1 PR на одну группу.»",
  },
  {
    name: "GitHub MCP",
    purpose: "PRs, issues, gh CLI как нативные tools",
    setup: "gh CLI установлен + Personal access token (repo + read:org). Можно через стандартный auth.",
    prompt: "«Открой last 5 issues с label bug. Для каждого — найди файл, который вероятно содержит баг, и предложи где смотреть.»",
  },
  {
    name: "Git tools (встроены)",
    purpose: "Blame, diff, log, history — всё инлайн",
    setup: "Ничего не нужно — встроено в Claude Code.",
    prompt: "«Сделай git blame на файл X между строк 40-80. Кто что менял? Какие коммиты затронули эту логику?»",
  },
];

export default function L6Slide17ObservabilityStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Observability через MCP
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Claude видит твой прод. И чинит сам.
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.4]">
          Раньше: ошибка в Sentry → ты копируешь → отдаёшь Claude → он фиксит. Теперь: Claude сам читает Sentry, видит, чинит.
        </p>
        <div className="space-y-[3px]">
          {tools.map((t) => (
            <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{t.name}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3] mb-[2px]">{t.purpose}</p>
              <p className="text-[6px] font-mono text-[hsl(var(--slide-text-muted)/0.85)] leading-[1.3]">Setup: {t.setup}</p>
              <p className="text-[6px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] mt-[1px]">{t.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Observability через MCP
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Claude <span className="text-[hsl(var(--slide-gold))]">видит твой прод</span>. И чинит сам.
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Раньше: ошибка в Sentry → ты копируешь стек-трейс → отдаёшь Claude → он фиксит. Теперь: Claude сам читает Sentry, видит ошибки, читает git blame на файл, исправляет, открывает PR.
      </p>

      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px]">
        {tools.map((t) => (
          <div key={t.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] flex flex-col">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{t.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.45] mb-[12px]">{t.purpose}</p>

            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-text-muted))] font-bold mb-[4px]">Setup</p>
            <p className="text-[12px] font-mono text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">{t.setup}</p>

            <p className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Промпт-пример</p>
            <p className="text-[11.5px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.55] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px] mt-auto">{t.prompt}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[18px]">
        <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">Workflow цикл прода:</span> Sentry MCP читает ошибки → git tools находят commit где появился баг → GitHub MCP открывает PR с фиксом → ты только аппрувишь. Цикл фикса прод-бага: 15-30 минут.
        </p>
      </div>
    </div>
  );
}
