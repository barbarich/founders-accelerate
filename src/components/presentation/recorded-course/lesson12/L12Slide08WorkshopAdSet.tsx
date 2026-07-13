import { useIsMobile } from "@/hooks/use-mobile";

const fields = [
  { label: "Conversion location", val: "Website (или Messenger — для WhatsApp-бот аренды)" },
  { label: "Performance goal", val: "Maximize number of conversions" },
  { label: "Pixel + Event", val: "Pixel выбран · Event = Purchase / Lead / CompleteRegistration" },
  { label: "Budget", val: "$20–30/день · Daily · НЕ Lifetime" },
  { label: "Schedule", val: "Continuous · без расписаний" },
  { label: "Audience", val: "Advantage+ Audience ON + suggestion (страна, 18–65, языки)" },
  { label: "Placements", val: "Advantage+ Placements ON · все автоматически" },
  { label: "Languages", val: "Если продукт на английском — ставим English" },
];

export default function L12Slide08WorkshopAdSet() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Walkthrough · Шаг 2 · Ad Set
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Advantage+ Audience и широкий вход. <span className="text-[hsl(var(--slide-gold))]">Не сужаешь.</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Здесь главное искушение — задать «своего идеального клиента» руками. Не делаешь. Андромеда найдёт лучше.
        </p>
        <div className="space-y-[3px]">
          {fields.map((f) => (
            <div key={f.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[3px] flex items-baseline gap-[6px]">
              <span className="text-[8px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] min-w-[80px]">{f.label}</span>
              <span className="text-[8px] text-[hsl(var(--slide-text)/0.9)]">{f.val}</span>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[6px] leading-[1.4]">
          Если хочется «уточнить интересы» — выдохни и пропусти. Это твой 2022-рефлекс.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Walkthrough · Шаг 2 · Ad Set · Advantage+ Audience
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Широкий вход. <span className="text-[hsl(var(--slide-gold))]">Не сужаешь руками.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        Главное искушение здесь — задать «своего идеального клиента» руками. Не делаешь. Andromeda найдёт лучше — если дашь объём событий и креативов.
      </p>
      <div className="grid grid-cols-2 gap-[14px] max-w-[1700px]">
        {fields.map((f) => (
          <div key={f.label} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[24px] py-[14px] flex items-baseline gap-[16px]">
            <span className="text-[13px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] font-bold min-w-[230px]">{f.label}</span>
            <span className="text-[17px] text-[hsl(var(--slide-text)/0.92)] leading-[1.4]">{f.val}</span>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] italic mt-[18px] leading-[1.45] max-w-[1700px]">
        Если хочется «уточнить интересы» или «исключить» — выдохни и пропусти. Это твой 2022-рефлекс.
      </p>
    </div>
  );
}
