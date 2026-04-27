import { useIsMobile } from "@/hooks/use-mobile";

const types = [
  { title: "Когнитивное", desc: "Юзер не понял, что от него хотят.", marker: "Пауза >3 сек, скроллит туда-сюда, читает дважды.", example: "Linear — пустой проект без подсказки, что делать первым." },
  { title: "Интерфейсное", desc: "Кнопка не там, поле не очевидно, цвет сливается.", marker: "Промахи мышью, тап мимо, ищет глазами.", example: "Старые формы Jira — обязательные поля без маркировки." },
  { title: "Эмоциональное", desc: "Стыдно, страшно, неловко.", marker: "Бросает на регистрации, оплате, личном вопросе.", example: "Дейтинг-апп — фото-аплоад без preview." },
  { title: "Контекстное", desc: "Продукт требует то, чего у юзера сейчас нет.", marker: "«У меня нет под рукой… вернусь потом» = не вернётся.", example: "Banking app — KYC с паспортом сразу при первом входе." },
  { title: "Доверия", desc: "Не понятно, что произойдёт после клика.", marker: "Hover над кнопкой 5 секунд без клика.", example: "Stripe Checkout — кнопка «Pay $99» с чёткой суммой и логикой." },
];

export default function M7Slide09FrictionTypes() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Friction audit</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">
          5 типов трения. Каждое ловится в записи экрана.
        </h2>
        <div className="space-y-[4px]">
          {types.map((t, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[5px] px-[8px] py-[5px]">
              <div className="flex gap-[4px] items-baseline mb-[1px]">
                <span className="text-[7px] font-mono text-[hsl(var(--slide-gold))]">0{i + 1}</span>
                <p className="text-[9px] font-semibold text-[hsl(var(--slide-text))]">{t.title}</p>
              </div>
              <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{t.desc}</p>
              <p className="text-[7px] text-[hsl(var(--slide-gold))] mt-[1px] leading-[1.35]"><span className="uppercase tracking-[0.1em]">Маркер:</span> {t.marker}</p>
            </div>
          ))}
        </div>
        <p className="text-[8px] text-[hsl(var(--slide-gold))] font-semibold mt-[6px] leading-[1.4]">
          Не записывали экран — не видели friction. Догадки не считаются.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[70px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Friction audit</p>
      <h2 className="font-display text-[42px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        5 типов трения. Каждое ловится в записи экрана.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] mb-[20px]">
        {types.slice(0, 3).map((t, i) => (
          <FrictionCard key={i} idx={i} {...t} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[16px] mb-[24px]">
        {types.slice(3).map((t, i) => (
          <FrictionCard key={i + 3} idx={i + 3} {...t} />
        ))}
        <div className="bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold))] rounded-[12px] px-[24px] py-[20px] flex items-center">
          <p className="text-[18px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
            Не записывали экран юзера — не видели friction. Никогда. Догадки не считаются.
          </p>
        </div>
      </div>
    </div>
  );
}

function FrictionCard({ idx, title, desc, marker, example }: { idx: number; title: string; desc: string; marker: string; example: string }) {
  return (
    <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[18px]">
      <div className="flex gap-[10px] items-baseline mb-[8px]">
        <span className="text-[16px] font-mono text-[hsl(var(--slide-gold))]">0{idx + 1}</span>
        <p className="text-[22px] font-semibold text-[hsl(var(--slide-text))]">{title}</p>
      </div>
      <p className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[8px]">{desc}</p>
      <p className="text-[12px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Маркер</p>
      <p className="text-[14px] text-[hsl(var(--slide-text))] leading-[1.4] mb-[8px]">{marker}</p>
      <p className="text-[12px] text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[2px]">Пример</p>
      <p className="text-[13px] text-[hsl(var(--slide-text-muted))] italic leading-[1.4]">{example}</p>
    </div>
  );
}