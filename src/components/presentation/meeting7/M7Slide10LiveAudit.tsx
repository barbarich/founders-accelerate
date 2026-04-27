import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { time: "5 мин", title: "Смотрим в тишине", body: "Автор открывает запись экрана. Не комментирует. Каждый отмечает у себя — где хочется поставить паузу." },
  { time: "8 мин", title: "Маркируем friction", body: "Смотрим повторно с паузами. Группа называет тип friction по списку. Я записываю с тайм-кодом: «01:23 — когнитивное — юзер не понял, что значит „Создать сценарий“»." },
  { time: "8 мин", title: "Выбираем 3 правки", body: "Не «переделать onboarding», а конкретно: «переписать кнопку», «убрать поле компании», «добавить empty state». Каждая правка — 1–4 часа работы максимум." },
  { time: "5 мин", title: "Автор фиксирует вслух", body: "«До среды я выкатываю эти три правки. К понедельнику — 5 новых юзеров на новом флоу.» Группа в чате повторяет за ним каждую правку — закрепление." },
  { time: "2 мин", title: "Все примеряют на себя", body: "Каждый из остальных быстро говорит: «Я применю это к своему продукту так — [одной фразой]»." },
];

export default function M7Slide10LiveAudit() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Live audit</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">
          Один продукт. Глубоко. Все работают вместе.
        </h2>
        <div className="space-y-[4px] mb-[6px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex gap-[4px] items-baseline mb-[1px]">
                <span className="text-[7px] font-mono text-[hsl(var(--slide-gold))]">0{i + 1}</span>
                <p className="text-[9px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</p>
                <span className="text-[7px] font-mono text-[hsl(var(--slide-text-muted))] ml-auto">{s.time}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="border-l-[2px] border-[hsl(var(--slide-gold))] pl-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
            Я не предлагаю решения. Я задаю вопросы. Решения формулирует группа. Автор решает, что брать.
          </p>
          <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mt-[3px] leading-[1.4]">
            Без данных — параллельно проходишь свой продукт по 5 типам. К концу — 3 пункта для пары в среду.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Live audit · 28 минут</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px]">
        Один продукт. Глубоко. Все работают вместе.
      </h2>
      <div className="grid grid-cols-[1.6fr_1fr] gap-[28px]">
        <div className="space-y-[10px]">
          {steps.map((s, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[10px] px-[22px] py-[14px]">
              <div className="flex gap-[14px] items-baseline mb-[4px]">
                <span className="text-[16px] font-mono text-[hsl(var(--slide-gold))]">0{i + 1}</span>
                <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))]">{s.title}</p>
                <span className="text-[14px] font-mono text-[hsl(var(--slide-text-muted))] ml-auto">{s.time}</span>
              </div>
              <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[18px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[20px] py-[16px]">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[6px]">Правило</p>
            <p className="text-[18px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
              Я не предлагаю решения за тебя. Я задаю вопросы. Решения формулирует группа. Автор решает, что брать.
            </p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[10px] px-[22px] py-[18px]">
            <p className="text-[12px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[8px]">Те, кто без данных</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
              Параллельно открываете свой продукт и проходите его сами по списку из 5 типов. К концу блока — 3 пункта, по которым в среду пишете паре.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}