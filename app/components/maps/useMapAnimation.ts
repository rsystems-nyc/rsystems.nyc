"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
} from "react";

// Fires once, the first time the observed element scrolls meaningfully into
// view. The negative bottom rootMargin holds the trigger until the element has
// scrolled up past the lowest ~20% of the viewport, so the pin-drop animation
// plays as the user arrives at the map rather than the instant its top edge
// first peeks in at the very bottom of the screen.
export function useInView<T extends Element>(
  { threshold = 0, rootMargin = "0px 0px -20% 0px" }: {
    threshold?: number;
    rootMargin?: string;
  } = {},
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    // Environments without IntersectionObserver: reveal on the next tick.
    if (typeof IntersectionObserver === "undefined") {
      const id = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold, rootMargin]);

  return [ref, inView];
}

// Each pin gets a deterministic pseudo-random delay within this window, rather
// than one tied to its position in the array. That keeps the whole set dropping
// together (with offsets) instead of sweeping in array order — so locations
// added later (Colombia, Hong Kong, Europe…) animate alongside the rest rather
// than all last. Integer math keeps the value identical on server and client, so
// the SSR transitionDelay matches hydration.
const STAGGER_WINDOW_MS = 2400;
export const staggerDelay = (index: number) =>
  (Math.imul(index + 1, 2654435761) >>> 0) % STAGGER_WINDOW_MS;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Respects the user's reduced-motion preference so pins appear without the
// drop/bounce animation when requested. Uses useSyncExternalStore so the media
// query is read without a setState-in-effect.
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const query = window.matchMedia(REDUCED_MOTION_QUERY);
      query.addEventListener("change", onStoreChange);
      return () => query.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}
