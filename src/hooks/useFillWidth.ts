// hooks/useFillWidth.ts
import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useFillWidth(percent: number, duration = 1.8) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        width: `${Math.min(Math.max(percent, 0), 100)}%`,
        transition: { duration, ease: "easeOut" },
      });
    }
  }, [isInView, percent, duration, controls]);

  return { ref, controls, isInView };
}
