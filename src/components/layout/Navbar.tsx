"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Redevelopment", href: "/redevelopment" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 -mb-20 w-full">
      <nav
        className={`relative flex w-full items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-14 ${
          scrolled
            ? "h-16 bg-[#151514]/85 backdrop-blur-xl"
            : "h-20 bg-black/20 backdrop-blur-[3px]"
        }`}
      >
        {/* Subtle top gradient */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-black/35 to-transparent" />

        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 block"
          aria-label="Belmont Group home"
        >
          <Image
            src="/images/logo_trans.png"
            alt="Belmont Group"
            width={120}
            height={120}
            priority
            className={`h-[58px] w-auto object-contain transition-all duration-500 ${
              !scrolled ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors duration-300 ${
                scrolled
                  ? "!text-white/70 hover:text-white"
                  : "!text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-5 py-2.5 text-sm !text-white transition-all duration-300 hover:border-white/80 hover:bg-white/10"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-[70] flex h-10 w-10 items-center justify-center text-white md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[40] bg-[#151514] text-white transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-6 pb-8 pt-28">
          {/* Mobile Navigation */}
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-3xl !text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 flex w-full items-center justify-between rounded-full bg-white px-6 py-4 !text-black"
          >
            <span className="!text-black">Contact Belmont</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black !text-white">
              ↗
            </span>
          </Link>

          {/* Bottom */}
          <div className="mt-auto flex items-end justify-between pt-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] !text-white/30">
                Belmont Group · Pune
              </p>

              <p className="mt-2 max-w-[220px] text-xs !text-white/25">
                Building spaces worth coming home to.
              </p>
            </div>

            <span className="text-xs !text-white/25">© 2026</span>
          </div>
        </div>
      </div>
    </header>
  );
}
