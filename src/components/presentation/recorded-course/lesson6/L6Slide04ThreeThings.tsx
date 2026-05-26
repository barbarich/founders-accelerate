import { useIsMobile } from "@/hooks/use-mobile";

const options = [
  {
    variant: "Вариант 1",
    title: "Десктоп-приложение",
    label: "claude.ai/download",
    url: "https://claude.ai/download",
    install: "Скачай .dmg / .exe → перетащи в Applications",
    what: "Чат-интерфейс. Видит только то, что ты вставляешь вручную. Не трогает файлы, не запускает код.",
    use: "Написать письмо, объяснить концепцию, поговорить с ИИ.",
    badge: "Для текста",
    badgeColor: "hsl(var(--slide-text-muted))",
  },
  {
    variant: "Вариант 2",
    title: "Claude Code в терминале",
    label: "claude.ai/code",
    url: "https://claude.ai/code",
    install: "npm install -g @anthropic-ai/claude-code",
    what: "Агент в твоём проекте. Читает файлы, пишет код, запускает тесты, делает git commit — сам.",
    use: "Строить продукт. Нам нужен именно он.",
    badge: "Для кодинга ← нам",
    badgeColor: "hsl(var(--slide-gold))",
  },
];

export default function L6Slide04ThreeThings() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[22px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Установка
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          2 варианта. Нам нужен второй.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[10px]">
          Десктоп — это чат. Claude Code — агент, который работает в твоём проекте.
        </p>
        <div className="space-y-[8px]">
          {options.map((o, i) => (
            <div key={i} className={`bg-[hsl(var(--slide-bg-alt))] rounded-[7px] px-[11px] py-[8px] ${i === 1 ? "border border-[hsl(var(--slide-gold)/0.4)]" : "border border-[hsl(var(--slide-border)/0.3)]"}`}>
              <div className="flex items-center justify-between mb-[3px]">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))]">{o.title}</p>
                <span className="text-[8px] font-medium px-[5px] py-[1px] rounded-[3px] bg-[hsl(var(--slide-gold)/0.12)]" style={{ color: o.badgeColor }}>{o.badge}</span>
              </div>
              <pre className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[4px] px-[6px] py-[3px] text-[7px] font-mono text-[hsl(var(--slide-gold))] overflow-hidden mb-[3px] whitespace-pre-wrap">
                <code>{o.install}</code>
              </pre>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[2px]">{o.what}</p>
              <a href={o.url} target="_blank" rel="noopener noreferrer"
                className="text-[7px] text-[hsl(var(--slide-gold)/0.7)] underline underline-offset-2">{o.label}</a>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Установка
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        2 варианта. Нам нужен второй.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1200px]">
        Десктоп — это чат. Claude Code — агент, который живёт в твоём проекте и работает с файлами.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1400px]">
        {options.map((o, i) => (
          <div key={i} className={`bg-[hsl(var(--slide-bg-alt))] rounded-[14px] px-[32px] py-[26px] flex flex-col gap-[14px] ${i === 1 ? "border-2 border-[hsl(var(--slide-gold)/0.5)]" : "border border-[hsl(var(--slide-border)/0.3)]"}`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] mb-[4px]">{o.variant}</p>
                <h3 className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{o.title}</h3>
              </div>
              <span className="text-[13px] font-semibold px-[10px] py-[4px] rounded-[6px] bg-[hsl(var(--slide-gold)/0.12)] mt-[4px]" style={{ color: o.badgeColor }}>{o.badge}</span>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[6px]">Установка</p>
              <pre className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[16px] py-[10px] text-[15px] font-mono text-[hsl(var(--slide-gold))] overflow-hidden whitespace-pre-wrap">
                <code>{o.install}</code>
              </pre>
            </div>

            <div>
              <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] mb-[5px]">Что умеет</p>
              <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5]">{o.what}</p>
            </div>

            <div className="border-t border-[hsl(var(--slide-border)/0.3)] pt-[12px] flex items-center justify-between">
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic">{o.use}</p>
              <a href={o.url} target="_blank" rel="noopener noreferrer"
                className="text-[13px] font-mono underline underline-offset-2 shrink-0 ml-[16px]" style={{ color: o.badgeColor }}>
                {o.label} ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
