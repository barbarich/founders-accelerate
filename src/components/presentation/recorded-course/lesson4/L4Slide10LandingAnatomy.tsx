import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "Создай лендинг для [название продукта].",
  "",
  "Продукт: [одно предложение — что делает продукт].",
  "Целевая аудитория: [кто покупает].",
  "Формула результата: [Кто] получает [результат] с [продукт], без [боль].",
  "",
  "Структура лендинга:",
  "1. Hero — заголовок из формулы результата, подзаголовок 1-2 предложения, кнопка «[ваш CTA]», скриншот или видео продукта",
  "2. Social proof — лого клиентов или цифра: «[N] пользователей / команд»",
  "3. Боли — 3 проблемы целевой аудитории: «[боль 1]», «[боль 2]», «[боль 3]»",
  "4. Решение — 3 ключевых преимущества продукта со скриншотами",
  "5. Как это работает — 3 шага от проблемы к результату",
  "6. Отзывы — 2-3 цитаты клиентов с именем и результатом",
  "7. CTA-секция — кнопка + усилитель (бесплатный период / гарантия)",
  "8. FAQ — 5 частых возражений и ответы на них",
  "",
  "Стиль: [минималистичный / яркий / корпоративный], [тёмная / светлая тема], как [пример: Stripe / Linear / Notion].",
];

export default function L4Slide10LandingAnatomy() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promptLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Готовый шаблон
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Промпт для Lovable
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px] overflow-y-auto max-h-[65%]">
          <pre className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
            {promptLines.join("\n")}
          </pre>
        </div>
        <button
          onClick={handleCopy}
          className="mt-[8px] flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] active:bg-[hsl(var(--slide-gold)/0.2)]"
        >
          <span className="text-[12px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[9px] text-[hsl(var(--slide-gold))]">
            {copied ? "Скопировано!" : "Скопировать промпт"}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      <div className="flex-1 pr-[60px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Готовый шаблон
        </p>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
          Промпт для Lovable
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[24px]">
          Один промпт — и у вас готовый лендинг со всеми 8 блоками. Замените <span className="text-[hsl(var(--slide-gold))]">[скобки]</span> на свои данные из Встреч&nbsp;1&nbsp;и&nbsp;2.
        </p>
        <button
          onClick={handleCopy}
          className="flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[16px] py-[10px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition-colors cursor-pointer"
        >
          <span className="text-[20px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[16px] text-[hsl(var(--slide-gold))]">
            {copied ? "Скопировано!" : "Скопировать промпт"}
          </span>
        </button>
      </div>

      <div className="w-[580px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] max-h-[80%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[16px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">prompt.txt</span>
        </div>
        <pre className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.65] whitespace-pre-wrap font-mono">
          {promptLines.map((line, i) => {
            if (line === "") return <br key={i} />;
            // Highlight [brackets]
            const parts = line.split(/(\[.*?\])/g);
            return (
              <div key={i}>
                {parts.map((part, j) =>
                  part.startsWith("[") ? (
                    <span key={j} className="text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[3px] rounded">
                      {part}
                    </span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
