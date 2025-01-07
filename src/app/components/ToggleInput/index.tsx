import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type ToggleSwitchProps = {
  onToggleChange?: (value: boolean) => void;
}

export default function ToggleSwitch({
  onToggleChange
}: ToggleSwitchProps) {
  const [toggled, setToggled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (toggled) {
      controls.start({
        y: ["0px", "-3px", "0px", "3px", "0px"],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    } else {
      controls.stop();
      controls.set({ y: "0px" });
    }
  }, [toggled, controls]);

  useEffect(() => {
    onToggleChange && onToggleChange(toggled);
  }, [toggled]);

  return (
    <button
      className={`${toggled ? "bg-[#23db76]" : "bg-[#EF5858]"} w-14 p-1 rounded-full flex items-center cursor-pointer transition-colors duration-300`}
      onClick={() => setToggled((prev) => !prev)}
    >
      <motion.div
        className="bg-white rounded-full h-6 w-6 shadow-md"
        animate={{
          x: toggled ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        initial={false}
      />
      {toggled && (
        <motion.div
          className="absolute top-0 left-0 h-full w-full rounded-full pointer-events-none"
          animate={controls}
        />
      )}
    </button>
  );
}