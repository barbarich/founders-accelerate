import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

const pairs = [
  {
    bad: "«Инновационная платформа для повышения эффективности команд»",
    good: "«Прорабы получают все фото, чаты и задачи по объекту в одном месте — без WhatsApp-хаоса»",
    res: "порядок",
    no: "хаоса",
  },
  {
    bad: "«AI-решение для бизнес-аналитики нового поколения»",
    good: "«Владелец магазина получает отчёт по продажам за 30 секунд — без аналитика и Excel»",
    res: "отчёт за 30 сек",
    no: "аналитика",
  },
  {
    bad: "«Комплексная EdTech-платформа для корпоративного обучения»",
    good: "«Обученные сотрудники с первого рабочего дня — обучение за 5 минут вместо месяцев»",
    res: "обученный сотрудник",
    no: "месяцев ожидания",
  },
];

export default function FOM1Slide08ProcessVsResult() {
  const isMobile = useIsMobile();
  const pad = isMobile ? "px-[18px] pt-[20px] pb-[36px]" : "px-[140px] pt-[60px] pb-[80px]";

  return (
    <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative ${pad}`}>
      <p className={`uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium ${isMobile ? "text-[9px] mb-[6px]" : "text-[16px] mb-[12px]"}`}>
        Процесс vs Результат
      </p>
      <h2 className={`font-display font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em] ${isMobile ? "text-[20px]" : "text-[44px]"}`}>
        Процесс vs Результат
      </h2>
      <p className={`text-[hsl(var(--slide-text-muted))] ${isMobile ? "text-[10.5px] mt-[6px]" : "text-[20px] mt-[10px]"}`}>
        Три примера — плохо/хорошо
      </p>

      <div className={`flex-1 mt-[14px] grid gap-[10px] ${isMobile ? "" : "gap-[16px]"}`}>
        {pairs.map((p, i) => (
          <div
            key={i}
            className={`bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] ${isMobile ? "p-[10px]" : "p-[18px]"}`}
          >
            <div className={isMobile ? "text-[10px]" : "text-[18px]"}>
              <span className="text-[hsl(var(--destructive,0_70%_60%))]" style={{ color: "hsl(0 70% 60%)" }}>❌ </span>
              <span className="text-[hsl(var(--slide-text-muted))]">Процесс: </span>
              {p.bad}
            </div>
            <div className={`mt-[6px] ${isMobile ? "text-[10px]" : "text-[18px]"}`}>
              <span style={{ color: "hsl(140 50% 55%)" }}>✅ </span>
              <span className="text-[hsl(var(--slide-text-muted))]">Результат: </span>
              <span className="text-[hsl(var(--slide-text))]">{p.good}</span>
            </div>
            <p className={`mt-[6px] text-[hsl(var(--slide-gold))] ${isMobile ? "text-[9px]" : "text-[15px]"}`}>
              Результат: {p.res}. Без: {p.no}
            </p>
          </div>
        ))}
      </div>

      <FOM1Footer slide={8} />
    </div>
  );
}
