import { useIsMobile } from "@/hooks/use-mobile";

const parts = [
  { t: "Что я услышал", d: "их словами, 2–3 строки. Это доказывает, что ты слушал, и защищает от «вы нас не так поняли»." },
  { t: "Что предлагаю", d: "одно решение под одну задачу, а не список возможностей." },
  { t: "Сколько стоит и что даёт", d: "цена и результат в одном абзаце: €X в месяц против ваших N часов." },
  { t: "Что делаем дальше и когда", d: "конкретный шаг с датой — той самой, о которой договорились на звонке." },
  { t: "Вопрос, на который легко ответить «да»", d: "«Подтверждаете вторник?» — а не «буду рад обратной связи»." },
];

const cadence = [
  { d: "День 0", w: "письмо-резюме через 2 часа после звонка" },
  { d: "День 3", w: "кейс похожей компании — короткий, один абзац" },
  { d: "День 7", w: "ответ на возражение, которое он озвучил" },
  { d: "День 12", w: "напоминание о дате, которую он сам назвал" },
  { d: "День 20", w: "«закрываю у себя, если сейчас неактуально»" },
];

export default function L13SlideFollowUp() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Фоллоу-ап
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Письмо через 2 часа после звонка — <span className="text-[hsl(var(--slide-gold))]">твой главный инструмент</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Именно его клиент пересылает внутрь компании. Оно продаёт, когда тебя нет в комнате. 5 частей:
        </p>
        <div className="space-y-[2px] mb-[6px]">
          {parts.map((p, i) => (
            <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <p className="text-[8px] leading-[1.35]">
                <span className="font-bold text-[hsl(var(--slide-gold))]">{i + 1}. {p.t}</span>
                <span className="text-[hsl(var(--slide-text-muted))]"> — {p.d}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">Дальше — 5 касаний, у каждого своя причина</p>
        <div className="space-y-[2px] mb-[6px]">
          {cadence.map((c) => (
            <p key={c.d} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">
              <span className="text-[hsl(var(--slide-text))] font-medium">{c.d}:</span> {c.w}
            </p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.4]">
            Не бесит то, что полезно. Бесит «доброе утро, есть новости?».
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Фоллоу-ап
      </p>
      <h2 className="font-display text-[52px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em] max-w-[1700px]">
        Письмо через 2 часа после звонка — <span className="text-[hsl(var(--slide-gold))]">твой главный инструмент</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[20px] max-w-[1700px] leading-[1.45]">
        Именно это письмо клиент пересылает своему руководителю. Оно продаёт, когда тебя нет в комнате. Пять частей:
      </p>
      <div className="space-y-[8px] max-w-[1700px] mb-[20px]">
        {parts.map((p, i) => (
          <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[10px] flex items-baseline gap-[16px]">
            <span className="font-display text-[24px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{i + 1}</span>
            <span className="text-[21px] font-bold text-[hsl(var(--slide-text))] w-[440px] shrink-0">{p.t}</span>
            <span className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{p.d}</span>
          </div>
        ))}
      </div>
      <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[10px]">Дальше — 5 касаний, и у каждого своя причина</p>
      <div className="grid grid-cols-5 gap-[14px] max-w-[1700px] mb-[16px]">
        {cadence.map((c) => (
          <div key={c.d} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[18px] py-[12px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-gold))] mb-[3px]">{c.d}</p>
            <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">{c.w}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[16px] max-w-[1700px]">
        <p className="text-[26px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
          Не бесит то, что полезно. Бесит «доброе утро, есть новости?».
        </p>
      </div>
    </div>
  );
}
