import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Landing from "./Landing";
import { SEO } from "@/components/SEO";

export default function Accelerator() {
  const { lang } = useLanguage();

  return (
    <>
      <SEO
        path={`/${lang}/accelerator`}
        title="Original 3-Month Accelerator (archive) | The Founders Circle"
        description="Архив оригинальной 3-месячной программы акселератора. Текущая программа - 30-дневный AI Founder Program."
        alternates={[
          { lang: "ru", path: "/ru/accelerator" },
          { lang: "en", path: "/en/accelerator" },
          { lang: "x-default", path: "/ru/accelerator" },
        ]}
      />
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
