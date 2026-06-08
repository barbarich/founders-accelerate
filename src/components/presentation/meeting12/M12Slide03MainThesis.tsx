import { useIsMobile } from "@/hooks/use-mobile";

const acts = [
  { n: "1", t: "Упакуй 12 недель в 5-минутный питч", d: "Навык, которым продаёшь продукт клиенту, партнёру и инвестору." },
  { n: "2", t: "Выйди на демо-день вживую", d: "Твои 5 минут. Группа и ментор. Фидбек, который двигает, а не гладит." },
  { n: "3", t: "Уйди с планом: партнёрство, деньги, шаг", d: "Как брать партнёра, как и когда поднимать деньги, что делаешь завтра." },
];

export default function M12Slide03MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[22px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Главная мысль · план на сегодня
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[10px]">
          Акселератор кончается. <span className="text-[hsl(var(--slide-gold))]">Компания — нет.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px] mb-[10px]">
          <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] leading-[1.45]">
            Финал — не выпускной. Это день, когда ты упаковываешь 12 недель в историю и забираешь всё для следующих 12.
          </p>
        </div>
        <div className="space-y-[5px]">
          {acts.map((a) => (
            <div key={a.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[10px] py-[5px]">
              <div className="flex items-baseline gap-[8px]">
                <span className="text-[12px] font-bold text-[hsl(var(--slide-gold))]">{a.n}</span>
                <span className="text-[10px] font-bold text-[hsl(var(--slide-text))]">{a.t}</span>
              </div>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[20px]">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Главная мысль · план на сегодня
      </p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[24px] tracking-[-0.02em]">
        Акселератор кончается. <span className="text-[hsl(var(--slide-gold))]">Компания — нет.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[34px] py-[22px] max-w-[1700px] mb-[28px]">
        <p className="text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.35]">
          Финал — не выпускной. Это день, когда ты упаковываешь 12 недель в историю и забираешь всё, что нужно для следующих 12.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1700px]">
        {acts.map((a) => (
          <div key={a.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[26px] py-[18px]">
            <div className="flex items-baseline gap-[12px] mb-[6px]">
              <span className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-none">{a.n}</span>
              <span className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{a.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{a.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
