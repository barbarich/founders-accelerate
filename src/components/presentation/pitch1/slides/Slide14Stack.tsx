import { Eyebrow, H1, Body, SlideFrame, COLORS } from "./_shared";

export default function Slide14Stack() {
  return (
    <SlideFrame padding={64}>
      <div className="w-full h-full flex flex-col gap-6">
        <div><Eyebrow>Мой рабочий стек · на примере Mikey</Eyebrow></div>
        <H1 size={56}>
          За <span style={{ color: COLORS.accent }}>4 месяца</span> от идеи до продукта в рынке —
          связка из трёх инструментов.
        </H1>

        <Body size={21} color={COLORS.muted}>
          Я начал Mikey в Lovable. Казалось — космос, всё получается, выглядит красиво. Но довести до ума технически не получалось. Перенёс в Claude Code — и понял: серьёзная работа над сложным продуктом возможна только в профессиональном инструменте. С тех пор визуал делаю в Lovable, всю остальную систему — в Claude.
        </Body>

        <div className="grid grid-cols-3 gap-6 flex-1">
          {[
            {
              n: "01",
              k: "Lovable",
              role: "Фронтенд · дизайн · прототипы",
              v: "Сюда иду первым делом. Лучше всех отдаёт дизайн и прорабатывает элементы. Простой инструмент — все прототипы, лендинги и UI-куски делаю здесь.",
            },
            {
              n: "02",
              k: "Claude Code",
              role: "Полноценный продукт · бэкенд · инфра",
              v: "Когда нужна работающая система — подключаю Claude. Накручены десятки скиллов и воркфлоу. Закрывает фронт, бэк, рефакторинг, оптимизацию и интеграции.",
            },
            {
              n: "03",
              k: "MCP",
              role: "Прямое подключение к сервисам",
              v: "Вместо ручной настройки — Claude сам подключается к Mixpanel, Stripe, Supabase, Figma, Gmail и настраивает всё под задачу.",
            },
          ].map((it) => (
            <div key={it.k} style={{
              background: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
              borderRadius: 14,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}>
              <div style={{ fontSize: 14, letterSpacing: "0.2em", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace", opacity: 0.8 }}>
                {it.n}
              </div>
              <div style={{ fontSize: 30, fontWeight: 600, color: COLORS.text, fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.01em" }}>
                {it.k}
              </div>
              <div style={{ fontSize: 14, letterSpacing: "0.05em", textTransform: "uppercase", color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                {it.role}
              </div>
              <Body size={18} color={COLORS.muted}>{it.v}</Body>
            </div>
          ))}
        </div>

        <div style={{
          padding: "22px 32px",
          borderLeft: `4px solid ${COLORS.accent}`,
          background: "hsla(25,65%,58%,0.08)",
          borderRadius: 4,
        }}>
          <Body size={22} color={COLORS.text}>
            Связка <span style={{ color: COLORS.accent }}>Lovable + Claude Code + MCP</span> — Mikey уже в рынке, с реальными пользователями. Cursor не использую: эти три инструмента закрывают всё.
          </Body>
        </div>
      </div>
    </SlideFrame>
  );
}