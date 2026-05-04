import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const promptLines = [
  "# 👇 ЗАПОЛНИ ЭТИ 10 ПОЛЕЙ — ВСЁ, ЧТО НУЖНО ОТ ТЕБЯ",
  "Замени каждую [скобку] на свои данные. Ниже скобок больше не будет — остальное ИИ сделает сам.",
  "",
  "1. Название продукта: [продукт]",
  "2. Категория: [B2B SaaS / AI-tool / consumer app / marketplace / другое]",
  "3. Что делает (одно предложение, формула «глагол + для кого + результат»): [описание]",
  "4. ICP — один сегмент, не 'все': [роль, контекст, размер компании]",
  "5. JTBD по формуле «Когда ___, я хочу ___, чтобы ___»: [JTBD целиком]",
  "6. Activation moment (момент 'aha', конкретное действие + метрика): [например: создал 1 отчёт и поделился ссылкой]",
  "7. Time-to-value цель (часы или дни от регистрации до aha): [число]",
  "8. Главный барьер №1, на котором отваливаются: [барьер]",
  "9. Tone of voice — 3 прилагательных: [например: прямой, тёплый, без жаргона]",
  "10. Имя отправителя (реальный человек, не бренд): [Имя, роль]",
  "",
  "# РОЛЬ",
  "Ты — lifecycle-маркетолог уровня Lenny Rachitsky / Userlist / Customer.io.",
  "Пишешь onboarding для ранних SaaS / AI-продуктов. Опыт: 50+ запусков с открываемостью 55%+ и activation-rate ≥ 40%.",
  "",
  "# ЗАДАЧА",
  "Спроектируй activation-серию из 7 писем, привязанную к ПОВЕДЕНИЮ, а не к календарю.",
  "Для каждого письма дай 2 ветки: A) юзер дошёл до activation, B) не дошёл.",
  "",
  "# СТРУКТУРА СЕРИИ (поведенческая, не датная)",
  "E1  · T+0 мин   · Welcome + ОДИН клик до первой ценности (≤2 мин усилий)",
  "E2  · T+24 ч    · Если нет activation → убрать барьер №1 / Если да → next best action",
  "E3  · T+72 ч    · Социальное доказательство под ICP (1 цифра + 1 цитата клиента)",
  "E4  · T+5 дн    · Teach: фича 2-го уровня, которая углубляет привычку",
  "E5  · T+8 дн    · Milestone-письмо: что юзер уже сделал (персонализированные данные)",
  "E6  · T+14 дн   · Use-case под JTBD (showcase, как другой ICP получил результат)",
  "E7  · T+21 дн   · Win-back ИЛИ upgrade-trigger в зависимости от поведения",
  "",
  "# ПРАВИЛА КОПИРАЙТА (best practices 4 мая 2026)",
  "1. Mobile-first: 70%+ откроют с телефона. Первые 90 символов несут смысл.",
  "2. Subject line: 30-50 символов, без CAPS, без emoji в первых 3 письмах (Apple MPP искажает open-rate, опираемся на CTR).",
  "3. Preview text (preheader): 40-90 символов, ДОПОЛНЯЕТ subject, не повторяет.",
  "4. Plain-text стиль: без HTML-баннеров, без хедер-картинок. Письмо должно выглядеть как личное.",
  "5. ≤ 90 слов в теле. Одна мысль. Один CTA-линк (не кнопка-картинка).",
  "6. CTA — глагольная фраза от первого лица юзера ('Открыть мой дашборд'), не 'Перейти'.",
  "7. От: реальный человек @ домен продукта. Reply-to работает.",
  "8. Никаких 'Дорогой пользователь', 'Команда X рада', 'Не пропустите'.",
  "9. Сегментация по поведению > по дате. Каждое письмо знает: дошёл/не дошёл/застрял где.",
  "10. AI-персонализация: 1 динамическая переменная на письмо (имя НЕ считается).",
  "11. Анти-паттерны: featuredump, длинные списки фич, 'у нас новая версия', PS-приписки с upsell.",
  "12. Compliance: один list-unsubscribe header, GDPR-footer, без dark patterns.",
  "",
  "# ФОРМАТ ВЫВОДА (строго для каждого из 7 писем)",
  "---",
  "Письмо N · Триггер: {событие} · Цель: {одна метрика}",
  "Subject (вариант A): ...",
  "Subject (вариант B для A/B): ...",
  "Preheader: ...",
  "Тело (≤90 слов, plain-text):",
  "...",
  "CTA-ссылка: {Текст ссылки → URL-плейсхолдер}",
  "Ветка если НЕ activated: {что меняем в теле/CTA}",
  "Метрика успеха: {open / CTR / activation-conversion}",
  "---",
  "",
  "# В КОНЦЕ ДОБАВЬ",
  "1. Чек-лист deliverability (SPF/DKIM/DMARC, warm-up, list-unsubscribe).",
  "2. Карту событий, которые надо трекать в Mixpanel для каждой ветки (триггеры для SendPulse / Resend / Intercom Fin).",
  "3. 3 гипотезы для A/B-тестов на следующий цикл.",
  "",
  "# САМОПРОВЕРКА (выполни перед выдачей)",
  "□ Каждое письмо привязано к событию, а не только к дню",
  "□ Тема ≤ 50 символов и не кликбейт",
  "□ Один CTA, текстовая ссылка, глагол от первого лица",
  "□ Нет featuredump, нет 'команда рада'",
  "□ Есть ветка для не-activated юзеров",
  "□ Tone совпадает с заявленным выше",
  "Если хоть один пункт не ОК — перепиши письмо до выдачи.",
];

export default function M8Slide17AIPrompt() {
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
          Готовый промпт · копировать
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          7 писем за 60 секунд.
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
          Готовый промпт
        </p>
        <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[20px] tracking-[-0.02em]">
          7 писем onboarding-серии за 60 секунд.
        </h2>
        <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[24px]">
          Замени <span className="text-[hsl(var(--slide-gold))]">[скобки]</span> на свои данные. Вставь в ChatGPT / Lovable AI / Claude — получи готовую серию для SendPulse или Resend.
        </p>
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
          <span className="text-[13px] text-[hsl(var(--slide-text-muted)/0.4)] ml-[8px] font-mono">retention-emails.txt</span>
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