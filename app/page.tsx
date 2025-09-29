"use client";

import frontCard from "../public/back3.png";
import headerCard from "../public/front3.png";
import Image from "next/image";
import { FireworksBackground } from "@/components/FireWorks";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [imageOneLoaded, setImageOneLoaded] = useState(false);
  const [imageTwoLoaded, setImageTwoLoaded] = useState(false);

  const flapRef = useRef<HTMLImageElement>(null);

  const isLoadComplete = imageOneLoaded && imageTwoLoaded;

  const [moveCard, setMoveCard] = useState(false);

  useEffect(() => {
    if (flapRef.current && open) {
      gsap.fromTo(
        flapRef.current,
        { rotateX: 0 },
        {
          rotateX: -150,
          duration: 0.8,
          ease: "power2.inOut",
          transformOrigin: "top center",
        },
      );

      const id = setTimeout(() => {
        setMoveCard(true);
      }, 800);

      return () => clearTimeout(id);
    }
  }, [open]);

  const gender = "M" as "M" | "W";

  return (
    <div className="relative max-w-4xl h-dvh m-auto flex flex-col justify-center">
      <div
        className={cn(
          "fixed w-[350px] h-[230px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2",
          moveCard && "-translate-y-1/5 duration-800",
        )}
      >
        <h1 className="-top-15 absolute -translate-x-1/2 left-1/2 text-center text-2xl font-bold">
          몰리의 성별은?
        </h1>

        <div className="size-full bg-[#587389]" />

        <div
          className={cn(
            "absolute bg-white w-3/4 h-4/5 rounded-2xl -translate-x-1/2 left-1/2 -translate-y-1/2 -bottom-18 z-20 transition flex flex-col items-center justify-center gap-3 shadow",
            !isLoadComplete && "hidden",
            moveCard && "-translate-y-65 duration-800",
            gender === "W" ? "bg-pink-200" : "bg-blue-200",
          )}
        >
          {gender === "W" ? (
            <>
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                👧
              </h1>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                딸이에요!
              </h3>
              <p className="">
                사랑스러운 공주님을 <br /> 만나게 되실 거예요 💕
              </p>
            </>
          ) : (
            <>
              <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
                👦
              </h1>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                아들이에요!
              </h3>
              <p className="leading-7">멋진 왕자님을 만나게 되실 거예요 💙</p>
            </>
          )}
        </div>

        <Image
          className="absolute z-30 top-0 shadow-2xl"
          src={frontCard}
          alt="card"
          width={350}
          height={260}
          priority
          onLoadingComplete={() => setImageOneLoaded(true)}
        />

        <Image
          onClick={() => !open && setOpen(!open)}
          className={cn(
            "absolute z-40 top-0",
            moveCard && "z-10",
            !open && "cursor-pointer",
          )}
          ref={flapRef}
          src={headerCard}
          alt="Card"
          width={530}
          height={186}
          onLoadingComplete={() => setImageTwoLoaded(true)}
          priority
        />
      </div>

      {moveCard && (
        <FireworksBackground
          className="absolute inset-0 flex items-center justify-center rounded-xl"
          population={3}
        />
      )}
    </div>
  );
}
