import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    name: "ChatGPT",
    visual: "Пустое поле и одна строка: «Чем могу помочь?»",
    promise: "Ответ на твой вопрос. Сейчас.",
    avoid: "Не объясняет что такое LLM. Не показывает фичи. Не просит email.",
  },
  {
    name: "Notion",
    visual: "Пустая страница и курсор.",
    promise: "Место, где сразу пишешь.",
    avoid: "Не показывает 50 шаблонов. Не делает тур интерфейса.",
  },
  {
    name: "Duolingo",
    visual: "«Какой язык учим?» — один вопрос, 5 кнопок.",
    promise: "Первый урок через 30 секунд.",
    avoid: "Не просит email сразу. Не объясняет систему уровней.",
  },
  {
    name: "Loom",
    visual: "Большая красная кнопка «Record».",
    promise: "Запись экрана через клик.",
    avoid: "Не предлагает выбрать план. Не показывает примеры до записи.",
  },
  {
    name: "Spotify",
    visual: "Обложка плейлиста и Play.",
    promise: "Музыка через секунду.",
    avoid: "Не просит выбрать жанры. Не учит интерфейсу.",
  },
];

export default function L8Slide08FiveGoodFirstScreens() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          5 примеров, которые работают
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[8px]">
          Все говорят про результат. Никто — про продукт.
        </h2>
        <div className="space-y-[4px]">
          {cases.map((c) => (
            <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[8px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] leading-[1.2]">{c.name}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text))] italic leading-[1.3] mt-[1px]">{c.visual}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.3] mt-[2px]">
                <span className="text-[hsl(var(--slide-gold))]">→</span> {c.promise}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        5 примеров, которые работают
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px]">
        Все говорят про результат. Никто — про продукт.
      </h2>
      <div className="grid grid-cols-5 gap-[12px] max-w-[1700px] mb-[20px]">
        {cases.map((c) => (
          <div key={c.name} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[18px] py-[18px] flex flex-col">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[10px]">{c.name}</p>
            <div className="bg-[hsl(var(--slide-bg))] rounded-[8px] px-[12px] py-[14px] mb-[12px] min-h-[90px] flex items-center">
              <p className="text-[13px] text-[hsl(var(--slide-text))] italic leading-[1.4]">{c.visual}</p>
            </div>
            <p className="text-[12px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[4px] font-semibold">Обещает</p>
            <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[10px]">{c.promise}</p>
            <p className="text-[12px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] mb-[4px] font-semibold">НЕ делает</p>
            <p className="text-[12px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.avoid}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1500px] leading-[1.4]">
        Все пять — разные категории. Но первый экран у каждого делает одно: показывает результат.
      </p>
    </div>
  );
}
