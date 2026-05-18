import { useIsMobile } from "@/hooks/use-mobile";

const layers = [
  {
    n: "01",
    t: "Andromeda · движок Meta",
    tag: "AI · 2024+",
    body: "Глубокая нейросеть, которая в реальном времени решает, кому показать твой креатив. Учится на действиях пикселя. Чем больше данных — тем умнее.",
  },
  {
    n: "02",
    t: "Advantage+ Audience",
    tag: "ШИРОКИЙ ВХОД",
    body: "Не задаёшь точную аудиторию. Даёшь suggestion: страна, возраст 18-65, языки. Дальше Andromeda сама находит, кто конвертится.",
  },
  {
    n: "03",
    t: "Advantage+ Placements",
    tag: "ВСЕ ПЛОЩАДКИ",
    body: "Feed, Reels, Stories, Marketplace, Audience Network. Алгоритм сам решает, где твой креатив сработает лучше. Не урезаешь.",
  },
  {
    n: "04",
    t: "Dynamic Creative",
    tag: "АЛГОРИТМ-КОМПОЗИТОР",
    body: "Грузишь 5–10 медиа + 3–5 текстов + 3 заголовка. Meta перемешивает комбинации и оставляет работающие. Ты не выбираешь — данные выбирают.",
  },
];

export default function M10Slide05Andromeda() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Andromeda + Advantage+ · как это работает
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Четыре слоя AI <span className="text-[hsl(var(--slide-gold))]">внутри Ads Manager</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Сегодня выбираем «Advantage+» везде, где можно. Это не маркетинговый buzzword — это движок, который сам делает работу маркетолога.
        </p>
        <div className="space-y-[4px]">
          {layers.map((l) => (
            <div key={l.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[4px]">
              <div className="flex items-baseline justify-between gap-[4px]">
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{l.n}.</span> {l.t}
                </p>
                <p className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">{l.tag}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] ml-[12px]">{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Andromeda + Advantage+ · как это работает
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px] tracking-[-0.02em]">
        Четыре слоя AI <span className="text-[hsl(var(--slide-gold))]">внутри Ads Manager</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1600px]">
        Сегодня в воркшопе выбираем «Advantage+» везде, где Meta предлагает. Это не маркетинговый buzzword — это движок, который сам делает работу маркетолога.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {layers.map((l) => (
          <div key={l.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[18px]">
            <div className="flex items-baseline justify-between gap-[8px] mb-[6px]">
              <div className="flex items-baseline gap-[12px]">
                <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{l.n}</span>
                <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{l.t}</span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))]">{l.tag}</span>
            </div>
            <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5] ml-[42px]">{l.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
