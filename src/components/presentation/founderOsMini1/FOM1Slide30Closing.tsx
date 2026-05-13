import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

export default function FOM1Slide30Closing() {
  const isMobile = useIsMobile();
  const pad = isMobile ? "px-[24px]" : "px-[140px]";

  return (
    <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center relative ${pad}`}>
      <p className={`uppercase tracking-[0.3em] text-[hsl(var(--slide-gold))] font-medium ${isMobile ? "text-[10px] mb-[10px]" : "text-[20px] mb-[24px]"}`}>
        Закрытие
      </p>
      <h1 className={`font-display font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] ${isMobile ? "text-[28px]" : "text-[88px]"}`}>
        Вы уже впереди<br />90% фаундеров
      </h1>
      <div className={`w-[60px] md:w-[120px] h-[2px] bg-[hsl(var(--slide-gold))] my-[18px] md:my-[40px]`} />
      <p className={`text-[hsl(var(--slide-text))] leading-[1.5] max-w-[1500px] ${isMobile ? "text-[12px]" : "text-[24px]"}`}>
        Большинство строят продукт, не поговорив ни с одним клиентом.
        Вы за одну неделю сделаете то, на что у других уходят месяцы.
      </p>
      <p className={`text-[hsl(var(--slide-text-muted))] leading-[1.5] max-w-[1500px] mt-[12px] md:mt-[20px] ${isMobile ? "text-[11px]" : "text-[20px]"}`}>
        Через 5 дней увидимся на С2 — разбираем результаты интервью, фиксируем позиционирование,
        переходим к pricing и MVP scope.
      </p>
      <p className={`text-[hsl(var(--slide-gold))] font-semibold mt-[12px] md:mt-[20px] ${isMobile ? "text-[11px]" : "text-[22px]"}`}>
        Без выполненного ДЗ С2 не имеет смысла.
      </p>
      <p className={`mt-[16px] md:mt-[36px] font-display font-bold text-[hsl(var(--slide-gold))] ${isMobile ? "text-[24px]" : "text-[64px]"}`}>
        🚀 Поехали.
      </p>
      <FOM1Footer slide={30} />
    </div>
  );
}
