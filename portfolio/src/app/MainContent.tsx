"use client";

import AboutMe from "@/components/AboutMe";
import ProjectDetail from "@/components/ProjectDetails";
import ProjectSection from "@/components/ProjectSection";
import Technologies from "@/components/Tecnologies";
import { useProjectContext } from "@/context/ProjectContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slideVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  animate: { opacity: 1, x: 0 },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
  }),
};

export default function MainContent() {
  const { selectedProject, setSelectedProject } = useProjectContext();

  // Estado local para controlar si estamos mostrando el detalle o no (para animaciones)
  const [showDetail, setShowDetail] = useState(false);

  // Sincronizar con el contexto al iniciar o cambiar selectedProject
  useEffect(() => {
    if (selectedProject){ 
      setShowDetail(true);
    }
    else setShowDetail(false);
  }, [selectedProject]);

  // Cuando termine la animación de salida, actualizamos el estado global para desmontar
  const handleExitComplete = () => {
    if (!showDetail) {
      setSelectedProject(null);
    }
  };

  // Función para pedir cerrar el detalle (pasa a estado local)
  const requestCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="2xl:pt-10 lg:w-[52%] mt-10"
    >
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {showDetail ? (
          <motion.div
            key="project-detail"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={1}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectDetail onRequestClose={requestCloseDetail} />
          </motion.div>
        ) : (
          <motion.div
            key="main-content"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={-1}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AboutMe />
            <ProjectSection />
            <Technologies />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
