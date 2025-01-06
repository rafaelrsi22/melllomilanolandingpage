import { FaWandMagicSparkles } from "react-icons/fa6";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteyButton from "../WhiteyButton";
import StatusRadial from "../StatusRadial";
import { AnimatePresence, motion } from "framer-motion";

type AnchorUnderlinedProps = {
  children: React.ReactNode;
  href: string;
}

const AnchorUnderlined = ({
  children,
  href
}: AnchorUnderlinedProps) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <Link 
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      href={href}
    >
      {children}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 0.5}}
            exit={{opacity: 0}}
            transition={{
              duration: 0.2,
              ease: "easeOut"
            }}
            className="absolute w-full h-0.5 bg-white"
          />
        )}
      </AnimatePresence>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between py-12 z-10 relative">
      <Link
        href="/"
      >
        <Image 
          width={40}
          height={40}
          className="hover:scale-105 transition-all duration-300"
          src="https://upcdn.io/W142ivu/raw/landing-page/logo.png" 
          alt="Mello & Milano Logo" 
        />
      </Link>
      <ul className="flex items-center gap-16 text-sm select-none">
        <li>
          <AnchorUnderlined href="#">
            Portfolio
          </AnchorUnderlined>
        </li>
        <li>
          <AnchorUnderlined href="#">
            Quem &nbsp;somos
          </AnchorUnderlined>
        </li>
        <li className="relative">
          <WhiteyButton Icon={FaWandMagicSparkles}>
            Contrate-nos
          </WhiteyButton>
          <div className="absolute w-full flex items-center justify-center gap-2 py-2">
            <p className="mona-sans text-xs">3 Client Slot Open</p>
            <StatusRadial />
          </div>
        </li>
      </ul>
    </header>
  );
}