import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import kaarighar from "../assets/images/Kaarighar_mockup.png";
import courier from "../assets/images/BeeTrio.png";
import rrr from "../assets/images/Rrr.webp";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: "Kaarighar – Skill Hiring App",
    description:
      "Kaarighar is a mobile skill-hiring app designed to connect users with trusted local service professionals. The UX focuses on service discovery, provider profiles, booking, and a simple end-to-end hiring experience.",
    tools: "Figma • FigJam • Photoshop",
    category: "Mobile App",
    image: kaarighar,
    imageAlt:
      "Kaarighar mobile skill-hiring app UI/UX design case study by Binay Sharma",
    caseStudy: "/UseCaseKaarighar.pdf",
  },
  {
    id: 2,
    title: "BeeTrio – Courier Tracking System",
    description:"BeeTrio is a courier tracking system designed to help users track deliveries and manage shipment information through a clear, efficient, and easy-to-use web interface.",
    tools: "Figma",
    category: "Website",
    image: courier,
    imageAlt:
      "BeeTrio courier tracking system website UI/UX design by Binay Sharma",
    caseStudy: "/BeeTrio.pdf",
  },
  {
    id: 3,
    title: "Royal Rhino Rider – Website Redesign",
    description:
      "A website redesign for Royal Rhino Rider focused on presenting motorcycle rides, events, and community information through a clearer navigation structure and more engaging user experience.",
    tools: "Figma • Wireframe",
    category: "Website",
    image: rrr,
    imageAlt:
      "Royal Rhino Rider website redesign and UI/UX case study by Binay Sharma",
    caseStudy: "/RRR_UseCase.pdf",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
        delay: index * 0.12,
      }}
      aria-labelledby={`project-title-${project.id}`}
      className="bg-[var(--card-color)] rounded-[18px] md:rounded-[22px] lg:rounded-[24px] border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full max-w-[310px] md:max-w-none mx-auto w-full"
    >
      <div>
        {/* =========================
            PROJECT IMAGE
        ========================== */}

        <div className="p-2 md:p-3 lg:p-3.5">
          <img
            src={project.image}
            alt={project.imageAlt}
            title={`${project.title} — UI/UX Design by Binay Sharma`}
            width="800"
            height="500"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="w-full aspect-[16/9] object-contain rounded-xl md:rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* =========================
            PROJECT INFORMATION
        ========================== */}

        <div className="px-3 md:px-5 lg:px-5 pb-2">
          <div className="flex justify-between items-center gap-3 mb-2.5 md:mb-3">
            <p className="text-[9px] md:text-xs text-[var(--text-muted)] leading-normal max-w-[65%] truncate md:whitespace-normal">
              <span className="font-semibold text-[var(--text-color)]">
                Tools:{" "}
              </span>

              {project.tools}
            </p>

            <span
              aria-label={`Project category: ${project.category}`}
              className="bg-[var(--accent-light)] text-[var(--accent-color)] rounded-full px-2 md:px-2.5 py-1 text-[8px] md:text-[10px] font-medium tracking-wide whitespace-nowrap"
            >
              {project.category}
            </span>
          </div>

          {/* Project title */}

          <h3
            id={`project-title-${project.id}`}
            className="text-base md:text-xl lg:text-2xl font-bold tracking-[-0.02em] leading-[1.1] text-[var(--text-color)] line-clamp-1 md:line-clamp-none"
          >
            {project.title}
          </h3>

          {/* Project description */}

          <p className="mt-2 md:mt-2.5 lg:mt-3 text-[11px] md:text-sm lg:text-[15px] leading-relaxed text-[var(--text-muted)] line-clamp-2 md:line-clamp-3 lg:line-clamp-3">
            {project.description}
          </p>
        </div>
      </div>

      {/* =========================
          CASE STUDY LINK
      ========================== */}

      <div className="px-3 md:px-5 lg:px-5 pb-3 md:pb-4 lg:pb-4 pt-1">
        <div className="flex justify-end mt-auto">
          <a
            href={project.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read the ${project.title} UI/UX design case study`}
            className="group relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-full bg-[var(--accent-color)] px-4 py-1.5 md:px-5 md:py-2 lg:px-5 text-[10px] md:text-xs lg:text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span
              aria-hidden="true"
              className="absolute left-[-150%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-[1200ms] ease-out group-hover:left-[150%]"
            />

            <span className="relative z-10">
              View Case Study
            </span>

            <ArrowRight
              size={10}
              aria-hidden="true"
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 md:w-3.5 md:h-3.5"
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const fourthProjectRef = useRef(null);

  const handleViewAll = () => {
    setShowAll(true);

    setTimeout(() => {
      fourthProjectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="min-h-fit lg:min-h-screen bg-[var(--bg-color)] pt-9 pb-6 md:pt-20 md:pb-10 lg:pt-8 lg:pb-6 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          variants={headerVariants}
          className="flex flex-row items-center justify-between gap-4 mb-4 md:mb-6 w-full flex-nowrap"
        >
          <div className="flex items-center flex-1">
            <h2
              id="work-heading"
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap tracking-[-0.02em] leading-none text-[var(--text-color)]"
            >
              Selected Work
            </h2>

            <div className="hidden sm:block ml-6 md:ml-8 flex-1 h-px overflow-hidden bg-[var(--border-color)]">
              <div className="h-px w-full bg-[var(--accent-color)] animate-divider" />
            </div>
          </div>

          <button
            type="button"
            onClick={handleViewAll}
            disabled={showAll}
            aria-label={
              showAll
                ? "All UI/UX design projects are displayed"
                : "View all UI/UX design projects"
            }
            className={`group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--accent-color)] whitespace-nowrap shrink-0 ml-4 ${
              showAll
                ? "opacity-50 cursor-default"
                : "cursor-pointer"
            }`}
          >
            <span className="relative">
              {showAll ? "All Work" : "View All Work"}

              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full" />
            </span>

            <ArrowRight
              size={14}
              aria-hidden="true"
              className={`transition-transform duration-300 ${
                !showAll
                  ? "group-hover:translate-x-1"
                  : ""
              } sm:w-4 sm:h-4`}
            />
          </button>
        </motion.header>

        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <div
          aria-label="UI/UX design projects by Binay Sharma"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 xl:gap-8 items-stretch"
        >
          {visibleProjects.map((project, index) => {
            const isFourthProject = project.id === 4;

            return (
              <div
                key={project.id}
                ref={
                  isFourthProject
                    ? fourthProjectRef
                    : null
                }
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;