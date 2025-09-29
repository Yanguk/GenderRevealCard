"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Envelope() {
  const flapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flapRef.current) {
      gsap.fromTo(
        flapRef.current,
        { rotateX: 0 },
        {
          rotateX: -150,
          duration: 1.2,
          ease: "power2.inOut",
          transformOrigin: "top center",
        },
      );
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-400">
      <div className="relative w-56 h-40 [perspective:1000px]">
        {/* 봉투 몸통 */}
        <div className="absolute bottom-0 w-full h-full rounded-md border-2 border-yellow-700 bg-yellow-300" />

        {/* 봉투 플랩 */}
        <div
          ref={flapRef}
          className="absolute top-0 left-0 w-full h-1/2 rounded-t-md border-x-2 border-t-2 border-yellow-700 bg-yellow-400 origin-top"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>
    </div>
  );
}
