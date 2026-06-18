import { glossaryTerms } from './glossary-terms'

export function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inlineFmt(s: string, seen: Set<string>): string {
  return escHtml(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/!\[([^\]]*)\]\(([^|)]+?)(?:\|(\d+%))?\)/g, (_, alt, src, width) =>
      `<img src="${src}" alt="${alt}" style="max-width:${width || '100%'};border-radius:8px;margin:1rem auto;display:block;" />`
    )
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_: string, text: string, href: string) => {
      if (/^https?:\/\//.test(href)) {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      if (href.startsWith('/resources/glossary/')) {
        const slug = href.replace('/resources/glossary/', '').split('/')[0];
        const term = glossaryTerms.find((t) => t.slug === slug);
        if (term) {
          if (seen.has(slug)) {
            return `<a href="${href}" class="gl-link">${text}</a>`;
          }
          seen.add(slug);
          return `<span class="gl-ref"><a href="${href}" class="gl-link">${text}</a><span class="gl-tip" role="tooltip">${escHtml(term.shortDef)}</span></span>`;
        }
      }
      return `<a href="${href}">${text}</a>`;
    })
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
}

function parseListBlock(lines: string[], seen: Set<string>): string {
  const ordered = /^\d+\./.test(lines[0]);
  const tag = ordered ? "ol" : "ul";
  const items: string[] = [];
  let cur = "";
  for (const line of lines) {
    if (/^(-|\d+\.)\s/.test(line)) {
      if (cur) items.push(cur);
      cur = line.replace(/^(-|\d+\.)\s/, "");
    } else {
      cur += " " + line.trim();
    }
  }
  if (cur) items.push(cur);
  return `<${tag}>${items.map((i) => `<li>${inlineFmt(i.trim(), seen)}</li>`).join("")}</${tag}>`;
}

function renderBlock(block: string, codes: string[], seen: Set<string>): string {
  const pure = block.match(/^__CODE(\d+)__$/);
  if (pure) return `<pre><code>${codes[parseInt(pure[1], 10)]}</code></pre>`;

  if (block.includes("__CODE")) {
    const parts = block.split(/(__CODE\d+__)/);
    return parts
      .map((part) => {
        const m = part.trim().match(/^__CODE(\d+)__$/);
        if (m) return `<pre><code>${codes[parseInt(m[1], 10)]}</code></pre>`;
        const t = part.trim();
        if (!t) return "";
        return `<p>${inlineFmt(t.replace(/\n/g, " "), seen)}</p>`;
      })
      .filter(Boolean)
      .join("\n");
  }

  const imgBlock = block.match(/^!\[([^\]]*)\]\(([^|)]+?)(?:\|(\d+%))?\)$/);
  if (imgBlock) {
    const [, alt, src, width] = imgBlock;
    return `<img src="${src}" alt="${alt}" style="max-width:${width || '100%'};border-radius:8px;margin:1rem auto;display:block;" />`;
  }

  if (block.startsWith("## ")) return `<h2>${inlineFmt(block.slice(3).trim(), seen)}</h2>`;
  if (block.startsWith("### ")) return `<h3>${inlineFmt(block.slice(4).trim(), seen)}</h3>`;

  const lines = block.split("\n");
  const fi = lines.findIndex((l) => /^(-|\d+\.)\s/.test(l));
  if (fi === -1) return `<p>${inlineFmt(block.replace(/\n/g, " ").trim(), seen)}</p>`;

  const pre = lines.slice(0, fi);
  const lst = lines.slice(fi);
  const listHtml = parseListBlock(lst, seen);
  if (!pre.length) return listHtml;
  return `<p>${inlineFmt(pre.join(" ").trim(), seen)}</p>${listHtml}`;
}

export function renderMarkdown(md: string): string {
  if (!md) return "";
  const seen = new Set<string>();
  const codes: string[] = [];
  const s = md.replace(/```[^\n]*\n([\s\S]*?)```/g, (_, c) => {
    const idx = codes.length;
    codes.push(escHtml(c.trimEnd()));
    return `__CODE${idx}__`;
  });
  return s
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean)
    .map((b) => renderBlock(b, codes, seen))
    .join("\n");
}
