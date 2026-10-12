"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "خانه" },
  { href: "/services", label: "خدمات" },
  { href: "/gallery", label: "گالری" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-soft-100 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-soft-400 to-gold-400 text-lg font-bold text-white shadow-md">
            ✦
          </span>
          <span className="text-xl font-bold tracking-tight">
            لوکس <span className="text-rose-soft-500">آرورا</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-rose-soft-100 text-rose-soft-600"
                  : "text-plum-700 hover:bg-rose-soft-50 hover:text-rose-soft-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/booking"
            className="rounded-full bg-gradient-to-l from-rose-soft-500 to-gold-400 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-rose-soft-200 transition-transform hover:scale-105"
          >
            رزرو نوبت
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-plum-800 hover:bg-rose-soft-50 md:hidden"
          aria-label="منو"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-rose-soft-100 bg-cream-50 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-rose-soft-100 text-rose-soft-600"
                    : "text-plum-700 hover:bg-rose-soft-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-l from-rose-soft-500 to-gold-400 px-4 py-3 text-center text-sm font-bold text-white"
            >
              رزرو نوبت
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
