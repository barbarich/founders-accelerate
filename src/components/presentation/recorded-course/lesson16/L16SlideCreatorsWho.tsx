import { useIsMobile } from "@/hooks/use-mobile";

const math = [
  { t: "5 000-30 000", d: "просмотров у микро-креатора" },
  { t: "50-300", d: "переходов по ссылке (0.7-3%)" },
  { t: "1-12", d: "оплат с одного поста" },
];

export default function L16SlideCreatorsWho() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px] py-[16px] overflow-y-auto">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[5px]">
          Инфлюенсеры · кого брать
        </p>
        <h2 className="font-display text-[17px] font-bold text-[hsl(var(--slide-text))] leading-[1.15] mb-[3px]">
          Один пост - это лотерея, а не канал
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[7px]">
          Честная математика одного поста у микро-креатора:
        </p>
        <div className="flex gap-[5px] mb-[7px]">
          {math.map((m) => (
            <div key={m.t} className="flex-1 border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[6px] bg-[hsl(var(--slide-gold)/0.05)] text-center">
              <p className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1]">{m.t}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.3] mt-[2px]">{m.d}</p>
            </div>
          ))}
        </div>
        <div className="space-y-[5px]">
          <div className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">Бери 3k-150k подписчиков</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">У мелких дешевле доверие и выше отклик. Крупные берут дорого и продают хуже.</p>
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">Тест - это 10-15 креаторов сразу</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">Один оффер, одна посадочная. По одному человеку вывод сделать нельзя - разброс слишком большой.</p>
          </div>
          <div className="border border-[hsl(var(--slide-gold)/0.2)] rounded-[5px] px-[9px] py-[6px] bg-[hsl(var(--slide-gold)/0.04)]">
            <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))]">Без бюджета - разошли продукт 30-50 мелким</p>
            <p className="text-[8.5px] text-[hsl(var(--slide-text)/0.8)] leading-[1.4]">Бесплатный доступ в обмен на честный отзыв. Опубликуют 20-30%, это нормально.</p>
          </div>
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] leading-[1.4] mt-[6px]">
          Формат, который продаёт: показ экрана «задача решена за 30 секунд», а не обзор продукта.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[120px] py-[34px] overflow-y-auto">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Инфлюенсеры · кого брать
      </p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[8px] tracking-[-0.01em]">
        Один пост - это <span className="text-[hsl(var(--slide-gold))]">лотерея, а не канал</span>
      </h2>
      <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.4] mb-[18px] max-w-[1800px]">
        Честная математика одного поста у микро-креатора:
      </p>
      <div className="flex gap-[16px] max-w-[1900px] mb-[20px]">
        {math.map((m, i) => (
          <div key={m.t} className="flex items-center gap-[16px]">
            <div className="border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[28px] py-[14px] bg-[hsl(var(--slide-gold)/0.06)] text-center">
              <p className="text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-[1.1]">{m.t}</p>
              <p className="text-[14px] text-[hsl(var(--slide-text)/0.8)] leading-[1.3] mt-[2px]">{m.d}</p>
            </div>
            {i < math.length - 1 && <span className="text-[24px] text-[hsl(var(--slide-text-muted))]">→</span>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[18px] max-w-[1900px] mb-[16px]">
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
          <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[5px]">Бери 3k-150k подписчиков</p>
          <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">У мелких дешевле доверие и выше отклик. Крупные берут дорого и продают хуже.</p>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
          <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[5px]">Тест - это 10-15 сразу</p>
          <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">Один оффер, одна посадочная. По одному человеку вывод сделать нельзя - разброс слишком большой.</p>
        </div>
        <div className="border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[16px] bg-[hsl(var(--slide-gold)/0.04)]">
          <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] mb-[5px]">Без бюджета - раздай 30-50 мелким</p>
          <p className="text-[15px] text-[hsl(var(--slide-text)/0.8)] leading-[1.45]">Бесплатный доступ за честный отзыв. Опубликуют 20-30%, это норма.</p>
        </div>
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[26px] py-[14px] max-w-[1900px]">
        <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Формат, который продаёт: <span className="font-semibold">показ экрана «задача решена за 30 секунд»</span>, а не обзор продукта и не рассказ о фичах.
        </p>
      </div>
    </div>
  );
}
