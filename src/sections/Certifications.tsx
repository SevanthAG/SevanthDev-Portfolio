import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="certifications" className="py-24 relative bg-white dark:bg-[#0B1120]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-500 dark:text-indigo-400 font-medium text-sm mb-3 tracking-wide">
            Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Credentials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resumeData.certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group p-6 rounded-2xl border border-gray-200 dark:border-white/5
                         bg-gray-50 dark:bg-[#111827]/50
                         hover:border-indigo-200 dark:hover:border-indigo-500/30
                         hover:shadow-lg hover:shadow-indigo-500/5
                         transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/10 
                              flex items-center justify-center mb-4
                              group-hover:bg-amber-200 dark:group-hover:bg-amber-500/20 transition-colors">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">{cert.issuer}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium
                             text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View Credential
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
