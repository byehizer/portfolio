// components/MainContent.tsx
"use client";

import AboutMe from "@/components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Technologies from "@/components/Tecnologies";
import { useProjectContext } from "@/context/ProjectContext";
import { motion } from "framer-motion";
import ProjectDetail from "./projects/[slug]/ProjectDetails";

export default function MainContent() {
    const { selectedProject } = useProjectContext();
 return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="2xl:pt-10 lg:w-[52%] mt-10"
    >
      {selectedProject ? (
        <ProjectDetail />
      ) : (
        <>
          <AboutMe />
          <ProjectSection />
          <Technologies />
        </>
      )}
    </motion.main>
  );
}

