import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpecialtyPage from "@/components/SpecialtyPage";
import { specialties, specialtySlugs } from "@/lib/specialties";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  return specialtySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = specialties[slug];
  if (!data) return {};

  const url = `${SITE_URL}/${slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title: data.metaTitle,
      description: data.metaDescription,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = specialties[slug];
  if (!data) notFound();

  return <SpecialtyPage data={data} />;
}
