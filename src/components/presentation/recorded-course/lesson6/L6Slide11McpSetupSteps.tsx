import { useIsMobile } from "@/hooks/use-mobile";

const setupSteps = [
  {
    num: "1",
    title: "Найди сервер",
    body: "Каталог в claude.ai → Settings → Integrations. Или GitHub: anthropics/mcp-servers + сторонние от Stripe, Supabase, Sentry официальные.",
    cmd: "claude.ai → Settings → Integrations",
  },
  {
    num: "2",
    title: "Сгенери API key",
    body: "В сервисе (Stripe / Supabase / Sentry) сделай restricted key только под нужные операции. Никогда не давай unrestricted.",
    cmd: "Stripe → Restricted keys → custom role",
  },
  {
    num: "3",
    title: "Подключи сервер",
    body: "В Claude → Settings → Integrations → Add. Вставь конфиг (URL + ключ). В Claude Code (CLI) — в ~/.claude/mcp.json или через claude mcp add.",
    cmd: "claude mcp add stripe --token=rk_...",
  },
  {
    num: "4",
    title: "Restart + проверь",
    body: "Перезапусти Claude. В чате спроси «какие MCP tools у тебя доступны?» — список должен включать новый сервер. Если нет — проверь логи.",
    cmd: "/mcp · посмотреть список",
  },
];

const top7 = [
  { name: "Supabase", purpose: "БД, миграции, RLS, edge functions", priority: "MUST" },
  { name: "Stripe", purpose: "Products, prices, payment links, customers", priority: "MUST" },
  { name: "GitHub", purpose: "PRs, issues, releases, gh CLI как tools", priority: "MUST" },
  { name: "Sentry", purpose: "Errors из прода → Claude фиксит сам", priority: "RECOMMEND" },
  { name: "Linear / Notion", purpose: "Бэклог фаундера — Claude закрывает таски", priority: "RECOMMEND" },
  { name: "Mixpanel / PostHog", purpose: "Аналитика, события, воронки, ретеншн", priority: "WHEN PAID" },
  { name: "Figma", purpose: "Дизайн → код компонента", priority: "OPTIONAL" },
];

export default function L6Slide11McpSetupSteps() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Установка MCP-сервера
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          4 шага + top-7 для founder solo
        </h2>
        <div className="space-y-[3px] mb-[5px]">
          {setupSteps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[7px] py-[3px]">
              <div className="flex items-center gap-[4px]">
                <span className="font-mono text-[7px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[12px] h-[12px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{s.title}</p>
              </div>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mt-[1px]">{s.body}</p>
              <p className="text-[6px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.3] mt-[1px]">→ {s.cmd}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Top-7 MCP для founder solo</p>
        <div className="space-y-[1.5px]">
          {top7.map((m) => (
            <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[1.5px] flex items-center gap-[4px]">
              <span className="text-[7px] font-bold text-[hsl(var(--slide-gold))] min-w-[58px]">{m.name}</span>
              <span className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.2] flex-1">{m.purpose}</span>
              <span className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.7)] uppercase">{m.priority}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Установка MCP-сервера
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        4 шага + top-7 для <span className="text-[hsl(var(--slide-gold))]">founder solo</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        Один раз настроил — пользуешься во всех сессиях. Restricted ключи обязательны (никогда unrestricted).
      </p>

      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px] mb-[20px]">
        {setupSteps.map((s, i) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[18px] py-[14px] flex flex-col relative">
            {i < setupSteps.length - 1 && (
              <span className="absolute -right-[10px] top-[22px] text-[hsl(var(--slide-gold)/0.3)] text-[18px] z-10">→</span>
            )}
            <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[28px] h-[28px] flex items-center justify-center rounded-full font-bold mb-[8px]">{s.num}</span>
            <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px]">{s.title}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[8px]">{s.body}</p>
            <p className="text-[10.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.45] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[6px] mt-auto">{s.cmd}</p>
          </div>
        ))}
      </div>

      <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Top-7 MCP для founder solo · по приоритету</p>
      <div className="grid grid-cols-7 gap-[10px] max-w-[1700px]">
        {top7.map((m) => (
          <div key={m.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
            <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{m.name}</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[4px]">{m.purpose}</p>
            <p className="text-[8.5px] font-mono text-[hsl(var(--slide-gold)/0.7)] uppercase tracking-[0.1em]">{m.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
