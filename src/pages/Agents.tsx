/**
 * /agents — catalog of AI agents by Founders Circle.
 *
 * Each agent has a tile here, linking to its detail page.
 * Tiles styled to match the main landing (NewLanding.tsx): cream bg,
 * lime accent, sage selected, clean typography.
 */

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const C = {
  bg: "#f8f8f4",
  surface: "#ffffff",
  border: "#e4e4dc",
  borderLight: "#f0f0e8",
  text: "#0d0d0d",
  secondary: "#555555",
  muted: "#888888",
  accent: "#CAFF00",
  sageBg: "#eef4e8",
  sageBorder: "#c8ddb8",
  sageText: "#1a2e14",
  green: "#4a8a28",
};

interface AgentTile {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  cta: string;
  href: string;             // internal route OR external URL
  external?: boolean;
  accent?: string;
  status?: "live" | "soon";
}

const AGENTS: AgentTile[] = [
  {
    slug: "lens",
    badge: "Research",
    title: "FoundersLens",
    tagline: "Рыночный ресерч на уровне McKinsey за 10 минут",
    description:
      "Полный market research по твоей идее: 30 конкурентов, TAM/SAM/SOM, тренды, креативы их рекламы, вердикт GO / PIVOT / NO-GO и конкретный план действий на 30 дней.",
    stats: [
      { label: "Время", value: "~10 мин" },
      { label: "Стоимость", value: "~$1.50 (твой LLM-ключ)" },
      { label: "Выход", value: "25-стр. HTML отчёт" },
    ],
    cta: "Запустить исследование",
    href: "/agents/lens",
    accent: C.accent,
    status: "live",
  },
  {
    slug: "pmf",
    badge: "Validation",
    title: "PMF Agent",
    tagline: "Оценка Product-Market Fit с honest-сигналом",
    description:
      "9-осевой PMF Score: pain, market, timing, competitive whitespace, demand, monetization, unit economics, regulatory, execution. Если score < 50 — Pivot Advisor генерирует альтернативные траектории. Честный эксперт, не льстит.",
    stats: [
      { label: "Время", value: "~10-15 мин" },
      { label: "Стоимость", value: "твой LLM-ключ" },
      { label: "Выход", value: "PMF-скоринг + pivot-сценарии" },
    ],
    cta: "Запустить PMF-анализ",
    href: "/agents/pmf",
    status: "live",
  },
  // Add more agents as they ship.
  {
    slug: "coming-soon-1",
    badge: "Sales",
    title: "Outreach Agent",
    tagline: "Скоро — холодный аутрич на автопилоте",
    description:
      "Пишет персонализированные письма под ICP, ищет контакты, ведёт follow-up. Используй свой Gmail/Slack API — мы не трогаем твои списки.",
    stats: [
      { label: "Статус", value: "В разработке" },
    ],
    cta: "Позже",
    href: "#",
    status: "soon",
  },
];

export default function Agents() {
  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        color: C.text,
        fontFamily: "-apple-system, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px 96px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div
            style={{
              width: 40,
              height: 40,
              background: C.text,
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={22} color={C.accent} />
          </div>
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>
              Founders Circle · Agents
            </div>
            <div
              style={{
                fontSize: 12,
                color: C.muted,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              AI tools built for founders
            </div>
          </div>
        </div>

        {/* Hero */}
        <div style={{ marginBottom: 64, maxWidth: 780 }}>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 900,
              letterSpacing: -2,
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Агенты, которые делают за тебя нудную работу.
          </h1>
          <p
            style={{
              fontSize: 20,
              color: C.secondary,
              lineHeight: 1.5,
              marginBottom: 0,
            }}
          >
            Каждый агент — специалист в одной задаче: market research, PMF-валидация, outreach.
            Бесплатно для резидентов акселератора.
          </p>
        </div>

        {/* Agent grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 24,
          }}
        >
          {AGENTS.map((a) => (
            <AgentCard key={a.slug} agent={a} />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 96,
            paddingTop: 24,
            borderTop: `1px solid ${C.border}`,
            color: C.muted,
            fontSize: 13,
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span>Founders Circle · founders-circle.space</span>
          <span>·</span>
          <Link to="/ru" style={{ color: C.muted, textDecoration: "underline" }}>
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

function AgentCard({ agent }: { agent: AgentTile }) {
  const isComingSoon = agent.status === "soon";
  const content = (
    <article
      style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 16,
        padding: 32,
        transition: "all 0.15s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        opacity: isComingSoon ? 0.55 : 1,
        cursor: isComingSoon ? "default" : "pointer",
      }}
      onMouseEnter={(e) => {
        if (!isComingSoon) {
          (e.currentTarget as HTMLElement).style.borderColor = C.text;
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = C.border;
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Badge */}
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            display: "inline-block",
            padding: "4px 10px",
            background: isComingSoon ? C.borderLight : C.sageBg,
            color: isComingSoon ? C.muted : C.sageText,
            borderRadius: 16,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.6,
            textTransform: "uppercase",
          }}
        >
          {agent.badge}
        </span>
      </div>

      {/* Title + tagline */}
      <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.8, marginBottom: 8 }}>
        {agent.title}
      </h2>
      <p
        style={{
          fontSize: 15,
          color: C.secondary,
          lineHeight: 1.45,
          marginBottom: 16,
          fontStyle: "italic",
        }}
      >
        {agent.tagline}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: C.text,
          lineHeight: 1.6,
          marginBottom: 20,
          flex: 1,
        }}
      >
        {agent.description}
      </p>

      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
          gap: 8,
          marginBottom: 24,
          padding: "12px 0",
          borderTop: `1px solid ${C.borderLight}`,
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        {agent.stats.map((s, i) => (
          <div key={i}>
            <div
              style={{
                fontSize: 10,
                color: C.muted,
                textTransform: "uppercase",
                letterSpacing: 0.5,
                marginBottom: 2,
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: isComingSoon ? C.borderLight : C.text,
          color: isComingSoon ? C.muted : C.accent,
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 14,
        }}
      >
        <span>{agent.cta}</span>
        {!isComingSoon && <ArrowRight size={16} />}
      </div>
    </article>
  );

  if (isComingSoon) return content;

  if (agent.external) {
    return (
      <a
        href={agent.href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {content}
      </a>
    );
  }
  return (
    <Link to={agent.href} style={{ textDecoration: "none", color: "inherit" }}>
      {content}
    </Link>
  );
}
