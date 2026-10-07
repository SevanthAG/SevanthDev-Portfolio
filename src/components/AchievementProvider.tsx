import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Trophy, X } from 'lucide-react';
import { AchievementContext, SECRET_IDS } from '../hooks/useAchievements';
import type { Achievement } from '../hooks/useAchievements';

interface Toast extends Achievement {
  key: number;
}

const COMPLETIONIST: Achievement = {
  id: 'completionist',
  title: 'Completionist',
  description: 'You found every hidden block in this world. Thanks for exploring.',
};

/**
 * Shows Minecraft-style "advancement unlocked" notifications for the hidden
 * discoveries. Toasts announce themselves politely, can be dismissed, and
 * auto-close so they never get in the way of normal browsing.
 */
export default function AchievementProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const unlockedRef = useRef<string[]>([]);
  const keyRef = useRef(0);
  const timers = useRef(new Map<number, number>());

  const dismiss = useCallback((key: number) => {
    setToasts((previous) => previous.filter((toast) => toast.key !== key));
    const timer = timers.current.get(key);
    if (timer !== undefined) {
      window.clearTimeout(timer);
      timers.current.delete(key);
    }
  }, []);

  const push = useCallback(
    (achievement: Achievement) => {
      const key = keyRef.current + 1;
      keyRef.current = key;
      setToasts((previous) => [...previous.slice(-2), { ...achievement, key }]);
      timers.current.set(
        key,
        window.setTimeout(() => dismiss(key), 6500)
      );
    },
    [dismiss]
  );

  const unlock = useCallback(
    (achievement: Achievement) => {
      const isNew = !unlockedRef.current.includes(achievement.id);
      if (isNew) {
        unlockedRef.current = [...unlockedRef.current, achievement.id];
        setUnlocked(unlockedRef.current);
      }

      push(achievement);

      if (isNew && SECRET_IDS.every((id) => unlockedRef.current.includes(id))) {
        window.setTimeout(() => push(COMPLETIONIST), 1200);
      }
    },
    [push]
  );

  useEffect(() => {
    const pending = timers.current;
    return () => {
      pending.forEach((timer) => window.clearTimeout(timer));
      pending.clear();
    };
  }, []);

  const value = useMemo(() => ({ unlock, unlocked }), [unlock, unlocked]);

  return (
    <AchievementContext.Provider value={value}>
      {children}

      <div className="pointer-events-none fixed right-3 top-20 z-[70] flex w-[min(21rem,calc(100vw-1.5rem))] flex-col gap-3 sm:top-24 sm:right-5">
        {toasts.map((toast) => (
          <div key={toast.key} role="status" className="advancement-toast pointer-events-auto">
            <span className="advancement-toast__icon" aria-hidden="true">
              <Trophy className="h-4 w-4" />
            </span>

            <div className="min-w-0 flex-1">
              <p className="font-pixel text-[9px] uppercase tracking-wider text-block-beige">
                Advancement unlocked
              </p>
              <p className="mt-2 font-pixel text-[11px] leading-snug text-block-offwhite">
                {toast.title}
              </p>
              <p className="mt-2 font-body text-xs leading-relaxed text-block-beige">
                {toast.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => dismiss(toast.key)}
              aria-label="Dismiss notification"
              className="pixel-btn pixel-btn--ghost pixel-btn--icon shrink-0"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </AchievementContext.Provider>
  );
}
