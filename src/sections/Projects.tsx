import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { ExternalLink, Image } from 'lucide-react';

export default function Projects() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="py-24 relative bg-gray-50/50 dark:bg-[#0B1120]/80">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-3 tracking-wide">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Real-world projects that demonstrate my skills and passion for building impactful software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group rounded-2xl border border-gray-200 dark:border-white/5
                         bg-white dark:bg-[#111827]/50 overflow-hidden
                         hover:border-indigo-200 dark:hover:border-indigo-500/30
                         hover:shadow-xl hover:shadow-indigo-500/5
                         transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                              flex items-center justify-center border-b border-gray-200 dark:border-white/5">
                <Image className="w-10 h-10 text-gray-300 dark:text-gray-600" />
                {/* TODO: Replace with actual project screenshots */}
              </div>

              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`text-[10px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider
                    ${project.status === 'completed'
                      ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                      : 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium
                                 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400
                                 border border-gray-200 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                                 bg-gray-900 dark:bg-white text-white dark:text-gray-900
                                 hover:opacity-90 transition-opacity"
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                                 border border-gray-300 dark:border-white/10
                                 text-gray-700 dark:text-gray-300
                                 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
