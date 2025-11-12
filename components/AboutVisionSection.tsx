// --- Section: About & Vision ---
"use client";

import { fadeInUp, staggerChildren } from "@/lib/motion";
import { motion } from "framer-motion";

export function AboutVisionSection() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="grid gap-10 lg:grid-cols-2"
      >
        <motion.div variants={fadeInUp} className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
            About ReinforceLab
          </span>
          <h2 className="section-title">
            Mission: Translate reward signals into durable business value.
          </h2>
          <p className="text-white/70">
            ReinforceLab was founded to close the gap between research-grade RL
            and enterprise transformation. We align stakeholders around adaptive
            intelligence programs that deliver measurable impact—from strategic
            roadmaps and simulation sandboxes to deployed policies and ongoing
            governance.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="glass-panel rounded-3xl p-6 text-sm text-white/70"
        >
          <p>
            Our teams blend reinforcement learning scientists, systems
            engineers, and AgentOps specialists. Together we orchestrate
            adaptive pipelines that respect regulatory requirements, capture
            human feedback, and evolve alongside your market realities. We build
            with transparency so your teams inherit living systems—not black
            boxes.
          </p>
          <p className="mt-4">
            Vision: make continuous learning a managed capability for every
            enterprise—where experimentation cycles are explainable, ethical,
            and economically aligned with every decision maker.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

