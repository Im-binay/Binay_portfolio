import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skills';
import Education from './components/EduExp';
import Project from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false     
    });
  }, []);

  return (

    <div className="bg-[#e5e5e5] text-black transition-colors duration-300">

      <Header />
      <Hero />
      <About />
      <Skill />
      <Education />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
