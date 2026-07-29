import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    n: "01",
    t: "Ads Manager → Create",
    body: "Buying type: Auction. Имя кампании по правилу [Objective]_[Audience]_[Дата] - например Sales_Broad_29Jul. Через месяц ты не вспомнишь, что было в «Кампания 3».",
  },
  {
    n: "02",
    t: "Objective · выбираем осознанно",
    body: "Sales - если покупка происходит на сайте. Leads - если собираешь контакты и закрываешь голосом. Engagement - только если событий на пикселе пока нет вообще.",
  },
  {
    n: "03",
    t: "Manual, а не Advantage+ Shopping",
    body: "Показываю ручную настройку: на первом запуске тебе нужен контроль и понимание, что где лежит. Advantage+ Shopping имеет смысл, когда уже набрал 50+ конверсий в неделю.",
  },
  {
    n: "04",
    t: "Special Ad Category",
    body: "Включаешь, если продукт про жильё, кредиты и финансы, работу, политику или медицину. Не включил - Meta заблокирует кампанию, а иногда и аккаунт. Взамен теряешь часть настроек таргетинга - это нормально.",
  },
];

export default function L12SlideWorkshopCampaignSetup() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Воркшоп · Шаг 2 · Кампания
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Уровень кампании: <span className="text-[hsl(var(--slide-gold))]">цель и категория</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Четыре решения, которые потом почти не переиграть без перезапуска обучения.
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
        Воркшоп · Шаг 2 · Уровень кампании
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Уровень кампании: <span className="text-[hsl(var(--slide-gold))]">цель и категория</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1700px]">
        Четыре решения, которые потом почти не переиграть без перезапуска обучения. Ставим на паузу и повторяем у себя.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[24px] py-[18px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.t}</span>
            </div>
            <p className="text-[15.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[40px]">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
