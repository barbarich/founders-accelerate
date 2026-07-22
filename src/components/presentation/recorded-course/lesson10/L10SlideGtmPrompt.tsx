import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ ПОЛЯ - ЧЕМ ТОЧНЕЕ, ТЕМ ГЛУБЖЕ ОТВЕТ",
  "Замени каждую [скобку]. Не знаешь поле - так и напиши «не знаю».",
  "",
  "1. Продукт (что это + что человек получает в итоге): [...]",
  "2. Тип и чек: [B2C / B2B / услуга] · [цена или средний чек]",
  "3. Ниша и гео/язык: [конкретная вертикаль] · [страна, язык аудитории]",
  "4. Кто покупает (догадка): [сегмент + повод покупки]",
  "5. Боль их словами: [как они сами описывают проблему]",
  "6. Бюджет на маркетинг: [$/мес или $/день, или 0] · Время в неделю: [часов]",
  "7. Что уже есть и что пробовал: [аудитория / нетворк / навык, напр. люблю выступать]",
  "   · [что делал и с каким результатом]",
  "",
  "# РОЛЬ",
  "Ты - GTM-оператор уровня тех, кто выводил с нуля и B2C, и B2B, и услуги - и без",
  "бюджета, и с бюджетом. Мыслишь как фаундер, считаешь каждый доллар, ненавидишь общие",
  "слова. Перед ответом думаешь конкретно про МОЮ нишу, гео и бюджет, а не «стартапы вообще».",
  "Важно: я запускаю маркетинг впервые. По каждому ходу объясняй просто: почему именно он,",
  "что он мне даст и по каким цифрам я пойму, что он работает.",
  "",
  "# ШАГ 0 - УТОЧНИ (обязательно)",
  "Если каких-то полей не хватает для ТОЧНОГО ответа - задай мне 3-5 острых вопросов",
  "и остановись. Не выдумывай за меня. Только когда данных хватает - выдавай план.",
  "",
  "# ГЛАВНОЕ ПРАВИЛО ПРОТИВ БАНАЛЬНОСТИ",
  "Если твой ответ подошёл бы любому другому стартапу - он неверный, перепиши.",
  "Каждый пункт привязан к моей нише, гео и бюджету. Никаких «ведите соцсети» и",
  "«используйте контент». Только конкретика, которую я сделаю на этой неделе.",
  "",
  "# ЧТО ВЫДАТЬ (строго по порядку)",
  "1. ТОЧНЫЙ СЕГМЕНТ - уточни мою догадку до одного человека: кто конкретно, триггер",
  "   покупки (что происходит в его жизни в этот момент), боль его словами. Если моя",
  "   догадка слабая - предложи 2 более прибыльных сегмента и чем они лучше.",
  "2. КОНКУРЕНТЫ И ИХ КАНАЛЫ - 3-5 реальных конкурентов в моей нише: как они получают",
  "   клиентов, что из этого повторить дёшево, где щель, которую они не закрыли.",
  "3. ГДЕ ОНИ РЕАЛЬНО СИДЯТ - назови КОНКРЕТНЫЕ места под мою нишу и гео: реальные типы",
  "   сообществ, названия площадок / сабреддитов / групп, конкретные события и лидеров",
  "   мнений. Не «LinkedIn», а «вот такие группы и такие люди». Для каждого - что там делать.",
  "4. ПОЗИЦИЯ - одна фраза, под которую они кликнут, с учётом того, что они уже пробовали.",
  "5. КАНАЛЫ ПОД МОЙ БЮДЖЕТ - выбери 1-2 канала (концентрация), не десять.",
  "   - Бюджет 0: только органика и руками. Точный план касаний.",
  "   - Бюджет есть: распредели мою сумму по каналам, дай реальную вилку цены за платящего",
  "     в моей нише и точку, где увеличивать.",
  "   - Отдельно: ГДЕ НЕ ТРАТИТЬ - 2-3 канала, куда мне точно не идти сейчас и почему.",
  "6. ПЕРВЫЕ 3 ХОДА НА ЭТОЙ НЕДЕЛЕ - с готовыми словами: текст первого сообщения/DM,",
  "   черновик первого поста, к кому и куда. Чтобы я скопировал и сделал сегодня.",
  "7. ПЛАН НА 30 ДНЕЙ - по неделям: канал × активность × сколько раз × метрика × цель",
  "   в цифрах (напр. «20 сообщений → 5 ответов → 1 продажа»). Рядом - какие цифры в моей",
  "   нише считаются нормой, чтобы я понимал, хорошо иду или нет.",
  "8. СИГНАЛЫ - когда удваивать канал, когда убивать, когда включать платный трафик",
  "   и партнёрства.",
  "",
  "# ПРАКТИКИ 2026 - ПРИМЕНИ, ГДЕ УМЕСТНО ДЛЯ МЕНЯ",
  "- Концентрация, не распыление: 1-2 канала до результата.",
  "- Founder-led: мой личный контент и мои личные продажи как канал (особенно B2B/услуги).",
  "- Community-led: постоянные отношения в сообществах, а не разовые посты.",
  "- AEO: покупатели ищут через ChatGPT / Perplexity - как попасть в их ответы по моей теме.",
  "- Тёплый outbound и живые события > холодные массовые рассылки.",
  "Отметь, какие из этих практик подходят именно мне и почему, а какие - нет.",
  "",
  "# ПРАВИЛА",
  "- Язык фаундера, не агентства. Никакого жаргона.",
  "- Каждая рекомендация - с примером / цифрой / готовым шаблоном, не абстракция.",
  "- Уважай мой бюджет и время. Не предлагай то, на что у меня нет ресурса.",
  "- Не хватает данных - вернись к Шагу 0, не выдумывай.",
  "",
  "# САМОПРОВЕРКА (выполни перед выдачей)",
  "□ Ответ НЕ подошёл бы другому стартапу - всё привязано к моей нише / гео / бюджету",
  "□ Места названы конкретно и реальны, туда можно прийти на этой неделе",
  "□ Каналы уложены в мой бюджет; если 0 - только органика и руками",
  "□ Есть готовые тексты (сообщение, пост), которые я скопирую и отправлю сегодня",
  "□ План на 30 дней с метриками, целями в цифрах и нормами по нише",
  "□ По каждому ходу объяснено простыми словами: почему он, что даст, как измерить",
  "□ Практики 2026 применены под меня, а не перечислены списком",
  "Не ОК хоть один пункт - перепиши до выдачи.",
];

export default function L10SlideGtmPrompt() {
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
          Заполни <span className="text-[hsl(var(--slide-gold))]">[скобки]</span> - вставь в ChatGPT или Claude. Он сначала уточнит детали, потом соберёт GTM под твою нишу, гео и бюджет: точный сегмент, реальные места, план на 30 дней и готовые тексты. Не шаблон - под тебя.
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
