import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import NewNavbar from "@/components/NewNavbar";
import { SEO } from "@/components/SEO";

const thankYouTexts = {
  en: {
    title: "Thank you for your interest!",
    body: "Now, to move forward, I'd like to invite you to a 15-minute call with me so I can better understand your project or idea and we can figure out together whether my program would be a good fit for you.",
    regards: "Best regards,",
    name: "Michael Barbarich",
    role: "CEO, The Founders Circle",
    cta: "Pick a time that works for you →",
    back: "Back to Home",
  },
  ru: {
    title: "Спасибо за твой интерес к программе!",
    body: "Теперь, чтобы продолжить, приглашаю тебя на 15-минутный звонок со мной, чтобы я лучше понял твой проект или идею и мы разобрали, будет ли тебе полезна моя программа.",
    regards: "С уважением,",
    name: "Барбарич Михаэль",
    role: "CEO, The Founders Circle",
    cta: "Выбери удобное время →",
    back: "На главную",
  },
  ua: {
    title: "Дякуємо за твій інтерес до програми!",
    body: "Тепер, щоб рухатись далі, запрошую тебе на 15-хвилинний дзвінок зі мною, аби я краще зрозумів твій проєкт чи ідею і ми з'ясували, чи буде тобі корисна моя програма.",
    regards: "З повагою,",
    name: "Барбарич Міхаель",
    role: "CEO, The Founders Circle",
    cta: "Обери зручний час →",
    back: "На головну",
  },
  he: {
    title: "!תודה על העניין שלך בתוכנית",
    body: "כדי להמשיך, אני מזמין אותך לשיחה של 15 דקות איתי, כדי שאוכל להבין טוב יותר את הפרויקט או הרעיון שלך ונבדוק יחד אם התוכנית שלי מתאימה לך.",
    regards: ",בברכה",
    name: "מיכאל ברבריץ׳",
    role: "CEO, The Founders Circle",
    cta: "← בחר/י זמן שמתאים לך",
    back: "חזרה לדף הבית",
  },
};

export default function ThankYou() {
  const calRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const t = thankYouTexts[lang] || thankYouTexts.en;

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f8f8f4";
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
      document.body.style.backgroundColor = prev;
    };
  }, []);

  return (
    <div className="nl-page min-h-screen" style={{ background: "#f8f8f4", fontFamily: "var(--nl-font-body, 'DM Sans', sans-serif)" }}>
      <SEO
        path={`/${lang}/thank-you`}
        title="Thank you - The Founders Circle"
        description="Application received. We'll get back within 48 hours."
        noindex
      />
      <NewNavbar lang={lang} />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--nl-font-display, 'Syne', sans-serif)", fontWeight: 800, color: "#0d0d0d" }}>
              {t.title}
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: "#555555" }}>
              {t.body}
            </p>

            <div className="mb-8">
              <p className="text-base mb-1" style={{ color: "#888888" }}>{t.regards}</p>
              <p className="text-lg font-semibold" style={{ color: "#0d0d0d" }}>{t.name}</p>
              <p className="text-sm" style={{ color: "#aaaaaa" }}>{t.role}</p>
            </div>

            <div className="flex items-center gap-3 mb-8" style={{ color: "#4a8a28" }}>
              <Calendar size={20} />
              <span className="text-base font-medium">{t.cta}</span>
            </div>

            <Link
              to={`/${lang}`}
              className="text-sm inline-flex items-center gap-2 transition-colors w-fit"
              style={{ color: "#888888" }}
            >
              <ArrowLeft size={14} />
              {t.back}
            </Link>
          </div>

          {/* Right — calendar */}
          <div className="rounded-2xl overflow-hidden border p-2 md:p-4" style={{ background: "#ffffff", borderColor: "#e4e4dc" }}>
            <div className="tidycal-embed" data-path="barbarich/15-minute-meeting" ref={calRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
