import { useIsMobile } from "@/hooks/use-mobile";

const sides = [
  {
    label: "До",
    color: "hsl(0_60%_65%)",
    bgColor: "hsl(0_20%_12%)",
    borderColor: "hsl(0_60%_40%/0.35)",
    items: [
      "3 часа в день на ответы в DM",
      "Пропускаешь важные встречи и звонки",
      "Чувство что тонешь — инбокс никогда не пустой",
      "Отвечаешь одно и то же 50 раз в день",
    ],
  },
  {
    label: "После",
    color: "hsl(142_50%_60%)",
    bgColor: "hsl(142_15%_9%)",
    borderColor: "hsl(142_50%_40%/0.35)",
    items: [
      "DM отвечают сами — в твоём голосе, пока ты спишь",
      "Утро начинается с продукта, не с инбокса",
      "Партнёры и клиенты получают ответ за минуты",
      "Ты строишь компанию, а не обслуживаешь чат",
    ],
  },
];

export default function L6Slide15StoryShift() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — шаг 4
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Трансформация: до и после
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Не фичи продукта — жизнь человека до и после. Трансформация продаёт лучше любых характеристик.
        </p>
        <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
          {sides.map((s, i) => (
            <div key={i} className="rounded-[6px] px-[9px] py-[7px] border" style={{ backgroundColor: s.bgColor, borderColor: s.borderColor.replace('hsl(', 'hsl(').replace('/0.35)', '/0.35)') }}>
              <p className="text-[10px] font-bold mb-[5px]" style={{ color: s.color }}>{s.label}</p>
              {s.items.map((item, j) => (
                <div key={j} className="flex items-start gap-[4px] mb-[2px]">
                  <span className="text-[7px] mt-[1px] shrink-0" style={{ color: s.color }}>—</span>
                  <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{item}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[5px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] italic">Правило: ни одной фичи. Только жизнь человека.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — шаг 4
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Трансформация: до и после
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1200px] leading-[1.45]">
        Не фичи продукта — жизнь человека до и после. Читатель покупает трансформацию, а не характеристики.
      </p>

      <div className="grid grid-cols-2 gap-[20px] max-w-[1400px] mb-[18px]">
        {sides.map((s, i) => (
          <div key={i} className="rounded-[14px] px-[26px] py-[22px] border-2" style={{ backgroundColor: s.bgColor, borderColor: s.borderColor }}>
            <p className="text-[22px] font-bold mb-[16px]" style={{ color: s.color }}>{s.label}</p>
            <div className="space-y-[10px]">
              {s.items.map((item, j) => (
                <div key={j} className="flex items-start gap-[10px]">
                  <span className="text-[16px] mt-[2px] shrink-0" style={{ color: s.color }}>—</span>
                  <p className="text-[16px] text-[hsl(var(--slide-text))] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[26px] py-[13px] max-w-[1400px]">
        <p className="text-[17px] text-[hsl(var(--slide-gold))] font-bold">Правило: ни одной фичи в описании трансформации. Только жизнь человека.</p>
      </div>
    </div>
  );
}
