import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Calendar } from "lucide-react";
import { useEffect, useRef } from "react";

export default function ThankYou() {
  const calRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

      <div className="landing-content max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — text */}
          <div className="flex flex-col justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <CheckCircle2 size={32} className="text-emerald-400" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-5 text-[hsl(var(--landing-text))] leading-tight">
              Thank you for your interest!
            </h1>

            <p className="text-lg md:text-xl text-[hsl(var(--landing-text)/0.85)] leading-relaxed mb-6">
              Your application has been received. Book a free 15-minute call with Michael Barbarich — I'll learn about your project and answer any questions.
            </p>

            <div className="flex items-center gap-3 text-[hsl(var(--landing-accent))] mb-8">
              <Calendar size={20} />
              <span className="text-base font-medium">Pick a time that works for you →</span>
            </div>

            <Link
              to="/"
              className="text-sm text-[hsl(var(--landing-text)/0.5)] hover:text-[hsl(var(--landing-text)/0.9)] inline-flex items-center gap-2 transition-colors w-fit"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>

          {/* Right — calendar */}
          <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-2 md:p-4">
            <div className="tidycal-embed" data-path="barbarich/15-minute-meeting" ref={calRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
