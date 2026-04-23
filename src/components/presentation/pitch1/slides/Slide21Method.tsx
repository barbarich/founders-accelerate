import { Eyebrow, SlideFrame, COLORS } from "./_shared";

const channels = [
  {
    n: "01",
    t: "Публичность фаундера",
    d: "Посты в LinkedIn, Facebook, Threads, X.\nВыступления, подкасты, эфиры.\nЛюди верят людям — не лендингам.",
  },
  {
    n: "02",
    t: "Бета-запуски — не дожидаясь идеала",
    d: "Продукт никогда не будет идеальным.\nЕсть фича, которая решает проблему — запускайте.\nЖивой фидбек > 100 часов внутренней полировки.",
  },
  {
    n: "03",
    t: "Cold outreach",
    d: "LinkedIn DM и email — автоматизированные воронки.\nПерсонализация через AI.\nКак настроить — на следующем слайде.",
  },
  {
    n: "04",
    t: "Платная реклама в Meta и Google",
    d: "Их собственные AI находят аудиторию за вас.\nClaude помогает настроить пиксели, события, воронки —\nдаже если вы никогда не запускали рекламу.",
  },
];

export default function Slide21Method() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8 justify-center">
        <div><Eyebrow>4 канала, которые работают</Eyebrow></div>
        <div className="grid grid-cols-2 gap-5">
          {channels.map((c) => (
            <div
              key={c.n}
              style={{
                background: COLORS.panel,
                border: `0.5px solid ${COLORS.line}`,
                padding: 28,
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 18, color: COLORS.accent, marginBottom: 10 }}>
                {c.n}
              </div>
              <div style={{ fontSize: 26, fontWeight: 500, color: COLORS.text, marginBottom: 12, lineHeight: 1.25 }}>
                {c.t}
              </div>
              <div style={{ fontSize: 17, color: COLORS.muted, whiteSpace: "pre-line", lineHeight: 1.55 }}>
                {c.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}