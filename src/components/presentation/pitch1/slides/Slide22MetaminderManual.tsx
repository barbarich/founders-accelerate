import { Eyebrow, H1, SlideFrame, SlideFooter, COLORS } from "./_shared";

export default function Slide22MetaminderManual() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-10 justify-center">
        <div><Eyebrow>Главное правило запуска</Eyebrow></div>
        <H1 size={64}>Запускайте раньше, чем готовы.</H1>

        <div className="grid grid-cols-2 gap-8" style={{ marginTop: 8 }}>
          <div style={{ background: COLORS.panel, border: `0.5px solid ${COLORS.line}`, padding: 32 }}>
            <div style={{ fontSize: 16, fontFamily: "'JetBrains Mono', monospace", color: COLORS.error, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>
              Так не надо
            </div>
            <div style={{ fontSize: 22, color: COLORS.muted, lineHeight: 1.5 }}>
              Полгода полировать в одиночку.<br/>
              Идеально — только для вас.<br/>
              Для рынка — непонятно и неудобно.
            </div>
          </div>

          <div style={{ background: COLORS.panel, border: `0.5px solid ${COLORS.accent}`, padding: 32 }}>
            <div style={{ fontSize: 16, fontFamily: "'JetBrains Mono', monospace", color: COLORS.accent, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 14 }}>
              Так работает
            </div>
            <div style={{ fontSize: 22, color: COLORS.text, lineHeight: 1.5 }}>
              Одна фича решает проблему — запускайте.<br/>
              Баги? Нормально.<br/>
              Живой фидбек строит продукт.
            </div>
          </div>
        </div>

        <div style={{ fontSize: 26, fontWeight: 400, color: COLORS.muted, lineHeight: 1.5, textAlign: "center", marginTop: 8 }}>
          Никакая AI-модель не заменит реального пользователя,<br/>
          который прошёл через ваш продукт и сказал, что не работает.
        </div>
      </div>
      <SlideFooter>Продукт не бывает идеальным. Он бывает живым или мёртвым.</SlideFooter>
    </SlideFrame>
  );
}