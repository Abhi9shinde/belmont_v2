"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    name: "Pearl",
    location: "Dhanori, Pune",
    type: "3 BHK Residences",
    slug: "pearl",
    image: "/images/projects/pearl/hero.avif",
  },
  {
    number: "02",
    name: "Ember",
    location: "Pune",
    type: "Residential Development",
    slug: "ember",
    image: "/images/projects/ember/hero.png",
  },
  {
    number: "03",
    name: "Skyverse",
    location: "Pune",
    type: "Residential Development",
    slug: "skyverse",
    image: "/images/projects/skyverse/hero.png",
  },
  {
    number: "04",
    name: "Celosia",
    location: "Pune",
    type: "Residential Development",
    slug: "celosia",
    image: "/images/projects/celosia/hero.avif",
  },
  {
    number: "05",
    name: "Aster",
    location: "Pune",
    type: "Residential Development",
    slug: "aster",
    image: "/images/projects/aster/hero.webp",
  },
];

export default function ProjectsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Desktop:
   * Vertical page scrolling controls horizontal movement.
   */
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--background)] text-[var(--foreground)] lg:h-[450vh]"
    >
      {/* Desktop sticky container */}
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        {/* Header */}
        <div className="px-6 pb-10 md:px-10 lg:px-14 lg:pb-12">
          <div className="mx-auto flex max-w-[1500px] items-end justify-between">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.8 }}
            >
              <div className=" mt-24 flex items-center gap-4">
                <span className="h-px w-10 bg-[var(--foreground)]/30" />

                <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--muted)]">
                  Our Projects
                </span>
              </div>

              <h2 className="mt-5 font-[var(--font-display)] text-5xl leading-none tracking-[-0.03em] md:text-6xl lg:text-7xl">
                Places we've built.
              </h2>
            </motion.div>

            <span className="hidden text-xs uppercase tracking-[0.2em] text-[var(--muted)] md:block">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* DESKTOP TRACK */}
        <motion.div
          style={{ x }}
          ref={trackRef}
          className="hidden gap-6 pl-6 md:pl-10 lg:flex lg:w-max lg:gap-8 lg:pl-[7vw]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        {/* MOBILE */}
        <div className="flex flex-col gap-14 px-6 md:px-10 lg:hidden">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-20" />
        {/* Progress */}
        <div className="mx-6 flex items-center gap-4 md:mx-10 lg:absolute lg:bottom-10 lg:left-14 lg:right-14 lg:mx-0 lg:mt-0">
          <span className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
            01
          </span>

          <div className="relative h-px flex-1 bg-[var(--border)]">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="absolute inset-y-0 left-0 w-full origin-left bg-[var(--foreground)]"
            />
          </div>

          <span className="text-[10px] tracking-[0.2em] text-[var(--muted)]">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block w-full lg:w-[38vw] lg:min-w-[520px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e5df] lg:aspect-[4/3]">
        <Image
          src={project.image}
          alt={`${project.name} by Belmont Group`}
          fill
          sizes="(max-width: 1024px) 100vw, 38vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

        {/* Hover circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 scale-90 items-center justify-center rounded-full bg-white text-xs font-medium text-black opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            Explore
          </div>
        </div>

        {/* Card content */}
        <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
          <div className="flex items-center justify-between">
            <span className="text-[10px] tracking-[0.25em] text-white/55">
              {project.number}
            </span>

            <ArrowUpRight
              size={18}
              className="opacity-60 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
            />
          </div>

          <h3 className="mt-8 font-[var(--font-display)] text-5xl tracking-[-0.03em] md:text-6xl">
            {project.name}
          </h3>

          <div className="mt-3 flex flex-wrap gap-x-3 text-xs uppercase tracking-[0.18em] text-white/60">
            <span>{project.type}</span>
            <span>·</span>
            <span>{project.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
