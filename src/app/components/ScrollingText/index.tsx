import { motion } from "framer-motion";

export default function ScrollingText() {
  return (
    <div className="overflow-hidden transform rotate-[-4deg] w-screen">
      <motion.div 
        className="whitespace-nowrap flex gap-8 items-center"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {[...Array(15)].map((_, i) => (
          <span 
            key={i} 
            className="text-white/20 text-3xl font-black ibm"
          >
            mello & milano
          </span>
        ))}
      </motion.div>
    </div>
  );
}