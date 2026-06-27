import { redirect } from "next/navigation";

// The AI services were consolidated under /services/technology-consulting/.
// Keep this path as a 307 redirect so existing links/SEO don't break.
export default function Redirect() {
  redirect("/services/technology-consulting/mcp-tooling");
}
