import { useRef, useEffect, useState, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

const SLIDE_W = 1920;
const SLIDE_H = 1080;
const SLIDE_W_MOBILE = 430;
const SLIDE_H_MOBILE = 760;

export default function ScaledSlide({ children, className = "" }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const isMobile = useIsMobile();

  const baseW = isMobile ? SLIDE_W_MOBILE : SLIDE_W;
  const baseH = isMobile ? SLIDE_H_MOBILE : SLIDE_H;

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setScale(Math.min(w / baseW, h / baseH));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [baseW, baseH]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className={`${isMobile ? "slide-wrapper-mobile" : "slide-wrapper"} slide-content`}
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
