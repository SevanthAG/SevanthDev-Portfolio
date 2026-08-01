import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
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
      <Experience />
      <Projects />
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
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <main className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0B1120]' : 'bg-white'}`}>
                  <ScrollProgressBar />
                  <Navbar theme={theme} onToggleTheme={toggleTheme} />
                  <HomePage />
                  <Footer />
                  <ScrollToTop />
                </main>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
