import FOM1SlideBase from "./FOM1SlideBase";

export default function FOM1Slide02MainMistake() {
  return (
    <FOM1SlideBase
      slide={2}
      eyebrow="Главный инсайт"
      title="Главная ошибка стартапов"
      subtitle="90% продуктов проваливаются по одной причине"
    >
      <p className="max-w-[1500px]">
        Строят то, что никому не нужно. Не потому что продукт плохой — а потому что не проверили,
        кто за это заплатит.
      </p>
      <p className="mt-[28px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px]">
        Ваша задача за эти 6 встреч: перестать угадывать и начать проверять.
      </p>
    </FOM1SlideBase>
  );
}
