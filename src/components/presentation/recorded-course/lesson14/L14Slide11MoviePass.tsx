import { useIsMobile } from "@/hooks/use-mobile";

const math = [
  { label: "Подписка", value: "$9.95/мес", note: "безлимитные походы в кино, 2017 год" },
  { label: "Себестоимость", value: "~$9 за билет", note: "MoviePass платил кинотеатрам полную цену" },
  { label: "Активный юзер", value: "2-3 фильма/мес", note: "убыток $10-20 на юзере каждый месяц" },
  { label: "Рост", value: "3 млн подписчиков", note: "за год - и каждый новый ускорял банкротство" },
];

export default function L14Slide11MoviePass() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Антикейс · классика провала</p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          MoviePass: <span className="text-[hsl(var(--slide-gold))]">минусовая маржа не лечится масштабом</span>
        </h2>
        <div className="grid grid-cols-2 gap-[5px] mb-[8px]">
          {math.map((m, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[6px]">
              <p className="text-[7.5px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] mb-[1px]">{m.label}</p>
              <p className="text-[11px] font-bold text-[hsl(var(--slide-gold))] mb-[1px]">{m.value}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{m.note}</p>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[7px]">
          LTV был отрицательным: чем лояльнее клиент, тем больше убыток. Компания надеялась «потом договориться с кинотеатрами» - не вышло. Банкротство в 2020.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[7px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Если юнит убыточен, рост - это не спасение, а ускоритель конца. Сначала почини экономику, потом заливай трафик.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Антикейс · классика провала</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em] max-w-[1700px]">
        MoviePass: <span className="text-[hsl(var(--slide-gold))]">минусовая маржа не лечится масштабом</span>
      </h2>
      <div className="grid grid-cols-4 gap-[16px] mb-[22px] max-w-[1650px]">
        {math.map((m, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px]">
            <p className="text-[13px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] mb-[6px]">{m.label}</p>
            <p className="text-[26px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{m.value}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{m.note}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[18px] max-w-[1650px]">
        LTV был отрицательным: чем лояльнее клиент, тем больше убыток. Компания надеялась «потом договориться с кинотеатрами о скидках» - не вышло. Банкротство в 2020.
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-4 border-[hsl(var(--slide-gold))] px-[28px] py-[16px] max-w-[1650px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Если юнит убыточен, рост - это не спасение, а ускоритель конца. Сначала почини экономику, потом заливай трафик.
        </p>
      </div>
    </div>
  );
}
