import { Eyebrow, SlideFrame, COLORS } from "./_shared";

const blocks = [
  {
    n: 1,
    t: "Outreach на автопилоте",
    d: "LinkedIn + email → Clay, Instantly, Lemlist\nПромпты и шаблоны написаны с Claude\nЯ только одобряю отправку и отвечаю",
  },
  {
    n: 2,
    t: "Публичность фаундера как канал",
    d: "Посты и статьи в LinkedIn / Threads / Facebook\nНаписаны с AI, адаптированы под мой голос\nЛюди пишут сами, уже прогретые",
  },
  {
    n: 3,
    t: "Контент-машина",
    d: "Один черновик в неделю →\nClaude превращает в 5 форматов:\nдлинный пост · карусель · видео · email · тред",
  },
];

export default function Slide23PostAutomation() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-6 justify-center">
        <div><Eyebrow>После 7 ручных сделок — включаю автоматизацию</Eyebrow></div>
        <div className="flex flex-col gap-4">
          {blocks.map((b) => (
            <div key={b.n} style={{ background: COLORS.panel, padding: 24 }}>
              <div style={{ fontSize: 22, fontWeight: 500, color: COLORS.text, marginBottom: 8 }}>
                <span style={{ color: COLORS.accent, marginRight: 12 }}>{b.n}.</span>{b.t}
              </div>
              <div style={{ fontSize: 17, color: COLORS.muted, whiteSpace: "pre-line", fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.55 }}>{b.d}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 28, fontWeight: 500, textAlign: "center", marginTop: 8 }}>
          Топ воронки растёт сам. Я занимаюсь закрытием.
        </div>
      </div>
    </SlideFrame>
  );
}