interface SlideTimelineProps {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
  index: number;
  imageContain?: boolean;
  bottomBanner?: string;
}

export default function SlideTimeline({ period, title, subtitle, description, highlight, image, index, imageContain, bottomBanner }: SlideTimelineProps) {
  const isEven = index % 2 === 0;
  const imgClass = imageContain
    ? "w-full h-full object-contain"
    : "w-full h-full object-cover";

  return (
    <div className="w-full h-full bg-[hsl(var(--slide-bg))] flex flex-col">
      <div className="flex-1 flex min-h-0">
        {isEven ? (
          <>
            <div className="w-[820px] h-full relative flex items-center justify-center overflow-hidden">
              {imageContain && <div className="absolute inset-0 bg-[hsl(var(--slide-bg-alt))]" />}
              <img src={image} alt={title} className={`relative z-[1] ${imgClass}`} />
              <div className="absolute inset-0 z-[2] bg-gradient-to-r from-transparent via-transparent to-[hsl(var(--slide-bg))]" />
            </div>
            <div className="flex-1 flex flex-col justify-center px-[100px]">
              <TimelineContent period={period} title={title} subtitle={subtitle} description={description} highlight={highlight} />
            </div>
          </>
        ) : (
          <>
            <div className="flex-1 flex flex-col justify-center px-[100px]">
              <TimelineContent period={period} title={title} subtitle={subtitle} description={description} highlight={highlight} />
            </div>
            <div className="w-[820px] h-full relative flex items-center justify-center overflow-hidden">
              {imageContain && <div className="absolute inset-0 bg-[hsl(var(--slide-bg-alt))]" />}
              <img src={image} alt={title} className={`relative z-[1] ${imgClass}`} />
              <div className="absolute inset-0 z-[2] bg-gradient-to-l from-transparent via-transparent to-[hsl(var(--slide-bg))]" />
            </div>
          </>
        )}
      </div>
      {bottomBanner && (
        <div className="w-full py-[20px] bg-[hsl(var(--slide-gold))] text-center">
          <span className="text-[28px] font-bold text-[hsl(var(--slide-bg))] tracking-wide">{bottomBanner}</span>
        </div>
      )}
    </div>
  );
}

function TimelineContent({ period, title, subtitle, description, highlight }: Omit<SlideTimelineProps, 'image' | 'index' | 'imageContain'>) {
  return (
    <>
      <p className="text-[18px] font-mono tracking-[0.15em] text-[hsl(var(--slide-gold))] mb-[16px]">{period}</p>
      <h2 className="text-[72px] font-bold text-[hsl(var(--slide-text))] leading-[1.1] mb-[12px]">{title}</h2>
      <p className="text-[24px] text-[hsl(var(--slide-gold)/0.8)] font-medium mb-[40px]">{subtitle}</p>
      <div className="w-[60px] h-[1px] bg-[hsl(var(--slide-border))] mb-[32px]" />
      <p className="text-[22px] text-[hsl(var(--slide-text)/0.8)] leading-[1.6] mb-[40px] max-w-[600px]">{description}</p>
      <div className="inline-flex items-center gap-[12px] px-[24px] py-[14px] border border-[hsl(var(--slide-gold)/0.3)] rounded-[4px] bg-[hsl(var(--slide-gold)/0.05)]">
        <div className="w-[6px] h-[6px] rounded-full bg-[hsl(var(--slide-gold))]" />
        <span className="text-[20px] text-[hsl(var(--slide-gold))] font-medium">{highlight}</span>
      </div>
    </>
  );
}
