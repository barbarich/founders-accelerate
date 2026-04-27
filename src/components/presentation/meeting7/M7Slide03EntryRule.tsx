import { useIsMobile } from "@/hooks/use-mobile";

const fields = [
  { num: "1", label: "Продукт", hint: "Одна фраза. Что делает + для кого. Откроешь экран — покажешь живьём." },
  { num: "2", label: "# юзеров на этой неделе", hint: "Сколько привёл живых юзеров. Канал — тоже одной фразой." },
  { num: "3", label: "Drop-off / точка трения", hint: "Где выпали или застряли. Не «онбординг тяжёлый» — конкретный экран и шаг." },
  { num: "4", label: "Цитата юзера", hint: "Прямая речь, не пересказ. Одна фраза, которую ты услышал и не можешь развидеть." },
  { num: "5", label: "Вопрос группе", hint: "Один конкретный вопрос, по которому хочешь обратной связи. Не «как вам?»." },
];

export default function M7Slide03EntryRule() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[14px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Открываем встречу · 5 минут на каждого</p>
        <h2 className="font-display text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Демонстрация прогресса
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[8px]">
          Открываешь экран продукта. Идёшь по 5 пунктам — без отступлений. На любой пункт нет ответа — так и говоришь «нет», не выдумываешь.
        </p>
        <div className="space-y-[4px]">
          {fields.map((f) => (
            <div key={f.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[9px] py-[5px]">
              <div className="flex items-center gap-[6px] mb-[1px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{f.num}</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{f.label}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{f.hint}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Все слушают молча. Я записываю drop-off и цитаты — вернёмся к ним в Live audit.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Открываем встречу · 5 минут на каждого</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px]">
        Демонстрация прогресса
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] leading-[1.45] max-w-[1500px] mb-[32px]">
        Открываешь экран продукта. Идёшь по 5 пунктам — без отступлений. Если по пункту нет ответа — так и говоришь «нет», не выдумываешь.
      </p>
      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px] mb-[24px]">
        {fields.map((f) => (
          <div key={f.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[18px] py-[18px]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold mb-[10px]">{f.num}</span>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[8px] mt-[8px]">{f.label}</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{f.hint}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1700px] leading-[1.4]">
        Все слушают молча. Я записываю drop-off и цитаты — вернёмся к ним в Live audit.
      </p>
    </div>
  );
}
