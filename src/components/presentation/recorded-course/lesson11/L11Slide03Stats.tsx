import { useIsMobile } from "@/hooks/use-mobile";

const industry = [
  { num: "+22%", t: "ROAS у тех, кто запускает Meta Advantage+ вместо ручного таргета", src: "Meta · 2025" },
  { num: "15–35%", t: "bounce rate на «верифицированных» имейлах Apollo без warmup", src: "Cleverly · 2026" },
  { num: "88%", t: "AI-продуктов не доходят до продакшена из-за слабой упаковки и пустого онбординга", src: "CIO · 2025" },
];

const myScore = [
  { num: "Сотни", t: "клиентов MetaMinder на всех континентах — построено без рекламного бюджета через Apollo, Instantly, LinkedIn и личные соцсети" },
  { num: "500", t: "человек в вейтлисте Mikey за неделю — с нулевым бюджетом, только с моих личных FB / IG / LinkedIn" },
];

export default function L11Slide03Stats() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Цифры 2026 · и мой счёт по запускам
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          Что показывают данные — и что вышло у меня
        </h2>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Индустрия</p>
        <div className="grid grid-cols-3 gap-[5px] mb-[8px]">
          {industry.map((it) => (
            <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[6px] py-[6px]">
              <div className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{it.num}</div>
              <div className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35] mt-[2px]">{it.t}</div>
              <div className="text-[6px] text-[hsl(var(--slide-text-muted))] mt-[2px] uppercase tracking-[0.08em]">{it.src}</div>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Мой счёт</p>
        <div className="space-y-[5px]">
          {myScore.map((m) => (
            <div key={m.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
              <div className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{m.num}</div>
              <div className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mt-[2px]">{m.t}</div>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          Без бюджета на рекламу — через холодные касания, личный нетворк и упаковку.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Цифры 2026 · и мой счёт по запускам
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Что показывают <span className="text-[hsl(var(--slide-gold))]">данные</span> — и что вышло у меня
      </h2>
      <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Индустрия</p>
      <div className="grid grid-cols-3 gap-[20px] mb-[22px] max-w-[1700px]">
        {industry.map((it) => (
          <div key={it.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[20px]">
            <div className="font-display text-[40px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[10px]">{it.num}</div>
            <div className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] mb-[10px]">{it.t}</div>
            <div className="text-[12px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.12em]">{it.src}</div>
          </div>
        ))}
      </div>
      <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Мой счёт</p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {myScore.map((m) => (
          <div key={m.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[18px]">
            <div className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[8px]">{m.num}</div>
            <div className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{m.t}</div>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.45] max-w-[1700px]">
        Без рекламного бюджета — через холодные касания, личный нетворк и упаковку.
      </p>
    </div>
  );
}
