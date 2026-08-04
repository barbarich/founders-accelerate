import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { num: "10-15%", t: "Отдаёшь на pre-seed — самая маленькая доля, потому что риск для инвестора самый высокий.", src: "Carta · медиана 2025" },
  { num: "~20%", t: "Отдаёшь на seed. После него у фаундеров медианно остаётся ~56% компании.", src: "Carta · медиана 2025" },
  { num: "~18-20%", t: "Отдаёшь на Series A. После неё у фаундеров медианно остаётся ~36%, после Series B — ~23%.", src: "Carta · медиана 2025" },
];

export default function L15SlideDilutionValuation() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Математика раунда
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Сколько отдаёшь и как считают capitalization
        </h2>
        <div className="grid grid-cols-1 gap-[5px] mb-[8px]">
          {stats.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[16px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{s.num}</span>
                <span className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35]">{s.t}</span>
              </div>
              <div className="text-[6.5px] text-[hsl(var(--slide-text-muted))] mt-[2px] uppercase tracking-[0.08em]">{s.src}</div>
            </div>
          ))}
        </div>
        <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[5px]">Как считается capitalization</p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[8px] mb-[6px]">
          <p className="text-[9px] font-mono text-[hsl(var(--slide-text))] leading-[1.5]">
            Post-money = Pre-money + Инвестиция<br />
            Доля инвестора = Инвестиция ÷ Post-money
          </p>
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Пример: взял $500K за 20% → post-money $2.5M, pre-money $2M.
        </p>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          На ранней стадии capitalization не считают по прибыли, как у публичной компании — её ДОГОВАРИВАЮТ: сравнимые недавние раунды в твоей нише, команда, размер рынка, momentum. Это тот же cap, что в SAFE (см. Term sheet) — просто зафиксирован заранее.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Математика раунда
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] tracking-[-0.02em]">
        Сколько отдаёшь и как считают capitalization
      </h2>
      <div className="grid grid-cols-3 gap-[18px] mb-[20px] max-w-[1800px]">
        {stats.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[22px] py-[18px]">
            <div className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[8px]">{s.num}</div>
            <div className="text-[14px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4] mb-[8px]">{s.t}</div>
            <div className="text-[11px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.1em]">{s.src}</div>
          </div>
        ))}
      </div>
      <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[10px]">Как считается capitalization</p>
      <div className="flex items-start gap-[28px] max-w-[1800px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[16px] shrink-0">
          <p className="text-[16px] font-mono text-[hsl(var(--slide-text))] leading-[1.6]">
            Post-money = Pre-money + Инвестиция<br />
            Доля инвестора = Инвестиция ÷ Post-money
          </p>
          <p className="text-[14px] text-[hsl(var(--slide-text)/0.75)] leading-[1.5] mt-[8px]">
            Пример: взял $500K за 20% → post-money $2.5M, pre-money $2M.
          </p>
        </div>
        <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          На ранней стадии capitalization не считают по прибыли, как у публичной компании — её ДОГОВАРИВАЮТ: сравнимые недавние раунды в твоей нише, команда, размер рынка, momentum. Это тот же cap, что в SAFE (см. Term sheet) — просто зафиксирован заранее вместо будущего раунда.
        </p>
      </div>
    </div>
  );
}
