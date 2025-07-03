import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Milestone } from "../../Interfaces/types";
import { useCountUp } from "../../hooks/useCountUp";

export const Mileston = ({ value, unit, caption, offset }: Milestone) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const numericValue = Number(value.replace(/,/g, ""));
  const animatedValue = useCountUp(isInView ? numericValue : 0);

  return (
    <div
      ref={ref}
      className={`border-b border-primary flex-1 ${offset ? "md:mr-40" : ""}`}
    >
      <div className="flex items-center gap-5 md:gap-10 text-nowrap">
        <p className="font-bold text-sm sm:text-2xl md:text-4xl bg-primary text-white px-4 py-2 w-fit cut-tl-br -mr-7">
          <motion.span>{animatedValue}</motion.span>{" "}
          <span className="text-sm">{unit}</span>
        </p>
        <p className="text-lg sm:text-xl font-bold text-secandry">{caption}</p>
      </div>
    </div>
  );
};
export default Mileston;
