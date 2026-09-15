"use client";

import { useRef, useState } from "react";

export default function BoldEditor({
  name,
  defaultValue = "",
}: {
  name: string;
  defaultValue?: string;
}) {
  const [value, setValue] = useState(defaultValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function toggleBold() {
    const el = textareaRef.current;
    if (!el) return;

    const start = el.selectionStart;
    const end = el.selectionEnd;
    const before = value.slice(0, start);
    const selected = value.slice(start, end);
    const after = value.slice(end);
    const wrapped = `<strong>${selected}</strong>`;
    const nextValue = `${before}${wrapped}${after}`;

    setValue(nextValue);

    requestAnimationFrame(() => {
      el.focus();
      const cursor = start + wrapped.length;
      el.setSelectionRange(cursor, cursor);
    });
  }

  return (
    <div>
      <div className="flex items-center gap-2 rounded-t-lg border border-b-0 border-border-soft bg-sand px-3 py-2">
        <button
          type="button"
          onClick={toggleBold}
          aria-label="Negrita"
          title="Negrita"
          className="flex h-7 w-7 items-center justify-center rounded font-bold text-ink hover:bg-background"
        >
          N
        </button>
      </div>
      <textarea
        ref={textareaRef}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={14}
        className="w-full rounded-b-lg border border-border-soft bg-background px-3 py-2 font-mono text-sm text-ink outline-none focus:border-accent"
      />
    </div>
  );
}
