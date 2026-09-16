import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { UPLOADS_DIR } from "@/lib/uploads";

const MIME_TYPES: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  // Reject anything that isn't a bare filename (no path traversal).
  if (!filename || filename.includes("/") || filename.includes("\\") || filename.includes("..")) {
    return new NextResponse(null, { status: 404 });
  }

  const filePath = path.join(UPLOADS_DIR, filename);

  let file: Buffer;
  try {
    file = await fs.readFile(filePath);
  } catch {
    return new NextResponse(null, { status: 404 });
  }

  const ext = path.extname(filename).toLowerCase();
  const contentType = MIME_TYPES[ext] ?? "application/octet-stream";

  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": contentType,
      // Filenames are unique per upload (timestamp + random suffix), so the
      // content behind a given URL never changes.
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
