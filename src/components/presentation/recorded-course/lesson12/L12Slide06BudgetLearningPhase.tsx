import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  { num: "$20–30", t: "Минимальный дневной бюджет на старте. Меньше — алгоритм не наберёт данных за неделю.", src: "Meta · best practice" },
  { num: "50", t: "Конверсий за 7 дней — точка выхода из learning phase. Только после этого можно оптимизировать.", src: "Meta · официальная норма" },
  { num: "7 дней", t: "Длина learning phase. В это время кампанию не трогаешь — каждое изменение сбрасывает обучение.", src: "Andromeda docs" },
];

const principles = [
  { t: "Бюджет на ad set, не на кампанию", body: "На старте CBO выключена. Контроль бюджета у тебя на уровне группы объявлений." },
  { t: "Daily вместо Lifetime", body: "Lifetime — только если есть жёсткий дедлайн (распродажа, ивент). По умолчанию — daily $20–30." },
  { t: "Spend limits на аккаунте", body: "Страховка от случайного слива. Ставим лимит на день и месяц." },
  { t: "Не масштабируешь раньше 50 конверсий", body: "Увидел дешёвый CPA на 5-й день? Не радуйся. До 50 событий статистика врёт." },
];

export default function L12Slide06BudgetLearningPhase() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[18px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[6px]">
          Бюджет и learning phase
        </p>
        <h2 className="font-display text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[6px]">
          Сколько вкладывать <span className="text-[hsl(var(--slide-gold))]">и почему первые 7 дней — не трогать</span>
        </h2>
        <div className="grid grid-cols-3 gap-[5px] mb-[6px]">
          {stats.map((s) => (
            <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[6px] px-[6px] py-[6px]">
              <div className="text-[12px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05]">{s.num}</div>
              <div className="text-[7px] text-[hsl(var(--slide-text)/0.85)] leading-[1.35] mt-[2px]">{s.t}</div>
              <div className="text-[6px] text-[hsl(var(--slide-text-muted))] mt-[2px] uppercase tracking-[0.08em]">{s.src}</div>
            </div>
          ))}
        </div>
        <p className="text-[8.5px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.12em] mb-[3px]">Четыре принципа</p>
        <div className="grid grid-cols-2 gap-[4px]">
          {principles.map((p) => (
            <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[5px] px-[7px] py-[4px]">
              <p className="text-[8px] font-bold text-[hsl(var(--slide-text))]">{p.t}</p>
              <p className="text-[7px] text-[hsl(var(--slide-text-muted))] leading-[1.35]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[140px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[14px]">
        Бюджет и learning phase
      </p>
      <h2 className="font-display text-[50px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[22px] tracking-[-0.02em]">
        Сколько вкладывать <span className="text-[hsl(var(--slide-gold))]">и почему первые 7 дней — не трогать</span>
      </h2>
      <div className="grid grid-cols-3 gap-[20px] mb-[22px] max-w-[1700px]">
        {stats.map((s) => (
          <div key={s.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[14px] px-[26px] py-[20px]">
            <div className="font-display text-[42px] font-bold text-[hsl(var(--slide-gold))] leading-[1.05] mb-[10px]">{s.num}</div>
            <div className="text-[16px] text-[hsl(var(--slide-text)/0.9)] leading-[1.45] mb-[10px]">{s.t}</div>
            <div className="text-[12px] text-[hsl(var(--slide-text-muted))] uppercase tracking-[0.12em]">{s.src}</div>
          </div>
        ))}
      </div>
      <p className="text-[15px] font-bold text-[hsl(var(--slide-gold))] uppercase tracking-[0.18em] mb-[12px]">Четыре принципа на этапе настройки</p>
      <div className="grid grid-cols-4 gap-[16px] max-w-[1700px]">
        {principles.map((p) => (
          <div key={p.t} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.3)] rounded-[12px] px-[20px] py-[14px]">
            <p className="text-[16px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[6px]">{p.t}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
