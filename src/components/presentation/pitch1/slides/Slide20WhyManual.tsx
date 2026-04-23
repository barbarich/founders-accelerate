import { Eyebrow, H1, SlideFrame, SlideFooter, COLORS } from "./_shared";

export default function Slide20WhyManual() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-center">
        <Eyebrow>После PMF</Eyebrow>
        <H1 size={72}>Магии не существует.</H1>
        <div style={{ fontSize: 30, fontWeight: 400, color: COLORS.muted, lineHeight: 1.4, maxWidth: 1200 }}>
          Идея найдена. Спрос подтверждён. Дальше — постоянная работа фаундера.
        </div>
        <div className="flex flex-col gap-5 mt-4" style={{ maxWidth: 1100 }}>
          <div style={{ fontSize: 26, fontWeight: 500, color: COLORS.text, lineHeight: 1.4 }}>
            Люди не покупают продукты-ноунеймы.
          </div>
          <div style={{ fontSize: 26, fontWeight: 400, color: COLORS.muted, lineHeight: 1.4 }}>
            Они идут <span style={{ color: COLORS.accent }}>за людьми</span> — за теми, кому верят, и за тем, что эти люди строят.
          </div>
        </div>
      </div>
      <SlideFooter>Публичность фаундера — это не опция. Это канал #1.</SlideFooter>
    </SlideFrame>
  );
}