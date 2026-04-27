import { useIsMobile } from "@/hooks/use-mobile";

const items = [
  { title: "Пустой dashboard", why: "Юзер заходит в «выберите что-нибудь» — и закрывает вкладку.", fix: "Pre-filled sample или один очевидный CTA на первое действие." },
  { title: "Регистрация до value", why: "Email + пароль до того, как юзер увидел, что ты делаешь = -40% активаций.", fix: "Покажи продукт сначала. Регистрация — на сохранении результата." },
  { title: "Tutorial-стрелочки на 8 шагов", why: "Юзер кликает «Skip» → попадает в первый экран без памяти, что ему показали.", fix: "Учи внутри действия (tooltip на пустом поле), не до него." },
  { title: "Длинный wizard перед результатом", why: "10 настроек до первой пользы. Юзер устаёт раньше, чем доходит.", fix: "Defaults на всё. Настройки — после того, как юзер увидел, ради чего они." },
  { title: "Generic welcome email", why: "«Welcome to <Product>! Click here to get started» = ничего. Открыли 12%, кликнули 2%.", fix: "Письмо отвечает на «что ты сделал последний раз и что делать дальше»." },
  { title: "Метрика «register» как успех", why: "Регистрация ≠ активация. Можно иметь 1000 регистраций и 5 живых юзеров.", fix: "Метрика = % дошедших до первого результата. Всё остальное — vanity." },
];

export default function M7Slide08bAntiPatterns() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[14px] py-[14px]">
        <p className="text-[8px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">Anti-patterns onboarding</p>
        <h2 className="font-display text-[15px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[8px]">
          6 ловушек, в которые падают почти все.
        </h2>
        <div className="space-y-[4px]">
          {items.map((it, i) => (
            <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.18)] rounded-[5px] px-[8px] py-[5px]">
              <p className="text-[9px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[1px]">{i + 1}. {it.title}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35]"><span className="uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">Почему плохо: </span>{it.why}</p>
              <p className="text-[7.5px] text-[hsl(var(--slide-text))] leading-[1.35] mt-[1px]"><span className="uppercase tracking-[0.1em] text-[hsl(var(--slide-gold))]">Что вместо: </span>{it.fix}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[50px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">Anti-patterns onboarding</p>
      <h2 className="font-display text-[44px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[28px]">
        6 ловушек, в которые падают почти все.
      </h2>
      <div className="grid grid-cols-3 gap-[16px] max-w-[1750px]">
        {items.map((it, i) => (
          <div key={i} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[22px] py-[18px]">
            <p className="text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.2] mb-[10px]">{i + 1}. {it.title}</p>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px]">Почему плохо</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text-muted))] leading-[1.45] mb-[10px]">{it.why}</p>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[3px]">Что вместо</p>
            <p className="text-[14.5px] text-[hsl(var(--slide-text))] leading-[1.45]">{it.fix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
