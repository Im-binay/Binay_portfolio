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

// ========================================
// Skills Data
// ========================================

const designSkills = [
  {
    id: 1,
    name: "Figma",
    icon: <FaFigma className="text-[#F24E1E]" />,
  },
  {
    id: 2,
    name: "Framer",
    icon: <SiFramer />,
  },
  {
    id: 3,
    name: "Prototype",
    icon: <BsBezier2 />,
  },
  {
    id: 4,
    name: "Wireframe",
    icon: <MdOutlineSpaceDashboard />,
  },
];

const developmentSkills = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-[#E34F26]" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-[#1572B6]" />,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    id: 4,
    name: "JavaScript",
    icon: <FaJs className="text-[#F7DF1E]" />,
  },
  {
    id: 5,
    name: "GitHub",
    icon: <FaGithub />,
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1, 
        rootMargin: "-20px 0px" 
      }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      ref={domRef}
      /* FIXED: Replaced min-h-screen with min-h-fit lg:min-h-screen, and updated the vertical padding */
      className="min-h-fit lg:min-h-screen bg-[#c8c9c4] scroll-mt-14 md:scroll-mt-16 py-12 md:py-16 lg:py-0 flex items-center overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16">

        {/* ================= Heading ================= */}
        <div 
          className={`flex flex-row items-center justify-between gap-3 mb-8 md:mb-10 w-full flex-nowrap transition-all duration-700 ease-out transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold whitespace-nowrap tracking-[-0.02em] leading-none">
              &lt; About me /&gt;
            </h2>
            <div className="hidden sm:block ml-6 md:ml-8 flex-1 h-px bg-[var(--accent-color)]"></div>
          </div>
        </div>

        {/* ================= Main Content ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 lg:gap-12 items-start">

          {/* ================= Left Column ================= */}
          <div 
            className={`w-full transition-all duration-700 delay-200 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-7 lg:leading-8 text-neutral-800">
              I'm passionate about designing intuitive and user-centered
              digital experiences that balance functionality with clean,
              modern aesthetics. Using <strong>Figma</strong>, I create
              user personas, wireframes and interactive prototypes focused
              on usability and problem solving.
            </p>

            <p className="mt-5 md:mt-5 lg:mt-6 text-sm md:text-[15px] lg:text-base leading-relaxed md:leading-7 lg:leading-8 text-neutral-800">
              Alongside design, I work with
              <strong> HTML</strong>,
              <strong> CSS</strong>,
              <strong> Tailwind CSS</strong>, and
              <strong> JavaScript</strong>, allowing me to collaborate
              effectively with developers while continuously improving my
              frontend development skills.
            </p>


            <a
              href="/BinayCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-7 rounded-full border border-[var(--accent-color)] px-5 py-2.5 text-sm font-medium text-[var(--accent-color)] transition-all duration-300 hover:bg-[var(--accent-color)] hover:text-white"
            >
              View Resume

              <ExternalLink
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
          {/* ================= Center Star Divider ================= */}
          <div 
            className={`hidden md:flex h-full min-h-[220px] lg:min-h-[250px] transition-all duration-700 delay-300 ease-out transform origin-center
              ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
          >
            <div className="flex flex-col items-center h-full">
              <div className="flex-1 w-px bg-neutral-400"></div>
              <div className="my-4 md:my-3 lg:my-5 text-lg lg:text-xl text-[var(--accent-color)] select-none">
                ✦
              </div>
              <div className="flex-1 w-px bg-neutral-400"></div>
            </div>
          </div>

          {/* ================= Right Column / Technology ================= */}
          <div 
            className={`flex flex-col w-full transition-all duration-700 delay-400 ease-out transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-6 lg:mb-8 tracking-[-0.02em] leading-none">
              Technology
            </h3>

            {/* Design Row */}
            <div>
              <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4 underline decoration-[var(--accent-color)] decoration-1 underline-offset-4">
                Design
              </h4>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {designSkills.map((skill) => (
                  <Skill
                    key={skill.id}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>

            {/* Development Row */}
            <div className="mt-6 md:mt-5 lg:mt-8">
              <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4 underline decoration-[var(--accent-color)] decoration-1 underline-offset-4">
                Development
              </h4>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {developmentSkills.map((skill) => (
                  <Skill
                    key={skill.id}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const Skill = ({ icon, name }) => {
  return (
      <div className="flex items-center gap-2 lg:gap-3 rounded-xl sm:rounded-2xl border border-neutral-200 bg-white px-2.5 py-2 md:px-3 md:py-2.5 lg:px-4 lg:py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-color)]">
        <span className="text-lg md:text-xl lg:text-2xl">
        {icon}
      </span>
      <span className="text-[11px] md:text-xs lg:text-[15px] font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default About;