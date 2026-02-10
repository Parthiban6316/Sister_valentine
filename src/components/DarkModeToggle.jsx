import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";

const STORAGE_KEY = "valentine-theme";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored ? stored === "dark" : prefersDark;

    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
    document.body.classList.add("custom-heart-cursor");
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.95, y: 0 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md shadow-rose-200/70 backdrop-blur-md hover:bg-white dark:bg-black/70 dark:text-rose-50"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-500 shadow-sm dark:bg-rose-900/70 dark:text-rose-200">
        {isDark ? (
          <Moon className="h-3.5 w-3.5" />
        ) : (
          <SunMedium className="h-3.5 w-3.5" />
        )}
      </span>
      <span>{isDark ? "Night glow" : "Soft daylight"}</span>
    </motion.button>
  );
}

export default DarkModeToggle;

