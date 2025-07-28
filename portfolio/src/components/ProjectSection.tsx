"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiReact, SiNodedotjs, SiStripe, SiPrisma, SiMysql, SiSendgrid } from "react-icons/si";
import { projects } from "@/constants/projects";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

   const handleClickProject = (slug: string) => {
      window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
      setTimeout(() => {
    router.push(`/projects/${slug}`);
  }, 100);
  };

  return (
   <section id="projects" className="my-10 w-full flex flex-col items-center scroll-mt-20">
  <h2 className="text-3xl font-poppins  text-white">Proyectos</h2>

  <div className="relative w-full max-w-5xl flex items-center justify-center py-10 sm:px-8 overflow-x-hidden">
    {/* Carrusel */}
    <div className="flex items-center justify-center w-full h-[380px] relative ">
      {projects.map((project, index) => {
        const isActive = index === currentIndex;
        const isLeft =
          index === (currentIndex - 1 + projects.length) % projects.length;
        const isRight = index === (currentIndex + 1) % projects.length;

        let positionClass =
          "absolute transition-all duration-500 ease-in-out ";

        if (isActive) {
          positionClass +=
            "scale-100 opacity-100 z-20 translate-x-0";
        } else if (isLeft) {
          positionClass +=
            "scale-90 opacity-50 z-10 -translate-x-[60%]";
        } else if (isRight) {
          positionClass +=
            "scale-90 opacity-50 z-10 translate-x-[60%]";
        } else {
          positionClass += "opacity-0 pointer-events-none";
        }

        return (
          <div
            key={project.title}
            className={`${positionClass} w-72 sm:w-80 h-full bg-slate-800 rounded-xl p-4 text-white shadow-lg flex flex-col cursor-pointer ${
              isActive ? "hover:tilt-left" : ""
            }`}
            onClick={() => handleClickProject(project.slug)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-center">
              {project.title}
            </h3>
            <p className="mt-5 text-sm text-slate-300">
              {project.description}
            </p>
            
                {isActive && project.techIcons && (
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.techIcons.map((icon, i) => (
                      <img
                        key={i}
                        src={`https://cdn.simpleicons.org/${icon}/white`}
                        alt="tech icon"
                        className="w-6 h-6 "
                      />
                    ))}
                  </div>
                )}
          </div>
        );
      })}
    </div>

    {/* Botones */}
    <button
      onClick={goToPrev}
      className="z-30 p-3 bg-yellow-500 text-black rounded-full shadow hover:scale-105 transition absolute left-2 sm:left-4 bottom-2 sm:bottom-auto"
    >
      <FaArrowLeft />
    </button>
    <button
      onClick={goToNext}
      className="z-30 p-3 bg-yellow-500 text-black rounded-full shadow hover:scale-105 transition absolute right-2 sm:right-4 bottom-2 sm:bottom-auto"
    >
      <FaArrowRight />
    </button>
  </div>
</section>

  );
}
