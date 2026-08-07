import { useIsMobile } from "@/hooks/use-mobile";

const rows = [
  { was: "Идея в голове", now: "Гипотеза, проверенная на живых людях" },
  { was: "Построю - и придут", now: "Знаю, где они собраны и что им написать" },
  { was: "Сколько брать - не знаю", now: "Есть цена и причина, почему именно она" },
  { was: "Продукт вроде нравится", now: "Знаю, вернулись ли и сколько заплатили" },
  { was: "Маркетинг - это дорого и сложно", now: "Есть два канала и счётчик оплат по каждому" },
  { was: "Нужны деньги, чтобы начать", now: "Знаю, когда деньги нужны, а когда мешают" },
];

export default function L17SlideWhatChanged() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px]">
        <p className="text-[8.5px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Что изменилось за курс
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[7px]">
          Было и стало
        </h2>
        <div className="space-y-[4px]">
          {rows.map((r) => (
            <div key={r.was} className="grid grid-cols-2 gap-[6px] items-center">
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.3] line-through decoration-[hsl(var(--slide-text-muted)/0.5)]">{r.was}</p>
              <p className="text-[8.5px] font-medium text-[hsl(var(--slide-text))] leading-[1.3] border-l-2 border-[hsl(var(--slide-gold))] pl-[6px]">{r.now}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] leading-[1.4] mt-[8px]">
          Правая колонка - это и есть разница между тем, кто «пробует что-то делать», и тем, кто строит бизнес.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[110px] py-[40px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Что изменилось за курс
      </p>
      <h2 className="font-display text-[46px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.01em]">
        Было <span className="text-[hsl(var(--slide-gold))]">и стало</span>
      </h2>
      <div className="space-y-[10px] max-w-[1550px]">
        {rows.map((r) => (
          <div key={r.was} className="grid grid-cols-2 gap-[28px] items-center">
            <p className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.35] line-through decoration-[hsl(var(--slide-text-muted)/0.5)]">{r.was}</p>
            <p className="text-[21px] font-medium text-[hsl(var(--slide-text))] leading-[1.35] border-l-[3px] border-[hsl(var(--slide-gold))] pl-[18px]">{r.now}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] leading-[1.45] mt-[24px] max-w-[1550px]">
        Правая колонка - это и есть разница между тем, кто «пробует что-то делать», и тем, кто строит бизнес.
      </p>
    </div>
  );
}
