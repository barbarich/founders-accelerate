import photo from "@/assets/slides/photo-michael.jpg";
import { Eyebrow, COLORS } from "./_shared";

const bullets = [
  "16 лет в бизнесе, 7 из них в tech",
  "2 экзита (tech-продукты + ресторанный бизнес)",
  "Опыт CEO в международных компаниях",
  "Построил продукты от $0 до $8M ARR",
  "50,000+ платящих клиентов в 107 странах",
  "10 лет в Израиле",
];

const SERIF = "'Playfair Display', Georgia, serif";

export default function SlideAboutMe() {
  return (
    <div
      className="w-full h-full relative flex"
      style={{
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Photo */}
      <div className="w-[820px] h-full relative shrink-0">
        <img src={photo} alt="Михаэль Барбарич" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 35%, hsl(20 15% 5% / 0.5) 70%, hsl(20 15% 5%) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-[100px]" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: 20 }}>
          <Eyebrow>О себе</Eyebrow>
        </div>
        <h2
          style={{
            fontFamily: SERIF,
            fontSize: 88,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: COLORS.text,
            marginBottom: 16,
          }}
        >
          Кто я
        </h2>
        <p
          style={{
            fontSize: 22,
            fontStyle: "italic",
            color: COLORS.muted,
            marginBottom: 44,
            maxWidth: 620,
          }}
        >
          Действующий предприниматель. Строю продукты и сейчас.
        </p>
        <div className="flex flex-col gap-4">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: COLORS.accent,
                  marginTop: 12,
                  flexShrink: 0,
                  boxShadow: "0 0 12px hsla(25, 65%, 58%, 0.6)",
                }}
              />
              <p style={{ fontSize: 22, color: COLORS.text, opacity: 0.92, lineHeight: 1.4, margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, fontSize: 18, color: COLORS.accent, fontFamily: "'JetBrains Mono', monospace" }}>
          Сейчас: MetaMinder · mymikey.ai
        </div>
      </div>
    </div>
  );
}