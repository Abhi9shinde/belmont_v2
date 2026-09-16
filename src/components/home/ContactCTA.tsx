"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#1c1c1a] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-white/30" />

          <span className="text-xs uppercase tracking-[0.3em] text-white/45">
            Let's talk
          </span>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl font-[var(--font-display)] text-6xl leading-[0.92] tracking-[-0.04em] md:text-7xl lg:text-[7.5rem]"
            >
              Looking for your
              <br />
              next address?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="mt-10 max-w-md text-base leading-7 text-white/50 md:text-lg"
            >
              Explore Belmont residences or speak with our team to find a space
              that feels right for you.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-12 border-t border-white/10 pt-6"
            >
              <Link
                href="/contact"
                className="group flex w-full max-w-xl items-center justify-between"
              >
                <span className="text-sm uppercase tracking-[0.2em]">
                  Start a conversation
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition-all duration-500 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3] lg:aspect-[4/5]"
          >
            <Image
              src="/images/projects/pearl/hero.jpg"
              alt="Belmont residential development"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-[1200ms] hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-black/10" />

            {/* Image label */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white md:bottom-7 md:left-7">
              <span className="h-px w-8 bg-white/60" />

              <span className="text-[10px] uppercase tracking-[0.25em]">
                Belmont Group · Pune
              </span>
            </div>
          </motion.div>
        </div>

        {/* Footer information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid gap-8 border-t border-white/10 pt-8 text-sm text-white/40 md:grid-cols-3"
        >
          <div>
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25">
              Location
            </span>
            Pune, Maharashtra
          </div>

          <div>
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25">
              Email
            </span>
            hello@belmontgroup.in
          </div>

          <div className="md:text-right">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-white/25">
              Belmont Group
            </span>
            Building spaces worth coming home to.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
