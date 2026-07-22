import { useIsMobile } from "@/hooks/use-mobile";

const breakdown = [
  { el: "Герой", val: "Я. И это не спорит с «клиент - герой»: я сам был этим клиентом - моя боль = боль читателя." },
  { el: "Конфликт", val: "Надоели свидания из Tinder, где подбор по фото, а не по тому, что важно." },
  { el: "Трансформация", val: "Приложение ищет партнёра по ценностям и желаниям, а не по внешности." },
  { el: "Честность", val: "Рассказывал это от первого лица, как есть. Это и привлекло первую аудиторию." },
];

export default function L11SlideMikeyCase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[20px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Мой кейс · как история запустила Mikey
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[9px]">
          Я не рекламировал продукт. Я <span className="text-[hsl(var(--slide-gold))]">рассказал свою историю</span>.
        </h2>
        <div className="bg-[hsl(var(--slide-bg-alt))] border-l-2 border-[hsl(var(--slide-gold))] px-[11px] py-[8px] mb-[9px]">
          <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
            «Я отец-одиночка. Мне надоели пустые свидания из Tinder, где всё решает фото, а не ценности. Я сделал приложение, которое подбирает партнёра по ценностям и желаниям. И начал честно про это рассказывать».
          </p>
        </div>
        <div className="space-y-[4px] mb-[8px]">
          {breakdown.map((b) => (
            <div key={b.el} className="flex items-start gap-[7px]">
              <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))] w-[78px] shrink-0">{b.el}</span>
              <span className="text-[9px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{b.val}</span>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[11px] py-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
            История привлекла первых пользователей <span className="text-[hsl(var(--slide-gold))]">до того, как продукт стал идеальным</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px] py-[34px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Мой кейс · как история запустила Mikey
      </p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.01em] max-w-[1800px]">
        Я не рекламировал продукт. Я <span className="text-[hsl(var(--slide-gold))]">рассказал свою историю</span>.
      </h2>
      <div className="grid grid-cols-2 gap-[28px] max-w-[1800px] items-start">
        <div className="bg-[hsl(var(--slide-bg-alt))] border-l-[4px] border-[hsl(var(--slide-gold))] px-[28px] py-[22px]">
          <p className="text-[23px] text-[hsl(var(--slide-text))] leading-[1.5] italic">
            «Я отец-одиночка. Мне надоели пустые свидания из Tinder, где всё решает фото, а не ценности. Я сделал приложение, которое подбирает партнёра по ценностям и желаниям. И начал честно про это рассказывать».
          </p>
        </div>
        <div className="space-y-[12px]">
          {breakdown.map((b) => (
            <div key={b.el} className="flex items-start gap-[16px]">
              <span className="text-[18px] font-bold text-[hsl(var(--slide-gold))] w-[150px] shrink-0">{b.el}</span>
              <span className="text-[18px] text-[hsl(var(--slide-text)/0.85)] leading-[1.4]">{b.val}</span>
            </div>
          ))}
          <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[22px] py-[14px] mt-[16px]">
            <p className="text-[19px] text-[hsl(var(--slide-text))] font-semibold leading-[1.45]">
              История привлекла первых пользователей <span className="text-[hsl(var(--slide-gold))]">до того, как продукт стал идеальным</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
