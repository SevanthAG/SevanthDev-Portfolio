import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Users, Trophy, Star } from 'lucide-react';

export default function Leadership() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="leadership" className="py-24 relative bg-gray-50/50 dark:bg-[#0B1120]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-3 tracking-wide">
            Leadership & Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Beyond the Code
          </h2>
        </motion.div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-500" />
            Leadership Roles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeData.leadership.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="p-5 rounded-2xl border border-gray-200 dark:border-white/5
                           bg-white dark:bg-[#111827]/50
                           hover:border-indigo-200 dark:hover:border-indigo-500/30
                           hover:shadow-lg hover:shadow-indigo-500/5
                           transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-3">
                  {item.organization}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeData.achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="p-5 rounded-2xl border border-gray-200 dark:border-white/5
                           bg-white dark:bg-[#111827]/50
                           hover:border-amber-200 dark:hover:border-amber-500/20
                           hover:shadow-lg hover:shadow-amber-500/5
                           transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-500/10 
                                flex items-center justify-center mb-3">
                  <Star className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  {item.event}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
