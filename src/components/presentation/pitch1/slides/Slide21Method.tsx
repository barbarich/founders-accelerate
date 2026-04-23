import { Eyebrow, SlideFrame, COLORS } from "./_shared";

const steps = [
  { n: 1, t: "Список: 50 конкретных людей", d: "Не «audience» — имена и LinkedIn-профили" },
  { n: 2, t: "Каналы: LinkedIn DM · email · тёплые интро", d: "Не рассылка — персональные заходы" },
  { n: 3, t: "Сообщение: 3 строки", d: "— кто я (1 строка)\n— что заметил про них (конкретно, не общо)\n— предложение или вопрос (без давления)" },
  { n: 4, t: "Не продажа — разговор", d: "Сначала боль → потом демо → потом цена" },
  { n: 5, t: "Цена: на 2-м разговоре. Не на 3-м.", d: "" },
];

export default function Slide21Method() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8 justify-center">
        <div><Eyebrow>Как я это делаю</Eyebrow></div>
        <div className="flex flex-col gap-5">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-6 items-baseline">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, color: COLORS.accent, width: 40 }}>{s.n}.</div>
              <div>
                <div style={{ fontSize: 24, fontWeight: 500, color: COLORS.text }}>{s.t}</div>
                {s.d && <div style={{ fontSize: 18, color: COLORS.muted, marginTop: 4, whiteSpace: "pre-line" }}>{s.d}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}