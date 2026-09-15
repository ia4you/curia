"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import fs from "node:fs/promises";
import path from "node:path";
import { prisma } from "@/lib/prisma";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";

export type PostFormState = { error?: string };

async function requireSession() {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  const session = token ? await verifySessionToken(token) : null;
  if (!session) {
    redirect("/admin/login");
  }
}

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function uniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const root = base || "post";
  let slug = root;
  let attempt = 2;

  while (true) {
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (!existing || existing.id === ignoreId) {
      return slug;
    }
    slug = `${root}-${attempt}`;
    attempt += 1;
  }
}

async function saveCoverImage(file: File): Promise<string> {
  const bytes = Buffer.from(await file.arrayBuffer());
  const ext = path.extname(file.name).toLowerCase() || "";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadsDir, { recursive: true });
  await fs.writeFile(path.join(uploadsDir, filename), bytes);
  return `/uploads/${filename}`;
}

export async function createPost(
  _prevState: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  await requireSession();

  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const intent = formData.get("intent");
  const coverImage = formData.get("coverImage");

  if (!title) {
    return { error: "El título es obligatorio." };
  }

  const slug = await uniqueSlug(slugify(title));

  let coverImageUrl: string | undefined;
  if (coverImage instanceof File && coverImage.size > 0) {
    coverImageUrl = await saveCoverImage(coverImage);
  }

  await prisma.post.create({
    data: {
      title,
      slug,
      excerpt: excerpt || undefined,
      coverImageUrl,
      content,
      published: intent === "publish",
    },
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function updatePost(
  id: string,
  _prevState: PostFormState,
  formData: FormData
): Promise<PostFormState> {
  await requireSession();

  const existing = await prisma.post.findUnique({ where: { id } });
  if (!existing) {
    return { error: "Este post ya no existe." };
  }

  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "");
  const intent = formData.get("intent");
  const coverImage = formData.get("coverImage");

  if (!title) {
    return { error: "El título es obligatorio." };
  }

  let coverImageUrl = existing.coverImageUrl ?? undefined;
  if (coverImage instanceof File && coverImage.size > 0) {
    coverImageUrl = await saveCoverImage(coverImage);
  }

  await prisma.post.update({
    where: { id },
    data: {
      title,
      excerpt: excerpt || null,
      coverImageUrl: coverImageUrl ?? null,
      content,
      published: intent === "publish",
    },
  });

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  revalidatePath(`/blog/${existing.slug}`);
  redirect("/admin/blog");
}

export async function deletePostAction(formData: FormData) {
  await requireSession();

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  const existing = await prisma.post.delete({ where: { id } }).catch(() => null);

  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  if (existing) {
    revalidatePath(`/blog/${existing.slug}`);
  }
}
