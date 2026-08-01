import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{ scaleX: progress / 100 }}
      initial={{ scaleX: 0 }}
    >
      <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />
    </motion.div>
  );
}
