import { useIsMobile } from "@/hooks/use-mobile";

const kit = [
  { t: "Страница про продукт его словами", d: "Не твой лендинг. Один экран: какую боль его клиента закрываешь и сколько стоит." },
  { t: "Доступ, чтобы потыкать самому", d: "Пока он сам не увидел продукт, он не сможет о нём рассказать. 15 минут показа хватает." },
  { t: "Готовый текст письма его клиенту", d: "Напиши за него. Партнёр не будет придумывать формулировки - он просто перешлёт." },
  { t: "Промокод или личная ссылка", d: "Без этого через месяц начнётся спор, кто кого привёл." },
];

export default function L16SlideAfterYes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Партнёр сказал да
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Дай пакет в первый день
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Согласие - это ещё не продажи. Партнёр занят своим делом: чем меньше работы ты ему оставил, тем выше шанс, что он начнёт.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {kit.map((k, i) => (
            <div key={k.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {k.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{k.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[8px]">
          <p className="text-[9px] text-[hsl(var(--slide-text))] leading-[1.45]">
            <span className="font-bold">Срок проверки - 60 дней.</span> Есть первый платящий - обсуждаете, как масштабировать. Ноль - не ссоритесь, просто больше не тратите на это время и идёте к следующему.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Партнёр сказал да
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Дай пакет <span className="text-[hsl(var(--slide-gold))]">в первый день</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[22px] max-w-[1800px]">
        Согласие - это ещё не продажи. Партнёр занят своим делом: чем меньше работы ты ему оставил, тем выше шанс, что он вообще начнёт.
      </p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[22px]">
        {kit.map((k, i) => (
          <div key={k.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[17.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mt-[4px] mb-[6px]">{k.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">{k.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[16px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.45]">
          <span className="font-semibold">Срок проверки - 60 дней.</span> Есть первый платящий - обсуждаете, как масштабировать. Ноль - не ссоритесь, просто больше не тратите на это время и идёте к следующему в списке.
        </p>
      </div>
    </div>
  );
}
