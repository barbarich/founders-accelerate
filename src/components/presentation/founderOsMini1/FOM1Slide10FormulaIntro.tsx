import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide10FormulaIntro() {
  return (
    <FOM1SlideBase
      slide={10}
      eyebrow="Формула позиционирования"
      title="Как пишется одно предложение, ради которого платят"
      subtitle="Простая формула, которая собирает всё, о чём говорили выше"
    >
      <div className="max-w-[1700px] space-y-[12px] md:space-y-[20px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[14px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Формула</p>
          <p className="mt-[6px] md:mt-[10px] text-[hsl(var(--slide-text))] text-[14px] md:text-[26px] leading-[1.45]">
            <span className="font-semibold">[Кто]</span> получает <span className="font-semibold">[какой результат]</span> за <span className="font-semibold">[сколько времени / усилий]</span> — без <span className="font-semibold">[того, от чего избавляем]</span>.
          </p>
          <p className="mt-[6px] md:mt-[10px] text-[hsl(var(--slide-text-muted))] text-[11px] md:text-[20px]">
            Пример: «Владелец магазина получает отчёт по продажам за 30 секунд — без аналитика и Excel».
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-[16px] text-[12px] md:text-[22px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Из чего состоит</p>
            <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
              <li>· <span className="font-semibold">Кто</span> — конкретный человек, не «бизнесы»</li>
              <li>· <span className="font-semibold">Результат</span> — что у него меняется в жизни</li>
              <li>· <span className="font-semibold">Время / усилия</span> — измеримо: минуты, шаги, деньги</li>
              <li>· <span className="font-semibold">Без чего</span> — от какой боли избавляем</li>
            </ul>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[20px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px]">Почему именно так</p>
            <ul className="mt-[6px] text-[hsl(var(--slide-text))] space-y-[3px]">
              <li>· Клиент покупает <span className="font-semibold">результат</span>, а не процесс</li>
              <li>· Узкий «кто» делает результат сильнее</li>
              <li>· Цифры делают обещание правдоподобным</li>
              <li>· «Без чего» показывает, что вы поняли его боль</li>
            </ul>
          </div>
        </div>

        <div className="border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] text-[12px] md:text-[22px]">
          <p>💡 Если из предложения убрать любой из четырёх блоков — оно становится либо рекламным шумом, либо непонятной фичей. Все четыре нужны.</p>
        </div>
      </div>
    </FOM1SlideBase>
  );
}
