import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide22MikhaelDiagnosis() {
  return (
    <FOM1SlideBase
      slide={22}
      eyebrow="Применение · участник 1"
      title="Михаэль Резник · AIRecom"
      subtitle="Диагностика и точка фокуса"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[20px] max-w-[1800px] text-[12px] md:text-[22px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Где сейчас</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· Рабочий продукт на airecom.io, 0 платящих, цена 250 шек, Freemium</li>
            <li>· ICP: «малый и средний бизнес + маркетинговые агентства»</li>
            <li>· Канал: личные связи в нише, «где любят тишину»</li>
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] p-[14px] md:p-[24px]" style={{ borderColor: "hsl(0 70% 60% / 0.4)" }}>
          <p className="uppercase tracking-[0.2em] text-[10px] md:text-[14px]" style={{ color: "hsl(0 70% 60%)" }}>Что не работает</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· ICP «SMB + agencies» — это не ICP, это рынок. Слишком широко.</li>
            <li>· Freemium при 0 paying = модель неверная или value prop слишком слабый</li>
            <li>· Главные конкуренты не Profound и не AthenaHQ — а маркетинговое агентство клиента, которое уже делает SEO, и ChatGPT, в который владелец сам вбивает свой сайт</li>
          </ul>
        </div>
      </div>
      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p className="text-[hsl(var(--slide-gold))] font-semibold">Гипотеза на эту неделю</p>
        <p className="text-[hsl(var(--slide-text))]">
          Выбрать ОДИН вертикал из трёх: local services / e-commerce / B2B SaaS.
          Переписать позиционирование под него по формуле результата.
        </p>
        <p className="mt-[4px] text-[hsl(var(--slide-text-muted))]">
          <span className="text-[hsl(var(--slide-text))] font-semibold">Reframe:</span> код у тебя есть. Не выкидываем. Переупаковываем под одного ICP.
        </p>
      </div>
    </FOM1SlideBase>
  );
}
