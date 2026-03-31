"use client";

import { useState } from "react";

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Collapsible({ title, children, defaultOpen = false }: CollapsibleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: isOpen
          ? "1px solid rgba(183,148,246,0.25)"
          : "1px solid rgba(255,255,255,0.08)",
        backgroundColor: isOpen ? "rgba(183,148,246,0.03)" : "transparent",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-8 py-6 text-left group cursor-pointer"
      >
        <span className="text-white font-semibold text-lg group-hover:text-brand-purple transition-colors pr-4">
          {title}
        </span>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0"
          style={{
            backgroundColor: isOpen
              ? "rgba(183,148,246,0.15)"
              : "rgba(183,148,246,0.08)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg
            className="w-4 h-4 text-brand-purple"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="px-8 pb-8 text-brand-gray-300 leading-relaxed text-base"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
