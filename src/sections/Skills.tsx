import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Code2, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Code2, Layout, Server, Database, Wrench, Cpu,
};

export default function Skills() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="skills" className="py-24 relative bg-gray-50/50 dark:bg-[#0B1120]/80">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-3 tracking-wide">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A comprehensive set of tools and technologies I use to build scalable, production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.skills.map((category, i) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="group p-5 rounded-2xl border border-gray-200 dark:border-white/5
                           bg-white dark:bg-[#111827]/50 
                           hover:border-indigo-200 dark:hover:border-indigo-500/30
                           hover:shadow-lg hover:shadow-indigo-500/5
                           transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 
                                  flex items-center justify-center
                                  group-hover:bg-indigo-200 dark:group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-medium
                                 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300
                                 border border-gray-200 dark:border-white/5
                                 hover:border-indigo-300 dark:hover:border-indigo-500/30
                                 hover:text-indigo-600 dark:hover:text-indigo-400
                                 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
