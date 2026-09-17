"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Projects", href: "/projects" },
  { label: "Redevelopment", href: "/redevelopment" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function ArrowUpRightIcon() {
  return (
    <ArrowUpRight
      size={14}
      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--background)] px-6 text-[var(--foreground)] md:px-10 lg:px-14">
      {/* Architectural background lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[var(--foreground)]/[0.035]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[var(--foreground)]/[0.035]" />

        <div className="absolute left-0 top-0 h-px w-full bg-[var(--border)]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* MAIN FOOTER */}
        <div className="grid gap-16 py-20 md:py-24 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-20 lg:py-28">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--foreground)]/30" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)]">
                Belmont Group
              </span>
            </div>

            <h3 className="mt-10 max-w-xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.035em] md:text-6xl lg:text-7xl">
              Building spaces
              <br />
              worth coming
              <br />
              home to.
            </h3>

            <div className="mt-10">
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
                Based in
              </span>

              <span className="mt-2 block text-sm text-[var(--foreground)]/60">
                Pune, Maharashtra
              </span>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
              Explore
            </span>

            <nav className="mt-7 flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-sm text-[var(--foreground)]/60 transition-colors duration-300 hover:text-[var(--foreground)]"
                >
                  <span>{item.label}</span>

                  <ArrowUpRightIcon />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* CONNECT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
              Connect
            </span>

            <div className="mt-7 flex flex-col">
              <a
                href="mailto:sales@belmontgroup.in"
                className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-sm text-[var(--foreground)]/60 transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <span>Email</span>

                <ArrowUpRightIcon />
              </a>

              <a
                href="https://www.instagram.com/belmont_group/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-sm text-[var(--foreground)]/60 transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <span>Instagram</span>

                <ArrowUpRightIcon />
              </a>

              <Link
                href="/contact"
                className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-sm text-[var(--foreground)]/60 transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <span>Start a conversation</span>

                <ArrowUpRightIcon />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[var(--border)]">
          <div className="flex flex-col gap-5 py-7 text-[9px] uppercase tracking-[0.25em] text-[var(--muted)] md:flex-row md:items-center md:justify-between">
            <span>© {new Date().getFullYear()} Belmont Group</span>

            <div className="flex items-center gap-5">
              <span>18.5204° N</span>
              <span className="hidden h-3 w-px bg-[var(--border)] md:block" />
              <span>73.8567° E</span>
            </div>

            <span>Pune · India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
