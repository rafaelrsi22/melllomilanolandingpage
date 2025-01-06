"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Stars from "./components/Stars";
import WhiteyButton from "./components/WhiteyButton";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { DiPython, DiAngularSimple } from "react-icons/di";
import { motion } from "framer-motion";

export default function Home() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleResize() {
      const scaleW = window.innerWidth / 2560;
      const scaleH = window.innerHeight / 960;
      setScale(Math.min(scaleW, scaleH));
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="px-64">
        <Header />
        <Stars numberOfStars={4500} />
        <main className="mt-16 z-20 relative">
          <div className="flex flex-col gap-4">
            <h1 className="ibm font-black text-4xl">
              Conectando inovação e <br />
              excelência em cada linha <br />
              de código <br />
            </h1>
            <p className="tracking-wider text-xl">
              Mais que códigos, construímos parcerias <br />
              duradouras e resultados extraordinários
            </p>
          </div>

          <div className="mt-40">
            <WhiteyButton>Interessado? Contrate-nos</WhiteyButton>
            <div className="flex items-center gap-3 text-xs mt-2 px-2">
              <div className="flex">
                <Image
                  alt="placeholder user image 3"
                  width={35}
                  height={35}
                  className="border-2 border-white rounded-full z-30"
                  src="https://upcdn.io/W142ivu/raw/landing-page/placeholder-usr-3.png"
                />
                <Image
                  alt="placeholder user image 2"
                  width={35}
                  height={35}
                  className="border-2 border-white rounded-full z-20 -ml-5"
                  src="https://upcdn.io/W142ivu/raw/landing-page/placeholder-usr-2.png"
                />
                <Image
                  alt="placeholder user image 1"
                  width={35}
                  height={35}
                  className="border-2 border-white rounded-full z-10 -ml-5"
                  src="https://upcdn.io/W142ivu/raw/landing-page/placeholder-usr-1.png"
                />
              </div>
              <p className="text-white/60">Mais de 50 clientes satisfeitos.</p>
            </div>
          </div>
        </main>
      </div>

      <div 
        className="relative mt-24 w-screen h-screen"
      >
        <div
          className="absolute top-0 left-0 z-10"
          style={{
            width: "2560px",
            height: "960px",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <img
            className="absolute right-[15%] -top-[45%] pointer-events-none"
            src="https://upcdn.io/W142ivu/raw/landing-page/small-glow.png"
            alt=""
          />
          <img
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
        <div className="bg-[#07080D] h-full -mt-2 z-20 relative"></div>
        <div
          className="absolute top-0 left-0 z-30 select-none"
          style={{
            width: "2560px",
            height: "960px",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div className="w-80 h-32 absolute right-[25%] -top-[20%] z-10">
            <motion.div
              initial={{rotate: 12}}
              whileHover={{ scale: 1.1, y: -80, rotate: 45 }}
              transition={{ type: "spring", stiffness: 45 }}
              className="inline-block relative top-6 -left-8 rotate-12 cursor-pointer"
            >
              <BiLogoPostgresql size={96} />
            </motion.div>
            <motion.div 
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -80, rotate: -34 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="inline-block relative top-4 -left-16 cursor-pointer"
            >
              <FaReact size={118} />
            </motion.div>
            <motion.div 
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -40, rotate: 45 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="inline-block relative right-24 -top-6 rotate-3 cursor-pointer"
            >
              <SiRedux size={90} />
            </motion.div>
            <motion.div
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -125, rotate: -32 }}
              transition={{ type: "spring", stiffness: 40 }}
              className="inline-block relative -top-20 left-24 cursor-pointer"
            >
              <FaJsSquare size={90} />
            </motion.div>
            <motion.div 
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -60, rotate: -24 }}
              transition={{ type: "spring", stiffness: 60 }}
              className="inline-block relative -top-20 left-24 -rotate-6 cursor-pointer"
            >
              <FaGithub size={92} />
            </motion.div>
            <motion.div 
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -80, rotate: 24 }}
              transition={{ type: "spring", stiffness: 60 }}
              className="inline-block relative -top-24 left-14 rotate-8 cursor-pointer"
            >
              <IoLogoFigma size={92} color="#818181" />
            </motion.div>
            <motion.div
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -60, rotate: -35 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="inline-block relative -top-52 left-[18rem] cursor-pointer"
            >
              <DiAngularSimple size={106} color="#818181" />
            </motion.div>
            <motion.div 
              initial={{rotate: 0}}
              whileHover={{ scale: 1.1, y: -60, rotate: 18 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="inline-block relative -top-48 left-40 -rotate-6 cursor-pointer"
            >
              <DiPython size={98} />
            </motion.div>
            {/* <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-10 left-48 -rotate-2 cursor-pointer z-20"
            >
              <FaGithub size={92} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-12 left-28 rotate-12 cursor-pointer z-30"
            >
              <FaJsSquare size={90} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-2 left-8 cursor-pointer z-20"
            >
              <FaReact size={118} />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-6 left-56 -rotate-2 cursor-pointer z-20"
              style={{ color: '#818181' }} // Estilo inline para cores específicas
            >
              <IoLogoFigma size={92} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-2 left-72 rotate-8 cursor-pointer z-20"
              style={{ color: '#5f5f5f' }} // Estilo inline para cores específicas
            >
              <DiAngularSimple size={106} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1, y: -10, rotate: 12 }}
              transition={{ type: "spring", stiffness: 300, rotate: 12 }}
              className="absolute top-8 -left-8 rotate-12 cursor-pointer z-20"
            >
              <BiLogoPostgresql size={96} />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="absolute top-10 left-64 rotate-6 cursor-pointer z-20"
            >
              <DiPython size={98} />
            </motion.div> */}
          </div>
          <img 
            className="absolute right-[21.85%] -top-[11.5%] z-30 pointer-events-none"
            src="https://upcdn.io/W142ivu/raw/landing-page/bucket-top.png"
          />
          <img
            className="absolute right-[20%] -top-[20%] pointer-events-none"
            src="https://upcdn.io/W142ivu/raw/landing-page/bucket.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
