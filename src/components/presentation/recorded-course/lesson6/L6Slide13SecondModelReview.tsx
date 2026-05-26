import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const reviewPrompt = `Тебе передают план реализации, сделанный другой моделью (Claude Opus).
Не выполняй план. Только ревьюй.

Проверь по этим критериям:

1. БЕЗОПАСНОСТЬ
   - SQL injection / XSS / CSRF
   - Утечки секретов в логах
   - Open endpoints без auth
   - RLS политики на всех таблицах
   - Rate limiting

2. ЛОГИКА И КРАЙНИЕ СЛУЧАИ
   - Пустой ввод, null, undefined
   - Race conditions при параллельных запросах
   - Откат при частичном фейле миграции
   - Двойная оплата / дубликаты записей

3. ПРОИЗВОДИТЕЛЬНОСТЬ
   - N+1 запросы
   - Отсутствие индексов на FK
   - Synchronous heavy work, который должен быть в очереди
   - Кэширование пропущено

4. UX / ERROR HANDLING
   - Loading state на каждой кнопке
   - Empty state на каждом списке
   - Сообщения об ошибках понятные user-у (не stack trace)

5. РАЗВЁРТЫВАНИЕ
   - env переменные документированы
   - Миграции forward-only / есть rollback
   - CI прогоняет typecheck + tests

Выход: список найденных проблем, сгруппированных по разделам.
Для каждой — severity (critical / high / medium / low) и предложение фикса.

Не выдумывай проблем. Только то что реально нашёл.`;

const flow = [
  { from: "Claude Opus", arrow: "→", to: "План v1" },
  { from: "Claude себе", arrow: "↓", to: "Self-review v1.1" },
  { from: "Codex / Antigravity", arrow: "→", to: "Review v2" },
  { from: "Возврат в Claude", arrow: "↓", to: "План v2 финал" },
];

const stats = [
  { value: "67%", label: "багов поймал second-model review до прода (среднее по моим Mikey-PR-ам за 3 мес)" },
  { value: "12 мин", label: "среднее время на second-model review одного плана" },
  { value: "2-4 ×", label: "стоимость одной операции (две модели), но дешевле любого hotfix в проде" },
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
          Second-model review pattern
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Claude план → Codex review → итерация
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Другая модель = другой натренированный distribution. Ловит то, что первая пропустила.
        </p>
        <div className="grid grid-cols-2 gap-[3px] mb-[4px]">
          {flow.map((f) => (
            <div key={f.from} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[5px] py-[2px]">
              <p className="text-[6.5px] text-[hsl(var(--slide-gold))] font-bold leading-[1.2]">{f.from}</p>
              <p className="text-[5.5px] text-[hsl(var(--slide-text-muted))]">{f.arrow} {f.to}</p>
            </div>
          ))}
        </div>
        <p className="text-[7.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Review-промпт для Codex / Antigravity</p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[3px]" style={{ maxHeight: "42%" }}>
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
          {copied ? "✓ Скопировано" : "📋 Скопировать промпт"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Second-model review pattern
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Claude план → <span className="text-[hsl(var(--slide-gold))]">Codex review</span> → итерация
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[14px] max-w-[1500px] leading-[1.45]">
        Другая модель = другой натренированный distribution. То, что Claude считает «нормально» — Codex/Antigravity/Gemini могут увидеть как риск. Это лучшая дешёвая страховка от прод-багов.
      </p>

      <div className="grid grid-cols-4 gap-[10px] max-w-[1700px] mb-[14px]">
        {flow.map((f, i) => (
          <div key={f.from} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[14px] py-[8px] relative">
            {i < flow.length - 1 && (
              <span className="absolute -right-[8px] top-[18px] text-[hsl(var(--slide-gold)/0.4)] text-[16px] z-10">→</span>
            )}
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))]">{f.from}</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))]">{f.arrow} {f.to}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] gap-[20px] max-w-[1700px]">
        <div>
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[8px]">Review-промпт · paste в Codex / Antigravity / Gemini</p>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[18px] py-[12px] overflow-y-auto" style={{ maxHeight: "340px" }}>
            <pre className="text-[11.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{reviewPrompt}</pre>
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
            {copied ? "✓ Скопировано в буфер" : "📋 Скопировать промпт"}
          </button>
        </div>

        <div className="flex flex-col gap-[10px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Цифры из моей практики</p>
          {stats.map((s) => (
            <div key={s.value} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[14px] py-[10px]">
              <p className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-[1]">{s.value}</p>
              <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[4px]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
