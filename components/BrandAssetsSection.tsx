// --- Section: Brand Assets ---
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerChildren, viewportConfig } from "@/lib/motion";
import { BrandMark } from "@/components/BrandMark";

const marks = [
  {
    title: "Adaptive Loop",
    description: "Interlocking loops for continuous state → action → reward → update.",
    render: () => (
      <div className="relative h-16 w-16">
        <BrandMark className="h-16 w-16" title="Adaptive Loop mark" />
      </div>
    )
  },
  {
    title: "Guardrail Shield",
    description: "Shield with layered arcs and policy nodes for agentic guardrails.",
    render: () => (
      <svg viewBox="0 0 96 96" className="h-16 w-16 text-white">
        <defs>
          <linearGradient id="guardrail-grad" x1="12" y1="12" x2="84" y2="84">
            <stop offset="0" stopColor="#6B5BFF" />
            <stop offset="1" stopColor="#00D6B5" />
          </linearGradient>
        </defs>
        <path
          d="M48 12c14 6 24 7 36 10v25c0 14-12 27-36 37-24-10-36-23-36-37V22c12-3 22-4 36-10Z"
          fill="url(#guardrail-grad)"
          opacity="0.9"
        />
        <path
          d="M28 38c4-4 12-8 20-8s16 4 20 8"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M30 48c4-5 11-9 18-9s14 4 18 9"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M32 58c4-4 10-7 16-7s12 3 16 7"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="48" cy="40" r="3" fill="white" />
        <circle cx="38" cy="62" r="3" fill="white" />
        <circle cx="58" cy="62" r="3" fill="#FFC657" />
      </svg>
    )
  },
  {
    title: "Policy Graph",
    description: "Node constellation with directed edges converging on reward.",
    render: () => (
      <svg viewBox="0 0 96 96" className="h-16 w-16 text-white">
        <defs>
          <linearGradient id="graph-grad" x1="16" y1="16" x2="80" y2="80">
            <stop offset="0" stopColor="#00D6B5" />
            <stop offset="1" stopColor="#6B5BFF" />
          </linearGradient>
        </defs>
        <path
          d="M26 62 46 50m-4-22 12 14m6 18 12-6M48 46l14 10"
          stroke="url(#graph-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="42" cy="28" r="5" fill="#6B5BFF" />
        <circle cx="28" cy="62" r="5" fill="#00D6B5" />
        <circle cx="64" cy="70" r="6" fill="#FFC657" />
        <circle cx="46" cy="50" r="4" fill="white" />
        <circle cx="62" cy="56" r="4" fill="white" />
      </svg>
    )
  },
  {
    title: "Simulation Grid",
    description: "Warped grid showing controlled exploration in safe bounds.",
    render: () => (
      <svg viewBox="0 0 96 96" className="h-16 w-16 text-white">
        <defs>
          <linearGradient id="grid-grad" x1="10" y1="10" x2="86" y2="86">
            <stop offset="0" stopColor="#E7E7EC" stopOpacity="0.8" />
            <stop offset="1" stopColor="#00D6B5" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path
          d="M18 26c18-6 42-8 60-2M18 42c18-4 42-4 60 0M18 58c18 4 42 4 60 0M18 74c18 6 42 8 60 2"
          stroke="url(#grid-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M26 18c-6 18-8 42-2 60M42 18c-4 18-4 42 0 60M58 18c4 18 4 42 0 60M74 18c6 18 8 42 2 60"
          stroke="#6B5BFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        <circle cx="60" cy="48" r="4" fill="#FFC657" />
      </svg>
    )
  }
];

const wordmarks = [
  {
    title: "Primary Wordmark",
    body: "Electric Indigo + Teal Emerald, geometric sans with calm tracking.",
    className: "bg-gradient-to-r from-[#6B5BFF] to-[#00D6B5] bg-clip-text text-transparent"
  },
  {
    title: "Secondary Wordmark",
    body: "Neutral Silver on Deep Slate with Signal Amber underline on “Lab.”",
    className: "text-white"
  }
];

const backgrounds = [
  {
    title: "Node Mesh",
    body: "Sparse triangulated mesh with a single reward pulse.",
    className:
      "bg-[radial-gradient(circle_at_20%_30%,rgba(107,91,255,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(0,214,181,0.16),transparent_30%),linear-gradient(135deg,rgba(231,231,236,0.08),rgba(17,19,26,0.4))]"
  },
  {
    title: "Reward Curves",
    body: "Bezier reward lines threading a subtle gridfield.",
    className:
      "bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]"
  }
];

export function BrandAssetsSection() {
  return (
    <section id="brand" className="section-container">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerChildren}
        className="mx-auto max-w-3xl text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-teal"
        >
          Brand System
        </motion.span>
        <motion.h2 variants={fadeInUp} className="section-title mt-4">
          ReinforceLab Identity
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-white/70">
          Futuristic, mathematically precise marks that express adaptive loops,
          guardrails, and simulation-first experimentation—ready for light and
          dark applications.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {marks.map((mark) => (
          <motion.div
            key={mark.title}
            variants={fadeInUp}
            className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                {mark.render()}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Mark
              </span>
            </div>
            <h3 className="font-display text-lg text-white">{mark.title}</h3>
            <p className="text-sm text-white/60">{mark.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 lg:grid-cols-2"
      >
        {wordmarks.map((w) => (
          <motion.div
            key={w.title}
            variants={fadeInUp}
            className="glass-panel flex h-full flex-col gap-3 rounded-3xl p-6"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/50">
              Wordmark
            </span>
            <div className="flex items-center gap-2">
              <BrandMark className="h-8 w-8" />
              <span
                className={`font-display text-2xl md:text-3xl ${w.className}`}
              >
                ReinforceLab
              </span>
            </div>
            <p className="text-sm text-white/60">{w.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {backgrounds.map((bg) => (
          <motion.div
            key={bg.title}
            variants={fadeInUp}
            className="glass-panel relative overflow-hidden rounded-3xl p-6"
          >
            <div className={`absolute inset-0 opacity-80 ${bg.className}`} />
            <div className="relative space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                Background
              </span>
              <h3 className="font-display text-lg text-white">{bg.title}</h3>
              <p className="text-sm text-white/70">{bg.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
