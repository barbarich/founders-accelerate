import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    brand: "PERA · B2C",
    who: "мамы с детьми",
    where: "FB и Instagram: родительские группы и городские сообщества. Там мамы уже сидят и советуются по покупкам каждый день.",
  },
  {
    brand: "MetaMinder · B2B",
    who: "компании: ритейл, гостеприимство, сервис",
    where: "LinkedIn + отраслевые конференции. Лица, принимающие решение по обучению персонала, живут там, а не в родительских группах.",
  },
];

export default function L11SlideWhereCases() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Где сидят мои две аудитории
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[9px]">
          Разный продукт - <span className="text-[hsl(var(--slide-gold))]">разное место.</span>
        </h2>
        <div className="space-y-[7px] mb-[8px]">
          {cases.map((c) => (
            <div key={c.brand} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))]">{c.brand}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[2px]">{c.who}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{c.where}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">Инсайт: B2C живёт в сообществах, B2B - в LinkedIn и на событиях. Иди туда, где они уже есть.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Где сидят мои две аудитории
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Разный продукт - <span className="text-[hsl(var(--slide-gold))]">разное место.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[22px] max-w-[1700px] mb-[22px]">
        {cases.map((c) => (
          <div key={c.brand} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[30px] py-[20px]">
            <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{c.brand}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] mb-[12px]">{c.who}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{c.where}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Инсайт: B2C живёт в сообществах, B2B - в LinkedIn и на событиях. Не тащи людей к себе - приди туда, где они уже собраны.
        </p>
      </div>
    </div>
  );
}
