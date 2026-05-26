import { useIsMobile } from "@/hooks/use-mobile";

export default function L6Slide02MainThesis() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
          Главный тезис урока
        </p>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border-l-[3px] border-[hsl(var(--slide-gold))] px-[14px] py-[12px] mb-[12px]">
          <p className="text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.3]">
            «Claude — это твоя <span className="text-[hsl(var(--slide-gold))]">команда из одного человека</span>. Разработчик, дизайнер и тестировщик в одной программе.»
          </p>
        </div>
        <p className="text-[10px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[10px]">
          В мини-курсе ты узнал, что такое Claude и как с ним работать. Этот урок — как из него выжать всё. После урока ты будешь работать с Claude как с командой, а не как с поиском в Google.
        </p>
        <div className="grid grid-cols-2 gap-[6px]">
          <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[5px] px-[8px] py-[5px]">
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-text-muted))] font-bold mb-[1px]">Раньше</p>
            <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">Открываешь Claude, описываешь задачу с нуля. Каждый раз заново.</p>
          </div>
          <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[5px] px-[8px] py-[5px]">
            <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))] font-bold mb-[1px]">После урока</p>
            <p className="text-[8px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">Claude знает твой проект. Сразу делает то, что надо, в твоём стиле.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[20px]">
        Главный тезис урока
      </p>
      <div className="bg-[hsl(var(--slide-gold)/0.1)] border-l-[4px] border-[hsl(var(--slide-gold))] px-[40px] py-[36px] max-w-[1600px] mb-[28px]">
        <p className="text-[48px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">
          «Claude — это твоя <span className="text-[hsl(var(--slide-gold))]">команда из одного человека</span>. Разработчик, дизайнер и тестировщик в одной программе.»
        </p>
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-text-muted))] mt-[4px] leading-[1.45] max-w-[1500px] mb-[28px]">
        В мини-курсе ты узнал, что такое Claude и как с ним работать. Этот урок — про то, как из него выжать всё. После урока ты работаешь с Claude как с командой, а не как с поиском.
      </p>

      <div className="grid grid-cols-2 gap-[24px] max-w-[1600px]">
        <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-text-muted))] font-bold mb-[10px]">Как ты работаешь сейчас</p>
          <p className="text-[18px] text-[hsl(var(--slide-text-muted))] leading-[1.5]">
            Открываешь Claude, описываешь задачу с нуля. Каждый раз объясняешь свой проект заново. Получаешь общие ответы.
          </p>
        </div>
        <div className="bg-[hsl(var(--slide-gold)/0.08)] border border-[hsl(var(--slide-gold)/0.4)] rounded-[12px] px-[28px] py-[22px]">
          <p className="text-[14px] uppercase tracking-[0.18em] text-[hsl(var(--slide-gold))] font-bold mb-[10px]">Как ты будешь работать после</p>
          <p className="text-[18px] text-[hsl(var(--slide-text))] leading-[1.5]">
            Claude знает твой проект, стек, стиль. Сразу делает то, что надо. Сам ходит в Stripe и базу данных. Сам ищет свои ошибки.
          </p>
        </div>
      </div>
    </div>
  );
}
