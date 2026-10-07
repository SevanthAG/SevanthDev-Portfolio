import { useEffect } from 'react';

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Drives the subtle environmental progression (day → afternoon → sunset →
 * night) by writing three 0-1 CSS custom properties on the document root.
 *
 * The values are consumed by the world background tint layers, which apply
 * their own per-theme maximum strength. Scroll handling is rAF-throttled and
 * passive, and values are only written when they actually change, so the cost
 * stays negligible on mobile.
 */
export function useWorldPhase() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;

      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? clamp01(window.scrollY / scrollable) : 0;

      const afternoon = clamp01(progress / 0.35);
      const sunset = clamp01((progress - 0.32) / 0.33);
      const night = clamp01((progress - 0.62) / 0.38);

      const warm = afternoon * (1 - sunset * 0.5) * (1 - night * 0.7);
      const dusk = sunset * (1 - night * 0.6);

      const phases: [string, number][] = [
        ['--world-warm', warm],
        ['--world-dusk', dusk],
        ['--world-night', night],
      ];

      for (const [name, value] of phases) {
        const rounded = String(Math.round(value * 100) / 100);
        if (root.style.getPropertyValue(name) !== rounded) {
          root.style.setProperty(name, rounded);
        }
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
}
