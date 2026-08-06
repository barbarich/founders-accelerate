import { useIsMobile } from "@/hooks/use-mobile";

const tools = [
  { t: "TrySORO", p: "SEO · пишет и публикует статьи", d: "Сам находит ключевые слова, пишет статьи и выкладывает на сайт - WordPress, Shopify, Webflow и другие. $39/мес. Не теория: используется на Bookswap, статьи уже индексируются." },
  { t: "Otterly", p: "GEO · показывает, цитирует ли тебя ИИ", d: "Проверяет, появляешься ли ты в ответах ChatGPT, Perplexity и других по нужным запросам. Статьи не пишет - показывает, где ты есть, а где нет. От $29/мес." },
];

export default function L16SlideSeoGeoTools() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          SEO и GEO · инструменты
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Два сервиса вместо ручной работы
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Один пишет контент, второй показывает результат. Разные задачи - разные инструменты.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {tools.map((t) => (
            <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline justify-between">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{t.t}</p>
                <p className="text-[8px] font-mono text-[hsl(var(--slide-gold))]">{t.p}</p>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[7px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Бесплатный старт: Google Search Console + HubSpot AEO Grader (бесплатно проверяет видимость в ИИ). Платное подключай, когда увидишь, что канал даёт результат.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        SEO и GEO · инструменты
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px] tracking-[-0.01em]">
        Два сервиса <span className="text-[hsl(var(--slide-gold))]">вместо ручной работы</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1800px]">
        Один пишет контент, второй показывает результат. Разные задачи - разные инструменты.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1900px] mb-[20px]">
        {tools.map((t) => (
          <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-text))]">{t.t}</p>
            <p className="text-[14px] font-mono text-[hsl(var(--slide-gold))] mb-[8px]">{t.p}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{t.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[16px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Бесплатный старт: Google Search Console + HubSpot AEO Grader (бесплатно проверяет видимость в ИИ). Платное подключай, когда увидишь, что канал даёт результат.
        </p>
      </div>
    </div>
  );
}
