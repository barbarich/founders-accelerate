import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 7 ПОЛЕЙ — ОСТАЛЬНОЕ AI СДЕЛАЕТ САМ",
  "",
  "1. URL продукта: [ВСТАВЬ_URL_ЛЕНДИНГА]",
  "2. Позиционирование одной фразой: [ВСТАВЬ_ФОРМУЛУ_С_WORKSHOP_1]",
  "3. ICP — узкий сегмент: [роль, контекст, размер компании]",
  "4. Главная боль ICP до продукта: [одно предложение]",
  "5. Конкретный результат от продукта: [с цифрой или временем]",
  "6. Tone of voice: [Bold / Friendly / Authoritative — выбери одно]",
  "7. Язык креативов: [RU / EN]",
  "",
  "# РОЛЬ",
  "Ты — senior performance marketing creative director.",
  "Специализируешься на Meta / TikTok-рекламе AI-продуктов в 2026.",
  "Опыт: $50M+ ad spend, 200+ запусков, ROAS 3+ на холодную аудиторию.",
  "",
  "# ЗАДАЧА",
  "Сгенерируй 30 концептов ад-креативов в JSON-массиве.",
  "Это варианты для Meta Andromeda / TikTok Smart+ — алгоритм сам выберет победителя.",
  "Твоя работа — дать максимальное разнообразие углов и форматов.",
  "",
  "# СТРУКТУРА КАЖДОГО КОНЦЕПТА",
  "1. hook — одно предложение 6-10 слов, останавливает scroll",
  "2. body — 2-3 предложения: проблема → решение → конкретный outcome",
  "3. cta — 3-5 слов, глагол + результат",
  "4. visual_brief — один абзац для image-AI:",
  "   subject, композиция, настроение, палитра, что НЕ включать",
  "5. format — один из:",
  "   static_image · video_storyboard_3_frames · carousel_3_slides",
  "6. hook_angle — один из 10:",
  "   pain_first · outcome_first · social_proof · contrarian ·",
  "   curiosity_gap · before_after · specific_number ·",
  "   founder_personal · fomo · authority",
  "",
  "# ПРАВИЛА ВЫВОДА",
  "1. Все 10 hook_angle встречаются минимум 2 раза",
  "2. Формат: 15 static_image + 10 video_storyboard + 5 carousel",
  "3. Запрещены generic AI-tropes: revolutionize · game-changing ·",
  "   unleash · unlock potential · transform your workflow ·",
  "   the future of · powered by AI · cutting-edge",
  "4. Конкретика > абстракция: «сэкономишь 4 часа в неделю»,",
  "   не «сэкономишь время»",
  "5. Один CTA = один глагол + один результат",
  "6. Visual_brief должен запрещать конкретное:",
  "   «без stock-фото людей», «без generic офиса»",
  "7. Output: только валидный JSON-массив. Без преамбулы, без markdown",
  "",
  "# САМОПРОВЕРКА перед выдачей",
  "□ Все 10 hook_angles покрыты ≥ 2 раза",
  "□ 15 + 10 + 5 = 30, не больше и не меньше",
  "□ Ни одного запрещённого слова в hook / body / cta",
  "□ Каждый visual_brief содержит «без [конкретное]»",
  "□ Каждый body заканчивается outcome'ом с цифрой или временем",
  "Если хоть один пункт не ОК — перепиши до выдачи.",
  "",
  "Начинай.",
];

export default function L11Slide15AIPromptCreatives() {
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
          Готовый промпт · 30 креативов за 5 минут
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Один промпт → 30 ад-креативов <span className="text-[hsl(var(--slide-gold))]">пачкой</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Вставь в Claude / ChatGPT-5 → замени плейсхолдеры → получи JSON. Топ-5 концептов отдаёшь в Higgsfield / Nano Banana / Sora.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[8px] py-[5px] overflow-y-auto max-h-[55%]">
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
          Готовый промпт · 30 креативов за 5 минут
        </p>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
          Один промпт → <span className="text-[hsl(var(--slide-gold))]">30 ад-креативов</span> пачкой
        </h2>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[18px]">
          Вставь в Claude / ChatGPT-5 → замени <span className="text-[hsl(var(--slide-gold))]">[плейсхолдеры]</span> → получи JSON. Топ-5 концептов отдаёшь в Higgsfield / Nano Banana / Sora через визуальный бриф.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[18px] mb-[16px] max-w-[700px]">
          <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[10px]">Почему 30, а не 5</p>
          <ul className="space-y-[6px] text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">
            <li>→ Meta Andromeda сама выбирает победителя — дай ей материал</li>
            <li>→ 10 hook_angles ловят разные сегменты broad-аудитории</li>
            <li>→ Один-два креатива зайдут в 10x других. Без объёма ты их не найдёшь</li>
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
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">30-creatives.txt</span>
        </div>
        <pre className="text-[12.5px] text-[hsl(var(--slide-text-muted))] leading-[1.55] whitespace-pre-wrap font-mono">
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
