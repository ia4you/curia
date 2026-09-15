import PostForm from "@/components/admin/PostForm";
import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className="font-serif text-2xl text-ink">Nuevo post</h1>
      <div className="mt-6 max-w-2xl">
        <PostForm action={createPost} />
      </div>
    </div>
  );
}
