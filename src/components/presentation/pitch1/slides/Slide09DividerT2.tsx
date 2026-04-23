import { Eyebrow, H1, H2, Divider, SlideFrame } from "./_shared";

export default function Slide09DividerT2() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <Eyebrow>Тема 2</Eyebrow>
        <H1 size={88}>Ресерч: что НЕ строить</H1>
        <div style={{ width: 320 }}><Divider /></div>
        <H2 size={32}>Самый дорогой навык 2026.</H2>
      </div>
    </SlideFrame>
  );
}