// --- Section: Why Choose ReinforceLab ---
"use client";

import { metrics } from "@/content/data";
import { fadeInUp, staggerChildren } from "@/lib/motion";
import { motion } from "framer-motion";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="grid gap-12 lg:grid-cols-2 lg:items-center"
      >
        <motion.div variants={fadeInUp} className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Why Choose ReinforceLab
          </span>
          <h2 className="section-title">
            Enterprise-grade guardrails with measurable impact.
          </h2>
          <p className="text-white/70">
            ReinforceLab combines AgentOps observability, zero-trust security,
            and executive-grade analytics to orchestrate adaptive systems you
            can audit, govern, and scale. We measure success in operational
            outcomes—not just offline benchmarks.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-brand-indigo" />
              Continuous human-feedback integration keeps policies aligned with
              evolving business and ethical guidelines.
            </li>
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-brand-teal" />
              Built-in reward shaping and safety throttles protect against
              negative externalities in high-stakes environments.
            </li>
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-brand-sky" />
              AgentOps dashboards surface drift, fairness, and ROI metrics for
              leadership-ready reporting.
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="glass-panel grid gap-6 rounded-3xl p-6 md:grid-cols-3"
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                {metric.label}
              </p>
              <p className="mt-4 font-display text-3xl text-white">
                {metric.stat}
              </p>
              <p className="mt-2 text-xs text-white/60">{metric.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

