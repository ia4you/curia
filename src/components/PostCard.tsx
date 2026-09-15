import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { urlForImage } from "@/lib/sanity";
import type { PostSummary } from "@/lib/blog";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden border border-border-soft bg-white transition-colors duration-200 hover:border-accent hover:bg-accent/5"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
        {post.mainImage ? (
          <Image
            src={urlForImage(post.mainImage.asset).width(800).height(500).fit("crop").url()}
            alt={post.mainImage.alt}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FileText className="h-10 w-10 text-accent/40" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {formatDate(post.publishedAt)}
        </p>
        <h3 className="mt-2 font-serif text-lg text-ink">{post.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
      </div>
    </Link>
  );
}
