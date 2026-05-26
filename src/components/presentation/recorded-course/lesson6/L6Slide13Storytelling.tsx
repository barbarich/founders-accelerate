import { useIsMobile } from "@/hooks/use-mobile";

export default function L6Slide13Storytelling() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
        <div className="text-center px-[30px]">
          <div className="w-[40px] h-[40px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[16px]">
            <span className="font-mono text-[18px] text-[hsl(var(--slide-gold))]">2</span>
          </div>
          <h2 className="font-display text-[36px] font-bold text-[hsl(var(--slide-text))] leading-tight mb-[12px]">
            Сторителлинг
          </h2>
          <p className="text-[13px] text-[hsl(var(--slide-text-muted))] leading-[1.45]">
            Посты · Видео · История, которую пересказывают
          </p>
          <div className="w-[30px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[16px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex items-center justify-center">
      <div className="text-center">
        <div className="w-[80px] h-[80px] rounded-full border-2 border-[hsl(var(--slide-gold)/0.3)] flex items-center justify-center mx-auto mb-[48px]">
          <span className="font-mono text-[32px] text-[hsl(var(--slide-gold))]">2</span>
        </div>
        <h2 className="font-display text-[72px] font-bold text-[hsl(var(--slide-text))] leading-tight">
          Сторителлинг
        </h2>
        <p className="text-[28px] text-[hsl(var(--slide-text-muted))] mt-[24px]">
          Посты · Видео · История, которую пересказывают
        </p>
        <div className="w-[60px] h-[2px] bg-[hsl(var(--slide-gold))] mx-auto mt-[48px]" />
      </div>
    </div>
  );
}
