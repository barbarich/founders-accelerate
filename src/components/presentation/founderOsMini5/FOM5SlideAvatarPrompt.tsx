import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 6 ПОЛЕЙ — ОСТАЛЬНОЕ AI СДЕЛАЕТ САМ",
  "",
  "1. Продукт одной фразой: [ЧТО ЭТО И ДЛЯ КОГО]",
  "2. ICP — узкий сегмент: [роль, контекст]",
  "3. Главная боль до продукта: [одно предложение, словами клиента из С1]",
  "4. Конкретный результат: [с цифрой или временем]",
  "5. Формат актёра: [я сам / UGC-актёр-отзыв / распаковка / talking-head]",
  "6. Язык и тон: [RU или EN · дерзкий / тёплый / экспертный]",
  "",
  "# РОЛЬ",
  "Ты — сценарист коротких UGC-видео для Meta / TikTok рекламы.",
  "Пишешь так, как РЕАЛЬНО говорит живой человек на камеру — не диктор.",
  "Опыт: сотни роликов с CTR 2%+ на холодную аудиторию.",
  "",
  "# ЗАДАЧА",
  "Сгенерируй 5 скриптов по 30 секунд для AI-аватара (HeyGen / Arcads).",
  "Каждый — под свой угол. Я отрендерю и отберу 3-5 с естественной подачей.",
  "",
  "# СТРУКТУРА КАЖДОГО СКРИПТА (30 сек = ~70-80 слов)",
  "1. HOOK — первая фраза, 0.8 сек, останавливает scroll.",
  "   Цифра / противоречие / прямое обращение к боли.",
  "2. PROBLEM — 1-2 фразы: узнаваемая боль ICP его словами.",
  "3. TURN — продукт как поворот: что меняется и почему это работает.",
  "4. PROOF — одна деталь доверия: цифра, срок, «сам так делаю».",
  "5. CTA — последняя фраза: один глагол + один результат.",
  "",
  "# ДЛЯ КАЖДОГО СКРИПТА ТАКЖЕ ДАЙ",
  "- hook_angle: pain_first / outcome_first / contrarian /",
  "  curiosity_gap / founder_personal (все 5 разные у 5 скриптов)",
  "- on_screen_text: 3-4 слова для титра поверх видео",
  "- b_roll_hint: что показать вставкой, пока аватар говорит",
  "",
  "# ПРАВИЛА",
  "1. Пиши РАЗГОВОРНО: короткие фразы, как человек вслух. Не текст с лендинга.",
  "2. Запрещены штампы: revolutionize · game-changing · unlock · ",
  "   the future of · powered by AI · меняет правила игры.",
  "3. Конкретика > абстракция: «за 10 минут», не «быстро».",
  "4. Один CTA = один глагол + один результат. Без «или».",
  "5. Никаких сложных слов, которые аватар произнесёт коряво.",
  "",
  "# САМОПРОВЕРКА перед выдачей",
  "□ 5 скриптов, 5 разных hook_angle",
  "□ Каждый укладывается в 30 секунд при чтении вслух",
  "□ Ни одного штампа из запретного списка",
  "□ Каждый HOOK работает без звука (видно на титре)",
  "Если хоть один пункт не ОК — перепиши до выдачи.",
  "",
  "Начинай.",
];

export default function FOM5SlideAvatarPrompt() {
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
          Готовый промпт · 5 скриптов аватара за 5 минут
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Один промпт → 5 UGC-скриптов <span className="text-[hsl(var(--slide-gold))]">для HeyGen</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Вставь в Claude / GPT-5 → замени плейсхолдеры → получи 5 скриптов. Вставляешь в HeyGen / Arcads → 5 говорящих роликов.
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
          Готовый промпт · 5 скриптов аватара за 5 минут
        </p>
        <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
          Один промпт → <span className="text-[hsl(var(--slide-gold))]">5 UGC-скриптов</span> для аватара
        </h2>
        <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[16px]">
          Вставь в Claude / GPT-5 → замени <span className="text-[hsl(var(--slide-gold))]">[плейсхолдеры]</span> языком клиента из С1 → получи 5 скриптов. Каждый вставляешь в HeyGen / Arcads — получаешь говорящий ролик. <b className="text-[hsl(var(--slide-text))] font-semibold">Дубль с естественной подачей выбираешь сам</b> — не каждый скрипт ложится на аватара одинаково.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[24px] py-[18px] mb-[16px] max-w-[760px]">
          <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[10px]">Почему 5 скриптов → 3-5 роликов</p>
          <ul className="space-y-[6px] text-[15px] text-[hsl(var(--slide-text)/0.88)] leading-[1.4]">
            <li>→ 5 разных hook_angle ловят разные сегменты broad-аудитории</li>
            <li>→ Скрипт — текст, это сильная сторона AI; рендер в HeyGen предсказуем</li>
            <li>→ Из 5 в запуск берёшь 3-5 лучших, дальше партия на замену по неделям</li>
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
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">avatar-scripts.txt</span>
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
