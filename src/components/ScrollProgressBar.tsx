import { useScrollProgress } from '../hooks/useScrollProgress';

/**
 * Scroll indicator styled as a Minecraft-style XP bar that fills as the
 * page is explored. Decorative, so it is hidden from assistive tech.
 */
export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-3 border-b-2 border-line-strong bg-surface-inset"
    >
      <div
        className="h-full bg-accent shadow-[inset_0_2px_0_rgba(255,255,255,0.28),inset_0_-2px_0_rgba(0,0,0,0.22)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
