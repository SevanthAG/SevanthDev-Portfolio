import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal';
import { resumeData } from '../data/resume';
import { getSkillMeta, techBlockColor } from '../data/skills';
import { Code2, Layout, Server, Database, Wrench, Cpu } from 'lucide-react';
import type { ComponentType } from 'react';
import SectionHeading from '../components/SectionHeading';
import SectionMotif from '../components/SectionMotif';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Code2, Layout, Server, Database, Wrench, Cpu,
};

/** Detail body shared by the floating tooltip and the phone dock. */
function SkillDetail({ skill }: { skill: string }) {
  const meta = getSkillMeta(skill);

  return (
    <>
      <p className="font-pixel text-[10px] leading-none text-ink">{skill}</p>

      {meta.learning && (
        <p className="mt-2">
          <span className="pixel-chip pixel-chip--gold pixel-chip--flat">Learning</span>
        </p>
      )}

      <p className="mt-2 font-body text-xs leading-relaxed text-ink-muted">{meta.short}</p>

      {meta.usage && (
        <>
          <p className="mt-2 font-pixel text-[9px] uppercase tracking-wider text-ink-faint">
            Used in
          </p>
          <p className="mt-1 font-body text-xs leading-relaxed text-accent">{meta.usage}</p>
        </>
      )}
    </>
  );
}

export default function Skills() {
  const { ref, isVisible } = useReveal();
  const [inspected, setInspected] = useState<string | null>(null);

  const itemId = (category: string, skill: string) => `${category}:${skill}`;

  return (
    <section id="skills" className="relative overflow-hidden py-20 sm:py-24">
      <SectionMotif variant="inventory" side="left" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" ref={ref}>
        <SectionHeading
          step="02"
          kicker="Skills"
          title="Technologies I Work With"
          subtitle="A comprehensive set of tools and technologies I use to build scalable, production-ready applications. Hover or tap an item to inspect it."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resumeData.skills.map((category, i) => {
            const Icon = iconMap[category.icon] || Code2;
            const inspectedSkill =
              category.skills.find((skill) => itemId(category.title, skill) === inspected) ?? null;

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="pixel-panel flex flex-col"
              >
                <header className="pixel-texture flex items-center gap-3 border-b-2 border-line bg-surface-2 px-4 py-3">
                  <span className="pixel-slot grid h-9 w-9 shrink-0 place-items-center">
                    <Icon className="h-4 w-4 text-ink-muted" />
                  </span>
                  <h3 className="text-[11px] leading-snug text-ink">{category.title}</h3>
                </header>

                {/* Inventory-style item slots. The label carries the full detail
                    for assistive tech; the tooltip is the visual equivalent. */}
                <ul className="flex flex-1 flex-wrap content-start gap-2 px-4 py-4">
                  {category.skills.map((skill) => {
                    const meta = getSkillMeta(skill);
                    const id = itemId(category.title, skill);
                    const isInspected = inspected === id;

                    return (
                      <li key={skill} className="skill-item">
                        <button
                          type="button"
                          onMouseEnter={() => setInspected(id)}
                          onMouseLeave={() => setInspected(null)}
                          onFocus={() => setInspected(id)}
                          onBlur={() => setInspected(null)}
                          onClick={() => setInspected(isInspected ? null : id)}
                          onKeyDown={(event) => {
                            if (event.key === 'Escape') setInspected(null);
                          }}
                          className="pixel-slot pixel-slot--interactive flex items-center gap-2 px-2.5 py-2"
                        >
                          <span
                            aria-hidden="true"
                            className={`h-3 w-3 shrink-0 border border-black/30 ${techBlockColor(skill)}`}
                          />
                          <span className="font-pixel text-[11px] leading-none text-ink">
                            {skill}
                          </span>
                          <span className="sr-only">
                            {meta.short}
                            {meta.usage ? `. Used in: ${meta.usage}` : ''}
                            {meta.learning ? '. Currently learning.' : ''}
                          </span>
                        </button>

                        {/* Desktop: floating inspection tooltip */}
                        {isInspected && (
                          <div className="skill-tip hidden sm:block" aria-hidden="true">
                            <SkillDetail skill={skill} />
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>

                {/* Phone: docked inspection bar so nothing can overflow */}
                {inspectedSkill && (
                  <div
                    className="border-t-2 border-line bg-surface-inset px-4 py-3 sm:hidden"
                    aria-hidden="true"
                  >
                    <p className="font-pixel text-[9px] uppercase tracking-wider text-ink-faint">
                      Inspecting
                    </p>
                    <div className="mt-2 bg-surface p-3">
                      <SkillDetail skill={inspectedSkill} />
                    </div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
