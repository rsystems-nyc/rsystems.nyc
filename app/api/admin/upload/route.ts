import { NextResponse, type NextRequest } from "next/server";
import { writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";

// Dev-only asset uploader. It writes into the working tree's public/assets
// directory, which only makes sense on the self-hosted dev host
// (dev.rsystems.nyc, running `next dev`). It is hard-disabled unless
// PREVIEW_AUTH_ENABLED === "true" — the same flag that gates the dev host — so
// it can never run on Vercel (prod), where the filesystem is read-only anyway.
// The proxy already requires a valid JumpCloud session to reach this route.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ASSETS_ROOT = path.join(process.cwd(), "public", "assets");

// Keep just the basename, drop leading dots, and restrict to a safe charset.
function sanitizeFilename(name: string): string {
  const base = path.basename(name).replace(/^\.+/, "");
  return base.replace(/[^A-Za-z0-9._ -]/g, "_").trim() || "upload";
}

// Allow nested folders inside /assets but strip any traversal or absolute path.
function sanitizeSubdir(sub: string): string {
  return sub
    .split(/[\\/]+/)
    .map((seg) => seg.replace(/[^A-Za-z0-9._-]/g, "_"))
    .filter((seg) => seg && seg !== "." && seg !== "..")
    .join("/");
}

export async function POST(req: NextRequest) {
  if (process.env.PREVIEW_AUTH_ENABLED !== "true") {
    return NextResponse.json(
      { error: "Uploads are disabled in this environment." },
      { status: 403 },
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Expected multipart form data." },
      { status: 400 },
    );
  }

  const files = form.getAll("files").filter((f): f is File => f instanceof File);
  if (files.length === 0) {
    return NextResponse.json({ error: "No files were provided." }, { status: 400 });
  }

  const subdir = sanitizeSubdir(String(form.get("subdir") ?? ""));
  const overwrite =
    form.get("overwrite") === "on" || form.get("overwrite") === "true";

  const targetDir = path.join(ASSETS_ROOT, subdir);
  // Final guard: the resolved directory must stay inside /public/assets.
  if (targetDir !== ASSETS_ROOT && !targetDir.startsWith(ASSETS_ROOT + path.sep)) {
    return NextResponse.json({ error: "Invalid destination." }, { status: 400 });
  }

  await mkdir(targetDir, { recursive: true });

  const written: { name: string; path: string; size: number }[] = [];
  const skipped: { name: string; reason: string }[] = [];

  for (const file of files) {
    const name = sanitizeFilename(file.name);
    const dest = path.join(targetDir, name);
    if (dest !== ASSETS_ROOT && !dest.startsWith(ASSETS_ROOT + path.sep)) {
      skipped.push({ name: file.name, reason: "invalid path" });
      continue;
    }

    if (!overwrite) {
      try {
        await stat(dest);
        skipped.push({ name, reason: "already exists" });
        continue;
      } catch {
        // Does not exist yet — safe to write.
      }
    }

    const bytes = Buffer.from(await file.arrayBuffer());
    await writeFile(dest, bytes);
    written.push({
      name,
      path: path.posix.join("/assets", subdir, name),
      size: bytes.length,
    });
  }

  return NextResponse.json({ written, skipped });
}
