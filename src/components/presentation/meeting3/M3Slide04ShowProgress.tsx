import { useIsMobile } from "@/hooks/use-mobile";

export default function M3Slide04ShowProgress() {
  const isMobile = useIsMobile();

  const format = [
    { icon: "🎯", title: "Что доработал", text: "Какие MUST HAVE фичи из MoSCoW реализовал? Что изменилось в продукте?" },
    { icon: "👥", title: "Обратная связь", text: "Показал прототип 3 людям из ЦА — какая реакция? Что удивило?" },
    { icon: "🚧", title: "Что блокирует", text: "Технические проблемы? Непонятно что делать? Группа помогает решить" },
  ];

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[28px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">5 минут на каждого</p>
        <h2 className="font-display text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[20px]">
          Покажите прогресс
        </h2>
        <div className="space-y-[12px]">
          {format.map((item, i) => (
            <div key={i} className="flex items-start gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[10px]">
              <span className="text-[18px] shrink-0">{item.icon}</span>
              <div>
                <h3 className="text-[13px] font-semibold text-[hsl(var(--slide-text))]">{item.title}</h3>
                <p className="text-[11px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">5 минут на каждого</p>
      <h2 className="font-display text-[64px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[56px]">
        Покажите прогресс
      </h2>
      <div className="flex gap-[48px]">
        {format.map((item, i) => (
          <div key={i} className="flex-1 bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] p-[32px]">
            <span className="text-[48px] block mb-[24px]">{item.icon}</span>
            <h3 className="text-[28px] font-semibold text-[hsl(var(--slide-text))] mb-[16px]">{item.title}</h3>
            <p className="text-[20px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
