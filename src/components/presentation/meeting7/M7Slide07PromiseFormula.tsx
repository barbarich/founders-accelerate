import { useIsMobile } from "@/hooks/use-mobile";

const examples = [
  { product: "Calm", text: "Засыпай быстрее за 10 минут в день." },
  { product: "Loom", text: "Запиши экран и отправь — без созвона." },
  { product: "Lovable", text: "Опиши что хочешь — получи рабочее приложение." },
];

export default function M7Slide07PromiseFormula() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Формула
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[12px]">
          По чему пишется первый экран.
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[10px] px-[14px] py-[12px] mb-[12px]">
          <p className="font-mono text-[12px] text-[hsl(var(--slide-text))] leading-[1.5] text-center">
            <span className="text-[hsl(var(--slide-gold))]">[Кто]</span> получит<br />
            <span className="text-[hsl(var(--slide-gold))]">[что]</span> за<br />
            <span className="text-[hsl(var(--slide-gold))]">[как быстро / как просто]</span>
          </p>
        </div>
        <div className="space-y-[5px] mb-[10px]">
          {examples.map((e) => (
            <div key={e.product} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.15)] rounded-[6px] px-[10px] py-[6px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[1px]">{e.product}</p>
              <p className="text-[10px] text-[hsl(var(--slide-text))] leading-[1.35]">«{e.text}»</p>
            </div>
          ))}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
          Не получается одним предложением — вы сами ещё не поняли, что у вас за продукт.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[16px]">
        Формула
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        По чему пишется первый экран.
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-[2px] border-[hsl(var(--slide-gold)/0.5)] rounded-[18px] px-[48px] py-[32px] max-w-[1300px] mb-[28px]">
        <p className="font-mono text-[36px] text-[hsl(var(--slide-text))] leading-[1.5] text-center">
          <span className="text-[hsl(var(--slide-gold))]">[Кто]</span> получит{" "}
          <span className="text-[hsl(var(--slide-gold))]">[что]</span> за{" "}
          <span className="text-[hsl(var(--slide-gold))]">[как быстро / как просто]</span>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1500px] mb-[24px]">
        {examples.map((e) => (
          <div key={e.product} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[12px] px-[22px] py-[16px]">
            <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[6px]">{e.product}</p>
            <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4]">«{e.text}»</p>
          </div>
        ))}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold max-w-[1400px] leading-[1.4]">
        Не получается одним предложением — вы сами ещё не поняли, что у вас за продукт. Это первая вещь, которую сегодня надо доделать.
      </p>
    </div>
  );
}
