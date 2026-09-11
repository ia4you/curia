"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonio = { texto: string; autor: string };

export default function TestimoniosCarousel({
  testimonios,
  hasAvatar,
}: {
  testimonios: Testimonio[];
  hasAvatar: boolean;
}) {
  const [index, setIndex] = useState(0);
  const actual = testimonios[index];

  const anterior = () =>
    setIndex((i) => (i - 1 + testimonios.length) % testimonios.length);
  const siguiente = () => setIndex((i) => (i + 1) % testimonios.length);

  return (
    <section className="relative overflow-hidden bg-accent py-24 md:py-32">
      <svg
        className="absolute top-0 left-0 h-16 w-full text-sand md:h-24"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,0 L1440,0 L1440,50 C1200,110 900,10 600,60 C360,100 150,40 0,80 Z"
        />
      </svg>

      <Quote
        className="pointer-events-none absolute -right-6 top-16 h-40 w-40 text-white/15 md:h-56 md:w-56"
        strokeWidth={1}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark/70">
            Testimonios
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
            Creando confianza, vea lo que dicen de nosotros
          </h2>
        </div>

        <div className="md:col-span-7">
          <p className="font-serif text-xl italic leading-relaxed text-white md:text-2xl">
            &ldquo;{actual.texto}&rdquo;
          </p>

          <div className="mt-6 flex items-center gap-4">
            {hasAvatar && (
              <Image
                src="/images/avatar-testimonio.jpg"
                alt={actual.autor}
                width={96}
                height={96}
                className="h-12 w-12 rounded-full object-cover"
              />
            )}
            <p className="text-sm font-medium text-white">{actual.autor}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={anterior}
              aria-label="Testimonio anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={siguiente}
              aria-label="Testimonio siguiente"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
