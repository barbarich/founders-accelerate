import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    name: "Notion",
    who: "Иван Чжао",
    tag: "ПОЗИЦИОНИРОВАНИЕ",
    body: "Продукт почти умер в 2015-м. Переписали и переупаковали в «одно приложение вместо десяти». Так стали стандартом, хотя заметок-конкурентов были сотни.",
  },
  {
    name: "Calendly",
    who: "Топе Авотона · соло, на свои",
    tag: "ПРОСТОТА",
    body: "Собрал один, вложил $200K своих, 8 лет без инвесторов. Выиграл предельно простым позиционированием «запись на встречу без переписки». Оценка ~$3 млрд.",
  },
  {
    name: "Liquid Death",
    who: "Майк Чессарио",
    tag: "ВИЗУАЛ · УПАКОВКА",
    body: "Обычная вода в пивной банке с черепом и слоганом «Murder your thirst». Упаковка и есть продукт. $263 млн продаж за год, оценка ~$1.4 млрд.",
  },
  {
    name: "Duolingo",
    who: "Луис фон Ан",
    tag: "БРЕНД · КРЕАТИВЫ",
    body: "Бесплатное приложение. Выиграли не методикой - брендом: сова-маскот, геймификация, вирусные соцсети. Приложений для языков - тысячи.",
  },
];

export default function L11Slide04SoloFounders() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кейсы · упаковка победила продукт
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Их знают все. Выиграли не продуктом - <span className="text-[hsl(var(--slide-gold))]">упаковкой.</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px] mb-[6px]">
          {cases.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.1]">{c.name}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold)/0.9)] mb-[1px]">{c.who}</p>
              <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{c.tag}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
          У каждого были конкуренты с продуктом не хуже. Победила упаковка.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Кейсы · упаковка победила продукт
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Их знают все. Выиграли не продуктом - <span className="text-[hsl(var(--slide-gold))]">упаковкой.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px] mb-[20px]">
        {cases.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[18px]">
            <div className="flex items-baseline justify-between gap-[12px] mb-[2px]">
              <p className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{c.name}</p>
              <p className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))]">{c.tag}</p>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-gold)/0.9)] mb-[8px]">{c.who}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{c.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        У каждого были конкуренты с продуктом не хуже. Победила упаковка - позиционирование, визуал, бренд. И да, Calendly один человек собрал в одиночку.
      </p>
    </div>
  );
}
