import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="experience" className="py-24 relative bg-white dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-3 tracking-wide">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 
                          md:-translate-x-px" />

          {resumeData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              className={`relative flex items-start mb-12 last:mb-0
                ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full
                              border-2 border-indigo-500 bg-white dark:bg-[#0B1120]
                              flex items-center justify-center z-10">
                <Briefcase className="w-3.5 h-3.5 text-indigo-500" />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-6 rounded-2xl border border-gray-200 dark:border-white/5
                                bg-gray-50 dark:bg-[#111827]/50 hover:border-indigo-200 
                                dark:hover:border-indigo-500/20 transition-all duration-300">
                  <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400
                                   bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
