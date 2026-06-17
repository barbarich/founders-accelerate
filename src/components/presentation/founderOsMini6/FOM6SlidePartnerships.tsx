import { useIsMobile } from "@/hooks/use-mobile";
import FOM6Footer from "./FOM6Footer";

const types = [
  {
    n: "01",
    name: "Реферальные / реселлеры",
    tag: "% С СДЕЛКИ · БЫСТРЫЙ СТАРТ",
    body: "Тот, кто уже продаёт твоей ICP (агентство, консультант, смежный сервис), приводит тебе клиентов за % или фикс. Доверие у него уже есть — ты берёшь его взаймы.",
  },
  {
    n: "02",
    name: "Интеграции / marketplace",
    tag: "ДОСТУП К ЧУЖОЙ БАЗЕ",
    body: "Встраиваешься в продукт, которым твоя ICP уже пользуется каждый день: плагин, API, листинг в маркетплейсе. Тебя находят там, где клиент и так живёт.",
  },
  {
    n: "03",
    name: "Co-marketing",
    tag: "ОБМЕН АУДИТОРИЕЙ · 0$",
    body: "Совместный вебинар, гостевая рассылка по чужой базе, обмен постами. Партнёр не конкурент, но у вас одна ICP. Каждый приводит другому тёплую аудиторию.",
  },
  {
    n: "04",
    name: "Embedded / white-label",
    tag: "ТВОЙ ПРОДУКТ КАК ФИЧА",
    body: "Твоё решение внутри чужого продукта под их брендом. Дольше согласовывать, но один партнёр = десятки его клиентов сразу. Это поздняя стадия, не первый шаг.",
  },
];

export default function FOM6SlidePartnerships() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
        <div className="flex flex-col justify-center px-[18px] h-full pb-[24px]">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
            Партнёрство · чужой канал как твой рычаг
          </p>
          <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[6px]">
            Один партнёр = <span className="text-[hsl(var(--slide-gold))]">доступ, который ты не построишь в одиночку</span>
          </h2>
          <p className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.45] mb-[8px]">
            Сначала закрой 3–5 сделок руками — пойми, что и кому продаётся. Только потом масштабируй через партнёров: иначе партнёр не знает, что продавать.
          </p>
          <div className="grid grid-cols-2 gap-[5px] mb-[8px]">
            {types.map((t) => (
              <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[8px] py-[5px]">
                <p className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">
                  <span className="text-[hsl(var(--slide-gold))]">{t.n}.</span> {t.name}
                </p>
                <p className="text-[6px] uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))] mb-[2px]">{t.tag}</p>
                <p className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="text-[8.5px] text-[hsl(var(--slide-gold))] italic leading-[1.4]">
            С чего начать: 1 партнёр · 1 чёткое «что с этого тебе» в цифрах · взаимная выгода, не просьба об одолжении.
          </p>
        </div>
        <FOM6Footer slide={13} />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col relative">
      <div className="flex flex-col justify-center px-[140px] h-full max-w-[1800px]">
        <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
          Партнёрство · чужой канал как твой рычаг
        </p>
        <h2 className="font-display text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px] tracking-[-0.01em] max-w-[1700px]">
          Один партнёр = <span className="text-[hsl(var(--slide-gold))]">доступ к ICP, который соло не построишь</span>
        </h2>
        <p className="text-[20px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45] mb-[24px] max-w-[1700px]">
          Сначала закрой 3–5 сделок руками — пойми, что и кому продаётся. Только потом масштабируй через партнёров: партнёр продаёт лишь то, что ты уже умеешь продавать сам.
        </p>
        <div className="grid grid-cols-2 gap-[20px] mb-[22px] max-w-[1700px]">
          {types.map((t) => (
            <div key={t.n} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[16px]">
              <p className="text-[13px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[4px]">{t.n}</p>
              <p className="font-display text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">{t.name}</p>
              <p className="text-[12px] uppercase tracking-[0.14em] text-[hsl(var(--slide-gold))] mb-[7px]">{t.tag}</p>
              <p className="text-[16px] text-[hsl(var(--slide-text)/0.88)] leading-[1.45]">{t.body}</p>
            </div>
          ))}
        </div>
        <p className="text-[22px] text-[hsl(var(--slide-gold))] italic leading-[1.45] max-w-[1700px]">
          С чего начать: 1 партнёр · 1 чёткое «что с этого тебе» в цифрах · взаимная выгода, не просьба об одолжении.
        </p>
      </div>
      <FOM6Footer slide={13} />
    </div>
  );
}
