export default function M1Slide02MainMistake() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">Главная ошибка стартапов</p>
      <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        90% продуктов проваливаются<br />по одной причине
      </h2>
      <div className="max-w-[1000px] space-y-[24px]">
        <p className="text-[28px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">
          Строят то, что никому не нужно. Не потому что продукт плохой — а потому что не проверили, кто за это заплатит.
        </p>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold)/0.4)]" />
        <p className="text-[24px] text-[hsl(var(--slide-gold))] font-medium leading-[1.5]">
          Ваша задача на этой неделе: перестать угадывать и начать проверять.
        </p>
      </div>
    </div>
  );
}
