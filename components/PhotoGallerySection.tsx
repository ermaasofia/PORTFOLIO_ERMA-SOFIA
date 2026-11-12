'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Card = { top: number; left: number; w: number; h: number; r: number };

// 4 layers of empty frames — position (%), size (px), rotation (deg)
const LAYERS: Card[][] = [
  [
    { top: 18, left: 22, w: 240, h: 180, r: -8 },
    { top: 12, left: 62, w: 220, h: 170, r: 6 },
    { top: 52, left: 8, w: 200, h: 260, r: 5 },
    { top: 58, left: 40, w: 260, h: 190, r: -4 },
    { top: 48, left: 74, w: 220, h: 170, r: 9 },
  ],
  [
    { top: 14, left: 10, w: 230, h: 180, r: 7 },
    { top: 10, left: 44, w: 260, h: 200, r: -5 },
    { top: 16, left: 74, w: 210, h: 260, r: 4 },
    { top: 56, left: 24, w: 240, h: 180, r: -7 },
    { top: 60, left: 58, w: 220, h: 170, r: 8 },
  ],
  [
    { top: 20, left: 6, w: 210, h: 260, r: -6 },
    { top: 14, left: 34, w: 250, h: 180, r: 5 },
    { top: 22, left: 66, w: 240, h: 180, r: -9 },
    { top: 58, left: 46, w: 230, h: 170, r: 6 },
    { top: 54, left: 76, w: 200, h: 240, r: -4 },
  ],
  [
    { top: 12, left: 18, w: 250, h: 190, r: 6 },
    { top: 18, left: 56, w: 220, h: 260, r: -7 },
    { top: 56, left: 6, w: 230, h: 170, r: -5 },
    { top: 60, left: 36, w: 240, h: 180, r: 8 },
    { top: 52, left: 72, w: 230, h: 180, r: -6 },
  ],
];

// Order frames zoom in each layer (feels random)
const ORDERS = [
  [1, 2, 3, 4, 0],
  [3, 0, 4, 1, 2],
  [2, 4, 0, 3, 1],
  [4, 1, 3, 0, 2],
];

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const ease = (t: number) => t * t * (3 - 2 * t);

// PALETA 03 Frame Accents so the empty placeholders match the theme
const FRAME_STYLES = [
  'bg-[#171415]/90 border-[#D9B0B7]/60',
  'bg-[#1f181a]/90 border-[#D99AAB]/70',
  'bg-[#F2F2F2]/[0.07] border-[#F2F2F2]/40',
  'bg-[#241b1d]/90 border-[#D9B0B7]/50',
  'bg-[#191516]/90 border-[#737373]/50',
];

export default function PhotoGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [vp, setVp] = useState({ w: 1280, h: 800 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const resize = () => {
      setVp({ w: window.innerWidth, h: Math.max(window.innerHeight, 720) });
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=650%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });
    }, sectionRef);

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener('resize', resize);
      ctx.revert();
    };
  }, []);

  const L = LAYERS.length;
  const per = 1 / L;

  const layerStyle = (k: number) => {
    // each layer (after the first) rises in from behind at the start of its slot
    const t = k === 0 ? 1 : ease(clamp((progress - k * per + per * 0.12) / (per * 0.25), 0, 1));
    return {
      transform: `scale(${0.6 + t * 0.4})`,
      opacity: t,
      visibility: t <= 0.001 ? ('hidden' as const) : ('visible' as const),
    };
  };

  const cardStyle = (k: number, i: number, c: Card) => {
    const slot = (ORDERS[k] ?? []).indexOf(i);
    const start = k * per + per * 0.1;
    const seg = (per * 0.85) / 5;
    const t = clamp((progress - start - slot * seg) / (seg * 1.6), 0, 1);
    const e = ease(t);
    // fly to screen centre and grow until it fills the whole screen
    const cx = (c.left / 100) * vp.w + c.w / 2;
    const cy = (c.top / 100) * vp.h + c.h / 2;
    const full = 1.6;
    const dx = (vp.w / 2 - cx) * e * 0.25;
    const dy = (vp.h / 2 - cy) * e * 0.25;
    return {
      transform: `translate(${dx}px, ${dy}px) rotate(${c.r * (1 - e)}deg) scale(${1 + e * (full - 1)})`,
      opacity: 1 - clamp((t - 0.45) / 0.55, 0, 1),
      zIndex: t > 0 ? 20 + slot : 1,
    };
  };

  const activeLayer = Math.min(L, Math.floor(progress * L) + 1);
  const hint = 1 - clamp(progress / 0.06, 0, 1);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#0D0D0D] border-t border-[#F2F2F2]/10 z-10"
    >
      {/* Subtle Ambient PALETA 03 Center Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full bg-[#D99AAB]/10 blur-[140px]" />
      </div>

      {/* Section Title Overlay */}
      <div className="pointer-events-none absolute top-24 inset-x-0 z-30 text-center px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-[#D99AAB] font-bold mb-1">
          Moments &amp; Highlights
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F2F2F2]">
          Gallery &amp; Memories
        </h2>
      </div>

      {/* 4 Zooming Layers of Empty Picture Placeholders */}
      {LAYERS.map((cards, k) => (
        <div
          key={k}
          className="absolute inset-0 will-change-transform"
          style={{ ...layerStyle(k), zIndex: L - k }}
        >
          {cards.map((c, i) => {
            const frameTheme = FRAME_STYLES[(k + i) % FRAME_STYLES.length];
            return (
              <div
                key={i}
                className={`photo-card absolute rounded-2xl border-2 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden ${frameTheme}`}
                style={{
                  top: `${c.top}%`,
                  left: `${c.left}%`,
                  width: c.w,
                  height: c.h,
                  animationDelay: `${i * 0.6}s`,
                  ...cardStyle(k, i, c),
                }}
              >
                {/* Subtle inner placeholder icon & label (kept empty for future pictures) */}
                <div className="flex flex-col items-center justify-center text-[#D9B0B7]/35 select-none pointer-events-none">
                  <svg
                    className="w-8 h-8 mb-1.5 stroke-[1.5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#737373]">
                    Photo {k * 5 + i + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Layer Progress Indicator & Scroll Hint at Bottom */}
      <div className="pointer-events-none absolute bottom-8 inset-x-0 z-40 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          {LAYERS.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx + 1 === activeLayer
                  ? 'w-6 bg-[#D99AAB]'
                  : idx + 1 < activeLayer
                  ? 'w-2 bg-[#D9B0B7]/60'
                  : 'w-2 bg-[#F2F2F2]/20'
              }`}
            />
          ))}
        </div>
        <div
          className="px-4 py-1.5 rounded-full bg-[#F2F2F2]/[0.05] border border-[#D9B0B7]/25 text-xs font-semibold tracking-wider text-[#D9B0B7] transition-opacity duration-300"
          style={{ opacity: hint }}
        >
          Scroll to zoom through all 20 frames ↓
        </div>
      </div>
    </section>
  );
}
