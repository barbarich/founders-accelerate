import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 5 ПОЛЕЙ - БОЛЬШЕ ОТ ТЕБЯ НИЧЕГО НЕ НУЖНО",
  "Замени каждую [скобку] на своё.",
  "",
  "1. Продукт (что это, одним предложением): [...]",
  "2. Тип: [B2C / B2B / услуга] и примерный чек: [цена]",
  "3. Кто, по-твоему, покупает (одна догадка): [сегмент]",
  "4. Какую боль/задачу закрываешь: [боль их словами]",
  "5. Мой ресурс: [есть ли аудитория, нетворк, бюджет - или ничего]",
  "",
  "# РОЛЬ",
  "Ты - GTM-стратег, который выводил на рынок и B2C-бренды, и B2B-продукты с нуля,",
  "без бюджета. Мыслишь как фаундер, а не как агентство.",
  "",
  "# ЗАДАЧА",
  "Собери мне go-to-market: кого, где брать, как войти первым и план на 30 дней.",
  "Не теория - конкретные шаги, которые я начну делать сегодня.",
  "",
  "# ЧТО ВЫДАТЬ (строго по порядку)",
  "1. СЕГМЕНТ - уточни мою догадку до одного человека: кто конкретно, повод покупки,",
  "   боль их словами. Если моя догадка слабая - предложи 2 более точных.",
  "2. ГДЕ ОНИ СИДЯТ - 5-7 конкретных мест: сообщества, площадки, события, где сегмент",
  "   уже собран. Не «соцсети», а конкретные типы групп/событий.",
  "3. КАК ВОЙТИ БЕЗ БЮДЖЕТА - 3 первых касания под мой тип продукта",
  "   (сообщества / личные продажи / сцена / демо). Что сказать и кому.",
  "4. ПЛАН НА 30 ДНЕЙ - таблица: канал × активность × частота × метрика.",
  "   Максимум 2 канала. Что делаю на неделях 1, 2, 3, 4.",
  "5. ЧТО МАСШТАБИРОВАТЬ ПОТОМ - при каком сигнале включать таргет и партнёрства.",
  "",
  "# ПРАВИЛА",
  "- Язык фаундера, не маркетолога. Никаких «синергия», «омниканальность».",
  "- Конкретика: не «веди контент», а «пост в такие-то группы, вот про что».",
  "- Концентрация: максимум 2 канала на старт, остальное - потом.",
  "- Не хватает данных - задай уточняющие вопросы ДО выдачи. Не выдумывай.",
  "",
  "# САМОПРОВЕРКА (перед выдачей)",
  "□ Сегмент - это один человек с поводом покупки, а не «рынок»",
  "□ Места конкретные, туда реально можно прийти на этой неделе",
  "□ Первые касания бесплатные и руками, без рекламы",
  "□ План на 30 дней с метриками и максимум 2 каналами",
  "Не ОК хоть один пункт - перепиши до выдачи.",
];

export default function L11SlideGtmPrompt() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(promptLines.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Готовый промпт · копировать
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Собери мой go-to-market
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px] overflow-y-auto max-h-[60%]">
          <pre className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
            {promptLines.join("\n")}
          </pre>
        </div>
        <span role="button" tabIndex={0} onClick={handleCopy} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCopy(e); }} className="mt-[8px] flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] active:bg-[hsl(var(--slide-gold)/0.2)] self-start cursor-pointer">
          <span className="text-[12px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[9px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано" : "Скопировать промпт"}</span>
        </span>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      <div className="flex-1 pr-[50px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
          Готовый промпт
        </p>
        <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[18px] tracking-[-0.02em]">
          Собери мой go-to-market за один промпт.
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[22px]">
          Заполни <span className="text-[hsl(var(--slide-gold))]">[скобки]</span> - вставь в ChatGPT или Claude. На выходе: сегмент, где их брать, как войти и план на 30 дней. Готовый GTM, не конспект.
        </p>
        <span role="button" tabIndex={0} onClick={handleCopy} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCopy(e); }} className="inline-flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[20px] py-[12px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition-colors cursor-pointer self-start">
          <span className="text-[20px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[18px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано!" : "Скопировать промпт"}</span>
        </span>
      </div>
      <div className="w-[620px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[26px] py-[22px] max-h-[84%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[14px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">build-my-gtm.txt</span>
        </div>
        <pre className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.6] whitespace-pre-wrap font-mono">
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
