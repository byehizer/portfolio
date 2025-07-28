"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import CELLS from "vanta/dist/vanta.cells.min";
import * as THREE from "three";
import { useProjectContext } from "@/context/ProjectContext";

export default function VantaBackground({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const pathname = usePathname();
  const { selectedProject, setSelectedProject }= useProjectContext();

  // Crear efecto solo una vez
  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = CELLS({
        el: vantaRef.current,
        THREE,
        color1: 0x3b82f6,
        color2: 0x1e3a8a,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
      });
      setVantaEffect(effect);
    }
    // Cleanup solo al desmontar componente
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, []);

  // Cuando cambia ruta, forzar resize para que se ajuste sin recrear
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.resize();
    }
  }, [selectedProject, vantaEffect]);

  return (
    <div className="relative w-full min-h-screen">
      <div
        ref={vantaRef}
        className="absolute inset-0 z-[-1] w-full h-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
