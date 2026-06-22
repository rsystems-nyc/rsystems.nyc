// Server-only data loader for client locations and the client directory.
//
// data/clients.json lives outside public/ so it is never served as a static
// asset, and — because this repo is PUBLIC — hidden clients are pre-redacted in
// the file itself (name/code/url stripped; only coords + status remain, for an
// anonymous pin). This module imports it into the SERVER module graph only, and
// pages pass the derived, scrubbed values below down to client components, so no
// name, address, or internal code ever reaches the browser.
import clientsData from "../../data/clients.json";
import type { Client, MapPoint, ListGroup } from "@/app/components/maps/types";

export const allClients: Client[] = clientsData as Client[];

// ── Map points ──────────────────────────────────────────────────────────────
// Geometry only. Hidden clients ARE plotted (a bare dot reveals no identity),
// but every point is reduced to an opaque id + coords + a former flag — no
// name, address, or internal code is ever included in the page payload.
const geocoded = allClients.filter(
  (c): c is Client & { lat: number; lng: number } =>
    typeof c.lat === "number" && typeof c.lng === "number",
);

export const mapPoints: MapPoint[] = geocoded.map((c, i) => ({
  id: `p${i}`,
  lat: c.lat,
  lng: c.lng,
  former: c.status === "Former",
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
  { id: "nyc", lat: 40.73, lng: -74.0 },
];

// ── Client directory (text list) ─────────────────────────────────────────────
// A curated set of "notable" clients sits at the top of each industry; the rest
// of the roster follows below a divider, collapsed behind a caret. Hidden
// clients and map-only locations (e.g. the Audubon field sites) never appear
// here — the Audubon network is represented by the single "National Audubon
// Society" entry. (ListEntry/ListGroup live in the shared types module so client
// components can use them without importing this data.)
// Each notable entry is keyed to the roster CODE(s) it represents. The entry is
// shown under `industry` with the curated `name`/`url`, and EVERY listed code is
// removed from "others" — so an org never appears twice (e.g. a park and its
// "Friends of …" non-profit collapse into one Parks entry, and roster variant
// names like "JUUL Labs, Inc"/"Gold Crest Films" don't re-list the curated pick).
// `codes: []` means the client isn't in the roster — a list-only notable entry.
type NotableDef = { industry: string; name: string; url: string; codes: string[] };
const NOTABLE: NotableDef[] = [
  { industry: "Product Design", name: "MakerBot", url: "https://www.makerbot.com", codes: ["MKB"] },
  { industry: "Product Design", name: "BioLite", url: "https://www.bioliteenergy.com", codes: ["BIO"] },
  { industry: "Product Design", name: "Juul", url: "https://www.juul.com", codes: ["JUUL"] },
  { industry: "Parks", name: "The High Line", url: "https://www.thehighline.org", codes: [] },
  { industry: "Parks", name: "Little Island", url: "https://www.littleisland.org", codes: ["LI"] },
  { industry: "Parks", name: "Domino Park", url: "https://www.dominopark.com", codes: ["DP"] },
  { industry: "Parks", name: "Brooklyn Bridge Park", url: "https://www.brooklynbridgepark.org", codes: ["BBP"] },
  { industry: "Parks", name: "Governors Island", url: "https://www.govisland.com", codes: ["FGI", "TGI"] },
  { industry: "Arts", name: "Robert Rauschenberg Foundation", url: "https://www.rauschenbergfoundation.org", codes: ["RRF"] },
  { industry: "Arts", name: "The Brant Foundation", url: "https://www.brantfoundation.org", codes: ["BFASC", "BFAB"] },
  { industry: "Healthcare", name: "Oscar", url: "https://www.hioscar.com", codes: ["OSC"] },
  { industry: "Healthcare", name: "Easterseals NJ", url: "https://www.eastersealsnj.org", codes: ["ESNJ"] },
  { industry: "Food Services", name: "Blue Apron", url: "https://www.blueapron.com", codes: ["BA"] },
  { industry: "Food Services", name: "Peanut Butter & Co", url: "https://www.ilovepeanutbutter.com", codes: ["PBCO"] },
  { industry: "Audio", name: "Splice", url: "https://splice.com", codes: ["SPLC"] },
  { industry: "Audio", name: "Sonic Union", url: "https://www.sonicunion.com", codes: ["SONIC"] },
  { industry: "Audio", name: "Heard City", url: "https://www.heardcity.com", codes: ["HC"] },
  { industry: "Fashion", name: "Monse", url: "https://www.monse.com", codes: [] },
  { industry: "Fashion", name: "Fair Harbor Clothing", url: "https://www.fairharborclothing.com", codes: ["FAIR"] },
  { industry: "Non-Profit", name: "National Audubon Society", url: "https://www.audubon.org", codes: ["NAS"] },
  { industry: "Non-Profit", name: "Jerome L Greene Foundation", url: "https://www.jlgreene.org", codes: ["JLGF"] },
  { industry: "Advertising", name: "Hypebeast", url: "https://www.hypebeast.com", codes: ["HYPE"] },
  { industry: "Advertising", name: "Red Antler", url: "https://www.redantler.com", codes: ["RA"] },
  { industry: "Education", name: "Blue School", url: "https://www.blueschool.org", codes: [] },
  { industry: "Education", name: "Saint David's", url: "https://www.saintdavids.org", codes: [] },
  { industry: "Video", name: "Goldcrest Films", url: "https://www.goldcrestfilms.com", codes: ["GCF"] },
  { industry: "Video", name: "Cinereach", url: "https://www.cinereach.org", codes: ["CR", "CINEF"] },
  { industry: "Video", name: "M ss n g P eces", url: "https://mssngpeces.com", codes: ["III"] },
  { industry: "Legal", name: "Lowe Law Group", url: "https://www.lowelawgroup.com", codes: ["LOWE"] },
  { industry: "Architecture", name: "Pembrooke & Ives", url: "https://www.pembrookeandives.com/", codes: ["PI"] },
  { industry: "Architecture", name: "Modellus Novus", url: "https://mndpc.com/", codes: ["MN"] },
  { industry: "Biotech", name: "Ecovative", url: "https://ecovative.com/", codes: [] },
];

// Highest-profile clients in industries that have no curated NOTABLE entry,
// promoted above the fold so every industry shows 1–2 names before the caret.
// These use the roster's own name/url/industry (no override). 1-client verticals
// list their single client here so it isn't hidden behind a caret.
const FEATURED_CODES = new Set([
  "TF", "BAB",        // Branding — 2 x 4, Baron & Baron
  "PENT", "SW",       // Graphic Design — Pentagram, Sagmeister & Walsh
  "DJI", "AFRM",      // Technology — DJI, Affirm
  "BSS", "GM",        // Consulting — Brightspot Strategy, Greentech Media
  "MELC", "TNC",      // Publishing — Melcher, The New Criterion
  "BFA", "RODN",      // Photography — Billy Farrell Agency, Rodney Smith
  "VHI", "RDC",       // Interior Design — Victoria Hagan, Rafael de Cardenas
  "CADRE", "WFSN",    // Finance — Cadre, WorkFusion
  "BARK", "HL",       // Retail — Bark & Co, Hautelook
  "BBHG", "YCNYC",    // Hospitality — Batali & Bastianich, Yale Club
  "BHS", "SQFT",      // Real Estate — Brown Harris Stevens, SquareFoot
  "RSSR", "BOND",     // Recruiting — RitaSue Siegel, Bond Creative
  "4B",               // Recycling — 4th Bin
  "TOBIN",            // Logistics — Tobin & Sons
  "NOS",              // Landscape Design — Nancy Owens Studio
  "HEN",              // Talent Management — The Hendra Agency
  "MGL",              // Industrial — Megado Gold
]);

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const groupMap = new Map<string, ListGroup>();
const ensureGroup = (industry: string): ListGroup => {
  let g = groupMap.get(industry);
  if (!g) {
    g = { industry, notable: [], others: [] };
    groupMap.set(industry, g);
  }
  return g;
};

// Curated notable entries first (override industry/name/url). Their codes are
// removed from the rest of the list so an org is never listed twice.
const notableCodes = new Set(NOTABLE.flatMap((n) => n.codes));
const seenNames = new Set<string>();
for (const n of NOTABLE) {
  ensureGroup(n.industry).notable.push({ name: n.name, url: n.url });
  seenNames.add(norm(n.name));
}

// Remaining roster clients. Deduped ONLY by code (same org under a variant name)
// and exact name (the same entry listed twice) — nothing else is dropped, so no
// legitimately distinct client is lost. FEATURED_CODES surface above the fold.
for (const c of allClients) {
  if (!c.industry || c.mapOnly || c.hidden) continue;
  if (notableCodes.has(c.code)) continue;
  const nm = norm(c.name);
  if (seenNames.has(nm)) continue;
  seenNames.add(nm);
  const entry = { name: c.name, url: c.url };
  if (FEATURED_CODES.has(c.code)) ensureGroup(c.industry).notable.push(entry);
  else ensureGroup(c.industry).others.push(entry);
}

for (const g of groupMap.values()) {
  g.others.sort((a, b) => a.name.localeCompare(b.name));
}

// Industries with curated notable entries lead (in their listed order); the
// remaining industries follow, largest roster first.
const NOTABLE_ORDER = [...new Set(NOTABLE.map((n) => n.industry))];
export const listGroups: ListGroup[] = [...groupMap.values()].sort((a, b) => {
  const ai = NOTABLE_ORDER.indexOf(a.industry);
  const bi = NOTABLE_ORDER.indexOf(b.industry);
  if (ai !== -1 || bi !== -1) {
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  }
  return b.notable.length + b.others.length - (a.notable.length + a.others.length);
});
