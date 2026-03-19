import { useIsMobile } from "@/hooks/use-mobile";

export default function M2Slide20KillFeatures() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">MVP</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[6px]">
          Упражнение "Убей фичи"
        </h2>
        <p className="text-[11px] text-[hsl(var(--slide-text-muted))] mb-[12px]">Матрица приоритизации: влияние × сложность</p>
        <div className="grid grid-cols-2 gap-[6px] mb-[12px]">
          <div className="bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[8px] p-[10px] text-center">
            <p className="text-[9px] font-semibold text-[hsl(var(--slide-gold))] uppercase tracking-wider mb-[4px]">🚀 Делать первым</p>
            <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)]">Высокое влияние<br />Низкая сложность</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] p-[10px] text-center">
            <p className="text-[9px] font-semibold text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[4px]">📋 Запланировать</p>
            <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)]">Высокое влияние<br />Высокая сложность</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] p-[10px] text-center">
            <p className="text-[9px] font-semibold text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[4px]">🤷 Может быть</p>
            <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)]">Низкое влияние<br />Низкая сложность</p>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/20 rounded-[8px] p-[10px] text-center">
            <p className="text-[9px] font-semibold text-red-400 uppercase tracking-wider mb-[4px]">🗑️ Убить</p>
            <p className="text-[9px] text-[hsl(var(--slide-text)/0.8)]">Низкое влияние<br />Высокая сложность</p>
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[8px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))]">💡 80% фич попадут в "убить" или "может быть". Это нормально.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">MVP</p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">Упражнение "Убей фичи"</h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[40px]">Матрица приоритизации: влияние на пользователя × сложность реализации</p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[900px] mb-[36px]">
        <div className="bg-[hsl(var(--slide-gold)/0.12)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] p-[28px] text-center">
          <p className="text-[18px] font-semibold text-[hsl(var(--slide-gold))] uppercase tracking-wider mb-[10px]">🚀 Делать первым</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.8)]">Высокое влияние · Низкая сложность</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[28px] text-center">
          <p className="text-[18px] font-semibold text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[10px]">📋 Запланировать</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.8)]">Высокое влияние · Высокая сложность</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] p-[28px] text-center">
          <p className="text-[18px] font-semibold text-[hsl(var(--slide-text-muted))] uppercase tracking-wider mb-[10px]">🤷 Может быть</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.8)]">Низкое влияние · Низкая сложность</p>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-red-500/20 rounded-[12px] p-[28px] text-center">
          <p className="text-[18px] font-semibold text-red-400 uppercase tracking-wider mb-[10px]">🗑️ Убить</p>
          <p className="text-[18px] text-[hsl(var(--slide-text)/0.8)]">Низкое влияние · Высокая сложность</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[28px] py-[18px] max-w-[900px]">
        <p className="text-[20px] text-[hsl(var(--slide-text))]">💡 80% фич попадут в "убить" или "может быть". Это нормально. В MVP остаётся только верхний левый квадрат.</p>
      </div>
    </div>
  );
}
