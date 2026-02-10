import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { motion } from "framer-motion";
import { Music2, VolumeX } from "lucide-react";

// Simple royalty-free like placeholder URL (user should replace with own hosted file)
const FALLBACK_TRACK_URL =
  "https://cdn.pixabay.com/download/audio/2022/02/23/audio_1a3f2f31f1.mp3?filename=romantic-soft-piano-21977.mp3";

export function MusicToggle({ src = FALLBACK_TRACK_URL }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    return () => {
      soundRef.current?.unload();
    };
  }, []);

  const handleToggle = () => {
    setHasInteracted(true);
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: [src],
        html5: true,
        volume: 0.5,
        loop: true,
      });
    }

    if (!isPlaying) {
      soundRef.current.play();
      setIsPlaying(true);
    } else {
      soundRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.button
      onClick={handleToggle}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.96, y: 0 }}
      className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1.5 text-xs font-medium text-slate-800 shadow-md shadow-rose-200/70 backdrop-blur-md hover:bg-white dark:bg-black/70 dark:text-rose-50 dark:hover:bg-black/60"
    >
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-900/70 dark:text-rose-200">
        {isPlaying ? (
          <Music2 className="h-3.5 w-3.5" />
        ) : (
          <VolumeX className="h-3.5 w-3.5" />
        )}
      </span>
      <span>{isPlaying ? "Playing our song" : "Soft music"}</span>
      {!hasInteracted && (
        <span className="text-[10px] text-slate-500 dark:text-rose-200/70">
          tap to start
        </span>
      )}
    </motion.button>
  );
}

export default MusicToggle;

