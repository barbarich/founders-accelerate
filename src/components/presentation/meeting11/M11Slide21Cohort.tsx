import { useIsMobile } from "@/hooks/use-mobile";

const founders = [
  {
    name: "Laura",
    product: "QA / RA SaaS",
    track: "Full B2B",
    next24h: "Открой Apollo · фильтр Head of QA, 200–2000 emp · сохрани 30 контактов. Вечером: 5 LinkedIn DM с reference на TestCon 2026.",
  },
  {
    name: "Mila",
    product: "Hobbix · D2C для мам",
    track: "Community + ambassadors",
    next24h: "Найди 10 mom-блогерш с 5–50k подписчиков в твоей нише. Каждой DM: «бесплатный доступ + 30% lifetime discount для подписчиков». До конца недели — 3 «да».",
  },
  {
    name: "Lea",
    product: "Default She",
    track: "Pre-launch list · women-in-tech нетворк",
    next24h: "Опубликуй building-in-public пост: «строю Default She для X. Кому интересно стать первым — впиши email». Дистрибутируй по 5 women-in-tech Slack.",
  },
  {
    name: "Dira.click",
    product: "WhatsApp bot для жилья",
    track: "B2B-side на агентства недвижимости",
    next24h: "Найди 20 PropTech meetups в Tel Aviv / Lisbon / Madrid. Зарегистрируйся на 2 ближайших. Сделай LinkedIn-список из 30 head-of-marketing агентств недвижимости.",
  },
  {
    name: "Vlad",
    product: "Без продукта",
    track: "Pre-sales · 5 LOI",
    next24h: "Возьми Pocket prompt #3 (design partner outreach). Заполни под свою гипотезу. Отправь 10 писем. Цель этой недели: 3 ответа «да, давай поговорим».",
  },
];

export default function M11Slide21Cohort() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Когорта · первое действие в 24 часа
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          У каждого — <span className="text-[hsl(var(--slide-gold))]">конкретный шаг завтра</span>
        </h2>
        <div className="space-y-[3px]">
          {founders.map((f) => (
            <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))]">{f.name}</p>
                <p className="text-[7px] text-[hsl(var(--slide-text-muted))]">· {f.product} · {f.track}</p>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">→ {f.next24h}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Когорта · первое действие в 24 часа
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        У каждого — <span className="text-[hsl(var(--slide-gold))]">конкретный шаг завтра</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px]">
        {founders.map((f) => (
          <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[12px]">
            <div className="flex items-baseline gap-[14px] mb-[3px]">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.05em]">{f.name}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text-muted))]">{f.product} · <span className="text-[hsl(var(--slide-gold))]">{f.track}</span></p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.95)] leading-[1.5]">→ {f.next24h}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
