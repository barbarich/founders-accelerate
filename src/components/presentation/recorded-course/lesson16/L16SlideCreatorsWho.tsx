import { useIsMobile } from "@/hooks/use-mobile";

const math = [
  { t: "5 000-30 000", d: "человек посмотрят пост у небольшого блогера" },
  { t: "50-300", d: "из них перейдут по твоей ссылке" },
  { t: "1-12", d: "из них купят или оформят подписку" },
];

const rules = [
  { t: "Бери небольших блогеров", d: "От 3 до 150 тысяч подписчиков. Их аудитория доверяет им больше, а берут они дешевле - крупные и дороже, и продают хуже." },
  { t: "Бери сразу 10-15", d: "Одно и то же предложение, одна и та же страница, куда ведёт ссылка. По одному блогеру ничего не поймёшь - результаты слишком разные." },
  { t: "Нет денег - предложи бесплатный доступ", d: "В обмен на честный отзыв. Из 30-50 таких блогеров расскажут о продукте 20-30% - и этого достаточно для первого теста." },
];

export default function L16SlideCreatorsWho() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инфлюенсеры · кого выбирать
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Один пост - это не результат
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Вот что реально происходит с постом у небольшого блогера:
        </p>
        <div className="flex gap-[5px] mb-[7px]">
          {math.map((m) => (
            <div key={m.t} className="flex-1 border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[6px] bg-[hsl(var(--slide-gold)/0.05)] text-center">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1]">{m.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.3] mt-[2px]">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[5px]">
          {rules.map((r) => (
            <div key={r.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{r.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{r.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инфлюенсеры · кого выбирать
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Один пост - <span className="text-[hsl(var(--slide-gold))]">это не результат</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[18px] max-w-[1800px]">
        Вот что реально происходит с постом у небольшого блогера:
      </p>
      <div className="flex gap-[16px] max-w-[1900px] mb-[22px]">
        {math.map((m, i) => (
          <div key={m.t} className="flex items-center gap-[16px]">
            <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[14px] bg-[hsl(var(--slide-gold)/0.06)] text-center">
              <p className="text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1]">{m.t}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.3] mt-[2px]">{m.d}</p>
            </div>
            {i < math.length - 1 && <span className="text-[24px] text-[hsl(var(--slide-text-muted))]">→</span>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1900px]">
        {rules.map((r) => (
          <div key={r.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[5px]">{r.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{r.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
