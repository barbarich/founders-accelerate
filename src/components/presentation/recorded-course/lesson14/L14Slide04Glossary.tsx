import { useIsMobile } from "@/hooks/use-mobile";

const terms = [
  { term: "CAC", full: "customer acquisition cost", def: "Сколько денег ушло, чтобы получить одного платящего клиента. Все расходы канала / число платящих из него." },
  { term: "ARPU", full: "average revenue per user", def: "Средняя выручка с одного клиента в месяц. Если один тариф $29 - ARPU и есть $29." },
  { term: "Себестоимость", full: "COGS / product costs", def: "Во что обходится обслуживание клиента: AI-токены, API, хостинг, поддержка. Не путать с расходами на рекламу." },
  { term: "Валовая маржа", full: "gross margin", def: "Что остаётся от выручки после себестоимости, в %. Цена $29, косты $7 - маржа $22, то есть 75%." },
  { term: "Churn", full: "отток", def: "Процент клиентов, которые уходят за месяц. Churn 8% - клиент живёт в среднем 1/0.08 = 12.5 месяца." },
  { term: "LTV", full: "lifetime value", def: "Сколько маржи принесёт клиент за всю жизнь: маржа в месяц × средняя жизнь в месяцах." },
  { term: "Payback", full: "срок окупаемости", def: "Через сколько месяцев клиент вернёт свой CAC: CAC / маржа в месяц. Главное число для кэша." },
];

export default function L14Slide04Glossary() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Словарь урока · 7 терминов</p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Весь язык юнит-экономики - <span className="text-[hsl(var(--slide-gold))]">на одном слайде</span>
        </h2>
        <div className="space-y-[5px]">
          {terms.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.22)] rounded-[6px] px-[9px] py-[5px]">
              <p className="text-[9.5px] leading-[1.3]">
                <span className="font-bold text-[hsl(var(--slide-gold))]">{t.term}</span>
                <span className="text-[hsl(var(--slide-text-muted))]"> · {t.full}</span>
              </p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">{t.def}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mt-[7px] leading-[1.4]">
          Вернись к этому слайду, если дальше запутаешься - здесь всё, что понадобится.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Словарь урока · 7 терминов</p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Весь язык юнит-экономики - <span className="text-[hsl(var(--slide-gold))]">на одном слайде</span>
      </h2>
      <div className="space-y-[9px] max-w-[1700px]">
        {terms.map((t, i) => (
          <div key={i} className="flex items-baseline gap-[22px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[24px] py-[10px]">
            <p className="w-[330px] shrink-0 text-[19px] leading-[1.3]">
              <span className="font-bold text-[hsl(var(--slide-gold))]">{t.term}</span>
              <span className="text-[15px] text-[hsl(var(--slide-text-muted))]"> · {t.full}</span>
            </p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{t.def}</p>
          </div>
        ))}
      </div>
      <p className="text-[17px] text-[hsl(var(--slide-text-muted))] mt-[16px] leading-[1.4]">
        Вернись к этому слайду, если дальше запутаешься - здесь всё, что понадобится в уроке.
      </p>
    </div>
  );
}
