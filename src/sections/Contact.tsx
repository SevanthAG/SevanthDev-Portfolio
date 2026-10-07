import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { Mail, MapPin, Phone, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';

const socials = [
  { href: resumeData.socials.github, label: 'GitHub', block: 'bg-ink' },
  { href: resumeData.socials.linkedin, label: 'LinkedIn', block: 'bg-accent-2' },
  { href: resumeData.socials.leetcode, label: 'LeetCode', block: 'bg-gold' },
];

export default function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="portal" side="left" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading step="07" kicker="Contact" title="Get In Touch" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mx-auto max-w-2xl"
        >
          <div className="pixel-panel">
            <header className="pixel-texture flex items-center gap-3 border-b-2 border-line bg-surface-2 px-4 py-3">
              <span className="pixel-slot grid h-8 w-8 place-items-center" aria-hidden="true">
                <span className="h-3 w-3 bg-block-grass" />
              </span>
              <h3 className="text-xs text-ink">Player Details</h3>
            </header>

            <dl className="divide-y-2 divide-line/40">
              <div className="flex items-start gap-4 px-4 py-4">
                <span className="pixel-slot grid h-9 w-9 shrink-0 place-items-center" aria-hidden="true">
                  <Mail className="h-4 w-4 text-accent" />
                </span>
                <div className="min-w-0">
                  <dt className="font-pixel text-[10px] uppercase tracking-wider text-ink-faint">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${resumeData.email}`}
                      className="pixel-link break-all font-body text-sm"
                    >
                      {resumeData.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4 px-4 py-4">
                <span className="pixel-slot grid h-9 w-9 shrink-0 place-items-center" aria-hidden="true">
                  <Phone className="h-4 w-4 text-accent-2" />
                </span>
                <div className="min-w-0">
                  <dt className="font-pixel text-[10px] uppercase tracking-wider text-ink-faint">
                    Phone
                  </dt>
                  <dd className="mt-1.5 font-body text-sm text-ink-muted">{resumeData.phone}</dd>
                </div>
              </div>

              <div className="flex items-start gap-4 px-4 py-4">
                <span className="pixel-slot grid h-9 w-9 shrink-0 place-items-center" aria-hidden="true">
                  <MapPin className="h-4 w-4 text-gold" />
                </span>
                <div className="min-w-0">
                  <dt className="font-pixel text-[10px] uppercase tracking-wider text-ink-faint">
                    Location
                  </dt>
                  <dd className="mt-1.5 font-body text-sm text-ink-muted">{resumeData.location}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="mt-8 text-center">
            <p className="font-pixel text-[11px] text-ink-muted">Connect with me</p>

            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-btn pixel-btn--sm pixel-btn--secondary"
                  >
                    {social.label === 'LeetCode' ? (
                      <Code2 className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <span aria-hidden="true" className={`h-3 w-3 ${social.block}`} />
                    )}
                    {social.label}
                  </a>
                </li>
              ))}

              <li>
                <a href={`mailto:${resumeData.email}`} className="pixel-btn pixel-btn--sm">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
