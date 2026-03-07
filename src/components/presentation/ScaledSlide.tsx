import { useRef, useEffect, useState, ReactNode } from "react";

interface ScaledSlideProps {
  children: ReactNode;
  className?: string;
}

const SLIDE_W = 1920;
const SLIDE_H = 1080;

export default function ScaledSlide({ children, className = "" }: ScaledSlideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      setScale(Math.min(w / SLIDE_W, h / SLIDE_H));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      <div
        className="slide-wrapper slide-content"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
