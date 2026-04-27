import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

const PROMPT_BODY = `Ты — UX-аудитор онбординга. Я даю тебе описание первой сессии моего продукта (или скриншоты экранов в порядке прохождения).

Контекст:
- Продукт: [название + одна фраза, что делает]
- Целевой юзер: [кто, какую задачу решает]
- Aha-момент, к которому веду: [конкретное действие + признание ценности]
- Как сейчас выглядит первая сессия: [последовательность экранов 1, 2, 3...; что юзер видит и что должен сделать на каждом]
- Что говорят/делают реальные юзеры: [drop-off на каком шаге, цитаты, чего не понимают]

Твоя задача — пройти по сессии глазами незнакомого юзера и вернуть мне:

1. КАРТА ТРЕНИЯ. Для каждого экрана/шага укажи:
   - Тип трения по шкале: когнитивное / интерфейсное / эмоциональное / контекстное / доверия
   - Что конкретно вызывает трение (одно предложение)
   - Маркер, по которому это видно в записи экрана
   - Severity 1–5 (1 = досадно, 5 = здесь юзер уходит)

2. AHA-АУДИТ. Сравни мою заявленную Aha с тем, что реально происходит в сессии:
   - Доходит ли юзер до Aha вообще?
   - Понимает ли он, что Aha произошёл?
   - Понимает ли, как повторить?

3. 3 КОНКРЕТНЫХ ПРАВКИ. Каждая — формат:
   - Что: [конкретное изменение, не «улучшить»]
   - Где: [экран/элемент]
   - Effort: S (1–4 ч) / M (1 день) / L (>1 день)
   - Ожидаемый Impact: [какая метрика и насколько изменится]
   - Гипотеза, почему сработает

4. ЧЕГО НЕ ХВАТАЕТ В МОЁМ ОПИСАНИИ. Какие вопросы ты задал бы, чтобы аудит был точнее.

Жёсткие правила:
- Не предлагай «переделать onboarding» или «упростить UX». Только конкретика.
- Не пиши общие best practices. Только привязанные к моему продукту.
- Если по описанию не можешь сказать — пиши «не могу сказать без [X]», а не выдумывай.
- Если видишь anti-pattern (пустой dashboard, регистрация до value, длинный wizard, generic email) — назови его явно.

Сначала задай мне 3–5 уточняющих вопросов, если в моём описании что-то критично не хватает. Потом выдай аудит.`;

export default function M7Slide09cAuditPrompt() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const onCopy = async (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(PROMPT_BODY);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = PROMPT_BODY;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Промпт сегодняшней встречи</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[3px]">
          Friction-audit prompt
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Готовый промпт для GPT-5 / Claude. Вставляешь, заполняешь [плейсхолдеры], получаешь карту трения + 3 правки. Применяй ко всему — не только сегодня.
        </p>
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[6px] mb-[5px] flex-1 min-h-0 flex flex-col">
          <div className="flex items-center justify-between mb-[3px] gap-[6px]">
            <p className="text-[7.5px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] leading-[1.2] flex-1">UX FRICTION AUDIT · v1</p>
            <div
              role="button"
              tabIndex={0}
              onClick={onCopy}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onCopy(e); }}
              className="shrink-0 flex items-center gap-[3px] text-[7.5px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[6px] py-[3px] rounded-[4px] cursor-pointer select-none"
            >
              {copied ? <Check size={9} /> : <Copy size={9} />}
              {copied ? "Скопировано" : "Копировать"}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[4px]">
            <p className="font-mono text-[6.5px] text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{PROMPT_BODY}</p>
          </div>
        </div>
        <p className="text-[7.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Лучше всего работает с Claude Sonnet и GPT-5. Если есть скриншоты — прикрепляй, мультимодальные модели читают экраны.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col px-[80px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Промпт сегодняшней встречи</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Friction-audit prompt
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        Готовый промпт для GPT-5 / Claude. Вставляешь, заполняешь [плейсхолдеры], получаешь карту трения + Aha-аудит + 3 правки с effort и impact. Применяй на каждой итерации — не только сегодня.
      </p>

      <div className="grid grid-cols-[1fr_320px] gap-[24px] flex-1 min-h-0">
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.35)] rounded-[12px] px-[24px] py-[18px] flex flex-col min-h-0">
          <div className="flex items-start justify-between gap-[16px] mb-[10px] pb-[10px] border-b border-[hsl(var(--slide-border)/0.25)]">
            <p className="text-[13px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] leading-[1.3] flex-1">UX FRICTION AUDIT · v1</p>
            <div
              role="button"
              tabIndex={0}
              onClick={onCopy}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onCopy(e); }}
              className="shrink-0 flex items-center gap-[6px] text-[13px] font-semibold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] hover:bg-[hsl(var(--slide-gold)/0.25)] px-[12px] py-[6px] rounded-[6px] cursor-pointer select-none"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Скопировано" : "Копировать промпт"}
            </div>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto pr-[10px]">
            <p className="font-mono text-[12.5px] text-[hsl(var(--slide-text))] leading-[1.6] whitespace-pre-wrap">{PROMPT_BODY}</p>
          </div>
        </div>

        <div className="space-y-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[18px] py-[14px]">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Где запускать</p>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Claude Sonnet 4.5 или GPT-5. Со скриншотами — Gemini 2.5 Pro тоже хорош.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[18px] py-[14px]">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Что прикладывать</p>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Скриншоты экранов первой сессии в порядке прохождения. Цитаты юзеров. Скриншот PostHog funnel — если есть.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[18px] py-[14px]">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Когда использовать</p>
            <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45]">
              Перед каждой итерацией onboarding. После каждых 5 новых юзеров. Перед демо-днём — обязательно.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
