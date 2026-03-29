import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ThankYou() {
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TidyCal embed script
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen landing-wrapper">
      <div className="landing-stripes" />

      <div className="landing-content max-w-3xl mx-auto px-6 py-16 md:py-24">
        {/* Confirmation */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-emerald-400" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-display mb-3 text-[hsl(var(--landing-text))]">
            Thank you for your interest!
          </h1>
          <p className="text-base text-[hsl(var(--landing-text)/0.8)] max-w-lg mx-auto leading-relaxed">
            Your application has been received. To get started, book a free 15-minute call with Michael Barbarich — I'll learn about your project and answer any questions.
          </p>
        </div>

        {/* Calendar embed */}
        <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-2 md:p-4 mb-10">
          <div className="tidycal-embed" data-path="barbarich/15-minute-meeting" ref={calRef} />
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            to="/"
            className="text-sm text-[hsl(var(--landing-text)/0.6)] hover:text-[hsl(var(--landing-text)/0.9)] inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
