import { useIsMobile } from "@/hooks/use-mobile";

const populate = [
  {
    way: "/init",
    title: "Команда /init",
    desc: "Claude читает папку проекта и сам генерит базовый CLAUDE.md. Стартовая точка — не пустой файл.",
  },
  {
    way: "Руки",
    title: "Ты правишь вручную",
    desc: "Добавляешь стек, правила, структуру папок. Чем точнее — тем меньше вопросов от Claude.",
  },
  {
    way: "Ошибки",
    title: "После каждого косяка",
    desc: "Claude сделал что-то не так → добавляешь правило «никогда не делай X». CLAUDE.md растёт из живого опыта.",
  },
];

export default function L6Slide05Stack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Память проекта
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[4px]">
          CLAUDE.md
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.45]">
          Claude не помнит ничего между сессиями. CLAUDE.md — файл в корне проекта, который он читает с первой секунды каждый раз.
        </p>
        <div className="space-y-[5px] mb-[8px]">
          {populate.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[9px] py-[5px]">
              <div className="flex items-center gap-[5px] mb-[2px]">
                <span className="text-[7px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[4px] py-[1px] rounded-[2px]">{p.way}</span>
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{p.title}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">+ Включи Memory в настройках</p>
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
            claude.ai/settings → Memory → ON<br />
            Для всех проектов: <span className="font-mono">~/.claude/CLAUDE.md</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Память проекта
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.0] mb-[10px]">
        CLAUDE.md
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1100px] leading-[1.45]">
        Claude не помнит ничего между сессиями. CLAUDE.md — файл в корне проекта, который он читает с первой секунды. Без него — каждый раз объясняешь с нуля.
      </p>

      <div className="grid grid-cols-[1fr_1fr_1fr] gap-[18px] max-w-[1500px] mb-[22px]">
        {populate.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[24px] py-[20px]">
            <span className="inline-block text-[12px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] px-[10px] py-[3px] rounded-[5px] mb-[10px]">{p.way}</span>
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] mb-[8px] leading-[1.2]">{p.title}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[28px] py-[16px] max-w-[1500px] flex items-start gap-[40px]">
        <div>
          <p className="text-[17px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">Включи Memory в настройках</p>
          <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            <a href="https://claude.ai/settings" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">claude.ai/settings</a> → Memory → ON — Claude начнёт запоминать контекст между разговорами.
          </p>
        </div>
        <div className="shrink-0 border-l border-[hsl(var(--slide-gold)/0.2)] pl-[32px]">
          <p className="text-[17px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">Глобальный файл</p>
          <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            <span className="font-mono">~/.claude/CLAUDE.md</span> — правила для всех проектов сразу.<br />Например: "всегда пиши на TypeScript, никогда не трогай .env"
          </p>
        </div>
      </div>
    </div>
  );
}
