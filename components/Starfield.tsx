"use client";
import { useEffect, useRef } from "react";

interface StarfieldProps {
  id: string;
  count?: number;
  opacity?: number;
}

export function Starfield({ id, count = 220, opacity = 0.9 }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Star = { x: number; y: number; r: number; a: number; tw: number; ph: number; vx: number };
    let w = 0, h = 0, stars: Star[] = [], raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = canvas.offsetWidth * dpr;
      h = canvas.height = canvas.offsetHeight * dpr;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.3 + 0.2) * dpr,
        a: Math.random() * 0.7 + 0.15,
        tw: Math.random() * 0.02 + 0.004,
        ph: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.05 * dpr,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.ph += s.tw;
        const a = s.a * (0.55 + 0.45 * Math.sin(s.ph));
        s.x += s.vx;
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      raf = requestAnimationFrame(frame);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        opacity,
      }}
    />
  );
}
