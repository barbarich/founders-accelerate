import { Eyebrow, H2, Mono, SlideFrame } from "./_shared";

export default function Slide03Pipeline() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="text-center"><Eyebrow>4 этапа</Eyebrow></div>
        <H2 size={36}>Пайплайн запуска продукта с AI</H2>
        <Mono size={32}>{`1. Валидация       →  знаем, что купят
2. Ресерч          →  знаем, что НЕ строить
3. MVP с AI        →  строим за дни, не месяцы
4. Первые клиенты  →  продаём руками`}</Mono>
      </div>
    </SlideFrame>
  );
}