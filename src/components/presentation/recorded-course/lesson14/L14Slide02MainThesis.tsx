import { useIsMobile } from "@/hooks/use-mobile";

const context = [
  { src: "Урок 12", what: "Реклама в Meta - платный канал запущен" },
  { src: "Урок 13", what: "B2B-продажи - аутрич и первые сделки" },
  { src: "Урок 14", what: "Считаем, какие из этих клиентов делают деньги, а какие - убыток" },
];

export default function L14Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Главная мысль</p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Маркетинг отвечает, где брать клиентов.<br />
          <span className="text-[hsl(var(--slide-gold))]">Юнит-экономика - стоит ли их брать.</span>
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          Если один клиент приносит меньше, чем стоит его привлечение и обслуживание, реклама не спасёт бизнес - она ускорит его смерть. Рост без экономики - это масштабирование убытков.
        </p>
        <div className="space-y-[6px] mb-[10px]">
          {context.map((c, i) => (
            <div key={i} className="flex items-start gap-[8px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
              <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))] shrink-0 w-[52px]">{c.src}</span>
              <span className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.what}</span>
            </div>
          ))}
        </div>
        <p className="text-[10.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45]">
          Хорошая новость: вся юнит-экономика - это арифметика на уровне 6 класса. Четыре числа, два правила, одна таблица.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Главная мысль</p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em] max-w-[1700px]">
        Маркетинг отвечает, где брать клиентов.<br />
        <span className="text-[hsl(var(--slide-gold))]">Юнит-экономика - стоит ли их брать.</span>
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[28px] max-w-[1600px]">
        Если один клиент приносит меньше, чем стоит его привлечение и обслуживание, реклама не спасёт бизнес - она ускорит его смерть. Рост без экономики - это масштабирование убытков.
      </p>
      <div className="space-y-[10px] mb-[28px] max-w-[1400px]">
        {context.map((c, i) => (
          <div key={i} className="flex items-baseline gap-[24px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[24px] py-[12px]">
            <span className="text-[18px] font-bold text-[hsl(var(--slide-gold))] shrink-0 w-[110px]">{c.src}</span>
            <span className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.what}</span>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.45] max-w-[1600px]">
        Хорошая новость: вся юнит-экономика - это арифметика на уровне 6 класса. Четыре числа, два правила, одна таблица.
      </p>
    </div>
  );
}
