import { useIsMobile } from "@/hooks/use-mobile";

const moats = [
  { t: "Глубина в workflow", d: "Встроен в реальный рабочий процесс, а не «ещё одна вкладка»" },
  { t: "Проприетарные данные", d: "Использование создаёт данные, которые улучшают продукт" },
  { t: "Интеграции", d: "Подключён к системам, где уже лежат данные клиента" },
  { t: "Надёжность", d: "Измеримый результат там, где general AI ошибается" },
  { t: "Дистрибуция", d: "Ты дотягиваешься до клиента дешевле и быстрее других" },
  { t: "Доверие · комплаенс", d: "Приватность, регуляции, ответственность за исход" },
  { t: "Владение результатом", d: "Отвечаешь за результат, а не «дал ответ — дальше сам»" },
];

export default function M12Slide05AIPremium() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">
          🔴 Главный сдвиг 2026
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.12] mb-[6px]">
          За «.ai» больше не платят 2x. <span className="text-[hsl(var(--slide-gold))]">Платят за защищённость.</span>
        </h2>
        <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-2 border-[hsl(var(--slide-gold))] px-[10px] py-[6px] mb-[8px]">
          <p className="text-[9.5px] text-[hsl(var(--slide-text))] leading-[1.4]">
            Инвестор смотрит первым делом на защиту от копирования: её вес в оценке вырос с 15% до <span className="font-bold text-[hsl(var(--slide-gold))]">30-40%</span>. Твой код — не защита: тот же AI-API есть у всех.
          </p>
        </div>
        <p className="text-[8px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px]">7 источников защиты</p>
        <div className="grid grid-cols-2 gap-[3px]">
          {moats.map((m) => (
            <div key={m.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[4px] px-[6px] py-[3px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{m.t}</p>
              <p className="text-[6.5px] text-[hsl(var(--slide-text-muted))] leading-[1.3]">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] mt-[6px]">
          В питч — одна строка: почему это не повторят за выходные.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">
        🔴 Главный сдвиг 2026
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[16px] tracking-[-0.02em] max-w-[1700px]">
        За «.ai» больше не платят 2x. <span className="text-[hsl(var(--slide-gold))]">Платят за защищённость.</span>
      </h2>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[30px] py-[16px] max-w-[1700px] mb-[20px]">
        <p className="text-[22px] text-[hsl(var(--slide-text))] leading-[1.4]">
          Раньше инвестор смотрел на продукт. Теперь первым делом — на защиту от копирования: её вес в оценке вырос с 15% до <span className="font-bold text-[hsl(var(--slide-gold))]">30-40%</span>. Твой код защитой не считается — тот же AI-API есть у всех.
        </p>
      </div>
      <p className="text-[15px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] mb-[10px]">7 источников реальной защиты</p>
      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[8px] max-w-[1700px] mb-[16px]">
        {moats.map((m) => (
          <div key={m.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[10px] px-[20px] py-[10px]">
            <p className="text-[18px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[1px]">{m.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{m.d}</p>
          </div>
        ))}
      </div>
      <p className="text-[20px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4] max-w-[1700px]">
        В питч добавь одну строку: почему это не повторят за выходные. Без неё в 2026 не закрывают.
      </p>
    </div>
  );
}
