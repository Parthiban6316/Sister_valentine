import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { couple, siteMeta } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-rose-100/70 bg-white/80 px-4 py-8 text-center text-xs text-slate-500 backdrop-blur-md dark:border-rose-900/60 dark:bg-black/80 dark:text-rose-100/70">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm dark:bg-rose-900/70 dark:text-rose-200">
            <HeartHandshake className="h-3.5 w-3.5" />
          </span>
          <p className="text-left text-[11px] leading-relaxed sm:text-xs">
            Forever yours,&nbsp;
            <span className="font-medium text-rose-500 dark:text-rose-300">
              {couple.wifeName}
            </span>
            .
            <br />
            {siteMeta.date}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          <p className="flex items-center gap-1 text-[11px] sm:text-xs">
            Crafted with
            <span className="inline-flex animate-pulse-soft text-rose-500 dark:text-rose-300">
              ❤️
            </span>
            just for{" "}
            <span className="font-medium text-slate-700 dark:text-rose-50">
              {couple.husbandName}
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

