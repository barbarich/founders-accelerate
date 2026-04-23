import { Eyebrow, H1, H2, Divider, SlideFrame, COLORS } from "./_shared";

export default function Slide00Cover() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center text-center">
        <div style={{ marginBottom: 36 }}>
          <Eyebrow>The Founders Circle</Eyebrow>
        </div>
        <H1 size={88}>Запуск продукта с AI</H1>
        <div style={{ marginTop: 28 }}>
          <H2 size={32}>От идеи до готового приложения</H2>
        </div>
        <div style={{ marginTop: 80, width: 320 }}>
          <Divider />
        </div>
        <div style={{ marginTop: 32, fontSize: 18, color: COLORS.muted }}>
          Михаэль Барбарич · 23 апреля 2026
        </div>
      </div>
    </SlideFrame>
  );
}