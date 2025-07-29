import { useState, useRef } from "react";

export default function  Accordion({ className, title, children }: { className?: string; title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`border border-gray-200 rounded-md overflow-hidden mb-4 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center bg-blue-100 text-blue-800 font-medium px-4 py-3 cursor-pointer transition-colors"
      >
        <span className="text-lg">{title}</span>
        <svg
          className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
        className="transition-all duration-300 ease-in-out overflow-hidden"
      >
        <div className="p-4 text-gray-700 bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
