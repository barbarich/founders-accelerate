import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { num: "1", title: "Даёшь ссылку", detail: "Говоришь: «открой и сделай что считаешь нужным». Больше ни слова." },
  { num: "2", title: "Молчишь", detail: "Не подсказываешь, не объясняешь, не защищаешь. Записываешь экран или просто засекаешь время." },
  { num: "3", title: "60 секунд", detail: "Всё, что произошло в эту минуту — это и есть твой продукт для незнакомого. Остальное — не считается." },
  { num: "4", title: "Один вопрос", detail: "После: «Что ты подумал, когда открыл?» — это единственный вопрос. Не «понравилось ли».  " },
];

export default function M6Slide13LiveAudit() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Живой аудит в группе
        </p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Немой тест<br />60 секунд.
        </h2>
        <p className="text-[9px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          У кого к концу встречи есть URL — показывает. Группа молча тестирует. Никаких презентаций продукта.
        </p>
        <div className="space-y-[5px]">
          {steps.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[6px]">
              <div className="flex items-center gap-[6px] mb-[2px]">
                <span className="font-mono text-[9px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold">{s.num}</span>
                <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{s.title}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Живой аудит в группе
      </p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px]">
        Немой тест 60 секунд.
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px] max-w-[1400px]">
        У кого к концу встречи есть URL — показывает. Группа молча тестирует. Никаких презентаций продукта.
      </p>

      <div className="grid grid-cols-4 gap-[20px] max-w-[1500px]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[14px] px-[22px] py-[20px]">
            <span className="font-mono text-[17px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[34px] h-[34px] flex items-center justify-center rounded-full font-bold mb-[12px]">{s.num}</span>
            <h3 className="text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[12px] mb-[8px]">{s.title}</h3>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{s.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
