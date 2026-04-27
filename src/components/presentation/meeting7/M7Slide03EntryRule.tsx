import { useIsMobile } from "@/hooks/use-mobile";

const cards = [
  {
    label: "С данными",
    desc: "(число + цитата + точка выпадения)",
    body: "Ты в воркшопе. Твой кейс мы можем взять для глубокого разбора.",
  },
  {
    label: "Без данных",
    desc: "(не сделал — это нормально, один раз)",
    body: "Ты на встрече. Слушаешь, забираешь рамки на свой продукт. Применяешь до среды. В среду пишешь паре с цифрой — что протестировал.",
  },
];

export default function M7Slide03EntryRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Правило встречи</p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Сегодня обсуждаем то, что показали юзеры. Не то, что мы о них думаем.
        </h2>
        <div className="space-y-[6px]">
          {cards.map((c, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">{c.label}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[4px] italic">{c.desc}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.45]">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-gold))] font-semibold mt-[10px] leading-[1.45]">
          Нет наказания за «не сделал». Есть один вопрос: ты хочешь продукт или процесс? Если продукт — пора включаться.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Правило встречи</p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[40px] max-w-[1600px]">
        Сегодня обсуждаем то, что показали юзеры. Не то, что мы о них думаем.
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1600px] mb-[32px]">
        {cards.map((c, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[32px] py-[26px]">
            <p className="text-[16px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[6px]">{c.label}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] italic mb-[16px]">{c.desc}</p>
            <p className="text-[24px] text-[hsl(var(--slide-text))] leading-[1.45]">{c.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[24px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1600px] leading-[1.4]">
        Нет наказания за «не сделал». Есть один вопрос: ты хочешь продукт или процесс? Если продукт — пора включаться.
      </p>
    </div>
  );
}