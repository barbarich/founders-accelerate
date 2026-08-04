import { useIsMobile } from "@/hooks/use-mobile";

const mistakes = [
  { n: "01", t: "Расплывчатый язык вместо цифр", body: "«Уверенный рост» ничего не говорит инвестору. «3x за 6 месяцев» — говорит всё. Цифра даёт зацепку для решения, прилагательное — нет." },
  { n: "02", t: "Слишком много на одном слайде", body: "Один слайд — одна мысль. Заголовок должен читаться за 5 секунд, а не требовать вчитываться в абзац." },
  { n: "03", t: "Раздутый рынок без источника", body: "«TAM $50B» без ссылки на источник — топ-жалоба инвесторов. Лучше меньшая, но обоснованная цифра, чем красивая без опоры." },
  { n: "04", t: "«У нас нет конкурентов»", body: "Это не преимущество, а красный флаг: либо не изучил рынок, либо рынка нет вообще. Конкуренты есть всегда — даже статус-кво." },
  { n: "05", t: "Один и тот же дек для всех", body: "Ангела волнует другое, чем фонд на Series A. Не адаптировал под конкретного инвестора — теряешь его в первые 30 секунд." },
];

export default function L15SlidePitchDeckMistakes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Пять ошибок в pitch deck
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Каждая теряет инвестора <span className="text-[hsl(var(--slide-gold))]">в первую минуту</span>
        </h2>
        <div className="space-y-[3px]">
          {mistakes.map((m) => (
            <div key={m.n} className="bg-[hsl(0_70%_55%/0.05)] border-l-2 border-[hsl(0_70%_55%/0.6)] rounded-[5px] px-[7px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(0_70%_65%)]">{m.n}.</span> {m.t}
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Пять ошибок в pitch deck
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.02em]">
        Каждая теряет инвестора <span className="text-[hsl(var(--slide-gold))]">в первую минуту</span>
      </h2>
      <div className="grid grid-cols-2 gap-[16px] max-w-[1700px]">
        {mistakes.map((m) => (
          <div key={m.n} className="bg-[hsl(0_70%_55%/0.05)] border-l-[4px] border-[hsl(0_70%_55%/0.6)] rounded-[12px] px-[26px] py-[14px]">
            <div className="flex items-baseline gap-[12px] mb-[4px]">
              <span className="font-display text-[24px] font-bold text-[hsl(0_70%_65%)] leading-none">{m.n}</span>
              <span className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{m.t}</span>
            </div>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[40px]">{m.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
