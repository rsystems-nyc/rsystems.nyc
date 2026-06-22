import type { CSSProperties } from "react";

// Google Maps-style teardrop, drawn with its tip at the origin (0,0) so it
// can be dropped straight onto a projected coordinate. ~14 user units tall.
const PIN_PATH =
  "M 0 0 C -2.16 -4.32, -4.5 -6.24, -4.5 -9.6 A 4.5 4.5 0 1 1 4.5 -9.6 C 4.5 -6.24, 2.16 -4.32, 0 0 Z";

// A single dropping pin. `delayMs` staggers the animation; `inView` triggers it;
// `reducedMotion` skips the motion entirely (pins simply appear).
export function Pin({
  delayMs,
  inView,
  reducedMotion,
}: {
  delayMs: number;
  inView: boolean;
  reducedMotion: boolean;
}) {
  const style: CSSProperties = reducedMotion
    ? { opacity: inView ? 1 : 0 }
    : {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-14px)",
        transition:
          "transform 2.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1.8s ease-out",
        transitionDelay: `${delayMs}ms`,
        willChange: "transform, opacity",
      };

  return (
    <g style={style}>
      <path d={PIN_PATH} fill="#E8500A" stroke="#0F1117" strokeWidth={0.4} />
      <circle cx={0} cy={-9.6} r={1.8} fill="#0F1117" />
    </g>
  );
}
