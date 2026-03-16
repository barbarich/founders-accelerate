import { useState } from "react";

export default function M1Slide18Tally() {
  const [copied, setCopied] = useState(false);
  const promptLink = "https://docs.google.com/document/d/1QXfWLylXNDEWcsMxq3Qx5ydOA0qtpqE2UOKNPlwdAGk/edit?pli=1&tab=t.idsm10ne72wt";

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(promptLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Инструмент</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Google Docs & Forms
      </h2>
      <p className="text-[24px] text-[hsl(var(--slide-text-muted))] mb-[36px]">Бесплатно. AI от Gemini создаёт формы за секунды.</p>

      <div className="flex gap-[28px] mb-[32px]">
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
          <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">Google Forms + Gemini</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Опишите задачу — AI сгенерирует структуру формы. Останется только отредактировать вопросы.
          </p>
        </div>
        <div className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[28px]">
          <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[12px]">Google Docs</h3>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Для глубинных интервью — скрипт с вопросами в Google Docs. Легко шарить и комментировать.
          </p>
        </div>
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] p-[24px] mb-[28px]">
        <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-gold))] mb-[14px]">Лучшие практики опросника</h3>
        <div className="grid grid-cols-2 gap-x-[40px] gap-y-[10px]">
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><strong>7–10 вопросов</strong> максимум. Больше — люди бросают.</p>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><strong>Открытые вопросы</strong> в начале, закрытые — в конце.</p>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><strong>Без наводящих</strong> вопросов: «Вам ведь неудобно?» ✗</p>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><strong>Спрашивайте о прошлом</strong>, не о будущем: «Что делали?» ✓</p>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><strong>Логика ветвления</strong> в Forms — разный путь для разных ответов.</p>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px] mt-[2px]">→</span>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]"><strong>Протестируйте</strong> на 2–3 знакомых перед рассылкой.</p>
          </div>
        </div>
      </div>

      {/* Link block */}
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[16px] p-[24px] flex items-center justify-between">
        <div>
          <p className="text-[21px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">
            📄 Промпт для генерации вопросов на кастдев
          </p>
          <p className="text-[16px] text-[hsl(var(--slide-text-muted))]">
            Готовый шаблон — вставьте в Gemini или ChatGPT и получите список вопросов за минуту
          </p>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="shrink-0 ml-[24px] px-[28px] py-[14px] rounded-[10px] font-semibold text-[18px] transition-all duration-200"
          style={{
            background: copied
              ? "hsl(var(--slide-gold))"
              : "hsl(var(--slide-gold) / 0.15)",
            color: copied
              ? "hsl(var(--slide-bg))"
              : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано!" : "📋 Копировать ссылку"}
        </button>
      </div>
    </div>
  );
}
