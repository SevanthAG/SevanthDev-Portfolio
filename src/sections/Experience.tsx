import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Briefcase, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';

export default function Experience() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="experience" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="journey" side="left" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          step="04"
          kicker="Experience"
          title="Professional Journey"
          subtitle="My progress through the world, one level at a time."
        />

        <ol className="relative mx-auto max-w-3xl">
          {/* Block rail connecting the progression nodes */}
          <span
            aria-hidden="true"
            className="pixel-texture absolute bottom-4 left-[1.375rem] top-4 w-1.5 bg-line"
          />

          {resumeData.experience.map((exp, i) => {
            const level = String(i + 1).padStart(2, '0');

            return (
              <motion.li
                key={`${exp.title}-${exp.company}`}
                initial={{ opacity: 0, y: 24 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.15 * i }}
                className="relative pb-8 pl-16 last:pb-0 sm:pl-20"
              >
                {/* Level node */}
                <span
                  aria-hidden="true"
                  className="pixel-panel absolute left-0 top-0 grid h-12 w-12 place-items-center"
                >
                  <Briefcase className="h-4 w-4 text-accent" />
                </span>

                <article className="pixel-panel">
                  <header className="pixel-texture flex flex-wrap items-center gap-x-3 gap-y-2 border-b-2 border-line bg-surface-2 px-4 py-3">
                    <span className="pixel-chip pixel-chip--accent pixel-chip--flat">
                      LEVEL {level}
                    </span>
                    <span className="font-pixel text-[10px] text-ink-muted">{exp.period}</span>
                  </header>

                  <div className="px-4 py-5 sm:px-5">
                    <h3 className="text-sm leading-snug text-ink">{exp.title}</h3>
                    <p className="mt-2 font-pixel text-[11px] leading-relaxed text-accent">
                      {exp.company}
                    </p>

                    <h4 className="mt-5 font-pixel text-[10px] uppercase tracking-wider text-ink-faint">
                      Objectives
                    </h4>
                    <ul className="mt-3 space-y-3">
                      {exp.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="pixel-slot mt-0.5 grid h-5 w-5 shrink-0 place-items-center"
                          >
                            <Check className="h-3 w-3 text-accent" />
                          </span>
                          <span className="font-body text-sm leading-relaxed text-ink-muted">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
