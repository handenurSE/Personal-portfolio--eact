import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "",
    description: "",
    image: "",
    gitUrl: " ",
  },
  {
    id: 2,
    title: "",
    description: "",
    image: "/",
    gitUrl: "/",
  },
  {
    id: 3,
    title: "",
    description: "",
    image: "/",
    gitUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <div id="projects">
        <h2 className="text-center text-4xl font-bold text-white my-4">
          My Projects
        </h2>{" "}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
