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

export default function L13Slide13Objections() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Возражения
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Не учи скрипты наизусть —{" "}
          <span className="text-[hsl(var(--slide-gold))]">знай ответ заранее</span>
        </h2>
        <div className="space-y-[5px]">
          {objections.map((o, i) => (
            <div
              key={i}
              className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]"
            >
              <p className="text-[11px] text-[hsl(var(--slide-text-muted))] italic mb-[2px]">
                Возражение: {o.objection}
              </p>
              <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.45]">
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
      <p className="text-[20px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Возражения
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Не учи скрипты наизусть —{" "}
        <span className="text-[hsl(var(--slide-gold))]">знай ответ заранее</span>
      </h2>
      <div className="space-y-[12px] max-w-[1700px]">
        {objections.map((o, i) => (
          <div
            key={i}
            className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[26px] py-[16px]"
          >
            <div className="flex items-start gap-[14px]">
              <span className="font-display text-[32px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-[17px] text-[hsl(var(--slide-text-muted))] italic mb-[4px]">
                  Возражение: {o.objection}
                </p>
                <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.5]">
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
