import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide18Tally() {
  const [copied, setCopied] = useState(false);
  const isMobile = useIsMobile();
  const promptLink = "https://docs.google.com/document/d/1QXfWLylXNDEWcsMxq3Qx5ydOA0qtpqE2UOKNPlwdAGk/edit?pli=1&tab=t.idsm10ne72wt";

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(promptLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Инструмент</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">Google Docs & Forms</h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Бесплатно. AI от Gemini создаёт формы за секунды.</p>

        <div className="flex gap-[6px] mb-[10px]">
          <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[10px]">
            <h3 className="text-[10px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">Forms + Gemini</h3>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">AI генерирует структуру формы по описанию задачи.</p>
          </div>
          <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[6px] p-[10px]">
            <h3 className="text-[10px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">Google Docs</h3>
            <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">Скрипт вопросов для custdev-звонка.</p>
          </div>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] p-[10px] mb-[10px]">
          <h3 className="text-[10px] font-semibold text-[hsl(var(--slide-gold))] mb-[6px]">Лучшие практики</h3>
          <div className="grid grid-cols-2 gap-[4px]">
            {["7–10 вопросов макс.", "Открытые в начале", "Без наводящих", "О прошлом, не будущем", "Логика ветвления", "Протестируйте"].map((t, i) => (
              <div key={i} className="flex items-start gap-[4px]">
                <span className="text-[hsl(var(--slide-gold))] text-[9px] mt-[1px]">→</span>
                <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] p-[10px] flex items-center justify-between">
          <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))]">📄 Промпт для custdev</p>
          <button
            onPointerDown={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={handleCopy}
            className="shrink-0 ml-[6px] px-[10px] py-[5px] rounded-[6px] font-semibold text-[9px] transition-all duration-200"
            style={{
              background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
              color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
              border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
            }}
          >
            {copied ? "✓ Скопировано!" : "📋 Копировать"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Инструмент</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">Google Docs & Forms</h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[36px]">Бесплатно. AI от Gemini создаёт формы за секунды.</p>
      <div className="flex gap-[28px] mb-[32px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
          <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">Google Forms + Gemini</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Опишите задачу — AI сгенерирует структуру формы. Останется только отредактировать вопросы.</p>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
          <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">Google Docs</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">Для глубинных интервью — скрипт с вопросами в Google Docs. Легко шарить и комментировать.</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] p-[24px] mb-[28px]">
        <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-gold))] mb-[14px]">Лучшие практики опросника</h3>
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[10px]">
          {[
            { text: <><strong>7–10 вопросов</strong> максимум. Больше — люди бросают.</> },
            { text: <><strong>Открытые вопросы</strong> в начале, закрытые — в конце.</> },
            { text: <><strong>Без наводящих</strong> вопросов: «Вам ведь неудобно?» ✗</> },
            { text: <><strong>Спрашивайте о прошлом</strong>, не о будущем: «Что делали?» ✓</> },
            { text: <><strong>Логика ветвления</strong> в Forms — разный путь для разных ответов.</> },
            { text: <><strong>Протестируйте</strong> на 2–3 знакомых перед рассылкой.</> },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-[10px]">
              <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
              <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] p-[24px] flex items-center justify-between">
        <div>
          <p className="text-[21px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">📄 Промпт для генерации вопросов на кастдев</p>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">Готовый шаблон — вставьте в Gemini или ChatGPT</p>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="shrink-0 ml-[24px] px-[28px] py-[14px] rounded-[10px] font-semibold text-[18px] transition-all duration-200"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано!" : "📋 Копировать ссылку"}
        </button>
      </div>
    </div>
  );
}
