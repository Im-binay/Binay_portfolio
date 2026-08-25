import { useEffect, useRef, useState } from "react";
import {
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { SiFramer, SiTailwindcss } from "react-icons/si";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsBezier2 } from "react-icons/bs";

const designSkills = [
  {
    id: 1,
    name: "Figma",
    icon: <FaFigma className="text-[#F24E1E]" aria-hidden="true" />,
  },
  {
    id: 2,
    name: "Framer",
    icon: <SiFramer aria-hidden="true" />,
  },
  {
    id: 3,
    name: "Prototyping",
    icon: <BsBezier2 aria-hidden="true" />,
  },
  {
    id: 4,
    name: "Wireframing",
    icon: <MdOutlineSpaceDashboard aria-hidden="true" />,
  },
];

const developmentSkills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-[#E34F26]" aria-hidden="true" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-[#1572B6]" aria-hidden="true" />,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" aria-hidden="true" />,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E]" aria-hidden="true" />,
  },
  {
    id: 5,
    name: "GitHub",
    icon: <FaGithub aria-hidden="true" />,
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-20px 0px",
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={domRef}
      aria-labelledby="about-heading"
      className="min-h-fit lg:min-h-screen bg-[var(--bg-color)] scroll-mt-14 md:scroll-mt-16 pt-9 pb-4 md:pt-20 md:pb-10 lg:pt-8 lg:pb-3 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <header
          className={`flex flex-row items-center justify-between gap-4 mb-6 md:mb-6 lg:mb-6 w-full flex-nowrap transition-all duration-700 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center flex-1">
            <h2
              id="about-heading"
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap tracking-[-0.02em] leading-none text-[var(--text-color)]"
            >
              About Me
            </h2>

            <div
              aria-hidden="true"
              className="hidden sm:block ml-6 md:ml-8 flex-1 h-px overflow-hidden bg-[var(--border-color)]"
            >
              <div className="h-px w-full bg-[var(--accent-color)]" />
            </div>
          </div>
        </header>

        {/* =========================
            MAIN ABOUT CONTENT
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 lg:gap-12 items-start">

          {/* =========================
              ABOUT INTRODUCTION
          ========================== */}
          <article
            className={`w-full transition-all duration-700 delay-200 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-7 lg:leading-8 text-[var(--text-muted)]">
              I'm <strong className="text-[var(--text-color)]">Binay Sharma</strong>,
              a UI/UX Designer from Nepal focused on creating intuitive,
              user-centered digital experiences for web and mobile products.
              I specialize in UI design, UX design, interaction design,
              wireframing, prototyping, user flows, and usability-focused
              design using{" "}
              <strong className="text-[var(--text-color)]">Figma</strong>.
            </p>

            <p className="mt-5 md:mt-5 lg:mt-6 text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-7 lg:leading-8 text-[var(--text-muted)]">
              Alongside UI/UX design, I have experience with{" "}
              <strong className="text-[var(--text-color)]">HTML</strong>,{" "}
              <strong className="text-[var(--text-color)]">CSS</strong>,{" "}
              <strong className="text-[var(--text-color)]">
                Tailwind CSS
              </strong>
              , and{" "}
              <strong className="text-[var(--text-color)]">
                JavaScript
              </strong>
              . This frontend knowledge helps me collaborate effectively with
              developers and understand how design decisions translate into
              accessible, responsive digital products.
            </p>

            {/* Resume */}
            <a
              href="/BinayCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Binay Sharma's UI/UX design resume"
              className="group inline-flex items-center gap-2 mt-7 rounded-full border border-[var(--accent-color)] px-5 py-2.5 text-sm font-medium text-[var(--accent-color)] transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white"
            >
              View My Resume

              <ExternalLink
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </article>

          {/* =========================
              DECORATIVE DIVIDER
          ========================== */}
          <div
            aria-hidden="true"
            className={`hidden md:flex h-full min-h-[220px] lg:min-h-[250px] transition-all duration-700 delay-300 ease-out transform origin-center ${
              isVisible
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-0"
            }`}
          >
            <div className="flex flex-col items-center h-full">
              <div className="flex-1 w-px bg-[var(--border-color)]" />

              <div className="my-4 md:my-3 lg:my-5 text-lg lg:text-xl text-[var(--accent-color)] select-none">
                ✦
              </div>

              <div className="flex-1 w-px bg-[var(--border-color)]" />
            </div>
          </div>

          {/* =========================
              SKILLS
          ========================== */}
          <aside
            aria-labelledby="skills-heading"
            className={`flex flex-col w-full transition-all duration-700 delay-400 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3
              id="skills-heading"
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-6 lg:mb-8 tracking-[-0.02em] leading-none text-[var(--text-color)]"
            >
              UI/UX Design Skills & Tools
            </h3>

            {/* Design Skills */}
            <div>
              <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4 underline decoration-[var(--accent-color)] decoration-1 underline-offset-4 text-[var(--text-color)]">
                Design
              </h4>

              <ul
                aria-label="UI/UX design skills"
                className="flex flex-wrap gap-2 lg:gap-3 list-none p-0 m-0"
              >
                {designSkills.map((skill) => (
                  <li key={skill.id}>
                    <Skill
                      icon={skill.icon}
                      name={skill.name}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Development Skills */}
            <div className="mt-6 md:mt-5 lg:mt-8">
              <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4 underline decoration-[var(--accent-color)] decoration-1 underline-offset-4 text-[var(--text-color)]">
                Development
              </h4>

              <ul
                aria-label="Frontend development skills"
                className="flex flex-wrap gap-2 lg:gap-3 list-none p-0 m-0"
              >
                {developmentSkills.map((skill) => (
                  <li key={skill.id}>
                    <Skill
                      icon={skill.icon}
                      name={skill.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => {
  return (
    <div className="flex items-center gap-2 lg:gap-3 rounded-xl sm:rounded-2xl border border-[var(--border-color)] bg-[var(--card-color)] px-2.5 py-2 md:px-3 md:py-2.5 lg:px-4 lg:py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-color)]">
      <span
        aria-hidden="true"
        className="text-lg md:text-xl lg:text-2xl text-[var(--text-color)]"
      >
        {icon}
      </span>

      <span className="text-[11px] md:text-xs lg:text-[15px] font-medium whitespace-nowrap text-[var(--text-color)]">
        {name}
      </span>
    </div>
  );
};

export default About;