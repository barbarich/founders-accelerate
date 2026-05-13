import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide12WhoPays() {
  return (
    <FOM1SlideBase
      slide={12}
      eyebrow="Целевая аудитория"
      title="Кто заплатит vs кому полезно"
      subtitle="Один — рынок. Второй — фантазия"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] md:gap-[24px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[14px] md:p-[24px]">
          <p className="text-[20px] md:text-[32px]">🌍</p>
          <h3 className="font-display font-bold text-[hsl(var(--slide-text))] text-[14px] md:text-[26px] mt-[6px]">
            «Кому полезно» = весь мир
          </h3>
          <p className="text-[hsl(var(--slide-text-muted))] mt-[6px]">
            Это не аудитория, это фантазия.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] p-[14px] md:p-[24px]">
          <p className="text-[20px] md:text-[32px]">💰</p>
          <h3 className="font-display font-bold text-[hsl(var(--slide-gold))] text-[14px] md:text-[26px] mt-[6px]">
            «Кто заплатит» = конкретный человек
          </h3>
          <p className="text-[hsl(var(--slide-text-muted))] mt-[6px]">
            С конкретной болью, который уже тратит деньги/время на решение.
          </p>
        </div>
      </div>
      <p className="mt-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px]">
        Вопрос не «кому это нужно?», а «кто прямо сейчас страдает от этой проблемы и готов платить за решение?»
      </p>
    </FOM1SlideBase>
  );
}
