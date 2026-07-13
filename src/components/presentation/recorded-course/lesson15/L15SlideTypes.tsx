import { useIsMobile } from "@/hooks/use-mobile";

const types = [
  {
    t: "Channel partnership",
    d: "Партнёр продаёт твой продукт своей аудитории за % с продаж. Affiliate-программа, reseller, agency. Подходит когда у партнёра уже есть твоя ЦА и доверие.",
    ex: "Pieter Levels — affiliate-партнёрства с другими indie hackers. 30-40% с каждой продажи через них.",
  },
  {
    t: "Integration partnership",
    d: "Технологическая интеграция: твой продукт работает внутри/рядом с продуктом партнёра. Marketplace listing, API integration, native plugin.",
    ex: "Notion + Calendly: Calendly показывается прямо в Notion. Оба продукта вырастают за счёт партнёрства.",
  },
  {
    t: "Co-marketing",
    d: "Партнёр и ты совместно создаёте контент: webinar, blog post, e-book, podcast episode. Вы оба продвигаете финальный артефакт своей аудитории.",
    ex: "Mailchimp + Shopify: совместные guide'ы по email-маркетингу для e-commerce. Обмен аудиторией без денег.",
  },
  {
    t: "Referral / White-label",
    d: "Партнёр рекомендует тебя своим клиентам (referral) или продаёт твой продукт под своим брендом (white-label). 2 разных модели монетизации.",
    ex: "Stripe Atlas — это white-label партнёрство Stripe с юридическими и налоговыми фирмами в Delaware.",
  },
];

export default function L15SlideTypes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          4 типа партнёрств
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Какое подходит твоему продукту
        </h2>
        <div className="space-y-[6px]">
          {types.map((t) => (
            <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[10px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px]">{t.t}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[2px]">{t.d}</p>
              <p className="text-[9px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">Пример: {t.ex}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        4 типа партнёрств
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em]">
        Какое подходит твоему продукту
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1900px]">
        {types.map((t) => (
          <div key={t.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[8px]">{t.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">{t.d}</p>
            <p className="text-[14px] italic text-[hsl(var(--slide-gold))] leading-[1.5]">Пример: {t.ex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
