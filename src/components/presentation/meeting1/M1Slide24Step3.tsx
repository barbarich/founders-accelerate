export default function M1Slide24Step3() {
  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <div className="flex items-center gap-[16px] mb-[16px]">
        <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] px-[16px] py-[8px] rounded">10 мин</span>
        <span className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium">Делаем вместе — Шаг 3</span>
      </div>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[48px]">
        Позиционирование
      </h2>
      <div className="space-y-[24px] max-w-[1000px]">
        <div className="flex items-start gap-[16px]">
          <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] w-[36px] h-[36px] rounded flex items-center justify-center shrink-0">1</span>
          <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">Каждый формулирует одно предложение.</p>
        </div>
        <div className="flex items-start gap-[16px]">
          <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] w-[36px] h-[36px] rounded flex items-center justify-center shrink-0">2</span>
          <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">Зачитывает вслух. Группа и я: "понятно / не понятно / для кого это?"</p>
        </div>
        <div className="flex items-start gap-[16px]">
          <span className="font-mono text-[20px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] w-[36px] h-[36px] rounded flex items-center justify-center shrink-0">3</span>
          <p className="text-[24px] text-[hsl(var(--slide-text)/0.85)] leading-[1.5]">Переформулируем на месте, пока каждый не получит чёткую формулировку.</p>
        </div>
      </div>
    </div>
  );
}
