import { useIsMobile } from "@/hooks/use-mobile";

const qrRules = [
  { rule: "1 QR = 1 действие", d: "Не «выбери что нужно». Один QR — одна цель: скачать / waitlist / book demo." },
  { rule: "QR в момент крючка", d: "Не в конце «спасибо за внимание». В середине — когда зал на пике внимания, после кейса." },
  { rule: "Социальное давление работает на тебя", d: "«Скачивание займёт 10 секунд, у вас перед глазами я ещё 5 минут говорю — успеете». Зал скачивает, потому что все скачивают." },
  { rule: "Короткий URL под QR", d: "Дублируй URL текстом под QR — кто не успел сфоткать, запишет вручную. Используй memorable домен." },
];

const stageHow = [
  { path: "Side-stages / lightning talks", how: "У больших конференций десятки слотов помимо main stage. Подача через CFP за 4–6 месяцев." },
  { path: "Нишевые meetups", how: "PropTech / Pet-tech / QA-conferences пускают почти всех с релевантной экспертизой. Локально — твой первый шаг." },
  { path: "Bring-your-customer формат", how: "Выступаешь вместе с клиентом, не один. Конференции это любят — кейс, а не маркетинг." },
  { path: "Подкасты как «сцена 2.0»", how: "Гость на 5 нишевых подкастах = аудитория сцены 500-человечного зала. Без билета и travel." },
];

export default function M11Slide10StageQR() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          🔥 Сцена · канал #1
        </p>
        <h2 className="font-display text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[5px]">
          Спикер = warm authority.<br /><span className="text-[hsl(var(--slide-gold))]">Доверие выдано до того, как ты начал.</span>
        </h2>
        <p className="text-[8px] text-[hsl(var(--slide-text-muted))] mb-[6px] leading-[1.45]">
          Холл = холодный контакт. Сцена = в 10× горячее. Кейс MetaMinder: одно 20-минутное выступление = десятки скачиваний по QR в реальном времени + забуканные демо на следующую неделю.
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] rounded-[4px] px-[7px] py-[4px] mb-[5px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">QR-механика</p>
          {qrRules.map((q, i) => (
            <p key={i} className="text-[7.5px] text-[hsl(var(--slide-text)/0.9)] leading-[1.4]">
              <span className="font-semibold">· {q.rule}.</span> {q.d}
            </p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[7px] py-[4px]">
          <p className="text-[8px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.1em] mb-[2px]">Как попасть на сцену в 2026</p>
          {stageHow.map((s, i) => (
            <p key={i} className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.4]">
              <span className="text-[hsl(var(--slide-text))] font-semibold">· {s.path}.</span> {s.how}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        🔥 Сцена · канал #1
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[14px] tracking-[-0.02em]">
        Спикер = warm authority. <span className="text-[hsl(var(--slide-gold))]">Доверие выдано до того, как ты начал говорить.</span>
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[24px] max-w-[1700px] leading-[1.45]">
        Холл = холодный контакт. Сцена = в 10× горячее. Кейс MetaMinder: одно 20-минутное выступление на нишевом эвенте — десятки скачиваний по QR в реальном времени + забуканные демо на следующую неделю.
      </p>
      <div className="grid grid-cols-2 gap-[20px] max-w-[1700px]">
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] rounded-[10px] px-[24px] py-[16px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">QR-механика</p>
          {qrRules.map((q, i) => (
            <p key={i} className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] mb-[5px]">
              <span className="font-semibold text-[hsl(var(--slide-text))]">· {q.rule}.</span> {q.d}
            </p>
          ))}
        </div>
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[24px] py-[16px]">
          <p className="text-[14px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.15em] mb-[10px]">Как попасть на сцену без громкого имени</p>
          {stageHow.map((s, i) => (
            <p key={i} className="text-[16px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[5px]">
              <span className="text-[hsl(var(--slide-text))] font-semibold">· {s.path}.</span> {s.how}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
