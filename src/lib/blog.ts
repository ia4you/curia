import { client } from "@/lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";
import type { PortableTextBlock } from "@portabletext/react";

export type PostImage = {
  asset: SanityImageSource;
  alt: string;
};

export type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage: PostImage | null;
  publishedAt: string;
};

export type Post = PostSummary & {
  body: PortableTextBlock[];
  seoTitle: string | null;
  seoDescription: string | null;
  author: string | null;
};

const POST_LIST_PROJECTION = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt
}`;

export async function getAllPosts(): Promise<PostSummary[]> {
  return client.fetch<PostSummary[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${POST_LIST_PROJECTION}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      mainImage,
      body,
      publishedAt,
      seoTitle,
      seoDescription,
      author
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllPostSlugs(): Promise<{ slug: string; publishedAt: string }[]> {
  return client.fetch<{ slug: string; publishedAt: string }[]>(
    `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`,
    {},
    { next: { revalidate: 60 } }
  );
}
