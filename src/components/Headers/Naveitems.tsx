import { XIcon } from "lucide-react";
import CenterDiv from "./CenterDiv";
import { useState } from "react";
import { navItems } from "../../constants/navlinks";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

type Props = {
  open: boolean;
  onClose: () => void;
};

function Naveitems({ open, onClose }: Props) {
  const { t } = useTranslation();

  const [selectedId, setSelectedId] = useState(navItems[0].id);
  const selected = navItems.find((n) => n.id === selectedId)!;
  const [isLoading, setIsLoading] = useState(true);

  //   to handle loading state between images
  const handleImageChange = (newId: string) => {
    setIsLoading(true);
    setSelectedId(newId);
  };

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const slideFrom = isMobile ? "100%" : "-100%";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 dark:bg-black/80 z-[999]"
        >
          <motion.div
            initial={{ y: slideFrom }}
            animate={{ y: 0 }}
            exit={{ y: slideFrom }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#aadba6] dark:bg-gray-800 sm:w-[95%] mx-auto !h-fit pb-10 rounded-lg transition-colors duration-300"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 rtl:right-5 ltr:left-5 cursor-pointer font-bold rounded-full bg-white dark:bg-gray-700 dark:hover:bg-primary text-black dark:text-white w-8 h-8 flex items-center justify-center transition-colors"
            >
              <XIcon className="font-bold" size={18} strokeWidth={3} />
            </button>

            {/* Navigation Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-start justify-center gap-y-10 gap-x-25 px-10 pt-19 ">
              <div className=" space-y-2 ">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleImageChange(item.id)}
                    className={`
                    text-lg sm:text-2xl px-7 py-1 cut-tl-br duration-300 text-nowrap cursor-pointer
                ${
                  selectedId === item.id
                    ? "text-primary bg-white dark:bg-gray-900 dark:text-primary font-bold"
                    : "text-secandry font-semibold hover:text-primary hover:bg-white dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary"
                }
                `}
                  >
                    <span className="ltr:mr-5 rtl:ml-5 text-secandry dark:text-gray-400 font-semibold">
                      {" "}
                      {item.id}
                    </span>
                    {t(`nav.${item.id}`)}
                  </button>
                ))}
              </div>

              {/* center div */}
              <div className="hidden sm:block">
                <CenterDiv item={selected} />
              </div>
              {/* div imge */}
              <div className="hidden xl:block absolute ltr:right-0 rtl:left-0 top-0 w-[40%] h-[85%] overflow-hidden ltr:rotate-y-180 img-cut bg-white dark:bg-gray-900 transition-colors duration-300">
                <AnimatePresence initial={false} mode="sync">
                  <motion.img
                    key={selected.image}
                    src={selected.image}
                    alt={selected.id}
                    onLoad={() => setIsLoading(false)}
                    className="absolute inset-0 w-full h-full object-cover object-right will-change-[opacity]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoading ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Naveitems;
