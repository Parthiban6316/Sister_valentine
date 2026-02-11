import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { reasons } from "../data/content";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function Reasons({ onNext }) {
  return (
    <section
      id="reasons"
      className="relative bg-gradient-to-b from-rose-50 via-white to-rose-100/60 px-4 py-20 dark:from-black dark:via-wine-dark/90 dark:to-rose-950/60"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.h2
          className="mb-3 text-center font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-rose-50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          Reasons I Love You
        </motion.h2>
        <motion.p
          className="mb-10 text-center text-sm text-slate-600 sm:text-base dark:text-rose-100/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          Just a few of the countless little things that make you my forever.
        </motion.p>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {reasons.map((text, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.02,
                translateY: -4,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/60 p-4 shadow-soft-glass backdrop-blur-xl dark:border-rose-500/20 dark:bg-black/40"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 via-transparent to-rose-100/50 dark:from-rose-500/30 dark:to-rose-900/40" />
              </div>

              <div className="relative flex items-start gap-3">
                <motion.div
                  className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100/80 text-rose-500 shadow-md shadow-rose-200/80 group-hover:bg-rose-500 group-hover:text-rose-50 dark:bg-rose-900/60 dark:text-rose-200 dark:group-hover:bg-rose-400"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 15 }}
                >
                  <HeartPulse className="h-5 w-5" />
                </motion.div>
                <p className="relative text-sm leading-relaxed text-slate-800 dark:text-rose-100">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {onNext && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="button"
              onClick={onNext}
              className="rounded-full bg-rose-500 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-rose-300/70 transition hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              Next: Little snapshots of us →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Reasons;

