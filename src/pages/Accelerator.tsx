import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Landing from "./Landing";

export default function Accelerator() {
  const { lang } = useLanguage();

  return (
    <>
      {/* Archive banner */}
      <div
        style={{
          background: "hsl(0 0% 8%)",
          borderBottom: "1px solid hsl(0 0% 18%)",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          color: "hsl(0 0% 70%)",
          position: "relative",
          zIndex: 200,
        }}
      >
        <Link
          to={`/${lang}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "hsl(38 45% 58%)",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={14} />
          Back to main program
        </Link>
        <span style={{ color: "hsl(0 0% 30%)" }}>|</span>
        <span>This is our original 3-month accelerator program</span>
      </div>

      <Landing />
    </>
  );
}
