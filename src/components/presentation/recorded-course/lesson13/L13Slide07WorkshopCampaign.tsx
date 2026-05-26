import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "01",
    t: "business.facebook.com",
    body: "Открываем Business Manager. Проверяем карту: Pages → Pixels → Ad Accounts → People. Если чего-то нет — добавляем сейчас.",
  },
  {
    n: "02",
    t: "Events Manager · пиксель живой?",
    body: "Смотрим события за последние 24 часа. Видим PageView / Lead / Purchase — двигаемся. Не видим — Test Events + Chrome Pixel Helper, чиним до Ads Manager.",
  },
  {
    n: "03",
    t: "Ads Manager → Create",
    body: "Buying type: Auction. Имя кампании по правилу: [Objective]_[Audience]_[Date] — например, Sales_Broad_18May.",
  },
  {
    n: "04",
    t: "Objective · выбираем осознанно",
    body: "Sales — если на сайте есть покупка. Leads — если собираем email. Engagement — только если событий пока нет вообще.",
  },
  {
    n: "05",
    t: "Advantage+ Shopping vs Manual",
    body: "Сегодня показываю Manual sales — больше контроля для первого запуска. Advantage+ Shopping Campaign обсудим, когда наберём 50+ конверсий.",
  },
  {
    n: "06",
    t: "Special Ad Category",
    body: "Включаем, если product = жильё, кредит, работа, политика. Note для WhatsApp-бот аренды: housing — обязательно. Иначе Meta заблокирует кампанию.",
  },
];

export default function L13Slide07WorkshopCampaign() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          🔴 Воркшоп · Шаг 1 · Campaign
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          От Business Manager <span className="text-[hsl(var(--slide-gold))]">до названия кампании</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Шарю экран. Открываю свой кабинет Mikey / MetaMinder. Ты повторяешь у себя где можешь.
        </p>
        <div className="grid grid-cols-2 gap-[4px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        🔴 Воркшоп · Шаг 1 · Business Manager → Campaign
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        От Business Manager <span className="text-[hsl(var(--slide-gold))]">до названия кампании</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1700px]">
        Шарю экран. Открываю свой кабинет Mikey / MetaMinder. Ты повторяешь у себя где можешь — параллельно.
      </p>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[22px] py-[16px]">
            <div className="flex items-baseline gap-[10px] mb-[6px]">
              <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}</span>
            </div>
            <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[38px]">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
