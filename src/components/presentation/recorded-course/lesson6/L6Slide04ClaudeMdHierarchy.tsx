import { useIsMobile } from "@/hooks/use-mobile";

const levels = [
  {
    path: "~/.claude/CLAUDE.md",
    scope: "Глобально",
    desc: "Правила для всех проектов: твой стек, твой стиль, твои стоп-слова, запреты типа «никогда не трогай .env».",
    example: "Всегда TypeScript · Tailwind · никаких console.log в проде · комментарии минимум",
  },
  {
    path: "project/CLAUDE.md",
    scope: "Проект",
    desc: "Контекст проекта: стек, архитектура, конвенции имён, ссылки на ключевые файлы, что НЕ трогать.",
    example: "Supabase + Next 14 · auth через Clerk · миграции в /supabase/migrations · public/ не трогать",
  },
  {
    path: "src/api/CLAUDE.md",
    scope: "Папка",
    desc: "Под-CLAUDE.md в папке. Claude читает его когда работает с файлами этой папки. Правила локальные.",
    example: "Все ручки — Server Actions · валидация через zod · ошибки наружу — без stack trace",
  },
  {
    path: ".claude/skills/*",
    scope: "Скиллы",
    desc: "Специализированные плагины-эксперты. Включаются автоматически когда задача матчит триггер.",
    example: "engineering · design · brand-voice · sales · marketing · pdf-viewer · mempalace",
  },
];

export default function L6Slide04ClaudeMdHierarchy() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Память Claude · 4 уровня
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Иерархия CLAUDE.md
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          В мини был один файл CLAUDE.md. В реальном проде их минимум 3, плюс скиллы. Claude мерджит контекст автоматически.
        </p>
        <div className="space-y-[4px]">
          {levels.map((l) => (
            <div key={l.path} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-center justify-between mb-[1px]">
                <span className="text-[6.5px] font-mono text-[hsl(var(--slide-gold))]">{l.path}</span>
                <span className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))]">{l.scope}</span>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[2px]">{l.desc}</p>
              <p className="text-[6.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4]">{l.example}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Память Claude · 4 уровня контекста
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Иерархия <span className="text-[hsl(var(--slide-gold))]">CLAUDE.md</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1400px] leading-[1.45]">
        В мини-курсе был один CLAUDE.md в корне. В реальном проде их минимум 3 + скиллы. Claude мерджит контекст автоматически — от глобального к локальному. Чем ближе к файлу — тем выше приоритет.
      </p>

      <div className="grid grid-cols-4 gap-[14px] max-w-[1700px]">
        {levels.map((l, i) => (
          <div
            key={l.path}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[18px] flex flex-col relative"
          >
            {i < levels.length - 1 && (
              <span className="absolute -right-[10px] top-[24px] text-[hsl(var(--slide-gold)/0.3)] text-[18px] z-10">→</span>
            )}
            <p className="text-[12px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">{l.scope}</p>
            <p className="text-[12px] font-mono text-[hsl(var(--slide-text))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[4px] mb-[12px] inline-block w-fit">{l.path}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[12px]">{l.desc}</p>
            <p className="text-[11px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.5] mt-auto bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[6px] px-[8px] py-[6px]">{l.example}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[26px] py-[14px] max-w-[1700px] mt-[20px]">
        <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="text-[hsl(var(--slide-gold))] font-bold">Приоритет конфликтов:</span> Папка → Проект → Глобально. Если в `src/api/CLAUDE.md` сказано «использовать zod», а в `project/CLAUDE.md` — «yup», в папке api будет zod.
        </p>
      </div>
    </div>
  );
}
