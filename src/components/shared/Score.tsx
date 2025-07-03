import { motion } from "framer-motion";
import { svg } from "../../assets/svg/svg";
import { useCountUp } from "../../hooks/useCountUp";
import { useFillWidth } from "../../hooks/useFillWidth";
import { useTranslation } from "react-i18next";

type ScoreProps = {
  year: number;
  value: number;
  percent: number;
  barColor?: string;
};

export default function Score({
  year,
  value,
  percent,
  barColor = "#60a534",
}: ScoreProps) {
  const { t } = useTranslation();
  const { ref, controls, isInView } = useFillWidth(percent);
  const animatedValue = useCountUp(value, 0, 1.8, isInView);

  const { i18n } = useTranslation();
  const isRTL = i18n.dir(i18n.language) === "rtl";

  const clipPath = isRTL
    ? "polygon(24px 0, 100% 0, 100% 100%, 0% 100%)"
    : "polygon(calc(100% - 24px) 0, 0% 0, 0% 100%, 100% 100%)";

  return (
    <div ref={ref} className="w-full relative">
      {/* خلفية الشكل */}
      <img
        src={svg.chart_shape}
        alt=""
        className="absolute top-4 ltr:-left-3 rtl:-right-5 ltr:rotate-y-180 max-w-md -z-0 pointer-events-none"
      />

      {/* الرقم + الشريط */}
      <div className="flex items-center text-center gap-5 relative z-10 ltr:pl-2">
        <div>
          <motion.span
            style={{ color: barColor }}
            className="text-4xl  font-extrabold !text-[#058340]"
          >
            {animatedValue}
          </motion.span>
          <div className="text-md text-gray-600 font-medium text-nowrap">
            {t("score.unit")}
          </div>
        </div>

        <div className="relative h-10 w-full">
          <div className="absolute inset-0 bg-gray-100 dark:bg-gray-700" />
          <motion.div
            className={`absolute inset-y-0 ${isRTL ? "right-0" : "left-0"}`}
            initial={{ width: 0 }}
            animate={controls}
            style={{
              background: barColor,
              clipPath,
            }}
          >
            <span
              className="absolute left-0 top-0 h-full w-6"
              style={{
                background: barColor,
                clipPath: isRTL
                  ? "polygon(0 0, 100% 0, 0 100%)"
                  : "polygon(100% 0, 100% 100%, 0 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>

      <div className="flex ltr:justify-end rtl:justify-between rtl:flex-row-reverse -mt-2">
        <span className="text-2xl font-semibold text-gray-600">{year}</span>
      </div>
    </div>
  );
}
