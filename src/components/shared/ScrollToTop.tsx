import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll(); 
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-20 sm:bottom-6 right-6 z-[999] p-3 rounded-full shadow-lg
        cursor-pointer
        bg-white text-gray-700
        dark:bg-gray-800 dark:text-gray-200
        hover:bg-primary hover:text-white
        dark:hover:bg-primary
        transition-all duration-300
        ${
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={20} strokeWidth={2} />
    </button>
  );
}
