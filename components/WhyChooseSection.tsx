// --- Section: Why Choose ReinforceLab ---
"use client";

import { metrics } from "@/content/data";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="anime-section features section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
        className="grid gap-12"
      >
        <motion.div variants={fadeInUp} className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--flat-lime)]">
            Why Choose ReinforceLab
          </span>
          <h2 className="section-title">
            Agentic Guardrails with measurable impact.
          </h2>
          <div className="title-underline" aria-hidden="true" />
          <p className="text-white/70">
            The next generation of adaptive intelligence requires more than
            clever policies—it needs Agentic Guardrails that ensure safety,
            alignment, and reliability across the entire decision lifecycle.
          </p>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-brand-indigo" />
              AgentOps observability with 45+ prebuilt monitors.
            </li>
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-brand-teal" />
              Agentic Guardrails that enforce alignment and prevent harmful
              actions.
            </li>
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-brand-sky" />
              Reward shaping, safety throttles, and human feedback loops for
              evolving constraints.
            </li>
            <li className="flex gap-3">
              <span className="h-2.5 w-2.5 translate-y-2 rounded-full bg-white/70" />
              Leadership-ready dashboards showing fairness, drift, and ROI
              metrics.
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
