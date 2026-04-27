import { useIsMobile } from "@/hooks/use-mobile";

const factors = [
  { title: "Результат", body: "Продукт сделал то, что обещал. Без этого Aha невозможен. Это пол." },
  { title: "Связь с моей целью", body: "Юзер сам сформулировал, как этот результат относится к тому, что ему было нужно. Часто не происходит, если в onboarding не было собрано «зачем ты пришёл»." },
  { title: "Предсказуемость повторения", body: "Юзер понял, как получить такой же результат завтра, и поверил, что сможет." },
];

export default function M7Slide08AhaFormula() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Формула Aha</p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">
          Aha = Результат × Связь с моей целью × Предсказуемость повторения.
        </h2>
        <div className="space-y-[5px] mb-[8px]">
          {factors.map((f, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[10px] font-semibold text-[hsl(var(--slide-gold))] mb-[2px]">{f.title}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[2px] border-[hsl(var(--slide-gold))] pl-[8px] py-[4px] mb-[8px]">
          <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">Пример: Notion</p>
          <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Результат = создал страницу. Связь с целью = это будет моя личная база знаний. Предсказуемость = знаю, как создать вторую и связать. → Aha.</p>
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Только результат без двух других множителей — Aha = ноль. И возврат = ноль.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Формула Aha</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px] max-w-[1750px]">
        Aha = Результат × Связь с моей целью × Предсказуемость повторения.
      </h2>
      <div className="grid grid-cols-3 gap-[20px] mb-[28px]">
        {factors.map((f, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[28px] py-[24px]">
            <span className="text-[18px] font-mono text-[hsl(var(--slide-gold))] block mb-[10px]">0{i + 1}</span>
            <p className="text-[24px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">{f.title}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{f.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[24px] py-[16px] mb-[24px] max-w-[1750px]">
        <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[6px]">Пример: Notion</p>
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.5]">
          Результат = создал страницу. Связь с целью = это будет моя личная база знаний. Предсказуемость = знаю, как создать вторую и связать с первой. → <span className="text-[hsl(var(--slide-gold))] font-semibold">Aha.</span>
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1750px] leading-[1.4]">
        Если у вашего юзера только результат без двух других множителей — Aha = ноль. И возврат = ноль.
      </p>
    </div>
  );
}