import AboutMe from "@/components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Technologies from "@/components/Tecnologies";
import Image from "next/image";

export default function Home() {
  return (
    <main className="2xl:pt-10 lg:w-[52%] mt-10 ">
      <AboutMe/>
      <ProjectSection/>
      <Technologies/>
    </main>
  );
}
