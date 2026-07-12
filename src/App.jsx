import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Projects';
import About from './components/About';
import Education from './components/EduExp';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true
    });
  }, []);

  // Structural body lock to prevent layout scrolling during initialization
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return (
    <>
      {/* 1. STYLISH SPLIT PANEL LOADER */}
      {isLoading && <IntroLoader onComplete={() => setIsLoading(false)} />}

      {/* 2. MAIN APP CONTAINER */}
      {!isLoading && (
        <div className="bg-[#e5e5e5] text-black transition-colors duration-300 min-h-screen flex flex-col">
          <Header />
          
          <main className="relative w-full overflow-x-hidden flex flex-col flex-1">
            <div id="home">
              <Hero />
            </div>
            
            <div id="work">
              <Project />
            </div>
            
            <div id="about">
              <About />
            </div>

            <div id="education">
              <Education />
            </div>
            
            <div id="contact">
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;