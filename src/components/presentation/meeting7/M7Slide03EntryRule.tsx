import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    title: "Покажи продукт за 3 минуты",
    body: "Что это, для кого, ключевой экран. Без долгих предисловий — сразу к экрану.",
  },
  {
    title: "Расскажи, как привёл первых 5–10 юзеров",
    body: "Канал, оффер, цена. Что сработало, что нет.",
  },
  {
    title: "Покажи данные",
    body: "Где смотрел, что увидел: drop-off, цитаты, цифры. Минимум — одна точка выпадения.",
  },
  {
    title: "Получи разбор от группы",
    body: "Экран и точка трения разбираются вместе. Уходишь с конкретной гипотезой на правку.",
  },
];

export default function M7Slide03EntryRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Обязательное задание</p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          К следующей встрече каждый приносит свой кейс. Без исключений.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[10px]">
          Воркшоп строится на ваших продуктах и ваших данных. Если кейса нет — встреча теряет смысл.
        </p>
        <div className="space-y-[6px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] flex gap-[8px] items-start">
              <span className="text-[hsl(var(--slide-gold))] font-mono text-[12px] leading-[1.2] shrink-0 w-[14px]">{i + 1}</span>
              <div>
                <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))] leading-[1.3] mb-[2px]">{s.title}</p>
                <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Обязательное задание</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[20px] max-w-[1600px]">
        К следующей встрече каждый приносит свой кейс. Без исключений.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.45] max-w-[1500px] mb-[40px]">
        Воркшоп строится на ваших продуктах и ваших данных. Если кейса нет — встреча теряет смысл.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1680px]">
        {steps.map((s, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[22px] flex gap-[20px] items-start">
            <span className="text-[hsl(var(--slide-gold))] font-mono text-[40px] leading-[1] shrink-0 w-[48px]">{i + 1}</span>
            <div>
              <p className="text-[24px] font-semibold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px]">{s.title}</p>
              <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}