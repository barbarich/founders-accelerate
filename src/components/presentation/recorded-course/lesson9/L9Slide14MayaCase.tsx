import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  { label: "Задача", body: "Крупному европейскому маркетплейсу нужна система лояльности с нуля. Пробовал силами сотрудников - получалось не то." },
  { label: "Что сделал", body: "Зашёл в Claude Code и попросил построить не решение, а специалиста: агента, который занимается именно системами лояльности. Описал характер, опыт, правила, требования, манеру общения." },
  { label: "Через 5 минут", body: "Агент готов. Зовут Мая. Дальше я даю задачи ей, а не пишу промпты." },
  { label: "Что делает", body: "Презентации, документация, требования. Спорит со мной. Аргументирует. Возражает, когда я неправ." },
  { label: "Результат", body: "Третий день работы - система лояльности почти финализирована и ляжет в основу продукта." },
];

export default function L9Slide14MayaCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Бонус · мой кейс за эту неделю
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[10px]">
          Задача, которую <span className="text-[hsl(var(--slide-gold))]">не вытянули сотрудники</span>.
        </h2>
        <div className="space-y-[6px] mb-[9px]">
          {steps.map((s) => (
            <div key={s.label} className="border-l-2 border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[10px] py-[6px]">
              <p className="text-[9px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[1px]">{s.label}</p>
              <p className="text-[9.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45]">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[12px] py-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            Ключевое: я не просил <span className="text-[hsl(var(--slide-gold))]">сделать работу</span>. Я попросил построить того, кто эту работу умеет делать.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[36px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Бонус · мой кейс за эту неделю
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[26px] tracking-[-0.01em]">
        Задача, которую <span className="text-[hsl(var(--slide-gold))]">не вытянули сотрудники</span>.
      </h2>
      <div className="space-y-[12px] max-w-[1800px] mb-[24px]">
        {steps.map((s) => (
          <div key={s.label} className="border-l-[4px] border-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.06)] px-[26px] py-[13px] flex items-start gap-[24px]">
            <p className="text-[16px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold w-[190px] shrink-0 mt-[3px]">{s.label}</p>
            <p className="text-[20px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5] flex-1">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1800px]">
        <p className="text-[23px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
          Ключевое: я не просил <span className="text-[hsl(var(--slide-gold))]">сделать работу</span>. Я попросил построить того, кто эту работу умеет делать.
        </p>
      </div>
    </div>
  );
}
