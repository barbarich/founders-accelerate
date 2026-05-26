import { useIsMobile } from "@/hooks/use-mobile";

const questions = [
  {
    num: "01",
    q: "Что тебя бесило до того, как ты придумал продукт?",
    hint: "Конкретная ситуация, не абстрактная проблема",
  },
  {
    num: "02",
    q: "Кто первый человек, которому это помогло? Как его зовут?",
    hint: "Имя + что именно изменилось в его жизни",
  },
  {
    num: "03",
    q: "Какой момент ты точно помнишь — дата, место, что произошло?",
    hint: "Вторник, 2 ночи, 47 непрочитанных. Деталь = история.",
  },
];

export default function L6Slide16UnityIdea() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Сторителлинг — шаг 1
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[4px]">
          Найди историю в своём продукте
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[10px] leading-[1.4]">
          Не «что делает продукт» — а «что я однажды почувствовал сам». Это и есть история, которую запоминают.
        </p>
        <div className="space-y-[5px] mb-[8px]">
          {questions.map((item) => (
            <div key={item.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[10px] py-[7px]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[2px]">{item.q}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-gold)/0.7)] leading-[1.35]">→ {item.hint}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.5] italic">«Я строю [продукт] потому что однажды [момент] — и понял [инсайт]»</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Сторителлинг — шаг 1
      </p>
      <h2 className="font-display text-[56px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Найди историю в своём продукте
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[30px] max-w-[1100px] leading-[1.45]">
        Не «что делает продукт» — а «что я однажды почувствовал сам». Это и есть история, которую запоминают.
      </p>

      <div className="grid grid-cols-3 gap-[18px] max-w-[1400px] mb-[22px]">
        {questions.map((item) => (
          <div key={item.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[14px] px-[24px] py-[22px]">
            <span className="font-mono text-[13px] text-[hsl(var(--slide-gold)/0.4)] mb-[10px] block">{item.num}</span>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[12px]">{item.q}</p>
            <p className="text-[14px] text-[hsl(var(--slide-gold)/0.8)] leading-[1.45]">→ {item.hint}</p>
          </div>
        ))}
      </div>

      <div className="bg-[hsl(var(--slide-gold)/0.07)] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[28px] py-[16px] max-w-[1400px]">
        <p className="text-[14px] text-[hsl(var(--slide-gold))] font-bold mb-[5px]">Шаблон первой фразы</p>
        <p className="text-[20px] text-[hsl(var(--slide-text))] leading-[1.4] italic">
          «Я строю [продукт] потому что однажды [конкретный момент] — и понял [инсайт, который изменил всё]»
        </p>
      </div>
    </div>
  );
}
