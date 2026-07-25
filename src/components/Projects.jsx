import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import kaarighar from "../assets/images/UIUX.png";
import courier from "../assets/images/UIUX.png";

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
    title: "Courier Tracking System",
    description:
      "Web-based system to track and manage courier deliveries efficiently.",
    tools: "Figma",
    category: "Website",
    image: courier,
    caseStudy: "#",
  },
  {
    id: 3,
    title: "Royal Rhino Rider (Redesign)",
    description:
      "A modern UI design with clean layouts, consistent branding, and user-focused experiences",
    tools: "Figma • Wireframe",
    category: "Website",
    image: courier,
    caseStudy: "#",
  },
  {
    id: 4,
    title: "College Website Practice Project",
    description:
      "A practice project showcasing a clean, modern, and responsive college website design.",
    tools: "Figma",
    category: "Website",
    image: courier,
    caseStudy: "#",
  },
];

// ========================================
// Reusable Animated Card Component
// ========================================
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
      className="bg-[#F7F7F5] rounded-[18px] md:rounded-[24px] lg:rounded-[28px] border border-neutral-200 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-md md:hover:shadow-xl flex flex-col justify-between max-w-[310px] md:max-w-none mx-auto w-full h-full"
    >
      {/* Main Content */}
      <div>
        {/* Image Wrapper */}
        <div className="p-2 md:p-3.5 lg:p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/10] md:aspect-[16/9] object-cover rounded-xl md:rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Content Details */}
        <div className="px-3 md:px-5 lg:px-6 pb-2">
          <div className="flex justify-between items-center gap-2 mb-1.5 md:mb-3">
            <p className="text-[9px] md:text-xs text-neutral-500 leading-relaxed max-w-[65%] truncate md:whitespace-normal">
              <span className="font-semibold text-black">Tools: </span>
              {project.tools}
            </p>

            <span className="bg-neutral-200 rounded-full px-1.5 py-0.5 text-[8px] md:text-[10px] font-medium tracking-wide whitespace-nowrap">
              {project.category}
            </span>
          </div>

          <h3 className="text-base md:text-xl lg:text-2xl font-bold tracking-tight leading-tight text-neutral-900 line-clamp-1 md:line-clamp-none">
            {project.title}
          </h3>

          <p className="mt-1 md:mt-2 lg:mt-3 text-[11px] md:text-sm lg:text-[15px] leading-normal md:leading-relaxed lg:leading-7 text-neutral-600 line-clamp-2 md:line-clamp-3 lg:line-clamp-none">
            {project.description}
          </p>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="px-3 md:px-5 lg:px-6 pb-3.5 md:pb-5 lg:pb-6 pt-1">
        <a
          href={project.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex w-full items-center justify-center text-center gap-1.5 overflow-hidden rounded-full bg-black px-4 py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-3 text-[11px] md:text-sm lg:text-[15px] font-medium text-white transition-all duration-500 hover:shadow-xl"
        >
          {/* Hover Shine */}
          <span className="absolute left-[-150%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-[1200ms] ease-out group-hover:left-[150%]"></span>

          {/* Button Text */}
          <span className="relative z-10">
            View Case Study
          </span>

          {/* Arrow */}
          <ArrowRight
            size={14}
            className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 md:w-4 md:h-4"
          />
        </a>
      </div>
    </motion.div>
  );
};

// ========================================
// Projects Section
// ========================================
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Reference for the 4th project
  const fourthProjectRef = useRef(null);

  // Header Animation
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

  // View All Work
  const handleViewAll = () => {
    setShowAll(true);

    // Smooth scroll to 4th project
    setTimeout(() => {
      fourthProjectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  };

  // Show Less
  const handleShowLess = () => {
    setShowAll(false);
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
          viewport={{ once: false, amount: 0.2 }}
          variants={headerVariants}
          className="flex flex-row items-center justify-between gap-3 mb-3 md:mb-6 w-full flex-nowrap"
        >
          <div className="flex items-center flex-1">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap tracking-tight">
              &lt; Selected Work /&gt;
            </h2>

            <div className="hidden sm:block ml-4 md:ml-5 flex-1 h-[1px] overflow-hidden bg-neutral-400 rounded-full">
              <div className="h-px w-full bg-black animate-divider"></div>
            </div>
          </div>

          {/* View All / Show Less */}
          {!showAll ? (
            <button
              onClick={handleViewAll}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-black whitespace-nowrap shrink-0 ml-4"
            >
              <span className="relative">
                View All Work

                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:w-4 sm:h-4"
              />
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-black whitespace-nowrap shrink-0 ml-4"
            >
              <span className="relative">
                Show Less

                <span className="absolute left-0 -bottom-1 h-[1.5px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>

              <ArrowRight
                size={14}
                className="rotate-[-90deg] transition-transform duration-300 group-hover:-translate-y-1 sm:w-4 sm:h-4"
              />
            </button>
          )}
        </motion.div>

        {/* ================= Cards Grid ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-6 xl:gap-8">
          {projects
            .slice(0, showAll ? projects.length : 3)
            .map((project, index) => (
              <div
                key={project.id}
                ref={index === 3 ? fourthProjectRef : null}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;