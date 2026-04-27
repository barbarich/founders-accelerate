import { useIsMobile } from "@/hooks/use-mobile";

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
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Empty states
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[5px]">
          Пустой экран — самый важный экран продукта.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[8px]">
          Большинство показывают «У вас пока ничего нет». Это смерть. Вот 3 паттерна, которые работают.
        </p>
        <div className="space-y-[5px]">
          {patterns.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-baseline gap-[6px] mb-[2px]">
                <span className="font-mono text-[10px] text-[hsl(var(--slide-gold))] font-bold">{i + 1}.</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{p.name}</p>
              </div>
              <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mb-[2px]">{p.product}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Никогда не показывайте пустой экран без действия.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Empty states
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
        Пустой экран — самый важный экран продукта.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[28px] max-w-[1500px]">
        Большинство при первом входе показывают пустой экран с надписью «У вас пока ничего нет». Это смерть. Вот 3 паттерна, которые работают.
      </p>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1700px] mb-[24px]">
        {patterns.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[28px] py-[24px]">
            <span className="font-mono text-[36px] text-[hsl(var(--slide-gold))] font-bold leading-none block mb-[12px]">{i + 1}</span>
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[10px]">{p.name}</p>
            <p className="text-[16px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-semibold mb-[8px]">{p.product}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{p.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Никогда не показывайте пустой экран без действия. Либо пример, либо подсказка, либо чужой контент.
      </p>
    </div>
  );
}
