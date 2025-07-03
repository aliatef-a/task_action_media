import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

type Props = { item: { id: string; image: string } };

function CenterDiv({ item }: Props) {
  const { t } = useTranslation();
  const translatedLabel = t(`nav.${item.id}`);
  const translatedLinks = t(`center.${item.id}`, {
    returnObjects: true,
  }) as unknown;

  const linksArray = Array.isArray(translatedLinks) ? translatedLinks : [];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.id}
        className="space-y-4 text-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {/* ID number */}
        <div className="relative w-fit">
          <h2 className="text-8xl font-bold text-white leading-[70%] relative z-10">
            {item.id}
          </h2>
          <span className="absolute top-0 left-[3px] text-8xl font-bold text-[#058340] leading-[70%] w-full z-0 pointer-events-none select-none">
            {item.id}
          </span>
        </div>

        {/* Title */}
        <div className="relative w-fit mt-10 mr-3">
          <h2 className="text-5xl font-bold text-white leading-[70%] relative z-10">
            {translatedLabel}
          </h2>
          <span className="absolute top-0 left-[3px] text-5xl font-bold text-[#058340] leading-[70%] w-full z-0 pointer-events-none select-none">
            {translatedLabel}
          </span>

          {/* Links */}
          <div className="mt-14 space-y-3">
            {linksArray.map((label, index) => (
              <div key={index} className="relative w-fit group">
                <button className="relative z-10 text-secandry text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                  {label}
                </button>
                <span
                  aria-hidden
                  className="absolute top-0 left-[3px] w-full text-xl font-semibold text-[#058340] z-0 pointer-events-none select-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:text-[#4e8248]"
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CenterDiv;
