// --- Section: Hero ---
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section-container flex flex-col gap-12 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pt-28"
    >
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2"
      >
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/70"
        >
          From Rewards to Reality
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
        >
          From Rewards to Reality — Reinforcement Learning That Scales.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-white/80"
        >
          ReinforceLab empowers enterprises with adaptive, goal-driven AI
          systems that continuously learn from interaction, feedback, and
          results. We translate reward signals into real-world impact across
          pricing, operations, and engagement programs.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-brand-indigo px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-teal"
          >
            Request a Demo
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-brand-teal hover:text-white"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 shadow-glow">
          <div className="absolute inset-0 bg-gradient-conic opacity-60" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between">
              <p className="font-display text-4xl text-white">8-12 mo</p>
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                ROI Realized
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">AgentOps</p>
                <p className="mt-2 text-lg font-semibold text-white">45+</p>
                <p>Adaptive monitors across deployments</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">Security</p>
                <p className="mt-2 text-lg font-semibold text-white">SOC 2</p>
                <p>Aligned controls and zero-trust posture</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">Policy Library</p>
                <p className="mt-2 text-lg font-semibold text-white">120+</p>
                <p>Reusable RL templates for enterprise workflows</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-xs uppercase text-white/50">Impact</p>
                <p className="mt-2 text-lg font-semibold text-white">3x</p>
                <p>Average uplift across pricing and ops pilots</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

