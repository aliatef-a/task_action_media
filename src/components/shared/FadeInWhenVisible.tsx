import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Direction = "left" | "right" | "bottom";

const getVariants = (direction: Direction) => {
  switch (direction) {
    case "left":
      return { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
    case "right":
      return { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
    case "bottom":
    default:
      return { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };
  }
};

export default function FadeInWhenVisible({
  children,
  direction = "bottom",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
    >
      {children}
    </motion.div>
  );
}
