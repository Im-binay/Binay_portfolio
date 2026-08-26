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
    description:
      "BeeTrio is a courier tracking system designed to help users track deliveries and manage shipment information through a clear, efficient, and easy-to-use web interface.",
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
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
        delay: index * 0.1,
      }}
      aria-labelledby={`project-title-${project.id}`}
      className="
        flex
        h-full
        w-full
        max-w-[290px]
        mx-auto
        flex-col
        justify-between
        overflow-hidden
        rounded-[16px]
        border
        border-[var(--border-color)]
        bg-[var(--card-color)]
        transition-all
        duration-300
        hover:-translate-y-1
        md:max-w-none
        md:rounded-[18px]
      "
    >
      <div>
        {/* =================================================
            PROJECT IMAGE
        ================================================== */}

        <div className="p-2 md:p-2.5">
          <img
            src={project.image}
            alt={project.imageAlt}
            title={`${project.title} — UI/UX Design by Binay Sharma`}
            width="800"
            height="500"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            className="
              aspect-[16/9]
              w-full
              rounded-[12px]
              object-contain
              transition-transform
              duration-500
              hover:scale-[1.015]
              md:rounded-[14px]
            "
          />
        </div>

        {/* =================================================
            PROJECT INFORMATION
        ================================================== */}

        <div className="px-3 pb-2.5 md:px-4 md:pb-3.5">

          {/* Tools + Category */}
          <div className="mb-2 flex items-center justify-between gap-2">

            <p
              className="
                max-w-[65%]
                truncate
                text-[9px]
                leading-normal
                text-[var(--text-muted)]
                md:text-[11px]
              "
            >
              <span className="font-semibold text-[var(--text-color)]">
                Tools:
              </span>{" "}
              {project.tools}
            </p>

            <span
              aria-label={`Project category: ${project.category}`}
              className="
                whitespace-nowrap
                rounded-full
                bg-[var(--accent-light)]
                px-2
                py-1
                text-[8px]
                font-medium
                tracking-wide
                text-[var(--accent-color)]
                md:px-2.5
                md:text-[9px]
              "
            >
              {project.category}
            </span>
          </div>

          {/* =================================================
              PROJECT TITLE
          ================================================== */}

          <h3
            id={`project-title-${project.id}`}
            className="
              line-clamp-1
              text-base
              font-bold
              leading-tight
              tracking-[-0.02em]
              text-[var(--text-color)]
              md:text-lg
              lg:text-xl
            "
          >
            {project.title}
          </h3>

          {/* =================================================
              PROJECT DESCRIPTION
          ================================================== */}

          <p
            className="
              mt-1.5
              line-clamp-2
              text-[10px]
              leading-[1.55]
              text-[var(--text-muted)]
              md:mt-2
              md:text-xs
              lg:text-[13px]
            "
          >
            {project.description}
          </p>
        </div>
      </div>

      {/* =================================================
          CASE STUDY LINK
      ================================================== */}

      <div className="px-3 pb-3 pt-0 md:px-4 md:pb-4">

        <div className="flex justify-end">

          <a
            href={project.caseStudy}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read the ${project.title} UI/UX design case study`}
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-1
              overflow-hidden
              rounded-full
              bg-[var(--accent-color)]
              px-3.5
              py-1.5
              text-[9px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              md:px-4
              md:py-1.5
              md:text-[11px]
              lg:text-xs
            "
          >

            {/* Button Shine */}
            <span
              aria-hidden="true"
              className="
                absolute
                left-[-150%]
                top-0
                h-full
                w-1/2
                -skew-x-12
                bg-white/20
                transition-all
                duration-[1200ms]
                ease-out
                group-hover:left-[150%]
              "
            />

            {/* Button Text */}
            <span className="relative z-10">
              View Case Study
            </span>

            {/* Arrow */}
            <ArrowRight
              size={11}
              aria-hidden="true"
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-1
                md:h-3
                md:w-3
              "
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

  /* =======================================================
     VIEW ALL WORK
  ======================================================= */

  const handleViewAll = () => {
    setShowAll(true);

    setTimeout(() => {
      fourthProjectRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  /* =======================================================
     VISIBLE PROJECTS
  ======================================================= */

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  /* =======================================================
     HEADER ANIMATION
  ======================================================= */

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="
        min-h-fit
        overflow-hidden
        bg-[var(--bg-color)]
        pt-9
        pb-6
        md:pt-20
        md:pb-10
        lg:min-h-screen
        lg:pt-8
        lg:pb-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:px-6
          md:px-8
          lg:px-12
        "
      >

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
          className="
            mb-4
            flex
            w-full
            flex-row
            flex-nowrap
            items-center
            justify-between
            gap-4
            md:mb-6
          "
        >

          {/* Heading + Divider */}
          <div className="flex flex-1 items-center">

            <h2
              id="work-heading"
              className="
                whitespace-nowrap
                text-lg
                font-bold
                leading-none
                tracking-[-0.02em]
                text-[var(--text-color)]
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
              "
            >
              Selected Work
            </h2>

            {/* Divider */}
            <div
              className="
                ml-5
                hidden
                h-px
                flex-1
                overflow-hidden
                bg-[var(--border-color)]
                sm:block
                md:ml-8
              "
            >
              <div
                className="
                  h-px
                  w-full
                  animate-divider
                  bg-[var(--accent-color)]
                "
              />
            </div>

          </div>

          {/* =================================================
              VIEW ALL BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={handleViewAll}
            disabled={showAll}
            aria-label={
              showAll
                ? "All UI/UX design projects are displayed"
                : "View all UI/UX design projects"
            }
            className={`
              group
              ml-4
              inline-flex
              shrink-0
              items-center
              gap-1.5
              whitespace-nowrap
              text-xs
              font-medium
              text-[var(--accent-color)]
              transition-opacity
              sm:text-sm

              ${
                showAll
                  ? "cursor-default opacity-50"
                  : "cursor-pointer"
              }
            `}
          >

            <span className="relative">

              {showAll
                ? "All Work"
                : "View All Work"}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[1.5px]
                  w-0
                  bg-[var(--accent-color)]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

            </span>

            <ArrowRight
              size={14}
              aria-hidden="true"
              className={`
                transition-transform
                duration-300

                ${
                  !showAll
                    ? "group-hover:translate-x-1"
                    : ""
                }

                sm:h-4
                sm:w-4
              `}
            />

          </button>
        </motion.header>

        {/* =================================================
            PROJECT GRID
        ================================================== */}

        <div
          aria-label="UI/UX design projects by Binay Sharma"
          className="
            grid
            grid-cols-1
            items-stretch
            gap-4
            md:grid-cols-2
            md:gap-5
            lg:grid-cols-3
            lg:gap-6
          "
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