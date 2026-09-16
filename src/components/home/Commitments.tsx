"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[var(--background)] px-6 py-28 text-[var(--foreground)] md:px-10 md:py-36 lg:px-14 lg:py-44">
      <div className="mx-auto max-w-[1500px]">
        {/* INTRO */}
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex font-medium items-center gap-4">
              <span className="h-px w-10 bg-[var(--foreground)]/30" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                The Belmont Commitment
              </span>
            </div>

            <p className="mt-8 max-w-sm text-lg leading-7 text-[var(--muted)]">
              Six principles that shape the way Belmont approaches every
              development and every relationship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-5xl font-[var(--font-display)] text-5xl leading-[0.95] tracking-[-0.035em] md:text-7xl lg:text-[6.5rem]">
              Building isn't only about what stands today.
              <span className="text-[var(--muted)]">
                {" "}
                It's about what continues to matter tomorrow.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* COMMITMENTS */}
        <div className="mt-24 border-t border-[var(--border)] md:mt-32">
          {commitments.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.7,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                onMouseEnter={() => setActive(index)}
                className="border-b border-[var(--border)]"
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className="grid w-full grid-cols-[45px_1fr_auto] items-start gap-5 py-7 text-left md:grid-cols-[70px_1fr_100px] md:py-9"
                >
                  <span className="pt-1 text-xs tracking-[0.2em] text-[var(--muted)]">
                    {item.number}
                  </span>

                  <div>
                    <h3
                      className={`font-[var(--font-display)] text-2xl tracking-[-0.02em] transition-colors duration-500 md:text-4xl ${
                        isActive
                          ? "text-[var(--foreground)]"
                          : "text-[var(--foreground)]/45"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pt-4 text-sm leading-7 text-[var(--muted)] md:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  <span
                    className={`pt-1 text-xs transition-colors duration-500 ${
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    {isActive ? "—" : "+"}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
