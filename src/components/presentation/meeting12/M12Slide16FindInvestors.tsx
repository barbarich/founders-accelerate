import { useIsMobile } from "@/hooks/use-mobile";

const where = [
  { t: "OpenVC", u: "openvc.app", d: "Бесплатная база VC, заточена под холодный аутрич" },
  { t: "Signal by NFX", u: "signal.nfx.com", d: "Поиск VC/ангелов + кратчайший путь к тёплому интро" },
  { t: "Crunchbase", u: "crunchbase.com", d: "Кто кого финансировал в твоей нише" },
  { t: "AngelList", u: "angellist.com", d: "Синдикаты и rolling funds — ранние чеки" },
  { t: "Y Combinator", u: "ycombinator.com", d: "Заявка + Demo Day + Work at a Startup" },
  { t: "LinkedIn + X", u: "", d: "Тёплые интро и building in public → входящие" },
];

const how = [
  { t: "Подходит по чеку и стадии", d: "Инвестирует ли в твою стадию и сектор" },
  { t: "Value-add, не только деньги", d: "Поможет с клиентами, наймом, раундом" },
  { t: "Референсы от его фаундеров", d: "Especially у тех, у кого не вышло" },
  { t: "Скорость решений", d: "Отвечает за дни, не за квартал" },
];

export default function M12Slide16FindInvestors() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Fundraising · где искать
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[8px]">
          Топ-ресурсы, где <span className="text-[hsl(var(--slide-gold))]">искать инвесторов</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Где искать</p>
            <div className="space-y-[3px]">
              {where.map((w) => (
                <div key={w.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{w.t}{w.u ? <span className="text-[hsl(var(--slide-gold))] font-normal"> · {w.u}</span> : null}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Как отбирать</p>
            <div className="space-y-[3px]">
              {how.map((h) => (
                <div key={h.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{h.t}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{h.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          Red flags: ghost после интро · хочет много контроля · «подумаю» месяцами.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Fundraising · где искать и как отбирать
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Топ-ресурсы, где <span className="text-[hsl(var(--slide-gold))]">искать инвесторов</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[14px]">
        <div>
          <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[10px]">Где искать</p>
          <div className="space-y-[7px]">
            {where.map((w) => (
              <div key={w.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[8px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
                  {w.t}{w.u ? <span className="text-[hsl(var(--slide-gold))] font-medium text-[15px]"> · {w.u}</span> : null}
                </p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[10px]">Как отбирать инвестора</p>
          <div className="space-y-[7px]">
            {how.map((h) => (
              <div key={h.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[8px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{h.t}</p>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{h.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[16px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[12px]">
            Red flags: ghost после интро · хочет много контроля · «подумаю» месяцами.
          </p>
        </div>
      </div>
    </div>
  );
}
