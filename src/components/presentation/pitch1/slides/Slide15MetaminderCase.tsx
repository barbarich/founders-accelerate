import { Eyebrow, H2, SlideFrame, COLORS } from "./_shared";

export default function Slide15MetaminderCase() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-6">
        <div><Eyebrow>Кейс MetaMinder</Eyebrow></div>
        <H2 size={28}>Как я убрал из команды продакта и дизайнера</H2>
        <div className="flex gap-6 flex-1">
          <div style={{ background: COLORS.panel, padding: 36, flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.15em", color: COLORS.accent, fontWeight: 500 }}>БЫЛО</div>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, lineHeight: 1.6, color: COLORS.text, margin: 0, whiteSpace: "pre-wrap" }}>
{`Продакт   →  ТЗ на новую фичу         2-3 дня
Дизайнер  →  вайрфреймы и макеты      3-5 дней
Dev team  →  реализация               2-4 недели`}
            </pre>
            <div style={{ marginTop: "auto", fontSize: 18, fontWeight: 500 }}>Итого: 3-6 недель на одну фичу</div>
          </div>
          <div style={{ background: COLORS.bg, border: `0.5px solid ${COLORS.line}`, padding: 36, flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.15em", color: COLORS.accent, fontWeight: 500 }}>СТАЛО</div>
            <pre style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 17, lineHeight: 1.6, color: COLORS.text, margin: 0, whiteSpace: "pre-wrap" }}>
{`Перенёс все экраны продукта в Lovable
(AI «видит» и «знает» продукт целиком)
         ↓
Пишу промпт в Lovable → функционал за минуты
         ↓
Передаю dev team — у всех подключён Claude
         ↓
Новая фича в проде: меньше недели`}
            </pre>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}