"use client";

import { useModal } from "@/context/ModalContext";
import { useProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTrello } from "react-icons/si";

export default function ProjectDetail({
  onRequestClose,
}: {
  onRequestClose: () => void;
}) {
  
  const { selectedProject } = useProjectContext();
  const { openModal }= useModal();

  useEffect(() => {
    async function scrollToTopWithDelay() {
      if (selectedProject) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    scrollToTopWithDelay();
  }, [selectedProject]);

  if (!selectedProject) return null;

  const ContentComponent = selectedProject.ContentComponent;

  return (
    <div className="p-8">
      <h1 className="text-6xl font-poppins text-center mb-5 text-white">{selectedProject.title}</h1>

      <Image
        src={selectedProject.image}
        alt={selectedProject.title}
        width={1200}
        height={700}
        className="rounded-lg mb-4 cursor-pointer"
        onClick={() => {
          openModal(<img src={selectedProject.image} alt="Imagen grande" className="w-full h-[80vh] object-contain" />);
        }}
      />

      {ContentComponent ? (
        <ContentComponent />
      ) : (
        <p>{selectedProject.description}</p>
      )}

      <div className="gap-4 mb-6 w-full text-center mt-5">
        {selectedProject.githubUrl && (
          <a
            href={selectedProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins bg-gray-800 text-white font-semibold px-4 py-2 rounded-2xl hover:bg-gray-700 transition-colors duration-300 mr-4"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {selectedProject.trelloUrl && (
          <a
            href={selectedProject.trelloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2  font-poppins text-white font-semibold px-4 py-2 rounded-2xl bg-[#F59E0B]  hover:bg-[#d97706] transition-colors duration-300"
          >
            <SiTrello /> Trello
          </a>
        )}
      </div>

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
