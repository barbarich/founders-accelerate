import { useIsMobile } from "@/hooks/use-mobile";

const levels = [
  {
    path: "Глобальный · ~/.claude/CLAUDE.md",
    scope: "Для всех проектов",
    desc: "Твои общие правила: какой стек предпочитаешь, какой стиль кода, что нельзя трогать. Один раз написал — работает везде.",
    example: "Пишу на TypeScript · никогда не оставляй console.log в проде · комментариев минимум",
  },
  {
    path: "Проектный · project/CLAUDE.md",
    scope: "Для одного проекта",
    desc: "Контекст конкретного проекта: что строишь, для кого, какие инструменты используешь, что НЕ трогать.",
    example: "Продукт = Mikey AI · стек Supabase + Next · /public/ не трогать · миграции через CLI",
  },
];

const why = [
  {
    title: "Без CLAUDE.md",
    body: "Каждую сессию ты тратишь 5 минут объясняя Claude твой проект. Claude угадывает стиль. Иногда угадывает не так — приходится переделывать.",
    bad: true,
  },
  {
    title: "С CLAUDE.md",
    body: "Claude сразу знает контекст. Пишет в твоём стиле. Не ломает твои правила. Стартует с первой секунды.",
  },
];

export default function L6Slide04ClaudeMdHierarchy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Память Claude
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Файл <span className="text-[hsl(var(--slide-gold))]">CLAUDE.md</span> · 2 уровня
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          CLAUDE.md — текстовый файл, который Claude читает каждый раз когда ты с ним разговариваешь. В нём твои правила. Без него — Claude всё забывает.
        </p>
        <div className="space-y-[4px] mb-[5px]">
          {levels.map((l) => (
            <div key={l.path} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{l.scope}</p>
              <p className="text-[6.5px] font-mono text-[hsl(var(--slide-text))] mb-[2px]">{l.path}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[2px]">{l.desc}</p>
              <p className="text-[6.5px] italic text-[hsl(var(--slide-gold)/0.85)] leading-[1.4]">Пример: {l.example}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-[4px]">
          {why.map((w) => (
            <div
              key={w.title}
              className={`rounded-[4px] px-[6px] py-[3px] border ${
                w.bad
                  ? "bg-[hsl(0_60%_50%/0.06)] border-[hsl(0_60%_60%/0.3)]"
                  : "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.3)]"
              }`}
            >
              <p className={`text-[7.5px] font-bold mb-[1px] ${w.bad ? "text-[hsl(0_60%_75%)]" : "text-[hsl(var(--slide-gold))]"}`}>{w.title}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Память Claude — как сделать так, чтобы он не забывал
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Файл <span className="text-[hsl(var(--slide-gold))]">CLAUDE.md</span> · 2 уровня
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1500px] leading-[1.45]">
        CLAUDE.md — текстовый файл, который Claude читает каждый раз когда ты с ним разговариваешь. В нём ты записываешь свои правила и контекст. Без этого файла Claude всё забывает между сессиями.
      </p>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[20px]">
        {levels.map((l) => (
          <div key={l.path} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px]">
            <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[6px]">{l.scope}</p>
            <p className="text-[14px] font-mono text-[hsl(var(--slide-text))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[5px] mb-[12px] inline-block w-fit">{l.path}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">{l.desc}</p>
            <p className="text-[14px] italic text-[hsl(var(--slide-gold)/0.85)] leading-[1.5] bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[6px] px-[10px] py-[7px]">Пример: {l.example}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {why.map((w) => (
          <div
            key={w.title}
            className={`rounded-[12px] px-[24px] py-[16px] border ${
              w.bad
                ? "bg-[hsl(0_60%_50%/0.06)] border-[hsl(0_60%_60%/0.3)]"
                : "bg-[hsl(var(--slide-gold)/0.08)] border-[hsl(var(--slide-gold)/0.4)]"
            }`}
          >
            <p className={`text-[18px] font-bold mb-[8px] ${w.bad ? "text-[hsl(0_60%_75%)]" : "text-[hsl(var(--slide-gold))]"}`}>{w.title}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{w.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
