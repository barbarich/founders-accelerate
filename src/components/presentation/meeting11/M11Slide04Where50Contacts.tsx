import { useIsMobile } from "@/hooks/use-mobile";

const sources = [
  { src: "LinkedIn Sales Navigator", how: "Saved Search по ICP-фильтрам · 25 контактов / 30 мин", cost: "$99/мес" },
  { src: "Apollo.io", how: "Filter по role + signals (hiring, funding) · 30 контактов / 20 мин", cost: "Free до 50 / мес" },
  { src: "Reddit", how: "Топ-50 commenters в /r/[твоя ниша] за 90 дней · 15 контактов / 40 мин", cost: "Free" },
  { src: "Подкасты в нише", how: "5 подкастов × 10 последних гостей = 50 имён · 30 мин", cost: "Free" },
  { src: "Slack/Discord-сообщества", how: "2 нишевых сообщества · #intro канал + active members · 20 контактов / 30 мин", cost: "Free / $99 за паблики" },
  { src: "Twitter / X advanced search", how: "Кто писал про твою боль за 60 дней · 20 контактов / 30 мин", cost: "Free" },
  { src: "Speaker lists прошлых конференций", how: "Скачай speakers list прошлого Web Summit / SaaStr · 50 имён в твоей нише · 20 мин", cost: "Free" },
];

export default function M11Slide04Where50Contacts() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Где брать контакты
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          50 целевых контактов за <span className="text-[hsl(var(--slide-gold))]">2 часа</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          7 источников. Не нужно платить $500/мес за лиды. Всё, что ты получаешь от SDR-агентств, можно сделать руками за вечер — и качество будет выше.
        </p>
        <div className="space-y-[3px]">
          {sources.map((s) => (
            <div key={s.src} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.25)] rounded-[5px] px-[8px] py-[4px]">
              <div className="flex items-baseline justify-between gap-[4px] mb-[1px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{s.src}</p>
                <p className="text-[7px] text-[hsl(var(--slide-gold))]">{s.cost}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.how}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Где брать контакты сегодня
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        50 целевых контактов за <span className="text-[hsl(var(--slide-gold))]">2 часа</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1600px] leading-[1.45]">
        7 источников. Не нужно платить $500/мес за лиды от SDR-агентства. Всё это руками — за вечер. Качество выше, потому что фильтруешь сам.
      </p>
      <div className="grid grid-cols-2 gap-x-[28px] gap-y-[10px] max-w-[1700px]">
        {sources.map((s) => (
          <div key={s.src} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[14px]">
            <div className="flex items-baseline justify-between gap-[10px] mb-[4px]">
              <p className="text-[20px] font-bold text-[hsl(var(--slide-text))]">{s.src}</p>
              <p className="text-[14px] text-[hsl(var(--slide-gold))] font-semibold">{s.cost}</p>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.how}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
