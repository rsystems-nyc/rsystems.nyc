"use client";

import { useEffect, useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import type { FeatureCollection, MultiPoint, Polygon } from "geojson";
import type { MapPoint } from "@/app/components/maps/types";
import { Pin } from "@/app/components/maps/Pin";
import {
  staggerDelay,
  useInView,
  usePrefersReducedMotion,
} from "@/app/components/maps/useMapAnimation";

// Square viewport: NYC is roughly as wide as it is tall in Mercator. Paired with
// the wide world map via column proportions so both render at equal heights.
const WIDTH = 480;
const HEIGHT = 480;
const PAD = 24;
const LAND = "#E7E6E3";
const BORDER = "#808080";

// Borough boundaries (shoreline-clipped) from NYC Open Data. Simplified
// server-side with SoQL so the payload is ~110KB instead of the ~3MB raw export.
const NYC_BOROUGHS_URL =
  "https://data.cityofnewyork.us/resource/gthc-hcne.geojson?$select=simplify(the_geom,0.0005)%20as%20the_geom,boroname";

// The projection is fit to this geographic box: zoomed on Manhattan but extended
// south-west far enough to show Snug Harbor on Staten Island's north shore in the
// lower-left corner. Span ratio (~1.32:1 lng:lat) keeps the box ~square in
// Mercator at this latitude, so it fills the square viewport.
const FRAME_SW: [number, number] = [-74.115, 40.625];
const FRAME_NE: [number, number] = [-73.87, 40.81];
const FRAME: MultiPoint = {
  type: "MultiPoint",
  coordinates: [FRAME_SW, FRAME_NE],
};

// Central Park, as its four corners (it's a parallelogram tilted with the
// Manhattan street grid). Drawn as an outline on top of the Manhattan land,
// the same way country/borough borders are stroked.
const CENTRAL_PARK: Polygon = {
  type: "Polygon",
  coordinates: [
    [
      [-73.9819, 40.7681], // SW — W 59th & Central Park West
      [-73.9732, 40.7644], // SE — E 59th & 5th Ave
      [-73.9497, 40.7969], // NE — E 110th & 5th Ave
      [-73.9583, 40.8006], // NW — W 110th & Central Park West
      [-73.9819, 40.7681],
    ],
  ],
};

// Round to 3 decimals (matching geoPath) so server/client marker transforms are
// identical and don't trigger a hydration mismatch from float ULP differences.
const round = (n: number) => Math.round(n * 1000) / 1000;

// Plot every client that falls within the visible frame.
const inFrame = (point: MapPoint) =>
  point.lat >= FRAME_SW[1] &&
  point.lat <= FRAME_NE[1] &&
  point.lng >= FRAME_SW[0] &&
  point.lng <= FRAME_NE[0];

// New Jersey (Jersey City / Hoboken) falls inside the frame, but no NJ land is
// drawn — so those pins would float in the Hudson. Drop them from the NYC map;
// they still appear on the world map and in the directory. The lat cutoff keeps
// Staten Island, which sits south of the NJ waterfront.
const inNewJersey = (point: MapPoint) => point.lng < -74.02 && point.lat > 40.67;

export default function NYCMap({
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
  const [geo, setGeo] = useState<FeatureCollection | null>(null);
  const [dropped, setDropped] = useState(false);

  const framePoints = useMemo(
    () => points.filter((p) => inFrame(p) && !inNewJersey(p)),
    [points],
  );

  // Fetch borough outlines once, on mount.
  useEffect(() => {
    const controller = new AbortController();
    fetch(NYC_BOROUGHS_URL, { signal: controller.signal })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`)),
      )
      .then((data: FeatureCollection) => setGeo(data))
      .catch((error) => {
        if (!controller.signal.aborted) {
          console.error("Failed to load NYC borough boundaries:", error);
        }
      });
    return () => controller.abort();
  }, []);

  // Once the boroughs load, project them and the pins through a Mercator fit to
  // the FRAME (zoomed on Manhattan), and pre-render the path strings/coordinates.
  const { boroughPaths, centralParkPath, markers } = useMemo(() => {
    if (!geo) return { boroughPaths: [], centralParkPath: "", markers: [] };
    const projection = geoMercator().fitExtent(
      [
        [PAD, PAD],
        [WIDTH - PAD, HEIGHT - PAD],
      ],
      FRAME,
    );
    const pathOf = geoPath(projection);
    return {
      boroughPaths: geo.features.map((borough, index) => ({
        key: index,
        d: pathOf(borough) ?? "",
      })),
      centralParkPath: pathOf(CENTRAL_PARK) ?? "",
      markers: framePoints
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
    };
  }, [geo, framePoints]);

  // Flip to the dropped state one frame after the pins mount in view, so the
  // transition from the hidden state actually plays.
  useEffect(() => {
    if (!geo || !inView || dropped) return;
    const id = requestAnimationFrame(() => setDropped(true));
    return () => cancelAnimationFrame(id);
  }, [geo, inView, dropped]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xl"
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
    >
      {geo ? (
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          style={{ width: "100%", height: "auto", display: "block" }}
          role="img"
          aria-label="Map of New York City showing client locations"
        >
          {/* Fade the land toward the edges so it blends into the transparent
              background: a steep left edge (Staten Island fills in left-to-right),
              a gentler right edge (Brooklyn/Queens fade out), and steeper top and
              bottom edges. Manhattan (mid-frame) stays solid. The two masks nest
              so their fades multiply; only the land is masked, never the pins. */}
          <defs>
            <linearGradient id="nyc-fade-x" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#fff" stopOpacity={0} />
              <stop offset="0.05" stopColor="#fff" stopOpacity={1} />
              <stop offset="0.65" stopColor="#fff" stopOpacity={1} />
              <stop offset="1" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="nyc-fade-y" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity={0} />
              <stop offset="0.2" stopColor="#fff" stopOpacity={1} />
              <stop offset="0.88" stopColor="#fff" stopOpacity={1} />
              <stop offset="1" stopColor="#fff" stopOpacity={0} />
            </linearGradient>
            <mask id="nyc-fade-x-mask">
              <rect width={WIDTH} height={HEIGHT} fill="url(#nyc-fade-x)" />
            </mask>
            <mask id="nyc-fade-y-mask">
              <rect width={WIDTH} height={HEIGHT} fill="url(#nyc-fade-y)" />
            </mask>
          </defs>
          <g mask="url(#nyc-fade-x-mask)">
            <g mask="url(#nyc-fade-y-mask)">
              {boroughPaths.map((borough) => (
                <path
                  key={borough.key}
                  d={borough.d}
                  fill={LAND}
                  stroke={BORDER}
                  strokeWidth={0.5}
                />
              ))}
              {/* Central Park outline, stroked like the borough/country borders */}
              <path
                d={centralParkPath}
                fill="transparent"
                stroke={BORDER}
                strokeWidth={0.5}
              />
            </g>
          </g>
          {markers.map((marker, index) => (
            <g key={marker.id} transform={`translate(${marker.x} ${marker.y})`}>
              <Pin
                delayMs={staggerDelay(index)}
                inView={dropped && (marker.former ? showPrevious : showCurrent)}
                reducedMotion={reducedMotion}
                former={marker.former}
              />
            </g>
          ))}
        </svg>
      ) : null}
    </div>
  );
}
