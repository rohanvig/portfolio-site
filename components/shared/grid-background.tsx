"use client";

export function GridBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03] dark:opacity-[0.05]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
