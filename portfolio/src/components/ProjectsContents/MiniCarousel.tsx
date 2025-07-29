"use client";

import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function MiniCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const { openModal } = useModal();

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden h-[400px] rounded-lg bg-slate-800 shadow-lg">
      {/* Contenedor con todas las imágenes */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Imagen ${idx + 1}`}
            className="w-full flex-shrink-0 object-contain h-[400px] cursor-pointer"
            onClick={() =>
              openModal(
                <img
                  src={img}
                  alt="Imagen grande"
                  className="w-full h-[80vh] object-contain"
                />
              )
            }
          />
        ))}
      </div>

      {/* Botones */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 cursor-pointer transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 cursor-pointer transition"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
}
