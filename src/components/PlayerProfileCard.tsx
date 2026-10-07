import { Compass, GraduationCap, MapPin, Sparkles, User } from 'lucide-react';
import { resumeData } from '../data/resume';

/**
 * Identity card for the hero: portrait, role and the facts that already exist
 * in the portfolio data (location, education, academic record, current focus)
 * plus the primary links. Nothing here is invented.
 */
export default function PlayerProfileCard() {
  const education = resumeData.education[0];

  const details = [
    { icon: MapPin, label: 'Location', value: resumeData.location },
    {
      icon: GraduationCap,
      label: 'Education',
      value: `${education.degree} · ${education.year}`,
    },
    { icon: Sparkles, label: 'Academic record', value: education.score },
    { icon: Compass, label: 'Current focus', value: resumeData.learningJourney },
  ];

  return (
    <aside className="pixel-panel w-full max-w-sm">
      <header className="pixel-texture flex items-center gap-3 border-b-2 border-line bg-surface-2 px-4 py-3">
        <span className="pixel-slot grid h-7 w-7 shrink-0 place-items-center">
          <User className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        </span>
        <h2 className="text-[11px] leading-none text-ink">Player Profile</h2>
      </header>

      <div className="p-3 sm:p-4">
        <div className="pixel-slot p-1.5">
          <img
            src="/profile-photo.jpeg"
            alt="Portrait of Sevanth A G"
            width={512}
            height={512}
            className="aspect-square w-full object-cover"
          />
        </div>

        <p className="mt-3 font-pixel text-sm leading-snug text-ink">Sevanth A G</p>
        <p className="mt-1.5 font-body text-xs text-ink-muted">{resumeData.title}</p>

        <dl className="mt-4 space-y-3">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-start gap-3">
              <span
                className="pixel-slot grid h-8 w-8 shrink-0 place-items-center"
                aria-hidden="true"
              >
                <detail.icon className="h-3.5 w-3.5 text-accent" />
              </span>
              <div className="min-w-0">
                <dt className="font-pixel text-[9px] uppercase tracking-wider text-ink-faint">
                  {detail.label}
                </dt>
                <dd className="mt-1 font-body text-xs leading-relaxed text-ink-muted">
                  {detail.value}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-wrap gap-2 border-t-2 border-line px-3 py-3 sm:px-4">
        <a
          href={resumeData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn pixel-btn--sm pixel-btn--secondary"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

        <a
          href={resumeData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="pixel-btn pixel-btn--sm pixel-btn--secondary"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>

        <a
          href="#projects"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="pixel-btn pixel-btn--sm"
        >
          View Projects
        </a>
      </div>
    </aside>
  );
}
