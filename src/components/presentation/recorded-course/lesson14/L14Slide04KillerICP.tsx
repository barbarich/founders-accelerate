import { useIsMobile } from "@/hooks/use-mobile";

const filters = [
  { n: "1", name: "Размер компании", q: "Сколько сотрудников · сколько ARR (если известно)?", anti: "«SMB и enterprise одинаково» — нет, это две разные продажи" },
  { n: "2", name: "Индустрия", q: "Не «B2B» — конкретная вертикаль: fintech / healthtech / PropTech / legal", anti: "«SaaS для всех» = SaaS ни для кого" },
  { n: "3", name: "Роль покупателя", q: "Конкретный title: «Head of QA» или «VP of Marketing»", anti: "«CTO или Head of Eng» — определись" },
  { n: "4", name: "Триггер сейчас", q: "Что у них происходит, что делает решение срочным? Funding, hiring, миграция?", anti: "Без триггера = «может быть когда-нибудь»" },
  { n: "5", name: "Бюджет", q: "Под какой ценник у них есть полномочия закупать без эскалации?", anti: "Если твоя цена > их PO threshold — застрянешь в procurement месяцами" },
  { n: "6", name: "Процесс закупок", q: "Сколько людей подписывают? Есть ли legal / security review?", anti: "Не знаешь = не закроешь в срок" },
  { n: "7", name: "Похож на одного твоего", q: "Возьми лучшего из существующих клиентов. Кого ещё ты бы клонировал?", anti: "ICP, не похожий ни на кого из портфолио — фантазия" },
];

export default function L14Slide04KillerICP() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Killer ICP · 7 фильтров
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Без 7 ответов ICP = <span className="text-[hsl(var(--slide-gold))]">«все», т.е. никто</span>
        </h2>
        <div className="space-y-[3px]">
          {filters.map((f) => (
            <div key={f.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <div className="flex items-baseline gap-[4px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{f.n}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{f.name}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{f.q}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-gold)/0.85)] italic leading-[1.4] ml-[14px]">⚠ {f.anti}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Killer ICP · 7 фильтров
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
        Без 7 ответов ICP = <span className="text-[hsl(var(--slide-gold))]">«все», т.е. никто</span>
      </h2>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[10px] max-w-[1700px]">
        {filters.map((f) => (
          <div key={f.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[22px] py-[12px]">
            <div className="flex items-baseline gap-[14px] mb-[4px]">
              <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none">{f.n}</span>
              <p className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{f.name}</p>
            </div>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[42px] mb-[3px]">{f.q}</p>
            <p className="text-[12px] text-[hsl(var(--slide-gold)/0.85)] italic leading-[1.4] ml-[42px]">⚠ {f.anti}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
