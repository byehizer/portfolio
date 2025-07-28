"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function ProjectDetails({
  project,
}: {
  project: typeof import("@/constants/projects").projects[0];
}) {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="rounded-lg mb-4"
      />
      <p className="mb-6">{project.description}</p>

      <div className="flex justify-end">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#F59E0B] text-white font-semibold px-4 py-2 rounded-2xl hover:bg-[#d97706] transition-colors duration-300"
        >
          <FaArrowLeft />
          Volver
        </Link>
      </div>
    </motion.div>
  );
}
