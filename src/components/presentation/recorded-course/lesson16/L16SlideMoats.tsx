import { useIsMobile } from "@/hooks/use-mobile";

const moats = [
  {
    t: "Network effect",
    d: "С каждым новым пользователем твой продукт становится ценнее для всех остальных. Slack (больше команд = больше ценности), Whatsapp, LinkedIn.",
    how: "Достигается через invite-flow, community-features, multiplayer-elements. Сложно копировать когда уже есть critical mass.",
  },
  {
    t: "Data moat",
    d: "Твой продукт собирает уникальные данные, которые делают его лучше с каждым пользователем. AI-продукты особенно сильны в этом.",
    how: "Каждое использование = data point для модели. Конкурент должен собрать тот же объём данных, чтобы догнать. Mikey AI: каждое свидание учит модель.",
  },
  {
    t: "Brand + community moat",
    d: "Тебе доверяют как личности/бренду. Pieter Levels, Marc Lou, Tibo — их продукты покупают потому что покупают ИХ. Сложно скопировать репутацию.",
    how: "Building in public, прозрачные revenue numbers, регулярный контент. Каждый пост укрепляет moat.",
  },
];

export default function L16SlideMoats() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Distribution moats
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Что делает продукт <span className="text-[hsl(var(--slide-gold))]">сложным для копирования</span>
        </h2>
        <div className="space-y-[8px]">
          {moats.map((m) => (
            <div key={m.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] mb-[3px]">{m.t}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[3px]">{m.d}</p>
              <p className="text-[9.5px] italic text-[hsl(var(--slide-gold))] leading-[1.4]">Как: {m.how}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Distribution moats · долгосрочное преимущество
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px] tracking-[-0.01em] max-w-[1800px]">
        Что делает продукт <span className="text-[hsl(var(--slide-gold))]">сложным для копирования</span>
      </h2>
      <div className="grid grid-cols-3 gap-[24px] max-w-[1900px]">
        {moats.map((m) => (
          <div key={m.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[26px] py-[22px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[10px]">{m.t}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] mb-[10px]">{m.d}</p>
            <p className="text-[14px] italic text-[hsl(var(--slide-gold))] leading-[1.5]">Как: {m.how}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
