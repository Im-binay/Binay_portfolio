import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../assets/images/neW.jpeg";

const Hero = () => {
  const containerRef = useRef(null);

  // Hook to track the vertical scroll progress of this specific component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: Maps scroll position to vertical movement (moves down on mobile, up on desktop)
  const yMobileImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yDesktopImage = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Variants for staggered entrance text animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      /* FIXED ONLY THIS LINE: Mobile gets scrollable min-h-[100dvh], tablets reset to md:min-h-fit, desktop stays lg:min-h-screen */
      className="bg-[#c8c9c4] font-outfit min-h-[calc(100dvh-80px)] md:min-h-fit lg:min-h-screen w-full flex items-center relative overflow-hidden"
    >
      {/* FIXED: Changed min-h-[calc(100vh-80px)] to dynamic scaling py-12 md:py-0 to close the gap */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full mx-auto max-w-[1440px] py-12 md:py-0 gap-8 md:gap-0">

        {/* FULL BLEED IMAGE CONTAINER with Parallax Effect */}
        {/* FIXED: Swapped md:h-screen out for a proportional height structure on tablet profiles */}
        <div className="absolute inset-0 px-4 py-4 md:px-0 md:relative md:h-[70vh] lg:h-screen w-full md:w-1/2 md:order-2 md:pl-8 lg:pl-14 overflow-hidden">       
          {/* Animated wrapper handles mobile vs desktop responsive parallax values smoothly */}
          <motion.div 
            style={{ y: typeof window !== "undefined" && window.innerWidth >= 768 ? yDesktopImage : yMobileImage }}
            className="w-full h-full"
          >
            <img
              src={heroImage}
              alt="Binay Sharma"
              className="w-full h-full object-cover object-top md:object-contain md:object-center scale-105"
            />
          </motion.div>
        </div>

        {/* LEFT / CONTENT PANEL with Entrance Animations */}
        {/* FIXED: Changed md:h-screen to match the image boundary height exactly */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="absolute bottom-0 inset-x-0 md:relative md:inset-auto z-10 w-full md:w-1/2 md:h-[70vh] lg:h-screen flex items-center px-6 sm:px-10 md:px-12 lg:px-24 pt-8 pb-10 md:py-0 md:order-1 bg-gradient-to-t from-[#c8c9c4] via-[#c8c9c4]/95 to-[#c8c9c4]/0 md:bg-[#c8c9c4] backdrop-blur-[2px] md:backdrop-blur-none"
        >
          <div className="max-w-lg lg:max-w-xl py-4 w-full">

            {/* Eyebrow */}
            <motion.p 
              variants={itemVariants}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.25em] text-black md:text-neutral-600 drop-shadow-sm"
            >
              The portfolio of
            </motion.p>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="mt-1 sm:mt-2 md:mt-3 lg:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] whitespace-nowrap text-neutral-900 drop-shadow-sm"
            >
              Binay Sharma
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              variants={itemVariants}
              className="mt-2 sm:mt-4 md:mt-5 lg:mt-7 flex items-center gap-2.5 sm:gap-3"
            >
              <span className="h-px w-6 sm:w-8 bg-neutral-500"></span>
              <p className="text-xs sm:text-base tracking-wide text-neutral-700 font-medium drop-shadow-sm">
                UI/UX Designer
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-nowrap items-center gap-2 sm:gap-4 mt-6 sm:mt-8 md:mt-12 lg:mt-16 w-full"
            >
              {/* See More Button */}
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center text-center overflow-hidden rounded-full border border-black md:border-2 px-3 py-2.5 sm:px-8 sm:py-4 text-xs sm:text-base font-medium text-black transition-all duration-300 hover:text-white whitespace-nowrap flex-1 sm:flex-initial bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none"
              >
                <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
                <span className="relative z-10">See My Work</span>
              </a>

              {/* Let's Connect Button */}
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center text-center gap-1.5 sm:gap-3 overflow-hidden rounded-full bg-black px-3 py-2.5 sm:px-8 sm:py-4 text-white text-xs sm:text-base font-medium transition-all duration-500 hover:shadow-xl whitespace-nowrap flex-1 sm:flex-initial"
              >
                <span className="absolute left-[-150%] top-0 h-full w-1/2 -skew-x-12 bg-white/20 transition-all duration-[1200ms] ease-out group-hover:left-[150%]"></span>
                <span className="relative z-10">Let's Connect</span>
                <ArrowRight
                  size={12}
                  className="relative z-10 transition-transform duration-700 ease-out group-hover:translate-x-2 sm:w-[18px] sm:h-[18px]"
                />
              </a>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;