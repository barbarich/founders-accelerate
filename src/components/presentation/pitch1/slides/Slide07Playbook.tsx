import { Eyebrow, H2, SlideFrame, COLORS } from "./_shared";

export default function Slide07Playbook() {
  return (
    <SlideFrame padding={80}>
      <div className="w-full h-full flex flex-col gap-8">
        <div><Eyebrow>Playbook</Eyebrow></div>
        <H2 size={32}>10–15 разговоров по 20 минут</H2>
        <pre style={{
          fontFamily: "'JetBrains Mono', 'SF Mono', Menlo, monospace",
          fontSize: 22,
          lineHeight: 1.6,
          color: COLORS.text,
          margin: 0,
          whiteSpace: "pre",
        }}>
{`1. Сегмент: одна узкая группа
   не «предприниматели» —
   а «HR-директора в ритейле 50-200 сотрудников»

2. Вопросы: про прошлое, не про будущее
   `}<span style={{ color: COLORS.error }}>{`❌`}</span>{` «Купишь такой продукт?»
   `}<span style={{ color: COLORS.success }}>{`✅`}</span>{` «Когда последний раз сталкивался с X?
        Как решал?»

3. Три сигнала, которые слушаю:
   — платил ли за решение раньше  →  WTP
   — сколько времени тратит сейчас  →  стоимость боли
   — кто ещё принимает решение  →  цикл продажи

4. Stop-сигнал:
   3 из 10 говорят «продай мне сейчас»`}
        </pre>
      </div>
    </SlideFrame>
  );
}