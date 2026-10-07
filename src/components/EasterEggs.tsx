import { useEffect, useRef, useState } from 'react';
import { useAchievements } from '../hooks/useAchievements';

/**
 * A small block creature that wanders the spawn area. It sits on the hero's
 * ground band, is never in the way of content, and rewards a curious click
 * with an advancement. Keyboard users can reach it too — it is a labelled,
 * focusable button.
 */
export function WanderingCompanion() {
  const { unlock } = useAchievements();

  return (
    <div className="pointer-events-none absolute bottom-4 left-4 z-10 hidden sm:block">
      <button
        type="button"
        onClick={() =>
          unlock({
            id: 'companion',
            title: 'Hello, neighbour',
            description: 'You greeted the slime that wanders the spawn area.',
          })
        }
        className="px-companion pointer-events-auto"
        aria-label="Greet the wandering slime"
      >
        <span className="px-companion__top" aria-hidden="true" />
        <span className="px-companion__body" aria-hidden="true" />
      </button>
    </div>
  );
}

const SECRET_WORD = 'grass';
const SPARKLE_COUNT = 10;

/**
 * Innermost discovery: typing the word that grows the world drops a short
 * burst of pixel particles. It never captures keystrokes, ignores modified
 * keys and text fields, and does nothing visible for anyone who doesn't
 * happen to type it.
 */
export function KeyboardSecrets() {
  const { unlock } = useAchievements();
  const [sparkles, setSparkles] = useState<number[]>([]);
  const buffer = useRef('');
  const lastFired = useRef(0);
  const cleanup = useRef<number | undefined>(undefined);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key.length !== 1) return;

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      buffer.current = (buffer.current + event.key.toLowerCase()).slice(-SECRET_WORD.length);
      if (buffer.current !== SECRET_WORD) return;
      buffer.current = '';

      const now = Date.now();
      if (now - lastFired.current < 5000) return;
      lastFired.current = now;

      unlock({
        id: 'block-whisperer',
        title: 'Block whisperer',
        description: 'You typed the word that grows the world. A small secret for the curious.',
      });

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      window.clearTimeout(cleanup.current);
      setSparkles(Array.from({ length: SPARKLE_COUNT }, (_, index) => now + index));
      cleanup.current = window.setTimeout(() => setSparkles([]), 1800);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(cleanup.current);
    };
  }, [unlock]);

  if (sparkles.length === 0) return null;

  return (
    <div aria-hidden="true">
      {sparkles.map((key, index) => (
        <span
          key={key}
          className="px-sparkle"
          style={{
            left: `${6 + index * 9}%`,
            top: `${26 + (index % 3) * 10}%`,
            animationDelay: `${index * 70}ms`,
            backgroundColor: index % 2 === 0 ? 'var(--mc-grass)' : 'var(--mc-sky)',
          }}
        />
      ))}
    </div>
  );
}
