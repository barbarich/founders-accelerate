import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 6 ПОЛЕЙ - БОЛЬШЕ ОТ ТЕБЯ НИЧЕГО НЕ НУЖНО",
  "Замени каждую [скобку] на своё.",
  "",
  "1. Продукт (что это, одним предложением): [...]",
  "2. Для кого конкретно (один сегмент, не «все»): [роль / ситуация]",
  "3. Какую боль решаешь (их словами, не твоими): [боль]",
  "4. Что человек получает в итоге (результат, не фича): [результат]",
  "5. Моя история основателя (1-2 фразы, из урока 10): [почему я это делаю]",
  "6. Тип продукта и чек: [B2B SaaS / consumer app / инфопродукт / DTC] · [примерная цена]",
  "",
  "# РОЛЬ",
  "Ты - маркетолог-упаковщик уровня тех, кто выводил Notion, Calendly, Liquid Death.",
  "Твоя работа - чтобы незнакомый человек за 5 секунд понял продукт и захотел купить.",
  "",
  "# ЗАДАЧА",
  "Собери упаковку из полей выше. Не советы - готовые формулировки, которые я вставлю",
  "на лендинг и в рекламу сегодня.",
  "",
  "# ЧТО ВЫДАТЬ (строго по порядку)",
  "1. ПОЗИЦИОНИРОВАНИЕ - 3 варианта одной фразы: «[продукт] помогает [кому] получить",
  "   [результат] без [боль/барьер]». Отметь рекомендованный и почему.",
  "2. H1 ЛЕНДИНГА - заголовок + подзаголовок под лучший вариант. Не название, а обещание.",
  "   Вплети мою историю.",
  "3. 3 РЕКЛАМНЫХ УГЛА - три разных хука (боль / результат / история). Для каждого:",
  "   первая строка объявления + идея визуала.",
  "4. ВОРОНКА - какой тип подходит под мой продукт и чек (вейтлист / лид-магнит /",
  "   free trial / VSL / вебинар / заявка-звонок) и почему. Путь клик → оплата в 4-5 шагов.",
  "5. ОФФЕР - не «зарегистрируйся», а оффер: что входит, почему сейчас (акция/дедлайн),",
  "   что снимает риск (гарантия / бесплатный вход). 1-2 варианта.",
  "",
  "# ПРАВИЛА",
  "- Язык фаундера, не маркетолога. Никаких «синергия», «вэлью пропозишн», «фаннел».",
  "- Конкретика вместо общих слов. Не «повысь продуктивность» - а что именно меняется.",
  "- Одна мысль на всё. Пытаешься сказать три сразу - вырежи две.",
  "- Не хватает данных из полей - задай уточняющие вопросы ДО выдачи. Не выдумывай.",
  "",
  "# САМОПРОВЕРКА (перед выдачей)",
  "□ Незнакомый поймёт продукт по H1 за 5 секунд",
  "□ В формулировках есть моя история, а не только фичи",
  "□ 3 угла реально разные",
  "□ Тип воронки обоснован под мой чек",
  "□ Оффер отвечает на «почему сейчас» и снимает риск",
  "□ Нет маркетингового жаргона",
  "Не ОК хоть один пункт - перепиши до выдачи.",
];

export default function L11SlidePackagePrompt() {
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
          Упакуй мой продукт
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px] overflow-y-auto max-h-[60%]">
          <pre className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
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
          Упакуй мой продукт за один промпт.
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[22px]">
          Заполни <span className="text-[hsl(var(--slide-gold))]">[скобки]</span> - вставь в ChatGPT или Claude. На выходе: позиционирование, H1, 3 рекламных угла, воронка и оффер. Готовая упаковка, не конспект.
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
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">package-my-product.txt</span>
        </div>
        <pre className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.6] whitespace-pre-wrap font-mono">
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
