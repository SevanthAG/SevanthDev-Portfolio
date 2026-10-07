import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useScrollSpy } from '../hooks/useScrollSpy';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Hoisted so the scroll-spy effect keeps a stable dependency. */
const navIds = navLinks.map((link) => link.id);

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(navIds);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -110 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        aria-label="Main navigation"
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
      >
        <div className="mx-auto max-w-6xl">
          <div className="pixel-panel flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4">
            {/* Brand — a little grass block plus the name in the pixel font */}
            <button
              type="button"
              onClick={() => handleNavClick('hero')}
              className="flex min-h-11 items-center gap-2.5 py-0.5 text-left"
            >
              <span
                aria-hidden="true"
                className="pixel-slot grid h-9 w-9 shrink-0 place-items-center"
              >
                <span className="block h-4 w-4 bg-block-grass" />
              </span>
              <span className="font-pixel text-xs leading-tight text-ink sm:text-sm">
                Sevanth
                <span className="text-accent"> A G</span>
              </span>
            </button>

            {/* Desktop nav: chunky block buttons, active one is "lit up" */}
            <ul className="hidden items-center gap-1.5 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`pixel-btn pixel-btn--sm ${
                        isActive ? '' : 'pixel-btn--ghost'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                className="pixel-btn pixel-btn--secondary pixel-btn--icon lg:hidden"
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                {isOpen ? (
                  <X className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Menu className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-3 top-[5.5rem] z-40 lg:hidden"
          >
            <div className="pixel-panel p-3">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.id}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(link.id)}
                        aria-current={isActive ? 'true' : undefined}
                        className={`pixel-btn pixel-btn--block justify-start ${
                          isActive ? '' : 'pixel-btn--secondary'
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`h-2 w-2 ${isActive ? 'bg-block-offwhite' : 'bg-line'}`}
                        />
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
