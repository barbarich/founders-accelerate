import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const checklist = `# Production-Ready Checklist · перед каждым релизом

## Безопасность
[ ] Все секреты в env переменных (не в коде, не в репо)
[ ] .env / .env.local в .gitignore
[ ] RLS политики на ВСЕХ таблицах Supabase
[ ] Restricted API keys (не unrestricted) для Stripe / Supabase service
[ ] CORS правила настроены
[ ] Rate limiting на publish endpoints (минимум IP-based)
[ ] Input validation через zod на каждом endpoint

## UX состояния
[ ] Loading state на каждой кнопке / асинхронной операции
[ ] Empty state на каждом списке / экране данных
[ ] Error state с понятным сообщением (не stack trace)
[ ] Success feedback (toast / inline confirmation)
[ ] Disabled state на кнопках после клика (защита от двойного клика)

## Адаптивность
[ ] Mobile 375px — все экраны работают без overflow
[ ] Tablet 768px — переходный layout
[ ] Desktop 1440px — основной layout
[ ] Touch targets ≥ 44×44px на mobile
[ ] Проверено в Chrome + Safari + Firefox

## Производительность
[ ] Lighthouse Performance ≥ 85 на mobile
[ ] Все API ручки кэшируются где можно
[ ] Изображения lazy-loaded + правильного размера
[ ] Нет N+1 запросов (профилировал главные ручки)
[ ] Тяжёлая работа в очереди / Edge Function, не блокирует UI

## Observability
[ ] Sentry подключён · ошибки видны
[ ] Аналитика подключена · минимум события: signup / first_value / paid / churn_risk
[ ] Structured logs с trace_id для дебага
[ ] Health-check endpoint /health возвращает 200

## Тесты и CI
[ ] Unit-тесты на критическую логику (auth, billing)
[ ] 1 integration test happy path
[ ] CI прогоняет typecheck + tests + lint перед merge
[ ] Preview URL на каждом PR

## Юридически + SEO
[ ] Privacy Policy / ToS опубликованы
[ ] Cookie consent если EU траффик
[ ] sitemap.xml + robots.txt
[ ] OG-теги + favicon на каждой странице
[ ] llms.txt для AI-индексации (если делаешь SEO)

## Перед deploy
[ ] git status чистый
[ ] CI зелёный
[ ] Миграции применены на проде (если есть)
[ ] Откат план готов (как rollback если что-то сломалось)`;

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
          Артефакт · production-ready checklist
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          8 разделов · ~35 пунктов
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[4px] leading-[1.4]">
          Дай Claude этот checklist перед релизом: «прогони мой проект по этому списку, отметь что не сделано».
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
          {copied ? "✓ Скопировано" : "📋 Чеклист"}
        </button>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
        Артефакт · production-ready checklist
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[6px]">
        8 разделов · ~35 пунктов · <span className="text-[hsl(var(--slide-gold))]">перед каждым релизом</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[16px] max-w-[1500px] leading-[1.45]">
        Дай Claude этот checklist перед релизом: «прогони мой проект по этому списку, отметь что не сделано, начни закрывать сверху». За одну сессию Claude проходит весь список.
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
        {copied ? "✓ Скопировано в буфер" : "📋 Скопировать чеклист"}
      </button>
    </div>
  );
}
