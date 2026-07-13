import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 10 HERO-HEADLINES ДЛЯ ЛЕНДИНГА",
  "",
  "Ты — senior копирайтер, пишущий hero-секции для AI-стартапов.",
  "",
  "Контекст моего продукта:",
  "- Позиционирование (одной фразой): [ВСТАВЬ_ФОРМУЛУ_С_WORKSHOP_1]",
  "- ICP: [ВСТАВЬ_КОМУ]",
  "- Главный результат для ICP: [ВСТАВЬ_РЕЗУЛЬТАТ]",
  "- Главная боль ICP до продукта: [ВСТАВЬ_БОЛЬ]",
  "- Tone of voice (одно прилагательное): [Bold / Friendly / Authoritative]",
  "",
  "Сгенерируй 10 hero-headlines для главной страницы лендинга.",
  "",
  "Правила:",
  "1. Каждый — до 8 слов",
  "2. Один глагол + один конкретный результат",
  "3. Запрещены generic AI-tropes: revolutionize, unleash, unlock, transform",
  "4. Конкретика > абстракция: «сэкономь 4 часа в неделю», не «сэкономь время»",
  "5. 3 варианта pain-first, 3 outcome-first, 2 contrarian, 2 specific-number",
  "",
  "Формат: пронумерованный список, без преамбулы.",
];

const steps = [
  { n: "1", t: "10 hero-headlines от AI", time: "5 мин", d: "Открой Claude или ChatGPT, вставь промпт справа, замени плейсхолдеры на свои данные из Workshop 1." },
  { n: "2", t: "Выбери 1 победитель", time: "2 мин", d: "Из 10 выбери одну — самую конкретную и понятную за 5 секунд незнакомцу." },
  { n: "3", t: "AI hero-картинка", time: "5 мин", d: "ChatGPT (Sora) / Nano Banana → промпт под выбранный headline. Скачай картинку." },
  { n: "4", t: "Залей на свой лендинг", time: "3 мин", d: "Lovable / v0 / Webflow — обнови hero-секцию: новый headline + новая картинка." },
  { n: "5", t: "Скинь скрин в чат", time: "5 мин", d: "Группа смотрит, говорит первое впечатление за 5 секунд. Не подсказывай заранее, что это." },
];

export default function L11Slide12Workshop2() {
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
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Воркшоп 2 · 20 минут
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Hero-секция твоего лендинга — <span className="text-[hsl(var(--slide-gold))]">переделай сейчас</span>
        </h2>
        <div className="space-y-[3px] mb-[6px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[3px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
                <span className="text-[7.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] ml-[6px]">· {s.time}</span>
              </p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] ml-[12px]">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[8px] py-[5px] max-h-[26%] overflow-y-auto mb-[5px]">
          <pre className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">{promptLines.join("\n")}</pre>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[4px] self-start">
          <span className="text-[10px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[8px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано" : "Скопировать промпт"}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      <div className="flex-1 pr-[40px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Воркшоп 2 · 20 минут
        </p>
        <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
          Hero-секция твоего лендинга — <span className="text-[hsl(var(--slide-gold))]">переделай сейчас</span>
        </h2>
        <div className="space-y-[10px] mb-[20px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[10px] px-[20px] py-[10px]">
              <div className="flex items-baseline gap-[10px]">
                <span className="font-display text-[26px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
                <span className="text-[18px] font-bold text-[hsl(var(--slide-text))]">{s.t}</span>
                <span className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))]">· {s.time}</span>
              </div>
              <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[36px] mt-[2px]">{s.d}</p>
            </div>
          ))}
        </div>
        <button onClick={handleCopy} className="flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[18px] py-[10px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition-colors cursor-pointer">
          <span className="text-[18px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[16px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано!" : "Скопировать промпт для шага 1"}</span>
        </button>
      </div>
      <div className="w-[560px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[24px] py-[20px] max-h-[80%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[12px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[12px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">10-headlines.txt</span>
        </div>
        <pre className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.55] whitespace-pre-wrap font-mono">
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
