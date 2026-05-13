import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide11Competitors() {
  return (
    <FOM1SlideBase
      slide={12}
      eyebrow="Зачем смотреть на конкурентов"
      title="Не изобретай велосипед — посмотри, как его уже сделали"
      subtitle="Если у тебя появилась идея — кто-то её уже реализовал. Если проблема настоящая — она уже решается. Задача — найти, как именно"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[20px] max-w-[1800px] text-[12px] md:text-[22px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что у конкурентов уже есть</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· Они набили шишек, которых вы избежите</li>
            <li>· Их продукт уже работает и приносит деньги</li>
            <li>· Они проверили десятки гипотез — оставили то, что сработало</li>
            <li>· У них есть pricing, флоу продажи, лендинг, юзкейсы — на всё это можно смотреть</li>
          </ul>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Что вы получаете</p>
          <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
            <li>· Не выдумываете решение — заимствуете то, что доказано</li>
            <li>· Не повторяете чужие ошибки — учитесь на них бесплатно</li>
            <li>· Понимаете, где конкурент слаб — там ваша точка входа</li>
            <li>· Видите, за что люди уже платят — это ваш будущий чек</li>
          </ul>
        </div>
      </div>
      <div className="mt-[12px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p>💡 «Нет конкурентов» = либо вы плохо искали, либо рынка нет. Конкурент — это доказательство, что проблема настоящая.</p>
      </div>
    </FOM1SlideBase>
  );
}
