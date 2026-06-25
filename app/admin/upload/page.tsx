import { notFound } from "next/navigation";
import type { Metadata } from "next";
import UploadForm from "./UploadForm";

// Dev-host only. On Vercel (prod) PREVIEW_AUTH_ENABLED is never set, so this
// route 404s and the matching footer link is hidden. On the dev host the proxy
// also requires a JumpCloud session before this page can be reached.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Asset Upload",
  robots: { index: false, follow: false },
};

export default function UploadPage() {
  if (process.env.PREVIEW_AUTH_ENABLED !== "true") notFound();

  return (
    <main className="min-h-screen bg-[#0F1117]">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[#E8500A] mb-4">
          Dev Host — Site Admins
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Asset Upload
        </h1>
        <p className="mt-4 text-sm text-white/50 leading-relaxed">
          Upload content and images directly into{" "}
          <code className="text-white/70">/public/assets/</code>. Files become
          available at <code className="text-white/70">/assets/&lt;name&gt;</code>{" "}
          and ship with the site on the next commit and deploy. This tool exists
          only on the dev host.
        </p>

        <div className="mt-12">
          <UploadForm />
        </div>
      </div>
    </main>
  );
}
