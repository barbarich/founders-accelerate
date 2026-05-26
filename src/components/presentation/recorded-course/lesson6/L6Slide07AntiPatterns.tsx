import { useIsMobile } from "@/hooks/use-mobile";

const rules = [
  {
    num: "1",
    title: "Документация и тесты",
    why: "Без архитектурного дока следующий Claude строит на песке. Без теста — не знаешь, что сломал.",
    artifact: `MUST: перед кодом — создай
/docs/ARCHITECTURE.md и PRD.md.
После каждой функции — unit-тест:
happy path + 1 edge case.
MUST NOT: коммитить без теста.`,
  },
  {
    num: "2",
    title: "Файл ≤ 500 строк",
    why: "Claude теряет контекст в длинных файлах — начинает угадывать то, что выше видимой области.",
    artifact: `MUST: если файл → 500 строк,
останови и разбей на модули
до продолжения.
MUST NOT: файлы >500 строк
в новом коде.`,
  },
  {
    num: "3",
    title: "Claude Opus 4.6 — лучшие практики",
    why: "С /think Opus решает на уровне senior. Без него — junior. Та же цена, другой результат.",
    artifact: `Для сложных решений используй
extended thinking: напиши /think
перед задачей.
Один промпт = одна задача.
XML-структура для длинных промптов.`,
  },
  {
    num: "4",
    title: "Production ready с первого коммита",
    why: "«Потом доделаю» — никогда. Юзер видит пустой экран при ошибке и уходит навсегда.",
    artifact: `MUST: error handling, loading state,
empty state для каждого экрана.
MUST NOT: console.log в продакшне,
TODO-комментарии, захардкоженные
секреты в коде.`,
  },
  {
    num: "5",
    title: "Адаптивность на всех устройствах",
    why: "60%+ трафика с телефона. Сломанный mobile = потерял больше половины аудитории в день запуска.",
    artifact: `MUST: mobile-first. Проверяй на
375px / 768px / 1440px.
Поддержка Chrome, Safari, Firefox.
MUST NOT: фиксированные px-ширины,
overflow без проверки на mobile.`,
  },
];

export default function L6Slide07AntiPatterns() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Стандарты проекта
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          5 правил в CLAUDE.md
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[7px] leading-[1.4]">
          Копируй в свой CLAUDE.md — Claude будет следовать им в каждой сессии.
        </p>
        <div className="space-y-[4px]">
          {rules.map((r) => (
            <div key={r.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex items-center gap-[5px] mb-[2px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[13px] h-[13px] flex items-center justify-center rounded-full font-bold">{r.num}</span>
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{r.title}</p>
              </div>
              <pre className="text-[6.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] whitespace-pre-wrap">{r.artifact}</pre>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Стандарты проекта
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        5 правил в CLAUDE.md
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1300px]">
        Копируй в свой CLAUDE.md — Claude будет следовать им в каждой сессии без напоминаний.
      </p>

      <div className="grid grid-cols-5 gap-[12px] max-w-[1500px]">
        {rules.map((r) => (
          <div key={r.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[14px] py-[14px] flex flex-col">
            <div className="flex items-center gap-[8px] mb-[8px]">
              <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[26px] h-[26px] flex items-center justify-center rounded-full font-bold shrink-0">{r.num}</span>
            </div>
            <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px]">{r.title}</p>
            <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">{r.why}</p>
            <pre className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px] text-[10px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.5] whitespace-pre-wrap mt-auto">{r.artifact}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
