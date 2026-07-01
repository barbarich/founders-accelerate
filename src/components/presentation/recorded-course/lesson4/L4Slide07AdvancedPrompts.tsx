import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const PROMPT = `Ты - продуктовый дизайнер и фронтенд-инженер. Собери кликабельный прототип моего продукта.

Продукт: [ВСТАВЬ: название + одно предложение, что он делает]
Для кого: [ВСТАВЬ: кто пользователь - роль, ситуация, где болит]
Задача: [ВСТАВЬ: что человек хочет сделать - словами из custdev]
Точка ценности: [ВСТАВЬ: экран или действие, где польза очевидна]

Собери так:
1. Предложи 3-5 экранов, которые ведут от входа к результату
2. Сделай первый экран полностью - реальные тексты, не заглушки
3. Дальше по одному экрану, каждый рабочий и кликабельный

Правила:
- Единый стиль на всех экранах: цвета, шрифты, кнопки, отступы
- Главный сценарий работает от начала до конца, без "coming soon"
- Текст на языке пользователя, а не через фичи

Потом проверь сам:
- За 10 секунд на первом экране ясно, что это, кому и зачем?
- Пройди путь как пользователь - где непонятно или где затык?
- Выпиши 3 правки и внеси их.`;

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
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Один промпт</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Промпт, который собирает прототип
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[10px]">
          Работает в Lovable, Claude Design или Codex. Заполни [скобки] своими данными.
        </p>
        <div className="relative bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[10px] py-[8px]">
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); copy(); }}
            className="absolute top-[6px] right-[6px] text-[8px] px-[8px] py-[3px] rounded-full bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-semibold cursor-pointer select-none"
          >
            {copied ? "Скопировано" : "Копировать"}
          </span>
          <pre className="text-[8px] text-[hsl(var(--slide-gold))] font-mono leading-[1.5] whitespace-pre-wrap break-words max-h-[300px] overflow-y-auto pr-[2px]">
            {PROMPT}
          </pre>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[8px]">
          Один промпт вместо десяти: задаёт AI роль, контекст и критерий готовности сразу - прототип выходит цельным, а не набором несвязанных экранов.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Один промпт</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Промпт, который собирает прототип
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px]">
        Работает в <span className="text-[hsl(var(--slide-text))]">Lovable</span>, <span className="text-[hsl(var(--slide-text))]">Claude Design</span> или <span className="text-[hsl(var(--slide-text))]">Codex</span>. Заполни [скобки] своими данными из Встреч 1 и 2.
      </p>

      <div className="grid grid-cols-[1fr_320px] gap-[28px] max-w-[1300px] items-start">
        <div className="relative bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[20px]">
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); copy(); }}
            className="absolute top-[14px] right-[14px] text-[13px] px-[16px] py-[6px] rounded-full bg-[hsl(var(--slide-gold))] text-[hsl(var(--slide-bg))] font-semibold hover:opacity-90 transition-opacity cursor-pointer select-none"
          >
            {copied ? "Скопировано ✓" : "Копировать"}
          </span>
          <pre className="text-[14.5px] text-[hsl(var(--slide-gold))] font-mono leading-[1.6] whitespace-pre-wrap break-words max-h-[440px] overflow-y-auto pr-[80px]">
            {PROMPT}
          </pre>
        </div>

        <div className="space-y-[16px] pt-[4px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <p className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-semibold mb-[8px]">Почему один, а не десять</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Промпт задаёт AI роль, контекст и критерий готовности сразу - поэтому прототип выходит цельным, а не набором несвязанных экранов.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[16px]">
            <p className="text-[13px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-semibold mb-[8px]">Секрет в конце</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Блок «проверь сам» заставляет AI пройти прототип глазами пользователя и назвать, что непонятно - это и есть шаг «доработай».
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
