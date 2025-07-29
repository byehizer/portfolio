"use client";

import { useState } from "react";
import { FaCopy, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { toast } from "react-toastify";

export default function AboutMe() {
  const [copied, setCopied] = useState(false);
  const email = "Ehizerjesus08@gmail.com"; // Reemplaza con tu email real
  const cvUrl = "https://portfolioehizer.vercel.app/ehizer.pdf"; // Reemplaza con tu URL real al PDF

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast.success("Correo copiado al portapapeles");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  return (
    <section id="sobremi" className="max-w-4xl mx-auto font-inter scroll-mt-20 px-4">
      <h2 className="text-4xl font-poppins mb-6 text-white">Sobre mí</h2>

      <p className="text-lg text-slate-300 leading-relaxed">
        Soy un <strong className="text-white">desarrollador full stack</strong> con una fuerte pasión por construir aplicaciones modernas que sean funcionales, limpias y eficientes. Disfruto especialmente del diseño de interfaces y de la lógica del backend, encontrando equilibrio entre ambos mundos.
      </p>

      <p className="text-lg text-slate-300 leading-relaxed mt-4">
        A lo largo de mi formación, he trabajado en diversos <strong className="text-white">proyectos académicos</strong> que me han permitido aplicar buenas prácticas de desarrollo y experimentar con distintas tecnologías. Uno de los proyectos más destacados en los que he trabajado es <strong className="text-white">Coinbase</strong>, una plataforma enfocada en la venta de billetes antiguos, donde desarrollé tanto el frontend como la lógica de negocio.
      </p>

      <p className="text-lg text-slate-300 leading-relaxed mt-4">
        Me considero una persona <strong className="text-white">autodidacta</strong>, siempre en busca de nuevos desafíos y aprendizajes. Estoy constantemente explorando nuevas tecnologías y herramientas, con el objetivo de mejorar como desarrollador y crear soluciones cada vez más completas y robustas.
      </p>

      <p className="text-lg text-slate-300 leading-relaxed mt-4">
        Además de programar, disfruto mucho de los <strong className="text-white">videojuegos</strong>, los cuales me inspiran por su nivel de detalle, diseño de experiencia y lógica detrás de cada mecánica.
      </p>

      {/* Bloque de contacto */}
      <div className="mt-10 p-6 rounded-2xl text-white bg-slate-800">
        <h3 className="text-xl font-poppins mb-5 text-center">Contacto</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <span className="text-lg font-inter break-all">{email}</span>

          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-2 text-sm bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg transition flex items-center gap-1 cursor-pointer"
            >
              <FaCopy /> {copied ? "Copiado!" : "Copiar"}
            </button>

            <button
              onClick={handleGmail}
              className="px-3 py-2 text-sm bg-[#F59E0B] hover:bg-[#D97706] rounded-lg transition flex items-center gap-1 cursor-pointer"
            >
              <FaEnvelope /> Gmail
            </button>

            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm bg-slate-600 hover:bg-slate-500 rounded-lg transition flex items-center gap-1"
            >
              <FaFilePdf /> Ver CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
