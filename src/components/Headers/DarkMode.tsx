import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function DarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="absolute top-5 ltr:right-1/3 rtl:left-1/3 w-fit ltr:sm:right-4 sm:rtl:right-4 z-50 p-2 rounded-full
             bg-white dark:bg-gray-800
             text-gray-800 dark:text-yellow-300
             cursor-pointer
             shadow-md transition-all duration-300 ease-in-out"
      aria-label="Toggle dark mode"
    >
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}

export default DarkMode;
