import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Лендинг с одним полем", d: "Email + кнопка «Join waitlist». Никакого checkout, никакой регистрации. Lovable собирает за час." },
  { n: "2", t: "Промо-оффер", d: "«Запускаемся через X недель. Первые 50 получают пожизненный план / скидку 50% / 3 месяца бесплатно». Skin in the game." },
  { n: "3", t: "Размещение в 4 каналах", d: "Личная сеть (DM 30 человек) → LinkedIn пост → 2-3 нишевых сабреддита → личный профиль (FB/IG/X)." },
  { n: "4", t: "Counter на лендинге", d: "Покажи «X people joined». Социальное доказательство → каждый новый visitor конвертит выше." },
];

export default function L5SlideWaitlist() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Канал #2 — waitlist параллельно с прямыми продажами
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Mikey: <span className="text-[hsl(var(--slide-gold))]">500 человек за неделю</span> через личные посты
        </h2>
        <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[12px]">
          Эти 500 стали бета-тестерами и первыми платящими. <span className="text-[hsl(var(--slide-text))] font-medium">$0 потрачено на рекламу.</span>
        </p>
        <div className="space-y-[8px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{s.n}</span>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{s.t}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[12px] bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[8px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Waitlist 100+ человек = социальное доказательство в Stripe-чекауте.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[50px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Канал #2 — waitlist параллельно с прямыми продажами
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.01em]">
        Mikey: <span className="text-[hsl(var(--slide-gold))]">500 человек за неделю</span> через личные посты
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] max-w-[1700px] mb-[32px]">
        Эти 500 стали бета-тестерами и первыми платящими. <span className="text-[hsl(var(--slide-text))] font-semibold">$0 потрачено на рекламу.</span>
      </p>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px] max-w-[1800px] mb-[24px]">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[44px] h-[44px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{s.n}</span>
            <div className="flex-1">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{s.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Waitlist 100+ человек = <span className="text-[hsl(var(--slide-gold))]">социальное доказательство</span> в Stripe-чекауте и в постах: «X других уже зарегистрировались».
        </p>
      </div>
    </div>
  );
}
