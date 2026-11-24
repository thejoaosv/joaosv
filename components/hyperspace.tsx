"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

type Star = { dx: number; dy: number; radius: number; z: number };

const FAR = 4;
const NEAR = 0.04;
const WARP = 0.55; // depth units per second at full hyperspace
const DRIFT = 0.012; // slow drift: stars barely move, no streaks
const RAMP = 1.6; // seconds to ease most of the way to the target, same up and down
const BLUR = 1.3; // a streak is the path covered in the last BLUR seconds
// Stars sit on the wall of a tube, so they read as one continuous tunnel
// around a dark, empty centre.
const TUNNEL_INNER = 0.9;
const TUNNEL_OUTER = 1.5;
const MAX_ALPHA = 0.55; // keeps the effect behind the content, not on top of it

function spawn(z: number): Star {
  const angle = Math.random() * Math.PI * 2;
  return {
    dx: Math.cos(angle),
    dy: Math.sin(angle),
    radius: TUNNEL_INNER + Math.random() * (TUNNEL_OUTER - TUNNEL_INNER),
    z,
  };
}

/**
 * One streak, drawn once: a thin white core fading in from the tail, with a soft blue glow.
 * Every star stretches and rotates this image, which is far cheaper than a gradient per star.
 */
function makeStreak() {
  const sprite = document.createElement("canvas");
  sprite.width = 256;
  sprite.height = 16;
  const g = sprite.getContext("2d")!;
  const fade = g.createLinearGradient(0, 0, sprite.width, 0);
  fade.addColorStop(0, "rgba(255,255,255,0)");
  fade.addColorStop(1, "rgba(255,255,255,1)");
  g.strokeStyle = fade;
  g.lineWidth = 2;
  g.lineCap = "round";
  g.shadowColor = "rgba(130,170,255,1)";
  g.shadowBlur = 6;
  g.beginPath();
  g.moveTo(0, 8);
  g.lineTo(sprite.width - 2, 8);
  g.stroke();
  return sprite;
}

export function Hyperspace() {
  const ref = useRef<HTMLCanvasElement>(null);
  // Blog posts slow down to drifting stars so nothing pulls at the text.
  const calm = usePathname().startsWith("/blog/");
  const target = useRef(calm ? DRIFT : WARP);

  useEffect(() => {
    target.current = calm ? DRIFT : WARP;
  }, [calm]);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const streak = makeStreak();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = window.innerWidth < 640 ? 110 : 200;
    const stars = Array.from({ length: count }, () => spawn(NEAR + Math.random() * (FAR - NEAR)));
    let speed = 0; // every visit starts as still stars, then accelerates
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let last = performance.now();

    function resize() {
      // Mobile URL bars resize the viewport while scrolling; ignore those small height changes.
      if (window.innerWidth === width && Math.abs(window.innerHeight - height) < 150) return;
      // 1x is plenty for soft glowing streaks, and it costs about 2.5x less per frame than 2x.
      dpr = 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
    }

    function draw() {
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.max(width, height) * 0.5;
      const trail = speed * BLUR;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const star of stars) {
        const headZ = Math.max(star.z, NEAR); // the head may already be past the camera
        const tailR = (star.radius / (star.z + trail)) * scale; // distance from the centre
        const headR = (star.radius / headZ) * scale;
        const tailX = cx + star.dx * tailR;
        const tailY = cy + star.dy * tailR;
        // Streaks only move outward, so once the tail leaves the screen the whole streak has.
        if (tailX < 0 || tailX > width || tailY < 0 || tailY > height) continue;

        const depth = 1 - headZ / FAR; // 0 far away, 1 at the camera
        // New stars fade in from nothing, so the tunnel never pops.
        ctx!.globalAlpha = Math.min(1, depth / 0.35) * (0.35 + 0.65 * depth) * MAX_ALPHA;
        const length = Math.max(headR - tailR, 3);
        const thickness = 8 + 5 * depth; // the 2px core comes out at 1 to 1.6px
        ctx!.setTransform(dpr * star.dx, dpr * star.dy, -dpr * star.dy, dpr * star.dx, dpr * tailX, dpr * tailY);
        ctx!.drawImage(streak, 0, -thickness / 2, length, thickness);
      }
      ctx!.globalAlpha = 1;
    }

    function tick(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      speed += (target.current - speed) * (1 - Math.exp(-dt / RAMP));
      for (let i = 0; i < stars.length; i++) {
        stars[i].z -= speed * dt;
        // Respawn only once the tail has passed too, so streaks never vanish mid-screen.
        if (stars[i].z + speed * BLUR < NEAR) stars[i] = spawn(FAR);
      }
      draw();
      frame = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      draw(); // speed 0: a still field of stars
      window.addEventListener("resize", draw);
    } else {
      frame = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 size-full"
    />
  );
}
