import { useState } from "react";
import projectsData from "../data/projects.json";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState(projectsData);

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-start gap-16 py-24 px-12 sm:px-16 md:px-24 lg:px-36"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-purple-700 dark:text-lime-400">
        ~/Projects
      </h1>
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols1 md:grid-cols-2 gap-5">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                date={project.date}
                content={project.content}
                images={project.images}
                stack={project.stack}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
