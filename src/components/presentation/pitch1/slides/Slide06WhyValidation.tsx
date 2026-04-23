import { Eyebrow, Mono, SlideFrame } from "./_shared";

export default function Slide06WhyValidation() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12">
        <div className="text-center"><Eyebrow>Почему это первый этап</Eyebrow></div>
        <Mono size={26}>{`→ Build без спроса = самая дорогая ошибка
→ 9 из 10 MVP без валидации получают 0 покупок
→ AI сделал валидацию почти бесплатной —
   и её всё равно пропускают 90% фаундеров`}</Mono>
      </div>
    </SlideFrame>
  );
}