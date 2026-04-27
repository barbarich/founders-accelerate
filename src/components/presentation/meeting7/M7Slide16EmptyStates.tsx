import { useIsMobile } from "@/hooks/use-mobile";

const functions = [
  {
    title: "Учит продукту",
    desc: "Показывает, как выглядит «заполненное» состояние и что вообще тут можно делать.",
  },
  {
    title: "Снимает страх первого шага",
    desc: "У пустого экрана юзер думает «я не знаю, с чего начать». Empty state даёт первое действие.",
  },
  {
    title: "Демонстрирует ценность сразу",
    desc: "Пример или чужой контент = «вау» без твоих данных. Юзер видит результат до того, как вложился.",
  },
  {
    title: "Удерживает в продукте",
    desc: "Пустота = повод закрыть вкладку. Контент или CTA = повод остаться ещё на минуту.",
  },
];

const patterns = [
  {
    name: "Один готовый пример",
    product: "Notion",
    desc: "При первом входе показывает заполненную страницу-пример. Можно редактировать. Уже не пусто.",
  },
  {
    name: "Один шаг с подсказкой",
    product: "Linear",
    desc: "При первом входе предлагает: «Создай первую задачу — назови её Welcome. Я покажу как.» Юзер делает — и уже есть данные.",
  },
  {
    name: "Чужой контент, который интересен",
    product: "TikTok",
    desc: "Даёт чужие видео сразу. Лента работает без твоих данных. Ты добавляешься в продукт — он добавляется в тебя.",
  },
];

export default function M7Slide16EmptyStates() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Empty states
        </p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Пустой экран — самый важный экран продукта.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[6px]">
          Empty state — это не «пустота», а первый урок продукта. Он делает 4 вещи одновременно.
        </p>
        <div className="grid grid-cols-2 gap-[3px] mb-[6px]">
          {functions.map((f) => (
            <div key={f.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] leading-[1.2] mb-[1px]">{f.title}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-semibold mb-[3px]">3 рабочих паттерна</p>
        <div className="space-y-[3px]">
          {patterns.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[8px] py-[4px]">
              <div className="flex items-baseline gap-[5px] mb-[1px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] font-bold">{i + 1}.</span>
                <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.name}</p>
                <span className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold">· {p.product}</span>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold mt-[5px] leading-[1.4]">
          Пустой экран ≠ «нет данных». Это место, где ты учишь, мотивируешь и показываешь будущее продукта.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Empty states
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
        Пустой экран — самый важный экран продукта.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[20px] max-w-[1700px]">
        Empty state — не «пустое окно с надписью “у вас ничего нет”». Это первый урок продукта. Если он работает, он делает 4 вещи одновременно.
      </p>
      <div className="grid grid-cols-4 gap-[12px] max-w-[1750px] mb-[22px]">
        {functions.map((f) => (
          <div key={f.title} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[18px] py-[14px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.08em] leading-[1.2] mb-[6px]">{f.title}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{f.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[16px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-semibold mb-[10px]">
        3 паттерна, которые делают это хорошо
      </p>
      <div className="grid grid-cols-3 gap-[14px] max-w-[1750px] mb-[18px]">
        {patterns.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px]">
            <span className="font-mono text-[28px] text-[hsl(var(--slide-gold))] font-bold leading-none block mb-[8px]">{i + 1}</span>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[4px]">{p.name}</p>
            <p className="text-[13px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-semibold mb-[6px]">{p.product}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1750px] leading-[1.4]">
        Пустой экран ≠ «нет данных». Это место, где вы учите продукту, снимаете страх и показываете будущее. Никогда не оставляйте его без действия.
      </p>
    </div>
  );
}
