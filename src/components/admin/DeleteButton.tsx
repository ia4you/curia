"use client";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      className="text-red-600 hover:underline"
      onClick={(event) => {
        if (!confirm("¿Seguro que quieres eliminar este post?")) {
          event.preventDefault();
        }
      }}
    >
      Eliminar
    </button>
  );
}
