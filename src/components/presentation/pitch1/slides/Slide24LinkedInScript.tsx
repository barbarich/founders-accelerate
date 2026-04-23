import { Eyebrow, SlideFrame, COLORS } from "./_shared";

export default function Slide24LinkedInScript() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col items-center justify-center gap-8">
        <div className="text-center"><Eyebrow>Скрипт, который работает у меня сейчас</Eyebrow></div>
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
{`[Имя], увидел твой пост про [конкретное].

Я строю инструмент, который решает [боль]
для [сегмент] — уже работает у [1 имя или цифра].

Дам 15 минут, покажу — без обязательств.
Если не зайдёт — удалю контакт, не буду доставать.

[Ссылка на календарь]`}
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
{`DM → звонок:       20-30%
Звонок → клиент:   15-25%

50 сообщений → 10-15 звонков → 2-4 клиента`}
        </pre>
      </div>
    </SlideFrame>
  );
}