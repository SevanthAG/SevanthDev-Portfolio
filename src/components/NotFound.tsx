import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0B1120] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-4 tracking-wide">
          404
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
                     bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25
                     hover:shadow-indigo-500/40 transition-all duration-200"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
