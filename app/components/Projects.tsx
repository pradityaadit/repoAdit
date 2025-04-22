import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectBackground from "../../public/assets/img/project1.png";
import ProjectBackground2 from "../../public/assets/img/project2.png";
import ProjectBackground3 from "../../public/assets/img/project3.png";
import ProjectBackground4 from "../../public/assets/img/project4.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-auto flex flex-col">
      <div>
        <h2 className="text-[20px] font-bold md:text-[40px] font-sora text-[#fbfbfb] md:leading-[72px]">
          Last Project I've Been Working On
        </h2>
      </div>
      <div className="grid p-8 md:p-12 md:grid-cols-2 gap-6">
        <ProjectItem
          title="Caffe Shop"
          backgroundImg={ProjectBackground}
          projectUrl="https://caffe-style-sheet.vercel.app/"
          tech="HTML, CSS, JavaScript"
        />
        <ProjectItem
          title="Clothes Store"
          backgroundImg={ProjectBackground2}
          projectUrl="https://luminique.vercel.app/"
          tech="HTML, CSS, JavaScript"
        />
        <ProjectItem
          title="Caffe Shop"
          backgroundImg={ProjectBackground3}
          projectUrl="https://aromaheaven-coffeshop.vercel.app/"
          tech="React JS, Tailwind"
        />
        <ProjectItem
          title="Company Profile"
          backgroundImg={ProjectBackground4}
          projectUrl="https://company-profile-sigma-pied.vercel.app/"
          tech="React JS, Tailwind"
        />
      </div>
    </div>
  );
};

export default Projects;
