import { useIsMobile } from "@/hooks/use-mobile";

const phases = [
  {
    num: "01",
    phase: "День 0",
    text: "Заявляешь миссию: «Строю X, потому что [боль]». Ещё до первой строчки кода.",
  },
  {
    num: "02",
    phase: "Пока строишь",
    text: "Прогресс, победы, факапы, инсайты. Люди болеют за процесс, а не за готовый лендинг.",
  },
  {
    num: "03",
    phase: "Параллельно",
    text: "Пре-сейл: предоплаты, контракты, предрегистрации — те самые 3 / 20 со слайда 3.",
  },
  {
    num: "04",
    phase: "Запуск",
    text: "Не в тишину, а в готовую аудиторию → первые продажи в день 1.",
  },
];

export default function L5SlideStoryAllTheWay() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — до релиза
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Рассказывай весь путь — и продавай до релиза
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Не 1 пост — ритм на все недели разработки. Тогда запуск идёт в готовую аудиторию, а не в тишину.
        </p>
        <div className="grid grid-cols-2 gap-[6px] mb-[8px]">
          {phases.map((p, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] mb-[2px]">{p.phase}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-gold))] font-bold mb-[2px]">Формат неважен: пост · короткое видео «как есть» · устный питч</p>
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">Монтаж не нужен, нужна регулярность. Активность весь процесс &gt; идеальный запуск в тишине.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — до релиза
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Рассказывай весь путь — и продавай до релиза
      </h2>
      <p className="text-[19px] text-[hsl(var(--slide-text-muted))] mb-[26px] max-w-[1300px] leading-[1.45]">
        Не 1 пост — ритм на все недели разработки. Тогда запуск идёт в готовую аудиторию, а не в тишину.
      </p>

      <div className="grid grid-cols-4 gap-[16px] max-w-[1500px] mb-[20px]">
        {phases.map((p, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[22px] py-[20px] flex flex-col">
            <span className="font-mono text-[13px] text-[hsl(var(--slide-gold)/0.4)] mb-[8px]">{p.num}</span>
            <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] mb-[8px]">{p.phase}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px] max-w-[1500px]">
        <p className="text-[19px] text-[hsl(var(--slide-gold))] font-bold mb-[5px]">
          Формат неважен: пост · короткое видео «как есть» · устный питч
        </p>
        <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
          Монтаж не нужен, нужна регулярность. Активность весь процесс &gt; идеальный запуск в тишине.
        </p>
      </div>
    </div>
  );
}
