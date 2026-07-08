import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const reviewPrompt = `Я фаундер. У меня есть план, который написал Claude.
Прочитай его внимательно и найди слабые места.

ВОТ ПЛАН:
[вставь сюда план от Claude]

Если у тебя есть доступ к файлам проекта — открой их и сверь план с реальным
кодом, а не только с текстом плана ниже.

Проверь по этим темам:

1. Баги и логические конфликты
   — Есть ли шаги, которые противоречат друг другу или ломают предыдущий шаг?
   — Совпадает ли порядок действий с зависимостями (например: таблица должна быть создана раньше, чем в неё начинают писать)?
   — Везде ли одинаково называются одни и те же поля, переменные, эндпоинты?

2. Безопасность
   — Где могут утечь секретные ключи?
   — Защищены ли данные одного юзера от другого?
   — Есть ли защита от спама и подделки запросов?

3. Что может сломаться в рантайме
   — Что если юзер введёт пустое или некорректное значение?
   — Что если придёт двойная оплата или запрос оборвётся посередине?
   — Что если два запроса придут одновременно (например, юзер нажал «оплатить» дважды подряд)?

4. Масштабирование
   — Что произойдёт при росте в 10 или 100 раз по юзерам/трафику?
   — Есть ли узкие места: запросы в цикле, отсутствие индексов, всё завязано на одном процессе?
   — Выдержит ли план рост без переделки с нуля?

5. Удобство
   — Понимает ли юзер что происходит в любой момент?
   — Есть ли понятные сообщения об ошибках (не код)?
   — Работает на мобильном так же как на десктопе?

6. Что забыто
   — Что вообще не упомянуто в плане, но обычно нужно?
   — Какой шаг можно было бы пропустить, не уменьшая качество?

Не выдумывай проблем. Скажи только то, что реально нашёл.
Каждую проблему — с уровнем важности: критично / средне / мелочь.

Для каждой найденной проблемы не просто опиши её — сразу дай готовое исправление:
конкретный текст правки в план или фрагмент кода. Я хочу получить не список
претензий, а обновлённый, исправленный план.`;

const flow = [
  { from: "Claude", to: "Написал план" },
  { from: "Сам Claude", to: "Проверил себя ещё раз" },
  { from: "Antigravity / Codex / Gemini", to: "Нашёл проблемы и сразу исправил план" },
  { from: "Назад в Claude", to: "Проверяет фиксы, пишет код" },
];

const stats = [
  { value: "67%", label: "багов поймал второй взгляд до того, как они попали в код (мои Mikey-PR-ы за 3 мес)" },
  { value: "10 мин", label: "среднее время на ревью одного плана другой моделью" },
  { value: "Бесплатно", label: "если используешь бесплатные модели — Gemini, или 5 запросов Codex в день" },
];

export default function L6Slide13SecondModelReview() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(reviewPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Вторая модель для проверки
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Дай план на ревью другому AI
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Другая модель = другой взгляд. То, что Claude считает «нормально», Antigravity, Gemini или Codex могут увидеть как риск. Лучшая страховка от багов.
        </p>
        <div className="grid grid-cols-2 gap-[2px] mb-[4px]">
          {flow.map((f) => (
            <div key={f.from} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[3px] px-[5px] py-[2px]">
              <p className="text-[6.5px] text-[hsl(var(--slide-gold))] font-bold">{f.from}</p>
              <p className="text-[5.5px] text-[hsl(var(--slide-text-muted))]">→ {f.to}</p>
            </div>
          ))}
        </div>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Промпт для ревью</p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[3px]" style={{ maxHeight: "44%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.55] whitespace-pre-wrap">{reviewPrompt}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="self-start px-[8px] py-[3px] rounded-[4px] text-[8px] font-semibold transition-all"
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
        Вторая модель для проверки
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        План от Claude → <span className="text-[hsl(var(--slide-gold))]">отдай другой AI на проверку</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[14px] max-w-[1500px] leading-[1.45]">
        Другая модель = другой взгляд. То, что Claude считает «нормально», Antigravity, Gemini или Codex могут увидеть как риск. Это лучшая дешёвая страховка от багов в проде.
      </p>

      <div className="grid grid-cols-4 gap-[10px] max-w-[1700px] mb-[14px]">
        {flow.map((f, i) => (
          <div key={f.from} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[14px] py-[8px] relative">
            {i < flow.length - 1 && (
              <span className="absolute -right-[8px] top-[18px] text-[hsl(var(--slide-gold)/0.4)] text-[16px] z-10">→</span>
            )}
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))]">{f.from}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))]">→ {f.to}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Промпт-ревью · вставь в Antigravity / Codex / Gemini</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[12px] overflow-y-auto" style={{ maxHeight: "340px" }}>
            <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{reviewPrompt}</pre>
          </div>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[8px] px-[14px] py-[7px] rounded-[8px] text-[12px] font-semibold transition-all"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
            }}
          >
            {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
          </button>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Из моей практики</p>
          {stats.map((s) => (
            <div key={s.value} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
              <p className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-[1]">{s.value}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[4px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
