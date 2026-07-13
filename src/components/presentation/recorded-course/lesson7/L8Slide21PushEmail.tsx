import { useIsMobile } from "@/hooks/use-mobile";

const comparisons = [
  {
    type: "Push",
    bad: "«Не забудь нас!» — юзер злится, отключает.",
    good: "«У тебя 3 непрочитанных от Анны» — юзер открывает.",
  },
  {
    type: "Email",
    bad: "«У нас новая фича!» — юзер удаляет.",
    good: "«Твой проект „Лендинг“ не открыт уже 5 дней» — юзер кликает.",
  },
];

export default function L8Slide21PushEmail() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Push и email
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Это второй слой. Без первого они не работают.
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]">
          Сначала в продукте — один из 5 механизмов. Потом push/email напоминают: «у тебя там что-то ждёт». Без механизма push = спам.
        </p>
        <div className="space-y-[5px]">
          {comparisons.map((c) => (
            <div key={c.type} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[9.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">{c.type}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[2px]"><span className="text-red-400 font-bold">✗</span> {c.bad}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))] font-bold">✓</span> {c.good}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Урок 9 - целиком про push и email. Сегодня — заложить фундамент.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Push и email
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px]">
        Это второй слой. Без первого не работают.
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[28px] max-w-[1500px]">
        Сначала в продукте — один из 5 механизмов. Потом push/email напоминают: «у тебя там что-то ждёт». Без механизма push воспринимается как спам.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1600px] mb-[24px]">
        {comparisons.map((c) => (
          <div key={c.type} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[22px]">
            <p className="text-[18px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[14px]">{c.type}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]"><span className="text-red-400 font-bold mr-[8px]">✗</span>{c.bad}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]"><span className="text-[hsl(var(--slide-gold))] font-bold mr-[8px]">✓</span>{c.good}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Урок 9 - целиком про push и email. Сегодня важнее: проверьте, есть ли в продукте сам механизм. Без него урок 9 будет бесполезным.
      </p>
    </div>
  );
}
