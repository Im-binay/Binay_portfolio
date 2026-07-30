import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IntroLoader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (count < 100) {
      const timer = setTimeout(() => {
        const increment = count > 80 ? 2 : 5;
        setCount(Math.min(count + increment, 100));
      }, 45);

      return () => clearTimeout(timer);
    } else {
      const doneTimer = setTimeout(() => setIsDone(true), 200);
      const completeTimer = setTimeout(() => onComplete(), 1000);

      return () => {
        clearTimeout(doneTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [count, onComplete]);

  const topPanelVariants = {
    initial: { y: 0 },
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  const bottomPanelVariants = {
    initial: { y: 0 },
    exit: {
      y: "100%",
      transition: {
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  return (
    <div
      style={{ backgroundColor: "#c8c9c4" }}
      className="fixed inset-0 z-[9999] flex flex-col overflow-hidden font-outfit select-none pointer-events-none"
    >
      {/* TOP PANEL */}
      <motion.div
        variants={topPanelVariants}
        initial="initial"
        animate={isDone ? "exit" : "initial"}
        className="w-full h-1/2 bg-black flex items-end justify-center overflow-hidden"
      />

      {/* BOTTOM PANEL */}
      <motion.div
        variants={bottomPanelVariants}
        initial="initial"
        animate={isDone ? "exit" : "initial"}
        className="w-full h-1/2 bg-black flex items-start justify-center overflow-hidden"
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-8 sm:p-12 z-10 text-white">

        {/* Top Label */}
        <div className="w-full flex justify-between items-center overflow-hidden text-[10px] tracking-[0.2em] text-neutral-400 font-medium">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={
              isDone
                ? { opacity: 0, y: -20 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.4 }}
          >
            BS STUDIO
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={
              isDone
                ? { opacity: 0, y: -20 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            ©2026
          </motion.p>
        </div>

        {/* Main Typography */}
        <div className="flex flex-col items-center">

          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{ y: "100%" }}
              animate={
                isDone
                  ? { y: "-100%", opacity: 0 }
                  : { y: 0 }
              }
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl sm:text-6xl font-bold tracking-[-0.03em] text-white uppercase"
            >
              BINAY SHARMA
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={
              isDone
                ? { scaleX: 0, opacity: 0 }
                : { scaleX: 1 }
            }
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.2,
            }}
            className="h-px w-20 sm:w-28 bg-white/20 my-4 origin-center"
          />

          <div className="overflow-hidden py-1">
            <motion.p
              initial={{ y: "100%" }}
              animate={
                isDone
                  ? { y: "-100%", opacity: 0 }
                  : { y: 0 }
              }
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
              className="text-xs tracking-[0.2em] text-neutral-400 uppercase font-medium"
            >
              UI/UX DESIGNER
            </motion.p>
          </div>
        </div>

        {/* Progress Counter */}
        <div className="w-full flex justify-start overflow-hidden text-4xl sm:text-5xl font-medium text-white/40">
          <motion.span
            animate={
              isDone
                ? { opacity: 0, y: 30 }
                : { opacity: 1, y: 0 }
            }
            className="tabular-nums select-none"
          >
            {count < 10 ? `0${count}` : count}
          </motion.span>
        </div>

      </div>
    </div>
  );
};

export default IntroLoader;
