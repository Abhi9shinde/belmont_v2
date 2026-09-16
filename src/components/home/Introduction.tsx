"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Uncompromising Quality",
    text: "Thoughtful materials and trusted construction practices built around lasting quality.",
  },
  {
    number: "02",
    title: "Transparent Dealings",
    text: "Clear communication and straightforward processes from the first conversation to possession.",
  },
  {
    number: "03",
    title: "Modern Living",
    text: "Smart layouts, considered spaces and amenities designed around today's lifestyles.",
  },
  {
    number: "04",
    title: "Sustainable Development",
    text: "Responsible development with practices designed to reduce environmental impact.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Introduction() {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
        {/* SECTION INTRO */}
        <div className="min-h-[100svh] pt-20 md:py-30 lg:py-28">
          {/* Label */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.75,
            }}
            variants={reveal}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[var(--foreground)]/30" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
              The Belmont Approach
            </span>
          </motion.div>

          {/* Main Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.7,
            }}
            variants={reveal}
            className="mt-20 max-w-6xl md:mt-28"
          >
            <h2 className="font-[var(--font-display)] text-[clamp(3.2rem,7vw,8rem)] leading-[0.92] tracking-[-0.035em]">
              We believe a home should do more than give you a place to live.
            </h2>
          </motion.div>

          {/* Secondary Statement */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.8,
            }}
            variants={reveal}
            className="mt-16 ml-auto max-w-2xl md:mt-24"
          >
            <p className="text-xl leading-relaxed text-[var(--muted)] md:text-2xl lg:text-3xl">
              It should give you space to grow, moments to share, and a sense of
              belonging that lasts.
            </p>
          </motion.div>
        </div>

        {/* IMAGE + STORY */}
        <div className="grid gap-16 pb-32 md:gap-24 md:pb-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.7,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <motion.div
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/belmont-lifestyle.webp"
                alt="Belmont residential interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Story */}
          <div className="lg:pl-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.8,
              }}
              variants={reveal}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                Designed around life
              </p>

              <h3 className="mt-7 max-w-xl font-[var(--font-display)] text-4xl leading-tight tracking-[-0.02em] md:text-5xl lg:text-6xl">
                Thoughtful spaces for the way modern life unfolds.
              </h3>

              <p className="mt-8 max-w-xl text-base leading-8 text-[var(--muted)] md:text-lg">
                From considered layouts to everyday conveniences, Belmont
                focuses on creating residences that balance comfort,
                functionality and value.
              </p>
            </motion.div>

            {/* Principles */}
            <div className="mt-16 border-t border-[var(--border)]">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.85,
                  }}
                  variants={reveal}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="grid grid-cols-[50px_1fr] gap-5 border-b border-[var(--border)] py-7 md:grid-cols-[70px_1fr]"
                >
                  <span className="text-xs tracking-widest text-[var(--muted)]">
                    {principle.number}
                  </span>

                  <div>
                    <h4 className="text-lg font-medium md:text-xl">
                      {principle.title}
                    </h4>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-[var(--muted)]">
                      {principle.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
