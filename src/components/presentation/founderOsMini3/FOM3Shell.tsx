import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Printer, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../ScaledSlide";
import { slides } from "./FounderOsMini3Slides";
import { SlideMetaProvider } from "@/components/mini-course/SlideMetaContext";

const TOTAL = slides.length;
const FOOTER_LABEL = "Михаэль · Сессия 3 из 6";

export default function FOM3Shell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [printing, setPrinting] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((i: number) => {
    if (i === displayed || transitioning || i < 0 || i >= TOTAL) return;
    setTransitioning(true);
    setTimeout(() => {
      setDisplayed(i);
      setCurrent(i);
      requestAnimationFrame(() => setTransitioning(false));
    }, 200);
  }, [displayed, transitioning]);

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "f" || e.key === "F" || e.key === "F5") {
        e.preventDefault();
        if (document.fullscreenElement) document.exitFullscreen?.();
        else document.documentElement.requestFullscreen?.();
      } else if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const h = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);

  const onStageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a,button")) return;
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const w = rect.width;
    if (x < w / 3) prev();
    else if (x > (2 * w) / 3) next();
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.();
  };

  const exportPDF = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => setPrinting(false), 500);
    }, 100);
  };

  if (printing) {
    return (
      <div className="bg-[#0A0E1A] mini-print-root">
        <style>{`
          @page { size: 1920px 1080px; margin: 0; }
          html, body { background: #0A0E1A !important; }
          .mini-print-page { width: 1920px; height: 1080px; page-break-after: always; overflow: hidden; position: relative; }
          .mini-print-page:last-child { page-break-after: auto; }
        `}</style>
        {slides.map((Slide, i) => (
          <div key={i} className="mini-print-page">
            <SlideMetaProvider value={{ index: i + 1, total: TOTAL, lesson: 3, footerLabel: FOOTER_LABEL }}>
              <Slide />
            </SlideMetaProvider>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col" style={{ background: "#0A0E1A" }}>
      <div ref={stageRef} className="flex-1 relative cursor-pointer select-none" onClick={onStageClick}>
        <div className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${transitioning ? "opacity-0" : "opacity-100"}`}>
          <ScaledSlide>
            {(() => {
              const Slide = slides[displayed];
              return (
                <SlideMetaProvider value={{ index: displayed + 1, total: TOTAL, lesson: 3, footerLabel: FOOTER_LABEL }}>
                  <Slide />
                </SlideMetaProvider>
              );
            })()}
          </ScaledSlide>
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); navigate(backTo); }}
          className="absolute top-4 left-4 z-10 p-2 rounded bg-white/5 hover:bg-white/15 text-white/80 transition"
          title="Назад"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition disabled:opacity-30"
          disabled={current === 0} aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/5 hover:bg-white/15 text-white transition disabled:opacity-30"
          disabled={current === TOTAL - 1} aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button onClick={(e) => { e.stopPropagation(); exportPDF(); }}
            className="p-2 rounded bg-white/5 hover:bg-white/15 text-white/80 transition" title="Экспорт в PDF">
            <Printer size={18} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
            className="p-2 rounded bg-white/5 hover:bg-white/15 text-white/80 transition" title="Полный экран (F)">
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </div>

        <div className="absolute bottom-4 right-4 z-10 text-[14px] font-medium pointer-events-none"
          style={{ color: "#94A3B8", fontFamily: "'Inter', system-ui, sans-serif" }}>
          {current + 1} / {TOTAL}
        </div>
      </div>
    </div>
  );
}
