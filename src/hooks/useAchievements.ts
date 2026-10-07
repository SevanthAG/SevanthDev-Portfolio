import { createContext, useContext } from 'react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
}

interface AchievementContextValue {
  unlock: (achievement: Achievement) => void;
  /** Ids unlocked during this session, used for the completionist bonus. */
  unlocked: string[];
}

/** The hidden discoveries that can be unlocked on the site. */
export const SECRET_IDS = ['companion', 'block-whisperer', 'diamond'] as const;

const noop: AchievementContextValue = { unlock: () => {}, unlocked: [] };

export const AchievementContext = createContext<AchievementContextValue>(noop);

/** Access the achievement toasts. Safe to call outside the provider. */
export function useAchievements() {
  return useContext(AchievementContext);
}
