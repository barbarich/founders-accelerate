import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  {
    tool: "Sentry",
    task: "Подключи Sentry к проекту, настрой алерты на ошибки в проде",
    result: "Claude подключает SDK, создаёт проект, настраивает алерты",
  },
  {
    tool: "Mixpanel",
    task: "Добавь трекинг: регистрация, первый вход, оплата",
    result: "Claude вставляет события, настраивает воронку, пишет дашборд",
  },
  {
    tool: "Stripe",
    task: "Подключи оплату: подписка $49/мес с trial 7 дней",
    result: "Claude создаёт продукт в Stripe, пишет webhook-хендлеры, тестирует",
  },
];

export default function L6Slide12DemoScope() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          MCP
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Claude работает в твоих инструментах
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          MCP — коннектор между Claude и сторонними сервисами. Пишешь задачу — получаешь настроенную систему.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[6px] mb-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Как подключить</p>
          <pre className="text-[7px] font-mono text-[hsl(var(--slide-text-muted))] leading-[1.4] whitespace-pre-wrap">{`Settings → MCP → Add Server
Вставь конфиг сервиса → Restart
Claude видит инструменты → работает`}</pre>
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Примеры</p>
        <div className="space-y-[4px]">
          {examples.map((e, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{e.tool}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3] mb-[1px]">«{e.task}»</p>
              <p className="text-[7px] text-[hsl(142_50%_65%)] leading-[1.3]">→ {e.result}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        MCP
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Claude работает в твоих инструментах
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1200px]">
        MCP — коннектор между Claude и сторонними сервисами. Пишешь задачу в чат — получаешь настроенную систему.
      </p>

      <div className="grid grid-cols-[340px_1fr] gap-[24px] max-w-[1500px]">

        <div className="flex flex-col gap-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[18px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] mb-[10px]">Как подключить</p>
            <div className="space-y-[8px]">
              {[
                "Settings → MCP → Add Server",
                "Вставь конфиг нужного сервиса",
                "Restart Claude → он видит инструменты",
                "Пиши задачу — Claude делает сам",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-[8px]">
                  <span className="text-[12px] font-mono text-[hsl(var(--slide-gold)/0.5)] mt-[1px] shrink-0">{i + 1}.</span>
                  <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[14px]">
            <p className="text-[14px] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">Найти MCP-серверы</p>
            <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer"
              className="text-[13px] font-mono text-[hsl(var(--slide-gold)/0.8)] underline underline-offset-2">
              claude.ai/settings → Integrations ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="text-[15px] text-[hsl(var(--slide-gold))] font-bold">Примеры — пишешь задачу, Claude делает</p>
          {examples.map((e, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[22px] py-[14px]">
              <div className="flex items-start gap-[14px]">
                <span className="text-[14px] font-bold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[12px] py-[4px] rounded-[6px] shrink-0 mt-[1px]">{e.tool}</span>
                <div className="flex-1">
                  <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[4px]">«{e.task}»</p>
                  <p className="text-[13px] text-[hsl(142_50%_65%)] leading-[1.4]">→ {e.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
