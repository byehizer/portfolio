"use client";

import { useProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetail({ onRequestClose }: { onRequestClose: () => void }) {
  const { selectedProject } = useProjectContext();

  if (!selectedProject) return null;

  const ContentComponent = selectedProject.ContentComponent;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{selectedProject.title}</h1>

      <Image
        src={selectedProject.image}
        alt={selectedProject.title}
        width={800}
        height={400}
        className="rounded-lg mb-4"
      />

      {ContentComponent ? <ContentComponent /> : <p>{selectedProject.description}</p>}

      <div className="flex justify-end">
        <button
          onClick={onRequestClose}
          className="inline-flex items-center gap-2 bg-[#F59E0B] text-white font-semibold px-4 py-2 mt-10 rounded-2xl hover:bg-[#d97706] transition-colors duration-300 hover:cursor-pointer"
        >
          <FaArrowLeft />
          Volver
        </button>
      </div>
    </div>
  );
}
