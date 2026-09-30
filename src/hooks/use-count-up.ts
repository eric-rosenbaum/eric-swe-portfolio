import { useEffect, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Eases a number from 0 up to `target` once `start` is true. */
export function useCountUp(
  target: number,
  { start = true, delay = 0, duration = 1600 } = {}
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now() + delay;
    const step = (t: number) => {
      const p = Math.min(Math.max((t - t0) / duration, 0), 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, delay, duration]);

  return value;
}
