import { useIsMobile } from "@/hooks/use-mobile";

const who = [
  { icon: "👋", t: "Друзья и знакомые", d: "Быстро и честно - для первого захода" },
  { icon: "🎤", t: "Люди из custdev", d: "Показывай в КОНЦЕ интервью, не раньше" },
  { icon: "🎯", t: "Любой из ЦА", d: "Те, для кого ты реально это строишь" },
];

const ask = [
  "«Что здесь непонятно?»",
  "«Пользовался бы этим? В какой ситуации?»",
  "«За что бы заплатил?»",
  "«Что здесь лишнее?»",
];

export default function L4SlideWhoToAsk() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[24px] py-[16px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Топливо цикла</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[4px]">
          Кому показывать и что спрашивать
        </h2>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] mb-[12px] leading-[1.5]">
          Показывай рано, показывай многим, спрашивай правильно.
        </p>
        <div className="space-y-[6px] mb-[10px]">
          {who.map((w, i) => (
            <div key={i} className="flex items-center gap-[10px] bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[8px] px-[12px] py-[7px]">
              <span className="text-[16px] shrink-0">{w.icon}</span>
              <div>
                <span className="text-[12px] font-semibold text-[hsl(var(--slide-text))]">{w.t}</span>
                <span className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.3] block">{w.d}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.06)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px] mb-[10px]">
          <p className="text-[9px] uppercase tracking-widest text-[hsl(var(--slide-gold))] font-medium mb-[5px]">Спрашивай так, не «нравится?»</p>
          <div className="space-y-[3px]">
            {ask.map((q, i) => (
              <p key={i} className="text-[11px] text-[hsl(var(--slide-text))] leading-[1.35]">{q}</p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[6px]">
          <div className="bg-emerald-950/20 border border-emerald-500/25 rounded-[8px] px-[10px] py-[7px]">
            <p className="text-[9px] uppercase tracking-widest text-emerald-400 font-semibold mb-[3px]">🟢 Сигнал</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">«Юзал бы для X», «сколько стоит?»</p>
          </div>
          <div className="bg-red-950/20 border border-red-500/25 rounded-[8px] px-[10px] py-[7px]">
            <p className="text-[9px] uppercase tracking-widest text-red-400 font-semibold mb-[3px]">🔴 Шум</p>
            <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">«Прикольно», «молодец, красиво»</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px] py-[40px]">
      <p className="text-[14px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[8px]">Топливо цикла</p>
      <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px]">
        Кому показывать и что спрашивать
      </h2>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mb-[32px]">
        Фидбэк - топливо прототипа. Показывай рано, показывай многим, спрашивай правильно.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1300px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[32px] py-[24px]">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold mb-[18px]">Кому показывать</p>
          <div className="space-y-[16px]">
            {who.map((w, i) => (
              <div key={i} className="flex items-start gap-[14px]">
                <span className="text-[30px] shrink-0">{w.icon}</span>
                <div>
                  <h3 className="text-[20px] font-semibold text-[hsl(var(--slide-text))] leading-[1.2]">{w.t}</h3>
                  <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[16px] px-[32px] py-[24px]">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-semibold mb-[18px]">Что спрашивать · не «нравится?»</p>
          <div className="space-y-[12px]">
            {ask.map((q, i) => (
              <div key={i} className="flex items-center gap-[12px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[hsl(var(--slide-gold))] shrink-0" />
                <p className="text-[19px] text-[hsl(var(--slide-text))] leading-[1.3]">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-[24px] grid grid-cols-2 gap-[24px] max-w-[1300px]">
        <div className="bg-emerald-950/20 border border-emerald-500/25 rounded-[14px] px-[28px] py-[16px] flex items-center gap-[16px]">
          <span className="text-[15px] uppercase tracking-[0.2em] text-emerald-400 font-semibold shrink-0">🟢 Сигнал</span>
          <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">«Я бы юзал это для X», «а сколько стоит?»</p>
        </div>
        <div className="bg-red-950/20 border border-red-500/25 rounded-[14px] px-[28px] py-[16px] flex items-center gap-[16px]">
          <span className="text-[15px] uppercase tracking-[0.2em] text-red-400 font-semibold shrink-0">🔴 Шум</span>
          <p className="text-[17px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">«Прикольно», «молодец, красиво»</p>
        </div>
      </div>
    </div>
  );
}
