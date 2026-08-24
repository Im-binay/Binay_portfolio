import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const letters = "BINAY".split("");

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        const increment = progress > 85 ? 2 : 4;

        setProgress((prev) =>
          Math.min(prev + increment, 100)
        );
      }, 45);

      return () => clearTimeout(timer);
    }

    // Hold at 100% before starting exit
    const doneTimer = setTimeout(() => {
      setIsDone(true);
    }, 700);

    // Complete AFTER the exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1000);

    return () => {
      clearTimeout(doneTimer);
      clearTimeout(completeTimer);
    };
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="
            fixed inset-0
            z-[9999]
            bg-black
            text-white
            overflow-hidden
            pointer-events-none
            select-none
          "
          initial={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.985,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >

          {/* =====================================================
              BACKGROUND GRID
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isDone ? 0 : 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="absolute inset-0"
          >
            <div
              className="
                absolute inset-0
                opacity-[0.045]
                [background-image:linear-gradient(to_right,rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,1)_1px,transparent_1px)]
                [background-size:80px_80px]
              "
            />
          </motion.div>


          {/* =====================================================
              TOP BAR
          ===================================================== */}

          <motion.div
            initial={{
              y: -40,
              opacity: 0,
            }}
            animate={{
              y: isDone ? -20 : 0,
              opacity: isDone ? 0 : 1,
            }}
            transition={{
              duration: isDone ? 0.7 : 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              absolute
              top-7
              left-7
              right-7
              sm:left-12
              sm:right-12
              flex
              items-center
              justify-between
              z-30
            "
          >

            {/* LEFT */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <span
                className="
                  text-xs
                  font-bold
                  tracking-[0.2em]
                "
              >
                BS
              </span>

              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 32,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4,
                }}
                className="
                  hidden
                  sm:block
                  h-px
                  bg-white/20
                "
              />

              <span
                className="
                  hidden
                  sm:block
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Personal Portfolio
              </span>

            </div>


            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                gap-5
              "
            >

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/30
                "
              >
                Intro
              </span>

              <span
                className="
                  text-[9px]
                  tracking-[0.25em]
                  text-white/40
                "
              >
                2026
              </span>

            </div>

          </motion.div>


          {/* =====================================================
              VERTICAL SCAN LINE
          ===================================================== */}

          <motion.div
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: "100%",
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 2.8,
              delay: 0.3,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-white/30
              z-20
            "
          />


          {/* =====================================================
              LEFT SIDE METADATA
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: isDone ? 0 : 1,
              x: isDone ? -20 : 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="
              absolute
              left-2
              xl:left-6
              2xl:left-10
              top-1/2
              -translate-y-1/2
              hidden
              lg:flex
              flex-col
              items-center
              gap-4
              z-10
            "
          >

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-white/15
                [writing-mode:vertical-rl]
              "
            >
              Design
            </span>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.3em]
                text-white/15
                [writing-mode:vertical-rl]
              "
            >
              Interaction
            </span>

          </motion.div>


          {/* =====================================================
              CENTER CONTENT
          ===================================================== */}

          <motion.div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
            animate={{
              opacity: isDone ? 0 : 1,
              y: isDone ? -35 : 0,
              scale: isDone ? 0.97 : 1,
              filter: isDone
                ? "blur(8px)"
                : "blur(0px)",
            }}
            transition={{
              duration: 0.75,
              ease: [0.76, 0, 0.24, 1],
            }}
          >

            <div
              className="
                relative
                w-full
                px-6
                sm:px-12
                lg:px-16
              "
            >

              {/* =================================================
                  SECTION LABEL
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -40,
                }}
                animate={{
                  opacity: isDone ? 0 : 1,
                  x: isDone ? -20 : 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  absolute
                  left-6
                  sm:left-12
                  lg:left-16
                  -top-14
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  Selected Work
                </span>

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 42,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6,
                  }}
                  className="
                    h-px
                    bg-white/30
                  "
                />

              </motion.div>


              {/* =================================================
                  NAME
              ================================================= */}

              <div className="relative">

                {/* HORIZONTAL SCAN */}

                <motion.div
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "100%",
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-1/2
                    left-0
                    w-1/3
                    h-px
                    bg-white/30
                    z-30
                  "
                />


                {/* =================================================
                    BINAY
                ================================================= */}

                <div
                  className="
                    flex
                    overflow-visible
                  "
                >

                  {letters.map((letter, index) => (

                    <div
                      key={letter}
                      className="
                        relative
                        overflow-hidden
                      "
                    >

                      {/* GHOST LETTER */}

                      <motion.span
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: isDone ? 0 : 0.08,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.25 + index * 0.1,
                        }}
                        className="
                          absolute
                          inset-0
                          text-[23vw]
                          sm:text-[18vw]
                          lg:text-[15vw]
                          font-bold
                          leading-[0.72]
                          tracking-[-0.09em]
                          text-white
                        "
                      >
                        {letter}
                      </motion.span>


                      {/* MAIN LETTER */}

                      <motion.span
                        initial={{
                          y: "120%",
                          scaleX: 1.5,
                          opacity: 0,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          y: isDone ? "-12%" : 0,
                          scaleX: isDone ? 0.97 : 1,
                          opacity: isDone ? 0 : 1,
                          filter: isDone
                            ? "blur(8px)"
                            : "blur(0px)",
                        }}
                        transition={{
                          duration: isDone ? 0.7 : 1.05,
                          delay: isDone
                            ? index * 0.03
                            : 0.35 + index * 0.12,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                          block
                          text-[23vw]
                          sm:text-[18vw]
                          lg:text-[15vw]
                          font-bold
                          leading-[0.72]
                          tracking-[-0.09em]
                          text-white
                          will-change-transform
                        "
                      >
                        {letter}
                      </motion.span>

                    </div>

                  ))}

                </div>


                {/* =================================================
                    SHARMA
                ================================================= */}

                <motion.div
                  className="
                    relative
                    overflow-hidden
                    mt-6
                  "
                  animate={{
                    opacity: isDone ? 0 : 1,
                    y: isDone ? -25 : 0,
                    filter: isDone
                      ? "blur(7px)"
                      : "blur(0px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >

                  <motion.div
                    initial={{
                      x: "-100%",
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.15,
                      delay: 1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      text-[10vw]
                      sm:text-[8vw]
                      lg:text-[6.5vw]
                      font-medium
                      leading-none
                      tracking-[-0.065em]
                      text-white/90
                    "
                  >
                    SHARMA
                  </motion.div>

                </motion.div>


                {/* =================================================
                    ROLE
                ================================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: isDone ? 0 : 1,
                    y: isDone ? -15 : 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 1.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    mt-10
                    flex
                    items-center
                    gap-4
                  "
                >

                  <motion.span
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: 52,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 1.55,
                    }}
                    className="
                      h-px
                      bg-white
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      sm:text-[10px]
                      uppercase
                      tracking-[0.3em]
                    "
                  >
                    UI / UX Designer
                  </span>

                </motion.div>

              </div>

            </div>

          </motion.div>


          {/* =====================================================
              RIGHT VERTICAL COUNTER
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: isDone ? 0 : 1,
              x: isDone ? 20 : 0,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="
              absolute
              right-7
              sm:right-12
              top-1/2
              -translate-y-1/2
              hidden
              lg:flex
              flex-col
              items-center
              gap-4
            "
          >

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.3em]
                text-white/25
                [writing-mode:vertical-rl]
              "
            >
              Loading
            </span>


            {/* VERTICAL PROGRESS */}

            <div
              className="
                relative
                h-24
                w-px
                bg-white/10
                overflow-hidden
              "
            >

              <motion.div
                animate={{
                  height: `${progress}%`,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  bg-white
                "
              />

            </div>

          </motion.div>


          {/* =====================================================
              BOTTOM STATUS
          ===================================================== */}

          <motion.div
            className="
              absolute
              bottom-7
              left-7
              right-7
              sm:left-12
              sm:right-12
              z-30
            "
            animate={{
              opacity: isDone ? 0 : 1,
              y: isDone ? 20 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1],
            }}
          >

            <div
              className="
                flex
                items-end
                justify-between
                mb-3
              "
            >

              {/* STATUS */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <motion.span
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.25, 1],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                  }}
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-white
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-white/40
                  "
                >
                  {progress < 100
                    ? "Building experience"
                    : "Welcome"}
                </span>

              </div>


              {/* LARGE COUNTER */}

              <motion.div
                className="
                  flex
                  items-baseline
                  gap-1
                "
              >

                <motion.span
                  animate={{
                    y: progress === 100 ? -5 : 0,
                  }}
                  className="
                    text-2xl
                    sm:text-3xl
                    font-light
                    tracking-[-0.05em]
                  "
                >
                  {String(progress).padStart(2, "0")}
                </motion.span>

                <span
                  className="
                    text-[9px]
                    text-white/30
                  "
                >
                  %
                </span>

              </motion.div>

            </div>


            {/* PROGRESS LINE */}

            <div
              className="
                relative
                w-full
                h-px
                bg-white/10
                overflow-hidden
              "
            >

              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  bg-white
                "
              />

            </div>

          </motion.div>


          {/* =====================================================
              COMPLETION FLASH
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity:
                progress === 100
                  ? [0, 0.2, 0]
                  : 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              absolute
              inset-0
              bg-white
              z-40
              pointer-events-none
            "
          />


          {/* =====================================================
              SMOOTH WHITE EXIT CURTAIN
          ===================================================== */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: isDone ? 1 : 0,
            }}
            transition={{
              duration: 1.15,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              transformOrigin: "bottom",
            }}
            className="
              absolute
              inset-0
              bg-white
              z-50
              will-change-transform
            "
          />


          {/* =====================================================
              SUBTLE EXIT EDGE
          ===================================================== */}

          <motion.div
            initial={{
              scaleY: 0,
            }}
            animate={{
              scaleY: isDone ? 1 : 0,
            }}
            transition={{
              duration: 1.15,
              delay: 0.08,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              transformOrigin: "bottom",
            }}
            className="
              absolute
              inset-0
              bg-black
              z-[49]
              opacity-10
              pointer-events-none
            "
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;