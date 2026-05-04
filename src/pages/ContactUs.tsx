import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels, type Lang } from "@/i18n/translations";
import { ArrowLeft, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SEO } from "@/components/SEO";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactUs() {
  const { t, lang } = useLanguage();
  const isRtl = lang === "he";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "1340b491-9687-45e3-914d-3c6e4f777a0f",
          from_name: data.name,
          email: data.email,
          subject: `[Contact] ${data.subject}`,
          message: data.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--landing-bg))] text-white" dir={isRtl ? "rtl" : "ltr"}>
      <SEO
        path={`/${lang}/contact`}
        title="Contact us | The Founders Circle"
        description="Связаться с командой The Founders Circle. hello@founders-circle.space"
        alternates={[
          { lang: "ru", path: "/ru/contact" },
          { lang: "en", path: "/en/contact" },
          { lang: "x-default", path: "/ru/contact" },
        ]}
      />
      {/* Header */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
          <Link
            to={`/${lang}`}
            className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.contactBack}
          </Link>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/contact`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  l === lang
                    ? "text-[hsl(var(--landing-accent))]"
                    : "text-white/20 hover:text-white/70"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-[900px] mx-auto px-6 lg:px-10 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-black mb-3">{t.contactTitle}</h1>
        <p className="text-sm md:text-base text-white/50 mb-12 max-w-[600px]">{t.contactSubtitle}</p>

        {status === "success" ? (
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-8 text-center">
            <p className="text-green-400 text-lg font-medium">{t.contactSuccess}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-[600px]">
            <div>
              <label className="block text-sm text-white/60 mb-2">{t.contactNameLabel}</label>
              <input
                {...register("name")}
                className={`w-full bg-white/[0.04] border ${errors.name ? "border-red-500/50" : "border-white/[0.08]"} rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--landing-accent))]/50 transition-colors`}
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">{t.contactEmailLabel}</label>
              <input
                type="email"
                {...register("email")}
                className={`w-full bg-white/[0.04] border ${errors.email ? "border-red-500/50" : "border-white/[0.08]"} rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--landing-accent))]/50 transition-colors`}
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">{t.contactSubjectLabel}</label>
              <input
                {...register("subject")}
                className={`w-full bg-white/[0.04] border ${errors.subject ? "border-red-500/50" : "border-white/[0.08]"} rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--landing-accent))]/50 transition-colors`}
              />
            </div>

            <div>
              <label className="block text-sm text-white/60 mb-2">{t.contactMessageLabel}</label>
              <textarea
                {...register("message")}
                rows={6}
                placeholder={t.contactMessagePlaceholder}
                className={`w-full bg-white/[0.04] border ${errors.message ? "border-red-500/50" : "border-white/[0.08]"} rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[hsl(var(--landing-accent))]/50 transition-colors resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">{t.contactError}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 bg-[hsl(var(--landing-accent))] text-black font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {t.contactSubmit}
            </button>
          </form>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-[900px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-white/20">{t.footerRights}</span>
            <Link to={`/${lang}/privacy`} className="text-xs text-white/20 hover:text-white/50 transition-colors underline underline-offset-2">{t.footerPrivacy}</Link>
            <Link to={`/${lang}/terms`} className="text-xs text-white/20 hover:text-white/50 transition-colors underline underline-offset-2">{t.footerTerms}</Link>
          </div>
          <div className="flex items-center gap-1">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/contact`}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  l === lang
                    ? "text-[hsl(var(--landing-accent))]"
                    : "text-white/20 hover:text-white/70"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
