// --- Section: Hero ---
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { metrics } from "@/content/data";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="anime-hero section-container flex flex-col gap-12 pb-24 pt-16 lg:flex-row lg:items-center lg:gap-16 lg:pt-28"
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
          ReinforceLab
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="mt-6 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl"
        >
          From Rewards to Reality — Reinforcement Learning That Scales.
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-2 text-lg font-semibold text-[var(--flat-lime)]"
        >
          Agentic Guardrails for every adaptive decision.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-white/80"
        >
          ReinforceLab empowers enterprises with adaptive, goal-driven AI
          systems that continuously learn from interaction, feedback, and
          outcomes. We convert reward signals into tangible business impact
          across pricing, operations, logistics, and engagement programs.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="anime-btn rounded-full px-6 py-3 text-sm font-semibold"
          >
            Request a Demo
          </a>
          <a
            href="#services"
            className="anime-btn rounded-full border px-6 py-3 text-sm font-semibold"
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
        <div className="glass-panel relative overflow-hidden rounded-3xl p-0">
          <div className="hero-roller">
            <div className="hero-roller-track">
              {[...metrics, ...metrics].map((metric, idx) => (
                <div className="metric-card anime-card p-5" key={`${metric.label}-${idx}`}>
                  <p className="metric-label text-xs uppercase tracking-[0.2em]">
                    {metric.label}
                  </p>
                  <p className="metric-stat mt-2 text-2xl font-semibold">{metric.stat}</p>
                  <p className="metric-copy mt-2 text-xs">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
