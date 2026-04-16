import { useIsMobile } from "@/hooks/use-mobile";

const actions = [
  {
    num: "1",
    title: "Опиши проблему словами",
    body: "Не нужно знать код. Напиши что ты делал, что ожидал, что получил. Claude поймёт.",
    artifact: "Я делаю X. Ожидаю Y. Получаю Z. Что не так?",
  },
  {
    num: "2",
    title: "Вставь скриншот ошибки",
    body: "Claude читает картинки. Скопируй экран с ошибкой прямо в чат — он увидит всё.",
    artifact: "[вставь скриншот] + «что здесь происходит?»",
  },
  {
    num: "3",
    title: "Попроси пошаговый план с ссылками",
    body: "Claude даёт инструкцию уровня «нажми сюда, вставь это». Со ссылками на документацию.",
    artifact: "Дай пошаговый план что сделать. Со ссылками. Я не разработчик.",
  },
  {
    num: "4",
    title: "1 задача = 1 новое окно",
    body: "Длинный чат путает Claude — он теряет контекст. Новая задача → новый чат → чистый фокус.",
    artifact: "Cmd+N → новый чат для каждой новой задачи",
  },
];

export default function M5Slide11P2Debug() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[20px]">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[3px]">
          Когда застрял
        </p>
        <h2 className="font-display text-[20px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[3px]">
          Спрашивай Клода. Он знает всё.
        </h2>
        <p className="text-[8.5px] text-[hsl(var(--slide-text-muted))] mb-[8px] leading-[1.4]">
          Claude объяснит так, что разберётся даже тот, кто никогда не писал код.
        </p>
        <div className="space-y-[5px]">
          {actions.map((a) => (
            <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[6px] px-[9px] py-[6px]">
              <div className="flex items-center gap-[5px] mb-[2px]">
                <span className="font-mono text-[8px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[14px] h-[14px] flex items-center justify-center rounded-full font-bold shrink-0">{a.num}</span>
                <p className="text-[9.5px] font-bold text-[hsl(var(--slide-text))] leading-[1.2]">{a.title}</p>
              </div>
              <p className="text-[7.5px] text-[hsl(var(--slide-text-muted))] leading-[1.35] mb-[3px]">{a.body}</p>
              <span className="inline-block text-[7px] font-mono text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.1)] border border-[hsl(var(--slide-gold)/0.25)] px-[5px] py-[1.5px] rounded-[3px] leading-[1.4]">{a.artifact}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[100px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[10px]">
        Когда застрял
      </p>
      <h2 className="font-display text-[54px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[8px]">
        Спрашивай Клода. Он знает всё.
      </h2>
      <p className="text-[20px] text-[hsl(var(--slide-text-muted))] mb-[28px] max-w-[1200px]">
        Claude объяснит так, что разберётся даже тот, кто никогда не писал код. Главное — спрашивать правильно.
      </p>

      <div className="grid grid-cols-4 gap-[16px] max-w-[1500px]">
        {actions.map((a) => (
          <div key={a.num} className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-border)/0.3)] rounded-[12px] px-[20px] py-[18px] flex flex-col">
            <span className="font-mono text-[15px] text-[hsl(var(--slide-gold))] bg-[hsl(var(--slide-gold)/0.15)] w-[30px] h-[30px] flex items-center justify-center rounded-full font-bold mb-[10px]">{a.num}</span>
            <p className="text-[19px] font-bold text-[hsl(var(--slide-text))] leading-[1.25] mb-[10px]">{a.title}</p>
            <p className="text-[14px] text-[hsl(var(--slide-text-muted))] leading-[1.5] mb-[14px]">{a.body}</p>
            <div className="mt-auto bg-[hsl(var(--slide-bg))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[8px] px-[12px] py-[8px]">
              <p className="text-[12px] font-mono text-[hsl(var(--slide-gold)/0.9)] leading-[1.5]">{a.artifact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
