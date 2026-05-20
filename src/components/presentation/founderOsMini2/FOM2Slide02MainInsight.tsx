import FOM2SlideBase from "./FOM2SlideBase";

export default function FOM2Slide02MainInsight() {
  return (
    <FOM2SlideBase
      slide={2}
      eyebrow="Главный инсайт сессии"
      title={
        <>
          Клиент покупает не продукт — <span className="text-[hsl(var(--slide-gold))]">результат</span>.
        </>
      }
      subtitle="Цена — это стоимость результата. MVP — это минимум, который доставит результат. Всё, что не ведёт к результату клиента, — лишнее."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px] max-w-[1800px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">Позиционирование</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Какой результат</span> вы продаёте — и какими словами это описываете
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">Цена</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Во сколько</span> вы оцениваете этот результат — и почему именно столько
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">MVP-скоуп</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Минимум фич,</span> которые доставляют этот результат — без украшений
          </p>
        </div>
      </div>
      <div className="mt-[12px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[22px]">
        <p>💡 Эти три блока — одно решение, не три. Если меняется позиционирование — меняется цена и скоуп. Если режем скоуп — проверяем, держится ли обещание.</p>
      </div>
    </FOM2SlideBase>
  );
}
