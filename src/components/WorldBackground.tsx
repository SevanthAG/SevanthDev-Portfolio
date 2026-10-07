import { useWorldPhase } from '../hooks/useWorldPhase';

/**
 * Decorative, fixed-position Minecraft-inspired world that sits behind the
 * page content: sky -> distant hills -> grass -> dirt -> stone.
 *
 * The tint layers on top are driven by scroll position (day -> afternoon ->
 * sunset -> night). They are very low strength and purely atmospheric; text
 * readability always comes from the opaque panels above them.
 * Purely presentational, so the whole layer is hidden from assistive tech.
 */
export default function WorldBackground() {
  useWorldPhase();

  return (
    <div className="world" aria-hidden="true">
      <div className="world__sky" />
      <div className="world__stars" />

      <div className="world__clouds">
        <span className="px-cloud px-cloud--1" />
        <span className="px-cloud px-cloud--2" />
        <span className="px-cloud px-cloud--3" />
      </div>

      <div className="world__hills world__hills--far" />
      <div className="world__hills world__hills--near" />
      <div className="world__ground" />

      {/* Light direction through the day */}
      <div className="world__tint world__tint--warm" />
      <div className="world__tint world__tint--dusk" />
      <div className="world__tint world__tint--night" />
    </div>
  );
}
