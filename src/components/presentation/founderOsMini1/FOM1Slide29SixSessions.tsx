import FOM1SlideBase from "./FOM1SlideBase";

const sessions = [
  ["С1 сегодня", "Strategic Lock", "ICP + позиционирование + 5–7 интервью"],
  ["С2 через 5 дней", "Pricing & MVP scope", "Сколько берём, за что, что строим минимум"],
  ["С3", "Build & Land", "Лендинг + MVP через AI (Lovable + Claude Code + Supabase)"],
  ["С4", "Onboarding & Aha", "Первая сессия в продукте: 3 экрана, путь к ценности, retention"],
  ["С5", "Маркетинг", "Как привлекать первых пользователей без бюджета"],
  ["С6", "Продажи", "Как закрывать первые сделки"],
];

export default function FOM1Slide29SixSessions() {
  return (
    <FOM1SlideBase
      slide={29}
      eyebrow="Карта программы"
      title="Куда мы идём"
      subtitle="6 сессий — 30 дней — первый клиент"
    >
      <div className="space-y-[6px] md:space-y-[10px] max-w-[1800px] text-[12px] md:text-[22px]">
        {sessions.map(([w, t, d], i) => (
          <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[200px_1fr] gap-[8px] md:gap-[20px] items-baseline border-b border-[hsl(var(--slide-border)/0.2)] pb-[6px]">
            <span className="text-[hsl(var(--slide-gold))] font-mono">{w}</span>
            <p>
              <span className="font-semibold text-[hsl(var(--slide-text))]">{t}</span>
              <span className="text-[hsl(var(--slide-text-muted))]"> — {d}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="mt-[12px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] max-w-[1800px] text-[12px] md:text-[22px]">
        <p>💡 Каждая сессия — отдельный блок с практическим результатом. Без выполненного ДЗ следующая сессия не работает.</p>
      </div>
    </FOM1SlideBase>
  );
}
