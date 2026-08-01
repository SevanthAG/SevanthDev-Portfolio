import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { GraduationCap, Target, BookOpen } from 'lucide-react';

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="py-24 relative bg-white dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-3 tracking-wide">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {resumeData.about}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/5
                         bg-gray-50 dark:bg-[#111827]/50 hover:border-indigo-200 dark:hover:border-indigo-500/20
                         transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Career Objective
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {resumeData.careerObjective}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/5
                         bg-gray-50 dark:bg-[#111827]/50 hover:border-indigo-200 dark:hover:border-indigo-500/20
                         transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Learning Journey
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {resumeData.learningJourney}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl border border-gray-200 dark:border-white/5
                         bg-gray-50 dark:bg-[#111827]/50 hover:border-indigo-200 dark:hover:border-indigo-500/20
                         transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Education
              </h3>
              <div className="space-y-3">
                {resumeData.education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {edu.institution} &middot; {edu.year}
                    </p>
                    <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {edu.score}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
