import { useRef, useEffect, useState, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface RotatedScaledSlideProps {
  children: ReactNode;
  className?: string;
  /** When true, the desktop 1920x1080 slide is rotated 90deg on mobile to fill the viewport in landscape orientation. */
  rotateOnMobile?: boolean;
}

const SLIDE_W = 1920;
const SLIDE_H = 1080;

/**
 * Pitch1-only scaler. On desktop behaves like ScaledSlide (contain-fit 1920x1080).
 * On mobile it rotates the slide 90deg so the 16:9 deck reads naturally on a portrait phone
 * (user holds phone normally, content appears in landscape).
 */
export default function RotatedScaledSlide({ children, className = "", rotateOnMobile = true }: RotatedScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isMobile = useIsMobile();
  const shouldRotate = isMobile && rotateOnMobile;

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      // When rotated, the slide's effective width occupies container height and vice versa.
      const effW = shouldRotate ? h : w;
      const effH = shouldRotate ? w : h;
      setScale(Math.min(effW / SLIDE_W, effH / SLIDE_H));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [shouldRotate]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="slide-wrapper slide-content"
        style={{
          transform: shouldRotate
            ? `rotate(90deg) scale(${scale})`
            : `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}