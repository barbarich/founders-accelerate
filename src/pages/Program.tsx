import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { months, type Week } from "@/data/program";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

function SectionBlock({
  label,
  color,
  items,
}: {
  label: string;
  color: "gold" | "blue" | "green";
  items: string[];
}) {
  const labelColors = {
    gold: "text-[hsl(var(--landing-accent))]",
    blue: "text-blue-400",
    green: "text-emerald-400",
  };
  const dotColors = {
    gold: "bg-[hsl(var(--landing-accent))]",
    blue: "bg-blue-400",
    green: "bg-emerald-400",
  };

  return (
    <div>
      <p className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${labelColors[color]}`}>
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-white/80">
            <span className={`w-1 h-1 rounded-full ${dotColors[color]} mt-[7px] shrink-0`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WeekCard({ week }: { week: Week }) {
  return (
    <div className="rounded-xl overflow-hidden landing-card">
      <div className="px-5 py-4 border-b border-white/[0.06]">
        <p className="text-[11px] text-white/70 font-mono uppercase tracking-wider mb-0.5">
          Неделя {week.number}
        </p>
        <h3 className="text-[15px] font-semibold text-white/90 leading-snug">
          {week.title}
        </h3>
      </div>

      <div className="px-5 py-4 space-y-5">
        <SectionBlock label="Учу и показываю" color="gold" items={week.teach} />
        <SectionBlock label="Делаем вместе" color="blue" items={week.together} />
        <div className="bg-white/[0.02] rounded-lg p-4 -mx-1">
          <SectionBlock label="Задание на неделю" color="green" items={week.homework} />
        </div>
      </div>
    </div>
  );
}

function MonthTabs({
  activeMonth,
  onSelect,
  isMobile,
}: {
  activeMonth: number;
  onSelect: (month: number) => void;
  isMobile: boolean;
}) {
  return (
    <div className={`flex ${isMobile ? "gap-1" : "gap-2"} justify-center`}>
      {months.map((m) => (
        <button
          key={m.month}
          onClick={() => onSelect(m.month)}
          className={`
            ${isMobile ? "px-4 py-2.5 text-xs" : "px-6 py-2.5 text-sm"}
            rounded-full font-medium transition-all duration-300
            ${
              activeMonth === m.month
                ? "landing-cta-btn shadow-md"
                : "bg-white/[0.04] text-white/80 border border-white/[0.08] hover:border-[hsl(var(--landing-accent))]/30 hover:text-white/70"
            }
          `}
        >
          {isMobile ? `${m.month}` : `Месяц ${m.month}`}
        </button>
      ))}
    </div>
  );
}

export default function Program() {
  const isMobile = useIsMobile();
  const { lang } = useLanguage();
  const [activeMonth, setActiveMonth] = useState(1);
  const currentMonth = months.find((m) => m.month === activeMonth)!;

  return (
    <div className="min-h-screen landing-wrapper">
      {/* Stripes background */}
      <div className="landing-stripes" />

      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to={`/${lang}`}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </Link>
          <Link
            to={`/${lang}/apply`}
            className="landing-cta-btn inline-flex items-center gap-2 font-semibold rounded-full text-sm px-5 py-2"
          >
            Присоединиться
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      <main className={`max-w-3xl mx-auto ${isMobile ? "px-4 py-8" : "px-6 py-16"} landing-content`}>
        {/* Hero */}
        <header className={`${isMobile ? "mb-6" : "mb-10"} text-center`}>
          <p className="text-[hsl(var(--landing-accent))] text-xs font-mono uppercase tracking-[0.3em] mb-3">
            The Founders Circle
          </p>
          <h1 className={`${isMobile ? "text-3xl" : "text-5xl"} font-bold text-white mb-4 font-display leading-tight`}>
            Программа акселератора
          </h1>
          <p className={`${isMobile ? "text-sm" : "text-lg"} text-white/80 max-w-xl mx-auto mb-8`}>
            12 недель. От идеи до готового продукта с первыми пользователями
          </p>

          <MonthTabs activeMonth={activeMonth} onSelect={setActiveMonth} isMobile={isMobile} />
        </header>

        {/* Month Title */}
        <div className={`text-center ${isMobile ? "mb-6" : "mb-10"}`}>
          <p className="text-white/70 text-xs font-mono uppercase tracking-wider mb-1">
            Месяц {currentMonth.month}
          </p>
          <h2 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold text-white mb-1 font-display`}>
            {currentMonth.label}
          </h2>
          <p className="text-white/80 text-sm">{currentMonth.subtitle}</p>
        </div>

        {/* Who & Result */}
        <div className={`grid ${isMobile ? "grid-cols-1 gap-3" : "grid-cols-2 gap-5"} mb-10`}>
          <div className="landing-card rounded-xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Точка входа
            </p>
            <p className="text-[13px] text-white/80 leading-relaxed">
              {currentMonth.forWhom}
            </p>
          </div>
          <div className="landing-card-accent rounded-xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--landing-accent))] mb-2">
              Результат месяца
            </p>
            <p className="text-[13px] text-white/80 leading-relaxed">
              {currentMonth.result}
            </p>
          </div>
        </div>

        {/* Weeks */}
        <div className={`${isMobile ? "space-y-5" : "space-y-6"} mb-12`}>
          {currentMonth.weeks.map((week) => (
            <WeekCard key={week.number} week={week} />
          ))}
        </div>

        {/* Outcomes */}
        <section className="landing-card-accent rounded-xl p-6 mb-12">
          <p className={`${isMobile ? "text-base" : "text-lg"} font-bold text-white mb-4 text-center font-display`}>
            Что получает каждый участник за месяц {currentMonth.month}
          </p>
          <ul className="space-y-2">
            {currentMonth.outcomes.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] text-white/80">
                <ChevronRight size={12} className="text-[hsl(var(--landing-accent))] mt-[3px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pb-10">
          <Link
            to={`/${lang}/apply`}
            className={`landing-cta-btn inline-flex items-center gap-3 font-semibold rounded-full group ${
              isMobile ? "px-8 py-3.5 text-base" : "px-10 py-4 text-lg"
            }`}
          >
            Присоединиться
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-white/70 text-xs mt-3">
            Старт 13 апреля 2026 · 12 недель · Группа 5-7 человек
          </p>
        </div>
      </main>
    </div>
  );
}
