import { useIsMobile } from "@/hooks/use-mobile";

const perks = [
  { t: "Закрытая группа", d: "Продолжаем встречи раз в месяц. Ты не остаёшься один." },
  { t: "Все 12 встреч в записи", d: "Плюс промпты, шаблоны и кейсы — пересматривай в любой момент." },
  { t: "Networking между когортами", d: "Мост к предыдущим выпускам: клиенты, партнёры, советы." },
  { t: "Стань speaker'ом", d: "Выступи на следующей когорте + твой кейс на сайте." },
];

export default function M12Slide18Alumni() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Дверь не закрывается · alumni
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[12px]">
          Финал программы <span className="text-[hsl(var(--slide-gold))]">≠ финал пути.</span>
        </h2>
        <div className="space-y-[6px]">
          {perks.map((p) => (
            <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[10px] font-bold text-[hsl(var(--slide-text))] mb-[1px]">{p.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Дверь не закрывается · alumni
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[32px] tracking-[-0.02em]">
        Финал программы <span className="text-[hsl(var(--slide-gold))]">≠ финал пути.</span>
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {perks.map((p) => (
          <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[30px] py-[22px]">
            <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] mb-[6px]">{p.t}</p>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
