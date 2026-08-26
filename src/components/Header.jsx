import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "../assets/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState("home");

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
  // Detect Active Section
  // ========================================
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.target))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ========================================
  // Smooth Section Navigation
  // ========================================
  const handleScroll = (e, targetId) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (!element) return;

    setActiveSection(targetId);
    setMenuOpen(false);

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
      className="
        sticky top-0 z-50
        border-b border-[var(--border-color)]
        bg-[var(--bg-color)]
      "
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

        <div className="flex h-14 items-center justify-between sm:h-16">

          {/* ========================================
              LOGO
          ========================================= */}
          <div className="flex min-w-0 flex-1 items-center">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              aria-label="Binay Sharma UI/UX Designer — Home"
              className="
                inline-block shrink-0
                transition-opacity duration-200
                hover:opacity-80
              "
            >
              <img
                src={logoSvg}
                alt="Binay Sharma UI/UX Designer logo"
                className="
                  block h-7 w-auto
                  object-contain
                  sm:h-8 lg:h-8
                "
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
            className="hidden flex-none justify-center md:flex"
          >
            <ul className="flex items-center gap-4 md:gap-5 lg:gap-7">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.target;

                return (
                  <li key={item.target}>
                    <a
                      href={`#${item.target}`}
                      onClick={(e) =>
                        handleScroll(e, item.target)
                      }
                      aria-current={
                        isActive ? "page" : undefined
                      }
                      className={`
                        group relative
                        whitespace-nowrap
                        text-sm font-medium
                        tracking-wide
                        transition-colors duration-200
                        lg:text-[14px]

                        ${
                          isActive
                            ? "text-[var(--accent-color)]"
                            : "text-[var(--text-color)] hover:text-[var(--accent-color)]"
                        }
                      `}
                    >
                      {item.label}

                      <span
                        aria-hidden="true"
                        className={`
                          absolute left-0 -bottom-1
                          h-px
                          bg-[var(--accent-color)]
                          transition-all duration-300

                          ${
                            isActive
                              ? "w-full"
                              : "w-0 group-hover:w-full"
                          }
                        `}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ========================================
              DATE + MOBILE MENU
          ======================================== */}
          <div className="flex flex-1 items-center justify-end gap-2">

            {/* Desktop Date */}
            <time
              dateTime={dateTime.toISOString().split("T")[0]}
              className="
                hidden whitespace-nowrap
                text-xs tracking-wide
                text-[var(--text-muted)]
                md:block
              "
            >
              {fullDateTime}
            </time>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
              aria-label={
                menuOpen
                  ? "Close primary navigation menu"
                  : "Open primary navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="
                -mr-2 shrink-0 rounded-md p-2
                text-[var(--text-color)]
                transition-colors duration-200
                hover:text-[var(--accent-color)]
                md:hidden
              "
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
            className="
              overflow-hidden
              border-t border-[var(--border-color)]
              bg-[var(--bg-color)]
              md:hidden
            "
          >
            <nav
              aria-label="Mobile primary navigation"
              className="
                px-5 py-6
                sm:px-6 sm:py-7
              "
            >
              <ul className="space-y-4 sm:space-y-5">
                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.target;

                  return (
                    <li key={item.target}>
                      <a
                        href={`#${item.target}`}
                        onClick={(e) =>
                          handleScroll(e, item.target)
                        }
                        aria-current={
                          isActive ? "page" : undefined
                        }
                        className={`
                          block
                          text-base font-medium
                          tracking-wide
                          transition-colors duration-200
                          sm:text-lg

                          ${
                            isActive
                              ? "text-[var(--accent-color)]"
                              : "text-[var(--text-color)] hover:text-[var(--accent-color)]"
                          }
                        `}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Date */}
              <time
                dateTime={dateTime.toISOString().split("T")[0]}
                className="
                  mt-6 block
                  border-t border-[var(--border-color)]
                  pt-5
                  text-xs tracking-wide
                  text-[var(--text-muted)]
                "
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