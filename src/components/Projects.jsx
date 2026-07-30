import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import kaarighar from "../assets/images/UIUX.png";
import courier from "../assets/images/Courier-Tracking.jpg";
import rrr from "../assets/images/rrr.jpg";

const projects = [
  {
    id: 1,
    title: "Kaarighar (Skill Hiring App)",
    description:
      "Connecting users with trusted local professionals through a simple, intuitive, and mobile-first digital experience.",
    tools: "Figma • FigJam • Photoshop",
    category: "Mobile App",
    image: kaarighar,
    caseStudy: "/UseCaseKaarighar.pdf",
  },
  {
    id: 2,
    title: "BeeTrio (Courier Tracking System)",
    description:
      "Web-based system to track and manage courier deliveries efficiently.",
    tools: "Figma",
    category: "Website",
    image: courier,
    caseStudy: "/BeeTrio.pdf",
  },
  {
    id: 3,
    title: "Royal Rhino Rider (Redesign)",
    description:"A modern redesign website for showcasing rides, events, and the rider community.",
    tools: "Figma • Wireframe",
    category: "Website",
    image: rrr,
    caseStudy: "/RRR_UseCase.pdf",
  },
  // {
  //   id: 4,
  //   title: "College Website Practice Project",
  //   description:
  //     "A practice project showcasing a clean, modern, and responsive college website design.",
  //   tools: "Figma",
  //   category: "Website",
  //   image: courier,
  //   caseStudy: "#",
  // },
];

// ================= Project Card =================
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
        delay: index * 0.15,
      }}
        className="bg-[#F7F7F5] rounded-[18px] md:rounded-[24px] lg:rounded-[28px] border border-neutral-300/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between h-full max-w-[310px] md:max-w-none mx-auto w-full"  
      >
      <div>
        {/* ================= Image Wrapper ================= */}
        <div className="p-2 md:p-3.5 lg:p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] md:aspect-[16/9] object-cover rounded-xl md:rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* ================= Content Details ================= */}
        <div className="px-3 md:px-5 lg:px-6 pb-2">
          {/* Tools + Category */}
          <div className="flex justify-between items-center gap-3 mb-3 md:mb-4">
            <p className="text-[9px] md:text-xs text-neutral-500 leading-normal max-w-[65%] truncate md:whitespace-normal">
              <span className="font-semibold text-black">Tools: </span>
              {project.tools}
            </p>

            <span className="bg-[var(--accent-color)/10] text-[var(--accent-color)] rounded-full px-2 md:px-2.5 py-1 text-[8px] md:text-[10px] font-medium tracking-wide whitespace-nowrap">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-base md:text-xl lg:text-2xl font-bold tracking-[-0.02em] leading-[1.1] text-neutral-900 line-clamp-1 md:line-clamp-none">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="mt-2 md:mt-3 lg:mt-4 text-[11px] md:text-sm lg:text-[15px] leading-relaxed text-neutral-600 line-clamp-2 md:line-clamp-3 lg:line-clamp-none">
            {project.description}
          </p>
        </div>
      </div>

      {/* ================= Bottom Action ================= */}
      <div className="px-3 md:px-5 lg:px-6 pb-3.5 md:pb-5 lg:pb-6 pt-1">
        <div className="flex justify-end mt-auto">
          <a
            href={project.caseStudy}
            className="group relative inline-flex items-center justify-center gap-1 overflow-hidden rounded-full bg-[var(--accent-color)] px-4 py-1.5 md:px-5 md:py-2 lg:px-6 text-[10px] md:text-xs lg:text-sm font-medium text-white transition-all duration-500 hover:-translate-y-0.5 whitespace-nowrap"
          >
            {/* Shine Animation */}
            <span className="absolute left-[-150%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-[1200ms] ease-out group-hover:left-[150%]"></span>

            {/* Button Text */}
            <span className="relative z-10">Use Case</span>

            {/* Arrow */}
            <ArrowRight
              size={10}
              className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 md:w-3.5 md:h-3.5"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ================= Projects Section =================
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Reference for the 4th project
  const fourthProjectRef = useRef(null);

  // ================= View All Handler =================
  const handleViewAll = () => {
    setShowAll(true);

    // Wait for the 4th card to render before scrolling
    setTimeout(() => {
      fourthProjectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  // Show only 3 projects initially
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // ================= Header Animation =================
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  return (
    <section
      id="work"
      className="min-h-fit lg:min-h-screen bg-[#c8c9c4] py-6 md:py-16 lg:py-5 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12">

        {/* ================= Header ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          variants={headerVariants}
          className="flex flex-row items-center justify-between gap-4 mb-6 md:mb-10 w-full flex-nowrap"
        >
          {/* Header Title + Divider */}
          <div className="flex items-center flex-1">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap  tracking-[-0.02em] leading-none">
              &lt; Selected Work /&gt;
            </h2>

            {/* Divider */}
            <div className="hidden sm:block ml-6 md:ml-8 flex-1 h-px overflow-hidden bg-neutral-300">
              <div className="h-px w-full bg-[var(--accent-color)] animate-divider"></div>
            </div>
          </div>

          {/* ================= View All Work Button ================= */}
          <button
            onClick={handleViewAll}
            disabled={showAll}
            className={`group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--accent-color)] whitespace-nowrap shrink-0 ml-4 ${
                showAll
                ? "opacity-50 cursor-default"
                : "cursor-pointer"
            }`}
          >
            <span className="relative">
              {showAll ? "All Work" : "View All Work"}

              <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-[var(--accent-color)] transition-all duration-300 group-hover:w-full"></span>
            </span>

            <ArrowRight
              size={14}
              className={`transition-transform duration-300 ${
                !showAll
                  ? "group-hover:translate-x-1"
                  : ""
              } sm:w-4 sm:h-4`}
            />
          </button>
        </motion.div>

        {/* ================= Cards Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10 xl:gap-10 items-stretch">
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