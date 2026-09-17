"use client";

import { motion } from "framer-motion";

const commitments = [
  {
    number: "01",
    title: "Uncompromising Quality",
    description:
      "We focus on quality at every stage, from the materials and construction to the details that shape everyday living.",
  },
  {
    number: "02",
    title: "On-Time Delivery",
    description:
      "A commitment to planned execution and timely delivery, so your journey from purchase to possession stays clear.",
  },
  {
    number: "03",
    title: "Transparent Dealings",
    description:
      "Clear communication and straightforward dealings form an important part of the Belmont experience.",
  },
  {
    number: "04",
    title: "Modern Living",
    description:
      "Homes designed around contemporary lifestyles, with thoughtful spaces that balance comfort and functionality.",
  },
  {
    number: "05",
    title: "Sustainable Development",
    description:
      "Responsible development that considers the relationship between the built environment and the world around it.",
  },
  {
    number: "06",
    title: "Trusted Legacy",
    description:
      "A long-term approach to building relationships, creating spaces and earning the trust of the people who call them home.",
  },
];

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-18 text-[var(--foreground)] md:px-10 md:py-30 lg:px-14 lg:py-38">
      {/* Subtle architectural grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[var(--foreground)]/[0.035]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[var(--foreground)]/[0.025]" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[var(--foreground)]/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* HEADER */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--foreground)]/30" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                The Belmont Commitment
              </span>
            </div>

            <div className="mt-10 hidden lg:block">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
                06 Principles
              </span>

              <div className="mt-5 h-px w-28 bg-[var(--border)]" />

              <p className="mt-6 max-w-xs text-sm leading-7 text-[var(--muted)]">
                Six principles that shape the way Belmont approaches every
                development and every relationship.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.035em] md:text-7xl lg:text-[6.5rem]">
              Building isn't only
              <br />
              about what stands today.
            </h2>

            <p className="mt-8 max-w-3xl font-[var(--font-display)] text-3xl leading-[1.05] tracking-[-0.025em] text-[var(--muted)] md:text-4xl lg:text-5xl">
              It's about what continues
              <br className="hidden md:block" />
              to matter tomorrow.
            </p>
          </motion.div>
        </div>

        {/* COMMITMENT GRID */}
        <div className="mt-24 md:mt-32 lg:mt-40">
          <div className="grid border-t border-[var(--border)] md:grid-cols-2">
            {commitments.map((item, index) => (
              <CommitmentCard key={item.number} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* FOOTER MARKER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[var(--foreground)]/25" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
            Belmont Group · Pune
          </span>

          <span className="h-px flex-1 bg-[var(--border)]" />
        </motion.div>
      </div>
    </section>
  );
}

function CommitmentCard({
  item,
  index,
}: {
  item: (typeof commitments)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative border-b border-[var(--border)]
        p-7
        transition-colors duration-500
        md:p-10
        lg:p-14
        ${index % 2 === 0 ? "md:border-r" : ""}
      `}
    >
      {/* Number + line */}
      <div className="flex items-center gap-4">
        <span className="text-[10px] tracking-[0.25em] text-[var(--muted)] transition-colors duration-500 group-hover:text-[var(--foreground)]">
          {item.number}
        </span>

        <span className="h-px w-8 bg-[var(--border)] transition-all duration-700 group-hover:w-16 group-hover:bg-[var(--foreground)]/40" />

        <span className="ml-auto text-[9px] uppercase tracking-[0.25em] text-[var(--muted)]">
          Principle
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-14 max-w-lg font-[var(--font-display)] text-4xl leading-[0.98] tracking-[-0.03em] text-[var(--foreground)]/50 transition-all duration-700 group-hover:translate-x-1 group-hover:text-[var(--foreground)] md:text-5xl lg:text-6xl">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-7 max-w-md text-sm leading-7 text-[var(--muted)] transition-colors duration-700 group-hover:text-[var(--foreground)]/65 md:text-base">
        {item.description}
      </p>

      {/* Bottom marker */}
      <div className="mt-12 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--muted)]">
          Belmont Group
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-xs text-[var(--muted)] transition-all duration-500 group-hover:border-[var(--foreground)]/40 group-hover:text-[var(--foreground)]">
          ↗
        </span>
      </div>
    </motion.div>
  );
}
