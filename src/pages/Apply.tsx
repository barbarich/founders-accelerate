import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { supportedLangs, langLabels } from "@/i18n/translations";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applySchema),
    defaultValues: { preferredLang: lang.toUpperCase() },
  });

  const onSubmit = async (_data: ApplyFormData) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <CheckCircle2 size={56} className="text-primary mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-foreground mb-3">{t.applySuccess}</h1>
          <p className="text-muted-foreground mb-8">{t.applySuccessSub}</p>
          <Link
            to={`/${lang}`}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            {t.applyBack}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Simple nav */}
      <nav className="border-b border-border">
        <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to={`/${lang}`} className="font-display text-lg font-bold text-foreground tracking-tight inline-flex items-center gap-2">
            <ArrowLeft size={16} className="text-muted-foreground" />
            The Founders Circle
          </Link>
          <div className="flex items-center gap-0.5">
            {supportedLangs.map((l) => (
              <Link
                key={l}
                to={`/${l}/apply`}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  l === lang ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {langLabels[l]}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">{t.applyTitle}</h1>
        <p className="text-muted-foreground mb-10">{t.applySubtitle}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t.applyName}</label>
            <input
              {...register("name")}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t.applyEmail}</label>
            <input
              {...register("email")}
              type="email"
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t.applyPhone}</label>
            <input
              {...register("phone")}
              type="tel"
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
          </div>

          {/* Idea */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t.applyIdea}</label>
            <textarea
              {...register("idea")}
              rows={4}
              placeholder={t.applyIdeaPlaceholder}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
            />
            {errors.idea && <p className="text-xs text-destructive mt-1">{errors.idea.message}</p>}
          </div>

          {/* Stage */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t.applyStage}</label>
            <select
              {...register("stage")}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">—</option>
              {t.applyStages.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>
            {errors.stage && <p className="text-xs text-destructive mt-1">{errors.stage.message}</p>}
          </div>

          {/* Preferred language */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">{t.applyLang}</label>
            <select
              {...register("preferredLang")}
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
            className="w-full bg-primary text-primary-foreground py-3 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "..." : t.applySubmit}
          </button>
        </form>
      </div>
    </div>
  );
}
