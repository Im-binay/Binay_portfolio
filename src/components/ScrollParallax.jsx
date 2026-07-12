import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollParallax({ children, speed = 100 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Maps the scroll progress to a physical shift
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    // The outer div keeps the structure solid in the DOM
    <div ref={ref} className="relative w-full overflow-visible">
      {/* The motion div handles the floating movement */}
      <motion.div style={{ y }} className="w-full relative z-10">
        {children}
      </motion.div>
    </div>
  );
}