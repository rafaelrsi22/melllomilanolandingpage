import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { DiPython, DiAngularSimple } from "react-icons/di";
import { useState } from "react";
import { IconType } from "react-icons";
import random from "@/app/utils/random";
import { motion } from "framer-motion";

type BucketIconProps = {
  Icon: IconType;
  className: string;
  initialRotate: string;
  initialDelay: number;
  finalRotate: string;
  finalTranslate: string;
  isHovering: boolean;
  size: number;
}

const BucketIcon = ({
  Icon,
  className,
  initialRotate,
  initialDelay,
  finalRotate,
  finalTranslate,
  isHovering,
  size
}: BucketIconProps) => {
  return (
    <div
      className={`inline-block relative ${className}`}
    >
      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{type: "spring", stiffness: random(150, 250), delay: initialDelay}}
        className={`${isHovering ? "animate-float" : ""}`}
        style={{
          animationDelay: `${random(600, 1000)}ms`
        }}
      >
        <Icon 
          className={`transform  ${isHovering ? `${finalRotate} ${finalTranslate}` : `${initialRotate}`} transition-all duration-1000 ease-in-out`}
          size={size}
        />
      </motion.div>
    </div>
  );
}

type MainBucketProps = {
  scale: number;
}

export default function MainBucket({
  scale
}: MainBucketProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <div
        className="absolute top-0 left-0 z-10"
        style={{
          width: "2560px",
          height: "960px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <motion.img
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1.5, delay: 1, ease: "easeInOut"}}
          className="absolute right-[15%] -top-[45%] pointer-events-none"
          src="https://upcdn.io/W142ivu/raw/landing-page/small-glow.png"
          alt=""
        />
        <motion.img
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1.5, delay: 0.5, ease: "easeInOut"}}
          className="absolute -top-[95%] -right-[4.5%] pointer-events-none"
          src="https://upcdn.io/W142ivu/raw/landing-page/glow-ring.png"
          alt=""
        />
      </div>
      <img
        className="relative z-20"
        src="https://upcdn.io/W142ivu/raw/landing-page/bottom-line.png"
        alt=""
      />
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: 'easeInOut', duration: 0.5}}
        className="absolute top-0 left-0 z-20 select-none"
        style={{
          width: "2560px",
          height: "960px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <div 
          className="w-80 h-32 absolute right-[25%] -top-[20%] z-10 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <BucketIcon
            Icon={BiLogoPostgresql}
            isHovering={isHovering}
            className="top-10 -left-8"
            initialRotate="rotate-12"
            finalRotate="rotate-45"
            finalTranslate="translate-y-[-260px] translate-x-[-80px]"
            size={68}
            initialDelay={0.1}
          />
          <BucketIcon
            Icon={FaReact}
            isHovering={isHovering}
            className="top-10 -left-12"
            initialRotate="rotate-12"
            finalRotate="-rotate-12"
            finalTranslate="translate-y-[-160px] translate-x-[-200px]"
            size={64}
            initialDelay={0.2}
          />
          <BucketIcon
            Icon={SiRedux}
            isHovering={isHovering}
            className="right-10 top-4"
            initialRotate="rotate-12"
            finalRotate="rotate-45"
            finalTranslate="translate-y-[-320px] translate-x-[10px]"
            size={72}
            initialDelay={0.3}
          />
          <BucketIcon
            Icon={FaJsSquare}
            isHovering={isHovering}
            className="top-12 right-36"
            initialRotate="-rotate-6"
            finalRotate="rotate-12"
            finalTranslate="translate-y-[-320px] translate-x-[-80px]"
            size={70}
            initialDelay={0.4}
          />
          <BucketIcon
            Icon={FaGithub}
            isHovering={isHovering}
            className="-top-14 left-40"
            initialRotate="rotate-6"
            finalRotate="-rotate-12"
            finalTranslate="translate-y-[-300px] translate-x-[80px]"
            size={72}
            initialDelay={0.5}
          />
          <BucketIcon
            Icon={IoLogoFigma}
            isHovering={isHovering}
            className="-top-4 left-16"
            initialRotate="rotate-12"
            finalRotate="-rotate-12"
            finalTranslate="translate-y-[-280px] translate-x-[220px]"
            size={70}
            initialDelay={0.6}
          />
          <BucketIcon
            Icon={DiAngularSimple}
            isHovering={isHovering}
            className="-top-8 left-16"
            initialRotate="-rotate-12"
            finalRotate="rotate-45"
            finalTranslate="translate-y-[-210px] translate-x-[240px]"
            size={68}
            initialDelay={0.7}
          />
          <BucketIcon
            Icon={DiPython}
            isHovering={isHovering}
            className="-top-8 left-14"
            initialRotate="rotate-6"
            finalRotate="rotate-12"
            finalTranslate="translate-y-[-120px] translate-x-[240px]"
            size={64}
            initialDelay={0.8}
          />
        </div>
        <img 
          className="absolute right-[22%] -top-[12.5%] z-30 pointer-events-none"
          src="https://upcdn.io/W142ivu/raw/landing-page/bucket-top.png"
        />
        <img
          className="absolute right-[20%] -top-[20%] pointer-events-none"
          src="https://upcdn.io/W142ivu/raw/landing-page/bucket.png"
          alt=""
        />
      </motion.div>
    </>
  );
}