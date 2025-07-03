import { Menu } from "lucide-react";
import { svg } from "../../assets/svg/svg";
import Naveitems from "./Naveitems";
import { useEffect, useState } from "react";
import DarkMode from "./DarkMode";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const toggleLang = () => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="py-5 shadow-lg dark:shadow-[0_2px_4px_rgba(255,255,255,0.1)] bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <DarkMode />
      <div className="flex justify-between items-center h-10 container">
        <div className="flex items-center gap-7">
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer text-black dark:text-white"
          >
            <Menu size={30} strokeWidth={1.5} />
          </button>
          <div className="overflow-hidden w-28 h-16">
            <img
              className="object-contain w-full h-full dark:invert"
              src={svg.sidf_group}
              alt="logo"
            />
          </div>
        </div>
        <button
          onClick={toggleLang}
          className="flex items-center gap-3 cursor-pointer hover:scale-105 transition duration-300 text-gray-800 dark:text-gray-200 focus:outline-none"
          aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}
        >
          <img
            className="w-10 h-7 dark:invert"
            src={svg.download_shape}
            alt="icon-side"
          />
          <span>|</span>
          <h2 className="text-lg sm:text-2xl font-medium">
            {isArabic ? "EN" : "AR"}
          </h2>
        </button>
      </div>
      <Naveitems open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Navbar;
