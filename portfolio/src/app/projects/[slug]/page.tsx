import { notFound } from "next/navigation";
import { projects } from "@/constants/projects";
import ProjectDetails from "./ProjectDetails";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // ⬅️ solución clave

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}
