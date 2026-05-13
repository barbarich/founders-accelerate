import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide03HonestQuestion() {
  return (
    <FOM1SlideBase slide={3} eyebrow="Вопрос на старт" title="Один честный вопрос">
      <p className="max-w-[1500px]">
        С кем из тех, кто <span className="text-[hsl(var(--slide-gold))] font-semibold">НЕ твой друг</span>,
        ты пытался узнать — готов ли купить твою идею за последние две недели?
      </p>
      <p className="mt-[24px] max-w-[1500px] text-[hsl(var(--slide-text-muted))]">
        Не показать. Не спросить мнение. <span className="text-[hsl(var(--slide-text))] font-semibold">Узнать — заплатит ли.</span>
      </p>
      <p className="mt-[28px] max-w-[1500px] text-[hsl(var(--slide-gold))] font-semibold">
        Если ноль — сегодня изменит всё, что вы делаете дальше.
      </p>
    </FOM1SlideBase>
  );
}
