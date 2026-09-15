import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deletePostAction } from "./actions";
import DeleteButton from "@/components/admin/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">Posts del blog</h1>
        <Link
          href="/admin/blog/nuevo"
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-dark hover:opacity-90"
        >
          Nuevo post
        </Link>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-border-soft bg-background">
        <table className="w-full text-left text-sm">
          <thead className="bg-sand text-ink-soft">
            <tr>
              <th className="px-4 py-3 font-medium">Título</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 font-medium">Fecha</th>
              <th className="px-4 py-3 font-medium text-right">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-ink-soft">
                  Todavía no hay posts. Crea el primero.
                </td>
              </tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} className="border-t border-border-soft">
                <td className="px-4 py-3 text-ink">{post.title}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      post.published
                        ? "bg-accent/20 text-accent-dark"
                        : "bg-ink-soft/10 text-ink-soft"
                    }`}
                  >
                    {post.published ? "Publicado" : "Borrador"}
                  </span>
                </td>
                <td className="px-4 py-3 text-ink-soft">
                  {post.createdAt.toLocaleDateString("es-ES")}
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-3">
                    <Link href={`/admin/blog/${post.id}/editar`} className="text-accent-dark hover:underline">
                      Editar
                    </Link>
                    <form action={deletePostAction}>
                      <input type="hidden" name="id" value={post.id} />
                      <DeleteButton />
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
