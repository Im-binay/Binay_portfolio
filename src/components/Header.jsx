import { useState, useEffect } from 'react';


export default function Header() {
  // Default to light mode if nothing saved in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? saved === 'true' : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Skills','Education', 'Project', 'Contact'];

  return (
    <header className="fixed top-0 left-0 w-screen z-50 bg-[#1a1c20]">
      <nav className="flex items-center justify-between h-[80px] px-4 md:px-10 shadow-md flex-wrap relative z-50">
        
        {/* Logo */}
        <a href="#" className="text-3xl md:text-5xl">
          <h1 className="mt-3 text-white">Binay</h1>
        </a>

        {/* Hamburger & Dark Mode (Mobile) */}
        <div className="md:hidden z-50 flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i className="fas fa-bars fa-xl"></i>
          </button>
          <button
            className="w-5 h-5 hover:text-blue-600 text-white"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            <i
              className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} fa-xl
                transition-transform duration-500 ease-in-out 
                ${darkMode ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </div>

        {/* Menu */}
        <div
          className={`transition-all duration-300 ease-in-out
            ${menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
            md:max-h-full md:opacity-100 md:flex md:items-center md:justify-around
            absolute md:static top-[60px] left-0 w-full md:w-auto
            text-white font-bold text-lg
            bg-black/90 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-0 dark:bg-gray-900/80 backdrop-blur-sm
            overflow-hidden z-40 rounded-b
          `}
        >
          <ul className="flex flex-col md:flex-row items-center justify-around md:gap-4 lg:gap-8 xl:gap-10 py-4 md:py-0">
            {navLinks.map((text, i) => (
              <li
                key={i}
                className="hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors duration-300"
              >
                <a
                  href={`#${text.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-600 dark:after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {text}
                </a>
              </li>
            ))}

            {/* Hire Me */}
            <li className="bg-[#141d97] px-3 cursor-pointer py-1 mt-1 rounded text-white ml-0 md:mb-0 hover:bg-blue-500">
              <a
                href="https://wa.me/9779869681196?text=Hi%20Binay,%20I%20am%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>

        {/* Dark Mode (Desktop) */}
        <div className="hidden md:block text-white">
          <button
            className="w-10 h-10 cursor-pointer hover:text-blue-500"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            <i
              className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} fa-base
                transition-transform duration-500 ease-in-out 
                ${darkMode ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
