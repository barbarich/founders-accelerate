import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function L2SlideCustdevPrompt() {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();

  const prompt = `Ты - эксперт по customer development по методологии The Mom Test. Сгенерируй вопросы для интервью.

МОЯ ГИПОТЕЗА: [сегмент] испытывает [боль] в контексте [ситуация] и готов платить за [решение]
ПРОДУКТ / ИДЕЯ: [1-2 предложения]
С КЕМ ГОВОРЮ: [должность или описание сегмента]

Сделай 12-15 вопросов по правилам:
- Только про реальный прошлый опыт и поведение. Гипотетику типа «Купили бы?» - запрещено.
- Открытые, без наводящих и без упоминания моего решения.
- Копай в боль: как решают сейчас, сколько времени и денег тратят, что уже пробовали.
- Выясни бюджет и кто принимает решение о покупке.
- Порядок: разогрев → контекст → боль → текущее решение → готовность платить → рефералы.

ФОРМАТ ВЫВОДА:
- Пронумерованный список, сгруппированный по блокам.
- Под каждым вопросом одной строкой - что он проверяет.
- В конце: 3 фразы-перехода, чтобы разговорить собеседника, и список red flags, на которых я могу сбиться (наводящие вопросы, питч идеи).`;

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const principles = [
    { label: "The Mom Test", desc: "вопросы про прошлое, не про «купили бы»" },
    { label: "Контекст", desc: "гипотеза + продукт + сегмент" },
    { label: "Готовый формат", desc: "блоки + что проверяет каждый вопрос" },
    { label: "Минимум ручной работы", desc: "правишь, а не пишешь с нуля" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Промпт · вопросы для кастдева</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Сгенерируй вопросы за 1 минуту
        </h2>
        <div className="flex flex-wrap gap-[4px] mb-[8px]">
          {principles.map((p, i) => (
            <span key={i} className="text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-full px-[7px] py-[2px]">
              {p.label}
            </span>
          ))}
        </div>
        <div className="prompt-scroll bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[10px] overflow-y-auto max-h-[200px] mb-[8px]">
          <pre className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] whitespace-pre-wrap font-mono">{prompt}</pre>
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
        Промпт · вопросы для кастдев-интервью
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px]">
        Сгенерируй вопросы за минуту - по лучшим практикам
      </h2>
      <div className="grid grid-cols-[1.5fr_1fr] gap-[32px] items-start">
        <div className="prompt-scroll bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[24px] overflow-y-auto max-h-[460px]">
          <pre className="text-[14.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.6] whitespace-pre-wrap font-mono">{prompt}</pre>
        </div>
        <div className="flex flex-col gap-[14px]">
          <p className="text-[19px] font-semibold text-[hsl(var(--slide-text))]">Почему этот промпт работает:</p>
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
