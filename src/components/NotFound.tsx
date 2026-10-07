import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import WorldBackground from './WorldBackground';

export default function NotFound() {
  return (
    <>
      <WorldBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pixel-panel w-full max-w-lg p-8 text-center sm:p-10"
        >
          <div className="mb-6 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="pixel-slot grid h-10 w-10 place-items-center font-pixel text-sm text-accent">
              4
            </span>
            <span className="pixel-slot grid h-10 w-10 place-items-center font-pixel text-sm text-accent-2">
              0
            </span>
            <span className="pixel-slot grid h-10 w-10 place-items-center font-pixel text-sm text-gold">
              4
            </span>
          </div>

          <h1 className="text-2xl leading-tight text-ink sm:text-3xl">Page Not Found</h1>

          <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-relaxed text-ink-muted">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Looks like you wandered off the edge of the world.
          </p>

          <a href="/" className="pixel-btn mt-8">
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </a>
        </motion.div>
      </div>
    </>
  );
}
