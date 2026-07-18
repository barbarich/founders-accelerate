import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  { brand: "Airbnb", star: "Забронированных ночей", vanity: "Регистраций" },
  { brand: "Spotify", star: "Времени прослушивания", vanity: "Скачиваний приложения" },
  { brand: "WhatsApp", star: "Отправленных сообщений", vanity: "Установок" },
  { brand: "Amazon", star: "Покупок на клиента", vanity: "Визитов на сайт" },
];

export default function L9Slide06NorthStarExamples() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Где ты это видел
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Их <span className="text-[hsl(var(--slide-gold))]">North Star</span>. И то, что они не считают.
        </h2>
        <div className="space-y-[7px] mb-[10px]">
          {examples.map((e) => (
            <div key={e.brand} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{e.brand}</p>
              <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">{e.star}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mt-[2px]">а не {e.vanity.toLowerCase()}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[10.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Золотым - действие клиента, ради которого продукт существует. Серым - то, что легко посчитать, но что ничего не значит.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Где ты это видел
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Их <span className="text-[hsl(var(--slide-gold))]">North Star</span>. И то, что они не считают.
      </h2>
      <div className="space-y-[14px] max-w-[1800px] mb-[26px]">
        {examples.map((e) => (
          <div key={e.brand} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[32px] py-[18px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[32px]">
            <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] w-[200px] shrink-0">{e.brand}</p>
            <p className="text-[26px] text-[hsl(var(--slide-gold))] font-semibold flex-1">{e.star}</p>
            <p className="text-[22px] text-[hsl(var(--slide-text-muted))] w-[380px] shrink-0">а не {e.vanity.toLowerCase()}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Золотым - действие клиента, ради которого продукт существует. Серым - то, что легко посчитать, но что ничего не значит.
        </p>
      </div>
    </div>
  );
}
