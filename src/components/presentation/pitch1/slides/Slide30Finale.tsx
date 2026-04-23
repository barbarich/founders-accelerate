import { H1, Divider, SlideFrame, SlideFooter, COLORS } from "./_shared";

export default function Slide30Finale() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-12 text-center">
        <H1 size={120}>Спасибо.</H1>
        <div style={{ width: 320 }}><Divider /></div>
        <div style={{ fontSize: 32, lineHeight: 1.5, color: COLORS.text }}>
          Ссылка в чате — последний раз.<br/>48 часов.
        </div>
      </div>
      <SlideFooter>Михаэль</SlideFooter>
    </SlideFrame>
  );
}