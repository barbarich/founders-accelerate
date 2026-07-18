import { useIsMobile } from "@/hooks/use-mobile";

const branches = [
  {
    symptom: "Приходят, но не доходят до ценности",
    verdict: "Чини продукт",
    where: "Первый экран и онбординг · урок 7",
  },
  {
    symptom: "Доходят, но не возвращаются",
    verdict: "Чини возврат",
    where: "Петля и механики · урок 8",
  },
  {
    symptom: "Возвращаются, но не платят",
    verdict: "Чини цену и упаковку",
    where: "Не продукт. Люди уже показали, что он им нужен · урок 3",
  },
  {
    symptom: "Доходят, возвращаются, платят - но их мало",
    verdict: "Продукт готов. Иди в маркетинг",
    where: "Это и есть зелёный свет на вторую половину курса",
  },
];

export default function L9Slide13Verdict() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Вердикт
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Где рвётся - <span className="text-[hsl(var(--slide-gold))]">то и чини</span>.
        </h2>
        <div className="space-y-[7px] mb-[9px]">
          {branches.map((b, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[2px]">{b.symptom}</p>
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3]">→ {b.verdict}</p>
              <p className="text-[9px] text-[hsl(var(--slide-text)/0.75)] leading-[1.4] mt-[1px]">{b.where}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Пока рвётся <span className="text-[hsl(var(--slide-gold))]">до</span> маркетинга - реклама только ускорит уход. Это самая дорогая ошибка блока.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Вердикт
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.01em]">
        Где рвётся - <span className="text-[hsl(var(--slide-gold))]">то и чини</span>.
      </h2>
      <div className="space-y-[14px] max-w-[1800px] mb-[24px]">
        {branches.map((b, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[26px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[24px]">
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.4] w-[440px] shrink-0">{b.symptom}</p>
            <p className="text-[23px] font-bold text-[hsl(var(--slide-gold))] leading-[1.3] w-[380px] shrink-0">→ {b.verdict}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.75)] leading-[1.45] flex-1">{b.where}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Пока рвётся <span className="text-[hsl(var(--slide-gold))]">до</span> маркетинга - реклама только ускорит уход. Это самая дорогая ошибка блока.
        </p>
      </div>
    </div>
  );
}
