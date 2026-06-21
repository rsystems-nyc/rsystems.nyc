export const SITE_URL = "https://rsystems.nyc";

/** Resolve a path or absolute URL to a fully-qualified URL. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export type Crumb = { name: string; path: string };

/**
 * Build a schema.org BreadcrumbList from an ordered list of crumbs.
 * The first crumb should be the site root, the last the current page.
 */
export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
