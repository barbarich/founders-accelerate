import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "1", t: "Идея", d: "Записал в одно предложение: что, кому, какая боль" },
  { n: "2", t: "Прототип за выходные", d: "Lovable или Claude Code. Не дизайн, не маркетинг — рабочий поток на одну ключевую фичу" },
  { n: "3", t: "Друзья и знакомые", d: "Показал прототип 10-15 людям из ЦА. Слушаю первый живой фидбек — на продукт, не на идею" },
  { n: "4", t: "Дорабатываю прототип", d: "Фиксаю что не работает, что не понятно, что вызывает «зачем мне это?»" },
  { n: "5", t: "Опросы и custdev", d: "10 качественных интервью + 100 количественных опросов. Размер боли + готовность платить" },
  { n: "6", t: "Доработка продукта", d: "Все инсайты → в дизайн и логику. Иногда — пивот гипотезы" },
  { n: "7", t: "Полноценная разработка", d: "Только когда вижу: суть понятна, проблема существует, рынок нужен. Иначе — назад к шагу 4" },
];

export default function L2SlideMyWorkflow() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[24px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Мой реальный workflow
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Как я строю продукт сейчас
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[14px]">
          Не теория. Так я делаю каждый продукт — <span className="text-[hsl(var(--slide-gold))]">Mikey · MetaMinder · TFC</span>.
        </p>
        <div className="space-y-[8px]">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-[10px]">
              <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[22px] h-[22px] flex items-center justify-center shrink-0 font-bold mt-[1px]">{s.n}</span>
              <div className="flex-1">
                <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] mb-[2px] leading-[1.2]">{s.t}</p>
                <p className="text-[10.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[14px] bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[10px]">
          <p className="text-[11px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
            Так я не трачу месяцы на то, за что никто не заплатит.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[60px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Мой реальный workflow
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.01em]">
        Как я строю продукт сейчас
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[36px] max-w-[1500px]">
        Не теория. Так я делаю каждый продукт — <span className="text-[hsl(var(--slide-gold))] font-semibold">Mikey · MetaMinder · TFC</span>.
      </p>
      <div className="grid grid-cols-2 gap-x-[40px] gap-y-[18px] max-w-[1800px] mb-[28px]">
        {steps.map((s) => (
          <div key={s.n} className="flex items-start gap-[18px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-full w-[44px] h-[44px] flex items-center justify-center shrink-0 font-bold mt-[2px]">{s.n}</span>
            <div className="flex-1">
              <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] mb-[4px] leading-[1.2]">{s.t}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.8)] leading-[1.5]">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[20px] max-w-[1800px]">
        <p className="text-[24px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4]">
          Так я не трачу месяцы на то, <span className="text-[hsl(var(--slide-gold))]">за что никто не заплатит</span>.
        </p>
      </div>
    </div>
  );
}
