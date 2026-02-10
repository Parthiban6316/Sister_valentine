import { motion } from "framer-motion";
import { specialMessage } from "../data/content";

export function SpecialMessage() {
  return (
    <section
      id="special"
      className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-rose-100/80 to-rose-200/80 px-4 py-24 dark:from-black dark:via-wine-dark dark:to-rose-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(248,113,113,0.5),_transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          className="mb-4 rounded-full bg-white/60 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-rose-500 shadow-sm shadow-rose-200/80 backdrop-blur-md dark:bg-black/60 dark:text-rose-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          {specialMessage.title}
        </motion.div>

        <motion.h2
          className="mb-4 bg-gradient-to-br from-rose-600 via-rose-500 to-amber-400 bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl dark:from-rose-200 dark:via-rose-100 dark:to-amber-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            {specialMessage.line}
          </motion.span>
        </motion.h2>

        <motion.p
          className="max-w-2xl text-sm text-slate-700 sm:text-base dark:text-rose-100/80"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {specialMessage.subtext}
        </motion.p>

        <motion.div
          className="mt-10 h-32 w-32 rounded-full bg-rose-400/40 blur-3xl dark:bg-rose-500/40"
          initial={{ opacity: 0.5, scale: 0.8 }}
          whileInView={{ opacity: [0.5, 0.9, 0.5], scale: [0.8, 1, 0.9] }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}

export default SpecialMessage;

