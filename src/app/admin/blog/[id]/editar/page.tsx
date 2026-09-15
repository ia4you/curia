import { notFound } from "next/navigation";
import PostForm from "@/components/admin/PostForm";
import { prisma } from "@/lib/prisma";
import { updatePost } from "../../actions";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    notFound();
  }

  const boundUpdatePost = updatePost.bind(null, post.id);

  return (
    <div>
      <h1 className="font-serif text-2xl text-ink">Editar post</h1>
      <div className="mt-6 max-w-2xl">
        <PostForm
          action={boundUpdatePost}
          defaultValues={{
            title: post.title,
            excerpt: post.excerpt ?? "",
            content: post.content,
            coverImageUrl: post.coverImageUrl,
          }}
        />
      </div>
    </div>
  );
}
