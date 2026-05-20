import { useState } from "react";
import FOM2SlideBase from "./FOM2SlideBase";

const PROMPT = `Действуй как мой потенциальный клиент. Я даю тебе одно предложение — моё позиционирование.
Твоя задача: реагировать честно, как живой человек, который читает это первый раз.

Моё позиционирование:
"[ВСТАВЬ свою формулировку из С1 — одно предложение по формуле «[продукт] помогает [кому] решить [что]»]"

Контекст обо мне (чтобы ты понял, где я в воронке):
- Целевой клиент: [опиши ICP в 1–2 предложениях]
- Главная боль клиента, которую решает продукт: [боль]
- Главный измеримый результат, который получает клиент: [результат + цифра/срок если есть]

Сделай 5 вещей, по очереди:
1. ЧЕСТНАЯ РЕАКЦИЯ за 5 секунд: что ты понял, что не понял, цепляет или нет. Не вежливо — честно.
2. BUZZWORDS И ВОДА: подсвети любые модные слова, абстракции, обобщения ("инновационный", "удобный", "AI-powered", "для бизнеса"). По каждому — почему это пустое для меня как клиента.
3. РЕЗУЛЬТАТ ИЛИ ПРОЦЕСС: формулировка обещает мне конкретный результат — или описывает, что вы делаете? Если процесс — переформулируй в результат.
4. ТЕСТ "А У КОНКУРЕНТА": после прочтения я могу отличить вас от [3 главных конкурента — впиши имена]? Если нет — на чём именно мы сливаемся.
5. ОДИН ВОПРОС: какой самый главный вопрос остался у меня в голове после этой одной строки? То, что я бы спросил, прежде чем кликнуть на сайт.

В конце дай мне 3 альтернативных формулировки, которые проходят все 4 теста выше. Без воды.`;

export default function FOM2Slide06AIQaPrompt() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <FOM2SlideBase
      slide={6}
      eyebrow="AI-as-QA · промпт #1"
      title="Claude / GPT играет клиента"
      subtitle="Прогоняем формулировку из С1 через AI до того, как покажем живому человеку"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[12px] md:gap-[20px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[20px]">
          <div className="flex items-center justify-between gap-[10px] mb-[6px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
              AI-as-QA для позиционирования
            </p>
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onClick={handleCopy}
              className="shrink-0 px-[10px] md:px-[16px] py-[4px] md:py-[8px] rounded-[6px] font-semibold text-[10px] md:text-[14px] transition-all"
              style={{
                background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
                color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
                border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
              }}
            >
              {copied ? "✓ Скопировано" : "📋 Копировать"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap font-mono text-[hsl(var(--slide-text)/0.9)] text-[9px] md:text-[13px] leading-[1.45] max-h-[220px] md:max-h-[480px] overflow-auto pr-[6px] prompt-scroll">
{PROMPT}
          </pre>
        </div>

        <div className="space-y-[8px] md:space-y-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Зачем</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Живой клиент скажет «нормально» из вежливости. AI не вежлив — он подсветит buzzwords, обобщения, отсутствие отличия от конкурента. Это бесплатная QA до того, как тратите чужое время.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Где запускать</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Claude (claude.ai) или ChatGPT-5 в режиме reasoning. Дайте контекст ICP и конкурентов — без этого ответ будет общий.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что НЕ делает</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              AI не заменит реальные интервью. Это первый фильтр — не последний. После AI-QA → 3 живых человека из ICP, 5 секунд на чтение, вопрос «о чём это?».
            </p>
          </div>
        </div>
      </div>
    </FOM2SlideBase>
  );
}
