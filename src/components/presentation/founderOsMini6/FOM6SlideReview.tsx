import { useIsMobile } from "@/hooks/use-mobile";
import FOM6Footer from "./FOM6Footer";

const checks = [
  { n: "1", q: "С кем идёшь говорить", d: "Ты точно знаешь, кто этот человек и его роль — не «кто-нибудь из компании». ICP чёткий: кому продаём и зачем именно им это решение." },
  { n: "2", q: "Его проблема — и она реально есть", d: "Не выдуманная тобой боль. Ты убедился на discovery, что проблема существует и актуальна для него сейчас, а не «когда-нибудь»." },
  { n: "3", q: "Он может за это платить", d: "Есть бюджет и полномочия. Понимаешь, решает он сам или придётся выводить на того, кто платит." },
  { n: "4", q: "Один канал на старт — качество, не объём", d: "Выбрал первый канал и идёшь в него. Не «массово, потому что легче» — закрываешь первые сделки руками сам, и только потом масштабируешь." },
  { n: "5", q: "Готов к разговору", d: "Знаешь свои 3 главных возражения и ответ на каждое заранее. Цену называешь спокойно и по делу." },
];

export default function FOM6SlideReview() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
        <div className="flex flex-col justify-center px-[18px] h-full pb-[24px]">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
            Разбор · проходим воронку каждого
          </p>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[6px]">
            Опыт копится со встречами — <span className="text-[hsl(var(--slide-gold))]">но прийти готовым можно с первой</span>
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Каждая встреча — это накопленный опыт. Но чтобы первые не шли в стол, на каждую приходи подготовленным по 5 точкам. По готовности — проходим твою воронку.
          </p>
          <div className="space-y-[5px]">
            {checks.map((c) => (
              <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[9px] py-[5px]">
                <div className="flex items-baseline gap-[6px]">
                  <span className="text-[10px] font-bold text-[hsl(var(--slide-gold))]">{c.n}</span>
                  <span className="text-[9px] font-bold text-[hsl(var(--slide-text))]">{c.q}</span>
                </div>
                <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[16px]">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
        <FOM6Footer slide={24} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Разбор · проходим воронку каждого
        </p>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.08] mb-[12px] tracking-[-0.01em] max-w-[1700px]">
          Опыт копится со встречами — <span className="text-[hsl(var(--slide-gold))]">но прийти готовым можно с первой</span>
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1700px]">
          Каждая встреча — это опыт, который накапливается. Но чтобы первые шли эффективно, а не в стол, приходи подготовленным по 5 точкам. По готовности — проходим твою воронку.
        </p>
        <div className="space-y-[10px] max-w-[1700px]">
          {checks.map((c) => (
            <div key={c.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[12px]">
              <div className="flex items-baseline gap-[16px]">
                <span className="font-display text-[28px] font-bold text-[hsl(var(--slide-gold))] leading-none shrink-0">{c.n}</span>
                <div className="flex-1">
                  <span className="text-[22px] font-bold text-[hsl(var(--slide-text))]">{c.q}</span>
                  <span className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.4]"> — {c.d}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FOM6Footer slide={24} />
    </div>
  );
}
