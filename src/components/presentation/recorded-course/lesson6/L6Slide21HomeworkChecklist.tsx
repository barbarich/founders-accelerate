import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const actions = [
  {
    num: "1",
    title: "Создай свой CLAUDE.md",
    body: "Скопируй шаблон из слайда 7 в файл CLAUDE.md в корне твоего проекта. Замени всё в скобках под себя.",
    result: "Файл CLAUDE.md ~50 строк, под твой продукт",
    skill: "Навык 1",
  },
  {
    num: "2",
    title: "Включи 10 скиллов в настройках",
    body: "Зайди в claude.ai → Settings → Skills. Включи все 10. Это занимает 2 минуты.",
    result: "Скриншот включённых скиллов",
    skill: "Навык 1",
  },
  {
    num: "3",
    title: "Попробуй Plan Mode на реальной задаче",
    body: "Возьми любую задачу из бэклога. Нажми Shift+Tab. Дай Claude задачу. Прочитай план. Поправь если нужно.",
    result: "Скриншот плана + список того, что поправил",
    skill: "Навык 2",
  },
  {
    num: "4",
    title: "Подключи Stripe или Supabase через MCP",
    body: "Выбери один из двух — что тебе нужнее. Используй промпт из слайда 11 или 12. Подключи и сделай первую задачу.",
    result: "Готовая ссылка на оплату ИЛИ работающая база с защитой данных",
    skill: "Навыки 3-4",
  },
  {
    num: "5",
    title: "Прогон по чек-листу перед запуском",
    body: "Скопируй чек-лист из слайда 22. Отдай Claude. Получи отчёт «что готово, что забыл». Почини самое критичное.",
    result: "Список с галочками + закрытые критические пункты",
    skill: "Навык 6",
  },
];

const aiCoachPrompt = `Я фаундер, прохожу Урок 6 курса The Founders Circle.
Цель урока — настроить Claude как production-рабочий инструмент.

Я сделал домашку. Вот мои артефакты:

1. CLAUDE.md → [вставь содержимое файла]
2. Скиллы → [список включённых]
3. Plan Mode → [скриншот плана + что поправил]
4. MCP → [Stripe или Supabase? что получилось?]
5. Чек-лист → [что осталось не закрыто]

Оцени каждый артефакт по простой шкале:
- 🟢 хорошо (двигаемся дальше)
- 🟡 ок, но можно улучшить (скажи как)
- 🔴 переделать (скажи что не так)

Если всё 🟢 — переходим к Уроку 7.
Если есть 🟡 или 🔴 — объясни простыми словами что улучшить.

Главное: я не разработчик. Объясняй так, чтобы я понял.`;

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
          Домашка · 5 действий
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Что сделать прямо сейчас
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          5 действий по 10-30 минут каждое. Каждое = один из 6 навыков урока. В конце — AI-coach для проверки.
        </p>
        <div className="space-y-[2px] overflow-y-auto" style={{ maxHeight: "52%" }}>
          {actions.map((a) => (
            <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[2px]">
              <div className="flex items-center gap-[3px] mb-[1px]">
                <span className="font-mono text-[6.5px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[11px] h-[11px] flex items-center justify-center rounded-full font-bold">{a.num}</span>
                <p className="text-[7.5px] font-bold text-[hsl(var(--slide-text))]">{a.title}</p>
                <span className="text-[5.5px] text-[hsl(var(--slide-gold)/0.7)] ml-auto">· {a.skill}</span>
              </div>
              <p className="text-[6px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{a.body}</p>
              <p className="text-[5.5px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.3]">→ {a.result}</p>
            </div>
          ))}
        </div>
        <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mt-[3px] mb-[1px]">AI-coach проверит твою домашку</p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[4px] px-[6px] py-[3px] overflow-y-auto mb-[3px]" style={{ maxHeight: "25%" }}>
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
        Домашка · 5 действий
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Что сделать <span className="text-[hsl(var(--slide-gold))]">прямо сейчас</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[14px] max-w-[1500px] leading-[1.45]">
        5 действий по 10-30 минут каждое. Каждое = один из 6 навыков урока. В конце — отдашь Claude чтобы он проверил твою домашку.
      </p>

      <div className="grid grid-cols-[1.4fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">5 действий</p>
          <div className="grid grid-cols-1 gap-[8px]">
            {actions.map((a) => (
              <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[8px]">
                <div className="flex items-baseline gap-[8px] mb-[3px]">
                  <span className="font-mono text-[12px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[22px] h-[22px] flex items-center justify-center rounded-full font-bold shrink-0">{a.num}</span>
                  <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] flex-1">{a.title}</p>
                  <span className="text-[11px] text-[hsl(var(--slide-gold)/0.7)] italic">{a.skill}</span>
                </div>
                <p className="text-[12.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] pl-[30px] mb-[3px]">{a.body}</p>
                <p className="text-[11px] font-mono text-[hsl(var(--slide-gold)/0.85)] leading-[1.4] pl-[30px]">→ {a.result}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">AI-coach · проверит твою домашку</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[16px] py-[12px] overflow-y-auto" style={{ maxHeight: "400px" }}>
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{aiCoachPrompt}</pre>
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
            <p className="text-[13px] text-[hsl(var(--slide-text))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))] font-bold">Результат:</span> ~2 часа работы → 6 новых навыков, готовый production-stack для следующих фич.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
