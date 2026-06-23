import { useIsMobile } from "@/hooks/use-mobile";

export default function L1Slide08bNotebookLM() {
  const isMobile = useIsMobile();

  const steps = [
    { num: "1", text: "Зайди на notebooklm.google.com → New notebook" },
    { num: "2", text: "Загрузи отчёт из Deep Research — текстом, PDF или ссылкой" },
    { num: "3", text: "Нажми Audio Overview → Generate" },
    { num: "4", text: "Слушай подкаст по своему ресёрчу — в дороге, на прогулке" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">Инструмент 2</p>
        <h2 className="font-display text-[28px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          NotebookLM
        </h2>
        <p className="text-[12px] text-[hsl(var(--slide-text-muted))] mb-[16px]">
          Превращает большой ресёрч в подкаст, который можно слушать
        </p>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[8px] p-[14px] mb-[12px]">
          <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Deep Research выдаёт большой лонгрид - его тяжело осилить глазами. Загрузи документ в NotebookLM, и он сделает аудио-подкаст: двое ведущих обсуждают твой материал. Послушал - и инфа улеглась без нагрузки чтения.
          </p>
        </div>
        <div className="space-y-[6px]">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-[8px]">
              <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold shrink-0">{s.num}</span>
              <p className="text-[11px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">Инструмент 2</span>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[16px]">
        NotebookLM
      </h2>
      <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mb-[44px]">
        Превращает большой ресёрч в подкаст, который можно просто слушать
      </p>
      <div className="grid grid-cols-2 gap-[32px] items-stretch">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">Зачем это нужно</h3>
          <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.6]">
            Deep Research выдаёт большой лонгрид - осилить его глазами тяжело. Загружаешь документ в NotebookLM, и он делает аудио-подкаст: двое AI-ведущих обсуждают твой материал. Послушал в дороге - и информация улеглась без нагрузки чтения.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.4)] rounded-[12px] p-[36px]">
          <h3 className="text-[22px] font-semibold text-[hsl(var(--slide-text))] mb-[20px]">Как сделать за 2 минуты</h3>
          <div className="space-y-[16px]">
            {steps.map((s) => (
              <div key={s.num} className="flex items-start gap-[14px]">
                <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] rounded-full flex items-center justify-center shrink-0 font-bold">{s.num}</span>
                <p className="text-[18px] text-[hsl(var(--slide-text)/0.9)] leading-[1.5]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[32px] bg-[hsl(var(--slide-gold)/0.05)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[8px] px-[32px] py-[20px]">
        <p className="text-[20px] text-[hsl(var(--slide-gold))] font-medium">
          💡 Бонус: в том же NotebookLM можно задавать вопросы по документу - он отвечает только по загруженным источникам, без выдумок.
        </p>
      </div>
    </div>
  );
}
