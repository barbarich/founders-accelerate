import FOM1SlideBase from "./FOM1SlideBase";

const levels = [
  { e: "⚔️", t: "Прямые", d: "делают то же самое для той же аудитории (Profound, AthenaHQ для AIRecom)" },
  { e: "🔄", t: "Косвенные", d: "решают ту же боль другим способом (SEO-агентство, которое тоже обещает «нас будут находить»)" },
  { e: "📋", t: "Замена", d: "что клиент делает СЕЙЧАС вместо вашего продукта: Excel, ChatGPT-промпт, ручной процесс, «ничего»" },
];

const howToFind = [
  ["Google", "«[ваша задача] software / tool / app» + «alternative to [известный продукт]»"],
  ["Perplexity / ChatGPT", "«дай 15 компаний, которые решают [проблема] для [аудитория]»"],
  ["G2 / Capterra / ProductHunt", "категории + рейтинги + жалобы пользователей"],
  ["Reddit / X", "поиск по фразам «I wish there was a tool for…», «alternative to…»"],
];

export default function FOM1Slide12WhoPays() {
  return (
    <FOM1SlideBase
      slide={13}
      eyebrow="Сегментация конкурентов"
      title="Три уровня — и где их искать"
      subtitle="Конкурент — это не только тот, кто делает похожее. Это всё, что закрывает ту же боль"
    >
      <div className="space-y-[8px] md:space-y-[14px] max-w-[1800px] text-[12px] md:text-[22px]">
        {levels.map((x, i) => (
          <div key={i} className="flex items-baseline gap-[12px]">
            <span className="text-[18px] md:text-[28px]">{x.e}</span>
            <p>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{x.t}</span>
              <span className="text-[hsl(var(--slide-text-muted))]"> — {x.d}</span>
            </p>
          </div>
        ))}
      </div>

      <p className="mt-[12px] md:mt-[20px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">
        Где их искать
      </p>
      <div className="mt-[6px] grid grid-cols-1 md:grid-cols-2 gap-x-[24px] gap-y-[6px] max-w-[1800px] text-[12px] md:text-[22px]">
        {howToFind.map(([s, d], i) => (
          <div key={i} className="flex gap-[8px]">
            <span className="text-[hsl(var(--slide-gold))] font-mono w-[20px]">{i + 1}.</span>
            <p>
              <span className="text-[hsl(var(--slide-text))] font-semibold">{s}</span>{" "}
              <span className="text-[hsl(var(--slide-text-muted))]">— {d}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p>💡 Цель — собрать 10–15 имён. Из них 3–5 прямых, 3–5 косвенных, 2–3 «замены». Это ваша карта рынка на эту неделю.</p>
      </div>
    </FOM1SlideBase>
  );
}
