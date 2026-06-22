"use client";

import { useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Feature, Geometry } from "geojson";
import countriesTopo from "world-atlas/countries-110m.json";
import type { MapPoint } from "@/app/components/maps/types";
import { Pin } from "@/app/components/maps/Pin";
import {
  staggerDelay,
  useInView,
  usePrefersReducedMotion,
} from "@/app/components/maps/useMapAnimation";

// Flat Mercator projection — a familiar straight-edged map rather than the
// curved Equal Earth (which pinched Africa) or full plate-carrée (which read as
// a wide, stretched banner). Mercator is conformal, so land keeps its natural
// shape. The view is cropped to the populated latitudes (the empty,
// Mercator-enlarged Arctic above ~76°N is trimmed), and the top edge fades to
// transparent so that crop reads as a soft blend rather than a hard cut.
const WIDTH = 800;
const HEIGHT = 422;
const PAD = 4;
const LAT_NORTH = 76;
const LAT_SOUTH = -56;
// Center longitude. +11.5° puts the projection's seam in the Bering Strait gap
// between the Seward Peninsula (~-168.1°) and St. Lawrence Island (~-168.7°),
// instead of the mid-Pacific. Russia's far-east tip and St. Lawrence Island
// (both cross the antimeridian) render on the right edge rather than as cut-off
// slivers beside Alaska, so mainland Alaska is the clean left-most landmass.
const CENTER_LNG = 11.5;
const LAND = "#E7E6E3";
const BORDER = "#808080";

// Antarctica (010) and the sub-Antarctic Fr. S. Antarctic Lands (260).
const ANTARCTIC_IDS = new Set(["010", "260"]);

// Round projected coordinates to 3 decimals (matching d3-geo's geoPath output)
// so the server- and client-rendered marker transforms are byte-identical.
// Without this, last-ULP float differences between the Node and browser engines
// cause a hydration mismatch that can break hydration for the whole page.
const round = (n: number) => Math.round(n * 1000) / 1000;

// Mercator fitted so longitude spans the full width and the [LAT_SOUTH, LAT_NORTH]
// window fills the height. Derived from the constants above; HEIGHT is fixed so
// the viewBox is byte-identical between server and client.
const mercatorY = (lat: number) =>
  Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
const SCALE = (WIDTH - 2 * PAD) / (2 * Math.PI);
const CENTER_LAT =
  (180 / Math.PI) *
  (2 * Math.atan(Math.exp((mercatorY(LAT_NORTH) + mercatorY(LAT_SOUTH)) / 2)) -
    Math.PI / 2);

const projection = geoMercator()
  .scale(SCALE)
  .center([CENTER_LNG, CENTER_LAT])
  .translate([WIDTH / 2, HEIGHT / 2]);
const pathOf = geoPath(projection);

// Borders are computed once at module load: convert the bundled TopoJSON to
// GeoJSON, drop Antarctica, and pre-render each country's path string. Doing this
// synchronously (no effect) means the borders are in the server-rendered HTML,
// never an empty frame.
const allCountries = feature(
  countriesTopo,
  countriesTopo.objects.countries,
) as unknown as { features: Feature<Geometry>[] };

// Key by array index: this list is built once and never reordered, and a few
// features (N. Cyprus, Somaliland, Kosovo) have no id, so an id-based key would
// collide with a numeric ISO id (e.g. "158" Taiwan).
const countryPaths = allCountries.features
  .filter((country) => !ANTARCTIC_IDS.has(String(country.id)))
  .map((country, index) => ({
    key: index,
    d: pathOf(country) ?? "",
  }));

export default function WorldMap({
  points,
  showCurrent = true,
  showPrevious = true,
}: {
  points: MapPoint[];
  showCurrent?: boolean;
  showPrevious?: boolean;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const reducedMotion = usePrefersReducedMotion();

  const markers = useMemo(
    () =>
      points
        .map((point) => {
          const xy = projection([point.lng, point.lat]);
          return xy
            ? { id: point.id, former: point.former ?? false, x: round(xy[0]), y: round(xy[1]) }
            : null;
        })
        .filter(
          (marker): marker is { id: string; former: boolean; x: number; y: number } =>
            marker !== null,
        ),
    [points],
  );

  return (
    <div ref={ref} className="overflow-hidden rounded-xl">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label="World map showing client locations"
      >
        {/* Fade the land at the edges so the antimeridian-wrapped fragments blend
            out: a soft top (the ~76°N crop), a very steep left edge (tiny Russia
            fragments fade in next to Alaska), and a gentle right edge (Russia's
            far-east tip fades out). An extra radial fade at the top-right corner
            widens the right fade there only, so Russia's seam/clip line blends
            away without fading the lower-right (New Zealand) any more. The masks
            nest so their fades multiply; only the land is masked, never the pins. */}
        <defs>
          <linearGradient id="world-fade-y" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity={0} />
            <stop offset="0.12" stopColor="#fff" stopOpacity={1} />
            <stop offset="1" stopColor="#fff" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="world-fade-x" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity={0} />
            <stop offset="0.012" stopColor="#fff" stopOpacity={1} />
            <stop offset="0.88" stopColor="#fff" stopOpacity={1} />
            <stop offset="1" stopColor="#fff" stopOpacity={0} />
          </linearGradient>
          <radialGradient
            id="world-fade-ur"
            gradientUnits="userSpaceOnUse"
            cx={WIDTH}
            cy={0}
            r={300}
          >
            <stop offset="0" stopColor="#fff" stopOpacity={0} />
            <stop offset="0.75" stopColor="#fff" stopOpacity={1} />
            <stop offset="1" stopColor="#fff" stopOpacity={1} />
          </radialGradient>
          <mask id="world-fade-y-mask">
            <rect width={WIDTH} height={HEIGHT} fill="url(#world-fade-y)" />
          </mask>
          <mask id="world-fade-x-mask">
            <rect width={WIDTH} height={HEIGHT} fill="url(#world-fade-x)" />
          </mask>
          <mask id="world-fade-ur-mask">
            <rect width={WIDTH} height={HEIGHT} fill="url(#world-fade-ur)" />
          </mask>
        </defs>
        <g mask="url(#world-fade-x-mask)">
          <g mask="url(#world-fade-y-mask)">
            <g mask="url(#world-fade-ur-mask)">
              {countryPaths.map((country) => (
                <path
                  key={country.key}
                  d={country.d}
                  fill={LAND}
                  stroke={BORDER}
                  strokeWidth={0.5}
                />
              ))}
            </g>
          </g>
        </g>
        {markers.map((marker, index) => (
          <g key={marker.id} transform={`translate(${marker.x} ${marker.y})`}>
            <Pin
              delayMs={staggerDelay(index)}
              inView={inView && (marker.former ? showPrevious : showCurrent)}
              reducedMotion={reducedMotion}
              former={marker.former}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
