import { createClient } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wp4og0sd",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-09-15", // hard-coded to a fixed date, not "latest"
  useCdn: true, // fast, cached published-content reads
});

const builder = createImageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
