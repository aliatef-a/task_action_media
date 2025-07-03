import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react"; // spinning loader icon

function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative md:h-[70vh] h-[50vh] w-full">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/e0tSbEbhaDc?autoplay=0&mute=1&loop=1&playlist=e0tSbEbhaDc"
        title="YouTube video"
        allow="autoplay; fullscreen"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      ></iframe>

      {/* Overlay with spinning icon */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black/70 z-10 pointer-events-none flex items-center justify-center"
      >
        <Loader2 className="text-white h-10 w-10 animate-spin" />
      </motion.div>
    </div>
  );
}

export default Hero;
