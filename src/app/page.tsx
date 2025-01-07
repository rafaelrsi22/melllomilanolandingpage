"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Stars from "./components/Stars";
import WhiteyButton from "./components/WhiteyButton";
import MainBucket from "./components/MainBucket";
import ToggleInput from "./components/ToggleInput";
import { motion } from "framer-motion";
import ScrollingText from "./components/ScrollingText";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [workWithUsToggled, setWorkWithUsToggled] = useState<boolean>(false);

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
        <Stars numberOfStars={1500} />
        <main className="mt-16 z-20 relative">
          <div className="flex flex-col gap-4">
            <motion.h1
              initial={{x: -10, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ease: "easeOut", duration: 1.5}}
              className="ibm font-black text-4xl"
            >
              Conectando inovação e <br />
              excelência em cada linha <br />
              de código <br />
            </motion.h1>
            <motion.p
              initial={{x: 10, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ease: "easeOut", duration: 1.5, delay: 0.5}}
              className="tracking-wider text-xl"
            >
              Mais que códigos, construímos parcerias <br />
              duradouras e resultados extraordinários
            </motion.p>
          </div>

          <div className="mt-40">
            <WhiteyButton animate delay={1}>Interessado? Contrate-nos</WhiteyButton>
            <motion.div
              initial={{opacity: 0, x: 10}}
              animate={{opacity: 1, x: 0}}
              transition={{ease: "easeOut", duration: 1, delay: 1.5}}
              className="flex items-center gap-3 text-xs mt-2 px-2"
            >
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
            </motion.div>
          </div>
        </main>
      </div>

      <div 
        className="relative mt-24 w-screen"
      >
        <MainBucket scale={scale} />
        <div className="bg-[#07080D] h-full -mt-2 z-20 relative w-full">
          <img
            src={workWithUsToggled ? "https://upcdn.io/W142ivu/raw/landing-page/greenborder.png" : "https://upcdn.io/W142ivu/raw/landing-page/redborder.png"}
            className="w-full h-full pointer-events-none opacity-gradient absolute"
            style={{
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)'
            }}
          />
          <div className="px-64 pt-24 z-30 relative">
            <h2 className="ibm font-black text-4xl">
              Quando as empresas <br />
              <span className="flex items-center gap-2">
                <span className={`${workWithUsToggled ? "text-[#23db76]" : "text-[#EF5858]"}`}>
                  {workWithUsToggled ? "sim" : "não"}
                </span>
                <ToggleInput onToggleChange={setWorkWithUsToggled} />
                trabalham conosco
              </span>
            </h2>
            <p className="text-[#EAEAEA] text-semibold mt-6 text-lg">Temos uma triste noticia...</p>
            <div className="mt-8">
              <div className="flex w-full">
                <div className="flex-1">
                  <img
                    className="w-full"
                    src="https://upcdn.io/W142ivu/raw/landing-page/dashedsquare.png"
                  />
                </div>
                <div className="flex-1">
                  <img 
                    className="w-full"  
                    src="https://upcdn.io/W142ivu/raw/landing-page/dashedsquare.png"
                  />
                </div>
                <div className="flex-1">
                  <img 
                    className="w-full"
                    src="https://upcdn.io/W142ivu/raw/landing-page/dashedsquare.png"
                  />
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1">
                  <img
                    className="w-full"
                    src="https://upcdn.io/W142ivu/raw/landing-page/dashedsquare.png"
                  />
                </div>
                <div className="flex-1">
                  <img 
                    className="w-full"  
                    src="https://upcdn.io/W142ivu/raw/landing-page/dashedsquare.png"
                  />
                </div>
                <div className="flex-1">
                  <img 
                    className="w-full"
                    src="https://upcdn.io/W142ivu/raw/landing-page/dashedsquare.png"
                  />
                </div>
              </div>
            </div>
            <div className="mt-52">

            </div>
          </div>
          <ScrollingText />
          <img 
            className="w-full"
            src="https://upcdn.io/W142ivu/raw/landing-page/bottom-black2.png" 
          />
        </div>
      </div>
      <div className="w-screen h-36 bg-[#030306]">

      </div>
    </div>
  );
}
