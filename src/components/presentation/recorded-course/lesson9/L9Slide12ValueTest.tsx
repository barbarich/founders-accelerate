import { useIsMobile } from "@/hooks/use-mobile";

const bands = [
  {
    range: "9-10 · промоутеры",
    body: "Не просто пользуются - приводят других. Вот это и есть ценность.",
    strong: true,
  },
  {
    range: "7-8 · пассивы",
    body: "Устраивает, но без огня. Уйдут к первому конкуренту, что чуть лучше.",
    strong: false,
  },
  {
    range: "1-6 · детракторы",
    body: "Не рекомендуют. Часто ещё и отговаривают других.",
    strong: false,
  },
];

export default function L9Slide12ValueTest() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[7px]">
          Тест на ценность · один вопрос
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Порекомендуют? <span className="text-[hsl(var(--slide-gold))]">Шкала 1-10</span> не врёт.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px] mb-[9px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
            «Насколько ты готов порекомендовать [твой продукт] другу или коллеге?»
          </p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mt-[4px]">
            1 - точно нет · 10 - точно да
          </p>
        </div>
        <div className="space-y-[6px] mb-[9px]">
          {bands.map((b) => (
            <div key={b.range} className={`px-[10px] py-[6px] ${b.strong ? "border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)]" : "border-l-2 border-[hsl(var(--slide-text-muted)/0.4)]"}`}>
              <p className={`text-[10px] font-bold ${b.strong ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"}`}>{b.range}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[7px]">
          <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">Как читать</p>
          <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">
            Промоутеров заметно больше детракторов - продукт ценен. Поровну или детракторов больше - ценности пока нет. Меньше 30 ответов процент не считай, но вопрос задай голосом: «честно, вряд ли» скажет больше любой шкалы.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Тест на ценность · один вопрос
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.01em]">
        Порекомендуют? <span className="text-[hsl(var(--slide-gold))]">Шкала 1-10</span> не врёт.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px] mb-[22px]">
        <p className="text-[27px] text-[hsl(var(--slide-text))] leading-[1.4] italic mb-[8px]">
          «Насколько ты готов порекомендовать [твой продукт] другу или коллеге?»
        </p>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          1 - точно нет · 10 - точно да
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1800px] mb-[22px]">
        {bands.map((b) => (
          <div key={b.range} className={`px-[24px] py-[16px] ${b.strong ? "border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.08)]" : "border-l-[4px] border-[hsl(var(--slide-text-muted)/0.4)]"}`}>
            <p className={`text-[19px] font-bold mb-[6px] ${b.strong ? "text-[hsl(var(--slide-gold))]" : "text-[hsl(var(--slide-text-muted))]"}`}>{b.range}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{b.body}</p>
          </div>
        ))}
      </div>
      <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[26px] py-[16px] max-w-[1800px]">
        <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] mb-[5px]">Как читать</p>
        <p className="text-[19px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Промоутеров заметно больше детракторов - продукт ценен. Поровну или детракторов больше - ценности пока нет. Меньше 30 ответов процент не считай, но вопрос задай голосом: «честно, вряд ли» скажет больше любой шкалы.
        </p>
      </div>
    </div>
  );
}
