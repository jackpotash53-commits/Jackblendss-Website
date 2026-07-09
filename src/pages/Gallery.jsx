const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

const IMG = (f) => `${import.meta.env.BASE_URL}images/${f}`;

const GALLERY_IMAGES = [
  { src: IMG("gallery-1.jpg"), alt: "Low taper fade profile" },
  { src: IMG("gallery-2.jpg"), alt: "Back of taper fade" },
  { src: IMG("gallery-3.jpg"), alt: "Side profile curly fade" },
  { src: IMG("gallery-4.jpg"), alt: "Back of curly fade" },
  { src: IMG("gallery-5.jpg"), alt: "Side profile taper fade" },
  { src: IMG("gallery-6.jpg"), alt: "Back of taper fade" },
  { src: IMG("gallery-7.jpg"), alt: "Side profile modern mullet" },
  { src: IMG("gallery-8.jpg"), alt: "Back of modern mullet" },
  { src: IMG("gallery-9.jpg"), alt: "Low taper fade with fringe" },
  { src: IMG("gallery-10.jpg"), alt: "Back of textured haircut" },
  { src: IMG("gallery-11.jpg"), alt: "Side profile with phone" },
  { src: IMG("gallery-12.jpg"), alt: "Modern mullet back view" },
  { src: IMG("gallery-13.jpg"), alt: "Side profile textured cut" },
  { src: IMG("gallery-14.jpg"), alt: "Modern mullet profile" },
  { src: IMG("gallery-15.jpg"), alt: "Back of taper fade" },
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const dragRef = useRef({ down: false, startX: 0, startY: 0, baseX: 0, baseY: 0 });

  const close = () => { setSelectedIndex(null); setZoom(1); setPan({ x: 0, y: 0 }); };

  const goTo = (e, dir) => {
    e.stopPropagation();
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setSelectedIndex((i) => (i === null ? 0 : (i + dir + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  };
  const prev = (e) => goTo(e, -1);
  const next = (e) => goTo(e, 1);

  const onZoomChange = (e) => {
    e.stopPropagation();
    const val = parseFloat(e.target.value);
    setZoom(val);
    if (val === 1) setPan({ x: 0, y: 0 });
  };

  const stepZoom = (e, delta) => {
    e.stopPropagation();
    const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, +(zoom + delta).toFixed(2)));
    setZoom(next);
    if (next === 1) setPan({ x: 0, y: 0 });
  };

  const onDown = (e) => {
    if (zoom <= 1) return;
    e.stopPropagation();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    dragRef.current = { down: true, startX: clientX, startY: clientY, baseX: pan.x, baseY: pan.y };
  };
  const onMove = (e) => {
    if (!dragRef.current.down || zoom <= 1) return;
    e.stopPropagation();
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    setPan({
      x: dragRef.current.baseX + (clientX - dragRef.current.startX),
      y: dragRef.current.baseY + (clientY - dragRef.current.startY),
    });
  };
  const onUp = () => { dragRef.current.down = false; };

  useEffect(() => {
    const onKey = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev(e);
      if (e.key === "ArrowRight") next(e);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, zoom, pan]);

  return (
    <div>
      <div className="pt-[calc(62px+52px)] px-7 max-w-[880px] mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-black/45">The Work</p>
        <h1 className="font-display text-[clamp(34px,8vw,52px)] font-bold uppercase text-black mt-1.5">Gallery</h1>
        <div className="w-9 h-[3px] bg-[#990000] mt-3 mb-2" />
      </div>

      <div className="grid grid-cols-2 min-[520px]:grid-cols-3 md:grid-cols-5 gap-1 p-7 max-w-[1100px] mx-auto">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className="aspect-square rounded overflow-hidden relative group cursor-pointer"
            onClick={() => { setSelectedIndex(i); setZoom(1); setPan({ x: 0, y: 0 }); }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="pb-12" />

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            onClick={close}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={prev}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={GALLERY_IMAGES[selectedIndex].src}
            alt={GALLERY_IMAGES[selectedIndex].alt}
            className="max-w-full max-h-full rounded select-none"
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
              transition: dragRef.current.down ? "none" : "transform 0.15s ease-out",
              touchAction: "none",
              cursor: zoom > 1 ? (dragRef.current.down ? "grabbing" : "grab") : "default",
            }}
            onMouseDown={onDown}
            onMouseMove={onMove}
            onMouseUp={onUp}
            onMouseLeave={onUp}
            onTouchStart={onDown}
            onTouchMove={onMove}
            onTouchEnd={onUp}
            draggable={false}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={next}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Zoom control bar */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-white/80 hover:text-white disabled:opacity-30 transition-colors"
              onClick={(e) => stepZoom(e, -0.5)}
              disabled={zoom <= MIN_ZOOM}
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <input
              type="range"
              min={MIN_ZOOM}
              max={MAX_ZOOM}
              step={0.1}
              value={zoom}
              onChange={onZoomChange}
              className="w-40 md:w-56 accent-[#990000]"
              aria-label="Zoom level"
            />
            <button
              className="text-white/80 hover:text-white disabled:opacity-30 transition-colors"
              onClick={(e) => stepZoom(e, 0.5)}
              disabled={zoom >= MAX_ZOOM}
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <span className="text-white/70 text-[11px] font-semibold tabular-nums w-9 text-right">
              {Math.round(zoom * 100)}%
            </span>
          </div>
        </div>
      )}
    </div>
  );
}