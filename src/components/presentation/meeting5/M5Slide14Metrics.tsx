import { useIsMobile } from "@/hooks/use-mobile";

const levels = [
  {
    type: "Внешняя боль",
    desc: "Что происходит снаружи. Факт, который можно наблюдать.",
    example: "«Ты тратишь 3 часа в день на ответы в DM — и всё равно не успеваешь»",
    why: "Человек узнаёт ситуацию",
  },
  {
    type: "Внутренняя боль",
    desc: "Что человек чувствует внутри. Эмоция, которую он не проговаривает вслух.",
    example: "«Ты чувствуешь, что тонешь. Важные вещи откладываются. Ощущение, что не справляешься.»",
    why: "Человек чувствует, что ты его понимаешь",
  },
  {
    type: "Философская боль",
    desc: "Почему так не должно быть. Несправедливость, которую ощущает читатель.",
    example: "«Фаундер не должен быть заложником инбокса. Ты строишь продукт — не отвечаешь на сообщения.»",
    why: "Человек соглашается и доверяет тебе",
  },
];

export default function M5Slide14Metrics() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — шаг 3
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Конфликт = боль клиента
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Опиши боль так точно, что человек думает «это про меня» — и он уже доверяет тебе.
        </p>
        <div className="space-y-[5px]">
          {levels.map((l, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{l.type}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[3px] leading-[1.35]">{l.desc}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.4] italic mb-[2px]">{l.example}</p>
              <p className="text-[7px] text-[hsl(142_50%_60%)]">→ {l.why}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — шаг 3
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Конфликт = боль клиента
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1200px] leading-[1.45]">
        Без конфликта — нет истории. Опиши боль так точно, что читатель думает «это про меня» — и он уже доверяет.
      </p>

      <div className="grid grid-cols-3 gap-[18px] max-w-[1500px]">
        {levels.map((l, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[22px] flex flex-col">
            <p className="text-[13px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">{l.type}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[14px]">{l.desc}</p>
            <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[14px] py-[10px] mb-[12px]">
              <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.55] italic">{l.example}</p>
            </div>
            <p className="text-[13px] text-[hsl(142_50%_60%)] font-medium mt-auto">→ {l.why}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
