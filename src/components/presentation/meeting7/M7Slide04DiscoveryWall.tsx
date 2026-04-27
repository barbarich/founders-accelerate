import { useIsMobile } from "@/hooks/use-mobile";

const people = ["Laura", "Mila", "Vlad", "Lea", "Inna + Aleksandra"];

function Card({ name, compact }: { name: string; compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.2)] rounded-[6px] px-[10px] py-[7px]">
        <p className="text-[10px] font-semibold text-[hsl(var(--slide-text))] mb-[4px]">{name}</p>
        <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">Метрика</p>
        <p className="text-[9px] font-mono text-[hsl(var(--slide-text-muted))] mb-[3px]">[X из Y дошли до 1-го результата]</p>
        <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">Точка выпадения</p>
        <p className="text-[9px] font-mono text-[hsl(var(--slide-text-muted))] mb-[3px]">[экран / шаг / момент]</p>
        <p className="text-[8px] uppercase tracking-[0.12em] text-[hsl(var(--slide-gold))]">Цитата юзера</p>
        <p className="text-[9px] italic text-[hsl(var(--slide-text-muted))] leading-[1.35]">«___»</p>
      </div>
    );
  }
  return (
    <div className="bg-[hsl(var(--slide-bg-alt))] border border-[hsl(var(--slide-gold)/0.25)] rounded-[12px] px-[20px] py-[18px]">
      <p className="text-[20px] font-semibold text-[hsl(var(--slide-text))] mb-[14px]">{name}</p>
      <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">Метрика</p>
      <p className="text-[15px] font-mono text-[hsl(var(--slide-text-muted))] mb-[10px]">[X из Y дошли до 1-го результата]</p>
      <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">Точка выпадения</p>
      <p className="text-[15px] font-mono text-[hsl(var(--slide-text-muted))] mb-[10px]">[экран / шаг / момент]</p>
      <p className="text-[11px] uppercase tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[2px]">Цитата юзера</p>
      <p className="text-[15px] italic text-[hsl(var(--slide-text-muted))] leading-[1.4]">«___»</p>
    </div>
  );
}

export default function M7Slide04DiscoveryWall() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[16px] py-[20px]">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[4px]">Что показали живые юзеры</p>
        <h2 className="font-display text-[22px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[10px]">
          5 человек — 5 правд.
        </h2>
        <div className="grid grid-cols-1 gap-[6px]">
          {people.map((p) => <Card key={p} name={p} compact />)}
        </div>
        <p className="text-[9px] text-[hsl(var(--slide-gold))] font-semibold mt-[8px] leading-[1.4]">
          Кто не цифрами — мягко возвращаю: «Что показали юзеры? Цифру или цитату.»
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col justify-center px-[80px] py-[60px]">
      <p className="text-[18px] uppercase tracking-[0.2em] text-[hsl(var(--slide-gold))] font-medium mb-[12px]">Что показали живые юзеры</p>
      <h2 className="font-display text-[60px] font-bold text-[hsl(var(--slide-text))] leading-[1.05] mb-[36px]">
        5 человек — 5 правд.
      </h2>
      <div className="grid grid-cols-5 gap-[18px] mb-[28px]">
        {people.map((p) => <Card key={p} name={p} />)}
      </div>
      <p className="text-[22px] text-[hsl(var(--slide-gold))] font-semibold leading-[1.4]">
        Если кто-то рассказывает не цифрами — мягко возвращаю: «Что показали юзеры? Цифру или цитату.»
      </p>
    </div>
  );
}