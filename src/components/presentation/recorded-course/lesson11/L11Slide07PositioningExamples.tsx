import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  { brand: "MetaMinder", body: "Помогает HR и L&D командам запускать онбординг и комплаенс-тренинги для фронтлайн-сотрудников за минуты с вовлечением до 98%, через AI-платформу, которая собирает курс из ваших материалов, в отличие от классических LMS и подрядчиков, где курс делают неделями, а доходимость падает до 20%." },
  { brand: "Mikey AI", body: "Помогает одиноким взрослым находить серьёзного партнёра анонимно — без публичных профилей и витрины из фото, через AI, который подбирает совпадение, делает полноценное интро, открывает чат и исчезает, в отличие от Tinder и Hinge, где ты продаёшь себя профилем, а не находишь того, кто реально подходит." },
  { brand: "Notion", body: "Помогает командам стартапов собрать заметки, доки и базу знаний в одном месте через гибкие блоки, в отличие от Google Docs, который рассыпается на десятки файлов." },
  { brand: "Linear", body: "Помогает инженерным командам стартапов закрывать тикеты быстрее через клавиатурный интерфейс и встроенный workflow, в отличие от Jira, который требует обучения и тормозит." },
  { brand: "Loom", body: "Помогает remote-командам объяснять задачи без созвонов через быструю запись экрана + лица, в отличие от Zoom-митингов, которые крадут час там, где хватит пяти минут." },
  { brand: "Cursor", body: "Помогает full-stack разработчикам писать код вдвое быстрее через AI, встроенный прямо в редактор, в отличие от ChatGPT-вкладки, куда надо постоянно копировать контекст." },
];

export default function L11Slide07PositioningExamples() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Шесть примеров готовых формул
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
          Как это выглядит на <span className="text-[hsl(var(--slide-gold))]">реальных продуктах</span>
        </h2>
        <div className="space-y-[5px]">
          {examples.map((e) => (
            <div key={e.brand} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">{e.brand}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] italic mt-[8px] leading-[1.4]">
          Заметь: «помогает [узкому сегменту]», не «всем». Сила в узости.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Шесть примеров готовых формул
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[24px] tracking-[-0.02em]">
        Как это выглядит на <span className="text-[hsl(var(--slide-gold))]">реальных продуктах</span>
      </h2>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px] mb-[18px]">
        {examples.map((e) => (
          <div key={e.brand} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[16px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[8px]">{e.brand}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">{e.body}</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
        Заметь: «помогает [узкому сегменту]», не «всем». Сила в узости — широкое позиционирование не цепляет никого.
      </p>
    </div>
  );
}
