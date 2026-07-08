import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const checklist = `# Чек-лист перед запуском · отдай Claude один раз

Привет Claude, перед тем как я запущу продукт в прод, прогони его по этому списку.
Для каждого пункта скажи: ✅ сделано, ⚠️ частично, ❌ не сделано.
Где ❌ — предложи что починить первым.

## Безопасность
[ ] Секретные ключи (Stripe, Supabase) только в .env, не в коде
[ ] Файл .env в .gitignore, не залит в репо (и не «светился» в старых коммитах)
[ ] Ключи — это live/production ключи, а не тестовые (особенно Stripe)
[ ] Юзер видит только свои данные, не чужие
[ ] Защита от спама на формах (rate limit или капча)
[ ] Все ключи API — ограниченные, не полные
[ ] Webhook (адрес, куда Stripe шлёт уведомление об оплате) проверяет подпись запроса, а не принимает всё подряд

## Что видит юзер
[ ] Загрузка показывается на каждой кнопке (спиннер или skeleton)
[ ] Пустой экран показывает понятное сообщение (не просто белое)
[ ] Ошибка показывает понятный текст (не код)
[ ] Кнопки отключаются после клика (защита от двойного клика)

## Мобильная версия
[ ] Все экраны нормально открываются на 375px (iPhone)
[ ] Кнопки достаточно большие для пальца (44 пикселя минимум)
[ ] Проверено в Chrome И Safari И Firefox

## Аналитика и мониторинг
[ ] Sentry подключён, видит ошибки в проде
[ ] Есть алерт (email/Slack/Telegram), если прод падает — не только запись в Sentry постфактум
[ ] Аналитика подключена (Mixpanel или PostHog)
[ ] Минимум 4 события трекаются: регистрация, первое действие, оплата, отписка

## SEO и юридическое
[ ] Privacy Policy опубликована (хотя бы одна страница)
[ ] Terms of Service опубликованы
[ ] sitemap.xml есть в корне сайта
[ ] OG-теги для шейринга в соцсетях есть на главной

## Перед самой кнопкой Deploy
[ ] git status чистый, ничего лишнего не коммитится
[ ] Если есть автоматические тесты — они прошли перед деплоем
[ ] Бэкап базы данных включён, восстановление проверено хотя бы раз
[ ] План отката готов — что делать если что-то сломается`;

export default function L6Slide19ProductionChecklist() {
  const isMobile = useIsMobile();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(checklist);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[2px]">
          Чек-лист перед запуском
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Отдай Claude — пусть проверит твой проект
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Скопируй промпт ниже в Claude. Он пройдёт по списку, скажет что готово, а что забыл. Поможет починить.
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px] overflow-y-auto mb-[4px]" style={{ maxHeight: "75%" }}>
          <pre className="text-[5.5px] font-mono text-[hsl(var(--slide-text))] leading-[1.5] whitespace-pre-wrap">{checklist}</pre>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleCopy}
          className="self-start px-[8px] py-[3px] rounded-[4px] text-[8px] font-semibold transition-all"
          style={{
            background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
            color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
            border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.3"})`,
          }}
        >
          {copied ? "✓ Скопировано" : "📋 Чек-лист"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Чек-лист перед запуском
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        Отдай Claude — пусть <span className="text-[hsl(var(--slide-gold))]">проверит твой проект</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Скопируй промпт ниже в Claude. Он пройдёт по списку, отметит что готово, а что забыл. За одну сессию закроешь весь список.
      </p>

      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[24px] py-[18px] overflow-y-auto max-w-[1700px]" style={{ maxHeight: "440px" }}>
        <pre className="text-[12px] font-mono text-[hsl(var(--slide-text))] leading-[1.65] whitespace-pre-wrap">{checklist}</pre>
      </div>

      <button
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={handleCopy}
        className="mt-[14px] self-start px-[18px] py-[10px] rounded-[10px] text-[15px] font-semibold transition-all"
        style={{
          background: copied ? "hsl(var(--slide-gold))" : "hsl(var(--slide-gold) / 0.15)",
          color: copied ? "hsl(var(--slide-bg))" : "hsl(var(--slide-gold))",
          border: `1px solid hsl(var(--slide-gold) / ${copied ? "1" : "0.4"})`,
        }}
      >
        {copied ? "✓ Скопировано в буфер" : "📋 Скопировать чек-лист"}
      </button>
    </div>
  );
}
