import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroLoader = ({ onComplete }) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setIsComplete(true);
    }, 2600);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(completeTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Create particles
  const particles = Array.from({ length: 90 }, (_, i) => ({
    id: i,
    angle: Math.random() * Math.PI * 2,
    distance: 250 + Math.random() * 600,
    size: 1 + Math.random() * 3,
    duration: 1.5 + Math.random() * 1.5,
    delay: Math.random() * 1.2,
  }));

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black
            overflow-hidden
            pointer-events-none
          "
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
        >

          {/* =====================================================
              AMBIENT GLOW
          ===================================================== */}

          <motion.div
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              scale: [0.8, 1.2, 0.9],
              opacity: [0.05, 0.12, 0.04],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[500px]
              h-[500px]
              rounded-full
              bg-white
              blur-[150px]
            "
          />

          {/* =====================================================
              PARTICLES
          ===================================================== */}

          {particles.map((particle) => {
            const x =
              Math.cos(particle.angle) *
              particle.distance;

            const y =
              Math.sin(particle.angle) *
              particle.distance;

            return (
              <motion.div
                key={particle.id}
                initial={{
                  x: `calc(50vw + ${x}px)`,
                  y: `calc(50vh + ${y}px)`,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: "50vw",
                  y: "50vh",
                  scale: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  width: particle.size,
                  height: particle.size,
                }}
                className="
                  absolute
                  rounded-full
                  bg-white
                "
              />
            );
          })}

          {/* =====================================================
              OUTER GRAVITY RING
          ===================================================== */}

          <motion.div
            initial={{
              scale: 1.5,
              opacity: 0,
            }}
            animate={{
              scale: [1.5, 1, 0.8],
              opacity: [0, 0.25, 0],
              rotate: 360,
            }}
            transition={{
              duration: 3,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[420px]
              h-[420px]
              rounded-full
              border
              border-white/20
            "
          />

          {/* =====================================================
              SECOND GRAVITY RING
          ===================================================== */}

          <motion.div
            initial={{
              scale: 1.3,
              opacity: 0,
            }}
            animate={{
              scale: [1.3, 0.9, 0.7],
              opacity: [0, 0.15, 0],
              rotate: -360,
            }}
            transition={{
              duration: 2.7,
              delay: 0.2,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[300px]
              h-[300px]
              rounded-full
              border
              border-dashed
              border-white/20
            "
          />

          {/* =====================================================
              ACCRETION DISK
          ===================================================== */}

          <motion.div
            initial={{
              scale: 1,
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              scale: [1, 1.15, 0.8],
              rotate: 360,
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 2.4,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[260px]
              h-[90px]
              rounded-[50%]
              border
              border-white/30
              blur-[0.5px]
            "
          />

          {/* =====================================================
              INNER DISK
          ===================================================== */}

          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[180px]
              h-[60px]
              rounded-[50%]
              border
              border-white/20
            "
          />

          {/* =====================================================
              BLACK HOLE
          ===================================================== */}

          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: [0, 0.7, 1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-24
              h-24
              sm:w-32
              sm:h-32
              rounded-full
              bg-black
              border
              border-white/10
              shadow-[0_0_100px_40px_rgba(255,255,255,0.04)]
              z-20
            "
          />

          {/* =====================================================
              EVENT HORIZON
          ===================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-24
              h-24
              sm:w-32
              sm:h-32
              rounded-full
              border
              border-white/20
              z-30
            "
          />

          {/* =====================================================
              CENTRAL SINGULARITY
          ===================================================== */}

          <motion.div
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-1
              h-1
              rounded-full
              bg-white
              z-40
            "
          />

          {/* =====================================================
              GRAVITY WAVES
          ===================================================== */}

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{
                scale: 0.2,
                opacity: 0,
              }}
              animate={{
                scale: [0.3, 2.5],
                opacity: [0.25, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-24
                h-24
                rounded-full
                border
                border-white/20
              "
            />
          ))}

          {/* =====================================================
              FINAL EXPLOSION / REVEAL
          ===================================================== */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 1,
            }}
            animate={{
              scale: isComplete ? 30 : 0,
              opacity: isComplete ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-10
              h-10
              rounded-full
              bg-white
              z-[100]
            "
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;