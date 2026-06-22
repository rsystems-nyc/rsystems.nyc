// Shared client-location shapes. Kept free of any JSON import so they can be
// imported by client components without bundling the source data.
export type Client = {
  code: string;
  name: string;
  class?: string;
  lat: number;
  lng: number;
  hidden: boolean;
};

// The minimal projection the maps actually need. Names and addresses are
// deliberately omitted so no identifying info ships to the browser — pins only.
export type MapPoint = {
  code: string;
  lat: number;
  lng: number;
};
