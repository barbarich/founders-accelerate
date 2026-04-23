import { Eyebrow, H1, H2, Divider, SlideFrame } from "./_shared";

export default function Slide13DividerT3() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <Eyebrow>Тема 3</Eyebrow>
        <H1 size={88}>MVP с AI, без команды</H1>
        <div style={{ width: 320 }}><Divider /></div>
        <H2 size={32}>Как один человек строит продукт.</H2>
      </div>
    </SlideFrame>
  );
}