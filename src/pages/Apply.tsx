import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels } from "@/i18n/translations";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";

const WEB3FORMS_KEY = "1340b491-9687-45e3-914d-3c6e4f777a0f";

const applySchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Required").max(30),
  idea: z.string().trim().min(1, "Required").max(2000),
  stage: z.string().min(1, "Required"),
  preferredLang: z.string().min(1, "Required"),
});

type ApplyFormData = z.infer<typeof applySchema>;

export default function Apply() {
  const { lang, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: { preferredLang: lang.toUpperCase() },
  });

  const onSubmit = async (data: ApplyFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New application: ${data.name} (${data.stage})`,
          from_name: "Founders Circle",
          name: data.name,
          email: data.email,
          phone: data.phone,
          idea: data.idea,
          stage: data.stage,
          preferred_language: data.preferredLang,
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError(
        lang === "ru" ? "Ошибка отправки. Попробуйте ещё раз." :
        lang === "ua" ? "Помилка відправки. Спробуйте ще раз." :
        lang === "he" ? "שגיאה בשליחה. נסה שוב." :
        "Submission failed. Please try again."
      );
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen landing-wrapper flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-green-600" />
          </div>
          <h1 className="text-3xl font-bold font-display mb-3" style={{ color: "hsl(var(--landing-text))" }}>
            {t.applySuccess}
          </h1>
          <p className="mb-8" style={{ color: "hsl(var(--landing-muted))" }}>{t.applySuccessSub}</p>
          <Link
            to={`/${lang}`}
            className="landing-cta-btn px-6 py-3 rounded-lg text-sm font-semibold inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            {t.applyBack}
          </Link>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[hsl(var(--landing-accent))/0.3] focus:border-[hsl(var(--landing-accent))]"
  ;

  return (
    <div className="min-h-screen landing-wrapper">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl" style={{ background: "hsl(var(--landing-bg) / 0.85)", borderBottom: "1px solid hsl(var(--landing-border))" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to={`/${lang}`}
            className="font-display text-lg font-bold inline-flex items-center gap-2"
            style={{ color: "hsl(var(--landing-text))" }}
          >
            <ArrowLeft size={16} style={{ color: "hsl(var(--landing-muted))" }} />
            The Founders Circle
          </Link>
          <div className="flex items-center gap-0.5">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/apply`}
                className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                  l === lang
                    ? "text-white"
                    : ""
                }`}
                style={
                  l === lang
                    ? { background: "hsl(var(--landing-accent))" }
                    : { color: "hsl(var(--landing-muted))" }
                }
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 landing-hero-mesh" />
        <div className="relative max-w-2xl mx-auto px-6 pt-16 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "hsl(var(--landing-accent) / 0.1)", color: "hsl(var(--landing-accent))" }}>
            <Sparkles size={14} />
            {t.applyTitle}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3" style={{ color: "hsl(var(--landing-text))" }}>
            {t.applyTitle}
          </h1>
          <p className="text-base" style={{ color: "hsl(var(--landing-muted))" }}>{t.applySubtitle}</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <div className="landing-card rounded-2xl p-8 md:p-10 shadow-lg" style={{ boxShadow: "0 8px 40px -12px hsla(24, 70%, 50%, 0.08)" }}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--landing-text))" }}>{t.applyName}</label>
              <input
                {...register("name")}
                className={inputClass}
                style={{
                  background: "hsl(var(--landing-bg))",
                  border: `1px solid hsl(var(--landing-border))`,
                  color: "hsl(var(--landing-text))",
                }}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--landing-text))" }}>{t.applyEmail}</label>
              <input
                {...register("email")}
                type="email"
                className={inputClass}
                style={{
                  background: "hsl(var(--landing-bg))",
                  border: `1px solid hsl(var(--landing-border))`,
                  color: "hsl(var(--landing-text))",
                }}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--landing-text))" }}>{t.applyPhone}</label>
              <input
                {...register("phone")}
                type="tel"
                className={inputClass}
                style={{
                  background: "hsl(var(--landing-bg))",
                  border: `1px solid hsl(var(--landing-border))`,
                  color: "hsl(var(--landing-text))",
                }}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            {/* Idea */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--landing-text))" }}>{t.applyIdea}</label>
              <textarea
                {...register("idea")}
                rows={4}
                placeholder={t.applyIdeaPlaceholder}
                className={`${inputClass} resize-none`}
                style={{
                  background: "hsl(var(--landing-bg))",
                  border: `1px solid hsl(var(--landing-border))`,
                  color: "hsl(var(--landing-text))",
                }}
              />
              {errors.idea && <p className="text-xs text-red-500 mt-1">{errors.idea.message}</p>}
            </div>

            {/* Stage */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--landing-text))" }}>{t.applyStage}</label>
              <select
                {...register("stage")}
                className={inputClass}
                style={{
                  background: "hsl(var(--landing-bg))",
                  border: `1px solid hsl(var(--landing-border))`,
                  color: "hsl(var(--landing-text))",
                }}
              >
                <option value="">—</option>
                {t.applyStages.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
              {errors.stage && <p className="text-xs text-red-500 mt-1">{errors.stage.message}</p>}
            </div>

            {/* Preferred language */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "hsl(var(--landing-text))" }}>{t.applyLang}</label>
              <select
                {...register("preferredLang")}
                className={inputClass}
                style={{
                  background: "hsl(var(--landing-bg))",
                  border: `1px solid hsl(var(--landing-border))`,
                  color: "hsl(var(--landing-text))",
                }}
              >
                <option value="EN">English</option>
                <option value="RU">Русский</option>
                <option value="UA">Українська</option>
                <option value="HE">עברית</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full landing-cta-btn py-3.5 rounded-xl text-sm font-semibold disabled:opacity-50 transition-all"
            >
              {isSubmitting ? "..." : t.applySubmit}
            </button>

            {submitError && (
              <p className="text-sm text-red-500 text-center">{submitError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
