import { useIsMobile } from "@/hooks/use-mobile";

const done = [
  { t: "Реклама в Meta", l: "урок 12" },
  { t: "Продажи руками, звонки, сделки", l: "уроки 11 и 13" },
  { t: "Контент и история основателя", l: "урок 11" },
  { t: "План маркетинга на 30 дней", l: "урок 10" },
];

const now = [
  { t: "Партнёрства", d: "Тебя продаёт тот, кому клиент уже доверяет" },
  { t: "Инфлюенсеры", d: "Покупаешь чужую аудиторию за фикс или процент" },
  { t: "Комьюнити и запуски", d: "Приходишь туда, где о проблеме уже спрашивают" },
  { t: "SEO и GEO", d: "Тебя находят сами, когда гуглят или спрашивают у ИИ" },
];

export default function L16SlideChannelMap() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Карта урока
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Четыре канала, которых ещё не было
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          В конце выберешь два и запустишь. Не все сразу - на все сразу тебя не хватит.
        </p>
        <p className="text-[8.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-text-muted))] font-bold mb-[3px]">Уже прошли</p>
        <div className="flex flex-wrap gap-[4px] mb-[7px]">
          {done.map((d) => (
            <span key={d.t} className="text-[8px] text-[hsl(var(--slide-text)/0.7)] border border-[hsl(var(--slide-border)/0.4)] rounded-full px-[7px] py-[2px]">
              {d.t} <span className="text-[hsl(var(--slide-text-muted))]">· {d.l}</span>
            </span>
          ))}
        </div>
        <p className="text-[8.5px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] font-bold mb-[3px]">Разбираем сейчас</p>
        <div className="space-y-[4px]">
          {now.map((n, i) => (
            <div key={n.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.05)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {n.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.35]">{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Карта урока
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Четыре канала, <span className="text-[hsl(var(--slide-gold))]">которых ещё не было</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        В конце выберешь два и запустишь. Не все сразу - на все сразу тебя не хватит.
      </p>
      <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-text-muted))] font-bold mb-[8px]">Уже прошли в курсе</p>
      <div className="flex flex-wrap gap-[10px] mb-[20px] max-w-[1900px]">
        {done.map((d) => (
          <span key={d.t} className="text-[15px] text-[hsl(var(--slide-text)/0.7)] border border-[hsl(var(--slide-border)/0.4)] rounded-full px-[16px] py-[5px]">
            {d.t} <span className="text-[hsl(var(--slide-text-muted))]">· {d.l}</span>
          </span>
        ))}
      </div>
      <p className="text-[14px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Разбираем сейчас</p>
      <div className="grid grid-cols-4 gap-[18px] max-w-[1900px]">
        {now.map((n, i) => (
          <div key={n.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.05)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[4px] mb-[6px]">{n.t}</p>
            <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{n.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
