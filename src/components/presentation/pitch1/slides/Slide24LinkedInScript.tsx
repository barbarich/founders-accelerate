import { Eyebrow, SlideFrame, COLORS } from "./_shared";

export default function Slide24LinkedInScript() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="text-center"><Eyebrow>LinkedIn-аутрич для C-level — скрипт под массовую B2B-рассылку</Eyebrow></div>
        <div style={{
          background: COLORS.panel,
          border: `0.5px solid ${COLORS.line}`,
          padding: 36,
          maxWidth: 800,
        }}>
          <pre style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 18,
            lineHeight: 1.6,
            color: COLORS.text,
            margin: 0,
            whiteSpace: "pre-wrap",
          }}>
{`{{firstName}}, добрый день.

Вижу, вы {{роль}} в {{компания}} — сейчас изучаю,
как компании уровня {{сегмент}} подходят к {{задача}}.

Провожу серию коротких разговоров с {{роль}}, чтобы
сверить рабочие практики и приоритеты на 2026 год.
Без презентаций и коммерческих предложений — 20 минут,
по итогу пришлю краткое саммари по рынку.

Подскажите, уместно ли обсудить на следующей неделе?`}
          </pre>
        </div>
        <pre style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 18,
          lineHeight: 1.7,
          color: COLORS.muted,
          margin: 0,
          whiteSpace: "pre",
          textAlign: "left",
        }}>
{`Правила B2B-рассылки на C-level:
• 40–60 точечных инвайтов в день, фильтр по роли и индустрии
• Персонализация в {{компания}} и {{задача}} — не в имени
• Никаких ссылок, лендингов и питча в первом касании
• Запрашиваем экспертизу и контекст, а не демо
• Один follow-up через 5–7 дней, далее контакт закрываем

Connect → accept:   25-35%
Accept → ответ:     12-20%
Ответ → разговор:   35-50%

500 инвайтов → ~150 в сети → ~25 ответов → ~10 разговоров`}
        </pre>
      </div>
    </SlideFrame>
  );
}