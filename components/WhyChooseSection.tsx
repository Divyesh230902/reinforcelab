// --- Section: Why Choose ReinforceLab ---
"use client";

import { metrics } from "@/content/data";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { motion } from "framer-motion";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
        className="grid gap-12 lg:grid-cols-2 lg:items-center"
      >
        <motion.div variants={fadeInUp} className="space-y-5">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal">
            Why Choose ReinforceLab
          </span>
          <h2 className="section-title">
            Agentic Guardrails with measurable impact.
          </h2>
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
        <motion.div
          variants={fadeInUp}
          className="glass-panel grid gap-6 rounded-3xl p-6 md:grid-cols-3"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ y: -8, scale: 1.03 }}
              className="rounded-2xl bg-white/5 p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-brand-teal/70 via-brand-indigo/70 to-brand-sky/70 text-white">
                <svg
                  viewBox="0 0 48 48"
                  className="h-7 w-7"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect
                    x="6"
                    y="6"
                    width="36"
                    height="36"
                    rx="10"
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.5"
                    strokeWidth="3"
                  />
                  <path
                    d="M12 26c0-8 6-16 12-16s12 8 12 16-6 14-12 14c-4 0-8-3-10-7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="24" cy="16" r="3" fill="currentColor" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                {metric.label}
              </p>
              <p className="mt-4 font-display text-3xl text-white">
                {metric.stat}
              </p>
              <p className="mt-2 text-xs text-white/60">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
