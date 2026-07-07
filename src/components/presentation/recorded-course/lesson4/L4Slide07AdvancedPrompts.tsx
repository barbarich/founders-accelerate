import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const PROMPT = `Ты - продуктовый дизайнер. Собери ТОЛЬКО первый экран моего продукта - тот, где польза видна сразу.

Продукт: [ВСТАВЬ: название + одно предложение]
Пользователь: [ВСТАВЬ: кто он и где болит]
Экран ценности: [ВСТАВЬ: что человек видит и делает]

Правила:
- Один экран, реальные тексты, без заглушек и «coming soon»
- Ничего лишнего сверх этого экрана
- Запомни стиль - его переиспользуем на следующих экранах`;

const cycle = [
  { n: "1", t: "Опиши один шаг", d: "один экран или действие" },
  { n: "2", t: "Посмотри", d: "пройди глазами пользователя" },
  { n: "3", t: "Поправь", d: "одна правка за раз" },
  { n: "4", t: "Дальше", d: "работает - бери следующий экран" },
];

const followups = [
  "«Сделай кнопку [X] рабочей → собери следующий экран тем же стилем»",
  "«Пройди поток как пользователь. Назови 3 затыка и исправь»",
];

export default function L4Slide07AdvancedPrompts() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PROMPT;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch { /* noop */ }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Как собирать</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Собирай по одному экрану, не всё сразу
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Промпт «собери весь продукт» даёт кашу, которую не поправить. Расти прототип по одному экрану.
        </p>
        <div className="relative bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[10px] py-[8px] mb-[8px]">
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); copy(); }}
            className="absolute top-[6px] right-[6px] text-[8px] px-[8px] py-[3px] rounded-full bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-semibold cursor-pointer select-none"
          >
            {copied ? "Скопировано" : "Копировать"}
          </span>
          <p className="text-[8px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Стартовый промпт</p>
          <pre className="text-[8px] text-[hsl(var(--slide-gold))] font-mono leading-[1.5] whitespace-pre-wrap break-words max-h-[190px] overflow-y-auto pr-[2px]">
            {PROMPT}
          </pre>
        </div>
        <div className="flex gap-[4px] mb-[8px]">
          {cycle.map((c, i) => (
            <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[6px] py-[5px] text-center">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] block">{c.n}</span>
              <span className="text-[9px] font-semibold text-[hsl(var(--slide-text))] block leading-[1.15]">{c.t}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
          <span className="text-[hsl(var(--slide-gold))]">Чем собрать:</span> Lovable · Claude Design · Codex
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Как собирать</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Собирай по одному экрану, не всё сразу
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1150px] leading-[1.4]">
        Промпт «собери весь продукт» даёт кашу, которую не поправить. Расти прототип по одному экрану - каждый доведён, прежде чем брать следующий.
      </p>

      <div className="grid grid-cols-[1fr_400px] gap-[28px] max-w-[1300px] items-start">
        <div className="relative bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px]">
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); copy(); }}
            className="absolute top-[14px] right-[14px] text-[13px] px-[16px] py-[6px] rounded-full bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-semibold hover:opacity-90 transition-opacity cursor-pointer select-none"
          >
            {copied ? "Скопировано ✓" : "Копировать"}
          </span>
          <p className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-semibold mb-[10px]">Стартовый промпт · только первый экран</p>
          <pre className="text-[14.5px] text-[hsl(var(--slide-gold))] font-mono leading-[1.6] whitespace-pre-wrap break-words max-h-[360px] overflow-y-auto pr-[80px]">
            {PROMPT}
          </pre>
        </div>

        <div className="space-y-[14px] pt-[2px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <p className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-semibold mb-[12px]">Цикл сборки</p>
            <div className="space-y-[9px]">
              {cycle.map((c, i) => (
                <div key={i} className="flex items-baseline gap-[10px]">
                  <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] w-[16px] shrink-0">{c.n}</span>
                  <span className="text-[16px] font-semibold text-[hsl(var(--slide-text))]">{c.t}</span>
                  <span className="text-[14px] text-[hsl(var(--slide-text-muted))]">- {c.d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <p className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-semibold mb-[10px]">Дальше - этими промптами</p>
            <div className="space-y-[8px]">
              {followups.map((f, i) => (
                <p key={i} className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{f}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[10px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[12px]">
            <span className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-semibold shrink-0">Чем собрать</span>
            <span className="text-[15px] text-[hsl(var(--slide-text))]">Lovable · Claude Design · Codex</span>
          </div>
        </div>
      </div>
    </div>
  );
}
