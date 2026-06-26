"use client";

import { useState } from "react";

type Result = {
  written: { name: string; path: string; size: number }[];
  skipped: { name: string; reason: string }[];
};

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

export default function UploadForm() {
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: new FormData(formEl),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Upload failed.");
      } else {
        setResult(data as Result);
        formEl.reset();
      }
    } catch {
      setError("Network error during upload.");
    } finally {
      setBusy(false);
    }
  }

  const labelCls = "block text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-2";
  const fieldCls =
    "w-full rounded border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm text-white/90 placeholder:text-white/30 focus:border-[#FE6305]/60 focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div>
        <label htmlFor="files" className={labelCls}>
          Files
        </label>
        <input
          id="files"
          name="files"
          type="file"
          multiple
          required
          className="block w-full text-sm text-white/70 file:mr-4 file:rounded file:border-0 file:bg-[#FE6305] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-[#FE6305]/90"
        />
        <p className="mt-2 text-xs text-white/30">
          Drops into <code className="text-white/50">/public/assets/</code>. Select one or more files.
        </p>
      </div>

      <div>
        <label htmlFor="subdir" className={labelCls}>
          Subfolder (optional)
        </label>
        <input
          id="subdir"
          name="subdir"
          type="text"
          placeholder="e.g. case-studies — leave blank for /assets root"
          className={fieldCls}
        />
        <p className="mt-2 text-xs text-white/30">
          Created under <code className="text-white/50">/public/assets/</code> if it doesn&apos;t exist.
        </p>
      </div>

      <label className="flex items-center gap-3 text-sm text-white/70">
        <input
          type="checkbox"
          name="overwrite"
          className="h-4 w-4 rounded border-white/30 bg-white/[0.03] accent-[#FE6305]"
        />
        Overwrite files that already exist
      </label>

      <button
        type="submit"
        disabled={busy}
        className="rounded bg-[#FE6305] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#FE6305]/90 disabled:opacity-50"
      >
        {busy ? "Uploading…" : "Upload"}
      </button>

      {error && (
        <div className="rounded border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-4">
          {result.written.length > 0 && (
            <div className="rounded border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#FE6305] mb-3">
                Uploaded ({result.written.length})
              </p>
              <ul className="space-y-2">
                {result.written.map((f) => (
                  <li key={f.path} className="text-sm text-white/70">
                    <a
                      href={f.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/90 underline decoration-white/20 hover:decoration-[#FE6305]"
                    >
                      {f.path}
                    </a>
                    <span className="text-white/30"> — {formatBytes(f.size)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {result.skipped.length > 0 && (
            <div className="rounded border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-3">
                Skipped ({result.skipped.length})
              </p>
              <ul className="space-y-2">
                {result.skipped.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="text-sm text-white/50">
                    {f.name} — {f.reason}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
