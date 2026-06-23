import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide08DeepResearchPrompt() {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const prompt = `Ты - аналитик рынка. Сделай глубокое исследование ниши для моего продукта.

МОЙ ПРОДУКТ: [опиши в 1-2 предложениях: что делает, для кого]
РЫНОК / ГЕОГРАФИЯ: [например: B2B SaaS, англоязычный рынок]

Изучи и собери отчёт по пунктам:
1. ТОП-10 конкурентов: название, сайт, цена, для кого, ключевое отличие.
2. Слабые места конкурентов: повторяющиеся жалобы из отзывов (Reddit, G2, Trustpilot, App Store) - сгруппируй по болям.
3. Размер и динамика рынка: объём, рост, тренды - с цифрами и годами.
4. Кто платит: должность, размер компании, примерный бюджет.
5. 5 углов отстройки: как мне отличаться от существующих игроков.

ТРЕБОВАНИЯ К ОТЧЁТУ:
- Каждый факт - со ссылкой на источник.
- Где данных нет или они противоречивы - честно напиши об этом.
- В конце: 3 главных вывода и что проверить лично.`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const principles = [
    { label: "Роль", desc: "«Ты - аналитик рынка»" },
    { label: "Контекст", desc: "продукт + рынок" },
    { label: "Структура", desc: "пункты, а не каша" },
    { label: "Источники", desc: "ссылка на каждый факт" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Промпт для Deep Research</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Как написать хороший запрос
        </h2>
        <div className="flex flex-wrap gap-[4px] mb-[8px]">
          {principles.map((p, i) => (
            <span key={i} className="text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-full px-[7px] py-[2px]">
              {p.label}
            </span>
          ))}
        </div>
        <div className="prompt-scroll bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[10px] overflow-y-auto max-h-[180px] mb-[8px]">
          <pre className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] whitespace-pre-wrap font-mono">{prompt}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="px-[14px] py-[8px] rounded-[6px] font-semibold text-[11px] transition-all duration-200"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано!" : "📋 Копировать промпт"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Промпт для Deep Research
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Как написать запрос, который даст качественный отчёт
      </h2>
      <div className="grid grid-cols-[1.4fr_1fr] gap-[32px] items-start">
        <div className="prompt-scroll bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px] overflow-y-auto max-h-[440px]">
          <pre className="text-[15px] text-[hsl(var(--slide-text)/0.9)] leading-[1.65] whitespace-pre-wrap font-mono">{prompt}</pre>
        </div>
        <div className="flex flex-col gap-[14px]">
          <p className="text-[19px] font-semibold text-[hsl(var(--slide-text))]">4 вещи, без которых запрос слабый:</p>
          {principles.map((p, i) => (
            <div key={i} className="flex items-start gap-[12px]">
              <span className="font-mono text-[14px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 font-bold">
                {i + 1}
              </span>
              <div>
                <span className="text-[18px] font-semibold text-[hsl(var(--slide-text))]">{p.label}</span>
                <span className="text-[16px] text-[hsl(var(--slide-text-muted))] ml-[6px]">— {p.desc}</span>
              </div>
            </div>
          ))}
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="mt-[8px] px-[24px] py-[14px] rounded-[10px] font-semibold text-[18px] transition-all duration-200"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
            }}
          >
            {copied ? "✓ Скопировано!" : "📋 Копировать промпт"}
          </button>
        </div>
      </div>
    </div>
  );
}
