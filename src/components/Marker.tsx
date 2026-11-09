import { useEffect, useRef } from "react";

/** How long a finished stroke stays fully opaque, then how long it fades. */
const HOLD_MS = 500;
const FADE_MS = 900;
/** A click lays down a short dash that draws itself in this long. */
const DAB_DRAW_MS = 140;
const STROKE_WIDTH = 16;
/** Pointer travel under this, between down and up, counts as a click. */
const CLICK_SLOP = 4;

type Point = { x: number; y: number };
type Stroke = {
  /** Page coordinates, so strokes scroll with the content they were drawn on. */
  points: Point[];
  bornAt: number;
  endedAt: number | null;
  dab: boolean;
};

const INTERACTIVE = "a, button, [role='button'], summary, label";

/**
 * The page's pointer is a highlighter. On fine pointers a chisel tip replaces
 * the system cursor; on every device, dragging lays down a marker stroke and a
 * click leaves a short dash, both fading out a moment later.
 *
 * Strokes are drawn on one fixed canvas that sits over the content, blended
 * the same way as the CSS marker (multiply on paper, a glow on dark), so they
 * read as ink on the page rather than a layer above it.
 */
export function Marker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const tip = tipRef.current;
    if (!canvas || !tip) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fine = matchMedia("(pointer: fine)").matches;
    if (fine) document.documentElement.classList.add("has-marker");

    const strokes: Stroke[] = [];
    let active: Stroke | null = null;
    let downAt: Point | null = null;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(innerWidth * dpr);
      canvas.height = Math.round(innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      schedule();
    };

    const draw = (now: number) => {
      frame = 0;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      const color = getComputedStyle(document.documentElement).getPropertyValue("--marker").trim();
      ctx.strokeStyle = color || "#ffec3d";
      ctx.lineWidth = STROKE_WIDTH;
      ctx.lineJoin = "round";
      ctx.lineCap = "butt";

      for (let i = strokes.length - 1; i >= 0; i--) {
        const stroke = strokes[i];
        let alpha = 1;
        if (stroke.endedAt !== null) {
          const age = now - stroke.endedAt - HOLD_MS;
          alpha = age <= 0 ? 1 : 1 - age / FADE_MS;
        }
        if (alpha <= 0) {
          strokes.splice(i, 1);
          continue;
        }

        let points = stroke.points;
        if (stroke.dab) {
          // Draw the dash in from its left end.
          const t = Math.min(1, (now - stroke.bornAt) / DAB_DRAW_MS);
          const [a, b] = points;
          points = [a, { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }];
        }
        if (points.length < 2) continue;

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.moveTo(points[0].x - scrollX, points[0].y - scrollY);
        for (let p = 1; p < points.length; p++) {
          ctx.lineTo(points[p].x - scrollX, points[p].y - scrollY);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (strokes.length > 0) schedule();
    };

    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw);
    }

    const moveTip = (event: PointerEvent) => {
      tip.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      tip.dataset.visible = "";
      const over = (event.target as Element | null)?.closest?.(INTERACTIVE);
      if (over) tip.dataset.over = "";
      else delete tip.dataset.over;
    };

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      downAt = { x: event.clientX, y: event.clientY };
      if (fine) tip.dataset.pressed = "";
    };

    const onMove = (event: PointerEvent) => {
      if (fine && event.pointerType === "mouse") moveTip(event);
      if (!downAt) return;

      const point = { x: event.clientX + scrollX, y: event.clientY + scrollY };
      if (!active) {
        const moved = Math.hypot(event.clientX - downAt.x, event.clientY - downAt.y);
        if (moved < CLICK_SLOP) return;
        active = {
          points: [{ x: downAt.x + scrollX, y: downAt.y + scrollY }],
          bornAt: performance.now(),
          endedAt: null,
          dab: false,
        };
        strokes.push(active);
      }
      const last = active.points[active.points.length - 1];
      if (Math.hypot(point.x - last.x, point.y - last.y) > 2) active.points.push(point);
      schedule();
    };

    const onUp = (event: PointerEvent) => {
      if (!downAt) return;
      const now = performance.now();
      if (active) {
        active.endedAt = now;
      } else {
        // A plain click: a short, slightly rising dash under the pointer.
        const x = event.clientX + scrollX;
        const y = event.clientY + scrollY;
        strokes.push({
          points: [
            { x: x - 11, y: y + 3 },
            { x: x + 13, y: y - 1 },
          ],
          bornAt: now,
          endedAt: now,
          dab: true,
        });
      }
      active = null;
      downAt = null;
      delete tip.dataset.pressed;
      schedule();
    };

    const onLeave = () => {
      delete tip.dataset.visible;
    };

    resize();
    addEventListener("resize", resize);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("pointerdown", onDown);
    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerup", onUp);
    addEventListener("pointercancel", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("has-marker");
      removeEventListener("resize", resize);
      removeEventListener("scroll", schedule);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerup", onUp);
      removeEventListener("pointercancel", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40 size-full"
        style={{ mixBlendMode: "var(--marker-blend)" as never, opacity: "var(--marker-alpha)" }}
      />
      {/*
        The tip's hotspot is its lower-left corner — the edge that touches the
        page — so the element is anchored there and leans up and to the right.
      */}
      <div
        ref={tipRef}
        aria-hidden
        className="marker-tip pointer-events-none fixed top-0 left-0 z-50 hidden"
      >
        <span />
      </div>
    </>
  );
}
