import { useState } from "react";
import { Helmet } from "react-helmet-async";
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

function App() {
  const [unlocked, setUnlocked] = useState(false);

  const handleOpenLetter = () => {
    const letterSection = document.getElementById("letter");
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: "smooth" });
    }
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

        <Hero onOpenLetter={handleOpenLetter} />
        <LoveLetter />
        <Timeline />
        <Reasons />
        <Gallery />
        <SpecialMessage />
        <Surprise />
        <Footer />
      </div>
    </>
  );
}

export default App;

