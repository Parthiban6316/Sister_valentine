import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { heroSection, couple } from "../data/content";

const floatingHearts = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  delay: (i % 5) * 0.8,
  duration: 8 + (i % 4),
  left: `${5 + i * 9}%`,
  size: 26 + (i % 4) * 8,
  opacity: 0.2 + (i % 4) * 0.12,
}));

export function Hero({ onOpenLetter }) {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-hero-gradient dark:bg-hero-gradient-dark transition-colors duration-700"
      aria-label="Valentine hero"
    >
      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-rose-100/40 dark:from-black/60 dark:via-black/40 dark:to-rose-950/60" />

      {/* Floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "-10%", opacity: heart.opacity }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              duration: heart.duration,
              delay: heart.delay,
            }}
            className="absolute text-rose-400/60 dark:text-rose-300/60"
            style={{ left: heart.left }}
          >
            <Heart
              className="drop-shadow-lg"
              style={{ width: heart.size, height: heart.size }}
              strokeWidth={1.5}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-rose-500 shadow-sm shadow-rose-100 backdrop-blur-md dark:bg-black/50 dark:text-rose-200 dark:shadow-rose-900/40"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>From {couple.wifeName}</span>
            <span className="h-1 w-1 rounded-full bg-rose-400" />
            <span>To {couple.husbandName}</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl leading-tight text-slate-900 drop-shadow-sm sm:text-5xl md:text-6xl dark:text-rose-50"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {heroSection.headline}
          </motion.h1>

          <motion.p
            className="mx-auto max-w-xl text-base text-slate-700/90 sm:text-lg dark:text-rose-100/80"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75 }}
          >
            {heroSection.subtext}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <motion.button
              onClick={onOpenLetter}
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.97, translateY: 0 }}
              className="group inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-300/60 transition-all duration-300 hover:bg-rose-600 hover:shadow-xl hover:shadow-rose-400/80 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              <span>{heroSection.cta}</span>
              <motion.span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-400/80 text-xs shadow-md shadow-rose-300/80 group-hover:bg-rose-300"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                💌
              </motion.span>
            </motion.button>

            <p className="text-xs text-slate-600/80 dark:text-rose-100/70">
              Best viewed with sound on and a soft heart.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

