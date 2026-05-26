import { useIsMobile } from "@/hooks/use-mobile";

const hooks = [
  { type: "Парадокс", example: "«Построил продукт за 6 месяцев. Никто не купил. Это лучшее, что со мной случилось.»" },
  { type: "Цифра + неожиданность", example: "«47 DM. Все без ответа. Инвестор среди них.»" },
  { type: "Контр-интуитивно", example: "«Я перестал отвечать клиентам — и продажи выросли.»" },
  { type: "Открытый вопрос", example: "«Ты знаешь, сколько денег ты теряешь на каждом непрочитанном сообщении?»" },
  { type: "Конкретная сцена", example: "«Вторник. 2 ночи. 47 непрочитанных. Я закрыл ноутбук.»" },
];

const structure = [
  { block: "Хук", words: "1–2 строки", task: "Зацепи. Заставь прочитать второй абзац." },
  { block: "Сцена", words: "3–4 строки", task: "Покажи боль через конкретный момент с деталями." },
  { block: "Инсайт", words: "3–4 строки", task: "Что ты понял? Как это изменило тебя или продукт?" },
  { block: "CTA", words: "1 строка", task: "Один вопрос или одно действие. Не три." },
];

export default function L6Slide20Workshop() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — шаг 6
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Хук + структура + удержание
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Теперь у тебя есть история. Вот как упаковать её в пост (FB/LinkedIn/X) и видео (30–45 сек).
        </p>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">5 типов хука</p>
        <div className="space-y-[2px] mb-[6px]">
          {hooks.map((h, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <p className="text-[7px] text-[hsl(var(--slide-gold)/0.8)] font-bold">{h.type}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35] italic">{h.example}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Структура поста и видео</p>
        <div className="grid grid-cols-2 gap-[2px]">
          {structure.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{s.block}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-gold)/0.7)]">{s.words}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{s.task}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — шаг 6
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Хук + структура + удержание
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1200px] leading-[1.4]">
        История есть. Вот как упаковать её в пост (FB / LinkedIn / X) и видео (30–45 сек).
      </p>

      <div className="grid grid-cols-[1fr_420px] gap-[24px] max-w-[1500px]">
        <div>
          <p className="text-[14px] text-[hsl(var(--slide-gold))] font-bold uppercase tracking-[0.15em] mb-[10px]">5 типов хука — первые 2 строки решают всё</p>
          <div className="space-y-[7px]">
            {hooks.map((h, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[16px] py-[9px]">
                <p className="text-[12px] text-[hsl(var(--slide-gold)/0.8)] font-bold mb-[2px]">{h.type}</p>
                <p className="text-[14px] text-[hsl(var(--slide-text))] italic leading-[1.4]">{h.example}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <p className="text-[14px] text-[hsl(var(--slide-gold))] font-bold uppercase tracking-[0.15em]">Структура поста и видео</p>
          <div className="space-y-[8px]">
            {structure.map((s, i) => (
              <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[16px] py-[11px]">
                <div className="flex items-center justify-between mb-[4px]">
                  <p className="text-[16px] font-bold text-[hsl(var(--slide-text))]">{s.block}</p>
                  <span className="text-[11px] font-mono text-[hsl(var(--slide-gold)/0.6)]">{s.words}</span>
                </div>
                <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.task}</p>
              </div>
            ))}
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[16px] py-[10px]">
            <p className="text-[13px] text-[hsl(var(--slide-gold))] font-bold">Удержание до конца</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mt-[3px] leading-[1.45]">Открой петлю в хуке («вот что я понял после этого...») — закрой в конце. Читатель дочитывает, чтобы получить ответ.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
