import { useIsMobile } from "@/hooks/use-mobile";

const objections = [
  {
    objection: "«Это дорого»",
    answer:
      "Переведи разговор на ценность: сколько денег теряет клиент каждый день без решения. Покажи, что окупается за N месяцев.",
  },
  {
    objection: "«Надо подумать / посоветоваться»",
    answer:
      "Согласись. Но уточни: кого именно нужно спросить и по какому вопросу? Назначь конкретную дату следующего разговора.",
  },
  {
    objection: "«У нас уже есть что-то похожее»",
    answer:
      "Спроси, что конкретно не устраивает в текущем решении. Не спорь — покажи, как ваш продукт решает эту конкретную боль.",
  },
];

export default function M11Slide13Objections() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Возражения
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Не учи скрипты наизусть —{" "}
          <span className="text-[hsl(var(--slide-gold))]">знай ответ заранее</span>
        </h2>
        <div className="space-y-[3px]">
          {objections.map((o, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]"
            >
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] italic mb-[1px]">
                Возражение: {o.objection}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text))] leading-[1.4]">
                <span className="text-[hsl(var(--slide-gold))] font-bold">Ответ:</span>{" "}
                {o.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Возражения
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
        Не учи скрипты наизусть —{" "}
        <span className="text-[hsl(var(--slide-gold))]">знай ответ заранее</span>
      </h2>
      <div className="space-y-[10px] max-w-[1700px]">
        {objections.map((o, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[12px]"
          >
            <div className="flex items-start gap-[14px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-[15px] text-[hsl(var(--slide-text-muted))] italic mb-[3px]">
                  Возражение: {o.objection}
                </p>
                <p className="text-[15px] text-[hsl(var(--slide-text))] leading-[1.45]">
                  <span className="text-[hsl(var(--slide-gold))] font-bold">Ответ:</span>{" "}
                  {o.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
