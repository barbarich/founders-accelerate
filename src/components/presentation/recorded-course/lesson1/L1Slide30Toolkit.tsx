import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide30Toolkit() {
  const tools = [
    { name: "Deep Research", desc: "Анализ рынка с источниками (ChatGPT / Claude / Gemini)" },
    { name: "NotebookLM", desc: "Ресёрч → аудио-подкаст" },
    { name: "SimilarWeb", desc: "Трафик конкурентов" },
    { name: "Meta Ad Library", desc: "Рекламные креативы" },
    { name: "Google Trends", desc: "Динамика спроса" },
    { name: "tl;dv", desc: "Запись и AI-саммари интервью" },
    { name: "Google Forms + Gemini", desc: "Генерация опросников" },
    { name: "Google Docs", desc: "Скрипт custdev-звонка" },
    { name: "ChatGPT / Gemini / Claude", desc: "Генерация вопросов" },
  ];
  const resources = [
    "Промпты для анализа рынка и конкурентов",
    "Промпт для custdev-вопросов",
    "Формула позиционирования + 3 теста",
  ];
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Резюме встречи</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[14px]">Инструменты и материалы</h2>
        <div className="flex gap-[10px]">
          <div className="flex-1">
            <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[8px]">🛠️ Инструменты</h3>
            <div className="space-y-[4px]">
              {tools.map((t, i) => (
                <div key={i} className="flex items-center gap-[4px]">
                  <div className="w-[3px] h-[3px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                  <span className="text-[10px] text-[hsl(var(--slide-text))] font-medium">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-[11px] font-semibold text-[hsl(var(--slide-text))] mb-[8px]">📄 Материалы</h3>
            <div className="space-y-[6px]">
              {resources.map((t, i) => (
                <div key={i} className="flex items-center gap-[4px]">
                  <div className="w-[3px] h-[3px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                  <span className="text-[10px] text-[hsl(var(--slide-text)/0.85)]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Резюме встречи</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px]">Инструменты и материалы</h2>
      <div className="flex gap-[40px]">
        <div className="flex-[1.2]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">🛠️ Инструменты</h3>
          <div className="space-y-[12px]">
            {tools.map((t, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                <span className="text-[18px] text-[hsl(var(--slide-text))] font-medium">{t.name}</span>
                <span className="text-[16px] text-[hsl(var(--slide-text-muted))]">— {t.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">📄 Материалы</h3>
          <div className="space-y-[12px]">
            {resources.map((t, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[hsl(var(--slide-gold)/0.5)]" />
                <span className="text-[18px] text-[hsl(var(--slide-text)/0.85)]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
