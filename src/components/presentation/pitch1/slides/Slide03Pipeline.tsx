import { Eyebrow, H1, H2, Body, Divider, COLORS, SlideFooter, SlideFrame } from "./_shared";

const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
const MONO = "'JetBrains Mono', 'SF Mono', Menlo, monospace";

function Block({
  num,
  title,
  body,
}: {
  num: string;
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        background: COLORS.panel,
        border: `1px solid ${COLORS.panelBorder}`,
        padding: "32px 32px 28px",
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "100%",
      }}
    >
      <div
        style={{
          fontFamily: MONO,
          fontSize: 13,
          letterSpacing: "0.22em",
          color: COLORS.accent,
          textTransform: "uppercase",
        }}
      >
        {num}
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 28,
          fontWeight: 600,
          color: COLORS.text,
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 17,
          color: COLORS.muted,
          lineHeight: 1.55,
        }}
      >
        {body}
      </div>
    </div>
  );
}

export default function Slide03Pipeline() {
  return (
    <SlideFrame>
      <div className="w-full h-full flex flex-col" style={{ gap: 40 }}>
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Что вы заберёте за 90 минут</Eyebrow>
          <H1 size={60}>Полный путь от идеи до первых платящих</H1>
          <div style={{ width: 320 }}>
            <Divider />
          </div>
          <H2 size={24}>
            Не теория. Реальные инструменты, агенты, скрипты и кейсы из моих
            продуктов.
          </H2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
            flex: 1,
          }}
        >
          <Block
            num="01 · Валидация"
            title="Идея, которую купят"
            body="Как за 48 часов проверить, нужен ли продукт рынку. Скрипт CustDev, 10–15 правильных разговоров и фильтр «строить / не строить»."
          />
          <Block
            num="02 · Ресерч"
            title="PMF Research Agent"
            body="Покажу живьём своего AI-агента, который собирает рынок, конкурентов и инсайты за минуты. Заменяет недели Deep Research."
          />
          <Block
            num="03 · MVP без команды"
            title="Мой стек и workflow"
            body="Lovable + Claude + MCP. Как я строю продукты в одиночку без программистов. Best practices, промпты, ошибки, которых стоит избегать."
          />
          <Block
            num="04 · Первые клиенты"
            title="Магии нет — есть система"
            body="4 канала дистрибуции, готовый скрипт LinkedIn DM с конверсией и инструменты автоматизации (Linked Helper, Instantly)."
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <Body size={18} color={COLORS.text}>
            Останьтесь до конца — в финале оффер только для тех, кто здесь
            живьём.
          </Body>
        </div>
      </div>
      <SlideFooter>
        90 минут · 4 темы · живое демо · готовые шаблоны
      </SlideFooter>
    </SlideFrame>
  );
}