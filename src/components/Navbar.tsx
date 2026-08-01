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
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4"
        >
          <div
            className="rounded-2xl border backdrop-blur-xl transition-colors duration-300
                        bg-white/70 dark:bg-[#111827]/70 border-gray-200/50 dark:border-white/10"
          >
            <div className="flex items-center justify-between h-14 px-5">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-lg font-bold tracking-tight focus:outline-none
                           text-gray-900 dark:text-white"
              >
                Sevanth<span className="text-indigo-500"> A G</span>
              </button>

              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${activeSection === link.id
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 
                             text-gray-600 dark:text-gray-400 focus:outline-none"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl border backdrop-blur-xl p-4 md:hidden
                       bg-white/90 dark:bg-[#111827]/90 border-gray-200/50 dark:border-white/10"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-left
                    ${activeSection === link.id
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
