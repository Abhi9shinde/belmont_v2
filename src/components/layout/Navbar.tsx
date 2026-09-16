"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Redevelopment", href: "/redevelopment" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="relative flex h-20 items-center justify-between bg-black/20 px-6 backdrop-blur-[3px] md:px-10 lg:px-14">
        {/* Subtle top gradient for readability */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/35 to-transparent" />

        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 font-[var(--font-display)] text-2xl tracking-[0.08em] !text-white"
        >
          BELMONT
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm !text-white/85 transition-colors duration-300 hover:!text-white"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/45 px-5 py-2.5 text-sm !text-white transition-all duration-300 hover:border-white/80 hover:bg-white/10"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-10 flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-0 flex flex-col items-center justify-center bg-[#1c1c1a] text-white md:hidden">
          <div className="flex flex-col items-center gap-8 text-2xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 rounded-full border border-white/40 px-7 py-3 text-base"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
