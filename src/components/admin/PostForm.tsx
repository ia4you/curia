"use client";

import { useActionState } from "react";
import Link from "next/link";
import Image from "next/image";
import BoldEditor from "./BoldEditor";
import type { PostFormState } from "@/app/admin/blog/actions";

export default function PostForm({
  action,
  defaultValues,
}: {
  action: (prevState: PostFormState, formData: FormData) => Promise<PostFormState>;
  defaultValues?: {
    title: string;
    excerpt: string;
    content: string;
    coverImageUrl: string | null;
  };
}) {
  const [state, formAction, pending] = useActionState(action, {});

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-ink">
          Título
        </label>
        <input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={defaultValues?.title}
          className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-ink">
          Resumen (opcional)
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          defaultValue={defaultValues?.excerpt}
          className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="coverImage" className="block text-sm font-medium text-ink">
          Imagen de portada (opcional)
        </label>
        {defaultValues?.coverImageUrl && (
          <div className="relative mt-2 h-32 w-52 overflow-hidden rounded-lg border border-border-soft bg-sand">
            <Image
              src={defaultValues.coverImageUrl}
              alt=""
              fill
              sizes="208px"
              className="object-cover"
            />
          </div>
        )}
        <input
          id="coverImage"
          name="coverImage"
          type="file"
          accept="image/*"
          className="mt-2 block text-sm text-ink-soft"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-ink">Contenido</span>
        <div className="mt-1">
          <BoldEditor name="content" defaultValue={defaultValues?.content ?? ""} />
        </div>
      </div>

      {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          name="intent"
          value="draft"
          disabled={pending}
          className="rounded-lg border border-border-soft px-4 py-2 text-sm font-medium text-ink hover:bg-sand disabled:opacity-60"
        >
          Guardar borrador
        </button>
        <button
          type="submit"
          name="intent"
          value="publish"
          disabled={pending}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-dark hover:opacity-90 disabled:opacity-60"
        >
          Publicar
        </button>
        <Link href="/admin/blog" className="text-sm font-medium text-ink-soft hover:text-ink">
          Cancelar
        </Link>
      </div>
    </form>
  );
}
