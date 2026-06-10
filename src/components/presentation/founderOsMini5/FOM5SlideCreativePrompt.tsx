import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 6 ПОЛЕЙ — ОСТАЛЬНОЕ AI СДЕЛАЕТ САМ",
  "",
  "1. URL продукта: [ВСТАВЬ_URL_ЛЕНДИНГА]",
  "2. Позиционирование одной фразой: [ФОРМУЛА ИЗ С1]",
  "3. ICP — узкий сегмент: [роль, контекст, размер]",
  "4. Главная боль ICP до продукта: [одно предложение, словами клиента из С1]",
  "5. Конкретный результат от продукта: [с цифрой или временем]",
  "6. Tone + язык: [Bold / Friendly / Authoritative] · [RU / EN]",
  "",
  "# РОЛЬ",
  "Ты — senior performance-креативщик. Meta / TikTok реклама AI-продуктов в 2026.",
  "Опыт: сотни запусков, ROAS 3+ на холодную аудиторию.",
  "",
  "# ЗАДАЧА",
  "Дай 5 ГОТОВЫХ К ПРОДАКШЕНУ концептов ад-креативов — каждый под свой угол.",
  "Не 30 черновиков, а 5 проработанных. Я отберу 3–5 и запущу в одну Dynamic Creative группу.",
  "",
  "# СТРУКТУРА КАЖДОГО КОНЦЕПТА",
  "1. hook — 6-10 слов, останавливает scroll. Работает и без звука (как титр).",
  "2. body — 2-3 предложения: боль → поворот → конкретный outcome с цифрой.",
  "3. cta — 3-5 слов, один глагол + один результат.",
  "4. format — static_image / video_15s / carousel_3.",
  "5. hook_angle — один из 5, все РАЗНЫЕ у 5 концептов:",
  "   pain_first · outcome_first · contrarian · founder_personal · social_proof.",
  "6. visual_brief — детальный абзац для image/video-AI",
  "   (Higgsfield / Nano Banana / Sora):",
  "   - subject и действие в кадре",
  "   - композиция и где титр с hook",
  "   - настроение + палитра (свяжи с брендом)",
  "   - что НЕ включать: «без stock-людей», «без generic-офиса»",
  "7. why_it_works — одно предложение: почему этот угол зацепит именно мой ICP.",
  "",
  "# ПРАВИЛА",
  "1. Конкретика > абстракция: «сэкономишь 4 часа в неделю», не «сэкономишь время».",
  "2. Запрещены штампы: revolutionize · game-changing · unlock ·",
  "   the future of · powered by AI · меняет правила игры.",
  "3. Один CTA = один глагол + один результат. Без «или».",
  "4. visual_brief конкретный, не общий: что в кадре и чего НЕ должно быть.",
  "5. 5 концептов = 5 РАЗНЫХ углов, не пять вариаций одного.",
  "",
  "# САМОПРОВЕРКА перед выдачей",
  "□ 5 концептов, 5 разных hook_angle",
  "□ Ни одного штампа из запретного списка",
  "□ Каждый hook читается без звука (виден как титр)",
  "□ Каждый body заканчивается outcome с цифрой или временем",
  "□ Каждый visual_brief содержит «без [конкретное]»",
  "Если хоть один пункт не ОК — перепиши до выдачи.",
  "",
  "Начинай.",
];

export default function FOM5SlideCreativePrompt() {
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
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Готовый промпт · 5 концептов за 5 минут
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Один промпт → 5 <span className="text-[hsl(var(--slide-gold))]">проработанных концептов</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[4px]">
          AI даёт текст + визуальный бриф, не готовую картинку. Рендеришь и отбираешь сам — в запуск идут 3–5.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[8px] py-[5px] overflow-y-auto max-h-[52%]">
          <pre className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">{promptLines.join("\n")}</pre>
        </div>
        <button onClick={handleCopy} className="mt-[6px] flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[4px] self-start">
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
          Готовый промпт · 5 концептов за 5 минут
        </p>
        <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em]">
          Один промпт → 5 <span className="text-[hsl(var(--slide-gold))]">проработанных концептов</span>
        </h2>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[16px]">
          Вставь в Claude / GPT-5 → замени <span className="text-[hsl(var(--slide-gold))]">[плейсхолдеры]</span> языком клиента из С1. AI даёт текст + визуальный бриф — <b className="text-[hsl(var(--slide-text))] font-semibold">не готовую картинку</b>. Рендеришь в Higgsfield / Nano Banana / Sora и отбираешь сам.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[16px] mb-[16px] max-w-[760px]">
          <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[10px]">Почему 5, а не 30</p>
          <ul className="space-y-[6px] text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">
            <li>→ На старте не нужен невод из 30 черновиков — нужно 5 сильных, готовых к рендеру</li>
            <li>→ Из 5 концептов рендеришь 3–5, выстреливает 1–2. В этом смысл, а не в «30 шедевров»</li>
            <li>→ Запускаешь их в Dynamic Creative, дальше доращиваешь партию до 20–30 по неделям</li>
          </ul>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[20px] py-[12px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition-colors cursor-pointer">
          <span className="text-[20px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[18px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано!" : "Скопировать промпт"}</span>
        </button>
      </div>
      <div className="w-[600px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] max-h-[85%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[14px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">5-creatives.txt</span>
        </div>
        <pre className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
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
