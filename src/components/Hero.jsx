import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/images/neW.jpeg";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yMobileImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "20%"]
  );

  const yDesktopImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-15%"]
  );

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.03,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.15,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      aria-labelledby="hero-heading"
      className="bg-[var(--bg-color)] font-outfit min-h-[calc(100dvh-80px)] md:min-h-fit lg:min-h-screen w-full flex items-center relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-[1440px] py-12 md:py-0 gap-8 md:gap-0">

        {/* =========================
            HERO IMAGE
        ========================== */}
        <figure
          className="absolute inset-0 px-4 py-4 md:px-0 md:relative md:h-[70vh] lg:h-screen w-full md:w-1/2 md:order-2 md:pl-8 lg:pl-14 overflow-hidden m-0"
          aria-label="Portrait of Binay Sharma, UI/UX Designer"
        >
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            style={{
              y:
                typeof window !== "undefined" &&
                window.innerWidth >= 768
                  ? yDesktopImage
                  : yMobileImage,
            }}
            className="w-full h-full"
          >
            <img
              src={heroImage}
              alt="Binay Sharma — UI/UX Designer and Interaction Designer"
              title="Binay Sharma — UI/UX Designer"
              width="800"
              height="1000"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-top md:object-contain md:object-center"
            />
          </motion.div>
        </figure>

        {/* =========================
            HERO CONTENT
        ========================== */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 inset-x-0 md:relative md:inset-auto z-10 w-full md:w-1/2 md:h-[70vh] lg:h-screen flex items-center px-6 sm:px-10 md:px-12 lg:px-24 pt-8 pb-10 md:py-0 md:order-1 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/95 to-[var(--bg-color)]/0 md:bg-[var(--bg-color)] backdrop-blur-[2px] md:backdrop-blur-none"
        >
          <div className="max-w-lg lg:max-w-xl py-4 w-full">

            {/* =========================
                HERO LABEL
            ========================== */}
            <motion.p
              variants={itemVariants}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium tracking-[0.18em] text-[var(--accent-color)]"
            >
              UI/UX & Interaction Designer from Nepal
            </motion.p>

            {/* =========================
                MAIN SEO HEADING
            ========================== */}
            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="mt-1 sm:mt-2 md:mt-3 lg:mt-5 text-3xl sm:text-4xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-normal leading-none whitespace-nowrap text-[var(--text-color)]"
            >
              Binay Sharma
            </motion.h1>

            {/* =========================
                HERO DESCRIPTION
            ========================== */}
            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-5 md:mt-6 max-w-xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-[var(--text-muted)]"
            >
              I design user-centered digital experiences for web and mobile
              products through interaction design, wireframing, prototyping,
              and intuitive interfaces.
            </motion.p>

            {/* =========================
                CTA BUTTONS
            ========================== */}
            <motion.div
              variants={itemVariants}
              className="flex flex-nowrap items-center gap-2 sm:gap-4 mt-8 sm:mt-10 md:mt-14 lg:mt-16 w-full"
            >

              {/* View Work */}
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center text-center overflow-hidden rounded-full border border-[var(--accent-color)] md:border-2 px-3 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-base font-medium text-[var(--accent-color)] transition-all duration-300 hover:text-white whitespace-nowrap flex-1 sm:flex-initial bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-[var(--accent-color)] transition-transform duration-500 ease-out group-hover:translate-x-0"
                />

                <span className="relative z-10">
                  View My Work
                </span>
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center text-center gap-1.5 sm:gap-3 overflow-hidden rounded-full bg-[var(--accent-color)] px-3 py-2.5 sm:px-8 sm:py-4 text-white text-xs sm:text-base font-medium transition-all duration-500 hover:scale-[1.02] whitespace-nowrap flex-1 sm:flex-initial"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[-150%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-[1200ms] ease-out group-hover:left-[150%]"
                />

                <span className="relative z-10">
                  Let's Connect
                </span>

                <ArrowRight
                  size={12}
                  aria-hidden="true"
                  className="relative z-10 transition-transform duration-700 ease-out group-hover:translate-x-2 sm:w-[18px] sm:h-[18px]"
                />
              </a>

            </motion.div>
          </div>
        </motion.header>
      </div>
    </section>
  );
};

export default Hero;