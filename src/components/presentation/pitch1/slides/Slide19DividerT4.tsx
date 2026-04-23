import { Eyebrow, H1, H2, Divider, SlideFrame } from "./_shared";

export default function Slide19DividerT4() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <Eyebrow>Тема 4</Eyebrow>
        <H1 size={80}>Дистрибуция и первые клиенты</H1>
        <div style={{ width: 320 }}><Divider /></div>
        <H2 size={32}>Магии нет. Есть публичность, бета-запуски, outreach и реклама.</H2>
      </div>
    </SlideFrame>
  );
}