import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "Ты — продуктовый аналитик. Дам тебе 5 событий пользователя за последние 14 дней.",
  "",
  "Событие | Дата | Контекст",
  "[список событий из PostHog]",
  "",
  "Задача:",
  "1. Определи стадию: новый / активный / угасает / ушёл / реактивирован.",
  "2. Найди главный барьер (что мешает регулярно возвращаться).",
  "3. Напиши одно сообщение под этого юзера: тема + 2 строки + CTA.",
  "4. Канал (push/email/in-app) и точное время отправки в его таймзоне.",
  "",
  "Ответь в JSON: { stage, barrier, channel, send_at, subject, body, cta }.",
];

export default function M8Slide19AISegmentation() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promptLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          AI-сегментация · без аналитика
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          GPT читает события — пишет персональное сообщение.
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[8px]">
          PostHog → Edge-функция → Lovable AI → Loops/OneSignal. Один промпт заменяет CRM-сегменты.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px] overflow-y-auto max-h-[55%]">
          <pre className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
            {promptLines.join("\n")}
          </pre>
        </div>
        <button onClick={handleCopy} className="mt-[6px] flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[5px] active:bg-[hsl(var(--slide-gold)/0.2)] self-start">
          <span className="text-[11px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[9px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано" : "Скопировать"}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      <div className="flex-1 pr-[60px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
          AI-сегментация · без аналитика
        </p>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
          GPT читает события из PostHog — пишет персональное сообщение.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[20px] max-w-[650px]">
          Один промпт заменяет три месяца настройки CRM-сегментов. PostHog → edge-функция → Lovable AI → канал.
        </p>
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mb-[24px] max-w-[650px]">
          Цена ответа Gemini Flash: ~$0.0002. Дешевле SMS в 100 раз.
        </p>
        <button onClick={handleCopy} className="flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[18px] py-[10px] hover:bg-[hsl(var(--slide-gold)/0.2)] cursor-pointer">
          <span className="text-[18px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[16px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано!" : "Скопировать промпт"}</span>
        </button>
      </div>
      <div className="w-[600px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] max-h-[80%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[14px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">ai-segment.txt</span>
        </div>
        <pre className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.6] whitespace-pre-wrap font-mono">
          {promptLines.map((line, i) => {
            if (line === "") return <br key={i} />;
            const parts = line.split(/(\[.*?\])/g);
            return (
              <div key={i}>
                {parts.map((p, j) =>
                  p.startsWith("[") ? (
                    <span key={j} className="text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[3px] rounded">{p}</span>
                  ) : (
                    <span key={j}>{p}</span>
                  )
                )}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}