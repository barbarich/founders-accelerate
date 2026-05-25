import { useIsMobile } from "@/hooks/use-mobile";

const formats = [
  {
    name: "Building-in-public",
    structure: "Скрин из приложения + 1 цифра + 1 вопрос аудитории",
    cta: "«Кто хочет попробовать первым — пиши в личку»",
    example: "«Запустил MVP за вечер. 30 регистраций за 6 часов. Что тестировать дальше — feature A или feature B?»",
  },
  {
    name: "Case-study формат",
    structure: "Конкретный клиент + до/после + цифра + механика",
    cta: "«Если у тебя такая же ситуация — book 15 мин ниже»",
    example: "«Клиент тратил 4 часа в неделю на X. Сейчас 20 минут. Вот что мы поменяли...»",
  },
  {
    name: "Contrarian take",
    structure: "Утверждение против мейнстрима + 3 аргумента + кейс",
    cta: "«Согласен/нет? Building это сейчас — заходи»",
    example: "«SDR-команда мертва в 2026. 3 причины. Я заменил 5 SDR на $200 в Instantly...»",
  },
];

const funnelSteps = [
  "Пост публикуется (LinkedIn / X / Telegram канал)",
  "Через 24–48 ч в DM приходит 2–5 «расскажи подробнее»",
  "Шлёшь 1 строку: «Кратко так-то. Если хочешь — 15 мин в среду?»",
  "Calendly-ссылка → demo забукано → 5 discovery-вопросов → pitch → close",
];

export default function M11Slide16ContentFunnel() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Content → Call funnel
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Как пост становится <span className="text-[hsl(var(--slide-gold))]">демо-звонком</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[5px] leading-[1.45]">Один пост в неделю в каждом формате. Через 4 недели в DM стабильный inbound.</p>
        <div className="space-y-[3px] mb-[4px]">
          {formats.map((f) => (
            <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))]">{f.name}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text))]">→ {f.structure}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">"{f.example}"</p>
              <p className="text-[6px] text-[hsl(var(--slide-gold))]">CTA: {f.cta}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[6px] py-[3px]">
          <p className="text-[7px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[1px]">Воронка post → demo</p>
          {funnelSteps.map((s, i) => (
            <p key={i} className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]"><span className="text-[hsl(var(--slide-gold))]">{i + 1}.</span> {s}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Content → Call funnel
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em]">
        Как пост становится <span className="text-[hsl(var(--slide-gold))]">демо-звонком</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Один пост в неделю в каждом из 3 форматов. Через 4 недели в DM стабильный inbound поток.
      </p>
      <div className="grid grid-cols-3 gap-[16px] mb-[20px] max-w-[1700px]">
        {formats.map((f) => (
          <div key={f.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[14px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[5px]">{f.name}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] mb-[5px]">→ {f.structure}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] italic leading-[1.45] mb-[5px]">"{f.example}"</p>
            <p className="text-[13px] text-[hsl(var(--slide-gold))] font-semibold">CTA: {f.cta}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[28px] py-[14px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[8px]">Воронка post → demo (никакого cold)</p>
        <div className="grid grid-cols-4 gap-[14px]">
          {funnelSteps.map((s, i) => (
            <p key={i} className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]"><span className="text-[hsl(var(--slide-gold))] font-bold">{i + 1}.</span> {s}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
