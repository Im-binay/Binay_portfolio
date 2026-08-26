import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import heroImage from "../assets/images/BinayHeroImg.png";

const Hero = () => {
  const containerRef = useRef(null);

  /* ========================================
     SCROLL PARALLAX
  ======================================== */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yMobileImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "8%"]
  );

  const yDesktopImage = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-8%"]
  );

  /* ========================================
     MOUSE INTERACTION
  ======================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(
    smoothY,
    [-0.5, 0.5],
    [3, -3]
  );

  const rotateY = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-3, 3]
  );

  const imageX = useTransform(
    smoothX,
    [-0.5, 0.5],
    [-8, 8]
  );

  const imageY = useTransform(
    smoothY,
    [-0.5, 0.5],
    [-8, 8]
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  /* ========================================
     TEXT ANIMATION
  ======================================== */

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
      className="
        relative
        flex
        min-h-[calc(100dvh-80px)]
        w-full
        items-center
        overflow-hidden
        bg-[var(--bg-color)]
        font-outfit
        lg:min-h-screen
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          justify-between
          gap-8
          py-12
          md:flex-row
          md:gap-0
          md:py-0
        "
      >

        {/* ========================================
            HERO IMAGE
        ======================================== */}

        <figure
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="
            absolute
            inset-0
            m-0
            overflow-hidden
            px-4
            py-4

            md:relative
            md:order-2
            md:h-[70vh]
            md:w-1/2
            md:px-0
            md:pl-8

            lg:h-screen
            lg:pl-14
          "
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

              x: imageX,
              rotateX,
              rotateY,
            }}

            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              will-change-transform
            "
          >

            <motion.img
              src={heroImage}
              alt="Binay Sharma — UI/UX Designer and Interaction Designer"
              title="Binay Sharma — UI/UX Designer"
              width="800"
              height="1000"
              fetchPriority="high"
              decoding="async"

              whileHover={{
                scale: 1.015,
              }}

              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}

              style={{
                y: imageY,
              }}

              className="
                h-full
                w-full
                object-cover
                object-top

                md:object-contain
                md:object-center

                will-change-transform
              "
            />

          </motion.div>

        </figure>

        {/* ========================================
            HERO CONTENT
        ======================================== */}

        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"

          className="
            absolute
            inset-x-0
            bottom-0
            z-10

            flex
            w-full
            items-center

            bg-gradient-to-t
            from-[var(--bg-color)]
            via-[var(--bg-color)]/95
            to-[var(--bg-color)]/0

            px-6
            pb-10
            pt-8

            backdrop-blur-[2px]

            md:relative
            md:inset-auto
            md:order-1
            md:h-[70vh]
            md:w-1/2
            md:bg-[var(--bg-color)]
            md:px-12
            md:py-0
            md:backdrop-blur-none

            lg:h-screen
            lg:px-24
          "
        >

          <div className="w-full max-w-lg py-4 lg:max-w-xl">

            {/* ========================================
                LABEL
            ======================================== */}

            <motion.p
              variants={itemVariants}
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[var(--accent-color)]

                sm:text-xs
                md:text-sm
                lg:text-base
              "
            >
              UI/UX & Interaction Designer from Nepal
            </motion.p>

            {/* ========================================
                NAME
            ======================================== */}

            <motion.h1
              id="hero-heading"
              variants={itemVariants}
              className="
                mt-1
                whitespace-nowrap
                text-3xl
                font-bold
                leading-none
                tracking-normal
                text-[var(--text-color)]

                sm:mt-2
                sm:text-4xl

                md:mt-3
                md:text-7xl

                lg:mt-5
                lg:text-7xl

                xl:text-8xl
              "
            >
              Binay Sharma
            </motion.h1>

            {/* ========================================
                DESCRIPTION
            ======================================== */}

            <motion.p
              variants={itemVariants}
              className="
                mt-4
                max-w-xl
                text-xs
                leading-relaxed
                text-[var(--text-muted)]

                sm:mt-5
                sm:text-sm

                md:mt-6
                md:text-base

                lg:text-lg
              "
            >
              I design user-centered digital experiences
              for web and mobile products through
              interaction design, wireframing,
              prototyping, and intuitive interfaces.
            </motion.p>

            {/* ========================================
                CTA BUTTONS
            ======================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mt-8
                flex
                w-full
                flex-nowrap
                items-center
                gap-2

                sm:mt-10
                sm:gap-4

                md:mt-14

                lg:mt-16
              "
            >

              {/* VIEW WORK */}

              <a
                href="#work"
                className="
                  group
                  relative
                  inline-flex
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[var(--accent-color)]
                  bg-white/10
                  px-3
                  py-3.5
                  text-center
                  text-xs
                  font-medium
                  text-[var(--accent-color)]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:text-white

                  sm:flex-initial
                  sm:px-8
                  sm:py-4
                  sm:text-base

                  md:border-2
                  md:bg-transparent
                  md:backdrop-blur-none
                "
              >

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-[var(--accent-color)]
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-0
                  "
                />

                <span className="relative z-10">
                  View My Work
                </span>

              </a>

              {/* CONTACT */}

              <a
                href="#contact"
                className="
                  group
                  relative
                  inline-flex
                  flex-1
                  items-center
                  justify-center
                  gap-1.5
                  overflow-hidden
                  rounded-full
                  bg-[var(--accent-color)]
                  px-3
                  py-2.5
                  text-xs
                  font-medium
                  text-white
                  transition-all
                  duration-500
                  hover:scale-[1.02]

                  sm:flex-initial
                  sm:gap-3
                  sm:px-8
                  sm:py-4
                  sm:text-base
                "
              >

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

                <span className="relative z-10">
                  Let's Connect
                </span>

                <ArrowRight
                  size={12}
                  aria-hidden="true"
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:translate-x-2

                    sm:h-[18px]
                    sm:w-[18px]
                  "
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