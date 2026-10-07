import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { resumeData } from '../data/resume';
import PlayerProfileCard from '../components/PlayerProfileCard';
import { WanderingCompanion } from '../components/EasterEggs';

interface Particle {
  top: string;
  left?: string;
  right?: string;
  block: string;
  delay: string;
  duration: string;
}

/** Decorative floating pixel specks scattered around the hero. */
const particles: Particle[] = [
  { top: '16%', left: '6%', block: 'bg-block-grass', delay: '0s', duration: '5s' },
  { top: '28%', left: '14%', block: 'bg-block-sky', delay: '0.8s', duration: '6.5s' },
  { top: '62%', left: '4%', block: 'bg-block-beige', delay: '1.6s', duration: '5.5s' },
  { top: '20%', right: '8%', block: 'bg-block-grass', delay: '1.1s', duration: '6s' },
  { top: '52%', right: '5%', block: 'bg-block-sky', delay: '0.4s', duration: '7s' },
  { top: '78%', right: '18%', block: 'bg-block-beige', delay: '2s', duration: '5.2s' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Floating pixel specks */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {particles.map((particle, i) => (
          <span
            key={i}
            className={`px-particle ${particle.block}`}
            style={{
              top: particle.top,
              left: particle.left,
              right: particle.right,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Spawn-area companion (hidden discovery) */}
      <WanderingCompanion />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 text-center lg:text-left"
          >
            <p className="pixel-kicker">
              <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
              Hello, I&apos;m
            </p>

            <h1 className="pixel-shadow mt-5 text-[1.75rem] leading-tight text-ink sm:text-4xl lg:text-5xl">
              Sevanth A G
            </h1>

            <p className="pixel-shadow-sm mt-4 font-pixel text-sm text-accent sm:text-base lg:text-lg">
              {resumeData.title}
            </p>

            <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-relaxed text-ink-muted sm:text-base lg:mx-0">
              {resumeData.summary}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="/SEVANTH_AG_Resume -7-7-26.pdf" download className="pixel-btn">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </a>

              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="pixel-btn pixel-btn--secondary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get In Touch
              </a>
            </div>
          </motion.div>

          {/* Identity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex w-full justify-center lg:w-auto lg:flex-shrink-0"
          >
            <PlayerProfileCard />
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <span className="pixel-slot flex h-9 w-9 items-center justify-center text-ink-muted">
          <ChevronDown className="px-bob h-4 w-4" />
        </span>
      </motion.div>
    </section>
  );
}
