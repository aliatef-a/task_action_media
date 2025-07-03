import { useEffect,  } from "react";
import { animate,  useMotionValue, useTransform } from "framer-motion";

export function useCountUp(
  end: number,
  start = 0,
  duration = 1.8,
  enabled = true
) {
  const motionValue = useMotionValue(start);
  const formatted = useTransform(motionValue, (v) =>
    Math.floor(v).toLocaleString("en-US")
  );

  useEffect(() => {
    if (!enabled) return;
    const controls = animate(motionValue, end, { duration, ease: "easeOut" });
    return () => controls.stop(); // احرص على استدعاء الدالة
  }, [enabled, end, duration, motionValue]);

  return formatted;
}
