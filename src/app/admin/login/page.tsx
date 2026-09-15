"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-sand px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border-soft bg-background p-8 shadow-sm">
        <h1 className="font-serif text-2xl text-ink">Panel de administración</h1>
        <p className="mt-1 text-sm text-ink-soft">Curia Abogados</p>

        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-ink">
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              autoComplete="username"
              className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-ink">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="mt-1 w-full rounded-lg border border-border-soft bg-background px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>

          {state?.error && <p className="text-sm text-red-600">{state.error}</p>}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-lg bg-accent px-4 py-2 font-medium text-accent-dark transition hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
