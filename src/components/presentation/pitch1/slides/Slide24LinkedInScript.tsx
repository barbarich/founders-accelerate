import { Eyebrow, SlideFrame, COLORS } from "./_shared";

export default function Slide24LinkedInScript() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="text-center"><Eyebrow>LinkedIn-аутрич для C-level — приглашение на демо продукта</Eyebrow></div>
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

Мы помогаем {{роль}} в {{сегмент}} решать {{боль}} —
{{продукт}} сокращает {{метрика}} на {{X%}}
за {{срок}}, без замены текущего стека.

Среди клиентов: {{компания 1}}, {{компания 2}}, {{компания 3}}.

Готов показать 20-минутное демо под задачи {{компания}}
и сразу прислать расчёт ROI для вашего объёма.

Подскажите, кому удобнее передать — вам или команде?`}
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
{`Правила B2B-аутрича на C-level:
• 40–60 точечных инвайтов в день, фильтр по ICP и индустрии
• Персонализация в {{компания}}, {{боль}}, {{метрика}}
• Конкретный результат и социальное доказательство в 1-м касании
• CTA — демо под их задачу, не «созвон познакомиться»
• 2 follow-up: +4 дня (кейс), +7 дней (ROI-расчёт)

Connect → accept:   25-35%
Accept → ответ:     10-18%
Ответ → демо:       30-45%

500 инвайтов → ~150 в сети → ~22 ответа → ~8 демо → 1-2 сделки`}
        </pre>
      </div>
    </SlideFrame>
  );
}