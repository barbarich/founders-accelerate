import FOM3SlideBase from "./FOM3SlideBase";

const steps = [
  {
    num: "1",
    title: "Покупаешь домен на GoDaddy",
    body: "$10–15 в год. Любая зона: .com / .ai / .io / .co. Имя — из формулы позиционирования или название продукта. Долго не выбирай: домен меняется, продукт — нет.",
  },
  {
    num: "2",
    title: "В Lovable → Settings → Domains → Connect",
    body: "Вводишь свой домен. Lovable показывает кнопку one-click интеграции с GoDaddy. Никаких А-записей и CNAME руками — Lovable пропишет сам.",
  },
  {
    num: "3",
    title: "GoDaddy: одна кнопка «Authorize»",
    body: "Lovable открывает GoDaddy в новой вкладке. Логинишься. Одна кнопка «Подтвердить» — и DNS-записи + SSL поднимаются автоматически.",
  },
  {
    num: "4",
    title: "Через минуту сайт live на твоём домене",
    body: "Возвращаешься в Lovable — статус Connected. Открываешь URL на телефоне без VPN, без incognito — лендинг работает. HTTPS уже стоит.",
  },
];

export default function FOM3Slide18Publish() {
  return (
    <FOM3SlideBase
      slide={18}
      eyebrow="Publish · от превью к живой ссылке"
      title={
        <>
          GoDaddy → одна кнопка → <span className="text-[hsl(var(--slide-gold))]">сайт live за минуту</span>
        </>
      }
      subtitle="Этот шаг закрывает ДЗ-пункт «ссылка живая, открывается без VPN». Без него лендинг не существует для клиента."
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[8px] md:gap-[16px] max-w-[1800px] text-[12px] md:text-[20px]">
        {steps.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] md:rounded-[14px] px-[12px] md:px-[22px] py-[10px] md:py-[20px] flex flex-col">
            <span className="font-mono text-[12px] md:text-[18px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[24px] md:w-[36px] h-[24px] md:h-[36px] flex items-center justify-center rounded-full font-bold mb-[8px] md:mb-[14px]">
              {s.num}
            </span>
            <p className="font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px] md:mb-[10px]">{s.title}</p>
            <p className="text-[hsl(var(--slide-text-muted))] leading-[1.45] text-[11px] md:text-[16px]">{s.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-[10px] md:mt-[20px] border-l-[4px] border-[hsl(var(--slide-gold))] pl-[12px] md:pl-[16px] max-w-[1800px] text-[11px] md:text-[20px]">
        <p>💡 Можно публиковаться сразу на «.lovable.app» поддомене — но кастомный домен = больше доверия, выше CTR в outreach и реклама не банит за «временные хосты».</p>
      </div>
    </FOM3SlideBase>
  );
}
