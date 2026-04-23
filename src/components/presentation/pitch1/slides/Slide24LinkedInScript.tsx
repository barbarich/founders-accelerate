import { Eyebrow, SlideFrame, COLORS } from "./_shared";

export default function Slide24LinkedInScript() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="text-center"><Eyebrow>Холодный аутрич в LinkedIn — скрипт под массовую рассылку</Eyebrow></div>
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
{`Привет, {{firstName}} 👋

Заметил, что ты {{роль}} в {{компания/ниша}} —
как раз с такими ребятами я сейчас общаюсь.

Собираю 10 коротких разговоров с {{сегмент}},
чтобы понять, как вы решаете {{боль}}.
Не продаю, не питчу — 15 минут, мне ценен ваш опыт.

Окей закинуть пару вопросов сюда, в личку?`}
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
{`Правила массовой рассылки:
• 80–100 инвайтов в день с персонализацией в {{переменных}}
• Без ссылок и пифов в первом сообщении — иначе спам-фильтр
• Просим разговор/ответ, а не встречу — порог входа ниже
• Follow-up через 4–5 дней, всего 2 касания, потом — отпускаем

Connect → accept:   30-40%
Accept → ответ:     15-25%
Ответ → разговор:   30-40%

1 000 инвайтов → ~350 в сети → ~70 ответов → ~25 разговоров`}
        </pre>
      </div>
    </SlideFrame>
  );
}