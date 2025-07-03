import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ban } from "lucide-react";
import SharedButton from "../../components/shared/SharedButton";

export default function ErrorPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] dark:from-gray-900 dark:to-gray-800 text-white flex items-center justify-center p-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <div className="w-20 h-20 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center shadow-lg">
          <Ban className="w-10 h-10" strokeWidth={2.5} />
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-primary drop-shadow-lg">
          404
        </h1>

        <p className="text-lg sm:text-xl font-medium text-gray-200 dark:text-gray-300">
          الصفحة غير موجودة أو تم نقلها
        </p>

        <SharedButton className="bg-primary hover:bg-primary/80 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300">
          <Link to="/" className="block w-full h-full">
            العودة إلى الصفحة الرئيسية
          </Link>
        </SharedButton>
      </motion.div>
    </section>
  );
}
