import { H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide01ColdFact() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <H1 size={84}>В 2024 году я не умел<br/>писать код.</H1>
        <div style={{ marginTop: 60 }}>
          <Body size={28} color={COLORS.muted}>Сегодня я один веду три продукта.</Body>
        </div>
      </div>
    </SlideFrame>
  );
}