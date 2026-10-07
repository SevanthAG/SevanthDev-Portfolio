interface ProjectPreviewProps {
  /** Project title — used to derive a stable scene and monogram per project. */
  title: string;
}

/** Small deterministic hash so each project always gets the same scene. */
function seedFrom(value: string) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function initialsFrom(title: string) {
  return title
    .split(/[\s-]+/)
    .filter((word) => /[a-z0-9]/i.test(word))
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Stylised pixel-art preview for a project: a block "build" skyline plus the
 * project monogram, generated from the title. It uses no image assets, stays
 * crisp on every display and adapts to the day/night palette.
 */
export default function ProjectPreview({ title }: ProjectPreviewProps) {
  let state = seedFrom(title);
  const columns = Array.from({ length: 11 }, () => {
    state = (Math.imul(state, 1103515245) + 12345) >>> 0;
    return 0.24 + ((state >>> 8) % 100) / 100 * 0.46;
  });

  return (
    <div className="project-scene pixel-texture--strong aspect-video border-b-2 border-line bg-surface-inset">
      <div className="project-scene__skyline" aria-hidden="true">
        {columns.map((height, index) => (
          <span key={index} style={{ height: `${Math.round(height * 100)}%` }} />
        ))}
      </div>

      <span
        aria-hidden="true"
        className="pixel-slot relative z-10 grid h-16 w-16 place-items-center font-pixel text-xl text-ink"
      >
        {initialsFrom(title) || '★'}
      </span>
    </div>
  );
}
