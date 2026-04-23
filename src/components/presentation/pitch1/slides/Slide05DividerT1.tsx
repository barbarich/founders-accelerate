import { Eyebrow, H1, H2, Divider, SlideFrame } from "./_shared";

export default function Slide05DividerT1() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <Eyebrow>Тема 1</Eyebrow>
        <H1 size={88}>Валидация за 48 часов</H1>
        <div style={{ width: 320 }}><Divider /></div>
        <H2 size={32}>До единой строчки кода.</H2>
      </div>
    </SlideFrame>
  );
}