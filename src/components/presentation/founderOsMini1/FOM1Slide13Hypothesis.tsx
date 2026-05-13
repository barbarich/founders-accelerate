import { useState } from "react";
import FOM1SlideBase from "./FOM1SlideBase";

const PROMPT = `Действуй как senior product/market analyst. Сделай Deep Research по продукту:
[опиши свой продукт в 2 предложениях] для аудитории [конкретный ICP].

Верни структурированный отчёт:
1. 10–15 конкурентов: 3–5 прямых, 3–5 косвенных, 2–3 «замены» (Excel, ручной процесс, ChatGPT-промпт). По каждому: сайт, в одном предложении что делают, для кого.
2. Pricing у каждого: модель (subscription / per-seat / usage / one-time), цена начального тарифа, что входит.
3. Ключевые фичи и юзкейсы, заявленные на их лендингах.
4. Флоу продажи: self-serve / demo / sales call. Есть ли free trial / freemium.
5. Слабые места: 3 самые частые жалобы клиентов с Reddit, G2, Trustpilot, App Store. Дай ссылки.
6. Откуда берут трафик (если знаешь): SEO, paid, контент, комьюнити.
7. Где у этой категории «empty space»: какой сегмент / use case никто из них не закрывает.

Все факты — со ссылками на источники. Если данных нет — пиши «не нашёл», не выдумывай.`;

export default function FOM1Slide13Hypothesis() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <FOM1SlideBase
      slide={14}
      eyebrow="Инструменты ресёрча"
      title="Perplexity Deep Research + SimilarWeb"
      subtitle="Один промпт = карта рынка за 5 минут вместо недели"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-[12px] md:gap-[20px] max-w-[1800px] text-[11px] md:text-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[20px]">
          <div className="flex items-center justify-between gap-[10px] mb-[6px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
              Промпт для Deep Research
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
          <pre className="whitespace-pre-wrap font-mono text-[hsl(var(--slide-text)/0.9)] text-[9px] md:text-[14px] leading-[1.45]">
{PROMPT}
          </pre>
          <p className="mt-[6px] text-[hsl(var(--slide-text-muted))] text-[10px] md:text-[14px]">
            Запускать в Perplexity Pro → Deep Research, либо в ChatGPT/Claude с включённым web-поиском.
          </p>
        </div>

        <div className="space-y-[8px] md:space-y-[14px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">SimilarWeb</p>
            <p className="mt-[4px] text-[hsl(var(--slide-text))]">
              Бесплатный анализ трафика любого сайта: сколько визитов, откуда (поиск / соцсети / реклама), какие страны, какие ключевые запросы.
            </p>
            <p className="mt-[4px] text-[hsl(var(--slide-text-muted))]">
              Ответ на «работает ли вообще их канал» и «есть ли там спрос».
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что копать руками после AI</p>
            <ul className="mt-[4px] text-[hsl(var(--slide-text))] space-y-[2px]">
              <li>· Сайт и приложение конкурента — пройти как клиент</li>
              <li>· Записаться на демо у 1–2 прямых</li>
              <li>· Pricing: модель и цена → решить, ваша будет такая же или другая и почему</li>
              <li>· Юзкейсы и кейсы клиентов на лендинге</li>
              <li>· 5 негативных отзывов на каждого — там ваши точки входа</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[11px] md:text-[20px]">
        <p>💡 Цель ресёрча — не «найти, чем мы лучше». Цель — понять, что у конкурентов уже работает, и что из этого взять себе, а что сделать иначе под свой ICP.</p>
      </div>
    </FOM1SlideBase>
  );
}
