import { motion } from "framer-motion";

export default function StatusRadial() {
  return (
    <div className="bg-[#22AA99]/15 w-6 h-6 rounded-full flex items-center justify-center">
      <motion.div
        initial={{scale: 1}}
        animate={{scale: 1.15}}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="bg-[#22AA99] w-3 h-3 rounded-full"
      />
    </div>
  );
}