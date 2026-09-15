import "dotenv/config";
import { defineConfig } from "prisma/config";

// `prisma generate` only needs a syntactically present value here — it never
// opens a connection. This placeholder keeps `generate` (run from
// postinstall) working during Docker/Nixpacks builds where DATABASE_URL may
// not be injected until runtime. `migrate deploy` and the seed script always
// use the real DATABASE_URL from the environment when it's actually set.
const DATABASE_URL =
  process.env.DATABASE_URL ?? "postgresql://placeholder:placeholder@localhost:5432/placeholder";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: DATABASE_URL,
  },
  migrations: {
    seed: "node prisma/seed.mjs",
  },
});
