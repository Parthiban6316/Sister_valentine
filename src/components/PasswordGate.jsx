import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";
import { siteMeta } from "../data/content";

export function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [attempted, setAttempted] = useState(false);

  const correctPassword = "nittu"; // user can customize here or from env/config

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const ok = value.trim().toLowerCase() === correctPassword.toLowerCase();
    setAttempted(true);
    if (ok) {
      onUnlock();
    }
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-hero-gradient dark:bg-hero-gradient-dark">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40" />

      <motion.div
        className="relative z-10 mx-4 max-w-sm rounded-3xl bg-white/85 p-7 text-center shadow-2xl shadow-rose-200/80 backdrop-blur-xl dark:bg-black/80 dark:shadow-black/80"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100/90 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.28em] text-rose-500 dark:bg-rose-900/80 dark:text-rose-200">
          <Lock className="h-3.5 w-3.5" />
          <span>For my love only</span>
        </div>

        <h1 className="mb-1 font-display text-2xl text-slate-900 dark:text-rose-50">
          A Little Secret Space
        </h1>
        <p className="mb-4 text-xs text-slate-600 dark:text-rose-100/70">
          I made this just for you. Use our special word to come in.
        </p>
        <p className="mb-4 text-[11px] text-slate-500 dark:text-rose-200/70">
          Hint: {siteMeta.passwordHint}
        </p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type our secret word"
            className="w-full rounded-full border border-rose-100/80 bg-white/80 px-4 py-2 text-xs text-slate-800 shadow-inner shadow-rose-100/70 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-200/80 dark:border-rose-900/60 dark:bg-black/70 dark:text-rose-50 dark:shadow-black/70 dark:focus:border-rose-400 dark:focus:ring-rose-500/50"
          />

          {attempted && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] text-rose-500 dark:text-rose-300"
            >
              If it didn&apos;t work, try the nickname you use for me.
            </motion.p>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.96, y: 0 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-rose-300/70 hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400"
          >
            <Unlock className="h-3.5 w-3.5" />
            <span>Enter</span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default PasswordGate;

