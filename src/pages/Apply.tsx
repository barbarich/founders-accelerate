import { useLanguage } from "@/i18n/LanguageContext";
import { Link, useNavigate } from "react-router-dom";
import { supportedLangs, langLabels } from "@/i18n/translations";
import { useState } from "react";
import { track } from "@/lib/analytics";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { SEO } from "@/components/SEO";

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
  const navigate = useNavigate();
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
      track("generate_lead", { content_name: "Application Form" });
      navigate(`/${lang}/thank-you`);
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

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/20 focus:ring-2 focus:ring-[hsl(var(--landing-accent))]/30 focus:border-[hsl(var(--landing-accent))]/50";

  return (
    <div className="min-h-screen landing-wrapper">
      <SEO
        path={`/${lang}/apply`}
        title={
          lang === "en"
            ? "Apply - AI Founder Program | The Founders Circle"
            : "Заявка в акселератор | The Founders Circle"
        }
        description={
          lang === "en"
            ? "Apply for the 30-day AI Founder Program with Michael Barbarich. Tell us about your idea and we'll get back within 48 hours."
            : "Подать заявку на 30-дневный AI Founder Program. Расскажите об идее - ответим в течение 48 часов."
        }
        alternates={[
          { lang: "ru", path: "/ru/apply" },
          { lang: "en", path: "/en/apply" },
          { lang: "x-default", path: "/ru/apply" },
        ]}
      />
      {/* Stripes background */}
      <div className="landing-stripes" />

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to={`/${lang}`}
            className="font-display text-lg font-bold inline-flex items-center gap-2 text-white"
          >
            <ArrowLeft size={16} className="text-white/80" />
            The Founders Circle
          </Link>
          <div className="flex items-center gap-0.5">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/apply`}
                className={`px-2.5 py-1 text-xs rounded-md transition-all font-medium ${
                  l === lang
                    ? "bg-[hsl(var(--landing-accent))]/15 text-[hsl(var(--landing-accent))]"
                    : "text-white/70 hover:text-white/80"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero header */}
      <div className="relative overflow-hidden landing-content">
        <div className="max-w-2xl mx-auto px-6 pt-16 pb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 bg-[hsl(var(--landing-accent))]/10 text-[hsl(var(--landing-accent))]">
            <Sparkles size={14} />
            {t.applyTitle}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-3 text-white">
            {t.applyTitle}
          </h1>
          <p className="text-base text-white/80">{t.applySubtitle}</p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 pb-20 landing-content">
        <div className="landing-card rounded-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white/80">{t.applyName}</label>
              <input {...register("name")} className={inputClass} />
              {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white/80">{t.applyEmail}</label>
              <input {...register("email")} type="email" className={inputClass} />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white/80">{t.applyPhone}</label>
              <input {...register("phone")} type="tel" className={inputClass} />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>}
            </div>

            {/* Idea */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white/80">{t.applyIdea}</label>
              <textarea
                {...register("idea")}
                rows={4}
                placeholder={t.applyIdeaPlaceholder}
                className={`${inputClass} resize-none`}
              />
              {errors.idea && <p className="text-xs text-red-400 mt-1">{errors.idea.message}</p>}
            </div>

            {/* Stage */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white/80">{t.applyStage}</label>
              <select {...register("stage")} className={inputClass}>
                <option value="">—</option>
                {t.applyStages.map((s: string, i: number) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>
              {errors.stage && <p className="text-xs text-red-400 mt-1">{errors.stage.message}</p>}
            </div>

            {/* Preferred language */}
            <div>
              <label className="block text-sm font-medium mb-1.5 text-white/80">{t.applyLang}</label>
              <select {...register("preferredLang")} className={inputClass}>
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
              <p className="text-sm text-red-400 text-center">{submitError}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
