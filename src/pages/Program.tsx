import { ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { months, type Week, type MonthData } from "@/data/program";

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
    gold: "text-primary",
    blue: "text-blue-400",
    green: "text-emerald-400",
  };
  const dotColors = {
    gold: "bg-primary",
    blue: "bg-blue-400",
    green: "bg-emerald-400",
  };

  return (
    <div>
      <p
        className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${labelColors[color]}`}
      >
        {label}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/80"
          >
            <span
              className={`w-1 h-1 rounded-full ${dotColors[color]} mt-[7px] shrink-0`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WeekCard({ week }: { week: Week }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="px-5 py-4 border-b border-border bg-secondary/30">
        <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
          Неделя {week.number}
        </p>
        <h3 className="text-[15px] font-semibold text-foreground leading-snug">
          {week.title}
        </h3>
      </div>

      <div className="px-5 py-4 space-y-5">
        <SectionBlock label="Учу и показываю" color="gold" items={week.teach} />
        <SectionBlock label="Делаем вместе" color="blue" items={week.together} />
        <div className="bg-secondary/40 rounded-lg p-4 -mx-1">
          <SectionBlock
            label="Задание на неделю"
            color="green"
            items={week.homework}
          />
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
    <div className={`flex ${isMobile ? 'gap-1' : 'gap-2'} justify-center`}>
      {months.map((m) => (
        <button
          key={m.month}
          onClick={() => onSelect(m.month)}
          className={`
            ${isMobile ? 'px-3 py-2 text-xs' : 'px-5 py-2.5 text-sm'}
            rounded-lg font-medium transition-all duration-200
            ${
              activeMonth === m.month
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }
          `}
        >
          {isMobile ? `${m.month}` : `Месяц ${m.month}`}
        </button>
      ))}
    </div>
  );
}

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/register"
      className={`inline-block bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors ${className}`}
    >
      Присоединиться
    </a>
  );
}

export default function Program() {
  const isMobile = useIsMobile();
  const [activeMonth, setActiveMonth] = useState(1);
  const currentMonth = months.find((m) => m.month === activeMonth)!;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </a>
          <CTAButton className="text-sm px-4 py-2 rounded-lg" />
        </div>
      </nav>

      <main
        className={`max-w-3xl mx-auto ${isMobile ? "px-4 py-8" : "px-6 py-16"}`}
      >
        {/* Hero */}
        <header className={`${isMobile ? "mb-6" : "mb-10"} text-center`}>
          <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
            The Founders Circle
          </p>
          <h1
            className={`${isMobile ? "text-2xl" : "text-4xl"} font-bold text-foreground mb-3 font-['Playfair_Display']`}
          >
            Программа акселератора
          </h1>
          <p
            className={`${isMobile ? "text-sm" : "text-base"} text-foreground/60 max-w-xl mx-auto mb-6`}
          >
            12 недель. От идеи до готового продукта с первыми пользователями
          </p>

          {/* Month Navigation */}
          <MonthTabs
            activeMonth={activeMonth}
            onSelect={setActiveMonth}
            isMobile={isMobile}
          />
        </header>

        {/* Month Title */}
        <div className={`text-center ${isMobile ? "mb-6" : "mb-10"}`}>
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider mb-1">
            Месяц {currentMonth.month}
          </p>
          <h2
            className={`${isMobile ? "text-xl" : "text-2xl"} font-bold text-foreground mb-1 font-['Playfair_Display']`}
          >
            {currentMonth.label}
          </h2>
          <p className="text-foreground/50 text-sm">{currentMonth.subtitle}</p>
        </div>

        {/* Who & Result */}
        <div
          className={`grid ${isMobile ? "grid-cols-1 gap-3" : "grid-cols-2 gap-5"} mb-10`}
        >
          <div className="border border-border rounded-xl p-5 bg-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Точка входа
            </p>
            <p className="text-[13px] text-foreground/75 leading-relaxed">
              {currentMonth.forWhom}
            </p>
          </div>
          <div className="border border-primary/25 rounded-xl p-5 bg-primary/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              Результат месяца
            </p>
            <p className="text-[13px] text-foreground/75 leading-relaxed">
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
        <section className="border border-primary/25 rounded-xl p-6 bg-primary/5 mb-12">
          <p
            className={`${isMobile ? "text-base" : "text-lg"} font-bold text-foreground mb-4 text-center`}
          >
            Что получает каждый участник за месяц {currentMonth.month}
          </p>
          <ul className="space-y-2">
            {currentMonth.outcomes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[13px] text-foreground/80"
              >
                <span className="w-1 h-1 rounded-full bg-primary mt-[7px] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pb-10">
          <CTAButton
            className={
              isMobile ? "px-8 py-3.5 text-base" : "px-10 py-4 text-lg"
            }
          />
          <p className="text-muted-foreground text-xs mt-3">
            Старт 16 марта 2026 · 12 недель · Группа 5-7 человек
          </p>
        </div>
      </main>
    </div>
  );
}
