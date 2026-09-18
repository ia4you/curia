"use client";

import { useEffect, useState, type ReactNode } from "react";

type ObfuscatedEmailProps = {
  user: string;
  domain: string;
  className?: string;
  children?: ReactNode;
};

export default function ObfuscatedEmail({ user, domain, className, children }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      className={className}
      aria-label={email ? undefined : "Cargando dirección de correo electrónico"}
    >
      {children}
      {email ?? " "}
    </a>
  );
}
