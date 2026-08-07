import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3, X, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useNavigate } from "react-router-dom";
import ScaledSlide from "../../ScaledSlide";

import L16Slide01Welcome from "./L16Slide01Welcome";
import L16Slide02MainThesis from "./L16Slide02MainThesis";
import L16BlockHeader from "./L16BlockHeader";
import L16SlideFindPartner from "./L16SlideFindPartner";
import L16SlidePitchAnatomy from "./L16SlidePitchAnatomy";
import L16SlideWinWin from "./L16SlideWinWin";
import L16SlideNegotiation from "./L16SlideNegotiation";
import L16SlideAfterYes from "./L16SlideAfterYes";
import L16SlideChannelMap from "./L16SlideChannelMap";
import L16SlideCreatorsWhy from "./L16SlideCreatorsWhy";
import L16SlideCreatorsWho from "./L16SlideCreatorsWho";
import L16SlideCreatorsTools from "./L16SlideCreatorsTools";
import L16SlideCreatorsPay from "./L16SlideCreatorsPay";
import L16SlideCreatorsCheck from "./L16SlideCreatorsCheck";
import L16SlideCommunities from "./L16SlideCommunities";
import L16SlideCommunityExpert from "./L16SlideCommunityExpert";
import L16SlideLaunches from "./L16SlideLaunches";
import L16SlideSeoGeoWhat from "./L16SlideSeoGeoWhat";
import L16SlideSeoGeoTools from "./L16SlideSeoGeoTools";
import L16SlideSeoGeoActions from "./L16SlideSeoGeoActions";
import L16SlideChooseChannels from "./L16SlideChooseChannels";
import L16SlideHomework from "./L16SlideHomework";
import L16SlideClosing from "./L16SlideClosing";
import L16SlideLessonSummary from "./L16SlideLessonSummary";

export const slideNames = [
  "Заглавный",
  "Главная мысль · канал = деньги, а не охват",
  "Карта урока · 4 канала",
  "Блок 1: Партнёрства",
  "Кого и где искать · B2B и B2C",
  "Win-win · выгода обоих сторон",
  "Первое сообщение · что писать",
  "О чём договариваться · 5 ответов",
  "Партнёр сказал да · пакет и 60 дней",
  "Блок 2: Инфлюенсеры и креаторы",
  "Зачем и когда · чужое доверие",
  "Кого выбирать · один пост - не результат",
  "Где искать · 3 сервиса",
  "Сколько платить · цена за просмотр",
  "Проверка и деньги · 10 минут",
  "Блок 3: Комьюнити и запуски",
  "Комментарии, а не посты",
  "Кейс MetaMinder · эксперт внутри",
  "Product Hunt · что это и как выйти в топ",
  "Блок 4: SEO и GEO",
  "Что это · тебя находят сами",
  "Инструменты · TrySORO + Otterly",
  "4 действия на первую неделю",
  "Блок 5: Выбери и запусти",
  "Два канала на 90 дней",
  "Домашка · выбрал и запустил",
  "Саммари · 5 мыслей",
  "Закрытие · курс пройден",
];

export function getSlideContent(index: number) {
  switch (index) {
    case 0: return <L16Slide01Welcome />;
    case 1: return <L16Slide02MainThesis />;
    case 2: return <L16SlideChannelMap />;
    case 3: return <L16BlockHeader blockNumber={1} title="Партнёрства" subtitle="тебя продаёт тот, кому уже доверяют" />;
    case 4: return <L16SlideFindPartner />;
    case 5: return <L16SlideWinWin />;
    case 6: return <L16SlidePitchAnatomy />;
    case 7: return <L16SlideNegotiation />;
    case 8: return <L16SlideAfterYes />;
    case 9: return <L16BlockHeader blockNumber={2} title="Инфлюенсеры и креаторы" subtitle="покупаешь чужую аудиторию - считай, за что платишь" />;
    case 10: return <L16SlideCreatorsWhy />;
    case 11: return <L16SlideCreatorsWho />;
    case 12: return <L16SlideCreatorsTools />;
    case 13: return <L16SlideCreatorsPay />;
    case 14: return <L16SlideCreatorsCheck />;
    case 15: return <L16BlockHeader blockNumber={3} title="Комьюнити и запуски" subtitle="туда, где о проблеме уже спрашивают" />;
    case 16: return <L16SlideCommunities />;
    case 17: return <L16SlideCommunityExpert />;
    case 18: return <L16SlideLaunches />;
    case 19: return <L16BlockHeader blockNumber={4} title="SEO и GEO" subtitle="тебя находят сами, когда ищут" />;
    case 20: return <L16SlideSeoGeoWhat />;
    case 21: return <L16SlideSeoGeoTools />;
    case 22: return <L16SlideSeoGeoActions />;
    case 23: return <L16BlockHeader blockNumber={5} title="Выбери и запусти" subtitle="два канала, 90 дней, один показатель" />;
    case 24: return <L16SlideChooseChannels />;
    case 25: return <L16SlideHomework />;
    case 26: return <L16SlideLessonSummary />;
    case 27: return <L16SlideClosing />;
    default: return null;
  }
}

