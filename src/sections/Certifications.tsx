import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';

export default function Certifications() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="certifications" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="advancements" side="right" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading step="05" kicker="Certifications" title="Professional Credentials" />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -5, transition: { duration: 0.14, ease: 'easeOut' } }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="pixel-panel pixel-lift flex flex-col px-4 py-5"
            >
              <span className="pixel-slot grid h-11 w-11 place-items-center" aria-hidden="true">
                <Award className="h-5 w-5 text-gold" />
              </span>

              <h3 className="mt-4 text-xs leading-relaxed text-ink">{cert.title}</h3>

              <p className="mt-3 font-pixel text-[11px] leading-relaxed text-accent">
                {cert.issuer}
              </p>

              <p className="mt-2">
                <span className="pixel-chip pixel-chip--gold pixel-chip--flat">{cert.date}</span>
              </p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-link mt-5 inline-flex items-center gap-1.5 font-pixel text-[10px]"
                >
                  View Credential
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
