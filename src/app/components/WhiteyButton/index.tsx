import { motion } from "framer-motion";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

type WhiteyButtonProps = {
  children?: React.ReactNode;
  Icon?: IconType;
  animate?: boolean;
  delay?: number;
}

export default function WhiteyButton({
  children,
  Icon,
  animate,
  delay
}: WhiteyButtonProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <motion.button
      initial={animate && {opacity: 0, x: -10}}
      animate={{opacity: 1, x: 0}}
      transition={{ease: "easeOut", duration: 1, delay}}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`flex gap-1 items-center bg-white text-black font-bold py-1.5 px-2 rounded-full border-2 border-transparent hover:border-white hover:bg-black hover:text-white transition-all duration-200 select-none ps-4`}
    >
      {Icon && (
        <Icon size={18} className={`${isHovering ? 'opacity-0 translate-x-[-10px]' : 'opacity-100'} transition-all duration-300`} />
      )}
      <span className={`${isHovering && (Icon ? 'translate-x-[-15px]' : 'translate-x-[-5px]')} transition-all duration-300`}>
        {children}
      </span>
      <FaArrowRight size={12} className={`${isHovering ? 'opacity-100' : 'opacity-0 translate-x-[5px]'} transiiton-all duration-300`} />
    </motion.button>
  );  
}