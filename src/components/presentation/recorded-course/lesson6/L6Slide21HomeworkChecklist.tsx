import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const actions = [
  {
    num: "1",
    title: "Создай global CLAUDE.md",
    body: "Файл ~/.claude/CLAUDE.md с твоими общими правилами: стек, стоп-слова, запреты.",
    deliverable: "Файл ~/.claude/CLAUDE.md размером ≥ 20 строк",
  },
  {
    num: "2",
    title: "Создай project CLAUDE.md",
    body: "В корне твоего текущего проекта. Возьми один из 3 шаблонов (SaaS / Consumer / API) — подставь свой стек.",
    deliverable: "Файл [project]/CLAUDE.md адаптированный под продукт",
  },
  {
    num: "3",
    title: "Установи Stripe + Supabase MCP",
    body: "Сгенери restricted keys, подключи оба сервера в Claude. Проверь что Claude видит tools обоих.",
    deliverable: "Скриншот «доступные MCP tools» с обоими серверами в списке",
  },
  {
    num: "4",
    title: "Прогони Plan Mode на реальной задаче",
    body: "Возьми любую задачу из бэклога > 3 файла или с миграцией. Войди в Plan Mode → получи план → сделай self-review.",
    deliverable: "Скриншот плана + список 3 слабых мест после self-review",
  },
  {
    num: "5",
    title: "Second-model review одного плана",
    body: "Скопируй план из шага 4 в Codex / Antigravity / Gemini. Используй review-промпт из урока. Запиши что нашла другая модель.",
    deliverable: "Сравнение — что Claude пропустил, что нашла вторая модель",
  },
  {
    num: "6",
    title: "Worktree-сессия",
    body: "Сделай git worktree add, открой Claude в новой папке, запусти любую маленькую задачу параллельно.",
    deliverable: "Команда + скриншот двух одновременных Claude-сессий",
  },
  {
    num: "7",
    title: "Прогон production-checklist",
    body: "Скопируй чеклист из урока, отдай Claude: «прогони мой проект, отметь что не сделано». Получи отчёт.",
    deliverable: "Markdown-таблица: ✓ сделано / ✗ не сделано · по 35 пунктам",
  },
];

const aiCoachPrompt = `Я фаундер, прохожу Урок 6 курса The Founders Circle.
Цель урока: настроить Claude Code как production-grade workflow.

Я сделал домашку. Вот мои артефакты:

1. ~/.claude/CLAUDE.md → [вставь содержимое]
2. project/CLAUDE.md → [вставь содержимое]
3. MCP setup → [скриншот / список]
4. Plan Mode → [скриншот плана + 3 слабых места]
5. Second-model review → [сравнение]
6. Worktree → [скриншот]
7. Production checklist → [таблица результатов]

Оцени каждый артефакт по шкале 1-10:
- Соответствие production-grade стандарту
- Конкретность правил (без воды)
- Использование «MUST / MUST NOT»

Где оценка < 7 — объясни что добавить и приведи пример улучшения.
Если ты оценил всё ≥ 8 — переходим к Уроку 7.`;

export default function L6Slide21HomeworkChecklist() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(aiCoachPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Домашка · до следующего урока
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Что сделать прямо сейчас
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          7 действий с конкретным выходом. После — AI-coach промпт для самопроверки.
        </p>
        <div className="space-y-[2px] overflow-y-auto" style={{ maxHeight: "55%" }}>
          {actions.map((a) => (
            <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[2px]">
              <div className="flex items-center gap-[3px] mb-[1px]">
                <span className="font-mono text-[6.5px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[11px] h-[11px] flex items-center justify-center rounded-full font-bold">{a.num}</span>
                <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{a.title}</p>
              </div>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{a.body}</p>
              <p className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.3]">→ {a.deliverable}</p>
            </div>
          ))}
        </div>
        <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mt-[3px] mb-[1px]">AI-coach самопроверка</p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[4px] px-[6px] py-[3px] overflow-y-auto mb-[3px]" style={{ maxHeight: "26%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.45] whitespace-pre-wrap">{aiCoachPrompt}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="self-start px-[7px] py-[2px] rounded-[4px] text-[8px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "📋 Промпт"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Домашка · до следующего урока
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Что сделать <span className="text-[hsl(var(--slide-gold))]">прямо сейчас</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[14px] max-w-[1500px] leading-[1.45]">
        7 действий с конкретным deliverable. После выполнения — отдай артефакты AI-coach промпту для самопроверки.
      </p>

      <div className="grid grid-cols-[1.4fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">7 действий</p>
          <div className="grid grid-cols-1 gap-[8px]">
            {actions.map((a) => (
              <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[8px]">
                <div className="flex items-baseline gap-[8px] mb-[3px]">
                  <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[22px] h-[22px] flex items-center justify-center rounded-full font-bold shrink-0">{a.num}</span>
                  <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{a.title}</p>
                </div>
                <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.45] pl-[30px] mb-[3px]">{a.body}</p>
                <p className="text-[11px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] pl-[30px]">→ {a.deliverable}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">AI-coach · самопроверка</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[16px] py-[12px] overflow-y-auto" style={{ maxHeight: "420px" }}>
            <pre className="text-[11.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{aiCoachPrompt}</pre>
          </div>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[10px] self-start px-[16px] py-[8px] rounded-[8px] text-[13px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
          </button>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] rounded-[8px] px-[14px] py-[10px] mt-[12px]">
            <p className="text-[12.5px] text-[hsl(var(--slide-text))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">Финальный артефакт:</span> папка ~/founders-circle-hw6/ с 7 файлами (или ссылками-скриншотами на каждый шаг).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
