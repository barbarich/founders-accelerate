import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface NewNavbarProps {
  lang: string;
}

export default function NewNavbar({ lang }: NewNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === `/${lang}` || location.pathname === `/${lang}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleApplyClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        borderBottom: "1px solid #ebebeb",
        padding: "0 48px",
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(248,248,244,0.9)" : "var(--nl-bg)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <Link
        to={`/${lang}`}
        style={{
          fontFamily: "var(--nl-font-display)",
          fontWeight: 800,
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          color: "var(--nl-text)",
          textDecoration: "none",
        }}
      >
        THE FOUNDERS CIRCLE
      </Link>

      <Link
        to={isHome ? "#apply" : `/${lang}`}
        onClick={handleApplyClick}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "#0d0d0d",
          color: "#CAFF00",
          fontFamily: "var(--nl-font-body)",
          fontSize: 13,
          fontWeight: 500,
          padding: "8px 18px",
          borderRadius: "var(--nl-radius-pill)",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        Apply now
        <ArrowUpRight size={14} />
      </Link>
    </nav>
  );
}
