import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/images/logo.svg"; // Adjust this relative path depending on where you save your SVG file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const fullDateTime = dateTime.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const navItems = ["Home", "Work", "About", "Education", "Contact"];

  // Bulletproof pixel-based scrolling function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      // 1. Grab the actual header height dynamically to offset the sticky nav overlap
      const headerHeight = document.querySelector("header")?.offsetHeight || 64;
      
      // 2. Compute absolute page metrics
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      // 3. Command the viewport to glide seamlessly to the destination coordinate
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo Container */}
          <div className="flex-1 min-w-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="inline-block transition-opacity hover:opacity-80 shrink-0"
            >
              {/* FIXED: Replaced text logo with an optimized image instance pointing to your asset path */}
              <img 
                src={logoSvg} 
                alt="BS Studio Logo" 
                className="h-7 w-auto sm:h-8 lg:h-8 object-contain block " 
              />
            </a>
          </div>

          {/* Tablet & Desktop Navigation */}
          <nav className="hidden md:flex flex-none justify-center">
            <ul className="flex items-center gap-4 md:gap-5 lg:gap-7">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleScroll(e, item.toLowerCase())}
                    className="relative group text-sm lg:text-[14px] font-medium tracking-wide text-neutral-400 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full"></span>                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Panel Layout Indicators */}
          <div className="flex flex-1 justify-end items-center gap-2">
            <p className="hidden md:block text-xs text-neutral-500 tracking-wide whitespace-nowrap">  
              {fullDateTime}
            </p>

            {/* Mobile toggle button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden -mr-2 rounded-md p-2 text-neutral-300 hover:text-[var(--accent-color)] transition-colors shrink-0"
              >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= Mobile Menu Dropdown Drawer ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden md:hidden border-t border-white/10 bg-black"
          >
            <nav className="bg-black px-5 sm:px-6 py-6 sm:py-7">
              <ul className="space-y-4 sm:space-y-5">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => {
                        // 1. Close menu drawer immediately so page layout shrinks back to normal
                        setMenuOpen(false);
                        
                        // 2. Fire the absolute scroll math right after the click event processes
                        setTimeout(() => {
                          handleScroll(e, item.toLowerCase());
                        }, 10);
                      }}
                      className="block text-base sm:text-lg font-medium tracking-wide text-neutral-400 hover:text-[var(--accent-color)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Footer Date View */}
              <p className="mt-6 pt-5 border-t border-white/10 text-xs tracking-wide text-neutral-500">                
                {fullDateTime}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;