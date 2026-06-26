"use client";

import { useState } from "react";
import type { ListEntry, ListGroup } from "@/app/components/maps/types";

// The client directory: a responsive grid of industry groups. Within each
// group, curated "notable" clients show first; the rest of the roster sits
// below a faint divider, collapsed behind a caret until expanded.
export default function ClientList({ groups }: { groups: ListGroup[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
      {groups.map((group) => (
        <IndustryGroup key={group.industry} group={group} />
      ))}
    </div>
  );
}

function Entry({ entry }: { entry: ListEntry }) {
  const className =
    "text-base text-[#1A1A1A]/70 leading-snug hover:text-[#1A1A1A] transition-colors";
  return (
    <li>
      {entry.url ? (
        <a href={entry.url} target="_blank" rel="noopener noreferrer" className={className}>
          {entry.name}
        </a>
      ) : (
        <span className={className}>{entry.name}</span>
      )}
    </li>
  );
}

function IndustryGroup({ group }: { group: ListGroup }) {
  const [open, setOpen] = useState(false);
  const { industry, notable, others } = group;
  const hasOthers = others.length > 0;

  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-3">
        {industry}
      </p>

      {notable.length > 0 && (
        <ul className="space-y-1.5">
          {notable.map((entry) => (
            <Entry key={entry.name} entry={entry} />
          ))}
        </ul>
      )}

      {hasOthers && (
        <>
          {open && (
            <ul className="mt-1.5 space-y-1.5">
              {others.map((entry) => (
                <Entry key={entry.name} entry={entry} />
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="group mt-1.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#1A1A1A]/70 hover:text-[#E8500A] transition-colors"
          >
            {open
              ? "Show fewer"
              : notable.length > 0
                ? `+ ${others.length} more`
                : `${others.length} ${others.length === 1 ? "client" : "clients"}`}
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            >
              <path
                d="M3 4.5 6 7.5 9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
