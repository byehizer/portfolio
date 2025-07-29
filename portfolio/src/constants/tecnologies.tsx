import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiSpringboot,
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiExpress,
  SiMysql,
  SiFirebase,
  SiJunit5,
  SiJsonwebtokens,
  SiStripe,
  SiSendgrid,
  SiJavascript,
} from "react-icons/si";

export const technologies=[
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-blue-500 text-5xl" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white text-5xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-5xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-white dark:text-white text-5xl" /> },
      { name: "Java", icon: <FaJava className="text-red-600 text-5xl" /> },

    ],
  },
  {
    category: "Bases de Datos",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800 text-5xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-5xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500 text-5xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-black dark:text-white text-5xl" /> },
      { name: "JWT", icon: <SiJsonwebtokens className="text-blue-600 text-5xl" /> },
      { name: "Stripe", icon: <SiStripe className="text-purple-500 text-5xl" /> },
      { name: "SendGrid", icon: <SiSendgrid className="text-blue-400 text-5xl" /> },
    ],
  },
  {
    category: "Tecnologías que estoy aprendiendo",
    items: [
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-5xl" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-5xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-5xl" /> },
      { name: "JUnit", icon: <SiJunit5 className="text-green-700 text-5xl" /> },
    ],
  },
];