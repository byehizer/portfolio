"use client";
import { createContext, useContext, useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface ProjectContextType {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProjectContext debe usarse dentro de ProjectProvider");
  return context;
}
