import { motion } from "framer-motion";
import { FaWandMagicSparkles } from "react-icons/fa6";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteyButton from "../WhiteyButton";
import StatusRadial from "../StatusRadial";

export default function Header() {
  const MotionLink = motion.create(Link);

  return (
    <header className="flex items-center justify-between py-12 z-20 relative">
      <MotionLink
        initial={{scale: 0, rotate: -35}}
        animate={{scale: 1, rotate: 0}}
        transition={{type: "spring", stiffness: 200}}
        href="/"
      >
        <Image 
          width={40}
          height={40}
          className="hover:scale-105 transition-all duration-300"
          src="https://upcdn.io/W142ivu/raw/landing-page/logo.png" 
          alt="Mello & Milano Logo" 
        />
      </MotionLink>
      <ul className="flex items-center gap-16 text-sm select-none">
        <motion.li
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut"}}
        >
          <div className="hover:scale-105 transition-all duration-150">
            <Link 
              className="transform" 
              href="#"
              >
              Portfolio
            </Link>
          </div>
        </motion.li>
        <motion.li
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut", delay: 0.2}}
        >
          <div className="hover:scale-105 transition-all duration-150">
            <Link href="#">
              Quem &nbsp;somos
            </Link>
          </div>
        </motion.li>
        <motion.li className="relative"
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut", delay: 0.4}}
        >
          <WhiteyButton Icon={FaWandMagicSparkles}>
            Contrate-nos
          </WhiteyButton>
          <div className="absolute w-full flex items-center justify-center gap-2 py-2">
            <p className="mona-sans text-xs">3 Client Slot Open</p>
            <StatusRadial />
          </div>
        </motion.li>
      </ul>
    </header>
  );
}