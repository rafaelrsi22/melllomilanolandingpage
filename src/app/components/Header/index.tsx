import { FaWandMagicSparkles } from "react-icons/fa6";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteyButton from "../WhiteyButton";
import StatusRadial from "../StatusRadial";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-12 z-20 relative">
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
          <div className="hover:scale-105 transition-all duration-150">
            <Link 
              className="transform" 
              href="#"
              >
              Portfolio
            </Link>
          </div>
        </li>
        <li>
          <div className="hover:scale-105 transition-all duration-150">
            <Link href="#">
              Quem &nbsp;somos
            </Link>
          </div>
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