export const TOTAL = 28;

export default function Lesson16PresentationShell({ backTo = "/admin/meetings" }: { backTo?: string } = {}) {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback((index: number) => {
    if (index === displayed || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setDisplayed(index);
      setCurrent(index);
      requestAnimationFrame(() => setTransitioning(false));
    }, 200);
  }, [displayed, transitioning]);

  const next = useCallback(() => goTo(Math.min(current + 1, TOTAL - 1)), [current, goTo]);
  const prev = useCallback(() => goTo(Math.max(current - 1, 0)), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape" && showGrid) { setShowGrid(false); return; }
      if (e.key === "Escape" && isFullscreen) document.exitFullscreen?.();
      if (e.key === "F5") { e.preventDefault(); document.documentElement.requestFullscreen?.(); }
      if (e.key === "g" || e.key === "G") setShowGrid(v => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, showGrid, isFullscreen]);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => { setControlsVisible(true); clearTimeout(timer); timer = setTimeout(() => setControlsVisible(false), 3000); };
    window.addEventListener("mousemove", show);
    show();
    return () => { window.removeEventListener("mousemove", show); clearTimeout(timer); };
  }, []);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else document.documentElement.requestFullscreen?.();
  };

  if (showGrid) {
    return (
      <div className="w-full h-screen bg-[hsl(var(--background))] overflow-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">Урок 16 - Каналы продвижения: что ещё работает</h2>
          <button onClick={() => setShowGrid(false)} className="p-2 text-muted-foreground hover:text-foreground transition-colors"><X size={24} /></button>
        </div>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-4 gap-4'}`}>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setDisplayed(i); setShowGrid(false); }}
              className={`aspect-video relative rounded-lg overflow-hidden border-2 transition-all hover:border-primary ${i === current ? "border-primary ring-2 ring-primary/30" : "border-border"}`}>
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <span className="text-xs text-white/80">{i + 1}. {slideNames[i]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[hsl(var(--background))] flex overflow-hidden relative">
      {!isMobile && showSidebar && (
        <div className="w-[220px] h-full bg-[hsl(var(--card))] border-r border-border overflow-y-auto shrink-0 flex flex-col">
          <div className="p-3 border-b border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Слайды</span>
            <button onClick={() => setShowSidebar(false)} className="text-muted-foreground hover:text-foreground"><X size={14} /></button>
          </div>
          {Array.from({ length: TOTAL }, (_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setDisplayed(i); }}
              className={`p-2 mx-2 my-1 rounded aspect-video relative overflow-hidden border transition-all ${i === current ? "border-primary" : "border-transparent hover:border-border"}`}>
              <ScaledSlide>{getSlideContent(i)}</ScaledSlide>
              <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1.5 py-0.5"><span className="text-[9px] text-white/70">{i + 1}</span></div>
            </button>
          ))}
        </div>
      )}

      <div className="flex-1 relative flex flex-col">
        <div className="flex-1 relative"
          onTouchStart={(e) => { touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            if (!touchStartRef.current) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - touchStartRef.current.x;
            const dy = t.clientY - touchStartRef.current.y;
            touchStartRef.current = null;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? next() : prev(); }
          }}>
          <div className={`absolute inset-0 transition-opacity duration-200 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
            <ScaledSlide>
              <div className={`w-full h-full bg-[hsl(var(--slide-bg))] ${isMobile ? '' : 'pr-[540px]'}`}>
                {getSlideContent(displayed)}
              </div>
            </ScaledSlide>
          </div>
        </div>

        <div className={`absolute bottom-0 inset-x-0 transition-opacity duration-300 ${controlsVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <div className="h-[3px] bg-[hsl(var(--border))]">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${((current + 1) / TOTAL) * 100}%` }} />
          </div>
          <div className={`flex items-center justify-between ${isMobile ? 'px-3 py-2' : 'px-6 py-3'} bg-[hsl(var(--card)/0.9)] backdrop-blur-sm`}>
            <div className="flex items-center gap-3">
              <button onClick={(e) => { e.stopPropagation(); navigate(backTo); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Назад">
                <ArrowLeft size={16} />
              </button>
              {!isMobile && !showSidebar && (
                <button onClick={(e) => { e.stopPropagation(); setShowSidebar(true); }}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Показать слайды">
                  <ChevronRight size={16} />
                </button>
              )}
              <button onClick={(e) => { e.stopPropagation(); setShowGrid(true); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Все слайды (G)">
                <Grid3X3 size={isMobile ? 14 : 16} />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30" disabled={current === 0}>
                <ChevronLeft size={18} />
              </button>
              <span className="text-sm text-muted-foreground font-mono min-w-[60px] text-center">{current + 1} / {TOTAL}</span>
              <button onClick={(e) => { e.stopPropagation(); next(); }}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded disabled:opacity-30" disabled={current === TOTAL - 1}>
                <ChevronRight size={18} />
              </button>
            </div>
            <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded" title="Полный экран (F5)">
              {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
