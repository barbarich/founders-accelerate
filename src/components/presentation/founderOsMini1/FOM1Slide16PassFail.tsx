import { useIsMobile } from "@/hooks/use-mobile";
import FOM1Footer from "./FOM1Footer";

const pass = [
  "Сами поднимают эту проблему — без наводящего вопроса",
  "Описывают её теми же словами, что и ты",
  "Рассказывают про костыли: таблицы, чаты, ручную работу",
  "Называют, сколько времени / денег / нервов это съедает",
  "Проблема не решена — и они уже пробовали что-то и бросили",
  "7 из 10 в сегменте говорят про одно и то же",
];
const fail = [
  "Проблему называешь ты — собеседник просто кивает",
  "«Да, бывает» — без примера и без деталей",
  "Не могут вспомнить, когда сталкивались последний раз",
  "«У друга / коллеги такое было» — не у них самих",
  "Никаких костылей нет — значит, и боли нет",
  "В сегменте про эту боль говорят 1–2 из 10",
];

export default function FOM1Slide16PassFail() {
  const isMobile = useIsMobile();
  const pad = isMobile ? "px-[18px] pt-[20px] pb-[36px]" : "px-[140px] pt-[60px] pb-[80px]";

  return (
    <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative ${pad}`}>
      <p className={`uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium ${isMobile ? "text-[9px] mb-[4px]" : "text-[16px] mb-[10px]"}`}>
        Mom Test · Сигналы
      </p>
      <h2 className={`font-display font-bold text-[hsl(var(--slide-text))] leading-[1.1] tracking-[-0.02em] ${isMobile ? "text-[20px]" : "text-[44px]"}`}>
        Сигналы — pass / fail
      </h2>
      <p className={`text-[hsl(var(--slide-text-muted))] ${isMobile ? "text-[10.5px] mt-[4px]" : "text-[20px] mt-[8px]"}`}>
        Мы не питчим. Мы слушаем
      </p>

      <div className={`flex-1 mt-[12px] grid grid-cols-2 gap-[10px] md:gap-[20px]`}>
        <div className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] ${isMobile ? "p-[10px]" : "p-[18px]"}`} style={{ borderColor: "hsl(140 50% 55% / 0.4)" }}>
          <p className={`font-semibold ${isMobile ? "text-[11px]" : "text-[20px]"}`} style={{ color: "hsl(140 50% 55%)" }}>
            ✅ Pass
          </p>
          <ul className={`mt-[6px] space-y-[3px] text-[hsl(var(--slide-text))] ${isMobile ? "text-[9px]" : "text-[15px]"}`}>
            {pass.map((p, i) => <li key={i}>· {p}</li>)}
          </ul>
        </div>
        <div className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] ${isMobile ? "p-[10px]" : "p-[18px]"}`} style={{ borderColor: "hsl(0 70% 60% / 0.4)" }}>
          <p className={`font-semibold ${isMobile ? "text-[11px]" : "text-[20px]"}`} style={{ color: "hsl(0 70% 60%)" }}>
            ❌ Fail
          </p>
          <ul className={`mt-[6px] space-y-[3px] text-[hsl(var(--slide-text))] ${isMobile ? "text-[9px]" : "text-[15px]"}`}>
            {fail.map((p, i) => <li key={i}>· {p}</li>)}
          </ul>
        </div>
      </div>

      <div className={`border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] mt-[10px] md:mt-[16px] ${isMobile ? "text-[9.5px]" : "text-[16px]"}`}>
        <p className="text-[hsl(var(--slide-text))]">
          💡 Правило большого пальца: если из 10 разговоров 7 человек сами поднимают эту боль,
          описывают свои костыли и считают, во что она им обходится — гипотеза подтверждена.
          Можно идти строить.
        </p>
      </div>

      <FOM1Footer slide={16} />
    </div>
  );
}
