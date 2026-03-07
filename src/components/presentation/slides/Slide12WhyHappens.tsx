const problems = [
  {
    num: "01",
    title: "Нет структуры",
    text: "Не знаете что делать на каждом этапе. Идея есть, а план — нет.",
  },
  {
    num: "02",
    title: "Нет окружения",
    text: "В одиночку мотивация умирает. Не с кем обсудить, не от кого получить фидбек.",
  },
  {
    num: "03",
    title: "Нет обратной связи",
    text: "Строите в вакууме. Не понимаете, правильно ли идёте.",
  },
];

export default function Slide12WhyHappens() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[16px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Причины</p>
      <h2 className="text-[64px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[80px]">
        Почему так происходит
      </h2>

      <div className="flex gap-[48px] mb-[64px]">
        {problems.map((p) => (
          <div key={p.num} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border))] rounded-[8px] p-[48px]">
            <span className="text-[48px] font-bold text-[hsl(var(--slide-gold)/0.2)] font-mono">{p.num}</span>
            <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mt-[16px] mb-[16px]">{p.title}</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">{p.text}</p>
          </div>
        ))}
      </div>

      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium text-center">
        The Founders Circle решает все три.
      </p>
    </div>
  );
}
