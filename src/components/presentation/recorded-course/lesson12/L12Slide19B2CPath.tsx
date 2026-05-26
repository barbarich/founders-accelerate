import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { n: "01", t: "Пиксели до первого клика", tag: "ДЕНЬ 0", body: "Meta Pixel + TikTok Pixel + Google Tag + GA4 на лендинг ДО первого посетителя. Каждый клик уже учит алгоритм. Без пикселей первый месяц трафика — выброшен." },
  { n: "02", t: "Вейтлист с личных страниц", tag: "$0 · 500 ЧЕЛОВЕК ЗА НЕДЕЛЮ", body: "Открой вейтлист. Пиши с FB / IG / LinkedIn. Найди группы целевой аудитории. На Mikey так получил 500 человек за неделю — они же стали бета-тестерами." },
  { n: "03", t: "Креативы на AI · 50 штук", tag: "50/50 IMG + VIDEO", body: "Картинки — Nano Banana + ChatGPT. Видео — Higgsfield + Kling. AI-аватар — HeyGen. На кампанию ~50 креативов: половина статики, половина видео." },
  { n: "04", t: "Meta · Advantage+", tag: "$20 / ДЕНЬ МИНИМУМ", body: "Запуск через Advantage+ — AI сам определит, кому показывать. Заливаешь все 50 креативов в одну кампанию. Цель: Conversions. Узкий таргет НЕ настраиваешь." },
  { n: "05", t: "Google · позже, та же логика", tag: "PMAX · НЕ НА СТАРТЕ", body: "На запуске Google не нужен — фокус на Meta. Когда подключаешь: Performance Max, все ассеты в одну кампанию, conversion tracking. AI делает работу." },
  { n: "06", t: "GA4 + Mixpanel", tag: "MUST · БЕЗ ВАРИАНТОВ", body: "Без аналитики ты слепой. Знать сколько заходит, как ведут себя, где отваливаются. Это даёт понимание, что улучшать." },
];

const mikey = [
  { num: "500", t: "человек в вейтлисте Mikey за неделю" },
  { num: "$0", t: "на рекламу — только личные соцсети" },
  { num: "0.5–2%", t: "норма conversion с холодной Meta-аудитории в trial" },
];

export default function L12Slide19B2CPath() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Запуск B2C · пиксели → вейтлист → Advantage+
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Стек, который сейчас тестирую на <span className="text-[hsl(var(--slide-gold))]">Mikey</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Если продукт реально нужен рынку — первые 500 человек приходят бесплатно. Платный трафик масштабирует то, что уже сработало органически.
        </p>
        <div className="space-y-[3px] mb-[5px]">
          {steps.map((s) => (
            <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[5px] px-[8px] py-[3px]">
              <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                <span className="text-[hsl(var(--slide-gold))]">{s.n}.</span> {s.t}
                <span className="text-[6.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] ml-[4px]">· {s.tag}</span>
              </p>
              <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] ml-[12px]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[5px] px-[8px] py-[5px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Мой счёт · Mikey · без рекламного бюджета</p>
          <div className="grid grid-cols-3 gap-[4px]">
            {mikey.map((m) => (
              <div key={m.num}>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{m.num}</p>
                <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Запуск B2C · пиксели → вейтлист → AI-креативы → Advantage+
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        Стек, который сейчас тестирую на <span className="text-[hsl(var(--slide-gold))]">Mikey</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[18px] max-w-[1600px]">
        Если продукт реально нужен рынку — первые 500 человек приходят бесплатно с твоих личных соцсетей. Платный трафик потом масштабирует то, что уже сработало органически.
      </p>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[18px]">
        {steps.map((s) => (
          <div key={s.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[20px] py-[12px]">
            <div className="flex items-baseline gap-[8px] mb-[2px]">
              <span className="font-display text-[22px] font-bold text-[hsl(var(--slide-gold))] leading-none">{s.n}</span>
              <span className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15]">{s.t}</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[6px] ml-[36px]">{s.tag}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] ml-[36px]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[28px] py-[16px] max-w-[1700px]">
        <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[10px]">Мой счёт · Mikey · без рекламного бюджета</p>
        <div className="grid grid-cols-3 gap-[20px]">
          {mikey.map((m) => (
            <div key={m.num}>
              <p className="font-display text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[4px]">{m.num}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">{m.t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
