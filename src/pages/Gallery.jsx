const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

const GALLERY_IMAGES = [
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/368da9524_IMG_1958.jpg", alt: "Low taper fade profile" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/e01df5e3c_IMG_1956.jpg", alt: "Back of taper fade" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/42e917825_8991EE0D-21E9-4AE7-BD20-B59F8E9A7420_1_105_c.jpeg", alt: "Side profile curly fade" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/bf4785704_77923A18-EF8B-4D8A-A433-A13078007ADA_1_105_c.jpeg", alt: "Back of curly fade" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/731f4d07b_A47F427D-2AAD-4403-B34C-7CC6E0177A4A_1_105_c.jpeg", alt: "Side profile taper fade" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/332be5d51_6B0C8477-F74C-47A1-A87F-6EEDC5A37B27_4_5005_c.jpeg", alt: "Back of taper fade" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/a8094c88a_26B5B0AF-B85E-4A04-A6CE-597C52ACA98C_1_105_c.jpeg", alt: "Side profile modern mullet" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/fbb0f644d_B8A29043-5734-46F0-B77D-5CD3BEC6897E_1_105_c.jpeg", alt: "Back of modern mullet" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/79d076a1d_IMG_1970.jpg", alt: "Low taper fade with fringe" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/7a48932ff_IMG_1974.jpg", alt: "Back of textured haircut" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/385dccb2d_IMG_2046.jpg", alt: "Side profile with phone" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/749224b1c_IMG_2048.jpg", alt: "Modern mullet back view" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/ec11f13d4_IMG_1964.jpg", alt: "Side profile textured cut" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/3343bd5f7_IMG_1999.jpg", alt: "Modern mullet profile" },
  { src: "https://media.db.com/images/public/6a3ee79c209d80a3a3934f96/d875d0a81_C285C67D-1FE2-4B6D-94D8-FE4ABCE3E3BB_1_105_c.jpeg", alt: "Back of taper fade" },
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