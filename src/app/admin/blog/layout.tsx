import Link from "next/link";
import { logoutAction } from "../actions";

export default function AdminBlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sand">
      <header className="border-b border-border-soft bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <p className="font-serif text-lg text-ink">Panel de administración</p>
            <p className="text-xs text-ink-soft">Curia Abogados · Blog</p>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/admin/blog" className="text-sm font-medium text-ink hover:text-accent-dark">
              Posts
            </Link>
            <form action={logoutAction}>
              <button type="submit" className="text-sm font-medium text-ink-soft hover:text-ink">
                Cerrar sesión
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
