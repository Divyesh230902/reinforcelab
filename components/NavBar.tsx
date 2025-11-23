// --- Section: Navigation ---
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/content/data";

export function NavBar() {
  return (
    <header className="anime-header sticky top-0 z-40">
      <div className="section-container flex items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 text-[var(--charcoal)]"
        >
          <div className="brand-symbol text-5xl leading-none text-[var(--charcoal)]">
            π
          </div>
          <span className="font-display text-xl text-[var(--charcoal)]">
            ReinforceLab
          </span>
        </motion.div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--charcoal)] lg:flex">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ opacity: 1, y: -2 }}
              className="transition hover:text-[var(--flat-green)]"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <Link
          href="#contact"
          className="anime-btn rounded-full px-4 py-2 text-sm font-semibold"
        >
          Request a Demo
        </Link>
      </div>
    </header>
  );
}
