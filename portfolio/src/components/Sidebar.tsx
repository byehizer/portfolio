"use client"
import { navLinks } from "@/constants/navlinks";
import { useProjectContext } from "@/context/ProjectContext";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  const { selectedProject, setSelectedProject } = useProjectContext();

  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); 


    if (selectedProject) {
      setSelectedProject(null);

      await new Promise((res) => setTimeout(res, 800)); 
    }

    
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
  <aside className="lg:sticky lg:top-0 lg:max-h-screen 2xl:max-h-[90vh] lg:w-[48%] lg:flex lg:flex-col lg:py-10 text-white">
  {/* Parte superior fija: foto y nombre */}
  <div className="flex-shrink-0">
    <div className="w-[70%] flex justify-center items-center">
      <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-950">
        <Image
          src="/profile.jpeg"
          alt="Foto de Ehizer Valero"
          width={160}
          height={160}
          className="object-cover object-bot w-full h-full"
        />
      </div>
    </div>
    <h1 className="mt-4 text-6xl font-poppins tracking-tight">Ehizer Valero</h1>
    <h2 className="ml-1 mt-4 text-lg font-poppins tracking-tight">
      Full-Stack Developer
    </h2>
  </div>

  {/* Parte scrollable */}
  <div className="xl:mt-6 xl:pr-1 xl:overflow-y-auto xl:flex-1 2xl:max-h-[40%] sidebar-scroll">
    <p className="ml-1 max-w-2xs leading-relaxed font-inter">
      Soy un desarrollador full stack con pasión por construir experiencias
      digitales accesibles y visualmente impecables en la web
    </p>

    <nav className="hidden lg:block mt-10" aria-label="Navegación interna">
      <ul className="space-y-1 max-w-max">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="ml-1 group flex items-center py-3 font-inter text-xs uppercase tracking-widest text-slate-300 hover:text-[#f59e0b] transition"
            >
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-[#f59e0b] transition-all"></span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </div>

  {/* Parte inferior fija: redes sociales */}
  <ul className="flex space-x-6 mt-8 ml-1 flex-shrink-0">
    <a
      href="https://github.com/byehizer"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition"
    >
      <FaGithub size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/ehizer-valero-80994526a/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition"
    >
      <FaLinkedin size={24} />
    </a>
  </ul>
</aside>


  );
}
