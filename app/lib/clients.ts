// Server-only data loader for client locations.
//
// data/clients.json lives outside the public/ directory on purpose: it is
// committed to the private repo but must never be served as a static asset.
// This module imports it into the SERVER module graph only. Pages should pass
// the filtered `publicClients` down to client components as props so that
// hidden entries (e.g. the colocation facility) never reach the browser.
import clientsData from "../../data/clients.json";
import type { Client, MapPoint } from "@/app/components/maps/types";

export const allClients: Client[] = clientsData as Client[];

// Locations safe to plot publicly. Hidden entries are dropped here, at the
// server boundary, so they are not included in any client bundle or payload.
export const publicClients: Client[] = allClients.filter((c) => !c.hidden);

// Geometry-only projection handed to the map components. Stripping name/address
// keeps identifying info out of the page payload — the maps render pins only.
// The NYC map plots each of these individually within its frame.
export const mapPoints: MapPoint[] = publicClients.map(({ code, lat, lng }) => ({
  code,
  lat,
  lng,
}));

// NYC metro bounding box (the five boroughs). On the zoomed-out world map all of
// these clients would stack into one illegible blob, so they collapse to a single
// representative NYC pin; non-NYC clients stay individual.
const NYC_METRO = { latMin: 40.49, latMax: 40.92, lngMin: -74.27, lngMax: -73.69 };
const inNycMetro = (p: MapPoint) =>
  p.lat >= NYC_METRO.latMin &&
  p.lat <= NYC_METRO.latMax &&
  p.lng >= NYC_METRO.lngMin &&
  p.lng <= NYC_METRO.lngMax;

export const worldPoints: MapPoint[] = [
  ...mapPoints.filter((p) => !inNycMetro(p)),
  { code: "NYC", lat: 40.73, lng: -74.0 },
];
