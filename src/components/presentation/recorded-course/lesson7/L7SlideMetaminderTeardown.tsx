import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight } from "lucide-react";

const rows = [
  {
    lever: "Сократи путь",
    before: "Несколько экранов до первого результата",
    after: "Результат виден на первом экране",
  },
  {
    lever: "Покажи результат заранее",
    before: "Старт с пустого экрана",
    after: "Готовый пример сразу, без единого ввода",
  },
  {
    lever: "Дай один win",
    before: "«Сначала настрой всё»",
    after: "Одно действие = мгновенный результат",
  },
];

export default function L7SlideMetaminderTeardown() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px] py-[22px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          Разбор вживую · MetaMinder
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Как мы настроили Aha в MetaMinder
        </h2>
        <div className="space-y-[8px]">
          {rows.map((r, i) => (
            <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[12px] py-[8px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[4px]">{r.lever}</p>
              <div className="flex items-center gap-[6px]">
                <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] line-through flex-1">{r.before}</p>
                <ArrowRight size={12} className="text-[hsl(var(--slide-gold))] shrink-0" />
                <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-medium leading-[1.35] flex-1">{r.after}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mt-[10px]">
          На видео прохожу по реальным экранам MetaMinder — что именно поменяли и почему.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[40px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Разбор вживую · MetaMinder
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[32px] tracking-[-0.01em]">
        Как мы настроили <span className="text-[hsl(var(--slide-gold))]">Aha</span> в MetaMinder
      </h2>
      <div className="space-y-[16px] max-w-[1800px]">
        {rows.map((r, i) => (
          <div key={i} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[20px] bg-[hsl(var(--slide-gold)/0.04)] flex items-center gap-[28px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] w-[320px] shrink-0">{r.lever}</p>
            <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.4] line-through flex-1">{r.before}</p>
            <ArrowRight size={28} className="text-[hsl(var(--slide-gold))] shrink-0" />
            <p className="text-[20px] text-[hsl(var(--slide-text))] font-semibold leading-[1.4] flex-1">{r.after}</p>
          </div>
        ))}
      </div>
      <div className="mt-[28px] bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[12px] px-[28px] py-[16px] max-w-[1800px]">
        <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.45]">
          Каждое изменение — это один из трёх рычагов. На видео прохожу по реальным экранам MetaMinder: что поменяли и почему.
        </p>
      </div>
    </div>
  );
}
