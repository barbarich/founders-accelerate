import { useIsMobile } from "@/hooks/use-mobile";

const channels = [
  { ch: "Meta ads (урок 12)", cost: "бюджет + креативы + инструменты", speed: "CAC виден за 1-2 недели", trap: "не забудь стоимость продакшена креативов" },
  { ch: "B2B-аутрич (урок 13)", cost: "Apollo + Instantly (~$140/мес) + твои часы", speed: "CAC высокий, но и чек выше", trap: "твоё время - главная статья расходов" },
  { ch: "Контент / founder-led (урок 11)", cost: "«бесплатно» = 10-15 часов в неделю", speed: "CAC падает со временем - контент накапливается", trap: "первые месяцы CAC огромный, не бросай рано" },
  { ch: "Рефералы / сарафан", cost: "почти ноль", speed: "лучший CAC из возможных", trap: "не появляется сам - нужен повод рекомендовать" },
];

export default function L14Slide12ChannelCAC() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Экономика каналов</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          У каждого канала - <span className="text-[hsl(var(--slide-gold))]">свой CAC. Считай раздельно</span>
        </h2>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[7px]">
          Blended CAC - средняя температура по больнице: прибыльный канал маскирует убыточный. Решения принимаются только по CAC каждого канала.
        </p>
        <div className="space-y-[5px]">
          {channels.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{c.ch}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">Что входит: {c.cost}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.speed} · ⚠ {c.trap}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[32px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Экономика каналов</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        У каждого канала - <span className="text-[hsl(var(--slide-gold))]">свой CAC. Считай раздельно</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[20px] max-w-[1650px]">
        Blended CAC - средняя температура по больнице: прибыльный канал маскирует убыточный. Решения принимаются только по CAC каждого канала в отдельности.
      </p>
      <div className="space-y-[10px] max-w-[1700px]">
        {channels.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[24px] py-[12px] flex items-baseline gap-[24px]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-gold))] w-[380px] shrink-0 leading-[1.25]">{c.ch}</p>
            <div className="flex-1">
              <p className="text-[16.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">Что входит: {c.cost} · {c.speed}</p>
              <p className="text-[15.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">⚠ {c.trap}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
