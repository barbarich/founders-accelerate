import { useIsMobile } from "@/hooks/use-mobile";

const levers = [
  { n: "44%", t: "Чужие подборки «лучшие X»", d: "Почти половина страниц, которые ChatGPT цитирует по вопросам «что выбрать», - это сторонние списки инструментов. Главный рычаг." },
  { n: "24%", t: "Твоя главная страница", d: "Первый экран должен без контекста отвечать: что это, для кого, какую задачу решает. Никаких «переосмысли свой воркфлоу»." },
  { n: "25%+", t: "Reddit и обсуждения", d: "Reddit - один из самых цитируемых источников в AI-ответах. Тот же канал, что и в прошлом блоке, работает дважды." },
];

export default function L16SlideAiSearch() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Видимость в AI-ответах
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Тебя советует не сайт, а те, кого читает модель
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Когда у ChatGPT спрашивают «какой инструмент выбрать», он пересказывает чужие тексты. Вопрос только в том, есть ли ты в них.
        </p>
        <div className="space-y-[5px] mb-[6px]">
          {levers.map((l) => (
            <div key={l.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[13px] font-bold text-[hsl(var(--slide-gold))]">{l.n}</span>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{l.t}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{l.d}</p>
            </div>
          ))}
        </div>
        <div className="border-l-2 border-red-400/60 bg-red-500/[0.05] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[8px] text-[hsl(var(--slide-text))] leading-[1.35]">
            <span className="font-bold text-red-400">Не трать время:</span> файл llms.txt - модный совет без доказательств, 97% таких файлов вообще никто не читает. Википедия для стартапа недостижима.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Видимость в AI-ответах
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Тебя советует не сайт, <span className="text-[hsl(var(--slide-gold))]">а те, кого читает модель</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Когда у ChatGPT спрашивают «какой инструмент выбрать», он пересказывает чужие тексты. Вопрос только в том, есть ли ты в них.
      </p>
      <div className="grid grid-cols-3 gap-[20px] max-w-[1900px] mb-[18px]">
        {levers.map((l) => (
          <div key={l.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[34px] font-bold text-[hsl(var(--slide-gold))] leading-[1]">{l.n}</p>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[4px] mb-[6px]">{l.t}</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{l.d}</p>
          </div>
        ))}
      </div>
      <div className="border-l-[4px] border-red-400/60 bg-red-500/[0.05] rounded-[10px] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[16.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="font-bold text-red-400">Не трать на это время:</span> файл llms.txt - модный совет без доказательств, 97% таких файлов вообще никто ни разу не открыл. Википедия для стартапа недостижима, статью удалят.
        </p>
      </div>
    </div>
  );
}
