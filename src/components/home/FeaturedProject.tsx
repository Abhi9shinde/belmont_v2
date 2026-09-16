"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="bg-[#1c1c1a] px-6 py-24 text-white md:px-10 md:py-28 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        {/* HEADER */}
        <div className="mb-10 flex items-center justify-between md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-white/30" />

            <span className="text-xs uppercase tracking-[0.3em] text-white/50">
              Featured Project
            </span>
          </motion.div>

          <span className="text-xs tracking-[0.2em] text-white/40">
            01 / 03
          </span>
        </div>

        {/* IMAGE */}
        <Link
          href="/projects/pearl"
          className="group relative block overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.75 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative aspect-[16/8.5] overflow-hidden"
          >
            <Image
              src="/images/projects/pearl/hero.avif"
              alt="Pearl residential development by Belmont Group"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/25" />

            {/* Center explore */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 scale-90 items-center justify-center rounded-full bg-white text-xs font-medium text-black opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                Explore
              </div>
            </div>
          </motion.div>
        </Link>

        {/* INFORMATION */}
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-5">
              <h2 className="font-[var(--font-display)] text-5xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                Pearl
              </h2>

              <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                3 BHK · Dhanori, Pune
              </span>
            </div>

            <p className="mt-4 max-w-lg text-sm leading-6 text-white/55 md:text-base">
              A considered residential address designed around contemporary
              living, thoughtful spaces and everyday moments.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <Link
              href="/projects/pearl"
              className="group inline-flex items-center gap-4 border-b border-white/25 pb-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-white"
            >
              View Project
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/30">
                <ArrowUpRight
                  size={14}
                  className="absolute transition-transform duration-500 group-hover:translate-x-5 group-hover:-translate-y-5"
                />

                <ArrowUpRight
                  size={14}
                  className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
