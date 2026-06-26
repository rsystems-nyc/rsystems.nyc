// Shared client-location shapes. Kept free of any JSON import so they can be
// imported by client components without bundling the source data.
export type ClientStatus = "Current" | "Inactive" | "Former";

export type Client = {
  code: string;
  name: string;
  status: ClientStatus;
  hidden: boolean;
  industry?: string;
  // The original granular tag, retained when `industry` is rolled up to one of
  // the canonical 16 (see docs/industries-taxonomy). Makes the re-map reversible.
  subIndustry?: string;
  url?: string;
  class?: string;
  lat?: number;
  lng?: number;
  // Map-only locations (e.g. an organization's field sites) — plotted as pins
  // but never listed individually in the text directory.
  mapOnly?: boolean;
};

// The minimal projection the maps actually need. Name, address, and even the
// internal code are deliberately omitted so no identifying info ships to the
// browser — pins only. `id` is an opaque key; `former` renders the pin muted
// gray and lets the page hide it until "Previous engagements" is toggled on.
export type MapPoint = {
  id: string;
  lat: number;
  lng: number;
  former?: boolean;
};

// Text-directory shapes. These carry only the public-facing fields (name + url)
// of non-hidden clients, grouped by industry, with a curated "notable" subset
// shown ahead of the rest.
export type ListEntry = { name: string; url?: string };
export type ListGroup = {
  industry: string;
  notable: ListEntry[];
  others: ListEntry[];
};
