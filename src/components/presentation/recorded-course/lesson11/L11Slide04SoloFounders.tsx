import { useIsMobile } from "@/hooks/use-mobile";

const founders = [
  { name: "Pieter Levels", product: "Photo AI · Remote OK · NomadList", num: "$200K+/мес", body: "Один человек. Никаких сотрудников. Никакого raise. Весь стек продаж — твиттер фаундера и упаковка." },
  { name: "Marc Lou", product: "ShipFast · ZenVoice · 14 продуктов", num: "$1M+/год", body: "Шиппит каждые 2 месяца. Каждый продукт — лендинг + Stripe + Twitter-аудитория. Без команды." },
  { name: "Danny Postma", product: "HeadshotPro · Tweethunter (exit $5M)", num: "$1M+ revenue", body: "AI-headshots — один лендинг, один креатив, Meta Ads. Упаковка съела всё «нет AI-моат»." },
  { name: "Tony Dinh", product: "TypingMind · DevUtils · BlackMagic", num: "$60K/мес", body: "Build-in-public с первого дня. Каждый запуск — твит + лендинг. Никакой рекламы первые полгода." },
];

export default function L11Slide04SoloFounders() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Одиночки-фаундеры 2026
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Они выиграли не продуктом. <span className="text-[hsl(var(--slide-gold))]">Упаковкой.</span>
        </h2>
        <div className="space-y-[5px] mb-[6px]">
          {founders.map((f) => (
            <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <div className="flex items-baseline justify-between gap-[6px]">
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
                <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{f.num}</p>
              </div>
              <p className="text-[7px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold)/0.85)] mb-[2px]">{f.product}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          Похожих AI-продуктов десятки. Выиграли те, кто упаковал лучше и быстрее запустил.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Одиночки-фаундеры 2026 · никаких команд, никакого raise
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Они выиграли не продуктом. <span className="text-[hsl(var(--slide-gold))]">Упаковкой.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[20px]">
        {founders.map((f) => (
          <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[20px]">
            <div className="flex items-baseline justify-between gap-[12px] mb-[6px]">
              <p className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{f.name}</p>
              <p className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{f.num}</p>
            </div>
            <p className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold)/0.85)] mb-[10px]">{f.product}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{f.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        Похожих AI-продуктов десятки. Выиграли те, кто упаковал лучше и быстрее запустил. Не те, у кого «лучшая модель».
      </p>
    </div>
  );
}
