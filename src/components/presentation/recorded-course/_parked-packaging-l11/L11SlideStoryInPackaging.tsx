import { useIsMobile } from "@/hooks/use-mobile";

const spots = [
  { where: "H1 на лендинге", how: "Не «AI-платформа для X», а твоя история одной строкой: боль → обещание. Первое, что видят за 5 секунд." },
  { where: "Хук в рекламе", how: "Первые 3 секунды видео или первая строка объявления - это конфликт из твоей истории, а не название продукта." },
  { where: "Скрипт видео", how: "Структура ролика = твоя история: было плохо → что понял → как теперь. Люди досматривают истории, а не презентации фич." },
  { where: "About / первый экран", how: "Почему ты это делаешь. Личная причина отличает тебя от безымянного конкурента с теми же фичами." },
];

export default function L11SlideStoryInPackaging() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          История в упаковке
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Историю ты собрал в уроке 10. Теперь <span className="text-[hsl(var(--slide-gold))]">вшиваешь её в упаковку.</span>
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[6px]">
          Не заново придумываешь - берёшь свою историю и раскладываешь по четырём местам, где её увидит клиент.
        </p>
        <div className="space-y-[5px]">
          {spots.map((s) => (
            <div key={s.where} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[10px] py-[5px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-gold))]">{s.where}</p>
              <p className="text-[8px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{s.how}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        История в упаковке
      </p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[14px] tracking-[-0.02em] max-w-[1600px]">
        Историю ты собрал в уроке 10. Теперь <span className="text-[hsl(var(--slide-gold))]">вшиваешь её в упаковку.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1600px]">
        Заново придумывать не нужно. Берёшь свою историю и раскладываешь по четырём местам, где её встретит клиент.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        {spots.map((s) => (
          <div key={s.where} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[18px]">
            <p className="text-[22px] font-bold text-[hsl(var(--slide-gold))] mb-[6px]">{s.where}</p>
            <p className="text-[17px] text-[hsl(var(--slide-text)/0.88)] leading-[1.5]">{s.how}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
