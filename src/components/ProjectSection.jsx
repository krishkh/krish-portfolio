import React from "react";
import ProjectBlock from "./ProjectBlock";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 mx-24">
      <div className="text-[#FFC772] text-2xl md:text-7xl font-semibold">
        PROJECTS
      </div>
      <div className="flex flex-col gap-8">
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
        <ProjectBlock />
      </div>

      <div className="bg-white p-[0.1px] my-12"></div>
    </div>
  );
};

export default Projects;
