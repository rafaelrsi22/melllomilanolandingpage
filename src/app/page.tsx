"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "./components/Header";
import Stars from "./components/Stars";
import WhiteyButton from "./components/WhiteyButton";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

export default function Home() {
  const [scale, setScale] = useState(1);
  const parallaxRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
      const handleScroll = () => {
        if (!parallaxRef.current) return;
        const scrollY = window.scrollY || 0;
        const speed = 0.3;

        parallaxRef.current.style.transform = `translateY(${scrollY * speed}px)`;
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="px-24">
        <Header />
        <Stars numberOfStars={2500} />
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
        ref={parallaxRef}
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
            className="absolute right-[15%] -top-[50%] pointer-events-none"
            src="https://upcdn.io/W142ivu/raw/landing-page/small-glow.png"
            alt=""
          />
          <img
            className="absolute -top-full -right-[4.5%] opacity-80 pointer-events-none"
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
          className="absolute top-0 left-0 z-30"
          style={{
            width: "2560px",
            height: "960px",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div 
            className="bg-red-600 w-80 h-32 absolute right-[25%] -top-[35%] z-20"
          />
          <img 
            className="absolute right-[21.85%] -top-[26.5%] z-30"
            src="https://upcdn.io/W142ivu/raw/landing-page/bucket-top.png"
          />
          <img
            className="absolute right-[20%] -top-[35%] pointer-events-none"
            src="https://upcdn.io/W142ivu/raw/landing-page/bucket.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
