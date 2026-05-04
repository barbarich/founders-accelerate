import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ 6 ПОЛЕЙ — ОСТАЛЬНОЕ CLAUDE СДЕЛАЕТ САМ",
  "Замени каждую [скобку] на свои данные. Запускай в Claude после того, как он уже подключён к Mixpanel через MCP.",
  "",
  "1. Продукт (одно предложение): [глагол + для кого + результат]",
  "2. ICP (один сегмент, не 'все'): [роль / контекст / размер]",
  "3. Метрика, которую улучшаем: [D7 retention / activation / repeat-purchase / другое]",
  "4. Текущее значение метрики: [число + период, напр. 'D7 = 12% за апрель']",
  "5. Канал доставки сообщения: [email через SendPulse / web-push через SendPulse / Intercom Fin]",
  "6. Tone of voice — 3 прилагательных: [например: прямой, тёплый, без жаргона]",
  "",
  "# РОЛЬ",
  "Ты — retention-маркетолог, который работает в паре с продуктовым аналитиком.",
  "У тебя есть прямой доступ к Mixpanel через MCP. Ты сначала смотришь данные, потом пишешь сообщение.",
  "",
  "# ЗАДАЧА (выполни строго по шагам)",
  "Шаг 1. Запроси в Mixpanel:",
  "  • retention-кривую за последние 30 дней по когорте signup",
  "  • топ-5 событий, после которых юзеры НЕ возвращаются в течение 7 дней",
  "  • сегмент юзеров, у которых метрика выше всего → найди их общие действия",
  "",
  "Шаг 2. Сформулируй 1 главный инсайт (≤2 предложения):",
  "  «Юзеры отваливаются на [событие], потому что [гипотеза]. Возвращаем тех, кто [условие].»",
  "",
  "Шаг 3. Определи целевой сегмент для рассылки:",
  "  • точное условие в терминах событий Mixpanel",
  "  • ожидаемый размер сегмента",
  "  • когда отправлять (точный триггер: событие + задержка)",
  "",
  "Шаг 4. Напиши 2 варианта сообщения под выбранный канал.",
  "  Если email → subject (30-50 символов) + preheader (40-90) + тело ≤90 слов + 1 CTA-ссылка",
  "  Если push → заголовок ≤45 символов + текст ≤90 символов + deep-link",
  "  Если Intercom Fin → первая реплика бота + 2 быстрых ответа",
  "",
  "Шаг 5. Дай прогноз эффекта:",
  "  • базовая метрика (из шага 1) → ожидаемая после внедрения",
  "  • на каком объёме данных можно считать результат значимым",
  "  • что трекать в Mixpanel, чтобы измерить лифт",
  "",
  "# ПРАВИЛА КОПИРАЙТА",
  "1. Сообщение опирается на КОНКРЕТНЫЙ инсайт из данных, а не на общие фразы.",
  "2. Tone совпадает с заявленным выше. Никаких 'Дорогой пользователь', 'Команда X рада'.",
  "3. Mobile-first: первые 90 символов несут смысл.",
  "4. Один CTA, глагол от первого лица юзера ('Открыть мой отчёт').",
  "5. Без featuredump, без 'у нас новая фича'. Помогаем дойти до результата.",
  "6. Если данных в Mixpanel мало для вывода — честно скажи и предложи, что дотрекать.",
  "",
  "# ФОРМАТ ВЫВОДА (строго в этом порядке)",
  "---",
  "📊 Инсайт: {1-2 предложения с цифрами из Mixpanel}",
  "🎯 Сегмент: {условие в терминах событий + размер}",
  "⏰ Триггер: {событие + задержка}",
  "✉️ Сообщение, вариант A: {по формату канала}",
  "✉️ Сообщение, вариант B (для A/B): {по формату канала}",
  "📈 Прогноз: {базовая метрика → ожидаемая, объём для значимости}",
  "🔬 Что трекать: {2-3 события в Mixpanel для замера лифта}",
  "---",
  "",
  "# САМОПРОВЕРКА (выполни перед выдачей)",
  "□ Я реально запросил данные в Mixpanel, а не выдумал цифры",
  "□ Инсайт привязан к конкретному событию, а не к ощущениям",
  "□ Сообщение бьёт точно в найденный барьер, а не в общий 'возвращайся'",
  "□ Есть измеримый прогноз и план замера",
  "□ Tone и канал совпадают с заявленными",
  "Если хоть один пункт не ОК — перепиши до выдачи.",
];

export default function M8Slide18bMessageFromInsight() {
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
          Промпт · от инсайта к сообщению
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Из аналитики — в рассылку. Один промпт.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px] overflow-y-auto max-h-[60%]">
          <pre className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] whitespace-pre-wrap font-mono">
            {promptLines.join("\n")}
          </pre>
        </div>
        <button onClick={handleCopy} className="mt-[8px] flex items-center gap-[4px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px] active:bg-[hsl(var(--slide-gold)/0.2)] self-start">
          <span className="text-[12px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[9px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано" : "Скопировать промпт"}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center px-[100px]">
      <div className="flex-1 pr-[60px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
          Промпт · после live-демо
        </p>
        <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
          Инсайт → готовое сообщение для рассылки или пуша.
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[24px]">
          Claude уже подключён к Mixpanel через MCP. Этот промпт превращает аналитику в реальное сообщение под твою аудиторию и канал — с прогнозом эффекта.
        </p>
        <div className="space-y-[10px] mb-[24px]">
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px]">→</span>
            <span className="text-[16px] text-[hsl(var(--slide-text))]">Claude сам читает данные в Mixpanel и формулирует инсайт</span>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px]">→</span>
            <span className="text-[16px] text-[hsl(var(--slide-text))]">Пишет 2 варианта сообщения под канал (email / push / Intercom)</span>
          </div>
          <div className="flex items-start gap-[10px]">
            <span className="text-[hsl(var(--slide-gold))] text-[18px]">→</span>
            <span className="text-[16px] text-[hsl(var(--slide-text))]">Даёт прогноз метрики и план замера лифта</span>
          </div>
        </div>
        <button onClick={handleCopy} className="flex items-center gap-[8px] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[20px] py-[12px] hover:bg-[hsl(var(--slide-gold)/0.2)] transition-colors cursor-pointer">
          <span className="text-[20px]">{copied ? "✅" : "📋"}</span>
          <span className="text-[18px] text-[hsl(var(--slide-gold))]">{copied ? "Скопировано!" : "Скопировать промпт"}</span>
        </button>
      </div>
      <div className="w-[600px] shrink-0 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[28px] py-[24px] max-h-[80%] overflow-y-auto">
        <div className="flex items-center gap-[8px] mb-[14px]">
          <div className="w-[12px] h-[12px] rounded-full bg-red-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/60" />
          <div className="w-[12px] h-[12px] rounded-full bg-green-500/60" />
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">insight-to-message.txt</span>
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
