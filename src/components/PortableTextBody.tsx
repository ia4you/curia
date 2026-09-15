import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-ink-soft last:mb-0">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-2xl text-ink first:mt-0 md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-serif text-xl text-ink first:mt-0">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-5 text-ink-soft last:mb-0">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-5 text-ink-soft last:mb-0">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const isExternal = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-accent-dark underline underline-offset-2 hover:text-ink"
        >
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
