"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.12,
    },
  },
};

const heroItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-black text-white">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt="Belmont residential development"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Image Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 md:px-10 md:pb-16 lg:px-14 lg:pb-20"
      >
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.p
            variants={heroItem}
            className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/70 md:text-sm"
          >
            Belmont Group · Pune
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={heroItem}
            className="max-w-4xl font-[var(--font-display)] text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.035em]"
          >
            Building spaces
            <br />
            worth coming home to.
          </motion.h1>

          {/* Bottom Row */}
          <motion.div
            variants={heroItem}
            className="mt-8 flex flex-col gap-7 md:mt-10 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-sm leading-6 text-white/70 md:text-base">
              Thoughtfully designed homes shaped around modern living,
              meaningful spaces and the communities they become part of.
            </p>

            <Link
              href="/projects"
              className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/40 bg-black/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-500 hover:border-white/70 hover:bg-black/25"
            >
              Explore Projects
              <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/50 transition-colors duration-500 group-hover:border-white">
                <ArrowUpRight
                  size={15}
                  className="absolute transition-transform duration-500 ease-out group-hover:translate-x-6 group-hover:-translate-y-6"
                />

                <ArrowUpRight
                  size={15}
                  className="absolute -translate-x-6 translate-y-6 transition-transform duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-7 right-6 hidden items-center gap-3 md:flex md:right-10 lg:right-14"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
            Scroll to explore
          </span>

          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30"
          >
            <ArrowDown size={14} />
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
