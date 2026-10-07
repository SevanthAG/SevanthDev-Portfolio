import type { ReactNode } from 'react';

interface SectionHeadingProps {
  /** Small block label above the title, e.g. "Skills". */
  kicker: string;
  /** Section title rendered in the pixel font. */
  title: string;
  /** Optional supporting sentence in the body font. */
  subtitle?: ReactNode;
  /** Optional block icon shown inside the kicker chip. */
  icon?: ReactNode;
  /** Waypoint number, e.g. "03" — keeps the sections feeling like one journey. */
  step?: string;
}

/**
 * Shared section header used by every section so the pixel/block styling
 * stays consistent and is only defined once.
 */
export default function SectionHeading({ kicker, title, subtitle, icon, step }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center sm:mb-16">
      <p className="pixel-kicker">
        {step && (
          <>
            <span className="text-ink-faint">{step}</span>
            <span className="h-3 w-[3px] shrink-0 bg-line" aria-hidden="true" />
          </>
        )}
        <span className="inline-block h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
        {icon}
        {kicker}
      </p>

      <h2 className="pixel-shadow mt-5 text-2xl leading-tight text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink-muted sm:text-base">
          {subtitle}
        </p>
      )}

      <div className="mt-6 flex items-center justify-center gap-1.5" aria-hidden="true">
        <span className="h-2 w-8 bg-accent" />
        <span className="h-2 w-2 bg-accent-2" />
        <span className="h-2 w-2 bg-line" />
      </div>
    </div>
  );
}
