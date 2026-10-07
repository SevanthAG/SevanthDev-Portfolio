import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Users, Trophy, Star, Check } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';

/** Summary of what the portfolio already proves — no new claims, only data. */
const advancements = [
  {
    title: `Built and shipped ${resumeData.projects[0].title}`,
    detail: resumeData.projects[0].description,
  },
  {
    title: 'Completed a full-stack development internship',
    detail: `${resumeData.experience[0].company} · ${resumeData.experience[0].period}`,
  },
  {
    title: `Earned ${resumeData.certifications.length} professional certifications`,
    detail: resumeData.certifications.map((cert) => cert.issuer).join(' · '),
  },
  {
    title: `Studying ${resumeData.education[0].degree}`,
    detail: `${resumeData.education[0].score} · Class of ${resumeData.education[0].year}`,
  },
  {
    title: `Coordinated ${resumeData.leadership.length} college technical events`,
    detail: resumeData.leadership.map((role) => role.organization).join(' · '),
  },
  {
    title: `Placed ${resumeData.achievements[0].title.toLowerCase()} in a prompt engineering competition`,
    detail: resumeData.achievements[0].event,
  },
];

export default function Leadership() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="leadership" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="team" side="right" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading step="06" kicker="Leadership & Achievements" title="Beyond the Code" />

        {/* Advancements: a scannable summary of what is already in the resume */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="pixel-panel mb-14"
        >
          <header className="pixel-texture flex items-center gap-3 border-b-2 border-line bg-surface-2 px-4 py-3">
            <span className="pixel-slot grid h-8 w-8 shrink-0 place-items-center">
              <Trophy className="h-4 w-4 text-gold" aria-hidden="true" />
            </span>
            <h3 className="text-xs text-ink">Advancements</h3>
          </header>

          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 px-4 py-5 sm:grid-cols-2 lg:grid-cols-3">
            {advancements.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span
                  className="pixel-slot mt-0.5 grid h-6 w-6 shrink-0 place-items-center"
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5 text-gold" />
                </span>
                <div className="min-w-0">
                  <p className="font-pixel text-[11px] leading-relaxed text-ink">{item.title}</p>
                  <p className="mt-1.5 font-body text-xs leading-relaxed text-ink-muted">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </motion.article>

        {/* Leadership roles */}
        <div className="mb-14">
          <h3 className="mb-6 flex items-center gap-3 text-xs text-ink">
            <span className="pixel-slot grid h-8 w-8 place-items-center" aria-hidden="true">
              <Users className="h-4 w-4 text-accent" />
            </span>
            Leadership Roles
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resumeData.leadership.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5, transition: { duration: 0.14, ease: 'easeOut' } }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="pixel-panel pixel-lift px-4 py-5"
              >
                <h4 className="text-xs leading-snug text-ink">{item.title}</h4>
                <p className="mt-2 font-pixel text-[11px] leading-relaxed text-accent">
                  {item.organization}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-6 flex items-center gap-3 text-xs text-ink">
            <span className="pixel-slot grid h-8 w-8 place-items-center" aria-hidden="true">
              <Star className="h-4 w-4 text-gold" />
            </span>
            Achievements
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resumeData.achievements.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -5, transition: { duration: 0.14, ease: 'easeOut' } }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="pixel-panel pixel-lift px-4 py-5"
              >
                <span className="pixel-slot grid h-9 w-9 place-items-center" aria-hidden="true">
                  <Star className="h-4 w-4 text-gold" />
                </span>
                <h4 className="mt-4 text-xs leading-snug text-ink">{item.title}</h4>
                <p className="mt-2 font-pixel text-[11px] leading-relaxed text-accent">
                  {item.event}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink-muted">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
