import { motion } from "framer-motion";
import { Sparkles, Coffee, Heart, Home } from "lucide-react";
import { timeline } from "../data/content";

const iconMap = {
  sparkles: Sparkles,
  coffee: Coffee,
  heart: Heart,
  home: Home,
  rings: Heart,
};

export function Timeline({ onNext }) {
  return (
    <section
      id="journey"
      className="py-20 sm:py-24 px-4 bg-gradient-to-b from-rose-100/60 via-white to-rose-50 dark:from-wine-dark/90 dark:via-black dark:to-rose-950/60"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-display text-3xl sm:text-4xl text-center text-slate-900 dark:text-rose-50 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Journey
        </motion.h2>
        <motion.p
          className="text-center text-sm sm:text-base text-slate-600 dark:text-rose-100/80 mb-16 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Every chapter with you is my favorite
        </motion.p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose-200/30 via-rose-400/60 to-rose-200/30 sm:-translate-x-px" />

          {timeline.map((event, index) => {
            const Icon = iconMap[event.icon] || Heart;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id ?? index}
                className={`relative flex items-start mb-16 last:mb-0 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Icon circle */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-rose-300/70 shadow-md shadow-rose-200/70 dark:border-rose-600/70 dark:shadow-black/70"
                    whileHover={{ scale: 1.15 }}
                  >
                    <Icon className="w-5 h-5 text-rose-500 dark:text-rose-300" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                    isEven ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                  }`}
                >
                  <span className="font-script text-rose-500 dark:text-rose-300 text-lg">
                    {event.date}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-slate-900 dark:text-rose-50 mt-1 mb-2">
                    {event.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-rose-100/80 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {onNext && (
          <motion.div
            className="mt-4 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="button"
              onClick={onNext}
              className="rounded-full bg-rose-500 px-6 py-2 text-sm font-semibold text-white shadow-md shadow-rose-300/70 transition hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400"
            >
              Next: Reasons I Love You →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Timeline;

