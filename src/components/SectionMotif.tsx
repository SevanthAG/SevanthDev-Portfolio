type Rect = [x: number, y: number, w: number, h: number];

/**
 * Small pixel-art watermarks, one per part of the world, drawn from plain
 * rectangles on a 16x16 grid. They are rendered at very low opacity behind
 * each section so the page reads as one continuous world without turning
 * every section into a game UI.
 */
const motifs: Record<string, Rect[]> = {
  /* Player profile: blocky head and shoulders */
  profile: [
    [4, 2, 8, 7],
    [3, 9, 10, 5],
    [1, 9, 2, 4],
    [13, 9, 2, 4],
  ],
  /* Inventory: a 3x3 grid of slots */
  inventory: [
    [1, 1, 4, 4], [6, 1, 4, 4], [11, 1, 4, 4],
    [1, 6, 4, 4], [6, 6, 4, 4], [11, 6, 4, 4],
    [1, 11, 4, 4], [6, 11, 4, 4], [11, 11, 4, 4],
  ],
  /* Builds: stacked blocks of a structure */
  builds: [
    [1, 11, 14, 4],
    [3, 7, 10, 4],
    [5, 3, 6, 4],
  ],
  /* Journey: an ascending stair with a marker */
  journey: [
    [1, 13, 4, 2],
    [5, 11, 4, 4],
    [9, 9, 4, 6],
    [12, 7, 3, 8],
    [12, 1, 1, 6],
    [9, 2, 3, 2],
  ],
  /* Advancements: a trophy */
  advancements: [
    [3, 2, 10, 6],
    [1, 3, 2, 3],
    [13, 3, 2, 3],
    [7, 8, 2, 3],
    [4, 11, 8, 2],
  ],
  /* Team: three blocky figures */
  team: [
    [2, 3, 3, 3],
    [7, 2, 3, 3],
    [11, 3, 3, 3],
    [1, 7, 4, 6],
    [6, 6, 4, 7],
    [10, 7, 4, 6],
  ],
  /* Exit portal: a frame with a spark inside */
  portal: [
    [2, 1, 12, 2],
    [2, 13, 12, 2],
    [2, 3, 2, 10],
    [12, 3, 2, 10],
    [7, 4, 2, 2],
    [4, 7, 2, 2],
    [10, 7, 2, 2],
    [7, 10, 2, 2],
    [7, 7, 2, 2],
  ],
};

interface SectionMotifProps {
  variant:
    | 'profile'
    | 'inventory'
    | 'builds'
    | 'journey'
    | 'advancements'
    | 'team'
    | 'portal';
  /** Which top corner of the section the watermark sits in. */
  side?: 'left' | 'right';
}

export default function SectionMotif({ variant, side = 'right' }: SectionMotifProps) {
  const rects = motifs[variant];

  return (
    <div className={`section-motif section-motif--${side}`} aria-hidden="true">
      <svg viewBox="0 0 16 16" shapeRendering="crispEdges" fill="currentColor" focusable="false">
        {rects.map(([x, y, w, h], index) => (
          <rect key={index} x={x} y={y} width={w} height={h} />
        ))}
      </svg>
    </div>
  );
}
