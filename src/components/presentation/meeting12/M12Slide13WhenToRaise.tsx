import { useIsMobile } from "@/hooks/use-mobile";

const early = [
  { t: "Нет повторяемой тяги", d: "Поднимаешь, чтобы «найти PMF». Деньги не купят product-market fit." },
  { t: "Не знаешь юнит-экономику", d: "Без CAC и LTV зальёшь деньги в дырявое ведро." },
  { t: "Поднимаешь от страха", d: "Раунд не спасёт слабый продукт, только растянет агонию." },
];

const ready = [
  { t: "Повторяемая тяга / рост", d: "Капитал кратно ускорит то, что уже работает само." },
  { t: "Знаешь CAC, LTV, payback", d: "Можешь показать: $1 на входе приносит $3." },
  { t: "Рынок winner-take-all", d: "Кто быстрее захватит — заберёт всё. Тут скорость = деньги." },
];

export default function M12Slide13WhenToRaise() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Fundraising · когда поднимать
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Деньги решают скорость. <span className="text-[hsl(var(--slide-gold))]">Не выживание.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[5px] mb-[6px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-bold text-[hsl(var(--slide-gold))]">Default alive:</span> выживаешь без новых денег? Если да — на переговорах ты сильнее любого инвестора.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[5px]">
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Ещё рано</p>
            <div className="space-y-[3px]">
              {early.map((e) => (
                <div key={e.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{e.t}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] mb-[3px]">Уже пора</p>
            <div className="space-y-[3px]">
              {ready.map((r) => (
                <div key={r.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
                  <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{r.t}</p>
                  <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{r.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          $10K MRR соло при марже 70% сильнее, чем поднять $2M под давлением роста.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Fundraising · когда поднимать, когда рано
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Деньги решают скорость. <span className="text-[hsl(var(--slide-gold))]">Не выживание.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[14px] max-w-[1700px] mb-[20px]">
        <p className="text-[21px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="font-bold text-[hsl(var(--slide-gold))]">Default alive:</span> выживаешь ли ты без новых денег? Если да — на переговорах ты сильнее любого инвестора.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1700px] mb-[18px]">
        <div>
          <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[10px]">Ещё рано поднимать</p>
          <div className="space-y-[8px]">
            {early.map((e) => (
              <div key={e.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[10px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">⚠ {e.t}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[16px] uppercase tracking-[0.16em] text-[hsl(var(--slide-gold))] mb-[10px]">Уже не рано — пора</p>
          <div className="space-y-[8px]">
            {ready.map((r) => (
              <div key={r.t} className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[20px] py-[10px]">
                <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{r.t}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        $10K MRR соло при марже 70% сильнее, чем поднять $2M под давлением роста. Сначала выручка — потом выборочный капитал.
      </p>
    </div>
  );
}
