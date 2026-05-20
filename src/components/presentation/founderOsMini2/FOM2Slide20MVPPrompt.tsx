import FOM2SlideBase from "./FOM2SlideBase";

export default function FOM2Slide20MVPPrompt() {
  return (
    <FOM2SlideBase
      slide={20}
      eyebrow="FAQ · вопросы и ответы"
      title="Никто нигде не застрял?"
      subtitle="Обсуди свои вопросы — получи ответы и фидбек."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] max-w-[1600px] text-[13px] md:text-[22px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.4)] rounded-[16px] p-[20px] md:p-[32px] flex flex-col justify-center">
          <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[12px] md:text-[16px] mb-[12px] md:mb-[20px]">
            О чём спросить
          </p>
          <ul className="space-y-[10px] md:space-y-[16px] text-[hsl(var(--slide-text))]">
            <li className="flex items-start gap-[10px] md:gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] text-[16px] md:text-[22px] leading-[1.2]">•</span>
              <span>Не уверен в цене — спроси</span>
            </li>
            <li className="flex items-start gap-[10px] md:gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] text-[16px] md:text-[22px] leading-[1.2]">•</span>
              <span>Сомневаешься в MVP-скоупе — обсуди</span>
            </li>
            <li className="flex items-start gap-[10px] md:gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] text-[16px] md:text-[22px] leading-[1.2]">•</span>
              <span>Не понятна ценность для клиента — разберём</span>
            </li>
            <li className="flex items-start gap-[10px] md:gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] text-[16px] md:text-[22px] leading-[1.2]">•</span>
              <span>Застрял в позиционировании — подскажу</span>
            </li>
            <li className="flex items-start gap-[10px] md:gap-[14px]">
              <span className="text-[hsl(var(--slide-gold))] text-[16px] md:text-[22px] leading-[1.2]">•</span>
              <span>Любой другой вопрос по продукту</span>
            </li>
          </ul>
        </div>

        <div className="space-y-[12px] md:space-y-[20px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[16px] md:p-[24px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[12px] md:text-[16px]">Формат</p>
            <p className="mt-[8px] md:mt-[12px] text-[hsl(var(--slide-text))]">
              Задай вопрос голосом в зуме или в чате. Разбираем вместе — и твоё, и чужие вопросы тоже учат.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[16px] md:p-[24px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[12px] md:text-[16px]">Что получишь</p>
            <p className="mt-[8px] md:mt-[12px] text-[hsl(var(--slide-text))]">
              Прямой ответ, фидбек на твою ситуацию и рекомендацию — что делать дальше.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[16px] md:p-[24px]">
            <p className="text-[hsl(var(--slide-gold))] uppercase tracking-[0.2em] text-[12px] md:text-[16px]">Правило</p>
            <p className="mt-[8px] md:mt-[12px] text-[hsl(var(--slide-text))]">
              Нет «глупых» вопросов. Если ты об этом думаешь — ещё 3 человека в зале тоже.
            </p>
          </div>
        </div>
      </div>
    </FOM2SlideBase>
  );
}
