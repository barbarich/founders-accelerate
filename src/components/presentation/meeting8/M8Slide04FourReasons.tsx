import { useIsMobile } from "@/hooks/use-mobile";

const reasons = [
  { n: "1", title: "Забыли", body: "Открыл, попробовал, закрыл — продукт не оставил следа в дне.", fix: "Встроить триггер в существующую привычку." },
  { n: "2", title: "Нет повода", body: "Контент/состояние не изменилось. Возвращаться не на что.", fix: "Свежий контент / новое событие к моменту возврата." },
  { n: "3", title: "Нет привычки", body: "Не дошли до 3-го использования — петля не сложилась.", fix: "Прогресс / streak / незаконченное дело." },
  { n: "4", title: "Обиделись", body: "Ошибка, баг, навязчивый push, неловкий онбординг.", fix: "Чек-лист первой недели + одно тёплое письмо." },
];

export default function M8Slide04FourReasons() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          4 причины невозврата
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          Только одна из них — про деньги.
        </h2>
        <div className="space-y-[6px]">
          {reasons.map((r) => (
            <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[10px] py-[8px]">
              <div className="flex items-baseline gap-[8px] mb-[3px]">
                <span className="text-[14px] font-bold text-[hsl(var(--slide-gold))]">{r.n}</span>
                <span className="text-[13px] font-bold text-[hsl(var(--slide-text))]">{r.title}</span>
              </div>
              <p className="text-[9.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[3px]">{r.body}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-gold))] leading-[1.4]">→ {r.fix}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        4 причины, почему не возвращаются
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[36px]">
        Только одна из них — про деньги. Остальные три — про продукт.
      </h2>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1500px]">
        {reasons.map((r) => (
          <div key={r.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[28px] py-[22px]">
            <div className="flex items-baseline gap-[14px] mb-[10px]">
              <span className="font-display text-[44px] font-bold text-[hsl(var(--slide-gold))] leading-none">{r.n}</span>
              <span className="text-[26px] font-bold text-[hsl(var(--slide-text))]">{r.title}</span>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[8px]">{r.body}</p>
            <p className="text-[18px] text-[hsl(var(--slide-gold))] leading-[1.45]">→ {r.fix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}