import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { n: "1", t: "1 история клиента", d: "Возьми реального клиента (или себя как клиента). 4 элемента: клиент-герой · конфликт-боль · трансформация · конкретная деталь. Запиши в Notion/Doc" },
  { n: "2", t: "5 форматов из 1 истории", d: "Long-form post (LinkedIn) + carousel (Instagram) + 60-сек reel + newsletter section + 1 ключевой инсайт для Twitter" },
  { n: "3", t: "AI-стек подключён", d: "Минимум: ChatGPT/Claude + Canva + 1 видео-инструмент (Opus Clip или HeyGen). Free-tier'ы достаточны для старта" },
  { n: "4", t: "Cadence на 4 недели запланирован", d: "Когда публикуешь — день/время. Какой формат в какой день. Без расписания — забросишь через 2 недели" },
  { n: "5", t: "Первый long-form опубликован", d: "Сегодня. Не завтра. С твоей реальной аудитории — реальный фидбек о том, что зашло" },
];

export default function L10SlideHomework() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Домашка на эту неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          5 пунктов · запусти контент-систему
        </h2>
        <div className="space-y-[8px]">
          {items.map((i) => (
            <div key={i.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{i.n}</span>
              <div className="flex-1">
                <p className="text-[11px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{i.t}</p>
                <p className="text-[10px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Домашка на эту неделю
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        5 пунктов · запусти контент-систему
      </h2>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px] max-w-[1800px]">
        {items.map((i) => (
          <div key={i.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[44px] h-[44px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{i.n}</span>
            <div className="flex-1">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{i.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{i.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
