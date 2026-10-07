import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import WorldBackground from './components/WorldBackground';
import AchievementProvider from './components/AchievementProvider';
import { KeyboardSecrets } from './components/EasterEggs';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Leadership from './sections/Leadership';
import Contact from './sections/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Leadership />
      <Contact />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <MotionConfig reducedMotion="user">
      <AchievementProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <WorldBackground />
                    <main className="relative z-10 min-h-screen">
                      <ScrollProgressBar />
                      <Navbar theme={theme} onToggleTheme={toggleTheme} />
                      <HomePage />
                      <Footer />
                      <ScrollToTop />
                      <KeyboardSecrets />
                    </main>
                  </>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
          </AnimatePresence>
        </BrowserRouter>
      </AchievementProvider>
    </MotionConfig>
  );
}
