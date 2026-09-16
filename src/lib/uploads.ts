import path from "node:path";

// Deliberately outside `public/`: Next.js's production server (`next start`)
// resolves the contents of `public/` once at process boot and does not
// discover files added to it while the process is running, so files
// uploaded at runtime would 404 until the next restart. Storing them here
// and serving them through `src/app/uploads/[filename]/route.ts` (a Route
// Handler, re-evaluated on every request) avoids that entirely.
export const UPLOADS_DIR = path.join(process.cwd(), "uploads");
