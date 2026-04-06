import { useIsMobile } from "@/hooks/use-mobile";

const formulaSteps = [
  { label: "Наблюдение", color: "text-[hsl(var(--slide-gold))]" },
  { label: "Инсайт", color: "text-[hsl(var(--slide-gold))]" },
  { label: "Мост", color: "text-[hsl(var(--slide-gold))]" },
  { label: "Мягкий CTA", color: "text-[hsl(var(--slide-gold))]" },
];

const exampleLines = [
  { type: "label", text: "Наблюдение" , content: "Привет! Видел твой пост про запуск онлайн-курса по фитнесу — крутая идея, особенно часть про персональные планы." },
  { type: "label", text: "Инсайт", content: "Мы работали с похожим проектом и заметили, что конверсия x3 когда вместо лендинга даёшь попробовать одно занятие бесплатно." },
  { type: "label", text: "Мост", content: "Я как раз делаю инструмент который помогает запускать такие мини-воронки за вечер." },
  { type: "label", text: "Мягкий CTA", content: "Скинуть 2-минутное видео как это работает? Без звонков." },
];

const tracks = [
  { num: "1", title: "Напиши 3 варианта", time: "10 мин" },
  { num: "2", title: "Прочитай вслух — «ты бы ответил?»", time: "10 мин" },
  { num: "3", title: "Доработай и отправь сегодня", time: "5 мин" },
];

export default function M4Slide12WorkshopOutreach() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Воркшоп
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Пишем outreach прямо сейчас
        </h2>

        {/* Formula */}
        <div className="flex items-center gap-[4px] mb-[8px]">
          {formulaSteps.map((s, i) => (
            <div key={i} className="flex items-center gap-[4px]">
              <span className="text-[8px] font-bold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.12)] px-[5px] py-[2px] rounded">{s.label}</span>
              {i < formulaSteps.length - 1 && <span className="text-[8px] text-[hsl(var(--slide-text-muted))]">→</span>}
            </div>
          ))}
        </div>

        {/* Example */}
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px] mb-[10px]">
          <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold mb-[4px]">Пример сообщения:</p>
          {exampleLines.map((l, i) => (
            <p key={i} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[2px]">
              <span className="text-[hsl(var(--slide-gold))] font-semibold">[{l.text}] </span>
              {l.content}
            </p>
          ))}
        </div>

        {/* Tracks */}
        <div className="space-y-[6px]">
          {tracks.map((t, i) => (
            <div key={i} className="flex items-center justify-between bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">{t.num}</span>
                <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{t.title}</span>
              </div>
              <span className="text-[8px] text-[hsl(var(--slide-gold))]">{t.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Воркшоп
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Пишем outreach прямо сейчас
      </h2>

      {/* Formula bar */}
      <div className="flex items-center gap-[12px] mb-[24px]">
        <span className="text-[16px] text-[hsl(var(--slide-text-muted))] uppercase tracking-wider">Формула:</span>
        {formulaSteps.map((s, i) => (
          <div key={i} className="flex items-center gap-[12px]">
            <span className="text-[18px] font-bold text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[14px] py-[6px] rounded-[8px]">{s.label}</span>
            {i < formulaSteps.length - 1 && <span className="text-[18px] text-[hsl(var(--slide-text-muted))]">→</span>}
          </div>
        ))}
      </div>

      {/* Example message */}
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[24px] mb-[32px] max-w-[1200px]">
        <p className="text-[16px] text-[hsl(var(--slide-gold))] font-semibold uppercase tracking-wider mb-[16px]">Пример хорошего сообщения</p>
        <div className="space-y-[8px]">
          {exampleLines.map((l, i) => (
            <p key={i} className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              <span className="text-[hsl(var(--slide-gold))] font-semibold">[{l.text}] </span>
              {l.content}
            </p>
          ))}
        </div>
      </div>

      {/* Workshop tracks */}
      <div className="flex gap-[20px] max-w-[1200px]">
        {tracks.map((t, i) => (
          <div key={i} className="flex-1 flex items-center gap-[16px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[20px]">
            <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[44px] h-[44px] flex items-center justify-center rounded-full font-bold shrink-0">
              {t.num}
            </span>
            <div>
              <h3 className="text-[19px] font-bold text-[hsl(var(--slide-text))]">{t.title}</h3>
              <span className="text-[15px] text-[hsl(var(--slide-gold))] font-mono">{t.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
