import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const fullDateTime = dateTime.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const navItems = [
    {
      label: "Home",
      target: "home",
    },
    {
      label: "Work",
      target: "work",
    },
    {
      label: "About",
      target: "about",
    },
    {
      label: "Education",
      target: "education",
    },
    {
      label: "Contact",
      target: "contact",
    },
  ];

  // ========================================
  // Update displayed date
  // ========================================
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // ========================================
  // Smooth Section Navigation
  // ========================================
  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (!element) return;

    const headerHeight =
      document.querySelector("header")?.offsetHeight || 64;

    const elementPosition =
      element.getBoundingClientRect().top;

    const offsetPosition =
      elementPosition + window.scrollY - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--text-color)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* ========================================
              LOGO
          ========================================= */}
          <div className="flex-1 min-w-0 flex items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              aria-label="Binay Sharma UI/UX Designer — Home"
              className="inline-block transition-opacity hover:opacity-80 shrink-0"
            >
              <img
                src={logoSvg}
                alt="Binay Sharma UI/UX Designer logo"
                className="h-7 w-auto sm:h-8 lg:h-8 object-contain block"
                width="120"
                height="32"
              />
            </a>
          </div>

          {/* ========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex flex-none justify-center"
          >
            <ul className="flex items-center gap-4 md:gap-5 lg:gap-7">
              {navItems.map((item) => (
                <li key={item.target}>
                  <a
                    href={`#${item.target}`}
                    onClick={(e) =>
                      handleScroll(e, item.target)
                    }
                    className="relative group text-sm lg:text-[14px] font-medium tracking-wide text-[var(--text-light)] hover:text-[var(--accent-color)] transition-colors whitespace-nowrap"
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className="absolute left-0 -bottom-1 h-px w-0 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ========================================
              DATE + MOBILE MENU
          ========================================= */}
          <div className="flex flex-1 justify-end items-center gap-2">

            <time
              dateTime={dateTime.toISOString().split("T")[0]}
              className="hidden md:block text-xs text-[var(--text-light)] tracking-wide whitespace-nowrap"
            >
              {fullDateTime}
            </time>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={
                menuOpen
                  ? "Close primary navigation menu"
                  : "Open primary navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="md:hidden -mr-2 rounded-md p-2 text-[var(--text-light)] hover:text-[var(--accent-color)] transition-colors shrink-0"
            >
              {menuOpen ? (
                <X
                  size={24}
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  size={24}
                  aria-hidden="true"
                />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* ========================================
          MOBILE MENU
      ======================================== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="overflow-hidden md:hidden border-t border-[var(--border-color)] bg-[var(--text-color)]"
          >
            <nav
              aria-label="Mobile primary navigation"
              className="bg-[var(--text-color)] px-5 sm:px-6 py-6 sm:py-7"
            >
              <ul className="space-y-4 sm:space-y-5">
                {navItems.map((item) => (
                  <li key={item.target}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) => {
                        setMenuOpen(false);

                        setTimeout(() => {
                          handleScroll(e, item.target);
                        }, 10);
                      }}
                      className="block text-base sm:text-lg font-medium tracking-wide text-[var(--text-light)] hover:text-[var(--accent-color)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Date */}
              <time
                dateTime={dateTime.toISOString().split("T")[0]}
                className="block mt-6 pt-5 border-t border-[var(--border-color)] text-xs tracking-wide text-[var(--text-light)]"
              >
                {fullDateTime}
              </time>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;