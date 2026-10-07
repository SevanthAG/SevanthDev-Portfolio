import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { GraduationCap, Target, BookOpen } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';

const cards = [
  {
    title: 'Career Objective',
    icon: Target,
    accent: 'text-accent',
    body: resumeData.careerObjective,
  },
  {
    title: 'Learning Journey',
    icon: BookOpen,
    accent: 'text-accent-2',
    body: resumeData.learningJourney,
  },
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="profile" side="left" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          step="01"
          kicker="About Me"
          title="My Story"
          subtitle={resumeData.about}
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="pixel-panel flex flex-col"
            >
              <header className="pixel-texture flex items-center gap-3 border-b-2 border-line bg-surface-2 px-4 py-3">
                <span className="pixel-slot grid h-9 w-9 shrink-0 place-items-center">
                  <card.icon className={`h-4 w-4 ${card.accent}`} aria-hidden="true" />
                </span>
                <h3 className="text-xs leading-snug text-ink">{card.title}</h3>
              </header>

              <div className="flex-1 px-4 py-4">
                <p className="font-body text-sm leading-relaxed text-ink-muted">{card.body}</p>
              </div>
            </motion.article>
          ))}

          {/* Education — same panel style, list of existing education entries */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pixel-panel flex flex-col"
          >
            <header className="pixel-texture flex items-center gap-3 border-b-2 border-line bg-surface-2 px-4 py-3">
              <span className="pixel-slot grid h-9 w-9 shrink-0 place-items-center">
                <GraduationCap className="h-4 w-4 text-gold" aria-hidden="true" />
              </span>
              <h3 className="text-xs leading-snug text-ink">Education</h3>
            </header>

            <ul className="flex-1 divide-y-2 divide-line/40">
              {resumeData.education.map((edu) => (
                <li key={edu.institution} className="px-4 py-3.5">
                  <p className="font-pixel text-[11px] leading-relaxed text-ink">{edu.degree}</p>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-ink-muted">
                    {edu.institution} &middot; {edu.year}
                  </p>
                  <p className="mt-1.5">
                    <span className="pixel-chip pixel-chip--accent pixel-chip--flat">
                      {edu.score}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
