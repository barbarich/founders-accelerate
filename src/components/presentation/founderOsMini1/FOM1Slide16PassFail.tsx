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
  const pad = isMobile ? "px-[18px] pt-[20px] pb-[36px]" : "px-[100px] pt-[44px] pb-[60px]";

  return (
    <div className={`w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative ${pad}`}>
      <p className={`uppercase tracking-[0.25em] text-[hsl(var(--slide-gold))] font-medium ${isMobile ? "text-[9px] mb-[4px]" : "text-[15px] mb-[8px]"}`}>
        Mom Test · Сигналы
      </p>
      <h2 className={`font-display font-bold text-[hsl(var(--slide-text))] leading-[1.05] tracking-[-0.02em] ${isMobile ? "text-[20px]" : "text-[48px]"}`}>
        Сигналы — pass / fail
      </h2>
      <p className={`text-[hsl(var(--slide-text-muted))] ${isMobile ? "text-[10.5px] mt-[4px]" : "text-[22px] mt-[6px]"}`}>
        Мы не питчим. Мы слушаем
      </p>

      <div className={`flex-1 mt-[20px] grid grid-cols-2 gap-[10px] md:gap-[24px]`}>
        <div className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] flex flex-col ${isMobile ? "p-[10px]" : "p-[28px]"}`} style={{ borderColor: "hsl(140 50% 55% / 0.4)" }}>
          <p className={`font-semibold ${isMobile ? "text-[11px]" : "text-[26px]"}`} style={{ color: "hsl(140 50% 55%)" }}>
            ✅ Pass
          </p>
          <ul className={`mt-[14px] space-y-[10px] text-[hsl(var(--slide-text))] leading-[1.35] ${isMobile ? "text-[9px]" : "text-[20px]"}`}>
            {pass.map((p, i) => <li key={i}>· {p}</li>)}
          </ul>
        </div>
        <div className={`bg-[hsl(var(--slide-bg-alt))] border rounded-[14px] flex flex-col ${isMobile ? "p-[10px]" : "p-[28px]"}`} style={{ borderColor: "hsl(0 70% 60% / 0.4)" }}>
          <p className={`font-semibold ${isMobile ? "text-[11px]" : "text-[26px]"}`} style={{ color: "hsl(0 70% 60%)" }}>
            ❌ Fail
          </p>
          <ul className={`mt-[14px] space-y-[10px] text-[hsl(var(--slide-text))] leading-[1.35] ${isMobile ? "text-[9px]" : "text-[20px]"}`}>
            {fail.map((p, i) => <li key={i}>· {p}</li>)}
          </ul>
        </div>
      </div>

      <div className={`border-l-[4px] border-[hsl(var(--slide-gold))] pl-[16px] mt-[16px] md:mt-[22px] ${isMobile ? "text-[9.5px]" : "text-[19px] leading-[1.45]"}`}>
        <p className="text-[hsl(var(--slide-text))]">
          💡 Правило большого пальца: если из 10 разговоров 7 человек сами поднимают эту боль,
          описывают свои костыли и считают, во что она им обходится — гипотеза подтверждена.
          Можно идти строить.
        </p>
      </div>

      <FOM1Footer slide={19} />
    </div>
  );
}
