// --- Section: Why Reinforcement Learning ---
"use client";

import { highlightCards } from "@/content/data";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { motion } from "framer-motion";

export function WhyRLSection() {
  return (
    <section id="why-rl" className="section-container">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.span
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal"
        >
          Beyond Conventional AI Pipelines
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          Why Reinforcement Learning Now
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          We go past static prompts, one-off fine-tunes, and hindsight-only
          analytics. ReinforceLab creates adaptive systems that experiment,
          learn, and improve with every decision cycle—keeping your enterprise
          relevant in markets that refuse to stay still.
        </motion.p>
      </motion.div>
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="mt-14 grid gap-6 md:grid-cols-2"
      >
        {highlightCards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeInUp}
            className="glass-panel h-full rounded-3xl p-6"
          >
            <h3 className="font-display text-xl text-white">{card.title}</h3>
            <p className="mt-3 text-sm text-white/70">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

