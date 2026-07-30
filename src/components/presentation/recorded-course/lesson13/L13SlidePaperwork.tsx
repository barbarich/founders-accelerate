import { useIsMobile } from "@/hooks/use-mobile";

const pack = [
  { t: "Договор на 2 страницы", d: "твой собственный, короткий и понятный. Малый бизнес подписывает его без юриста — и это ускоряет сделку на недели." },
  { t: "Счёт и реквизиты", d: "правильное название компании, VAT, срок оплаты. Ошибка в реквизитах = ещё один круг согласования." },
  { t: "Что с данными (GDPR)", d: "одна страница: какие данные храним, где, сколько, кому передаём. Плюс шаблон соглашения об обработке данных." },
  { t: "Ответы про безопасность", d: "10 частых вопросов с готовыми ответами: доступы, резервные копии, шифрование, кто из команды видит данные." },
];

const watch = [
  "Ответственность — на какую сумму ты отвечаешь, если что-то сломается",
  "Срок оплаты — 30 дней или 90: это твои оборотные деньги",
  "Автопродление и выход — как расторгается и за сколько предупреждают",
];

export default function L13SlidePaperwork() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          Когда доходит до бумаг
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Собери пакет один раз — <span className="text-[hsl(var(--slide-gold))]">и выигрывай недели на каждой сделке</span>
        </h2>
        <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.4]">
          Сделки в Европе часто умирают не на цене, а в самом конце: попросили документы, а у тебя их нет — и всё встало на месяц.
        </p>
        <div className="space-y-[3px] mb-[6px]">
          {pack.map((p, i) => (
            <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[3px]">
              <div className="flex items-baseline gap-[5px]">
                <span className="text-[9px] font-bold text-[hsl(var(--slide-gold))]">{i + 1}</span>
                <span className="text-[8.5px] font-bold text-[hsl(var(--slide-text))]">{p.t}</span>
              </div>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4] ml-[14px]">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.4] mb-[2px]">
            Прислали свой договор на 40 страниц — не подписывай «как есть». Три места, куда смотреть:
          </p>
          {watch.map((w) => (
            <p key={w} className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">· {w}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        Когда доходит до бумаг
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[12px] tracking-[-0.02em] max-w-[1700px]">
        Собери пакет один раз — <span className="text-[hsl(var(--slide-gold))]">и выигрывай недели на каждой сделке</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[22px] max-w-[1700px] leading-[1.45]">
        В Европе сделки часто умирают не на цене, а в самом конце: у тебя попросили документы, а их нет — и всё встало на месяц, пока интерес остывает.
      </p>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[12px] max-w-[1700px] mb-[20px]">
        {pack.map((p, i) => (
          <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[16px]">
            <div className="flex items-baseline gap-[14px] mb-[4px]">
              <span className="font-display text-[30px] font-bold text-[hsl(var(--slide-gold))] leading-none">{i + 1}</span>
              <p className="text-[23px] font-bold text-[hsl(var(--slide-text))]">{p.t}</p>
            </div>
            <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.45] ml-[44px]">{p.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[32px] py-[18px] max-w-[1700px]">
        <p className="text-[24px] font-bold text-[hsl(var(--slide-text))] leading-[1.3] mb-[6px]">
          Прислали свой договор на 40 страниц — не подписывай «как есть». Три места, куда смотреть в первую очередь:
        </p>
        {watch.map((w) => (
          <p key={w} className="text-[19px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">· {w}</p>
        ))}
      </div>
    </div>
  );
}
