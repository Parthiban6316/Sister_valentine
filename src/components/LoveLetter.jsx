import { motion } from "framer-motion";
import { loveLetter } from "../data/content";

const paragraphVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.13,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export function LoveLetter({ onNext }) {
  return (
    <section
      id="letter"
      className="relative scroll-mt-16 bg-gradient-to-b from-white/80 via-rose-50/80 to-rose-100/40 px-4 py-20 dark:from-black/80 dark:via-rose-950/40 dark:to-wine-dark/60"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.3),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.45),_transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.h2
          className="mb-6 text-center font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-rose-50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7 }}
        >
          {loveLetter.title}
        </motion.h2>

        <motion.div
          className="rounded-3xl bg-white/80 p-6 shadow-2xl shadow-rose-200/80 backdrop-blur-md sm:p-10 dark:bg-black/60 dark:shadow-black/60"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-6 text-sm uppercase tracking-[0.25em] text-rose-400 dark:text-rose-300">
            Love Letter
          </div>

          <div className="space-y-4 font-script text-xl leading-relaxed text-slate-800/90 sm:text-2xl dark:text-rose-100/90">
            {loveLetter.paragraphs.map((p, index) => (
              <motion.p
                key={index}
                className={index === loveLetter.paragraphs.length - 1 ? "mt-6" : ""}
                variants={paragraphVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-15%" }}
                custom={index}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-script text-2xl text-rose-500 sm:text-3xl dark:text-rose-300">
              {loveLetter.signature}
            </p>

            {onNext && (
              <motion.button
                type="button"
                onClick={onNext}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-rose-300/70 hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400"
              >
                Continue our story →
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default LoveLetter;

