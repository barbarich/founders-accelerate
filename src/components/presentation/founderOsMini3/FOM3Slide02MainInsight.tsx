import FOM3SlideBase from "./FOM3SlideBase";

export default function FOM3Slide02MainInsight() {
  return (
    <FOM3SlideBase
      slide={2}
      eyebrow="Главный инсайт сессии"
      title={
        <>
          Скорость = <span className="text-[hsl(var(--slide-gold))]">качество ТЗ</span>.
        </>
      }
      subtitle="AI собирает MVP за вечер только тогда, когда позиционирование, цена и MUST HAVE уже зашиты. Без этого AI быстро собирает не то."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px] max-w-[1800px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">С1 дал</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Позиционирование</span> и язык клиента — это заголовок лендинга и тон продукта
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">С2 дал</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Цена и MUST HAVE</span> — это блок Pricing на лендинге и список фич для Lovable
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">С3 делает</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Превращает это</span> в работающий лендинг и MVP — через AI-стек и Plan Mode
          </p>
        </div>
      </div>
      <div className="mt-[12px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[22px]">
        <p>💡 Если сегодня тянет «придумать на ходу» — значит ДЗ С2 не доделано. Возвращаемся к MUST HAVE, потом строим.</p>
      </div>
    </FOM3SlideBase>
  );
}
