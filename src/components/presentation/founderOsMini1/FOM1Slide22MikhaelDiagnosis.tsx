import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide22MikhaelDiagnosis() {
  return (
    <FOM1SlideBase
      slide={23}
      eyebrow="Применение · участник 1"
      title="Михаэль Резник · AIRecom"
      subtitle="Диагностика и точка фокуса"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[20px] max-w-[1800px] text-[12px] md:text-[22px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Где сейчас</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· Рабочий продукт на airecom.io: проверка AI-видимости бизнеса в ChatGPT, Gemini, Perplexity</li>
            <li>· Анализ структуры сайта, контента, доверительных сигналов и технической готовности к AI-поиску</li>
            <li>· ICP пока широкий: «SMB + агентства + владельцы сайтов», цена 250 ₪, Freemium</li>
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] p-[14px] md:p-[24px]" style={{ borderColor: "hsl(0 70% 60% / 0.4)" }}>
          <p className="uppercase tracking-[0.2em] text-[10px] md:text-[14px]" style={{ color: "hsl(0 70% 60%)" }}>Что не работает</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· «SMB + agencies + владельцы сайтов» — это рынок, а не ICP. Под кого писать лендинг — непонятно</li>
            <li>· Value prop «AI-видимость» абстрактный: клиент не понимает, что он теряет и сколько это стоит в деньгах</li>
            <li>· Главные конкуренты — не Profound и AthenaHQ, а SEO-агентство клиента и сам ChatGPT, куда владелец вбивает свой сайт «чтоб проверить»</li>
          </ul>
        </div>
      </div>
      <div className="mt-[10px] md:mt-[16px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p className="text-[hsl(var(--slide-gold))] font-semibold">Гипотеза на эту неделю</p>
        <p className="text-[hsl(var(--slide-text))]">
          Выбрать ОДИН вертикал, где «быть рекомендованным AI» = деньги уже завтра:
          local services (стоматологи, юристы, клиники), e-commerce DTC-бренды или B2B-агентства.
          Переписать позиционирование под него: не «AI-видимость», а конкретный результат — «клиенты, которые приходят, когда ChatGPT советует именно вас».
        </p>
        <p className="mt-[4px] text-[hsl(var(--slide-text-muted))]">
          <span className="text-[hsl(var(--slide-text))] font-semibold">Reframe:</span> продукт есть и работает. Задача недели — найти ту нишу, где боль «нас не рекомендует AI» уже осознана, и упаковать AIRecom под неё одним лендингом.
        </p>
      </div>
    </FOM1SlideBase>
  );
}

