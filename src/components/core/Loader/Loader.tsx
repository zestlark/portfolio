import { motion } from "framer-motion";
import LOGO from "@/assets/png/logo.png";

export const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        animate={{
          scale: [0.98, 1, 0.98],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <img
          src={LOGO}
          alt="Zestlark Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain invert"
        />
      </motion.div>
    </motion.div>
  );
};
