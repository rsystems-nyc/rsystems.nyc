"use client";

import { useState } from "react";
import WorldMap from "@/app/components/maps/WorldMap";
import NYCMap from "@/app/components/maps/NYCMap";
import type { MapPoint } from "@/app/components/maps/types";

// Interactive wrapper around the two maps. Current + inactive clients (orange
// pins) show by default; toggling "Previous engagements" drops in former clients
// as gray pins, and toggling it off runs that drop animation in reverse. Both
// maps keep every pin mounted and animate via each pin's visibility, so the
// show/hide transition plays in both directions (rather than pins popping in or
// vanishing).
export default function ClientMaps({
  nycPoints,
  worldPoints,
}: {
  nycPoints: MapPoint[];
  worldPoints: MapPoint[];
}) {
  const [showCurrent, setShowCurrent] = useState(true);
  const [showPrevious, setShowPrevious] = useState(false);

  return (
    <div>
      {/* Column fr units mirror the square NYC map and the world map's 800x422
          viewBox, so both render at identical heights. */}
      <div className="grid grid-cols-1 lg:grid-cols-[422fr_800fr] gap-8 items-start">
        <div>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
            New York City
          </p>
          <NYCMap points={nycPoints} showCurrent={showCurrent} showPrevious={showPrevious} />
        </div>
        <div>
          <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
            Worldwide
          </p>
          <WorldMap points={worldPoints} showCurrent={showCurrent} showPrevious={showPrevious} />
        </div>
      </div>

      {/* Status toggles */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Toggle
          label="Current clients"
          color="#E8500A"
          active={showCurrent}
          onClick={() => setShowCurrent((v) => !v)}
        />
        <Toggle
          label="Previous engagements"
          color="#808080"
          active={showPrevious}
          onClick={() => setShowPrevious((v) => !v)}
        />
      </div>
    </div>
  );
}

function Toggle({
  label,
  color,
  active,
  onClick,
}: {
  label: string;
  color: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-[#1A1A1A]/20 bg-white text-[#1A1A1A] shadow-sm"
          : "border-[#1A1A1A]/10 bg-transparent text-[#1A1A1A]/40 hover:text-[#1A1A1A]/70"
      }`}
    >
      <span
        className="h-2.5 w-2.5 rounded-full transition-opacity"
        style={{ backgroundColor: color, opacity: active ? 1 : 0.35 }}
      />
      {label}
    </button>
  );
}
