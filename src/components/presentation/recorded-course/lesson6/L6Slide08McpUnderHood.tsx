import { useIsMobile } from "@/hooks/use-mobile";

const layers = [
  {
    layer: "Server",
    desc: "Программа, которую запускают локально или в облаке. Знает как ходить в Stripe / Supabase / GitHub.",
    example: "stripe-mcp-server, supabase-mcp-server",
  },
  {
    layer: "Transport",
    desc: "Как Claude говорит с сервером. stdio (локально на твоей машине), SSE / HTTP (в облаке).",
    example: "stdio для local · HTTP для cloud",
  },
  {
    layer: "Client",
    desc: "Claude. Видит список доступных tool-ов сервера и решает когда какой вызвать.",
    example: "Claude Code / claude.ai",
  },
];

const diff = [
  {
    title: "ChatGPT Plugins (старая модель)",
    points: [
      "Каждый плагин — отдельный API endpoint",
      "Плагин читает что ты дал в окне, не сам файл",
      "Нет персистентного контекста между вызовами",
      "OpenAI ревьюит каждый плагин — медленно",
    ],
    color: "muted",
  },
  {
    title: "Claude MCP (новая модель)",
    points: [
      "Сервер видит твою локальную среду — файлы, БД, secrets",
      "Tool calls возвращают живые данные сервиса",
      "Контекст между вызовами сохраняется в сессии",
      "Любой может написать сервер — open protocol",
    ],
    color: "gold",
  },
];

export default function L6Slide08McpUnderHood() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          MCP под капотом
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Что это и почему мощнее ChatGPT-плагинов
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          В мини показали что MCP «коннектор». Здесь — как он устроен и что значит «Claude работает в твоих сервисах».
        </p>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">3 слоя</p>
        <div className="grid grid-cols-3 gap-[3px] mb-[5px]">
          {layers.map((l) => (
            <div key={l.layer} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[3px]">
              <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))]">{l.layer}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{l.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[4px]">
          {diff.map((d) => (
            <div
              key={d.title}
              className={`rounded-[5px] px-[6px] py-[4px] border ${
                d.color === "gold"
                  ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
                  : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
              }`}
            >
              <p className={`text-[7.5px] font-bold mb-[2px] ${d.color === "gold" ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"}`}>
                {d.title}
              </p>
              {d.points.map((p, i) => (
                <p key={i} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">→ {p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        MCP под капотом
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Что это и <span className="text-[hsl(var(--slide-gold))]">почему мощнее</span> ChatGPT-плагинов
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1500px] leading-[1.45]">
        В мини-курсе мы сказали «MCP = коннектор Claude к сервисам». Этого мало, чтобы строить серьёзно. Разберём 3 слоя архитектуры и чем MCP отличается от старой плагин-модели.
      </p>

      <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">3 слоя архитектуры</p>
      <div className="grid grid-cols-3 gap-[14px] max-w-[1700px] mb-[20px]">
        {layers.map((l, i) => (
          <div key={l.layer} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[14px] relative">
            {i < layers.length - 1 && (
              <span className="absolute -right-[12px] top-[26px] text-[hsl(var(--slide-gold)/0.4)] text-[20px] z-10">→</span>
            )}
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{l.layer}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[8px]">{l.desc}</p>
            <p className="text-[12px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.45]">{l.example}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {diff.map((d) => (
          <div
            key={d.title}
            className={`rounded-[12px] px-[24px] py-[16px] border ${
              d.color === "gold"
                ? "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
                : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"
            }`}
          >
            <p className={`text-[18px] font-bold mb-[8px] ${d.color === "gold" ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"}`}>
              {d.title}
            </p>
            <ul className="space-y-[4px]">
              {d.points.map((p) => (
                <li key={p} className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">→ {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
