import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen landing-wrapper flex items-center justify-center px-6">
      <div className="landing-stripes" />
      <div className="text-center max-w-md landing-content">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={40} className="text-emerald-400" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
          Thank you!
        </h1>
        <p className="text-base text-white/40 mb-10 leading-relaxed">
          Your application has been received. We'll review it and get back to you shortly.
        </p>
        <Link
          to="/"
          className="landing-cta-btn px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
