import FOM4SlideBase from "./FOM4SlideBase";

export default function FOM4Slide02MainInsight() {
  return (
    <FOM4SlideBase
      slide={2}
      eyebrow="Главный инсайт сессии"
      title={
        <>
          Aha живёт <span className="text-[hsl(var(--slide-gold))]">в продукте</span>, не на лендинге.
        </>
      }
      subtitle="Лендинг обещает — продукт доказывает. Если человек зашёл и ушёл за минуту, проблема не в трафике и не в цене. Сегодня чиним продукт, а не маркетинг."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-[20px] max-w-[1800px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">С1–С2 дали</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Позиционирование и цену</span> — обещание, ради которого человек кликнул
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">С3 дал</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Live лендинг и MVP</span> — место, где обещание должно сбыться
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[14px] p-[12px] md:p-[24px]">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[10px] md:text-[14px] mb-[6px]">С4 делает</p>
          <p className="text-[12px] md:text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-semibold">Первые 60 секунд</span> проходимыми — путь к Aha и причину вернуться
          </p>
        </div>
      </div>
      <div className="mt-[12px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[22px]">
        <p>💡 Aha — это не фича и не «вау-анимация». Это момент, когда человек признаёт: «это работает для меня». Наша работа — сократить путь до него.</p>
      </div>
    </FOM4SlideBase>
  );
}
