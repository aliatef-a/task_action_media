import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ScaleInCard({ children, className = "" }: Props) {
  const cardRef = useRef(null);

  const isInView = useInView(cardRef, {
    margin: "-100px 0px",
    amount: 0.2,
  });

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({ rotateY: 0, opacity: 1 });
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

  return (
    <div ref={cardRef} className="[perspective:1200px]">
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`flex flex-col items-center justify-center 
                    text-center gap-4 w-full h-full 
                    [backface-visibility:hidden] ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
