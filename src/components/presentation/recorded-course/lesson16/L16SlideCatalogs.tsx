import { useIsMobile } from "@/hooks/use-mobile";

const works = [
  { t: "Chrome Web Store", d: "Единственный, где соло-разработчики стабильно зарабатывают: $100-500/мес к первому году при 1-5 тысячах активных. Но расширение тут - сам продукт, а не витрина." },
  { t: "HubSpot, Slack", d: "Если продукт B2B и живёт рядом с их работой. Листинг и сертификация бесплатны, конкурентов в разы меньше, чем в Shopify." },
];

const later = [
  { t: "Zapier, Make, n8n", d: "Это удержание, а не привлечение. Делаешь, когда действующие клиенты просят - чтобы не ушли." },
  { t: "Каталог коннекторов Claude", d: "Знак доверия при продаже, не источник клиентов. Подача требует платного Team-аккаунта, рейтингов и биллинга там нет." },
  { t: "Приложения в ChatGPT", d: "Аудитория огромная, но продавать подписки и цифровые товары внутри пока нельзя - только уводить на свой сайт. Заходить ради опциона, не ради выручки." },
];

export default function L16SlideCatalogs() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Каталоги и встраивание
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Усилитель тяги, а не её источник
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Ни один каталог не приведёт первого платящего тому, у кого их ноль. Встраиваться имеет смысл, когда продажи уже пошли.
        </p>
        <p className="text-[8.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Где реально бывают деньги</p>
        <div className="space-y-[4px] mb-[6px]">
          {works.map((w) => (
            <div key={w.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.05)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{w.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{w.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] font-bold mb-[3px]">Потом, когда есть клиенты</p>
        <div className="space-y-[4px]">
          {later.map((l) => (
            <div key={l.t} className="border-l-2 border-[hsl(var(--slide-border)/0.5)] pl-[8px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text)/0.9)]">{l.t}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.7)] leading-[1.35]">{l.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Каталоги и встраивание
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Усилитель тяги, <span className="text-[hsl(var(--slide-gold))]">а не её источник</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Ни один каталог не приведёт первого платящего тому, у кого их ноль. Встраиваться имеет смысл, когда продажи уже пошли.
      </p>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1900px]">
        <div>
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Где реально бывают деньги</p>
          <div className="space-y-[10px]">
            {works.map((w) => (
              <div key={w.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[14px] bg-[hsl(var(--slide-gold)/0.05)]">
                <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[4px]">{w.t}</p>
                <p className="text-[15px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[15px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">Потом, когда есть клиенты</p>
          <div className="space-y-[9px]">
            {later.map((l) => (
              <div key={l.t} className="border-l-[3px] border-[hsl(var(--slide-border)/0.5)] pl-[16px]">
                <p className="text-[17px] font-bold text-[hsl(var(--slide-text)/0.9)] mb-[2px]">{l.t}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text)/0.7)] leading-[1.4]">{l.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
