import { useIsMobile } from "@/hooks/use-mobile";

const fields = [
  { k: "Кто конкретно", v: "не «женщины 25-45», а «мама, которая ищет подарок ребёнку к дню рождения»" },
  { k: "Повод покупки", v: "что происходит в жизни в момент покупки. Триггер важнее демографии" },
  { k: "Боль / желание", v: "их словами, не твоими. То, что они гуглят и обсуждают" },
  { k: "Где уже сидят", v: "сообщества, площадки, события, где сегмент собран прямо сейчас" },
  { k: "Что уже пробовали", v: "чем решают проблему сегодня - это твой настоящий конкурент" },
];

export default function L10SlideAudience() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[18px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Кто твоя аудитория
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          «Все» - это никто. <span className="text-[hsl(var(--slide-gold))]">Выбери один сегмент.</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
          Опиши одного человека, а не рынок. Пять полей - и портрет готов:
        </p>
        <div className="space-y-[4px]">
          {fields.map((f) => (
            <div key={f.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))]">{f.k}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{f.v}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Кто твоя аудитория · портрет одного человека
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em]">
        «Все» - это никто. <span className="text-[hsl(var(--slide-gold))]">Выбери один сегмент.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[24px] max-w-[1600px]">
        Опиши одного человека, а не рынок. Пять полей - и у тебя есть портрет, под который строишь всё остальное:
      </p>
      <div className="space-y-[12px] max-w-[1700px]">
        {fields.map((f) => (
          <div key={f.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[14px] flex items-baseline gap-[24px]">
            <p className="text-[21px] font-bold text-[hsl(var(--slide-gold))] w-[280px] shrink-0">{f.k}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] flex-1">{f.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
