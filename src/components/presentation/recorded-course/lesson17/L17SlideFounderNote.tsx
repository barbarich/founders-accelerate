import { useIsMobile } from "@/hooks/use-mobile";

const paras = [
  "Я проходил этот путь несколько раз. Два продукта закончились выходом, взлетело далеко не всё. Разница между ними была не в идее и не в том, насколько красиво было сделано.",
  "Разница была в том, сколько раз я готов был снова выйти к людям после того, как в прошлый раз мне никто не ответил.",
  "Ты сейчас знаешь больше, чем знал я, когда начинал. И у тебя есть инструменты, которых тогда просто не существовало: продукт собирается за вечер, а не за полгода. Не изменилось одно - выйти к людям всё ещё нужно самому.",
];

export default function L17SlideFounderNote() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[22px] py-[18px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">
          От меня лично
        </p>
        <div className="space-y-[7px]">
          {paras.map((p) => (
            <p key={p} className="text-[10.5px] text-[hsl(var(--slide-text-muted))] leading-[1.55]">{p}</p>
          ))}
        </div>
        <p className="text-[12px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mt-[12px]">
          Не жди идеального момента и идеального продукта. Их не будет. Есть только следующие 30 дней и то, что ты в них сделаешь.
        </p>
        <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[12px]" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[24px]">
        От меня лично
      </p>
      <div className="space-y-[18px] max-w-[1450px]">
        {paras.map((p) => (
          <p key={p} className="text-[24px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{p}</p>
        ))}
      </div>
      <p className="text-[30px] font-bold text-[hsl(var(--slide-text))] leading-[1.35] mt-[30px] max-w-[1450px]">
        Не жди идеального момента и идеального продукта. Их не будет. Есть только следующие 30 дней и то, что ты в них сделаешь.
      </p>
      <div className="w-[80px] h-[2px] bg-[hsl(var(--slide-gold))] mt-[30px]" />
    </div>
  );
}
