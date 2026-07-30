import { useIsMobile } from "@/hooks/use-mobile";

const bridge = [
  { lesson: "Урок 5", was: "Продал до того, как построил", note: "пре-сейл, первые «да» без продукта" },
  { lesson: "Урок 11", was: "Продал собой и своей историей", note: "первые продажи делает фаундер, руками" },
  { lesson: "Урок 13", was: "Продажи стали системой", note: "считаешь, планируешь, ведёшь и не теряешь", now: true },
];

export default function L13Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главная мысль сегодня
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px] tracking-[-0.01em]">
          Продажи не должны зависеть<br />от твоего <span className="text-[hsl(var(--slide-gold))]">настроения и удачи.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[14px] py-[11px] mb-[12px]">
          <p className="text-[11.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Руками — правильно. Но пока всё держится на твоей энергии, продажи скачут: месяц густо, месяц пусто.
          </p>
        </div>
        <div className="space-y-[5px] mb-[10px]">
          {bridge.map((b) => (
            <div
              key={b.lesson}
              className={`rounded-[5px] px-[9px] py-[6px] border ${b.now ? "bg-[hsl(var(--slide-gold)/0.12)] border-[hsl(var(--slide-gold)/0.5)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}
            >
              <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">{b.lesson}</p>
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.25]">{b.was}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{b.note}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
          К концу урока у тебя будет своя таблица, свои цифры и понятный план на неделю. Не конспект.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Главная мысль сегодня
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] mb-[24px] max-w-[1700px] tracking-[-0.01em]">
        Продажи не должны зависеть от твоего <span className="text-[hsl(var(--slide-gold))]">настроения и удачи.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[36px] py-[24px] max-w-[1700px] mb-[28px]">
        <p className="text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Продавать руками — правильно. Но пока всё держится на твоей энергии, продажи скачут: месяц густо, месяц пусто.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1700px] mb-[22px]">
        {bridge.map((b) => (
          <div
            key={b.lesson}
            className={`rounded-[12px] px-[28px] py-[22px] border ${b.now ? "bg-[hsl(var(--slide-gold)/0.12)] border-[hsl(var(--slide-gold)/0.5)]" : "bg-[hsl(var(--slide-bg-alt))] border-[hsl(var(--slide-border)/0.3)]"}`}
          >
            <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">{b.lesson}</p>
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[6px]">{b.was}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{b.note}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1700px]">
        К концу урока у тебя будет своя таблица сделок, свои цифры и понятный план на неделю. Не конспект.
      </p>
    </div>
  );
}
