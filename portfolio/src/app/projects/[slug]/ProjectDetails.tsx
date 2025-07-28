"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { useProjectContext } from "@/context/ProjectContext";

export default function ProjectDetail() {
  const { selectedProject, setSelectedProject } = useProjectContext();

  if (!selectedProject) return null;

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-4">{selectedProject.title}</h1>

      <Image
        src={selectedProject.image}
        alt={selectedProject.title}
        width={800}
        height={400}
        className="rounded-lg mb-4"
      />

      <p className="mb-6">{selectedProject.description}</p>

      <div className="flex justify-end">
        <button
          onClick={() => setSelectedProject(null)}
          className="inline-flex items-center gap-2 bg-[#F59E0B] text-white font-semibold px-4 py-2 rounded-2xl hover:bg-[#d97706] transition-colors duration-300"
        >
          <FaArrowLeft />
          Volver
        </button>
      </div>
    </motion.div>
  );
}
    