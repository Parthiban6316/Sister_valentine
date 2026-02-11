import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import Timeline from "./components/Timeline";
import Reasons from "./components/Reasons";
import Gallery from "./components/Gallery";
import SpecialMessage from "./components/SpecialMessage";
import Surprise from "./components/Surprise";
import MusicToggle from "./components/MusicToggle";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import DarkModeToggle from "./components/DarkModeToggle";
import PasswordGate from "./components/PasswordGate";
import { siteMeta } from "./data/content";

const steps = ["hero", "letter", "journey", "reasons", "gallery", "special", "surprise"];

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [step, setStep] = useState("hero");

  const goTo = (id) => {
    setStep(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    const idx = steps.indexOf(step);
    if (idx === -1 || idx === steps.length - 1) return;
    goTo(steps[idx + 1]);
  };

  const handleOpenLetter = () => {
    goTo("letter");
  };

  return (
    <>
      {/* SEO & Meta */}
      <Helmet>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:type" content="website" />
      </Helmet>

      <ScrollProgress />

      {!unlocked && <PasswordGate onUnlock={() => setUnlocked(true)} />}

      <div className="relative min-h-screen text-slate-900 dark:text-rose-50">
        {/* Top right controls */}
        <div className="pointer-events-none fixed right-4 top-4 z-30 flex flex-col gap-2 sm:right-6 sm:top-6 sm:flex-row">
          <div className="pointer-events-auto">
            <DarkModeToggle />
          </div>
          <div className="pointer-events-auto">
            <MusicToggle />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Hero onOpenLetter={handleOpenLetter} />
            </motion.div>
          )}

          {step === "letter" && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LoveLetter onNext={goNext} />
            </motion.div>
          )}

          {step === "journey" && (
            <motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Timeline onNext={goNext} />
            </motion.div>
          )}

          {step === "reasons" && (
            <motion.div
              key="reasons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Reasons onNext={goNext} />
            </motion.div>
          )}

          {step === "gallery" && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Gallery onNext={goNext} />
            </motion.div>
          )}

          {step === "special" && (
            <motion.div
              key="special"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SpecialMessage onNext={goNext} />
            </motion.div>
          )}

          {step === "surprise" && (
            <motion.div
              key="surprise"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Surprise />
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}

export default App;

