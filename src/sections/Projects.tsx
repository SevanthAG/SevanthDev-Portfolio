import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { techBlockColor } from '../data/skills';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';
import ProjectPreview from '../components/ProjectPreview';

export default function Projects() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="builds" side="right" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          step="03"
          kicker="Projects"
          title="What I've Built"
          subtitle="Real-world projects that demonstrate my skills and passion for building impactful software."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {resumeData.projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -5, transition: { duration: 0.14, ease: 'easeOut' } }}
              transition={{ duration: 0.45, delay: 0.12 * i }}
              className="pixel-panel pixel-lift project-card flex flex-col"
            >
              {/* Stylised pixel-art preview — swap for real screenshots when available */}
              <ProjectPreview title={project.title} />

              <div className="flex flex-1 flex-col px-4 py-5 sm:px-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-sm leading-snug text-ink">{project.title}</h3>
                  <span
                    className={`pixel-chip pixel-chip--flat uppercase ${
                      project.status === 'completed' ? 'pixel-chip--accent' : 'pixel-chip--gold'
                    }`}
                  >
                    {project.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>

                <p className="mt-2 font-pixel text-[11px] leading-relaxed text-accent">
                  {project.description}
                </p>

                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-ink-muted">
                  {project.longDescription}
                </p>

                {/* Technology blocks — same colour language as the inventory */}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="pixel-chip">
                      <span
                        aria-hidden="true"
                        className={`h-2.5 w-2.5 shrink-0 border border-black/30 ${techBlockColor(tech)}`}
                      />
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn pixel-btn--sm"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-btn pixel-btn--secondary pixel-btn--sm"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
