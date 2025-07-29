"use client";

import { useEffect, useRef, useState } from "react";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";

export default function VantaBackground({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof CELLS> | null>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = CELLS({
        el: vantaRef.current,
        THREE,
        color1: 0x3b82f6,
        color2: 0x1e3a8a,
        scale: 1.0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <div className="relative w-full min-h-screen">
      <div
        ref={vantaRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
