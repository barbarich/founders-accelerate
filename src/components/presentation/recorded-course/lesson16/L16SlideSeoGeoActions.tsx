import { useIsMobile } from "@/hooks/use-mobile";

const actions = [
  { t: "Подключи Google Search Console", d: "Бесплатный сервис Google. Показывает, по каким словам тебя уже находят и на каком ты месте." },
  { t: "Напиши 3-5 статей с вопросом в заголовке", d: "«Как сделать X» или «лучший Y для Z» - то, что реально гуглят. Не общий рассказ «о нашем продукте»." },
  { t: "Найди 10-15 чужих подборок «лучшие X»", d: "В своей нише. Напиши автору: вот продукт, вот чем отличается, можно добавить? Почти половина того, что цитирует ChatGPT, отвечая «что выбрать», - именно такие подборки." },
  { t: "Собери 5 отзывов там, где их видно", d: "G2, Product Hunt, отзовик твоей ниши. Отзывы - источник, на который ссылаются и Google, и нейросети." },
];

export default function L16SlideSeoGeoActions() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          SEO и GEO · первая неделя
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          4 действия, без технических знаний
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Ничего не нужно программировать. Всё делается руками за один вечер на каждый пункт.
        </p>
        <div className="space-y-[5px] mb-[7px]">
          {actions.map((a, i) => (
            <div key={a.t} className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
              <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">{i + 1}. {a.t}</p>
              <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{a.d}</p>
            </div>
          ))}
        </div>
        <div className="border-l-2 border-red-400/60 bg-red-500/[0.05] rounded-[5px] px-[9px] py-[6px]">
          <p className="text-[8.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            <span className="font-bold text-red-400">Не трать время:</span> файл llms.txt - модный совет без доказательств, почти никто его не читает. Попасть в Википедию для стартапа нереально - не пытайся.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        SEO и GEO · первая неделя
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        4 действия, <span className="text-[hsl(var(--slide-gold))]">без технических знаний</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[20px] max-w-[1800px]">
        Ничего не нужно программировать. Всё делается руками за один вечер на каждый пункт.
      </p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1900px] mb-[16px]">
        {actions.map((a, i) => (
          <div key={a.t} className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))]">{i + 1}</span>
            <p className="text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mt-[4px] mb-[6px]">{a.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">{a.d}</p>
          </div>
        ))}
      </div>
      <div className="border-l-[4px] border-red-400/60 bg-red-500/[0.05] rounded-[10px] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[16.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
          <span className="font-bold text-red-400">Не трать на это время:</span> файл llms.txt - модный совет без доказательств, почти никто его не читает. Попасть в Википедию для стартапа нереально - не пытайся.
        </p>
      </div>
    </div>
  );
}
