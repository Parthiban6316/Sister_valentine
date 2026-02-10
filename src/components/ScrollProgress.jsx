import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(value);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40">
      <motion.div
        className="h-0.5 bg-gradient-to-r from-rose-500 via-rose-300 to-amber-300 shadow-lg shadow-rose-300/50 dark:from-rose-300 dark:via-rose-200 dark:to-amber-200"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </div>
  );
}

export default ScrollProgress;

