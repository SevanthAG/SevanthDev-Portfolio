import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const statusFor = (progress: number) => {
  if (progress >= 100) return 'World ready';
  if (progress >= 70) return 'Placing blocks…';
  return 'Generating terrain…';
};

/** Splash screen styled as a Minecraft-style "loading world" bar. */
export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      role="status"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="pixel-texture--strong fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-block-charcoal px-6"
    >
      {/*
        Note: <html> already carries `.dark`/`.light` from the inline script in
        index.html, so the blocky slab above is drawn in the active theme.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-3 bg-block-dirt pixel-texture--strong"
      />

      <div className="w-full max-w-xs text-center">
        {/* Tiny grass block "world chunk" */}
        <div
          aria-hidden="true"
          className="pixel-slot mx-auto mb-6 flex h-14 w-14 flex-col"
        >
          <span className="h-4 w-full bg-block-grass" />
          <span className="flex-1 w-full bg-block-dirt" />
        </div>

        <h1 className="text-xl leading-tight text-block-offwhite sm:text-2xl">
          Sevanth<span className="text-block-grass"> A G</span>
        </h1>
        <p className="mt-3 font-pixel text-[10px] uppercase tracking-widest text-block-beige/80">
          Loading world
        </p>

        {/* XP-style progress bar */}
        <div className="mt-6 h-4 w-full border-2 border-black/60 bg-black/50">
          <div
            className="h-full bg-block-grass shadow-[inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-2px_0_rgba(0,0,0,0.25)] transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-4 font-pixel text-[10px] text-block-beige/70">
          {statusFor(progress)} · {progress}%
        </p>
      </div>
    </motion.div>
  );
}
