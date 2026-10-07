import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

/**
 * Blocky day/night switch: a stone slot with a sliding slab that lights up
 * on hover. Keyboard and screen-reader semantics are unchanged.
 */
export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="pixel-slot pixel-slot--interactive relative h-11 w-[4.75rem] shrink-0 p-0"
    >
      <span
        aria-hidden="true"
        className={`absolute top-[3px] flex h-8 w-8 items-center justify-center border-2 transition-[left] duration-200
          ${
            isDark
              ? 'left-[3px] border-line-strong bg-block-charcoal text-block-sky'
              : 'left-[35px] border-line-strong bg-block-grass text-block-charcoal'
          }`}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
