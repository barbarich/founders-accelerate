import { useIsMobile } from "@/hooks/use-mobile";

const rule = [
  { k: "Один шрифт", v: "максимум два: один для заголовков, один для текста" },
  { k: "Палитра", v: "максимум три цвета: основной + акцент + нейтральный" },
  { k: "Тон", v: "одно прилагательное на бренд: дерзкий ИЛИ тёплый ИЛИ авторитетный" },
  { k: "Один визуал везде", v: "лендинг, реклама, соцсети, email - в одной айдентике" },
];

export default function L11Slide09VisualStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[14px] overflow-y-auto">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Визуал · один стиль везде
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Несоответствие визуала роняет доверие <span className="text-[hsl(var(--slide-gold))]">между рекламой и лендингом</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4] mb-[6px]">
          Самая частая ошибка: делают круто отдельно, но не сводят воедино. Клиент кликнул рекламу, попал на «чужую» страницу - и ушёл.
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {rule.map((r) => (
            <div key={r.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[8px] py-[4px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{r.k}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{r.v}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[9px] py-[5px]">
          <p className="text-[8px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
            Forex Tester: сайт и креативы в одной айдентике. И собирается это на AI за вечер - дизайнер не нужен.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Визуал · один стиль везде
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em] max-w-[1650px]">
        Несоответствие визуала роняет доверие <span className="text-[hsl(var(--slide-gold))]">между рекламой и лендингом</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[22px] max-w-[1650px]">
        Самая частая ошибка стартапов: делают круто по отдельности, но не сводят воедино. Клиент кликнул рекламу, попал на «чужую» страницу, почувствовал подвох - и ушёл до покупки.
      </p>
      <div className="grid grid-cols-2 gap-[18px] max-w-[1700px] mb-[20px]">
        {rule.map((r) => (
          <div key={r.k} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[3px]">{r.k}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{r.v}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[14px] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45]">
          <b className="text-[hsl(var(--slide-gold))]">Forex Tester:</b> сайт и креативы в одной айдентике - реклама и лендинг выглядят как одно целое. И собирается это на AI за вечер, дизайнер не нужен.
        </p>
      </div>
    </div>
  );
}
