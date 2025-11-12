// --- Section: Core Services ---
"use client";

import { services } from "@/content/data";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section id="services" className="section-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal"
        >
          Services
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          Reinforcement Learning, Delivered End-to-End
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          Our six-part services suite aligns strategy, simulation, policy
          engineering, deployment, operations, and governance. Each engagement
          is built to move from proof of value into production-scale impact
          without losing oversight.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="mt-16 grid gap-6 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.article
            key={service.name}
            variants={fadeInUp}
            className="glass-panel flex h-full flex-col rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-2xl bg-white/8 ring-1 ring-white/10" />
              <h3 className="font-display text-lg text-white">{service.name}</h3>
            </div>
            <p className="mt-4 text-sm text-white/70">{service.summary}</p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {service.details.map((detail) => (
                <li key={detail} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

