import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/EduExp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // ========================================
  // Initialize AOS
  // ========================================
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  // ========================================
  // Prevent scrolling while loader is active
  // ========================================
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      {/* Skip navigation for keyboard and accessibility users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-[var(--accent-color)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      {/* ========================================
          INTRO LOADER
      ======================================== */}
      {isLoading && (
        <IntroLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* ========================================
          MAIN WEBSITE
      ======================================== */}
      {!isLoading && (
        <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">

          {/* Navigation */}
          <Header />

          {/* Main Content */}
          <main
            id="main-content"
            className="relative w-full overflow-x-hidden flex-1"
          >
            {/* Home / Hero */}
            <Hero />

            {/* Projects / Work */}
            <Projects />

            {/* About */}
            <About />

            {/* Education & Experience */}
            <Education />

            {/* Contact */}
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;