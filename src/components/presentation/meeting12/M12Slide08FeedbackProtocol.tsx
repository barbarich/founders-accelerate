import { useIsMobile } from "@/hooks/use-mobile";

const give = [
  "Что зацепило",
  "Что бы переписал",
  "Один конкретный следующий шаг",
];

const take = [
  "Не спорь и не оправдывайся",
  "Слушай и записывай",
  "Возьми одну правку — и сделай",
];

export default function M12Slide08FeedbackProtocol() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Демо-день · фидбек
        </p>
        <h2 className="font-display text-[21px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">
          Фидбек — <span className="text-[hsl(var(--slide-gold))]">коротко и по делу</span>
        </h2>
        <div className="space-y-[8px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[5px]">Когда даёшь — 3 строки</p>
            <div className="space-y-[3px]">
              {give.map((g) => (
                <p key={g} className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.35]"><span className="text-[hsl(var(--slide-gold))] mr-[6px]">→</span>{g}</p>
              ))}
            </div>
          </div>
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
            <p className="text-[10px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[5px]">Когда получаешь</p>
            <div className="space-y-[3px]">
              {take.map((t) => (
                <p key={t} className="text-[12px] text-[hsl(var(--slide-text))] leading-[1.35]"><span className="text-[hsl(var(--slide-gold))] mr-[6px]">→</span>{t}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Демо-день · фидбек
      </p>
      <h2 className="font-display text-[58px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[34px] tracking-[-0.02em]">
        Фидбек — <span className="text-[hsl(var(--slide-gold))]">коротко и по делу</span>
      </h2>
      <div className="grid grid-cols-2 gap-[24px] max-w-[1600px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[34px] py-[28px]">
          <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[18px]">Когда даёшь — 3 строки</p>
          <div className="space-y-[14px]">
            {give.map((g) => (
              <p key={g} className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.3]"><span className="text-[hsl(var(--slide-gold))] mr-[14px]">→</span>{g}</p>
            ))}
          </div>
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[16px] px-[34px] py-[28px]">
          <p className="text-[18px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.16em] mb-[18px]">Когда получаешь</p>
          <div className="space-y-[14px]">
            {take.map((t) => (
              <p key={t} className="text-[26px] text-[hsl(var(--slide-text))] leading-[1.3]"><span className="text-[hsl(var(--slide-gold))] mr-[14px]">→</span>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
