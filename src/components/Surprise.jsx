import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles } from "lucide-react";
import { surprise } from "../data/content";

// Lightweight confetti burst without extra dependencies
function fireConfetti() {
  if (typeof window === "undefined") return;

  const duration = 900;
  const end = Date.now() + duration;

  function frame() {
    const colors = ["#fb7185", "#f97373", "#fb7185", "#fecaca"];
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "60";

    for (let i = 0; i < 60; i++) {
      const piece = document.createElement("div");
      piece.style.position = "absolute";
      piece.style.width = "8px";
      piece.style.height = "14px";
      piece.style.borderRadius = "999px";
      piece.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      piece.style.top = "50%";
      piece.style.left = "50%";
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 160;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      piece.style.transform = `translate(${x}px, ${y}px) rotate(${
        Math.random() * 360
      }deg)`;
      piece.style.opacity = "0";
      piece.style.transition = "transform 900ms ease-out, opacity 900ms ease-out";
      container.appendChild(piece);
      requestAnimationFrame(() => {
        piece.style.opacity = "1";
        piece.style.transform = `translate(${x}px, ${y + 60}px) rotate(${
          Math.random() * 360
        }deg)`;
      });
    }

    document.body.appendChild(container);
    setTimeout(() => {
      document.body.removeChild(container);
    }, duration + 100);

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }

  frame();
}

export function Surprise() {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    if (!revealed) {
      if ("vibrate" in navigator) {
        navigator.vibrate?.(100);
      }
      fireConfetti();
      setRevealed(true);
    }
  };

  return (
    <section
      id="surprise"
      className="relative overflow-hidden bg-gradient-to-b from-rose-100/80 via-rose-50 to-white px-4 py-20 dark:from-black dark:via-wine-dark/90 dark:to-rose-950/80"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(251,113,133,0.35),_transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.h2
          className="mb-3 font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-rose-50"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          Valentine Surprise
        </motion.h2>
        <motion.p
          className="mb-8 max-w-xl text-sm text-slate-600 sm:text-base dark:text-rose-100/70"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
        >
          A little secret I’ve tucked away just for today. Promise you&apos;ll
          smile when you open it.
        </motion.p>

        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.04, rotate: -1 }}
          whileTap={{ scale: 0.97, rotate: 0 }}
          className="group inline-flex items-center gap-3 rounded-2xl bg-rose-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-rose-300/70 transition-colors duration-300 hover:bg-rose-600 dark:bg-rose-500 dark:hover:bg-rose-400"
        >
          <span>{surprise.lockedLabel}</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-rose-400/90 shadow-md shadow-rose-300/80 group-hover:bg-rose-300">
            <Gift className="h-5 w-5" />
          </span>
        </motion.button>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="mt-10 w-full max-w-xl rounded-3xl bg-white/85 p-6 shadow-2xl shadow-rose-200/80 backdrop-blur-md dark:bg-black/70 dark:shadow-black/70"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-100/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-rose-500 dark:bg-rose-900/60 dark:text-rose-200">
                <Sparkles className="h-3.5 w-3.5" />
                <span>For your eyes only</span>
              </div>
              <p className="font-display text-xl text-slate-900 dark:text-rose-50">
                {surprise.unlockedMessage}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-rose-100/80">
                {surprise.subtext}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Surprise;

