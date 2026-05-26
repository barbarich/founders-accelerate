import { useIsMobile } from "@/hooks/use-mobile";

const plugins = [
  { name: "Design",              desc: "UI/UX советы, компоненты, доступность" },
  { name: "Engineering",         desc: "Архитектура, ревью кода, best practices" },
  { name: "PDF viewer",          desc: "Читать и анализировать PDF прямо в чате" },
  { name: "Brand voice",         desc: "Писать в твоём тоне, с твоими стоп-словами" },
  { name: "Product management",  desc: "Roadmap, приоритизация, PRD, юзер-сторис" },
  { name: "Marketing",           desc: "Копирайтинг, SEO, каналы, запуски" },
  { name: "Sales",               desc: "Письма, возражения, воронки, скрипты" },
  { name: "Legal",               desc: "Terms of service, privacy policy, договоры" },
  { name: "Data",                desc: "SQL-запросы, аналитика, метрики, графики" },
  { name: "Mempalace",           desc: "Долгосрочная память между сессиями" },
];

export default function L6Slide06SwitchSignals() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Скилы и плагины
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[3px]">
          10 плагинов. Ставим до старта.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Плагин = специализированный эксперт внутри Claude. Включаешь один раз — он активен во всех разговорах.
        </p>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-bold mb-[4px]">
          claude.ai → Settings → Personal plugins
        </p>
        <div className="grid grid-cols-2 gap-[3px]">
          {plugins.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Скилы и плагины
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        10 плагинов. Ставим до старта.
      </h2>

      <div className="grid grid-cols-[1fr_420px] gap-[36px] max-w-[1500px]">
        <div>
          <div className="grid grid-cols-2 gap-[10px] mb-[16px]">
            {plugins.map((p, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[16px] py-[11px]">
                <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] mb-[3px] leading-[1.2]">{p.name}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">Как работают плагины</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Плагин = специализированный эксперт. Включаешь один раз — он активен во всех разговорах с Claude. Дизайн-плагин знает компоненты и доступность. Brand voice — твой тон и стоп-слова.
            </p>
          </div>

          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">Зачем до старта?</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Без них — общий ответ. С ними — Claude переключается в нужный режим автоматически. Разработчик + дизайнер + маркетолог в одном.
            </p>
          </div>

          <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[20px] py-[14px]">
            <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">Где включить</p>
            <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer"
              className="text-[14px] font-mono text-[hsl(var(--slide-gold))] underline underline-offset-2">
              claude.ai/settings
            </a>
            <p className="text-[13px] text-[hsl(var(--slide-text-muted))] mt-[2px]">→ Personal plugins → включи все 10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
