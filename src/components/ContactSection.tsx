"use client";

import { User, UserPlus, Mail, Phone, MessageSquare, PenLine, MapPin } from "lucide-react";

const fields = [
  { id: "nombre", name: "nombre", label: "Nombre", icon: User, type: "text", required: true },
  { id: "apellidos", name: "apellidos", label: "Apellidos", icon: UserPlus, type: "text", required: true },
  { id: "correo", name: "correo", label: "Correo", icon: Mail, type: "email", required: true },
  { id: "telefono", name: "telefono", label: "Teléfono", icon: Phone, type: "tel", required: false },
];

const mapSrc =
  "https://www.google.com/maps?q=Calle+Le%C3%B3n+y+Castillo+39,+Las+Palmas+de+Gran+Canaria&output=embed";

function FieldLabel({
  icon: Icon,
  htmlFor,
  children,
}: {
  icon: typeof User;
  htmlFor: string;
  children: string;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </label>
  );
}

const inputClasses =
  "w-full border border-accent/30 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none";

export default function ContactSection() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section id="contacto" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Contacto</p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">Contacta con nosotros</h2>
          <p className="mt-4 text-ink-soft">
            Nos avala la experiencia de más de 15 años ayudando a solucionar los conflictos
            que se originan en la vida cotidiana de las personas, con un trato cercano,
            honesto y profesional.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <iframe
              src={mapSrc}
              className="h-[500px] w-full rounded"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Curia Abogados en Las Palmas de Gran Canaria"
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="text-sm text-ink-soft">
                  <a href="tel:+34928248581" className="block hover:text-accent">
                    928 248 581
                  </a>
                  <a href="tel:+34679721167" className="block hover:text-accent">
                    679 721 167
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:info@curiaabogados.es"
                  className="text-sm text-ink-soft hover:text-accent"
                >
                  info@curiaabogados.es
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <MapPin className="h-4 w-4" />
                </span>
                <p className="text-sm text-ink-soft">
                  C/ León y Castillo 39, 5B
                  <br />
                  Las Palmas de Gran Canaria
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.id}>
                  <FieldLabel icon={field.icon} htmlFor={field.id}>
                    {field.label}
                  </FieldLabel>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className={inputClasses}
                  />
                </div>
              ))}
            </div>

            <div>
              <FieldLabel icon={MessageSquare} htmlFor="asunto">
                Asunto
              </FieldLabel>
              <input id="asunto" name="asunto" type="text" className={inputClasses} />
            </div>

            <div>
              <FieldLabel icon={PenLine} htmlFor="mensaje">
                Mensaje
              </FieldLabel>
              <textarea id="mensaje" name="mensaje" rows={5} required className={inputClasses} />
            </div>

            <button
              type="submit"
              className="bg-accent-dark px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
