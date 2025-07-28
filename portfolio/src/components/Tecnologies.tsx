"use client";
import { technologies } from "@/constants/tecnologies";

export default function Technologies() {
  return (
    <section className="my-20 px-4 sm:px-10 scroll-mt-20" id="tecnologias">
      <h2 className="text-3xl font-poppins text-center mb-16 text-white">
        Tecnologías que manejo
      </h2>

      <div className="flex flex-col gap-16">
        {technologies.map((category) => (
          <div key={category.category} className="w-full">
            <h3 className="text-2xl font-poppins mb-8 text-yellow-400 text-center">
              {category.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {category.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 bg-slate-800 p-6 rounded-xl shadow-md hover:scale-105 transition"
                >
                  {tech.icon}
                  <span className="text-white font-inter text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
